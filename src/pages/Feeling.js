import React, { Component } from 'react';

class Feeling extends Component {
  onButtonClick = (event) => {
    this.props.history.push('/understanding');
  };

  render() {
    return (
      <div>
        <p>How are you feeling today?</p>
        <button onClick={this.onButtonClick}>Next</button>
      </div>
    );
  }
}

export default Feeling;
