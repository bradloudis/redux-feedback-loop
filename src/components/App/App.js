import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

// google font
import 'fontsource-abel';

// Components
// ------------------
import Header from '../Header/Header';

// Page Views
// ------------------
import LandingPage from '../../pages/LandingPage';
import Feeling from '../../pages/Feeling';
import Understanding from '../../pages/Understanding';
import Support from '../../pages/Support';
import Comments from '../../pages/Comments';
import ReviewFeedback from '../../pages/ReviewFeedback';
import Success from '../../pages/Success';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Router>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/feeling" component={Feeling} />
          <Route exact path="/understanding" component={Understanding} />
          <Route exact path="/support" component={Support} />
          <Route exact path="/comments" component={Comments} />
          <Route exact path="/review" component={ReviewFeedback} />
          <Route exact path="/success" component={Success} />
        </Router>
      </div>
    );
  }
}

export default App;
