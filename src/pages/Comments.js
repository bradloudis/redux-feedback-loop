import React, { Component } from 'react';
import { connect } from 'react-redux';

// MATERIAL UI
import { Button } from '@material-ui/core';

class Comments extends Component {
  state = {
    comments: '',
  };

  // tracking text input on local state
  onCommentChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  // dispatch local state and direct to next page view
  handleNextClick = (event) => {
    this.props.dispatch({ type: 'UPDATE_COMMENTS', payload: this.state });
    this.props.history.push('/review');
  };

  // direct to previous page view
  handleBackClick = (event) => {
    this.props.history.push('/support');
  };

  render() {
    return (
      <div>
        <div>
          <h2>Comments</h2>
          <p>Any comments you want to leave?</p>
        </div>
        <input
          type="text"
          onChange={this.onCommentChange}
          placeholder="Leave your comments here"
        ></input>
        <div>
          <Button variant="contained" onClick={this.handleBackClick}>
            BACK
          </Button>
          <Button variant="contained" onClick={this.handleNextClick}>
            NEXT
          </Button>
        </div>
      </div>
    );
  }
}

export default connect()(Comments);
