import React from 'react';
import { Router, Route } from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import Header from './header/Header';

// Used custom History instance and <Router> instead of
// <BrowserRouter> with it's default History impl to be
// allowed to get History instance on demand and to
// navigate programmatically (i.e. to do redirect).
// Fo example: after creation of a new stream.
import history from '../utils/routerHistory';


const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route exact path="/" component={StreamList} />
          <Route path="/streams/new" component={StreamCreate} />
          <Route path="/streams/edit/:streamId" component={StreamEdit} />
          <Route path="/streams/delete/:streamId" component={StreamDelete} />
          <Route path="/streams/show/:streamId" component={StreamShow} />
        </div>
      </Router>
    </div>
  );
};

export default App;
