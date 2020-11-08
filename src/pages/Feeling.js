import React, { Component } from 'react';
import { connect } from 'react-redux';

// SWEET ALERT
import Swal from 'sweetalert2';
// MATERIAL UI
import { Button } from '@material-ui/core';

class Feeling extends Component {
  state = {
    feeling: '',
  };

  handleNextClick = (event) => {
    event.preventDefault();
    // conditional check to make sure a radio btn has been selected
    if (this.state.feeling !== '') {
      this.props.dispatch({ type: 'UPDATE_FEELING', payload: this.state });
      this.props.history.push('/understanding');
    } else {
      // alert user to select a radio btn
      Swal.fire({
        title: 'Uh-oh!',
        text: 'You forgot to choose a number!',
        icon: 'warning',
        confirmButtonText: 'Try again!',
      });
    }
  };

  handleBackClick = (event) => {
    this.props.history.push('/');
  };

  handleRadioChange = (event) => {
    this.setState({
      feeling: event.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleNextClick}>
        <div>
          <h2>Feeling</h2>
          <p>How are you feeling today?</p>
        </div>
        <input
          type="radio"
          name="feeling"
          value="1"
          checked={this.state.feeling === '1'}
          onChange={this.handleRadioChange}
        />
        <label>1</label>
        <input
          type="radio"
          name="feeling"
          value="2"
          checked={this.state.feeling === '2'}
          onChange={this.handleRadioChange}
        />
        <label>2</label>
        <input
          type="radio"
          name="feeling"
          value="3"
          checked={this.state.feeling === '3'}
          onChange={this.handleRadioChange}
        />
        <label>3</label>
        <input
          type="radio"
          name="feeling"
          value="4"
          checked={this.state.feeling === '4'}
          onChange={this.handleRadioChange}
        />
        <label>4</label>
        <input
          type="radio"
          name="feeling"
          value="5"
          checked={this.state.feeling === '5'}
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

export default connect()(Feeling);
