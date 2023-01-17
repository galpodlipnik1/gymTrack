import * as types from '../constants/types';

const initialState = {
  isAuthenticated: false,
  user: {}
};

const authReducer = (state = { authData: initialState }, action) => {
  switch (action.type) {
    case types.AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));

      return { ...state, authData: { isAuthenticated: true, user: action?.data } };
    case types.LOGOUT:
      localStorage.removeItem('profile');

      return { ...state, authData: initialState };
    default:
      return state;
  };
};

export default authReducer;
