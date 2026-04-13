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
  eyebrow?: string
  heading?: string
  subheading?: string
  showCTA?: boolean
  background?: "ivory" | "white" | "stone"
}

const backgroundStyles: Record<NonNullable<PorcelainFinishesProps["background"]>, string> = {
  ivory: "bg-ivory",
  white: "bg-white",
  stone: "bg-stone-50",
}

/**
 * Layered CSS background that reads as realistic marble/stone surface.
 */
function swatchBackground(swatch: FinishSwatch): string {
  return [
    `radial-gradient(ellipse 60% 25% at 18% 22%, ${swatch.vein}33 0%, transparent 55%)`,
    `radial-gradient(ellipse 45% 15% at 70% 65%, ${swatch.vein}40 0%, transparent 60%)`,
    `radial-gradient(ellipse 35% 10% at 80% 20%, ${swatch.vein}26 0%, transparent 55%)`,
    `radial-gradient(ellipse 80% 70% at 30% 15%, ${swatch.highlight}AA 0%, transparent 70%)`,
    `linear-gradient(135deg, ${swatch.highlight} 0%, ${swatch.base} 45%, ${swatch.mid} 100%)`,
  ].join(", ")
}

/**
 * Extended marble background with more dramatic veining for larger panels.
 */
function sceneWallBackground(swatch: FinishSwatch): string {
  return [
    // More pronounced veining for the larger panel
    `radial-gradient(ellipse 70% 20% at 12% 18%, ${swatch.vein}3D 0%, transparent 50%)`,
    `radial-gradient(ellipse 50% 12% at 55% 70%, ${swatch.vein}35 0%, transparent 55%)`,
    `radial-gradient(ellipse 40% 18% at 82% 25%, ${swatch.vein}2E 0%, transparent 50%)`,
    `radial-gradient(ellipse 30% 8% at 35% 50%, ${swatch.vein}28 0%, transparent 45%)`,
    `radial-gradient(ellipse 55% 15% at 65% 40%, ${swatch.vein}1F 0%, transparent 55%)`,
    // Sheen highlights
    `radial-gradient(ellipse 90% 60% at 25% 10%, ${swatch.highlight}88 0%, transparent 65%)`,
    `radial-gradient(ellipse 70% 50% at 75% 85%, ${swatch.highlight}55 0%, transparent 60%)`,
    // Base
    `linear-gradient(155deg, ${swatch.highlight} 0%, ${swatch.base} 35%, ${swatch.mid} 70%, ${swatch.base} 100%)`,
  ].join(", ")
}

/**
 * A CSS-rendered bathroom scene mockup showing the porcelain finish
 * applied to a walk-in shower wall. Conveys material tone, brightness,
 * veining, and overall aesthetic without requiring an external image.
 */
function BathroomScene({ swatch, name }: { swatch: FinishSwatch | null; name: string }) {
  const wallBg = swatch
    ? sceneWallBackground(swatch)
    : "repeating-linear-gradient(45deg, #E8E4DB 0 10px, #F4F2ED 10px 20px)"
  const floorBg = swatch
    ? `linear-gradient(180deg, ${swatch.mid}CC 0%, ${swatch.mid} 100%)`
    : "#D4CEC0"
  const nicheBg = swatch
    ? `linear-gradient(180deg, ${swatch.mid} 0%, ${swatch.base} 100%)`
    : "#E8E4DB"

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl ring-1 ring-stone-200/80"
      style={{ aspectRatio: "4 / 3" }}
      aria-label={`${name} applied to a modern shower scene`}
    >
      {/* Wall surface — the primary visual */}
      <div
        className="marble-sheen absolute inset-0"
        style={{ background: wallBg }}
      />

      {/* Floor surface — darker tone */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: "22%",
          background: floorBg,
          borderTop: `1px solid ${swatch ? swatch.vein + "18" : "#C0B8A8"}`,
        }}
      />

      {/* Recessed niche / shelf detail */}
      <div
        className="absolute rounded-sm shadow-inner"
        style={{
          top: "18%",
          right: "16%",
          width: "28%",
          height: "22%",
          background: nicheBg,
          boxShadow: `inset 2px 2px 8px ${swatch ? swatch.vein + "22" : "rgba(0,0,0,0.08)"},
                       inset -1px -1px 4px ${swatch ? swatch.highlight + "44" : "rgba(255,255,255,0.2)"}`,
          borderRadius: "4px",
        }}
      />

      {/* Thin niche shelf line */}
      <div
        className="absolute"
        style={{
          top: "28%",
          right: "16%",
          width: "28%",
          height: "1px",
          background: swatch ? swatch.vein + "22" : "#B0A898",
        }}
      />

      {/* Shower fixture silhouette */}
      <div className="absolute" style={{ top: "6%", left: "40%" }}>
        {/* Arm */}
        <div
          className="rounded-full"
          style={{
            width: "3px",
            height: "28px",
            background: "#9CA3AF80",
          }}
        />
        {/* Head */}
        <div
          className="rounded-full -ml-[5px]"
          style={{
            width: "13px",
            height: "13px",
            background: "#9CA3AF60",
            border: "1px solid #9CA3AF40",
          }}
        />
      </div>

      {/* Glass panel line */}
      <div
        className="absolute"
        style={{
          top: 0,
          bottom: "22%",
          left: "72%",
          width: "1px",
          background: "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.5) 20%, rgba(255,255,255,0.35) 80%, transparent 100%)",
        }}
      />

      {/* Drain detail on floor */}
      <div
        className="absolute rounded-full"
        style={{
          bottom: "8%",
          left: "45%",
          width: "10px",
          height: "10px",
          background: "#9CA3AF30",
          border: "1px solid #9CA3AF20",
        }}
      />

      {/* Subtle ambient shadow at bottom of wall */}
      <div
        className="absolute left-0 right-0 pointer-events-none"
        style={{
          bottom: "22%",
          height: "8%",
          background: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.04) 100%)",
        }}
      />
    </div>
  )
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
      {/* Photorealistic bathroom mockup image */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone-100">
        <Image
          src={finish.mockupImage}
          alt={finish.mockupAlt}
          width={800}
          height={1000}
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/10" />

        {/* Finish type badge */}
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

        {/* Application caption + swatch chip */}
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
          <span className="eyebrow text-[0.65rem] text-white/85">
            {finish.application}
          </span>
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

      {/* Card info block */}
      <div className="flex flex-1 flex-col gap-4 p-6 md:p-7">
        <div>
          <h3 className="font-display text-2xl font-medium tracking-tight text-stone-900 md:text-[1.75rem]">
            {finish.name}
          </h3>
          <p className="mt-1 text-sm italic text-stone-500">{finish.tagline}</p>
        </div>

        {/* CSS bathroom scene mockup — shows the finish on a shower wall */}
        <BathroomScene swatch={finish.swatch} name={finish.name} />

        {/* Rectangular swatch tile */}
        <div
          className="marble-sheen relative h-16 w-full overflow-hidden rounded-xl ring-1 ring-stone-200"
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
