import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  const login = (user) => {
    setAuthenticated(true);
    setUsername(user);
  };

  const logout = () => {
    setAuthenticated(false);
    setUsername('');
  };

  return (
    <AuthContext.Provider value={{ authenticated, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};