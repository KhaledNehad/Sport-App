import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu/Menu';
import Upcoming from './components/Upcoming/Upcoming';
import Calendar from './Pages/Calendar';
import Home from './Pages/Home';
import Login from './Pages/Login';

const App = () => {
  return (
    <div className='app-container'>
      <Router>
        <Menu />
        <div className='pages-container'>
          <Switch>
            <Route path='/' exact component={() => <Home isAuth={false} />} />
            <Route path='/calendar' exact component={Calendar} isAuth={true} />
            <Route path='/login' component={Login} />
          </Switch>
        </div>
      </Router>

      <Upcoming />
    </div>
  );
};

export default App;
