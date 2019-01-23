import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { userReducer } from '../user/store/reducers';
import { userEpics } from '../user/store/epic';

const rootReducer = combineReducers({
  user: userReducer
});

const rootEpic = combineEpics(userEpics);

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middlewares = [thunkMiddleware];
  const epicMiddleware = createEpicMiddleware();
  const middleWareEnhancer = applyMiddleware(epicMiddleware);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );

  epicMiddleware.run(rootEpic);

  return store;
}
