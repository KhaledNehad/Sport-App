import React from 'react';
import EventMatchItem from './EventMatchItem';
import './UpcomingTabContainer.css';

import { matches } from './_matchData';

const UpcomingTabContainer = () => {
  return (
    <div className='upcoming-tab'>
      <div className='upcoming-tab__header'>
        <ul>
          <li>Today</li>
          <li style={{ color: '#ccc' }}>Tomorrow</li>
        </ul>
      </div>
      {matches.map((match) => (
        <EventMatchItem key={match.matchId} match={match} />
      ))}

      {/* <EventMatchItem
        homeTeam='LFC'
        awayTeam='ARS'
        isStart='true'
        startTime=''
        time='72'
        league='Premier League'
        homeTeamScore='3'
        awayTeamScore='2'
      /> */}
    </div>
  );
};

export default UpcomingTabContainer;
