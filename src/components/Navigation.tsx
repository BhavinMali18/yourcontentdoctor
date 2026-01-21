"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { gsap } from "gsap";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(
      ".nav-item",
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.2 }
    );
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md dark:bg-black/80 border-b border-gray-200 dark:border-gray-800 transition-all duration-300">
      <div className="nav-item">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Your Content Doctor Logo"
            width={150}
            height={50}
            className="object-contain h-12 w-auto"
            priority
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8">
        {["About", "Mentor", "Results", "FAQs", "Contact"].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            className="nav-item text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden nav-item">
        <button onClick={toggleMenu} className="focus:outline-none">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 p-4 md:hidden flex flex-col space-y-4 shadow-lg">
          {["About", "Mentor", "Results", "FAQs", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
