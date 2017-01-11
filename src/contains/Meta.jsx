import React, { Component } from 'react';
import S_S_ from './meta.scss';
import { getMeta } from '../api'

class Meta extends Component {
  constructor() {
    super();

    this.state = {
      totalUserCount: '',
      checkedUserCount: '',
    }

    getMeta()
      .then(res => this.setState({
        totalUserCount: res.data.total_user_count,
        checkedUserCount: res.data.checked_user_count
      }));
  }
  render() {
    return (
      <div className={`${S_S_.meta} container`}>
        <div className={S_S_.row}>
          已签到人数：
          <b>{this.state.checkedUserCount}</b>
          人
        </div>
        <div className={S_S_.row}>
          所有人数：
          <b>{this.state.totalUserCount}</b>
          人
        </div>
      </div>
    )
  }
}

export default Meta;
