"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="bg-[#2801b9] bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-white text-2xl font-bold">
            MADTECH
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-white hover:text-gray-200">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-gray-200">
              About
            </Link>
            <Link href="/projects" className="text-white hover:text-gray-200">
              Projects
            </Link>
            <Link href="/contact" className="text-white hover:text-gray-200">
              Contact Us
            </Link>
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
            <Link href="/" className="block text-white py-2">
              Home
            </Link>
            <Link href="/about" className="block text-white py-2">
              About
            </Link>
            <Link href="/projects" className="block text-white py-2">
              Projects
            </Link>
            <Link href="/contact" className="block text-white py-2">
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
