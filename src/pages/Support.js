import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {
  state = {
    support: '',
  };

  handleNextClick = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: 'UPDATE_SUPPORT', payload: this.state });
    this.props.history.push('/comments');
  };

  handleBackClick = (event) => {
    this.props.history.push('/feeling');
  };

  handleRadioChange = (event) => {
    this.setState({
      support: event.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleNextClick}>
        <div>
          <p>How well are you feeling supported?</p>
        </div>
        <input
          type="radio"
          name="support"
          value="1"
          checked={this.state.support === '1'}
          onChange={this.handleRadioChange}
          required
        />
        <label>1</label>
        <input
          type="radio"
          name="support"
          value="2"
          checked={this.state.support === '2'}
          onChange={this.handleRadioChange}
        />
        <label>2</label>
        <input
          type="radio"
          name="support"
          value="3"
          checked={this.state.support === '3'}
          onChange={this.handleRadioChange}
        />
        <label>3</label>
        <input
          type="radio"
          name="support"
          value="4"
          checked={this.state.support === '4'}
          onChange={this.handleRadioChange}
        />
        <label>4</label>
        <input
          type="radio"
          name="support"
          value="5"
          checked={this.state.support === '5'}
          onChange={this.handleRadioChange}
        />
        <label>5</label>
        <div>
          <button type="button" onClick={this.handleBackClick}>
            BACK
          </button>
          <button>NEXT</button>
        </div>
      </form>
    );
  }
}

export default connect()(Support);
