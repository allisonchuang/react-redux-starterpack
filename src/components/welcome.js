import React from 'react';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import '../style.scss';
import Counter from '../containers/counter';
// import Controls from './containers/controls';

const Welcome = (props) => {
  return (
    <div>
      <div>Welcome</div>
      <Counter />
    </div>
  );
};

export default Welcome;
