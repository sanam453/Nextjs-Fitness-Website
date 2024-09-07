import * as React from "react";

// ui components
import Link from "next/link";
import Image from "next/image";

// components
import { Nav } from "./nav";

export function Header() {
  return (
    <header className="py-8 relative z-10">
      <div className="max-w-[90rem] px-8 mx-auto flex justify-between items-center">
        {/** Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            height={100}
            width={100}
            src="/logo.svg"
            alt="logo"
            className="h-6 w-6"
          />
          <h1 className="text-xl">
            FitHub
          </h1>
        </Link>
        <div>
          <Nav />
        </div>
      </div>
    </header>
  );
}

export default Header;
