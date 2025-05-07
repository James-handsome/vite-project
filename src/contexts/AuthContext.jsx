import { createContext, useContext, useEffect, useState } from "react";
import { Spin } from "antd";
const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const token = localStorage.getItem("access_token");
        if (token) {
          const user = await fetchUserProfile(token);
          setUser(user);
        }
      } finally {
        setLoading(false);
      }
    };
    initializeAuth();
  }, []);

  if (loading) {
    return <Spin fullscreen tip="Loading authentication..." />;
  }

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
