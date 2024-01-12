import Link from "next/link";
import { UserButton, auth, SignInButton } from "@clerk/nextjs";
import { Button } from "~/components/ui/button";

export default function Navbar() {
  const { userId } = auth();
  return (
    <nav className="border-b">
      <div className="mx-auto flex max-w-7xl justify-between py-4">
        <div className="flex items-center space-x-4">
          <Link href={"/"} className="text-lg font-bold">
            Rate My Landlord
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <LoggeInInfo userId={userId} />
        </div>
      </div>
    </nav>
  );
}

function LoggeInInfo({ userId }: { userId: string | null }) {
  if (!userId) {
    return (
      <SignInButton>
        <Button>Sign In</Button>
      </SignInButton>
    );
  }
  return (
    <>
      <Link href={"/post/create"}>
        <Button>Create Post</Button>
      </Link>
      <UserButton afterSignOutUrl="/" />
    </>
  );
}
