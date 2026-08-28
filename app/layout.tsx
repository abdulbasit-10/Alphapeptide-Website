import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

// 1. Import your new Navbar component
import Navbar from "../components/Navbar/Navbar";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap", 
});

export const metadata: Metadata = {
  title: "Alpha Peptide",
  description: "Research Use Only - Premium Peptides",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} antialiased bg-black`}>
        {/* 2. Place the Navbar at the very top of the body */}
        <Navbar />
        
        {/* 'children' represents whatever page the user is currently looking at */}
        {children}
      </body>
    </html>
  );
}