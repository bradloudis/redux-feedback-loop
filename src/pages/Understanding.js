import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {
  state = {
    understanding: '',
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: 'UPDATE_UNDERSTANDING', payload: this.state });
    this.props.history.push('/support');
  };

  handleRadioChange = (event) => {
    this.setState({
      understanding: event.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <p>How well are you understanding the content?</p>
        </div>
        <div>
          <input
            type="radio"
            name="understanding"
            value="1"
            checked={this.state.understanding === '1'}
            onChange={this.handleRadioChange}
            required
          />
          <label>1</label>
        </div>
        <div>
          <input
            type="radio"
            name="understanding"
            value="2"
            checked={this.state.understanding === '2'}
            onChange={this.handleRadioChange}
          />
          <label>2</label>
        </div>
        <div>
          <input
            type="radio"
            name="understanding"
            value="3"
            checked={this.state.understanding === '3'}
            onChange={this.handleRadioChange}
          />
          <label>3</label>
        </div>
        <div>
          <input
            type="radio"
            name="understanding"
            value="4"
            checked={this.state.understanding === '4'}
            onChange={this.handleRadioChange}
          />
          <label>4</label>
        </div>
        <div>
          <input
            type="radio"
            name="understanding"
            value="5"
            checked={this.state.understanding === '5'}
            onChange={this.handleRadioChange}
          />
          <label>5</label>
        </div>
        <button>Next</button>
      </form>
    );
  }
}

export default connect()(Understanding);
