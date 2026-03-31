import Link from "next/link"

const footerLinks = [
  { href: "#solutions", label: "Solutions" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-white/70 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-bold tracking-tight text-white">
                TRU<span className="text-accent">bath</span>
              </span>
              <span className="block text-xs tracking-wide uppercase text-white/40 mt-0.5">
                Houston
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Premium porcelain bathroom systems for remodelers and dealer partners
              in the Houston metro area.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>info@example.com</li>
              <li>(713) 000-0000</li>
              <li>Houston, TX Metro Area</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} TRUbath Houston. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            TRUbath is a registered trademark of TRUbath LLC.
          </p>
        </div>
      </div>
    </footer>
  )
}
