// import React and ReactDOM libs
// (curly braces are needed for named exports and are not needed for default exports)
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/app/App';
import reducers from './reducers';

// Take React Component and show in on the screen
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector('#root')
);

