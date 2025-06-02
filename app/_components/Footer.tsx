import BreathingText from "@/components/breathing-text";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full relative bg-notblack py-10 text-notwhite overflow-hidden">
      <div className="container">
        <div className="flex items-center gap-y-4 justify-center md:justify-between flex-wrap mb-10 md:px-6">
          <h3 className="text-4xl lg:text-5xl font-bold font-dmsans ">
            Let&apos;s Connect
          </h3>
          <div className="flex items-center gap-2">
            <div className="relative flex items-center border-b border-white/60 group py-5 px-3">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="bg-transparent outline-hidden text-white placeholder:text-white/60 text-xl pr-10"
              />
              <button className="absolute right-0 text-white/60 group-hover:text-white">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="space-y-4 col-span-3 md:col-span-3 lg:col-span-2">
            <h3 className="text-xl lg:text-2xl font-bold">Address</h3>
            <p className="text-sm lg:text-base text-notwhite/60">
              123 Business Street
              <br />
              Suite 100
              <br />
              New York, NY 10001
              <br />
              United States
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg lg:text-xl font-bold">Company</h3>
            <ul className="space-y-2 text-sm lg:text-base text-notwhite/60">
              <li>About Us</li>
              <li>Career</li>
              <li>News & Press</li>
              <li>Careers</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg lg:text-xl font-bold">Resources</h3>
            <ul className="space-y-2 text-sm lg:text-base text-notwhite/60">
              <li>Request a Demo</li>
              <li>Pricing</li>
              <li>Blog</li>
              <li>Documentation</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg lg:text-xl font-bold">Services</h3>
            <ul className="space-y-2 text-sm lg:text-base text-notwhite/60">
              <li>Benefit Options</li>
              <li>HR Expertise</li>
              <li>Technology</li>
              <li>Payroll</li>
            </ul>
          </div>
        </div>
      </div>

      <p className="text-center mt-20 text-7xl md:text-[10rem] lg:text-[12rem] xl:text-[14rem] font-bold  text-white  inset-x-0">
        <BreathingText
          label="Metafy"
          staggerDuration={0.1}
          fromFontVariationSettings="'wght' 100, 'slnt' 0"
          toFontVariationSettings="'wght' 800, 'slnt' -10"
        />
      </p>

      <div className="text-center mt-10 space-y-3">
        <p>&copy; 2025 all rights reserved</p>
        <div className="flex items-center justify-center gap-6">
          <Image src="/icon.png" alt="logo" width={50} height={100} />
          <a
            target="_blank"
            className="hover:scale-110 transition-transform duration-150"
            href="https://aahrbitx.in"
          >
            <Image src="/logo.png" alt="logo" width={50} height={100} />
          </a>
        </div>
        <ul className="flex items-center gap-x-4 w-full justify-center">
          <li>
            <Link href="/">terms</Link>
          </li>
          <li>
            <Link href="/">privacy</Link>
          </li>
          <li>
            <Link href="/">cookies</Link>
          </li>
          <li>
            <Link href="/">legal</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
