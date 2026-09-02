import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

// 1. Import your new Client-Side ToastProvider
import ToastProvider from "../context/ToastProvider";
import { CartProvider } from "../context/CartContext";
import Navbar from "../components/Navbar/Navbar";
import CartDrawer from "../components/CartDrawer/CartDrawer";

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
        <CartProvider>
          <Navbar />
          <CartDrawer />
          {children}
          
          {/* 2. Place the ToastProvider here so it renders on the client */}
          <ToastProvider />

        </CartProvider>
      </body>
    </html>
  );
}