import React, { createContext, useState, useContext } from 'react';

const ShowModeContext = createContext();

export const ShowModeProvider = ({ children }) => {
  const [isShowMode, setIsShowMode] = useState(false);

  const toggleShowMode = () => {
    setIsShowMode((prevMode) => !prevMode);
  };

  return (
    <ShowModeContext.Provider value={{ isShowMode, toggleShowMode }}>
      {children}
    </ShowModeContext.Provider>
  );
};

export const useShowMode = () => {
  return useContext(ShowModeContext);
};
