import { procedureTypes } from "@trpc/server";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";

type NavItemProps = {
  dest: string;
  text: string;
};

const hoverStyle = "m-3 hover:bg-sky-700";

const NavItem: React.FC<NavItemProps> = ({ dest, text }) => {
  return (
    <Link href={dest}>
      <div className={hoverStyle}>{text}</div>
    </Link>
  );
};

const Title = () => {
  return (
    <div className="m-3 font-bold">
      <Link href="/"> Rate My Landlord</Link>
    </div>
  );
};

const NavBar = () => {
  const { data: session, status } = useSession();
  return (
    <div
      className={
        " border-b-1 border-black-600 flex h-12 justify-between border-2"
      }
    >
      <Title />
      <div className="flex">
        {status === "authenticated" ? (
          <NavItem dest="/Profile" text="Profile" />
        ) : (
          <div className={hoverStyle} onClick={() => signIn()}>
            Log In
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
