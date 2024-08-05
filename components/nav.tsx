"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";

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

export function Nav() {
  const pathname = usePathname();

  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className="flex gap-8 items-center">
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
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}

export default Nav;
