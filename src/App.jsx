import React, { Component } from 'react';
import { render } from 'react-dom';
import { search, checkinUid, uncheckUid, checkinCode, uncheckCode, setToday, getToday } from './api';
import { hashHistory, Router, Route, IndexRoute } from 'react-router';

import Wrapper from './components/Wrapper';
import Personal from './components/Personal';
import Checkin from './contains/Checkin';
import Search from './contains/Search';
import Admin from './contains/Admin';

import 'normalize.css';
import './global.scss';

const routes = (
  <Route path="/" component={Wrapper}>
    <IndexRoute component={Checkin} />
    <Route path="/index" component={Checkin} />
    <Route path="/search" component={Search} />
    <Route path="/admin" component={Admin} />
  </Route>
)

const App = props => {
  return (
    <Router history={hashHistory} routes={routes}></Router>
  );
}

render(<App />, document.getElementById('app'), () => {
  console.log('finish');
});
