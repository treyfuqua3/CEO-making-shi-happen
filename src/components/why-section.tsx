"use client"

import {
  Gem,
  Clock,
  Paintbrush,
  TrendingUp,
  Wrench,
  Shield,
} from "lucide-react"

const features = [
  {
    icon: Gem,
    title: "Premium Finish",
    description:
      "Large-format porcelain panels inspired by natural marble and stone. A luxury look that lasts.",
  },
  {
    icon: Clock,
    title: "Streamlined Installation",
    description:
      "Engineered panel system designed for faster installs — typically completed in about a day.",
  },
  {
    icon: Paintbrush,
    title: "Modern Design",
    description:
      "Clean lines, minimal grout, seamless surfaces. A bathroom that homeowners notice immediately.",
  },
  {
    icon: Wrench,
    title: "Operational Efficiency",
    description:
      "Fewer trades, fewer callbacks, cleaner job sites. Built for how professional remodelers actually work.",
  },
  {
    icon: TrendingUp,
    title: "Scalable for Growth",
    description:
      "A systemized product line that lets you scale your bathroom business without adding complexity.",
  },
  {
    icon: Shield,
    title: "Built to Last",
    description:
      "Non-porous surface resists mold, stains, and scratching. No sealing required. Low maintenance for homeowners.",
  },
]

export function WhySection() {
  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-[0.15em] text-accent font-medium mb-3">
            Why TRUbath
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            A Smarter Bathroom System
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Large-format porcelain wall panels, matching shower bases, coordinating
            vanities, and floor tiles — designed as a complete system for faster,
            cleaner, more profitable bathroom remodels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-8 rounded-xl border border-border bg-white hover:shadow-lg hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-5 group-hover:bg-accent/10 transition-colors">
                <feature.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
