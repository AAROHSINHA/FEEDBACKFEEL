import { createContext } from "react";

export interface ThemeInterface {
  theme: "dark" | "light";
  setTheme: React.Dispatch<React.SetStateAction<"dark" | "light">>;
}

export const ThemeContext = createContext<ThemeInterface | null>(null);
