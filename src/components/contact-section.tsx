"use client"

import { useState, FormEvent } from "react"
import { Send } from "lucide-react"

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // TODO: Connect to form backend (e.g., email service, CRM, or API route)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left copy */}
          <div>
            <p className="text-sm uppercase tracking-[0.15em] text-accent font-medium mb-3">
              Get In Touch
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Ready to Learn More?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Whether you&apos;re an experienced remodeler, a growing contractor, or
              a potential dealer partner — we&apos;d like to hear from you.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Fill out the form and our team will follow up to discuss how the
              TRUbath system can fit your business.
            </p>

            <div className="mt-10 space-y-4 text-sm text-muted-foreground">
              <div>
                <p className="font-semibold text-foreground">Email</p>
                <p>info@example.com</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Phone</p>
                <p>(713) 000-0000</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Service Area</p>
                <p>Houston, TX Metro Area</p>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="bg-white rounded-2xl border border-border p-8 sm:p-10 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Send className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Thank You
                </h3>
                <p className="text-muted-foreground max-w-sm">
                  Your message has been received. We&apos;ll be in touch shortly to
                  discuss how we can work together.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-1.5">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="Your Company LLC"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="(713) 555-0000"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your business and what you're looking for..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  We respect your privacy and will never share your information.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
