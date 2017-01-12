import React, { Component } from 'react';
import { search, checkinCode, uncheckCode } from '../api';
import Rx from 'rxjs/Rx';
import PubSub from 'pubsub-js';
import _ from 'lodash';
import UUID from 'uuid-js';

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

    this.subscription = Rx.Observable.create(observer => {
      PubSub.subscribe('value change', (msg, data) => {
        observer.next(data);
      })
    })
    .debounceTime(250)
    .map(v => v.trim() !== '' ? v.trim() : '水电费水电费水电费')
    .switchMap(v => search(v))
    .retry()
    .subscribe(res => this.setState({ userList: res.data.results }))
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState({ value }, () => PubSub.publish('value change', value));
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  render() {
    const userList = _.isEmpty(this.state.userList) ? <div>没有结果!</div> : this.state.userList.map((item, index)=> {
      return (
        <Personal {...item} key={index} openFlash={this.props.openFlash}/>
      )
    });

    return (
      <div>
        <div className={`container ${S_S_.search}`}>
          <input className={INPUT.input} type="text" autoFocus autoComplete="off" value={this.state.value} placeholder="Keyword" onChange={this.handleChange} />
          {userList}
        </div>
      </div>
    )
  }
}


export default Search;
