import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {
  state = {
    support: '',
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: 'UPDATE_SUPPORT', payload: this.state });
    this.props.history.push('/comments');
  };

  handleRadioChange = (event) => {
    this.setState({
      support: event.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <p>How well are you feeling supported?</p>
        </div>
        <div>
          <input
            type="radio"
            name="support"
            value="1"
            checked={this.state.support === '1'}
            onChange={this.handleRadioChange}
            required
          />
          <label>1</label>
        </div>
        <div>
          <input
            type="radio"
            name="support"
            value="2"
            checked={this.state.support === '2'}
            onChange={this.handleRadioChange}
          />
          <label>2</label>
        </div>
        <div>
          <input
            type="radio"
            name="support"
            value="3"
            checked={this.state.support === '3'}
            onChange={this.handleRadioChange}
          />
          <label>3</label>
        </div>
        <div>
          <input
            type="radio"
            name="support"
            value="4"
            checked={this.state.support === '4'}
            onChange={this.handleRadioChange}
          />
          <label>4</label>
        </div>
        <div>
          <input
            type="radio"
            name="support"
            value="5"
            checked={this.state.support === '5'}
            onChange={this.handleRadioChange}
          />
          <label>5</label>
        </div>
        <button>Next</button>
      </form>
    );
  }
}

export default connect()(Support);
