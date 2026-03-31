"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-bold text-primary tracking-tight">
              Fuqua Finishes
            </span>
            <span className="text-xs text-muted-foreground font-medium">LLC</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+17135172039"
              className="flex items-center gap-2 text-sm font-medium text-primary"
            >
              <Phone className="w-4 h-4" />
              (713) 517-2039
            </a>
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent-dark text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              Request a Quote
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/"
              className="block text-base font-medium text-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/products"
              className="block text-base font-medium text-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/about"
              className="block text-base font-medium text-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-base font-medium text-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-3 border-t border-gray-100 space-y-3">
              <a
                href="tel:+17135172039"
                className="flex items-center gap-2 text-sm font-medium text-primary"
              >
                <Phone className="w-4 h-4" />
                (713) 517-2039
              </a>
              <Link
                href="/contact"
                className="block text-center bg-accent hover:bg-accent-dark text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
