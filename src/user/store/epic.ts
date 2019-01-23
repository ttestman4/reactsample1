import { combineEpics, ofType, ActionsObservable } from 'redux-observable';
import { map, filter } from 'rxjs/operators';
import { fetchUserSuccess } from './actions';
import { FETCH_USER } from './types';

const fetchUserEpic = (action$: ActionsObservable<any>) =>
  action$.pipe(
    ofType(FETCH_USER),
    map(action =>
      fetchUserSuccess({
        name: 'Epic User Name'
      })
    )
  );

export const userEpics = combineEpics(fetchUserEpic);
