import React, { Component } from 'react';
import { connect } from 'react-redux';

// MATERIAL UI
import { Button } from '@material-ui/core';

class Comments extends Component {
  state = {
    comments: '',
  };

  onCommentChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleNextClick = (event) => {
    this.props.dispatch({ type: 'UPDATE_COMMENTS', payload: this.state });
    this.props.history.push('/review');
  };

  handleBackClick = (event) => {
    this.props.history.push('/support');
  };

  render() {
    return (
      <div>
        <p>Any comments you want to leave?</p>
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
