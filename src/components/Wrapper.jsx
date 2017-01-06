import React, { Component } from 'react';
import Header from './Header';
import Flash from './Flash';

let timer;
class Wrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpenFlash: false,
      message: '',
      msgType: 'success'
    }

    this.openFlash = ::this.openFlash;
    this.closeFlash = ::this.closeFlash;
  }

  openFlash(msgType, message) {
    clearTimeout(timer);
    this.setState({ isOpenFlash: true, message, msgType });
    timer = setTimeout(() => {
      this.setState({ isOpenFlash: false });
      clearTimeout(timer);
    }, 2000);
  }

  closeFlash() {
    this.setState({ isOpenFlash: false });
  }

  render() {
    const { children, ...other } = this.props;
    return (
      <div>
        <Header />
        <Flash {...this.state} closeFlash={this.closeFlash} />
        {children && React.cloneElement(children, { ...other, openFlash: this.openFlash, closeFlash: this.closeFlash })}
      </div>
    )
  }
}

export default Wrapper;
