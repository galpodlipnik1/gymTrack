import * as types from '../constants/types';

const initialState = {
  isAuthenticated: false,
  user: {}
};

const authReducer = (state = { authData: initialState }, action) => {
  return state;
};

export default authReducer;
