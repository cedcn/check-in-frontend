import React, { Component } from 'react';
import { setToday, getToday } from '../api';

import S_S_ from './admin.scss';

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
      <div className={`${S_S_.admin} container`}>
        <label>设置活动天次：</label>
        <select value={this.state.today} onChange={this.handleChange}>
          <option value="1">第1天</option>
          <option value="2">第2天</option>
          <option value="3">第3天</option>
        </select>
      </div>
    )
  }
}

export default Admin;
