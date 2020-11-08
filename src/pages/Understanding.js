import React, { Component } from 'react';
import { connect } from 'react-redux';

// MATERIAL UI
import { Button } from '@material-ui/core';

class Understanding extends Component {
  state = {
    understanding: '',
  };

  handleNextClick = (event) => {
    event.preventDefault();
    // conditional check to make sure a radio btn has been selected
    if (this.state.understanding !== '') {
      this.props.dispatch({
        type: 'UPDATE_UNDERSTANDING',
        payload: this.state,
      });
      this.props.history.push('/support');
    } else {
      // alert user to select a radio btn
      alert('please fill in da bubble!');
    }
  };

  handleBackClick = (event) => {
    this.props.history.push('/feeling');
  };

  handleRadioChange = (event) => {
    this.setState({
      understanding: event.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleNextClick}>
        <div>
          <h2>Understanding</h2>
          <p>How well are you understanding the content?</p>
        </div>
        <input
          type="radio"
          name="understanding"
          value="1"
          checked={this.state.understanding === '1'}
          onChange={this.handleRadioChange}
        />
        <label>1</label>
        <input
          type="radio"
          name="understanding"
          value="2"
          checked={this.state.understanding === '2'}
          onChange={this.handleRadioChange}
        />
        <label>2</label>
        <input
          type="radio"
          name="understanding"
          value="3"
          checked={this.state.understanding === '3'}
          onChange={this.handleRadioChange}
        />
        <label>3</label>
        <input
          type="radio"
          name="understanding"
          value="4"
          checked={this.state.understanding === '4'}
          onChange={this.handleRadioChange}
        />
        <label>4</label>
        <input
          type="radio"
          name="understanding"
          value="5"
          checked={this.state.understanding === '5'}
          onChange={this.handleRadioChange}
        />
        <label>5</label>
        <div>
          <Button variant="contained" onClick={this.handleBackClick}>
            BACK
          </Button>
          <Button variant="contained" type="submit">
            NEXT
          </Button>
        </div>
      </form>
    );
  }
}

export default connect()(Understanding);
