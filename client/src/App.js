import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Login from './Pages/auth/Login';
import Routes from './components/helper/Routes';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/login' exact component={Login} />
        <Route component={Routes} />
      </Switch>
    </Router>
  );
};

export default App;
