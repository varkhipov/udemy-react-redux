import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="ui container" style={{ marginTop: "5px" }}>
      {children}
    </div>
  );
};

export default Container;
