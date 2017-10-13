import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import counter from './counter-reducer';

const reducer = combineReducers({
  counter
});

const loggerMiddleware = createLogger();

export default preloadedState => {
  return createStore(
    reducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  );
};
