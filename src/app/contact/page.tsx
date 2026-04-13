"use client"

import { useState, FormEvent } from "react"
import { Phone, Mail, MapPin, Clock, Loader2 } from "lucide-react"

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

// LinkedIn placeholder — verify with Trey before launch
const LINKEDIN_URL = "https://www.linkedin.com/in/trey-fuqua-22931a236"
const LINKEDIN_DISPLAY = "www.linkedin.com/in/trey-fuqua-22931a236"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      projectType: formData.get("Project Type"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitted(true)
      } else {
        setError("Something went wrong. Please try again or call us directly.")
      }
    } catch {
      setError("Something went wrong. Please try again or call us directly.")
    } finally {
      setLoading(false)
    }
  }

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
            <span className="eyebrow text-champagne">Get in Touch</span>
            <span className="luxury-divider text-champagne-dark" aria-hidden />
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-light tracking-tight text-white leading-[1.02]">
            Contact
          </h1>
          <p className="mt-6 text-stone-300 max-w-2xl mx-auto leading-relaxed md:text-lg">
            Ready to get started? Request a quote or reach out with questions.
            Our Houston-based team is here to help.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="luxury-divider text-stone-400" aria-hidden />
                <span className="eyebrow text-stone-500">Quote Request</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-light tracking-tight text-stone-900 mb-8 leading-[1.05]">
                Tell us about your project.
              </h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <h3 className="text-xl font-bold text-green-800 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-green-700">
                    We&apos;ve received your request. A member of the Fuqua
                    Finishes LLC team will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-primary mb-1.5"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-primary mb-1.5"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                        placeholder="Company name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-primary mb-1.5"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-primary mb-1.5"
                      >
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-sm font-medium text-primary mb-1.5"
                    >
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="Project Type"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors bg-white"
                    >
                      <option value="">Select a project type</option>
                      <option value="Residential Remodel">
                        Residential Remodel
                      </option>
                      <option value="New Construction">New Construction</option>
                      <option value="Commercial Project">Commercial Project</option>
                      <option value="Multi-Family / HOA">Multi-Family / HOA</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-primary mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors resize-none"
                      placeholder="Tell us about your project, materials needed, timeline, etc."
                    />
                  </div>

                  {error && (
                    <p className="text-red-600 text-sm">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-accent hover:bg-accent-dark text-primary font-bold px-6 py-3.5 rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Submit Request"
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="luxury-divider text-stone-400" aria-hidden />
                <span className="eyebrow text-stone-500">Direct Contact</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-light tracking-tight text-stone-900 mb-8 leading-[1.05]">
                Reach out directly.
              </h2>
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Phone</h3>
                    <a
                      href="tel:+17135172039"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      (713) 517-2039
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Email</h3>
                    <a
                      href="mailto:trey.fuqua@trubath.com"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      trey.fuqua@trubath.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Service Area</h3>
                    <p className="text-muted-foreground">
                      Houston, TX &amp; Surrounding Areas
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday &ndash; Friday: 8:00 AM &ndash; 5:00 PM
                    </p>
                    <p className="text-muted-foreground">
                      Saturday: By Appointment
                    </p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <LinkedInIcon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">LinkedIn</h3>
                    <a
                      href={LINKEDIN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors break-all"
                    >
                      {LINKEDIN_DISPLAY}
                    </a>
                    <p className="text-xs text-muted-foreground/70 mt-1">
                      Connect with Trey Fuqua
                    </p>
                  </div>
                </div>
              </div>

              {/* Call CTA */}
              <div className="bg-stone-900 rounded-3xl p-8 text-center ring-1 ring-stone-800">
                <h3 className="font-display text-2xl text-white mb-3">
                  Prefer to Talk?
                </h3>
                <p className="text-stone-300 mb-6 text-sm leading-relaxed">
                  Call Fuqua Finishes LLC directly for immediate assistance.
                </p>
                <a
                  href="tel:+17135172039"
                  className="inline-flex items-center gap-2 rounded-full bg-accent hover:bg-accent-light text-primary font-bold px-6 py-3.5 text-xs uppercase tracking-[0.18em] transition-all duration-300"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call (713) 517-2039
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
