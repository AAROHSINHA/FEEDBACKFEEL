import { useState, useEffect, useRef } from "react";
import { LoginDropdownButton } from "./LoginDropdownButton";

const Login = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative inline-block text-left hover:cursor-pointer"
    >
      {/* User Icon */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 text-white focus:outline-none hover:cursor-pointer"
      >
        <span className="text-sm font-medium">U</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-gray-700">
          <LoginDropdownButton title="Dashboard" route="" />
          <LoginDropdownButton title="Settings" route="" />
          <LoginDropdownButton title="Logout" route="" />
        </div>
      )}
    </div>
  );
};

export default Login;
