"use client";

import React from 'react';
import Link from 'next/link';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full top-0 z-40 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="font-bold text-xl">
            M-MOTORS
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/catalogue" className="hover:text-gray-300 transition">
              Catalogue
            </Link>
            <Link href="/sav" className="hover:text-gray-300 transition">
              SAV
            </Link>
            <Link href="/service-financier" className="hover:text-gray-300 transition">
              Service Financier
            </Link>
            <Link href="/service-commercial" className="hover:text-gray-300 transition">
              Service Commercial
            </Link>
            <Link href="/reprise" className="hover:text-gray-300 transition">
              Reprise
            </Link>
            <Link href="/essai-routier" className="hover:text-gray-300 transition">
              Essai Routier
            </Link>
            <Link href="/contact" className="hover:text-gray-300 transition">
              Contact
            </Link>
          </nav>

          {/* Bouton menu mobile */}
          <button
            className="md:hidden p-2 hover:bg-white/10 rounded-full text-white"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </header>
  );
};

export default Header;
