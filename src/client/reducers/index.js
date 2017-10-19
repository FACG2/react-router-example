import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import login from './login-reducer';
import logout from './logout-reducer';

const reducer = combineReducers({
  login,
  logout
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
