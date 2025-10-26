import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


import Navbar from "./components/Navbar"; // ✅ Import Navbar
import Footer from "./components/Footer"; 


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rohan A M - Portfolio",
  description: "Personal portfolio created with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar /> {/* ✅ Always render Navbar */}
        <main className="pt-20"> {/* ✅ Add top padding to avoid overlapping */}
          {children}
        </main>
        
        <Footer /> {/* ✅ Optional footer at bottom */}
      </body>
    </html>
  );
}
