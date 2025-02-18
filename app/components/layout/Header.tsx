"use client";

import Link from "next/link";
import { useState } from "react";
import { navigationLinks } from "./Navigation";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm text-white z-50">
      <div className="flex flex-col w-full">
        {/* Top Navigation */}
        <nav className="flex items-center justify-between h-16 px-6">
          <Link href="/" className="text-2xl font-bold font-rem">
            M-MOTORS
          </Link>
          <div className="hidden lg:flex items-center space-x-8">
            {Object.entries(navigationLinks).map(
              ([key, links]) =>
                links[0] && (
                  <Link
                    key={links[0].href}
                    href={links[0].href}
                    className="hover:text-gray-300 transition-colors font-inter"
                  >
                    {links[0].label}
                  </Link>
                )
            )}
          </div>
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
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
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-sm fixed inset-0 top-16 z-40 overflow-y-auto">
            <div className="flex flex-col w-full min-h-[calc(100vh-4rem)] py-4">
              {Object.entries(navigationLinks).map(([key, links]) => (
                <div
                  key={key}
                  className="border-b border-gray-800 last:border-none"
                >
                  <div className="px-6 py-4">
                    <h3 className="text-gray-400 text-sm uppercase font-rem tracking-wider">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </h3>
                    <div className="mt-3 flex flex-col">
                      {links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="py-3 hover:text-gray-300 transition-colors font-inter text-base"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
