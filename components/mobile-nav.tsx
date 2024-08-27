"use client";

import * as React from "react";

// ui components
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "assessment",
    path: "/assessment",
  },
  {
    name: "team",
    path: "/team",
  },
  {
    name: "about",
    path: "/about",
  },
];

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="px-2 text-primary-accent hover:bg-transparent hover:text-primary-accent transition-opacity opacity-80 hover:opacity-100 focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="pl-0 flex flex-col justify-center text-center"
      >
        <Link href="/" className="flex items-center justify-center gap-2">
          <Image
            height={100}
            width={100}
            src="/logo.svg"
            alt="logo"
            className="h-6 w-6"
          />
          <h1 className="text-xl text-white">
            Fit<span className="text-primary-accent">H</span>ub
          </h1>
        </Link>
        <nav className="flex flex-col space-y-4 mt-10">
          {links.map((link, key) => (
            <Link
              key={key}
              href={link.path}
              className={`${
                link.path === pathname && "text-primary-accent"
              } capitalize hover:text-primary-accent transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
