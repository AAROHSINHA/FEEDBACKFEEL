import { createContext, useEffect, useState } from "react";
import { api } from "./api";

interface AuthContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: (val: boolean) => void;
}
export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    api
      .get("/auth/check-login")
      .then((response) => {
        if (response.data.status == "failure") setIsLoggedIn(false);
        else setIsLoggedIn(true);
      })
      .catch((error) => {
        // console.log(error);
        setIsLoggedIn(false);
      });
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
