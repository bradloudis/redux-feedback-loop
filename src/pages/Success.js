import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// SWEET ALERT
import Swal from 'sweetalert2';
class Success extends Component {
  componentDidMount() {
    Swal.fire({
      title: 'Success!',
      text: 'Your feedback has been saved!',
      icon: 'success',
      timer: 2000,
      showCancelButton: false,
      showConfirmButton: false,
    });
  }

  render() {
    return (
      <div>
        <h2>Success!</h2>
        <h4>
          <Link to="/">Click here</Link> to start over.
        </h4>
      </div>
    );
  }
}

export default Success;
