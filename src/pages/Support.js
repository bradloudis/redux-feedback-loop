import React, { Component } from 'react';
import { connect } from 'react-redux';

// SWEET ALERT
import Swal from 'sweetalert2';
// MATERIAL UI
import { Button } from '@material-ui/core';

class Support extends Component {
  state = {
    support: '',
  };

  handleNextClick = (event) => {
    event.preventDefault();
    // conditional check to make sure a radio btn has been selected
    if (this.state.support !== '') {
      this.props.dispatch({ type: 'UPDATE_SUPPORT', payload: this.state });
      this.props.history.push('/comments');
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
    this.props.history.push('/understanding');
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
          <h2>Support</h2>
          <p>How well are you feeling supported?</p>
        </div>
        <input
          type="radio"
          name="support"
          value="1"
          checked={this.state.support === '1'}
          onChange={this.handleRadioChange}
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

export default connect()(Support);
