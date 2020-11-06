import React, { Component } from 'react';

class Support extends Component {
  onButtonClick = (event) => {
    this.props.history.push('/comments');
  };

  render() {
    return (
      <div>
        <p>How well are you feeling supported?</p>
        <button onClick={this.onButtonClick}>Next</button>
      </div>
    );
  }
}

export default Support;
