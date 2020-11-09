import React, { Component } from 'react';
import { connect } from 'react-redux';

// MATERIAL UI
import { Button } from '@material-ui/core';

class LandingPage extends Component {
  // local state default is empty strings for all values
  state = {
    feeling: '',
    understanding: '',
    support: '',
    comments: '',
  };

  // page load
  componentDidMount() {
    this.resetReducer();
  }

  // dispatch local state to reset global state
  resetReducer() {
    this.props.dispatch({ type: 'RESET_REDUCER', payload: this.state });
  }

  // direct to next page view
  onButtonClick = (event) => {
    this.props.history.push('/feeling');
  };

  render() {
    return (
      <div>
        <h2>Click the button to begin submitting feedback!</h2>
        <Button variant="contained" onClick={this.onButtonClick}>
          START!
        </Button>
      </div>
    );
  }
}

export default connect()(LandingPage);
