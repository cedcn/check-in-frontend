import React, { Component } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import { uncheckUid, giftAvailable, checkoutGift } from '../api';
import config from '../config';

import S_S_ from './personal.scss';
import TABLE from '../share/table.scss';

class Personal extends Component {
  constructor(props) {
    super(props);

    this.uncheck = ::this.uncheck;
    this.checkoutGift = ::this.checkoutGift;
  }

  uncheck() {
    const c = confirm("确认取消签到?");
    if (!c) return;
    uncheckUid(this.props.id)
      .then(res => {
        if (!res.data.ok) throw res.data.error;
        this.props.openFlash('success', `${this.props.name} - 已取消签到!`)
      })
      .catch(err => {
        this.props.openFlash('error', err);
      })
  }

  checkoutGift(item) {
    checkoutGift(this.props.id, item)
      .then(res => {
        if (!res.data.ok) throw res.data.error;
        this.props.openFlash('success', '领取成功！')
      })
      .catch(err => {
        this.props.openFlash('error', err);
      });
  }
  render() {
    const { id, name, phone, company, position, email, checked_at } = this.props;
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
          <div className={`${TABLE.col3} ${S_S_.operate}`}>
            {
              _.isNull(this.props.checked_at) ?
              <Link className={`${S_S_.button} ${S_S_.checkin}`} to={`/index?uid=${id}`}>签到</Link> :
              <a href="javascript:;" className={`${S_S_.button} ${S_S_.uncheck}`} onClick={this.uncheck}>取消签到</a>
            }
            <div className={S_S_.add_gift_wraper}>
              <a href="javascript:;" className={`${S_S_.unfold_button}`}>添加礼物</a>
              <div className={S_S_.gift_list}>
                {config.giftList.map((item, index) => (
                  <a href="javascript:;" key={index} onClick={() => this.checkoutGift(item)}>{item}</a>
                ))}
              </div>
            </div>
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
        </div>
      </div>
    )
  }
}

Personal.defaultProps = {
  name: '',
  phone: '',
  company: '',
  position: '',
  email: '',
  checked_at: '',
}

export default Personal;
