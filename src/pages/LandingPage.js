import React, { Component } from 'react';
import { connect } from 'react-redux';

// MATERIAL UI
import { Button } from '@material-ui/core';

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
        <Button variant="contained" onClick={this.onButtonClick}>
          START!
        </Button>
      </div>
    );
  }
}

export default connect()(LandingPage);
