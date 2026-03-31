import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Products | Fuqua Finishes LLC - TruBath Materials & More",
  description:
    "Explore TruBath porcelain systems and premium building materials from Fuqua Finishes LLC. Houston's trusted supplier for contractors and builders.",
}

const trubathProducts = [
  {
    name: "TruBath Shower Kits",
    description:
      "Patented 16mm porcelain wall panel system with MightySlab technology. Faster installation, easier handling, and exceptional durability. Available in 4 designer porcelain colors.",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "TruPan Shower Base",
    description:
      "Matching porcelain shower base designed to complement your TruBath wall panels for a seamless, coordinated look.",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "TruNiche Shelves & Storage",
    description:
      "Matching linear shelves and recessed niches that integrate perfectly with TruBath wall panels.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "TruTops Vanities & Sinks",
    description:
      "Porcelain vanities, integrated sinks, and countertops custom fabricated to complete your bathroom design.",
    image:
      "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "TruFloor Tiles",
    description:
      'Coordinating 12"x24" floor tiles that match your TruBath wall panels for a complete, cohesive bathroom experience.',
    image:
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?q=80&w=600&auto=format&fit=crop",
  },
]

const colorOptions = [
  {
    name: "Calacatta Oro",
    description: "Warm white marble with elegant gold veining",
    image:
      "https://images.unsplash.com/photo-1618220252344-8ec99ec65b75?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "White Onyx Alabaster",
    description: "Soft white with subtle translucent veining",
    image:
      "https://images.unsplash.com/photo-1629196914168-3a2652305f9f?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Avorio Limestone",
    description: "Warm ivory tone with gentle natural texture",
    image:
      "https://images.unsplash.com/photo-1600607688960-e095ff83135c?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Statuario Leonardo",
    description: "Bright white with dramatic grey veining",
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
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
            Partner Brand
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4">
            TruBath Porcelain Systems
          </h2>
          <p className="text-muted-foreground max-w-3xl mb-12">
            TruBath delivers a complete porcelain bathroom experience &mdash;
            large-format panels that install quickly, clean easily, and look
            stunning for years. Fuqua Finishes LLC is your Houston source for the
            full TruBath product line.
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
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-accent-dark transition-colors"
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
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-4">
            Available in 4 Designer Porcelain Colors
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            Choose from four premium colorways inspired by natural marble and
            stone.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {colorOptions.map((color) => (
              <div key={color.name} className="text-center">
                <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-lg mb-3">
                  <Image
                    src={color.image}
                    alt={color.name}
                    width={300}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-semibold text-sm text-primary">{color.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Coming Soon */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Clock className="w-8 h-8 text-accent" />
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
            className="inline-block bg-accent hover:bg-accent-dark text-white px-8 py-3.5 rounded-lg font-semibold transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </main>
  )
}
