import {
  Sparkles,
  Zap,
  Layers,
  Presentation,
  BarChart3,
  CheckCircle,
} from "lucide-react"

const benefits = [
  {
    icon: Sparkles,
    title: "Premium Appearance",
    description: "Natural stone-inspired porcelain that elevates every bathroom. A product homeowners love on sight.",
  },
  {
    icon: Zap,
    title: "Efficient Workflow",
    description: "Fewer steps, fewer trades, fewer days on-site. Complete bathroom installs in roughly a day.",
  },
  {
    icon: Layers,
    title: "Cleaner Install Process",
    description: "Large-format panels mean less grout, less mess, and a cleaner job site from start to finish.",
  },
  {
    icon: Presentation,
    title: "Strong Homeowner Presentation",
    description: "A complete, cohesive product system that makes your sales conversations easier and more compelling.",
  },
  {
    icon: BarChart3,
    title: "Scalable System",
    description: "Standardized products and processes let you take on more projects without adding complexity.",
  },
  {
    icon: CheckCircle,
    title: "Built for Professionals",
    description: "Designed with input from experienced remodelers. This is a system made for how you actually work.",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-[0.15em] text-accent font-medium mb-3">
            Competitive Advantages
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Why Professionals Choose This System
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <benefit.icon className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
