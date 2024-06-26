import React, { createContext, useState, useContext } from 'react';

// Create a context
const GlobalStateContext = createContext();

// Create a provider component
export const GlobalStateProvider = ({ children }) => {
  const [state, setState] = useState({
    order: false,
    theme: 'light',
  });

  return (
    <GlobalStateContext.Provider value={{ state, setState }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Custom hook to use the GlobalStateContext
export const useGlobalState = () => useContext(GlobalStateContext);
