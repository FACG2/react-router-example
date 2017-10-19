import { LOGOUT_START, LOGOUT_FAIL, LOGOUT_SUCCESS } from '../constants/actionTypes';

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

export const logout = dispatch => {
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
