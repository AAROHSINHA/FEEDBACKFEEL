import Grid from "../Grid";
import Dots from "../Dots";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export default function HomePage() {
  const themeContext = useContext(ThemeContext);
  return (
    // #19191a
    <div
      className={`min-h-screen bg-[${
        themeContext?.theme == "dark" ? "#19191a" : "white"
      }] text-white`}
    >
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center px-6 pt-30 text-center">
        {/* <Grid /> */}
        <HeroSection />
      </main>
    </div>
  );
}
