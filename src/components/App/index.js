import React from 'react';
import { connect } from 'react-redux';
import { ping } from '../../actions';

let App = ({ pingpongReducer, ping }) => {
  const { isPinging } = pingpongReducer;
  return (
    <div>
      <h1>is pinging: {isPinging.toString()}</h1>
      <button onClick={ping}>Start PING</button>
    </div>
  );
};

App = connect(
  ({ pingpongReducer }) => ({ pingpongReducer }),
  { ping }
)(App);

export default App;
