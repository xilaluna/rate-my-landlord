import "~/styles/globals.css";
import Navbar from "~/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "Rate My Landlord",
  description: "Generated by create-t3-app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏠</text></svg>"
          />
        </head>
        <body>
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
