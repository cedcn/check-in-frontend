import React, { Component } from 'react';
import { search, checkinCode, uncheckCode } from '../api';
import Rx from 'rxjs/Rx';
import PubSub from 'pubsub-js';
import _ from 'lodash';

import Personal from '../components/Personal';
import S_S_ from './search.scss';
import INPUT from '../share/input.scss';


class Search extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      userList: []
    }

    this.handleChange = ::this.handleChange;

    Rx.Observable.create(observer => {
      PubSub.subscribe('value change', (msg, data) => {
        observer.next(data)
      })
    })
    .debounceTime(250)
    .map(v => v.trim() !== '' ? v.trim() : '水电费水电费水电费')
    .switchMap(v => search(v))
    .retry()
    .subscribe(res => this.setState({ 'userList': res.data.results }))
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState({ value }, () => PubSub.publish('value change', value) );
  }

  render() {
    const userList = _.isEmpty(this.state.userList) ? <div>没有结果</div> : this.state.userList.map((item, index)=> {
      return (
        <Personal {...item} key={index}/>
      )
    });

    return (
      <div>
        <div className={`container ${S_S_.search}`}>
          <input className={INPUT.input} type="text" autoFocus autoComplete="off" value={this.state.value} placeholder="Keyword" onChange={this.handleChange} />
          {userList}
        </div>
        {/* <a onClick={() => checkinCode('ffde0774-0337-43cc-9b7a-e97e0acc6271').then(data => console.log(data))}>签到</a> */}
        {/* <a onClick={() => uncheckCode('ffde0774-0337-43cc-9b7a-e97e0acc6271').then(data => console.log(data))}>取消签到</a> */}
      </div>
    )
  }
}


export default Search;
