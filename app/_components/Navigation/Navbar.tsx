import Image from "next/image";
import GradientButton from "../../../components/ui/GradientButton";
import Link from "next/link";
import UnderlineToBackground from "@/components/underline-to-background";
import MobileFullNavigation from "./mobile-full-nav";

export default function Navbar() {
  return (
    <nav className="container flex items-center w-full gap-6 lg:gap-12 py-6 px-6 justify-between lg:justify-start">
      <div className="items-center gap-2 hidden lg:flex">
        <Image src="/icon.png" width="30" height="30" alt="logo" />
        <p className="font-dmsans text-xl font-semibold">Metafy</p>
      </div>

      <div className="lg:hidden float-end w-full">
        <MobileFullNavigation
          navItems={[
            { name: "Our Company", link: "#our-company" },
            { name: "Resources", link: "#resources" },
            { name: "Pricing", link: "#pricing" },
            { name: "Our Solutions", link: "#our-solutions" },
          ]}
        />
      </div>

      <div className="lg:flex items-center gap-8 justify-start grow hidden">
        <Link href="#our-company">
          <UnderlineToBackground label="Our Company" targetTextColor="#fff" />
        </Link>
        <Link href="#resources">
          <UnderlineToBackground label="Resources" targetTextColor="#fff" />
        </Link>
        <Link href="#pricing">
          <UnderlineToBackground label="Pricing" targetTextColor="#fff" />
        </Link>
        <Link href="#our-solutions">
          <UnderlineToBackground label="Our Solutions" targetTextColor="#fff" />
        </Link>
      </div>

      <div className="lg:flex hidden items-center gap-5">
        <button>Sign In</button>
        <GradientButton>Get a Demo</GradientButton>
      </div>
    </nav>
  );
}
