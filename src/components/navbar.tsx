import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="navbar border-b bg-base-100 md:px-5">
      <div className="navbar-start">
        <Link href={"/"} className="btn btn-ghost text-xl">
          Rate My Landlord
        </Link>
      </div>
      <div className="navbar-end space-x-2">
        <Link href={"/post/create"} className="btn">
          Create Post
        </Link>

        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
