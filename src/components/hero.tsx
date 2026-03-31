"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { TextRotate } from "@/components/ui/text-rotate"
import Floating, { FloatingElement } from "@/components/ui/parallax-floating"

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1200&auto=format&fit=crop",
    alt: "Modern luxury bathroom with marble walls",
  },
  {
    url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
    alt: "Contemporary bathroom design with glass shower",
  },
  {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    alt: "Premium bathroom renovation",
  },
  {
    url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop",
    alt: "Modern porcelain bathroom interior",
  },
]

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-muted pt-16">
      {/* Floating background images */}
      <Floating sensitivity={-0.3} className="h-full pointer-events-none">
        <FloatingElement depth={0.5} className="top-[18%] left-[3%] md:top-[22%] md:left-[5%]">
          <motion.img
            src={heroImages[0].url}
            alt={heroImages[0].alt}
            className="w-28 h-20 sm:w-40 sm:h-28 md:w-52 md:h-36 object-cover -rotate-3 shadow-2xl rounded-lg opacity-60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.6 }}
          />
        </FloatingElement>
        <FloatingElement depth={1.5} className="top-[5%] left-[70%] md:top-[10%] md:left-[75%]">
          <motion.img
            src={heroImages[1].url}
            alt={heroImages[1].alt}
            className="w-36 h-28 sm:w-48 sm:h-36 md:w-56 md:h-44 object-cover rotate-6 shadow-2xl rounded-lg opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.8 }}
          />
        </FloatingElement>
        <FloatingElement depth={2} className="top-[75%] left-[5%] md:top-[68%] md:left-[8%]">
          <motion.img
            src={heroImages[2].url}
            alt={heroImages[2].alt}
            className="w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 object-cover -rotate-2 shadow-2xl rounded-lg opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 1.0 }}
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[70%] left-[78%] md:top-[65%] md:left-[82%]">
          <motion.img
            src={heroImages[3].url}
            alt={heroImages[3].alt}
            className="w-36 h-28 sm:w-48 sm:h-36 md:w-60 md:h-44 object-cover rotate-3 shadow-2xl rounded-lg opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 1.2 }}
          />
        </FloatingElement>
      </Floating>

      {/* Hero content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          <p className="text-sm sm:text-base uppercase tracking-[0.2em] text-muted-foreground mb-4 font-medium">
            Houston&apos;s Premium Bathroom Partner
          </p>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-foreground"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        >
          <span className="block">Bathrooms Built</span>
          <span className="flex items-center justify-center gap-3 flex-wrap">
            <TextRotate
              texts={[
                "Better",
                "Faster",
                "Smarter",
                "to Last",
              ]}
              mainClassName="overflow-hidden text-primary"
              staggerDuration={0.03}
              staggerFrom="last"
              rotationInterval={2500}
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
            />
          </span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
        >
          Premium porcelain bathroom systems for remodelers and dealers in the Houston market.
          Beautiful finishes, streamlined installation, scalable growth.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.7 }}
        >
          <Link
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors text-center shadow-lg"
          >
            Request Information
          </Link>
          <Link
            href="#solutions"
            className="w-full sm:w-auto px-8 py-3.5 border border-border text-foreground font-semibold rounded-md hover:bg-muted transition-colors text-center"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
