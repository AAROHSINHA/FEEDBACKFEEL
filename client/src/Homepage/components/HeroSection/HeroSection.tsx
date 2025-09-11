import { CTAButtons } from "./components/CTAButtons";
import { Version } from "./components/Version";
import { TextArea } from "./components/TextArea";

const HeroSection = () => {
  return (
    <div className="max-w-6xl mx-auto relative z-20">
      <Version />
      <TextArea />
      <CTAButtons />
    </div>
  );
};
export default HeroSection;
