export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.15em] text-accent font-medium mb-3">
              About Us
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Your Houston Bathroom Partner
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We are the exclusive Houston-area partner for TRUbath — a premium
                porcelain bathroom system engineered for faster installation, lasting
                durability, and a luxury finish that homeowners love.
              </p>
              <p>
                Our role is simple: connect qualified remodelers, contractors, and
                dealers with the best bathroom product system on the market. We
                provide the material, the knowledge, and the support so you can
                deliver better bathrooms and grow your business.
              </p>
              <p>
                We believe the Houston remodel market deserves a better standard.
                Whether you&apos;re an established firm looking to upgrade your bathroom
                offering or a growing operator ready to scale, we&apos;re here to be
                your strategic partner.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-8 rounded-xl bg-muted border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Our Approach
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We don&apos;t just sell material — we build partnerships. Every dealer
                relationship is built on product knowledge, market support, and a
                shared commitment to quality.
              </p>
            </div>
            <div className="p-8 rounded-xl bg-muted border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Houston Market Focus
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We are focused exclusively on the Houston metro area, which means
                you get a local partner who understands your market, your
                customers, and your competition.
              </p>
            </div>
            <div className="p-8 rounded-xl bg-muted border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Beyond Bathrooms
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                TRUbath is our flagship product, but our vision extends to providing
                a full suite of premium remodel solutions to our dealer network as
                we grow together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
