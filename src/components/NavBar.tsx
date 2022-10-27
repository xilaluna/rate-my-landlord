import { procedureTypes } from "@trpc/server";
import Link from "next/link";

type NavItemProps = {
  dest: string;
  text: string;
};

const NavItem: React.FC<NavItemProps> = ({ dest, text }) => {
  return (
    <Link href={dest}>
      <div className="m-3 hover:bg-sky-700">{text}</div>
    </Link>
  );
};

const Title = () => {
  return <div className="m-3 font-bold">Rate My Landlord</div>;
};

const NavBar = () => {
  return (
    <div
      className={
        " border-b-1 border-black-600 flex h-12 justify-between border-2"
      }
    >
      <Title />
      <div className="flex">
        {/*
          TODO: change true to 'user.isSignedIn' to dynamically show either Login or 
          Profile on navbar depending on whether user is logged in.
        */}
        {true ? (
          <NavItem dest="/Login" text="Log In" />
        ) : (
          <NavItem dest="/Profile" text="Profile" />
        )}
        <NavItem dest="/SignUp" text="Sign Up" />
      </div>
    </div>
  );
};

export default NavBar;
