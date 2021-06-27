import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './pages/Login';
import Home from './pages/Home';
import HiringSuper from './pages/HiringSuper';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
  <Router>
    <Route exact path="/" component={Home}/>
    <Route path="/login" component={Login}/> 
    <Route path="/search/:who" component={HiringSuper}/> 

  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
