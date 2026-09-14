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
    title: "TRÜbath Partner",
    description:
      "Authorized supplier of TRÜbath porcelain systems for the Houston market.",
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

const beforeAfterProjects = [
  {
    title: "Calacatta Oro Bathroom",
    caption: "Dated tile surround replaced with full-height porcelain panels.",
    before: "/calacatta-before.jpg",
    beforeAlt: "Houston bathroom before the TRÜbath porcelain installation",
    after: "/calacatta-after.jpg",
    afterAlt: "The same bathroom finished in Calacatta Oro porcelain panels",
  },
  {
    title: "Avorio Limestone Bathroom",
    caption: "Grout-heavy shower rebuilt in warm matte limestone porcelain.",
    before: "/limestone-before.jpg",
    beforeAlt: "Houston shower before the TRÜbath porcelain installation",
    after: "/limestone-after.jpg",
    afterAlt: "The same shower finished in Avorio Limestone porcelain panels",
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
                  We started with TRÜbath porcelain systems as our flagship
                  product line, and we&apos;re actively expanding our catalog to
                  cover more of your project needs. At Fuqua Finishes LLC, we
                  believe in quality over quantity &mdash; every product line we
                  carry has been vetted for durability, performance, and value.
                </p>
              </div>
            </div>
            <div className="relative">
              {/* SWAP POINT 1 — change src to any photo in public/ */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] shadow-luxury-lg ring-1 ring-stone-200">
                <Image
                  src="/hero-1.jpg"
                  alt="Completed Houston bathroom installation by Fuqua Finishes LLC"
                  width={900}
                  height={1125}
                  className="absolute inset-0 h-full w-full object-cover"
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

      {/* Before & After */}
      <section className="relative py-20 md:py-28 bg-stone-50 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 bg-luxury-radial"
          aria-hidden
        />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14 md:mb-20">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="luxury-divider text-stone-400" aria-hidden />
              <span className="eyebrow text-stone-500">Before &amp; After</span>
              <span className="luxury-divider text-stone-400" aria-hidden />
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-light tracking-tight text-stone-900 leading-[1.05]">
              The same room, two or three days later.
            </h2>
            <p className="mt-6 text-balance text-base md:text-lg text-stone-600 leading-relaxed">
              Real Houston bathrooms finished with TRÜbath porcelain supplied by
              Fuqua Finishes LLC.
            </p>
          </div>

          <div className="space-y-12 md:space-y-16">
            {beforeAfterProjects.map((project) => (
              <article key={project.title}>
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  {[
                    { label: "Before", src: project.before, alt: project.beforeAlt },
                    { label: "After", src: project.after, alt: project.afterAlt },
                  ].map((shot) => (
                    <div key={shot.label} className="relative">
                      <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-stone-200 ring-1 ring-stone-200 shadow-luxury">
                        <Image
                          src={shot.src}
                          alt={shot.alt}
                          width={800}
                          height={1000}
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                      </div>
                      <span className="eyebrow absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[0.65rem] text-stone-700 ring-1 ring-white/70 backdrop-blur-sm">
                        {shot.label}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-display text-xl text-stone-900 md:text-2xl">
                    {project.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed sm:text-right">
                    {project.caption}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 md:order-1">
              {/* SWAP POINT 2 — change src to any photo in public/ */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] shadow-luxury-lg ring-1 ring-stone-200">
                <Image
                  src="/co-g1.jpg"
                  alt="TRÜbath porcelain bathroom supplied by Fuqua Finishes LLC"
                  width={900}
                  height={1125}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-5">
                <span className="luxury-divider text-stone-400" aria-hidden />
                <span className="eyebrow text-stone-500">Our Partnership</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-stone-900 mb-8 leading-[1.05]">
                TRÜbath &amp; Fuqua Finishes.
              </h2>
              <div className="space-y-5 text-stone-600 leading-relaxed md:text-lg">
                <p>
                  Fuqua Finishes LLC has partnered with TRÜbath to bring their
                  innovative porcelain bathroom systems to the Houston market.
                  TRÜbath was created to eliminate the tradeoffs homeowners have
                  faced for decades &mdash; grout-heavy tile or plastic showers,
                  long construction timelines, and pieced-together designs.
                </p>
                <p>
                  Through this partnership, Fuqua Finishes LLC provides the full
                  TRÜbath product line &mdash; from wall panels and shower bases
                  to vanities and coordinating floor tiles. We handle supply,
                  logistics, and local support so that your project runs smoothly
                  from start to finish.
                </p>
              </div>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 mt-10 rounded-full bg-primary hover:bg-primary-light text-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-300 shadow-luxury"
              >
                Explore TRÜbath Products
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
