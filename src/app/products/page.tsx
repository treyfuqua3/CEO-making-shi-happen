import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, Ruler, Droplets } from "lucide-react"
import { PorcelainFinishes } from "@/components/porcelain-finishes"

export const metadata: Metadata = {
  title: "Products | Fuqua Finishes LLC - TRUbath Porcelain Systems",
  description:
    "Explore TRUbath porcelain systems and premium building materials from Fuqua Finishes LLC. Houston's trusted supplier for contractors and builders.",
}

const trubathProducts = [
  {
    name: "TRUwall 3-Wall Shower Kits",
    description:
      "Patented 16mm porcelain wall panel system with MightySlab technology. 3-wall configuration with 36\" side panels and 63\" back panel at 96\" height. Available in every designer finish — Polished and Matte.",
    specs: ["36\" x 96\" side panels", "63\" x 96\" back panel", "16mm thick porcelain"],
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "TRUwall Ledge Wall",
    description:
      "Full wall coverage system with upper and lower panels plus ledge detail. Panels at 63\" wide with 36\" side returns, 96\" total height. Creates a seamless, built-in look with an integrated shelf ledge.",
    specs: ["63\" x 96\" panels", "Built-in ledge detail", "5/8\" ledge depth"],
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "TRUpan Shower Base",
    description:
      "Porcelain shower base in standard 59¾\" x 32\" size. Available with left, right, or center drain options. Custom sizes available. Matte finish for a coordinated, slip-resistant surface.",
    specs: ["59¾\" x 32\" standard", "Left/Right/Center drain", "Custom sizes available"],
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "TRUtops Vanities & Sinks",
    description:
      "Porcelain vanity tops custom fabricated in every finish. Multiple sink options available: integrated, undermount, and vessel — matched to your selected colorway.",
    specs: ["Integrated sink option", "Undermount sink option", "Vessel sink option"],
    image:
      "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "TRUniche Shelves & Storage",
    description:
      "Matching linear shelves and recessed niches that integrate perfectly with TRUwall panels. Color-matched to your wall panels for a seamless, built-in look.",
    specs: ["Color-matched porcelain", "Recessed installation", "Multiple sizes"],
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "TRUfloor Tiles",
    description:
      "Full slab porcelain floor sections at 126\" x 63\". Coordinating floor coverage that matches your TRUwall panels for a complete, cohesive bathroom from wall to floor.",
    specs: ["126\" x 63\" full slabs", "All designer finishes", "Polished & Matte finishes"],
    image:
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?q=80&w=1000&auto=format&fit=crop",
  },
]

export default function ProductsPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative bg-stone-900 py-24 md:py-32 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at center, rgba(216,201,163,0.6) 0%, transparent 60%)",
          }}
          aria-hidden
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="luxury-divider text-champagne-dark" aria-hidden />
            <span className="eyebrow text-champagne">The Collection</span>
            <span className="luxury-divider text-champagne-dark" aria-hidden />
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-light tracking-tight text-white leading-[1.02]">
            Products
          </h1>
          <p className="mt-6 text-stone-300 max-w-2xl mx-auto leading-relaxed md:text-lg">
            Fuqua Finishes LLC supplies premium building materials for Houston
            area projects. Explore our current product lines below.
          </p>
        </div>
      </section>

      {/* TRUbath Products */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 md:mb-20">
            <div className="flex items-center gap-3 mb-5">
              <span className="luxury-divider text-stone-400" aria-hidden />
              <span className="eyebrow text-stone-500">Partner Brand</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-stone-900 leading-[1.05] mb-6">
              TRUbath Porcelain Systems
            </h2>
            <p className="text-stone-600 leading-relaxed md:text-lg">
              TRUbath delivers a complete porcelain bathroom experience &mdash;
              large-format panels that install quickly, clean easily, and look
              stunning for years. Fuqua Finishes LLC is your Houston source for the
              full TRUbath product line.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {trubathProducts.map((product) => (
              <div
                key={product.name}
                className="group rounded-[24px] overflow-hidden bg-ivory ring-1 ring-stone-200/80 hover:shadow-luxury transition-all duration-500 hover:-translate-y-1"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={800}
                    height={1000}
                    className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-[1200ms] ease-out"
                  />
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl text-stone-900 mb-3">
                    {product.name}
                  </h3>
                  <p className="text-sm text-stone-600 mb-5 leading-relaxed">
                    {product.description}
                  </p>
                  <ul className="mb-6 space-y-2">
                    {product.specs.map((spec) => (
                      <li
                        key={spec}
                        className="flex items-center gap-2 text-xs text-stone-500"
                      >
                        <Ruler className="w-3 h-3 text-primary flex-shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary hover:text-primary-light transition-colors"
                  >
                    Inquire Now
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* V2 Porcelain Finishes — swatch + photorealistic mockups */}
      <PorcelainFinishes
        eyebrow="Color Options"
        heading="Designer Finishes"
        subheading="Every TRUbath product is available in these designer porcelain colorways. Each card shows the finish in an authentic bathroom application."
        background="stone"
      />

      {/* Sink Options Detail */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14 md:mb-20">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="luxury-divider text-stone-400" aria-hidden />
              <span className="eyebrow inline-flex items-center gap-2 text-stone-500">
                <Droplets className="w-3.5 h-3.5 text-primary" />
                TRUtops Sink Options
              </span>
              <span className="luxury-divider text-stone-400" aria-hidden />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight text-stone-900 leading-[1.05]">
              Sink style, matched to finish.
            </h2>
            <p className="mt-6 text-stone-600 max-w-2xl mx-auto md:text-lg leading-relaxed">
              Each finish pairs with a signature sink style, custom fabricated
              to match your bathroom design.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                color: "Statuario Leonardo",
                sink: "Integrated Sink",
                desc: "Built-in basin with dramatic grey-veined polished surface.",
              },
              {
                color: "Calacatta Oro",
                sink: "Vessel Sink",
                desc: "Raised vessel basin with elegant gold-veined polished surface.",
              },
              {
                color: "Avorio Limestone",
                sink: "Undermount Sink",
                desc: "Clean undermount cutout with warm ivory matte finish.",
              },
            ].map((item) => (
              <div
                key={item.color}
                className="bg-ivory rounded-3xl p-8 text-center hover:shadow-luxury transition-all duration-500 hover:-translate-y-1 ring-1 ring-stone-200/80"
              >
                <p className="eyebrow text-stone-500 mb-2">{item.color}</p>
                <p className="font-display text-2xl text-stone-900 mb-3">
                  {item.sink}
                </p>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Coming Soon */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-8 ring-1 ring-primary/10">
            <Clock className="w-7 h-7 text-primary" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight text-stone-900 mb-6 leading-[1.05]">
            More materials, coming soon.
          </h2>
          <p className="text-stone-600 mb-10 leading-relaxed md:text-lg">
            Fuqua Finishes LLC is expanding our product catalog. We&apos;re adding
            new material lines to serve more of your project needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary hover:bg-primary-light text-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-300 shadow-luxury"
          >
            Get Notified
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28 bg-stone-900 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at top, rgba(216,201,163,0.6) 0%, transparent 60%)",
          }}
          aria-hidden
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight text-white mb-6 leading-[1.05]">
            Need materials for your project?
          </h2>
          <p className="text-stone-300 mb-10 md:text-lg leading-relaxed">
            Contact Fuqua Finishes LLC for pricing, availability, and expert
            recommendations.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent hover:bg-accent-light text-primary font-bold px-8 py-4 text-sm uppercase tracking-[0.18em] transition-all duration-300 shadow-luxury"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </main>
  )
}
