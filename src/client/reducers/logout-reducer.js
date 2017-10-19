import {
  LOGOUT_START,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS
} from '../constants/actionTypes';

const initialState = {
  isLoggedIn: true,
  isFetching: false,
  user: { username: 'mantagen', role: 'admin' }
};

const logout = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT_START: {
      return {
        ...state,
        isFetching: true
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        user: {},
        isFetching: false,
        isLoggedIn: false
      };
    }
    case LOGOUT_FAIL: {
      return {
        ...state,
        isFetching: false
      };
    }
    default:
      return state;
  }
};

export default logout;
