import React from 'react';

function Container(props) {
  return (
    <div className="ui container" style={{ marginTop: "5px" }}>
      {props.children}
    </div>
  );
}

export default Container;
