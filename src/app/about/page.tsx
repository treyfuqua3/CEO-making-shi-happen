import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Building2, Handshake, Users, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "About | Fuqua Finishes LLC - Houston Materials Supplier",
  description:
    "Learn about Fuqua Finishes LLC, Houston's trusted materials supplier. Our story, our TruBath partnership, and our commitment to quality service.",
}

const trustIndicators = [
  {
    icon: Building2,
    title: "Houston-Based",
    description: "Local team serving the greater Houston area with fast, reliable service.",
  },
  {
    icon: Handshake,
    title: "TruBath Partner",
    description: "Authorized supplier of TruBath porcelain systems for the Houston market.",
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
    description: "We only carry proven, premium materials that meet the highest standards.",
  },
]

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            About Fuqua Finishes LLC
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Houston&apos;s trusted source for premium building materials and finishes.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-6">
                Your Houston Materials Partner
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Fuqua Finishes LLC was founded with a clear mission: to be
                  Houston&apos;s most reliable supplier of premium building
                  materials. We understand that contractors and builders need more
                  than just products &mdash; they need a dependable partner who
                  delivers the right materials, on time, every time.
                </p>
                <p>
                  Based in Houston, we serve contractors, builders, remodelers, and
                  project decision-makers across the greater Houston area. Our deep
                  understanding of the local market means we know what works for
                  Houston projects and can provide expert guidance on material
                  selection.
                </p>
                <p>
                  We started with TruBath porcelain systems as our flagship product
                  line, and we&apos;re actively expanding our catalog to cover more
                  of your project needs. At Fuqua Finishes LLC, we believe in
                  quality over quantity &mdash; every product line we carry has been
                  vetted for durability, performance, and value.
                </p>
              </div>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
                alt="Modern home showcasing quality finishes"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl object-cover w-full h-[400px] md:h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12">
            Why Work With Fuqua Finishes LLC
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustIndicators.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop"
                alt="Premium bathroom with TruBath materials"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl object-cover w-full h-[400px] md:h-[500px]"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                Our Partnership
              </p>
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-6">
                TruBath &amp; Fuqua Finishes LLC
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Fuqua Finishes LLC has partnered with TruBath to bring their
                  innovative porcelain bathroom systems to the Houston market.
                  TruBath was created to eliminate the tradeoffs homeowners have
                  faced for decades &mdash; grout-heavy tile or plastic showers,
                  long construction timelines, and pieced-together designs.
                </p>
                <p>
                  Through this partnership, Fuqua Finishes LLC provides the full
                  TruBath product line &mdash; from wall panels and shower bases to
                  vanities and coordinating floor tiles. We handle supply,
                  logistics, and local support so that your project runs smoothly
                  from start to finish.
                </p>
              </div>
              <Link
                href="/products"
                className="inline-block mt-6 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Explore TruBath Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-gray-300 mb-8">
            Whether you&apos;re a contractor, builder, or homeowner, Fuqua Finishes
            LLC is here to supply the materials your project needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent hover:bg-accent-dark text-primary font-bold px-8 py-3.5 rounded-lg font-semibold transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  )
}
