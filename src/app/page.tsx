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
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-primary mb-4">
            Why Houston Chooses Fuqua Finishes LLC
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            We deliver premium building materials with the speed, reliability,
            and service that contractors and builders count on.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((item) => (
              <div
                key={item.title}
                className="text-center p-6 rounded-2xl bg-muted hover:shadow-lg transition-shadow"
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

      {/* TruBath Featured Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                Featured Partner Brand
              </p>
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-6">
                TruBath Porcelain Systems
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Fuqua Finishes LLC proudly supplies TruBath &mdash; a patented
                16mm porcelain wall panel system engineered for faster
                installation, easier handling, and exceptional durability.
                Beautiful, durable bathrooms installed in about a day.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {trubathFeatures.map((feature) => (
                  <div key={feature.title} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <feature.icon className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-primary">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                View Products
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop"
                alt="Modern porcelain bathroom showcasing TruBath materials"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl object-cover w-full h-[400px] md:h-[500px]"
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4">
                <p className="text-xs text-muted-foreground">Available in</p>
                <p className="font-bold text-primary">4 Designer Colors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete System Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4">
            The Complete Porcelain Bathroom Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Complete the look from wall to floor with matching TruBath components,
            available through Fuqua Finishes LLC.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "TruPan Shower Base",
                desc: "Matching porcelain shower base",
                img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=400&auto=format&fit=crop",
              },
              {
                name: "TruNiche Shelves & Storage",
                desc: "Matching linear shelves and recessed niches",
                img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400&auto=format&fit=crop",
              },
              {
                name: "TruTops Vanities & Sinks",
                desc: "Porcelain vanities, integrated sinks, and countertops",
                img: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?q=80&w=400&auto=format&fit=crop",
              },
              {
                name: "TruFloor Tiles",
                desc: 'Coordinating 12"x24" floor tiles',
                img: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?q=80&w=400&auto=format&fit=crop",
              },
            ].map((product) => (
              <div
                key={product.name}
                className="group rounded-2xl overflow-hidden bg-muted hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <Image
                    src={product.img}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-primary mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{product.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Get in touch with Fuqua Finishes LLC for a quote on premium TruBath
            materials and building finishes for your Houston area project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-accent hover:bg-accent-dark text-white px-8 py-3.5 rounded-lg font-semibold transition-colors"
            >
              Request a Quote
            </Link>
            <a
              href="tel:+18325551234"
              className="inline-block border-2 border-white/30 hover:border-white text-white px-8 py-3.5 rounded-lg font-semibold transition-colors"
            >
              Call (832) 555-1234
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
