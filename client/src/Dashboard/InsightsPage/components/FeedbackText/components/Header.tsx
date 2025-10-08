import { Tabs } from "./Tabs";
interface HeaderInterface {
  title: string;
  tab: "all" | "bookmarked" | "spam";
  setTab: React.Dispatch<React.SetStateAction<"all" | "bookmarked" | "spam">>;
}

export default function Header({ title, tab, setTab }: HeaderInterface) {
  return (
    <header className="mb-4 flex items-center justify-between">
      <h2 className="text-pretty text-base md:text-lg font-medium text-white">
        {title}
      </h2>
      {/* Tabs */}
      <Tabs tab={tab} setTab={setTab} />
    </header>
  );
}
