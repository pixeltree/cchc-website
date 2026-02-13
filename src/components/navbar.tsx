"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-cchc-blue text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">
              <span className="text-cchc-gold">CCHC</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-cchc-gold transition-colors font-medium">
              Home
            </Link>
            <Link href="#the-issue" className="hover:text-cchc-gold transition-colors font-medium">
              The Issue
            </Link>
            <Link href="#calculator" className="hover:text-cchc-gold transition-colors font-medium">
              Tax Calculator
            </Link>
            <Link href="#gatekeepers" className="hover:text-cchc-gold transition-colors font-medium">
              Gatekeeper Watch
            </Link>
            <Button variant="gold" size="lg">
              Donate
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className="block py-2 hover:text-cchc-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#the-issue"
              className="block py-2 hover:text-cchc-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              The Issue
            </Link>
            <Link
              href="#calculator"
              className="block py-2 hover:text-cchc-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tax Calculator
            </Link>
            <Link
              href="#gatekeepers"
              className="block py-2 hover:text-cchc-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Gatekeeper Watch
            </Link>
            <Button variant="gold" size="lg" className="w-full mt-2">
              Donate
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}

