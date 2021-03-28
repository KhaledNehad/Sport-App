import { NavLink } from 'react-router-dom';

import './Menu.css';

import profileImage from './../../assets/images/profile2.jpeg';
import logo from './../../assets/images/logo.svg';
import HomeIcon from '@material-ui/icons/Home';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import GroupIcon from '@material-ui/icons/Group';
import ForumIcon from '@material-ui/icons/Forum';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';

const Menu = () => {
  return (
    <div className='right-menu'>
      <div className='menu-container'>
        <div className='main-menu'>
          <img src={logo} width='38px' alt='Logo' />

          <NavLink to='/' exact className='menu__item'>
            <HomeIcon fontSize='small' />
          </NavLink>

          <NavLink to='/calendar' className='menu__item'>
            <CalendarTodayIcon fontSize='small' />
          </NavLink>

          <NavLink to='/events' className='menu__item'>
            <SportsSoccerIcon fontSize='small' />
          </NavLink>

          <NavLink to='/friends' className='menu__item'>
            <GroupIcon fontSize='small' />
          </NavLink>

          <NavLink to='/chat' className='menu__item'>
            <ForumIcon fontSize='small' />
          </NavLink>
        </div>

        <div className='user-info'>
          <ul>
            <span>&nbsp;</span>
            <li className='user-info__item'>
              <a href='#!'>
                <SearchIcon />
              </a>
            </li>
            <li className='user-info__item'>
              <a href='#!'>
                <SettingsIcon />
              </a>
            </li>
            <li className='user-info__items'>
              <img className='user-profile' src={profileImage} alt='profile' />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
