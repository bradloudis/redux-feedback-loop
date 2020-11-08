import React, { Component } from 'react';
import { connect } from 'react-redux';

class LandingPage extends Component {
  state = {
    feeling: '',
    understanding: '',
    support: '',
    comments: '',
  };

  onButtonClick = (event) => {
    this.props.history.push('/feeling');
  };

  componentDidMount() {
    this.resetReducer();
  }

  resetReducer() {
    this.props.dispatch({ type: 'RESET_REDUCER', payload: this.state });
  }

  render() {
    return (
      <div>
        <h2>Click the button to begin submitting feedback!</h2>
        <button onClick={this.onButtonClick}>START!</button>
      </div>
    );
  }
}

export default connect()(LandingPage);
