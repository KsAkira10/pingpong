import { PING, PONG } from '../constants';
import { ofType } from 'redux-observable';
import { delay, mapTo } from 'rxjs/operators';

export const pingpongEpic = action$ => action$.pipe(
  ofType(PING),
  delay(1000),
  mapTo({ type: PONG })
);


