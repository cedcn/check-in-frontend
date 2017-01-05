import React, { Component } from 'react';
import { setToday, getToday } from '../api';

class Admin extends Component {
  constructor() {
    super();

    this.state = {
      today: ''
    }

    getToday().then(res => {
      this.setState({ today: res.data.today });
    })

    this.handleChange = ::this.handleChange;
  }

  handleChange(e) {
    this.setState({ today: e.target.value });
    setToday(e.target.value)
      .then(res => console.log(res))
  }

  render() {
    return (
      <div>
        <select value={this.state.today} onChange={this.handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <input type="text" value={this.state.today} onChange={this.handleChange} />
      </div>
    )
  }
}

export default Admin;
