import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReviewFeedback extends Component {
  handleSubmitClick = (event) => {
    console.log('submit btn click!');
  };

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
        <button onClick={this.handleSubmitClick}>SUBMIT</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(ReviewFeedback);
