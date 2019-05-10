import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
  summer: {
    text: 'Let\'s hit beach',
    iconName: 'sun'
  },
  winter: {
    text: 'It\'s chilly',
    iconName: 'snowflake'
  }
};

function getSeason(lat, month) {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  }
  else {
    return lat > 0 ? 'winter' : 'summer';
  }
}

// get lat from { props }
const SeasonDisplay = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={ `season-display ${ season }` }>
      <i className={ `icon-left massive ${ iconName } icon` }/>
      <h2>{ text }</h2>
      <i className={ `icon-right massive ${ iconName } icon` }/>
    </div>
  );
};

export default SeasonDisplay;
