import Link from "next/link";
import { UserButton, auth, SignInButton } from "@clerk/nextjs";

export default function Navbar() {
  const { userId } = auth();
  return (
    <div>
      <div>
        <Link href={"/"}>Rate My Landlord</Link>
      </div>
      <LoggeInInfo userId={userId} />
    </div>
  );
}

function LoggeInInfo({ userId }: { userId: string | null }) {
  if (!userId) {
    return (
      <div>
        <SignInButton>
          <button>Sign In</button>
        </SignInButton>
      </div>
    );
  }
  return (
    <div>
      <Link href={"/post/create"}>Create Post</Link>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
