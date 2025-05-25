import "./_styles/globals.css";

import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "./_components/Navigation/Navbar";
import SmoothScroll from "@/components/smooth-scroll";

const InterFont = localFont({
  src: "../public/fonts/inter.ttf",
  variable: "--font-inter",
});

const DMSans = localFont({
  src: "../public/fonts/dmsans.ttf",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Metafy",
  description:
    "Metafy is a modern web app for managing your projects and tasks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${InterFont.variable} ${DMSans.variable} antialiased`}>
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
