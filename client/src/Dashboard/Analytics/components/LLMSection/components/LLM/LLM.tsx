import { Header } from "./comp/Header";
import { InfoBox } from "./comp/InfoBox";
import { GenerateButton } from "./comp/GenerateButton";
import { OutputSection } from "./comp/OutputSection";
export const LLM = () => {
  return (
    <section
      className="h-auto flex-col md:h-auto w-[100%] my-10 md:w-[60%] mx-5 p-10"
      style={{
        backgroundColor: "#1f1f1f",
        color: "#4b5563", // gray-600
        borderRadius: "0.5rem",
        padding: "1.5rem",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
      }}
    >
      <Header />
      <InfoBox />
      <GenerateButton />
      <OutputSection />
    </section>
  );
};
