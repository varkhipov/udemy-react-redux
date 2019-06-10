import React from 'react';
import './Spinner.css';

const Spinner = ({ message }) => {
  return (
    <div className="spinner">
      <div className="ui active dimmer">
        <div className="ui big text loader">
          { message }
        </div>
      </div>
    </div>
  );
};

Spinner.defaultProps = {
  message: 'Loading...'
};

export default Spinner;
