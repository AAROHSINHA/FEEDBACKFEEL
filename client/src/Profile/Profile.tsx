import type React from "react";
import ProfileCard from "./components/ProfileCard";

export default function Profile() {
  return (
    // Using the dark theme tokens and overriding background/card to #19191a
    <main className="dark min-h-dvh bg-background text-foreground flex items-center justify-center p-4 bg-[#19191a]">
      <section aria-label="Profile" className="w-full max-w-lg">
        <ProfileCard />
      </section>
    </main>
  );
}
