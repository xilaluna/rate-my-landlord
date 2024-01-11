import Link from "next/link";
import { UserButton, auth, SignInButton } from "@clerk/nextjs";

const Navbar = () => {
  // Get the user ID of the currently signed in user
  const { userId } = auth();
  return (
    <div className="navbar border-b bg-base-100 md:px-5">
      <div className="navbar-start">
        <Link href={"/"} className="btn btn-ghost text-xl">
          Rate My Landlord
        </Link>
      </div>
      <div className="navbar-end space-x-2">
        {!!userId && (
          <Link href={"/post/create"} className="btn">
            Create Post
          </Link>
        )}
        {!userId && (
          <SignInButton>
            <button className="btn">Login</button>
          </SignInButton>
        )}
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
