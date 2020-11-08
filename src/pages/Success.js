import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Success extends Component {
  render() {
    return (
      <div>
        <h2>Success!</h2>
        <p>Your feedback has been successfully submitted.</p>
        <p>
          <Link to="/">Click here</Link> to start over.
        </p>
      </div>
    );
  }
}

export default Success;
