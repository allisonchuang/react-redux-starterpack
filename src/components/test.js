import React from 'react';
import '../style.scss';

const Test = (props) => {
  return <div> ID: {props.match.params.id} </div>;
};

export default Test;
