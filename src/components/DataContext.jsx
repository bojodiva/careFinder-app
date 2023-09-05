import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [savedContent, setSavedContent] = useState([]);
  
  return (
    <DataContext.Provider value={{ savedContent, setSavedContent }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);