import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class ReviewFeedback extends Component {
  handleSubmitClick = (event) => {
    console.log('submit btn click!');
    this.saveNewFeedback();
  };

  handleBackClick = (event) => {
    this.props.history.push('/comments');
  };

  saveNewFeedback() {
    axios
      .post('/feedback', this.props.store.feedbackReducer)
      .then((response) => {
        console.log('OK');
        this.props.history.push('/success');
      })
      .catch((err) => {
        console.log(err);
        alert('Your feedback was not saved, please try again!');
      });
  }

  render() {
    return (
      <div>
        <p>Review your feedback and submit!</p>
        <p>
          feeling: <span>{this.props.store.feedbackReducer.feeling}</span>
        </p>
        <p>
          understanding:
          <span>{this.props.store.feedbackReducer.understanding}</span>
        </p>
        <p>
          support: <span>{this.props.store.feedbackReducer.support}</span>
        </p>
        <p>
          comments: <span>{this.props.store.feedbackReducer.comments}</span>
        </p>
        <button onClick={this.handleBackClick}>BACK</button>
        <button onClick={this.handleSubmitClick}>SUBMIT</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(ReviewFeedback);
