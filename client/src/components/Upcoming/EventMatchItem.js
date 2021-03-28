import './EventMatchItem.css';

const EventMatchItem = ({ match }) => {
  const {
    homeTeamName,
    homeTeamShortcut,
    homeTeamLogo,
    homeTeamScore,
    awayTeamName,
    awayTeamShortCut,
    awayTeamLogo,
    awayTeamScore,
    leagueName,
    isLive,
    time,
    datetime,
  } = match;
  return (
    <div className='Match-item'>
      <div className='home-team'>
        <div className='home-team__logo'>
          <img src={homeTeamLogo} alt={homeTeamName} />
        </div>
        <div className='home-team__name'>{homeTeamShortcut}</div>
      </div>
      <div className='match-info'>
        {isLive ? (
          <>
            <div className='live'>Live {time}'</div>
            <div className='score'>
              {homeTeamScore} - {awayTeamScore}
            </div>
          </>
        ) : (
          <>
            <div className='date-time'>{datetime}</div>
            <div className='no-score'> -- </div>
          </>
        )}

        <div className='league-info'>{leagueName}</div>
      </div>
      <div className='away-team'>
        <div className='away-team__logo'>
          <img src={awayTeamLogo} alt={awayTeamName} />
        </div>
        <div className='away-team__name'>{awayTeamShortCut}</div>
      </div>
    </div>
  );
};

export default EventMatchItem;
