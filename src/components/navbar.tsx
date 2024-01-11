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
      {!!userId && (
        <div className="navbar-end space-x-2">
          <Link href={"/post/create"} className="btn">
            Create Post
          </Link>
          <UserButton afterSignOutUrl="/" />
        </div>
      )}
      {!userId && (
        <div className="navbar-end space-x-2">
          <SignInButton>
            <button className="btn">Login</button>
          </SignInButton>
        </div>
      )}
    </div>
  );
};

export default Navbar;
