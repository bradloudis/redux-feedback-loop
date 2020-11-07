import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {
  state = {
    feeling: '',
  };

  onButtonClick = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: 'UPDATE_FEELING', payload: this.state });
    this.props.history.push('/understanding');
  };

  handleRadioChange = (event) => {
    this.setState({
      feeling: event.target.value,
    });
  };

  render() {
    return (
      <form>
        <div>
          <p>How are you feeling today?</p>
        </div>
        <div>
          <input
            type="radio"
            name="feeling"
            value="1"
            checked={this.state.feeling === '1'}
            onChange={this.handleRadioChange}
            required
          />
          <label>1</label>
        </div>
        <div>
          <input
            type="radio"
            name="feeling"
            value="2"
            checked={this.state.feeling === '2'}
            onChange={this.handleRadioChange}
          />
          <label>2</label>
        </div>
        <div>
          <input
            type="radio"
            name="feeling"
            value="3"
            checked={this.state.feeling === '3'}
            onChange={this.handleRadioChange}
          />
          <label>3</label>
        </div>
        <div>
          <input
            type="radio"
            name="feeling"
            value="4"
            checked={this.state.feeling === '4'}
            onChange={this.handleRadioChange}
          />
          <label>4</label>
        </div>
        <div>
          <input
            type="radio"
            name="feeling"
            value="5"
            checked={this.state.feeling === '5'}
            onChange={this.handleRadioChange}
          />
          <label>5</label>
        </div>
        <button onClick={this.onButtonClick}>Next</button>
      </form>
    );
  }
}

export default connect()(Feeling);
