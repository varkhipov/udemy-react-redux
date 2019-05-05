// import React and ReactDOM libs
import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import Comment from './Comment';
import ApprovalCard from './ApprovalCard';

// create React Component
function App() {
  return (
    <div className="ui container comments" style={{marginTop: "5px"}}>
      <ApprovalCard>
        <div>
          <h4>Warning</h4>
          Are you sure?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <Comment avatar={Faker.image.avatar()}
                 author="Jack"
                 timeAgo="Today at 6:00PM"
                 content="Some blog post"/>
      </ApprovalCard>
    </div>
  )
}

// Take React Component and show in on the screen
ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);

