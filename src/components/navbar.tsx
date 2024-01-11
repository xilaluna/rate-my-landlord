import Link from "next/link";
import { UserButton, auth, SignInButton } from "@clerk/nextjs";

export default function Navbar() {
  const { userId } = auth();
  console.log(userId);
  return (
    <div className="navbar border-b bg-base-100 md:px-5">
      <div className="navbar-start">
        <Link href={"/"} className="btn btn-ghost text-xl">
          Rate My Landlord
        </Link>
      </div>
      <LoggeInInfo userId={userId} />
    </div>
  );
}

function LoggeInInfo({ userId }: { userId: string | null }) {
  if (!userId) {
    return (
      <div className="navbar-end space-x-2">
        <SignInButton>
          <button className="btn">Login</button>
        </SignInButton>
      </div>
    );
  }
  return (
    <div className="navbar-end space-x-2">
      <Link href={"/post/create"} className="btn">
        Create Post
      </Link>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
