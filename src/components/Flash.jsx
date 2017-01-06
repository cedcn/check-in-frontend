import React from 'react';
import S_S_ from './flash.scss';

const Flash = props => {
  const { message, msgType, isOpenFlash } = props;

  return (
    <div className={`${S_S_.flash} ${ isOpenFlash ? S_S_.open : '' } ${S_S_[msgType]}`}>
      {message}
    </div>
  )
}

export default Flash;
