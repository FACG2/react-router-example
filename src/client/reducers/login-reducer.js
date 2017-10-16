import {
  LOGIN_START,
  LOGIN_FAIL,
  LOGIN_SUCCESS
} from '../constants/actionTypes';

const initialState = {
  isLoggedIn: false,
  isFetching: false,
  user: {}
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START: {
      return {
        ...state,
        isFetching: true
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        isFetching: false,
        isLoggedIn: true
      };
    }
    case LOGIN_FAIL: {
      return {
        ...state,
        isFetching: false,
        isLoggedIn: false
      };
    }
    default:
      return state;
  }
};

export default login;
