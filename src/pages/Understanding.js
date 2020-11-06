import React, { Component } from 'react';

class Understanding extends Component {
  onButtonClick = (event) => {
    this.props.history.push('/support');
  };

  render() {
    return (
      <div>
        <p>How well are you understanding the content?</p>
        <button onClick={this.onButtonClick}>Next</button>
      </div>
    );
  }
}

export default Understanding;
