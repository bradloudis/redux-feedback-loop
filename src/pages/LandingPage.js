import React, { Component } from 'react';

class LandingPage extends Component {
  onButtonClick = (event) => {
    this.props.history.push('/feeling');
  };

  render() {
    return (
      <div>
        <h2>Click the button to begin submitting feedback!</h2>
        <button onClick={this.onButtonClick}>Start!</button>
      </div>
    );
  }
}

export default LandingPage;
