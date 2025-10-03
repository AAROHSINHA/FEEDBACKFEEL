import { InfoRow } from "./InfoRow";
import { LogoutButton } from "./LogoutButton";
import { HomeButton } from "./HomeButton";

export default function ProfileCard() {
  return (
    <div
      className="w-full rounded-xl bg-card text-card-foreground ring-1 ring-white/10 p-6 bg-[#19191a] text-gray-200"
      style={{
        boxShadow:
          "0 4px 12px rgba(120,120,120,0.12), 0 1px 2px rgba(120,120,120,0.08)",
      }}
      role="region"
      aria-label="Profile Card"
    >
      <h1 className="text-2xl font-semibold text-pretty">Welcome Back, User</h1>

      <div className="mt-6 grid grid-cols-1 gap-3">
        <InfoRow label="name" value="John Doe" api={false} />
        <InfoRow label="email" value="john.doe@example.com" api={false} />
        <InfoRow
          label="api_key"
          value="d9ba667b41d07c42d7a388a340bf3c941e567fa92aa5600b6388423747bc582f"
          api={true}
        />
      </div>

      <div className="mt-6 flex items-center justify-end gap-3">
        {/* Red logout button (using destructive tokens), no external libs */}
        <LogoutButton />

        {/* White back to home button using token inversion */}
        <HomeButton />
      </div>
    </div>
  );
}
