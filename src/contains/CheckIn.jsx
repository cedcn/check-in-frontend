import React, { Component } from 'react';
import { checkinCode, uncheckCode, giftAvailable, getToday } from '../api';
import UserInfo from '../components/UserInfo';
import S_S_ from './checkin.scss';
import INPUT from '../share/input.scss';

class Checkin extends Component {
  constructor() {
    super();

    this.state = {
      code: '',
      userinfo: null,
      gifts: [],
      today: '',
    }

    getToday().then(res => {
      console.log(res);
      this.setState({ today: res.data.today });
    })
    this.handleChange = ::this.handleChange;
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState({ code: value });
    checkinCode(value)
      .then(res => {
        console.log(res);
        if (res.data.ok) {
          this.setState({ userinfo: res.data.ticket, code: '' });
          giftAvailable(res.data.ticket.id)
            .then(res => {
              console.log(res);
              if (res.data.ok) {
                this.setState({ gifts: res.data.result });
              } else {
                console.log(res.data.error);
              }
            }, err => {
              console.log(err);
            });
        } else {
          this.setState({ userinfo: null, code: '' });
          console.log(res.data.error);
        }
      }, err => {
        console.log(err);
      })
  }

  render() {
    const { code, userinfo } = this.state;
    return (
      <div className={`container ${S_S_.checkin}`}>
        <div className={S_S_.inputWrapper}>
          <label>* 扫码时-请确保焦点在输入框内</label>
          <div>{`第${this.state.today}天`}</div>
          <input className={INPUT.input} type="text" autoFocus autoComplete="off" value={code} placeholder="Code" onChange={this.handleChange} />
        </div>
        <UserInfo {...userinfo} gifts={this.state.gifts} />
        <a onClick={() => checkinCode('f3263fa7-2b00-40f0-ab96-0004d1f4b1e0').then(data => console.log(data))}>签到</a>
        <a onClick={() => uncheckCode('073d1949-d44c-4546-bf39-ca556edf2265').then(data => console.log(data))}>取消签到</a>
      </div>
    )
  }
}


export default Checkin;
