import Link from "next/link";
import { auth, SignInButton, SignOutButton } from "@clerk/nextjs";
import { Button } from "~/components/ui/button";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

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
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Menu />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <Link href={"/post/create"}>
          <DropdownMenuItem>Create Post</DropdownMenuItem>
        </Link>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuSeparator />
        <Link href={"/profile"}>
          <DropdownMenuItem>Manage Account</DropdownMenuItem>
        </Link>
        <Link href={"/"}>
          <DropdownMenuItem>
            <SignOutButton>Sign Out</SignOutButton>
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
