import React, { useState, useContext, createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [light, setLight] = useState(false);

  const handleTheme = () => {
    setLight(!light);
  };

  return (
    <AppContext.Provider value={{ light, handleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
