import React from 'react';
import Container from '../../layout/Container';
import UpcomingTabContainer from './UpcomingTabContainer';

import './Upcoming.css';

const Upcoming = () => {
  return (
    <div className='right-panel'>
      <Container>
        <h2 className='page-title'>Upcoming</h2>
        <UpcomingTabContainer />
      </Container>
    </div>
  );
};

export default Upcoming;
