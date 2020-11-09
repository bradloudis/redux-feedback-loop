import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

// SWEET ALERT
import Swal from 'sweetalert2';
// MATERIAL UI
import { Button } from '@material-ui/core';

class ReviewFeedback extends Component {
  // utilizing sweet alert to confirm submission
  handleSubmitClick = (event) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Click the submit button to save your feedback.',
      icon: 'question',
      confirmButtonText: `Save`,
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this.saveNewFeedback();
      }
    });
  };

  // direct to previous page view
  handleBackClick = (event) => {
    this.props.history.push('/comments');
  };

  // AXIOS POST to save feedback in the database
  // .then directs to next page view
  saveNewFeedback() {
    axios
      .post('/feedback', this.props.store.feedbackReducer)
      .then((response) => {
        this.props.history.push('/success');
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: 'UH-OH!',
          text: 'There was a problem with the database!',
          icon: 'error',
        });
      });
  }

  render() {
    return (
      <div>
        <div>
          <h2>Review</h2>
          <p>Review your feedback and submit!</p>
        </div>
        <p>
          feeling: <span>{this.props.store.feedbackReducer.feeling}</span>
        </p>
        <p>
          understanding:{' '}
          <span>{this.props.store.feedbackReducer.understanding}</span>
        </p>
        <p>
          support: <span>{this.props.store.feedbackReducer.support}</span>
        </p>
        <p>
          comments: <span>{this.props.store.feedbackReducer.comments}</span>
        </p>
        <Button variant="contained" onClick={this.handleBackClick}>
          BACK
        </Button>
        <Button variant="contained" onClick={this.handleSubmitClick}>
          SUBMIT
        </Button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(ReviewFeedback);
