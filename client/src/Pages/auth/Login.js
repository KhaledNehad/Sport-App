import axios from 'axios';
import React, { useState } from 'react';
import { Typography, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

import './login.css';

const initialState = {
  email: '',
  password: '',
  username: '',
  confirmPassword: '',
};
const Login = () => {
  const [formData, setFormData] = useState(initialState);
  const { email, password, username, confirmPassword } = formData;
  const [isSignup, setIsSignup] = useState(false);
  const error = false;
  const isLoading = false;

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const user = { email, password };

    try {
      const config = { headers: { 'Content-Type': 'application/json' } };
      const body = JSON.stringify(user);

      const res = await axios.post('/api/user/login', body, config);
      console.log(res.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className='container'>
      <div className='login-form'>
        <Typography variant='h6' align='left'>
          {isSignup ? 'Signup' : 'Login'}
        </Typography>
        {error && <p>{error}</p>}
        <form onSubmit={(e) => onSubmit(e)}>
          {isSignup && (
            <div className='form-input'>
              <TextField
                label='Username'
                name='username'
                value={username}
                onChange={(e) => onChange(e)}
                variant='outlined'
                required
              />
            </div>
          )}
          <div className='form-input'>
            <TextField
              label='Email'
              name='email'
              value={email}
              onChange={(e) => onChange(e)}
              variant='outlined'
              type='email'
              required
            />
          </div>
          <div className='form-input'>
            <TextField
              label='Password'
              type='password'
              name='password'
              value={password}
              required
              onChange={(e) => onChange(e)}
              variant='outlined'
            />
          </div>
          {isSignup && (
            <div className='form-input'>
              <TextField
                label='Repeat Password'
                type='password'
                name='confirmPassword'
                value={confirmPassword}
                required
                onChange={(e) => onChange(e)}
                variant='outlined'
              />
            </div>
          )}
          <div className='form-input'>
            <Button type='submit' variant='contained'>
              {isSignup ? 'Signup' : 'Login'}
            </Button>
            {isLoading && <h2>Loading..</h2>}
          </div>
          <div className='form-input'>
            {/* TODO: manage state between login/register */}

            {isSignup ? (
              <p>
                Already have an account?{' '}
                <a href='#!' onClick={switchMode}>
                  Back to login
                </a>
              </p>
            ) : (
              <p>
                Not have an account yet?{' '}
                <a href='#!' onClick={switchMode}>
                  Register now
                </a>
              </p>
            )}
          </div>
        </form>
      </div>
      <div className='login-img'></div>
    </div>
  );
};

export default Login;
