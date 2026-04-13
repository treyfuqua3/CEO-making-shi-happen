"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import { ArrowRight, Sparkles } from "lucide-react"
import {
  porcelainFinishes,
  type PorcelainFinish,
  type FinishSwatch,
} from "@/data/porcelain-finishes"

type PorcelainFinishesProps = {
  /** Optional override for the eyebrow label */
  eyebrow?: string
  /** Optional override for the main heading */
  heading?: string
  /** Optional override for the supporting copy */
  subheading?: string
  /** Show the final CTA row (defaults to true) */
  showCTA?: boolean
  /** Background treatment (defaults to "ivory") */
  background?: "ivory" | "white" | "stone"
}

const backgroundStyles: Record<NonNullable<PorcelainFinishesProps["background"]>, string> = {
  ivory: "bg-ivory",
  white: "bg-white",
  stone: "bg-stone-50",
}

/**
 * Builds a layered CSS background that reads as a realistic marble swatch.
 * The stops are derived from the finish's `swatch` palette so Statuario reads
 * as white-with-grey-veining and Calacatta reads as cream-with-gold.
 */
function swatchBackground(swatch: FinishSwatch): string {
  return [
    // subtle directional veining
    `radial-gradient(ellipse 60% 25% at 18% 22%, ${swatch.vein}33 0%, transparent 55%)`,
    `radial-gradient(ellipse 45% 15% at 70% 65%, ${swatch.vein}40 0%, transparent 60%)`,
    `radial-gradient(ellipse 35% 10% at 80% 20%, ${swatch.vein}26 0%, transparent 55%)`,
    // highlight sheen
    `radial-gradient(ellipse 80% 70% at 30% 15%, ${swatch.highlight}AA 0%, transparent 70%)`,
    // base gradient
    `linear-gradient(135deg, ${swatch.highlight} 0%, ${swatch.base} 45%, ${swatch.mid} 100%)`,
  ].join(", ")
}

function FinishCard({
  finish,
  index,
}: {
  finish: PorcelainFinish
  index: number
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-[28px] bg-white shadow-luxury ring-1 ring-stone-200/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-luxury-lg"
    >
      {/* Photorealistic bathroom application */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone-100">
        <Image
          src={finish.mockupImage}
          alt={finish.mockupAlt}
          width={800}
          height={1000}
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
        />
        {/* Dark-to-transparent gradient for legible badges */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/10" />

        {/* Finish-type badge */}
        <div className="absolute left-4 top-4">
          <span className="eyebrow inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-[0.65rem] text-stone-700 backdrop-blur-sm ring-1 ring-white/70">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{
                background:
                  finish.finishType === "Polished"
                    ? "#D8C9A3"
                    : finish.finishType === "Matte"
                      ? "#78716C"
                      : "#461D7C",
              }}
              aria-hidden
            />
            {finish.finishType}
          </span>
        </div>

        {/* Application caption */}
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
          <span className="eyebrow text-[0.65rem] text-white/85">
            {finish.application}
          </span>

          {/* Swatch chip over the photo */}
          <div
            className="marble-sheen relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-white/90 shadow-lg"
            style={
              finish.swatch
                ? { background: swatchBackground(finish.swatch) }
                : {
                    background:
                      "repeating-linear-gradient(45deg, #E8E4DB 0 8px, #F4F2ED 8px 16px)",
                  }
            }
            aria-hidden
          />
        </div>
      </div>

      {/* Info block */}
      <div className="flex flex-1 flex-col gap-4 p-6 md:p-7">
        <div>
          <h3 className="font-display text-2xl font-medium tracking-tight text-stone-900 md:text-[1.75rem]">
            {finish.name}
          </h3>
          <p className="mt-1 text-sm italic text-stone-500">{finish.tagline}</p>
        </div>

        {/* Larger rectangular swatch (the "elegant swatch tile") */}
        <div
          className="marble-sheen relative h-20 w-full overflow-hidden rounded-xl ring-1 ring-stone-200"
          style={
            finish.swatch
              ? { background: swatchBackground(finish.swatch) }
              : {
                  background:
                    "repeating-linear-gradient(45deg, #E8E4DB 0 10px, #F4F2ED 10px 20px)",
                }
          }
          aria-label={
            finish.swatch
              ? `${finish.name} color swatch`
              : `${finish.name} — color to be confirmed`
          }
        >
          {finish.isPlaceholder && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="eyebrow rounded-full bg-white/90 px-3 py-1 text-[0.6rem] text-stone-700 ring-1 ring-stone-200">
                Color to be confirmed
              </span>
            </div>
          )}
        </div>

        <p className="text-sm leading-relaxed text-stone-600">
          {finish.description}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-stone-200/80 pt-4 text-xs uppercase tracking-[0.18em] text-stone-500">
          <span>{finish.category}</span>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 font-semibold text-primary transition-colors hover:text-primary-light"
          >
            Request Sample
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </motion.article>
  )
}

export function PorcelainFinishes({
  eyebrow = "Porcelain Collection",
  heading = "The Finishes",
  subheading = "Engineered porcelain in designer colorways — each finish is available across the full TRUbath system, from walls and shower bases to vanities and floors.",
  showCTA = true,
  background = "ivory",
}: PorcelainFinishesProps) {
  return (
    <section
      className={`relative overflow-hidden py-20 md:py-28 lg:py-32 ${backgroundStyles[background]}`}
    >
      {/* Ambient background flourish */}
      <div
        className="pointer-events-none absolute inset-0 bg-luxury-radial"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[1px] w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-stone-300 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-20">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="luxury-divider text-stone-400" aria-hidden />
            <span className="eyebrow inline-flex items-center gap-2 text-stone-500">
              <Sparkles className="h-3.5 w-3.5 text-champagne-dark" />
              {eyebrow}
            </span>
            <span className="luxury-divider text-stone-400" aria-hidden />
          </div>
          <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tight text-stone-900 md:text-6xl lg:text-[4.25rem]">
            {heading}
          </h2>
          <p className="mt-6 text-balance text-base leading-relaxed text-stone-600 md:text-lg">
            {subheading}
          </p>
        </div>

        {/* Responsive, comparable grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-7 lg:grid-cols-4 lg:gap-8">
          {porcelainFinishes.map((finish, index) => (
            <FinishCard key={finish.id} finish={finish} index={index} />
          ))}
        </div>

        {/* Optional footer CTA */}
        {showCTA && (
          <div className="mt-16 flex flex-col items-center justify-center gap-4 text-center md:mt-20">
            <p className="max-w-xl text-sm text-stone-600 md:text-base">
              Want to compare finishes in person? We can arrange physical samples
              for your Houston-area project team.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-luxury transition-all duration-300 hover:bg-primary-light hover:shadow-luxury-lg"
            >
              Request Finish Samples
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
