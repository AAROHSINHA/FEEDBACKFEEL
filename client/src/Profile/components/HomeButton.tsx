import { useNavigate } from "react-router-dom";
export function HomeButton() {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      aria-label="Logout"
      className="inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 bg-green-500 text-gray-200 hover:cursor-pointer"
      onClick={() => navigate("/")}
    >
      Back To Home
    </button>
  );
}
