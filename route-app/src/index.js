import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import One from './One';
import Two from './Two';
import registerServiceWorker from './registerServiceWorker';

import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

ReactDOM.render(
    <Router history= {browserHistory}>
        <Route path="/" component={App}></Route>
        <Route path="/One" component={One}></Route>
        <Route path="/Two" component={Two}></Route>
    </Router>
    
    
    , document.getElementById('root'));
registerServiceWorker();
