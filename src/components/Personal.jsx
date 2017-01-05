import React, { Component } from 'react';
import S_S_ from './personal.scss';
import TABLE from '../share/table.scss';

class Personal extends Component {
  render() {
    const { name, phone, company, position, email, checked_at } = this.props;
    return (
      <div className={S_S_.personal}>
        <div className={TABLE.row}>
          <div className={TABLE.col3}>
            <label>姓 名:</label>
            <div className={TABLE.value}>{name}</div>
          </div>
          <div className={TABLE.col3}>
            <label>电 话:</label>
            <div className={TABLE.value}>{phone}</div>
          </div>
        </div>
        <div className={TABLE.row}>
          <div className={TABLE.col3}>
            <label>公 司:</label>
            <div className={TABLE.value}>{company}</div>
          </div>
          <div className={TABLE.col3}>
            <label>职 位:</label>
            <div className={TABLE.value}>{position}</div>
          </div>
          <div className={TABLE.col3}>
            <label>email:</label>
            <div className={TABLE.value}>{email}</div>
          </div>
        </div>
      </div>
    )
  }
}

Personal.defaultProps = {
  name: '无',
  phone: '无',
  company: '无',
  position: '无',
  email: '无',
  checked_at: '无',
}

export default Personal;
