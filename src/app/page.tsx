import Link from "next/link"
import Image from "next/image"
import {
  Truck,
  ShieldCheck,
  Clock,
  MapPin,
  ArrowRight,
  Droplets,
  Sparkles,
  Leaf,
} from "lucide-react"
import { LandingHero } from "@/components/landing-hero"
import { PorcelainFinishes } from "@/components/porcelain-finishes"

const valueProps = [
  {
    icon: Truck,
    title: "Reliable Supply",
    description:
      "Dependable inventory and delivery for your projects, on schedule every time.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Materials",
    description:
      "Only premium, proven products that meet the highest standards for durability and finish.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "Quick order processing and delivery so your projects stay on track.",
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    description:
      "Houston-based team that understands the local market and your business needs.",
  },
]

const trubathFeatures = [
  {
    icon: Droplets,
    title: "Low Maintenance",
    description: "Non-porous surface resists mold, stains, and requires no sealing.",
  },
  {
    icon: Sparkles,
    title: "Timeless Beauty",
    description: "Inspired by natural marble and stone. Won't fade or yellow over time.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Recognized as environmentally friendly. Promotes sustainability.",
  },
  {
    icon: ShieldCheck,
    title: "Exceptional Durability",
    description: "Hard surface resists scratching and breakdown. Built to last.",
  },
]

export default function Home() {
  return (
    <main>
      <LandingHero />

      {/* Value Proposition Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="luxury-divider text-stone-400" aria-hidden />
              <span className="eyebrow text-stone-500">Why Fuqua Finishes</span>
              <span className="luxury-divider text-stone-400" aria-hidden />
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-stone-900 leading-[1.05]">
              Premium supply, quietly confident service.
            </h2>
            <p className="mt-6 text-balance text-base md:text-lg text-stone-600 leading-relaxed">
              We deliver architectural building materials with the speed,
              reliability, and product knowledge Houston contractors and builders
              count on.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {valueProps.map((item) => (
              <div
                key={item.title}
                className="group relative rounded-3xl bg-ivory p-8 ring-1 ring-stone-200/80 transition-all duration-500 hover:-translate-y-1 hover:shadow-luxury"
              >
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-6 ring-1 ring-primary/10">
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

      {/* TRUbath Featured Section */}
      <section className="relative py-20 md:py-28 bg-stone-50 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 bg-luxury-radial"
          aria-hidden
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="luxury-divider text-stone-400" aria-hidden />
                <span className="eyebrow text-stone-500">
                  Featured Partner Brand
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-stone-900 leading-[1.05] mb-6">
                TRUbath Porcelain Systems
              </h2>
              <p className="text-stone-600 mb-10 leading-relaxed md:text-lg">
                Fuqua Finishes LLC proudly supplies TRUbath &mdash; a patented
                16mm porcelain wall panel system engineered for faster
                installation, easier handling, and exceptional durability.
                Beautiful, durable bathrooms installed in about a day.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
                {trubathFeatures.map((feature) => (
                  <div key={feature.title} className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-primary/5 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ring-1 ring-primary/10">
                      <feature.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-display text-base text-stone-900">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-stone-600 leading-relaxed mt-1">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/products"
                className="group inline-flex items-center gap-2 rounded-full bg-primary hover:bg-primary-light text-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-300 shadow-luxury hover:shadow-luxury-lg"
              >
                View Products
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-[32px] shadow-luxury-lg ring-1 ring-stone-200">
                <Image
                  src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1200&auto=format&fit=crop"
                  alt="Modern porcelain bathroom showcasing TRUbath materials"
                  width={700}
                  height={900}
                  className="object-cover w-full h-[480px] md:h-[600px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 md:-left-10 bg-white rounded-2xl shadow-luxury-lg p-5 ring-1 ring-stone-200">
                <p className="eyebrow text-stone-500">Available in</p>
                <p className="font-display text-xl text-stone-900 mt-1">
                  4 Designer Finishes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Porcelain Finishes — V2 premium collection showcase */}
      <PorcelainFinishes
        eyebrow="Porcelain Collection"
        heading="The Finishes"
        subheading="Designer porcelain colorways available across the full TRUbath system — compare each finish in an authentic bathroom application."
      />

      {/* Complete System Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="luxury-divider text-stone-400" aria-hidden />
              <span className="eyebrow text-stone-500">Complete System</span>
              <span className="luxury-divider text-stone-400" aria-hidden />
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-light tracking-tight text-stone-900 leading-[1.05]">
              Wall to floor, perfectly coordinated.
            </h2>
            <p className="mt-6 text-balance text-base md:text-lg text-stone-600 leading-relaxed">
              Complete the look with matching TRUbath components &mdash;
              available through Fuqua Finishes LLC in every designer finish.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                name: "TRUpan Shower Base",
                desc: "59¾\" x 32\" porcelain base with left, right, or center drain options",
                img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=600&auto=format&fit=crop",
              },
              {
                name: "TRUniche Shelves & Storage",
                desc: "Color-matched recessed niches and linear shelves",
                img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop",
              },
              {
                name: "TRUtops Vanities & Sinks",
                desc: "Integrated, undermount, or vessel sink options in all finishes",
                img: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?q=80&w=600&auto=format&fit=crop",
              },
              {
                name: "TRUfloor Full Slabs",
                desc: "126\" x 63\" porcelain floor slabs in all designer finishes",
                img: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?q=80&w=600&auto=format&fit=crop",
              },
            ].map((product) => (
              <div
                key={product.name}
                className="group rounded-[24px] overflow-hidden bg-ivory ring-1 ring-stone-200/80 hover:shadow-luxury transition-all duration-500 hover:-translate-y-1"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <Image
                    src={product.img}
                    alt={product.name}
                    width={600}
                    height={750}
                    className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-[1200ms] ease-out"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg text-stone-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {product.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="luxury-divider text-champagne-dark" aria-hidden />
            <span className="eyebrow text-champagne">Start a Project</span>
            <span className="luxury-divider text-champagne-dark" aria-hidden />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 leading-[1.05]">
            Ready to begin?
          </h2>
          <p className="text-stone-300 mb-10 max-w-xl mx-auto leading-relaxed md:text-lg">
            Get in touch with Fuqua Finishes LLC for a quote on premium TRUbath
            materials and building finishes for your Houston area project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent hover:bg-accent-light text-primary px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] transition-all duration-300 shadow-luxury"
            >
              Request a Quote
            </Link>
            <a
              href="tel:+17135172039"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 hover:border-white text-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-300"
            >
              Call (713) 517-2039
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
