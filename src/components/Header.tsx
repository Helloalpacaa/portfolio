import Link from "next/link";
import { Button } from "./ui/button";
import { NavigationItem } from "@/types";

// Navigation items data
const navigationItems = [
  { name: "home", href: "/" },
  { name: "services", href: "/services" },
  { name: "resume", href: "/resume" },
  { name: "work", href: "/work" },
  { name: "contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-white hover:text-white">
          <h1 className="text-4xl font-semibold">
            Heidi<span style={{ color: "#00ff99" }}>.</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-8">
          <nav className="flex gap-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="capitalize font-medium hover:text-accent transition-all"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <Link href="/contact">
            <button
              className="bg-accent text-primary px-6 py-3 rounded-md hover:bg-accent/80 
  transition-all"
            >
              Hire me
            </button>
          </Link>
        </div>

        {/* Mobile menu placeholder */}
        <div className="xl:hidden">
          <span className="text-accent">Menu</span>
        </div>
      </div>
    </header>
  );
}
