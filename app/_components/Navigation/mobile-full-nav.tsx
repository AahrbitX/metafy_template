"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
} from "@/components/ui/resizable-navbar";
import Image from "next/image";
import GradientButton from "@/components/ui/GradientButton";

type NavProps = {
  navItems: {
    name: string;
    link: string;
  }[];
};

function MobileFullNavigation(props: NavProps) {
  const pathname = usePathname();
  const { navItems } = props;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <MobileNav className="w-full">
      <MobileNavHeader>
        <div className="flex items-center gap-2">
          <Image src="/icon.png" width="30" height="30" alt="logo" />
          <p className="font-dmsans text-xl font-semibold">Metafy</p>
        </div>
        <MobileNavToggle
          isOpen={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
      </MobileNavHeader>

      <MobileNavMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      >
        {navItems.map((item, idx) => (
          <a
            key={`mobile-link-${idx}`}
            href={item.link}
            onClick={() => setIsMobileMenuOpen(false)}
            className="relative text-neutral-600 dark:text-neutral-300"
          >
            <span className="block">{item.name}</span>
          </a>
        ))}
        <div className="flex w-full flex-col gap-4">
          <NavbarButton
            onClick={() => setIsMobileMenuOpen(false)}
            variant="secondary"
            className="w-full"
          >
            <span className="font-medium text-black">Book a call</span>
          </NavbarButton>
          <GradientButton
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full"
          >
            Login
          </GradientButton>
        </div>
      </MobileNavMenu>
    </MobileNav>
  );
}

export default MobileFullNavigation;
