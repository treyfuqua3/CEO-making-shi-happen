import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

// LinkedIn placeholder — verify with Trey before launch
const LINKEDIN_URL = "https://www.linkedin.com/in/trey-fuqua-22931a236"

export function Footer() {
  return (
    <footer className="relative bg-stone-900 text-white overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at top, rgba(216,201,163,0.6) 0%, transparent 60%)",
        }}
        aria-hidden
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          <div>
            <h3 className="font-display text-2xl font-light tracking-tight text-white mb-4">
              Fuqua Finishes LLC
            </h3>
            <div className="luxury-divider text-champagne-dark mb-4" aria-hidden />
            <p className="text-stone-300 text-sm leading-relaxed">
              Houston&apos;s trusted source for premium building materials and
              finishes. Proudly serving contractors, builders, and homeowners
              across the greater Houston area.
            </p>
          </div>

          <div>
            <h4 className="eyebrow text-champagne mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm text-stone-300">
              <li>
                <Link
                  href="/"
                  className="hover:text-champagne transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-champagne transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-champagne transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-champagne transition-colors"
                >
                  Contact / Request a Quote
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow text-champagne mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-stone-300">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-champagne flex-shrink-0" />
                <a
                  href="tel:+17135172039"
                  className="hover:text-champagne transition-colors"
                >
                  (713) 517-2039
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-champagne flex-shrink-0" />
                <a
                  href="mailto:trey.fuqua@trubath.com"
                  className="hover:text-champagne transition-colors"
                >
                  trey.fuqua@trubath.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-champagne mt-0.5 flex-shrink-0" />
                <span>Houston, TX &amp; Surrounding Areas</span>
              </li>
              <li className="flex items-center gap-3">
                <LinkedInIcon className="w-4 h-4 text-champagne flex-shrink-0" />
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-champagne transition-colors"
                >
                  LinkedIn &mdash; Trey Fuqua
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            &copy; {new Date().getFullYear()} Fuqua Finishes LLC. All rights
            reserved.
          </p>
          <p className="eyebrow text-stone-500">Premium Finishes. Delivered.</p>
        </div>
      </div>
    </footer>
  )
}
