import { PING, PONG } from '../constants';

const initialState = { isPinging: false };

export const pingpongReducer = (state = initialState, action) => {
  switch (action.type) {
    case PING:
      return { ...initialState, isPinging: true };

    case PONG:
      return { ...initialState, isPinging: false };

    default:
      return state;
  }
};
