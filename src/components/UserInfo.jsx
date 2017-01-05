import React, { Component } from 'react';
import S_S_ from './user_info.scss';
import TABLE from '../share/table.scss';

class UserInfo extends Component {
  render() {
    const { name, phone, company, position, email, checked_at, tickets, gifts } = this.props;

    const ticketsInfo = _.reduce(tickets, (result, item, key) => {
      (result['ticketNames'] || (result['ticketNames'] = [])).push(item.name);
      (result['days'] || (result['days'] = [])).push({ day:item.days, isSeat: !item.free });
      return result;
    }, {});

    const ticketNames = !_.isEmpty(ticketsInfo) ? ticketsInfo.ticketNames.join(', ') : '';
    const days = !_.isEmpty(ticketsInfo) ?
                  _.orderBy(ticketsInfo.days, 'day', 'asc')
                    .map(item => `${item.day}-(${item.isSeat ? '有座' : '无座'})`)
                    .join(', ') : '';

    return (
      <div className={S_S_.user_info}>
        <div className={TABLE.row}>
          <div className={TABLE.col2}>
            <label>姓 名:</label>
            <div className={TABLE.value}>{name}</div>
          </div>
          <div className={TABLE.col2}>
            <label>电 话:</label>
            <div className={TABLE.value}>{phone}</div>
          </div>
        </div>
        <div className={TABLE.row}>
          <div className={TABLE.col2}>
            <label>公 司:</label>
            <div className={TABLE.value}>{company}</div>
          </div>
          <div className={TABLE.col2}>
            <label>职 位:</label>
            <div className={TABLE.value}>{position}</div>
          </div>
        </div>
        <div className={TABLE.row}>
          <label>email:</label>
          <div className={TABLE.value}>{email}</div>
        </div>
        <div className={TABLE.row}>
          <label>票 类:</label>
          <div className={TABLE.value}>{ticketNames}</div>
        </div>
        <div className={TABLE.row}>
          <div className={TABLE.col6}>
            <label>进场天数:</label>
            <div className={TABLE.value}>{days}</div>
          </div>
        </div>
        <div className={TABLE.row}>
          <label>礼 物:</label>
          <div className={TABLE.value}>{gifts.join(', ')}</div>
        </div>
      </div>
    )
  }
}

UserInfo.defaultProps = {
  name: '',
  phone: '',
  company: '',
  position: '',
  email: '',
  checked_at: '',
  tickets: [],
  gifts: []
}

export default UserInfo;
