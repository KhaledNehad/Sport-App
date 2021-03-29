import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from '../components/Menu/Menu';
import Upcoming from '../components/Upcoming/Upcoming';
import Calendar from '../Pages/Calendar';
import Home from '../Pages/Home';

const AppContainer = () => {
  return (
    <div className='app-container'>
      <Router>
        <Menu />
        <div className='pages-container'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/calendar' exact component={Calendar} isAuth={true} />
          </Switch>
        </div>
      </Router>

      <Upcoming />
    </div>
  );
};

export default AppContainer;
