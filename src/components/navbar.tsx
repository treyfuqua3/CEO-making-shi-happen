"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link href="/" className="flex items-baseline gap-2">
            <span className="font-display text-xl md:text-2xl font-normal text-stone-900 tracking-tight">
              Fuqua Finishes
            </span>
            <span className="eyebrow text-stone-400">LLC</span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            <Link
              href="/"
              className="text-xs font-medium uppercase tracking-[0.18em] text-stone-600 hover:text-stone-900 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-xs font-medium uppercase tracking-[0.18em] text-stone-600 hover:text-stone-900 transition-colors"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="text-xs font-medium uppercase tracking-[0.18em] text-stone-600 hover:text-stone-900 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-xs font-medium uppercase tracking-[0.18em] text-stone-600 hover:text-stone-900 transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-5">
            <a
              href="tel:+17135172039"
              className="flex items-center gap-2 text-xs font-medium text-stone-700 hover:text-stone-900 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              (713) 517-2039
            </a>
            <Link
              href="/contact"
              className="rounded-full bg-primary hover:bg-primary-light text-white px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 shadow-sm hover:shadow-luxury"
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
        <div className="md:hidden bg-white border-t border-stone-200/60">
          <div className="px-4 py-5 space-y-4">
            <Link
              href="/"
              className="block text-sm font-medium uppercase tracking-[0.18em] text-stone-700 hover:text-stone-900"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/products"
              className="block text-sm font-medium uppercase tracking-[0.18em] text-stone-700 hover:text-stone-900"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/about"
              className="block text-sm font-medium uppercase tracking-[0.18em] text-stone-700 hover:text-stone-900"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-sm font-medium uppercase tracking-[0.18em] text-stone-700 hover:text-stone-900"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 border-t border-stone-200/60 space-y-3">
              <a
                href="tel:+17135172039"
                className="flex items-center gap-2 text-sm font-medium text-stone-700"
              >
                <Phone className="w-4 h-4" />
                (713) 517-2039
              </a>
              <Link
                href="/contact"
                className="block text-center rounded-full bg-primary hover:bg-primary-light text-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-colors"
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
