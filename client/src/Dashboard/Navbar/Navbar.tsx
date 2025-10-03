import Logo from "../../Homepage/components/Header/components/Logo"; // From Homepage Header (Navbar)
import Login from "../../Homepage/components/Header/components/Login";
const Navbar = () => {
  return (
    <header className="px-6 py-4 relative z-20 shadow-[0_0_2px_rgba(255,255,255,0.5)] bg-[#19191a]">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Logo />
        <Login
          routes={[
            { title: "Home", route: "/" },
            { title: "Settings", route: "/settings" },
          ]}
        />
      </div>
    </header>
  );
};

export default Navbar;
