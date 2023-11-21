'use client'
import React, { createContext, useState, useEffect } from 'react';
import { getDataFromToken } from './getDataFromToken';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const idVerification = getDataFromToken();
    console.log(idVerification);

    if (idVerification) {
      setIsLoggedIn(true);
    }
  }, []); // Empty dependency array ensures this effect runs once after the initial render

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};
