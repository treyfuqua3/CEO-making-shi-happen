/**
 * Porcelain Finishes catalog for Fuqua Finishes LLC
 *
 * This file is the single source of truth for every porcelain finish rendered
 * on the site. To add a new finish, append an entry to `porcelainFinishes`.
 *
 * Color notes:
 *   - `swatch` values are derived directly from the product photography the
 *     client provided for Statuario Leonardo, Calacatta Oro and Avorio
 *     Limestone. They are intentionally expressed as multi-stop gradient
 *     parameters so each swatch can render as a realistic, layered marble
 *     tile rather than a flat fill.
 *   - When a finish has not yet been supplied with exact color data, set
 *     `swatch` to `null` and set `isPlaceholder` to `true`. The UI will render
 *     a neutral "color coming soon" state instead of guessing.
 */

export type FinishType = "Polished" | "Matte" | "Custom"

export type FinishCategory =
  | "Statuario Marble"
  | "Calacatta Marble"
  | "Limestone"
  | "Onyx"
  | "Custom"

export type FinishSwatch = {
  /** Primary base color of the stone */
  base: string
  /** Secondary mid-tone for layered veining */
  mid: string
  /** Accent color used for veining or flecks */
  vein: string
  /** Brightest highlight used for marble sheen */
  highlight: string
}

export type PorcelainFinish = {
  id: string
  name: string
  shortName: string
  tagline: string
  description: string
  finishType: FinishType
  category: FinishCategory
  /** Exact swatch colors — leave null when the client has not provided them */
  swatch: FinishSwatch | null
  /** Photorealistic bathroom / shower application for this finish */
  mockupImage: string
  mockupAlt: string
  /** Room type the mockup depicts, shown as a small caption */
  application: string
  featured?: boolean
  isPlaceholder?: boolean
}

export const porcelainFinishes: PorcelainFinish[] = [
  {
    id: "statuario-leonardo",
    name: "Statuario Leonardo",
    shortName: "Statuario",
    tagline: "Bright white with bold grey veining",
    description:
      "A crisp, architectural white porcelain inspired by Italian Statuario marble. Dramatic charcoal veining creates a signature statement piece for walk-in showers and feature walls.",
    finishType: "Polished",
    category: "Statuario Marble",
    swatch: {
      base: "#ECECEA",
      mid: "#D8D8D6",
      vein: "#6F6F74",
      highlight: "#FFFFFF",
    },
    mockupImage:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1200&auto=format&fit=crop",
    mockupAlt:
      "Luxury walk-in shower with Statuario Leonardo white marble porcelain walls and dramatic grey veining",
    application: "Walk-in Shower",
    featured: true,
  },
  {
    id: "calacatta-oro",
    name: "Calacatta Oro",
    shortName: "Calacatta",
    tagline: "Warm white with elegant gold veining",
    description:
      "Refined Calacatta-inspired porcelain with soft cream undertones and graceful gold veining. Brings warmth and old-world elegance to modern bathroom designs.",
    finishType: "Polished",
    category: "Calacatta Marble",
    swatch: {
      base: "#F2EAD7",
      mid: "#E8DCC0",
      vein: "#B9965A",
      highlight: "#FBF6EA",
    },
    mockupImage:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
    mockupAlt:
      "Premium vanity finished in Calacatta Oro porcelain with warm gold veining",
    application: "Vanity & Surround",
    featured: true,
  },
  {
    id: "avorio-limestone",
    name: "Avorio Limestone",
    shortName: "Avorio",
    tagline: "Warm ivory limestone with a soft matte touch",
    description:
      "Textured ivory porcelain that reads as quarried limestone. Its uniform warm tone and matte surface create a calm, spa-like envelope for full bathroom installations.",
    finishType: "Matte",
    category: "Limestone",
    swatch: {
      base: "#DDC9A1",
      mid: "#CAB489",
      vein: "#9E8555",
      highlight: "#EADBB8",
    },
    mockupImage:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1200&auto=format&fit=crop",
    mockupAlt:
      "Spa bathroom with Avorio Limestone porcelain walls in a warm ivory matte finish",
    application: "Full Bathroom",
    featured: true,
  },
  {
    id: "custom-finish-placeholder",
    name: "Additional Finish",
    shortName: "Coming Soon",
    tagline: "Fourth designer finish — colorway to be confirmed",
    description:
      "An additional TRUbath designer colorway is part of the product line. Exact color data for this finish has not been supplied yet — get in touch to confirm availability and specification.",
    finishType: "Custom",
    category: "Custom",
    swatch: null,
    mockupImage:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop",
    mockupAlt:
      "Minimal modern bathroom placeholder — exact finish to be confirmed",
    application: "Request Sample",
    isPlaceholder: true,
  },
]
