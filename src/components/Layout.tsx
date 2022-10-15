import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
