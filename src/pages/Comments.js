import React, { Component } from 'react';
import { connect } from 'react-redux';

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
          <button onClick={this.handleBackClick}>BACK</button>
          <button onClick={this.handleNextClick}>NEXT</button>
        </div>
      </div>
    );
  }
}

export default connect()(Comments);
