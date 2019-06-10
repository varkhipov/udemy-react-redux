import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/streamForm/StreamCreate';
import StreamEdit from './streams/streamForm/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import Header from './header/Header';

// Used custom History instance and <Router> instead of
// <BrowserRouter> with it's default History impl to be
// allowed to get History instance on demand and to
// navigate programmatically (i.e. to do redirect).
// Fo example: after creation of a new stream.
import history from '../utils/routerHistory';

// <Switch> component is used to show only StreamCreate component at '/streams/new' URL
// because normally '/streams/new' URL matches '/streams/:streamId' pattern too
// so StreamShow component also was rendered with that URL
const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={StreamList} />
            <Route exact path="/streams/new" component={StreamCreate} />
            <Route exact path="/streams/edit/:streamId" component={StreamEdit} />
            <Route exact path="/streams/delete/:streamId" component={StreamDelete} />
            <Route exact path="/streams/:streamId" component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
