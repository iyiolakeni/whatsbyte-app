import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar, Sidebar } from "./components/navigations/navigation";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "WhatBytes",
  description: "WhatBytes Assignment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        <div className="min-h-screen bg-white-50">
          <Navbar />
          <div className="flex">
            <Sidebar />
            <main className="flex-1 p-6 pr-2">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
