import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import React from 'react';
import ReactDOM from 'react-dom';
import Moment from 'react-moment';
import moment from 'moment';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App/>
  </Router>,
  document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
