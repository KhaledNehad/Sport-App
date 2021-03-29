import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Login from './Pages/auth/Login';
import Routes from './components/routes/Routes';
import Register from './Pages/auth/Register';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
        <Route component={Routes} />
      </Switch>
    </Router>
  );
};

export default App;
