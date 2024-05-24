import { SignedIn, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <p className="text-2xl">
        Only authienticated users can see this.
      </p>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
