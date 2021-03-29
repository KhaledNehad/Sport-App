import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className='container'>
      <div className='login-form'>
        <h2>Login</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className='form-input'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              placeholder='Email'
              value={email}
              required
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className='form-input'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              placeholder='Password'
              value={password}
              required
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className='form-input'>
            <button type='submit'>Login</button>
          </div>
          <div className='form-input'>
            <p>
              Not have account yet? <Link to='/register'>Register now</Link>
            </p>
          </div>
        </form>
      </div>
      <div className='login-img'></div>
    </div>
  );
};

export default Login;
