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
    name: "Home",
    path: "/",
  },
  {
    name: "Assessment",
    path: "/assessment",
  },
  {
    name: "Workouts",
    path: "/workouts",
  },
  {
    name: "Pricing",
    path: "/pricing",
  },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="px-2">
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
          <h1 className="text-xl text-white">FitHub</h1>
        </Link>
        <nav className="flex flex-col space-y-4 mt-10">
          {links.map((link, key) => (
            <Link
              key={key}
              href={link.path}
              className={`${
                link.path === pathname && "text-white opacity-90"
              } capitalize hover:opacity-100 transition-all`}
            >
              <Button variant="ghost">{link.name}</Button>
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
