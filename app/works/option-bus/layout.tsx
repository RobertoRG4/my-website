import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "RG - Works",
  description: "Generated by create next app",
};

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default Layout;