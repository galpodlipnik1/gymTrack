import * as api from "../api";
import { AUTH, LOGOUT } from "../constants/types";

export const signIn = (formData) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });
    
    if(data){
      return true
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const signUp = (formData) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });
    
    if(data){
      return true
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};