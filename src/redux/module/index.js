import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { pingpongEpic, fetchUserEpic } from '../../epics'
import { pingpongReducer, users } from '../../reducers'

export const rootEpic = combineEpics(
  pingpongEpic,
  fetchUserEpic,
);

export const rootReducer = combineReducers({
  pingpongReducer,
  users
});