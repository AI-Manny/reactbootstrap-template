import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory as history } from 'react-router';

import AppLayout from './layouts/AppLayout.jsx';
import PublicLayout from './layouts/PublicLayout.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import MainPage from './pages/MainPage.jsx'

const router = (
  <Router history={history}>
    <Route path="/" component={AppLayout}>
      <Route component={PublicLayout}>
        <IndexRoute component={MainPage} />
        <Route path="main" component={MainPage} />
      </Route>
    </Route>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(router, document.getElementById('app'));
});
