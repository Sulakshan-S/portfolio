import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("adminLoggedIn") === "true");

  const login = () => {
    localStorage.setItem("adminLoggedIn", "true");
    setIsAuthenticated(true);
  };
  const logout = () => {
    localStorage.removeItem("adminLoggedIn");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}