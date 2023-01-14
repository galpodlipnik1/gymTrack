import React, { createContext } from 'react';

const Statecontext = createContext();

export const ContextProvider = ({ children }) => {
  return <Statecontext.Provider value={{}}>{children}</Statecontext.Provider>;
};

export const useStateContext = () => useContext(Statecontext);
