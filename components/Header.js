"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/services", label: "Our Services" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header
      className="bg-[#2801b9] bg-cover bg-no-repeat sticky top-0 shadow-xl z-50"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-white text-2xl font-bold">
            <Image
              src="/images/logo-white.png"
              width={150}
              height={50}
              alt="Gumuh Logo"
            />
          </Link>
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-white hover:text-gray-200 transition-all duration-300 border-b-2 border-transparent ${
                  pathname === item.href ? " border-white font-semibold" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block text-white py-2 px-1 transition-all duration-300 ${
                  pathname === item.href
                    ? "bg-white bg-opacity-20 font-semibold"
                    : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
