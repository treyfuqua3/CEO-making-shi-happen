import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Building2, Handshake, Users, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "About | Fuqua Finishes LLC - Houston Materials Supplier",
  description:
    "Learn about Fuqua Finishes LLC, Houston's trusted materials supplier. Our story, our TRUbath partnership, and our commitment to quality service.",
}

const trustIndicators = [
  {
    icon: Building2,
    title: "Houston-Based",
    description:
      "Local team serving the greater Houston area with fast, reliable service.",
  },
  {
    icon: Handshake,
    title: "TRUbath Partner",
    description:
      "Authorized supplier of TRUbath porcelain systems for the Houston market.",
  },
  {
    icon: Users,
    title: "Contractor Focused",
    description:
      "Built to serve contractors, builders, and project decision-makers efficiently.",
  },
  {
    icon: Award,
    title: "Quality Commitment",
    description:
      "We only carry proven, premium materials that meet the highest standards.",
  },
]

export default function AboutPage() {
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
            <span className="eyebrow text-champagne">Our Story</span>
            <span className="luxury-divider text-champagne-dark" aria-hidden />
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-light tracking-tight text-white leading-[1.02]">
            About
          </h1>
          <p className="mt-6 text-stone-300 max-w-2xl mx-auto leading-relaxed md:text-lg">
            Houston&apos;s trusted source for premium building materials and
            finishes.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="luxury-divider text-stone-400" aria-hidden />
                <span className="eyebrow text-stone-500">
                  Your Houston Partner
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-stone-900 mb-8 leading-[1.05]">
                Built on craft, supplied with care.
              </h2>
              <div className="space-y-5 text-stone-600 leading-relaxed md:text-lg">
                <p>
                  Fuqua Finishes LLC was founded with a clear mission: to be
                  Houston&apos;s most reliable supplier of premium building
                  materials. We understand that contractors and builders need
                  more than just products &mdash; they need a dependable partner
                  who delivers the right materials, on time, every time.
                </p>
                <p>
                  Based in Houston, we serve contractors, builders, remodelers,
                  and project decision-makers across the greater Houston area.
                  Our deep understanding of the local market means we know what
                  works for Houston projects and can provide expert guidance on
                  material selection.
                </p>
                <p>
                  We started with TRUbath porcelain systems as our flagship
                  product line, and we&apos;re actively expanding our catalog to
                  cover more of your project needs. At Fuqua Finishes LLC, we
                  believe in quality over quantity &mdash; every product line we
                  carry has been vetted for durability, performance, and value.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-[32px] shadow-luxury-lg ring-1 ring-stone-200">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
                  alt="Modern home showcasing quality finishes"
                  width={800}
                  height={1000}
                  className="object-cover w-full h-[500px] md:h-[640px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="luxury-divider text-stone-400" aria-hidden />
              <span className="eyebrow text-stone-500">Why Work With Us</span>
              <span className="luxury-divider text-stone-400" aria-hidden />
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-light tracking-tight text-stone-900 leading-[1.05]">
              A supplier you can trust.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {trustIndicators.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-3xl p-8 text-center ring-1 ring-stone-200/80 hover:shadow-luxury transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mx-auto mb-6 ring-1 ring-primary/10">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-xl text-stone-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 md:order-1">
              <div className="overflow-hidden rounded-[32px] shadow-luxury-lg ring-1 ring-stone-200">
                <Image
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop"
                  alt="Premium bathroom with TRUbath materials"
                  width={800}
                  height={1000}
                  className="object-cover w-full h-[500px] md:h-[640px]"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-5">
                <span className="luxury-divider text-stone-400" aria-hidden />
                <span className="eyebrow text-stone-500">Our Partnership</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-stone-900 mb-8 leading-[1.05]">
                TRUbath &amp; Fuqua Finishes.
              </h2>
              <div className="space-y-5 text-stone-600 leading-relaxed md:text-lg">
                <p>
                  Fuqua Finishes LLC has partnered with TRUbath to bring their
                  innovative porcelain bathroom systems to the Houston market.
                  TRUbath was created to eliminate the tradeoffs homeowners have
                  faced for decades &mdash; grout-heavy tile or plastic showers,
                  long construction timelines, and pieced-together designs.
                </p>
                <p>
                  Through this partnership, Fuqua Finishes LLC provides the full
                  TRUbath product line &mdash; from wall panels and shower bases
                  to vanities and coordinating floor tiles. We handle supply,
                  logistics, and local support so that your project runs smoothly
                  from start to finish.
                </p>
              </div>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 mt-10 rounded-full bg-primary hover:bg-primary-light text-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-300 shadow-luxury"
              >
                Explore TRUbath Products
              </Link>
            </div>
          </div>
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
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 leading-[1.05]">
            Let&apos;s work together.
          </h2>
          <p className="text-stone-300 mb-10 md:text-lg leading-relaxed">
            Whether you&apos;re a contractor, builder, or homeowner, Fuqua
            Finishes LLC is here to supply the materials your project needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent hover:bg-accent-light text-primary font-bold px-8 py-4 text-sm uppercase tracking-[0.18em] transition-all duration-300 shadow-luxury"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  )
}
