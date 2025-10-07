import ProfileCard from "./components/ProfileCard";
import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!authContext.isLoggedIn) navigate("/login");
  }, []);
  return (
    // Using the dark theme tokens and overriding background/card to #19191a
    <main className="dark min-h-dvh bg-background text-foreground flex items-center justify-center p-4 bg-[#19191a]">
      <section aria-label="Profile" className="w-full max-w-lg">
        <ProfileCard />
      </section>
    </main>
  );
}
