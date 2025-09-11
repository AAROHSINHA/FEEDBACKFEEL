import HomePage from "./Homepage/Homepage";
import SignIn from "./Authentication/Signin/Signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";

const App = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
    // <div>
    //   <HomePage />
    // </div>
  );
};

export default App;
