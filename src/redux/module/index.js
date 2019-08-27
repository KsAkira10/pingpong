import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { pingpongEpic } from '../../epics'
import { pingpongReducer } from '../../reducers'

export const rootEpic = combineEpics(
  pingpongEpic
);

export const rootReducer = combineReducers({
  pingpongReducer,
});