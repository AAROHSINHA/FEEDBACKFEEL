import { Cards } from "./components/Cards";
export const TopSection = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between mx-5">
      <Cards title="Positive" words={["Super", "Update", "Support"]} />
      <Cards title="Negative" words={["Ads", "Responsiveness"]} />
      <Cards title="Overall" words={["Works", "Ads", "Utility"]} />
    </section>
  );
};
