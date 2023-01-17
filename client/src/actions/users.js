import * as api from "../api";

export const signIn = async (formData) => {
  try {
    const { data } = await api.signIn(formData);
    
    if(data){
      return true
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const signUp = async (formData) => {
  try {
    console.log(formData);
    const { data } = await api.signUp(formData);
    
    if(data){
      return true
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};
