import React from "react";
import { connect, useDispatch } from "react-redux";
import { ping, fetchUser } from "../../actions";
import { FETCH_USER } from "../../constants";

let App = props => {
  console.log(props);
  const { pingpongReducer, users, ping } = props;
  const { isPinging } = pingpongReducer;
  const dispatch = useDispatch();
  const user = users["redux-observable"] || "";
  return (
    <div>
      <h1>is pinging: {isPinging.toString()}</h1>
      <button onClick={ping}>Start PING</button>
      <button
        onClick={() => {
          dispatch({ type: FETCH_USER, payload: "redux-observable" });
        }}
      >
        Buscar usuário
      </button>
      <div>{user && <textarea>{JSON.stringify(user, null, 2)}</textarea>}</div>
    </div>
  );
};

App = connect(
  ({ pingpongReducer, users }) => ({ pingpongReducer, users }),
  { ping, fetchUser }
)(App);

export default App;
