import { LOGIN_START, LOGIN_FAIL, LOGIN_SUCCESS,
         LOGOUT_START, LOGOUT_FAIL, LOGOUT_SUCCESS } from '../constants/actionTypes';

const loginStart = () => {
  return {
    type: LOGIN_START
  };
};

const loginFail = () => {
  return {
    type: LOGIN_FAIL
  };
};

const loginSuccess = user => {
  return {
    type: LOGIN_SUCCESS,
    payload: user
  };
};
const logoutStart = () => {
  return {
    type: LOGOUT_START
  };
};

const logoutFail = () => {
  return {
    type: LOGOUT_FAIL
  };
};

const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS,
    payload: ''
  };
};

export const login = user => dispatch => {

  dispatch(loginStart());

  fetch('/login', { method: 'post', body: JSON.stringify(user) })
    .then(res => {
      console.log(res);

      return res.json();
    })
    .then(data => {
      dispatch(loginSuccess(data));
    })
    .catch(err => {
      dispatch(loginFail());
      console.error(err);
    });
};

export const logout = () => dispatch => {
  dispatch(logoutStart());

  fetch('/logout', { method: 'post', body: JSON.stringify('') })
    .then(res => {
      console.log(res);

      return res.json();
    })
    .then(data => {
      dispatch(logoutSuccess(data));
    })
    .catch(err => {
      dispatch(logoutFail());
      console.error(err);
    });
};
