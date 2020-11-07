import React, { Component } from 'react';

class Comments extends Component {
  state = {
    comments: '',
  };

  onCommentChange = (event) => {
    this.setState(
      {
        comments: event.target.value,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    return (
      <div>
        <p>Any comments you want to leave?</p>
        <input
          onChange={this.onCommentChange}
          placeholder="Leave your comments here"
        ></input>
        <button>DONE!</button>
      </div>
    );
  }
}

export default Comments;
