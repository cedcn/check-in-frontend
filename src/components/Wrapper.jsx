import React from 'react';
import Header from './Header.jsx';

const Wrapper = props => {
  const { children, ...other } = props;
  return (
    <div>
      <Header />
      {props.children && React.cloneElement(children, { ...other })}
    </div>
  )
}

export default Wrapper;
