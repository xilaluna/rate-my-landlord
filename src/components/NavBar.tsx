type NavItemProps = {
  dest: string;
  text: string;
};

const NavItem: React.FC<NavItemProps> = ({ dest, text }) => {
  return <div className="m-3 hover:bg-sky-700">{text}</div>;
};

const Title = () => {
  return <div className="m-3 font-bold">Rate Your Landlord</div>;
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
        <NavItem dest="" text="Log In" />
        <NavItem dest="" text="Sign Up" />
        <NavItem dest="" text="Profile" />
      </div>
    </div>
  );
};

export default NavBar;
