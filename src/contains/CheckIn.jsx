import React, { Component } from 'react';
import { checkinCode, giftAvailable, getToday, checkinUid } from '../api';
import UserInfo from '../components/UserInfo';
import S_S_ from './checkin.scss';
import INPUT from '../share/input.scss';
import Rx from 'rxjs/Rx';
import PubSub from 'pubsub-js';

class Checkin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      code: '',
      userinfo: null,
      gifts: [],
      // today: '',
    }

    this.toCheckin = ::this.toCheckin;
    this.onChange = ::this.onChange;

    // getToday().then(res => this.setState({ today: res.data.today }));
    if (props.location.query.uid) this.toCheckin(props.location.query.uid, true);
  }

  onChange(e) {
    const { value } = e.target;
    this.setState({ code: value });
    if (value.length >= 36) this.toCheckin(e.target.value, false);
  }

  toCheckin(value, isUid) {
    const fun = isUid ? checkinUid : checkinCode;
    fun(value)
      .then(res => {
        if (!res.data.ok) {
          this.setState({ code: '' });
          throw res.data.error;
        }
        this.setState({ userinfo: res.data.ticket, code: '' });
        this.props.openFlash('success', `${res.data.ticket.name} - 签到成功！`);
        return giftAvailable(res.data.ticket.id);
      })
      .then(res => {
        if (!res.data.ok) {
          throw res.data.error;
        }
        this.setState({ gifts: res.data.result });
      })
      .catch(err => {
        this.props.openFlash('error', err);
      })
  }

  render() {
    const { code, userinfo } = this.state;
    return (
      <div className={`container ${S_S_.checkin}`}>
        <div className={S_S_.inputWrapper}>
          <div className={S_S_.hint}>
            <label>* 扫码时-请确保焦点在输入框内</label>
            {/* <div className={S_S_.day}>GIF-第<b>{this.state.today}</b>天</div> */}
          </div>
          <input className={INPUT.input} type="password" autoFocus autoComplete="off" value={code} placeholder="Code" onChange={this.onChange} />
        </div>
        <UserInfo {...userinfo} gifts={this.state.gifts} />
      </div>
    )
  }
}


export default Checkin;
