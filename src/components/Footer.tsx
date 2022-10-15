const Copyright: React.FC = () => {
  return (
    <p className="text-center ">
      {"Copyright © "}
      {new Date().getFullYear()}
      {" Rate My Landlord"}
    </p>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="border-color mt-auto border-t py-5">
      <Copyright />
    </footer>
  );
};

export default Footer;
