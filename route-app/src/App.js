import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Router Class</h1>
        </header>

          <ul>
            <li><link to="/One">One</link></li>
            <li><link to="/Two">Two</link></li>
          </ul>
      </div>
    );
  }
} 

export default App;
