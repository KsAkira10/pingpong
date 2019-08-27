import { PING, FETCH_USER, FETCH_USER_FULFILLED } from "../constants";

export const ping = () => ({ type: PING });

export const fetchUser = username => ({ type: FETCH_USER, payload: username });
export const fetchUserFulfilled = payload => ({
  type: FETCH_USER_FULFILLED,
  payload
});
