"use client"

import Link from "next/link"
import { LayoutGroup, motion } from "motion/react"
import { TextRotate } from "@/components/ui/text-rotate"
import Floating, { FloatingElement } from "@/components/ui/parallax-floating"
import { Phone } from "lucide-react"

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop",
    alt: "Modern bathroom with marble walls",
  },
  {
    url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop",
    alt: "Luxury bathroom vanity",
  },
  {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    alt: "Beautiful home interior",
  },
  {
    url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
    alt: "Modern home finishes",
  },
  {
    url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=800&auto=format&fit=crop",
    alt: "Porcelain bathroom design",
  },
]

export function LandingHero() {
  return (
    <section className="w-full h-screen overflow-hidden flex flex-col items-center justify-center relative bg-ivory">
      <div
        className="pointer-events-none absolute inset-0 bg-luxury-radial"
        aria-hidden
      />
      <Floating sensitivity={-0.5} className="h-full">
        <FloatingElement
          depth={0.5}
          className="top-[15%] left-[2%] md:top-[25%] md:left-[5%]"
        >
          <motion.img
            src={heroImages[0].url}
            alt={heroImages[0].alt}
            className="w-16 h-12 sm:w-24 sm:h-16 md:w-28 md:h-20 lg:w-32 lg:h-24 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-[3deg] shadow-2xl rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={1}
          className="top-[0%] left-[8%] md:top-[6%] md:left-[11%]"
        >
          <motion.img
            src={heroImages[1].url}
            alt={heroImages[1].alt}
            className="w-40 h-28 sm:w-48 sm:h-36 md:w-56 md:h-44 lg:w-60 lg:h-48 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-12 shadow-2xl rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={4}
          className="top-[90%] left-[6%] md:top-[80%] md:left-[8%]"
        >
          <motion.img
            src={heroImages[2].url}
            alt={heroImages[2].alt}
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-64 lg:h-64 object-cover -rotate-[4deg] hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={2}
          className="top-[0%] left-[87%] md:top-[2%] md:left-[83%]"
        >
          <motion.img
            src={heroImages[3].url}
            alt={heroImages[3].alt}
            className="w-40 h-36 sm:w-48 sm:h-44 md:w-60 md:h-52 lg:w-64 lg:h-56 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-[6deg] rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={1}
          className="top-[78%] left-[83%] md:top-[68%] md:left-[83%]"
        >
          <motion.img
            src={heroImages[4].url}
            alt={heroImages[4].alt}
            className="w-44 h-44 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-[19deg] rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          />
        </FloatingElement>
      </Floating>

      <div className="flex flex-col justify-center items-center w-[300px] sm:w-[440px] md:w-[600px] lg:w-[820px] z-10 pointer-events-auto">
        <motion.div
          className="flex items-center gap-3 mb-6"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
        >
          <span className="luxury-divider text-stone-400" aria-hidden />
          <span className="eyebrow text-stone-500">
            Houston &middot; Architectural Finishes
          </span>
          <span className="luxury-divider text-stone-400" aria-hidden />
        </motion.div>

        <motion.h1
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] text-center w-full justify-center items-center flex-col flex whitespace-pre leading-[1.02] tracking-tight space-y-0 md:space-y-2 font-light"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
        >
          <span className="text-stone-900">Premium Finishes.</span>
          <LayoutGroup>
            <motion.span layout className="flex whitespace-pre items-center">
              <motion.span
                layout
                className="flex whitespace-pre text-stone-900 italic"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              >
                Delivered{" "}
              </motion.span>
              <TextRotate
                texts={[
                  "Fast",
                  "Right",
                  "Local",
                  "Today",
                  "Reliably",
                  "On Time",
                ]}
                mainClassName="overflow-hidden pr-3 text-primary py-0 pb-2 md:pb-4 rounded-xl italic"
                staggerDuration={0.03}
                staggerFrom="last"
                rotationInterval={3000}
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              />
            </motion.span>
          </LayoutGroup>
        </motion.h1>

        <motion.p
          className="text-sm sm:text-base md:text-lg text-center text-stone-600 pt-6 sm:pt-8 md:pt-10 max-w-xl leading-relaxed"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
        >
          Fuqua Finishes LLC is Houston&apos;s trusted source for architectural
          building materials &mdash; featuring TRUbath porcelain systems and a
          curated collection of designer finishes.
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 items-center mt-10 sm:mt-12 md:mt-14">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.7 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary-light text-white px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] shadow-luxury hover:shadow-luxury-lg transition-all duration-300"
            >
              Request a Quote
            </Link>
          </motion.div>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.8 }}
          >
            <a
              href="tel:+17135172039"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-900/20 hover:border-stone-900 text-stone-900 bg-white/70 backdrop-blur-sm px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-300"
            >
              <Phone className="w-3.5 h-3.5" />
              Call Now
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
