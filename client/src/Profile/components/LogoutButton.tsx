export function LogoutButton() {
  return (
    <button
      type="button"
      aria-label="Logout"
      className="inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 bg-red-500 text-gray-200 hover:cursor-pointer"
    >
      Logout
    </button>
  );
}
