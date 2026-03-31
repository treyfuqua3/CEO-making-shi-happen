"use client"

import { useState, FormEvent } from "react"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // In production, this would send to an API endpoint
    setSubmitted(true)
  }

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Contact Fuqua Finishes LLC
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Ready to get started? Request a quote or reach out with questions.
            Our Houston-based team is here to help.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                Request a Quote
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
                      name="projectType"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors bg-white"
                    >
                      <option value="">Select a project type</option>
                      <option value="residential-remodel">
                        Residential Remodel
                      </option>
                      <option value="new-construction">New Construction</option>
                      <option value="commercial">Commercial Project</option>
                      <option value="multi-family">Multi-Family / HOA</option>
                      <option value="other">Other</option>
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

                  <button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent-dark text-white px-6 py-3.5 rounded-lg font-semibold transition-colors"
                  >
                    Submit Request
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                Get in Touch
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
              </div>

              {/* Call CTA */}
              <div className="bg-primary rounded-2xl p-8 text-center">
                <h3 className="text-xl font-bold text-white mb-2">
                  Prefer to Talk?
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  Call Fuqua Finishes LLC directly for immediate assistance.
                </p>
                <a
                  href="tel:+17135172039"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4" />
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
