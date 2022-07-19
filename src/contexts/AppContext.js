import React from 'react';
export const defaultValue = {
  characterDensity: 4,
  fontSize: 10,
  isBlackAndWhite: true,
};

const AppContext = React.createContext(defaultValue);
export const AppContextProvider = AppContext.Provider;
