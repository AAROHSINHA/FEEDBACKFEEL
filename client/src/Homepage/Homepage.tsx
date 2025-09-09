import Grid from "../Grid";
import Dots from "../Dots";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#19191a] text-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center px-6 pt-30 text-center">
        <Grid />
        <HeroSection />
      </main>
    </div>
  );
}
