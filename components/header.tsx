import Image from "next/image";
import Link from "next/link";

// @components
import Nav from "./nav";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="py-8">
      <div className="container mx-auto flex justify-between items-center">
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
            Fit<span className="text-primary-accent">H</span>ub
          </h1>
        </Link>
        {/** Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <Nav />
          <Button size="sm" asChild variant="secondary">
            <Link href="/login">Get Started</Link>
          </Button>
        </div>

        {/** Mobile Nav */}
        <div className="lg:hidden">mobile nav</div>
      </div>
    </header>
  );
}

export default Header;
