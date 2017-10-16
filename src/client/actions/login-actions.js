import { LOGIN_START, LOGIN_FAIL, LOGIN_SUCCESS } from '../constants/actionTypes';

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
