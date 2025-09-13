"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/#products" },
    { label: "Company", href: "/#about" },
    { label: "Contact", href: "/#contact" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur bg-white/90 shadow"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="h-9 w-9 sm:h-10 sm:w-10">
              <img
                src="/logo.png"
                alt="Voltrax Logo"
                className="h-full w-full object-cover rounded-xl"
              />
            </div>
            <span
              className={`font-bold text-lg tracking-tight transition-colors ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              VoltraX
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 font-medium">
            {navItems.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className={`transition-colors ${
                  scrolled
                    ? "text-gray-800 hover:text-[#1f8f3e]"
                    : "text-white hover:text-[#fdd835]"
                }`}
              >
                {n.label}
              </a>
            ))}
            <a
              href="/#contact"
              className={`ml-2 inline-flex items-center rounded-xl px-4 py-2 font-semibold shadow hover:shadow-md transition ${
                scrolled
                  ? "bg-[#28a745] text-white hover:bg-[#23913f]"
                  : "bg-white text-[#28a745] hover:bg-gray-100"
              }`}
            >
              Get Quote
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition ${
              scrolled
                ? "text-gray-800 hover:bg-gray-100"
                : "text-white hover:bg-white/20"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 shadow-lg backdrop-blur-sm border-t border-gray-200 z-40 relative">
          <nav className="flex flex-col items-start px-6 py-4 gap-3 font-medium">
            {navItems.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setMenuOpen(false)}
                className="w-full text-gray-800 hover:text-[#1f8f3e] transition-colors"
              >
                {n.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="w-full mt-2 inline-flex items-center justify-center rounded-xl bg-[#28a745] px-4 py-2 text-white font-semibold shadow hover:bg-[#23913f] transition"
            >
              Get Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
