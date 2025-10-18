import HomePage from "./Homepage/Homepage";
import SignIn from "./Authentication/Signin/SignUp";
import Login from "./Authentication/Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import Profile from "./Profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      <Toaster position="top-right" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-up" element={<SignIn />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
    // <div>
    //   <HomePage />
    // </div>
  );
};

export default App;
