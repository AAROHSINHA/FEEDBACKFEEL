import { createContext, useEffect, useState } from "react";
import { api } from "./api";

interface AuthContextType {
  isLoggedIn: boolean;
  name: string;
  email: string;
  dev_id: string;
  setIsLoggedIn: (val: boolean) => void;
  authLoading: boolean;
}
export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  name: "",
  email: "",
  dev_id: "",
  setIsLoggedIn: () => {},
  authLoading: true,
});
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dev_id, setDevId] = useState("");
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    api
      .get("/auth/check-login")
      .then((response) => {
        if (!response.data) setIsLoggedIn(false);
        else {
          setIsLoggedIn(true);
          setName(response.data.name);
          setEmail(response.data.email);
          setDevId(response.data.dev_id);
        }
        // console.log("Logged In");
      })
      .catch((error) => {
        console.log("AUTH CONTEXT ERROR!");
        console.log(error);
        setIsLoggedIn(false);
      })
      .finally(() => {
        // console.log("FINALLY");
        setAuthLoading(false);
      });
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, name, email, dev_id, setIsLoggedIn, authLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
