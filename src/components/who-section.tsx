import {
  Building2,
  HardHat,
  Handshake,
  Store,
  UserCheck,
} from "lucide-react"

const audiences = [
  {
    icon: HardHat,
    title: "Bathroom Remodelers",
    description: "Contractors focused on bath renovations looking for a premium, efficient product system.",
  },
  {
    icon: Building2,
    title: "Kitchen & Bath Firms",
    description: "Full-service firms that want to elevate their bathroom offering with a proven material system.",
  },
  {
    icon: Store,
    title: "Dealer Partners",
    description: "Businesses interested in carrying a premium bathroom product line for their local market.",
  },
  {
    icon: Handshake,
    title: "Installation Companies",
    description: "Professional installers seeking a faster, cleaner workflow with better margins.",
  },
  {
    icon: UserCheck,
    title: "Owner-Operators Ready to Grow",
    description: "Skilled operators looking to scale their remodel business with a systemized approach.",
  },
]

export function WhoSection() {
  return (
    <section className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-[0.15em] text-accent font-medium mb-3">
            Who We Work With
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Built for Serious Remodel Professionals
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            We partner with contractors, dealers, and remodel businesses in the Houston
            area who want a better bathroom product and a better way to grow.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {audiences.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 p-6 bg-white rounded-xl border border-border hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center shrink-0 mt-0.5">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
