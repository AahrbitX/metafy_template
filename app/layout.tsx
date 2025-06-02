import "./_styles/globals.css";

import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import Navbar from "./_components/Navigation/Navbar";
import SmoothScroll from "@/components/smooth-scroll";

const InterFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const DMSans = DM_Sans({
  subsets: ["latin"],
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
