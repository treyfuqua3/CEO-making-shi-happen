import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, Ruler, Droplets, Palette } from "lucide-react"

export const metadata: Metadata = {
  title: "Products | Fuqua Finishes LLC - TruBath Materials & More",
  description:
    "Explore TruBath porcelain systems and premium building materials from Fuqua Finishes LLC. Houston's trusted supplier for contractors and builders.",
}

const trubathProducts = [
  {
    name: "TRUwall 3-Wall Shower Kits",
    description:
      "Patented 16mm porcelain wall panel system with MightySlab technology. 3-wall configuration with 36\" side panels and 63\" back panel at 96\" height. Available in all 4 designer colors — Polished and Matte finishes.",
    specs: ["36\" x 96\" side panels", "63\" x 96\" back panel", "16mm thick porcelain"],
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "TRUwall Ledge Wall",
    description:
      "Full wall coverage system with upper and lower panels plus ledge detail. Panels at 63\" wide with 36\" side returns, 96\" total height. Creates a seamless, built-in look with an integrated shelf ledge.",
    specs: ["63\" x 96\" panels", "Built-in ledge detail", "5/8\" ledge depth"],
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "TRUpan Shower Base",
    description:
      "Porcelain shower base in standard 59¾\" x 32\" size. Available with left, right, or center drain options. Custom sizes available. Matte finish in all 4 colors for a coordinated, slip-resistant surface.",
    specs: ["59¾\" x 32\" standard", "Left/Right/Center drain", "Custom sizes available"],
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "TRUtops Vanities & Sinks",
    description:
      "Porcelain vanity tops custom fabricated in all 4 colors. Multiple sink options: Integrated sink (White Onyx & Statuario Lenardo Polished), Undermount sink (Lims Ivory Matte), and Vessel sink (Calcutta Oro Polished).",
    specs: ["Integrated sink option", "Undermount sink option", "Vessel sink option"],
    image:
      "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "TRUniche Shelves & Storage",
    description:
      "Matching linear shelves and recessed niches that integrate perfectly with TRUwall panels. Color-matched to your wall panels for a seamless, built-in look.",
    specs: ["Color-matched porcelain", "Recessed installation", "Multiple sizes"],
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "TRUfloor Tiles",
    description:
      "Full slab porcelain floor sections at 126\" x 63\". Available in all 4 colors. Coordinating floor coverage that matches your TRUwall panels for a complete, cohesive bathroom from wall to floor.",
    specs: ["126\" x 63\" full slabs", "All 4 colors available", "Polished & Matte finishes"],
    image:
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?q=80&w=600&auto=format&fit=crop",
  },
]

const colorOptions = [
  {
    name: "White Onyx Polished",
    description: "Soft white with subtle blue-grey translucent veining",
    finish: "Polished",
    image:
      "https://images.unsplash.com/photo-1517467139951-f5a925c5f502?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Calcutta Oro Polished",
    description: "Warm white marble with elegant gold and tan veining",
    finish: "Polished",
    image:
      "https://images.unsplash.com/photo-1618220252344-8ec99ec65b75?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Lims Ivory Matte",
    description: "Warm ivory tone with a smooth, uniform matte texture",
    finish: "Matte",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Statuario Lenardo Polished",
    description: "Bright white with bold, dramatic grey veining",
    finish: "Polished",
    image:
      "https://images.unsplash.com/photo-1555448248-2571daf6344b?q=80&w=400&auto=format&fit=crop",
  },
]

export default function ProductsPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Our Products
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Fuqua Finishes LLC supplies premium building materials for Houston
            area projects. Explore our current product lines below.
          </p>
        </div>
      </section>

      {/* TruBath Products */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-accent-dark uppercase tracking-wider mb-2">
            Partner Brand
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4">
            TRUbath Porcelain Systems
          </h2>
          <p className="text-muted-foreground max-w-3xl mb-12">
            TRUbath delivers a complete porcelain bathroom experience &mdash;
            large-format panels that install quickly, clean easily, and look
            stunning for years. Fuqua Finishes LLC is your Houston source for the
            full TRUbath product line.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trubathProducts.map((product) => (
              <div
                key={product.name}
                className="group rounded-2xl overflow-hidden bg-white border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="h-56 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-primary mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {product.description}
                  </p>
                  <ul className="mb-4 space-y-1">
                    {product.specs.map((spec) => (
                      <li key={spec} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Ruler className="w-3 h-3 text-primary flex-shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-light transition-colors"
                  >
                    Inquire Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Color Options */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Palette className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-center">
              TRUbath Color Sections
            </h2>
          </div>
          <p className="text-center text-muted-foreground mb-4 max-w-xl mx-auto">
            Available in 4 designer porcelain colors. Each color comes as a full slab
            (126&quot; x 63&quot;) and is available across all TRUbath products.
          </p>
          <p className="text-center text-sm text-muted-foreground mb-12 max-w-lg mx-auto">
            All colors available in Polished or Matte finishes depending on product.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {colorOptions.map((color) => (
              <div key={color.name} className="text-center group">
                <div className="aspect-square rounded-xl overflow-hidden shadow-lg mb-3 border border-gray-200 group-hover:shadow-xl transition-shadow">
                  <Image
                    src={color.image}
                    alt={color.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-semibold text-sm text-primary">{color.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{color.description}</p>
                <span className="inline-block mt-2 text-[10px] font-medium uppercase tracking-wider bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                  {color.finish}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sink Options Detail */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Droplets className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-center">
              TRUtops Sink Options by Color
            </h2>
          </div>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Each color offers a specific sink style, custom fabricated to match your bathroom design.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { color: "White Onyx Polished", sink: "Integrated Sink", desc: "Seamless built-in basin with polished white onyx surface" },
              { color: "Statuario Lenardo Polished", sink: "Integrated Sink", desc: "Built-in basin with dramatic grey-veined polished surface" },
              { color: "Lims Ivory Matte", sink: "Undermount Sink", desc: "Clean undermount cutout with warm ivory matte finish" },
              { color: "Calcutta Oro Polished", sink: "Vessel Sink", desc: "Raised vessel basin with elegant gold-veined polished surface" },
            ].map((item) => (
              <div key={item.color} className="bg-muted rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-sm text-primary mb-1">{item.color}</h3>
                <p className="text-primary font-semibold text-lg mb-2">{item.sink}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Coming Soon */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Clock className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            More Materials Coming Soon
          </h2>
          <p className="text-muted-foreground mb-8">
            Fuqua Finishes LLC is expanding our product catalog. We&apos;re adding
            new material lines to serve more of your project needs. Stay tuned.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Get Notified
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need Materials for Your Project?
          </h2>
          <p className="text-gray-300 mb-8">
            Contact Fuqua Finishes LLC for pricing, availability, and expert
            recommendations.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent hover:bg-accent-dark text-primary font-bold px-8 py-3.5 rounded-lg transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </main>
  )
}
