import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

// Components
// ------------------
import Header from '../Header/Header';

// Page Views
// ------------------
import LandingPage from '../../pages/LandingPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Router>
          <Route exact path="/" component={LandingPage} />
        </Router>
      </div>
    );
  }
}

export default App;
