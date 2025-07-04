"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  { name: "home", href: "/" },
  { name: "resume", href: "/resume" },
  { name: "projects", href: "/projects" },
  { name: "contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname(); // Gets current page path

  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold text-white">
            Heidi<span style={{ color: "#00ff99" }}>.</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-8">
          <nav className="flex gap-8">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`capitalize font-medium transition-all ${
                    isActive
                      ? "text-[#00ff99] border-b-2 border-[#00ff99] pb-1"
                      : "hover:text-[#00ff99]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
          <Link href="/contact">
            <button
              className="bg-[#00ff99] text-[#1c1c22] px-6 py-3 rounded-full hover:bg-[#00e187]
   transition-all"
            >
              Hire me
            </button>
          </Link>
        </div>

        <div className="xl:hidden">
          <span className="text-[#00ff99]">Menu</span>
        </div>
      </div>
    </header>
  );
}
