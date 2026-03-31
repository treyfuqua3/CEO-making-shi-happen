import { MessageSquare, Search, BookOpen, Rocket } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Connect With Us",
    description:
      "Reach out to start a conversation. Tell us about your business, your market, and your goals.",
  },
  {
    icon: Search,
    step: "02",
    title: "Review the Fit",
    description:
      "We'll walk through the product system, review your market opportunity, and see if it's a good match.",
  },
  {
    icon: BookOpen,
    step: "03",
    title: "Learn the System",
    description:
      "Get hands-on with the product line, installation process, and everything you need to present with confidence.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Grow Together",
    description:
      "Launch in your market with ongoing support, product access, and a partnership built for long-term growth.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-[0.15em] text-accent font-medium mb-3">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Getting Started Is Simple
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            From first conversation to first project — we make onboarding straightforward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={item.step} className="relative text-center">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-border" />
              )}
              <div className="w-20 h-20 rounded-full bg-primary/5 flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-2">
                Step {item.step}
              </p>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
