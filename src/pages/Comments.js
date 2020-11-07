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

  onButtonClick = (event) => {
    this.props.dispatch({ type: 'UPDATE_COMMENTS', payload: this.state });
    this.props.history.push('/review');
  };

  render() {
    return (
      <div>
        <p>Any comments you want to leave?</p>
        <input
          onChange={this.onCommentChange}
          placeholder="Leave your comments here"
        ></input>
        <button onClick={this.onButtonClick}>DONE!</button>
      </div>
    );
  }
}

export default connect()(Comments);
