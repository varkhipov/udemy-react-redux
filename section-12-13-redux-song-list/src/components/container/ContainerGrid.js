import React from 'react';

const ContainerGrid = ({ children }) => {
  return (
    <div className="ui container grid" style={{ marginTop: "5px" }}>
      {children}
    </div>
  );
};

export default ContainerGrid;
