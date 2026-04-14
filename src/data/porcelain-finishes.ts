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
  | "Alabaster"
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
    id: "lims-ivory",
    name: "Lims Ivory",
    shortName: "Lims",
    tagline: "Warm ivory limestone with a soft sand texture",
    description:
      "A quarry-inspired porcelain in a warm ivory tone reading as natural limestone. Subtle organic texture and a sand-kissed surface create a calm, spa-like envelope that pairs beautifully with natural woods and brushed metals.",
    finishType: "Matte",
    category: "Limestone",
    swatch: {
      base: "#E6D6B5",
      mid: "#D4C29A",
      vein: "#A88A5A",
      highlight: "#F1E4C8",
    },
    mockupImage:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1200&auto=format&fit=crop",
    mockupAlt:
      "Spa bathroom finished in Lims Ivory porcelain with a warm sand-toned matte surface",
    application: "Full Bathroom",
    featured: true,
  },
  {
    id: "onyx-white-alabaster",
    name: "Onyx White Alabaster",
    shortName: "Alabaster",
    tagline: "Soft icy white with translucent crystalline movement",
    description:
      "A luminous alabaster-inspired porcelain with delicate cool-white veining and a crystalline sheen. Reads almost translucent in natural light, bringing a refined, jewel-like quality to feature walls, vanities, and walk-in showers.",
    finishType: "Polished",
    category: "Alabaster",
    swatch: {
      base: "#F1EFEB",
      mid: "#E3E1DC",
      vein: "#B9BEC4",
      highlight: "#FBFAF7",
    },
    mockupImage:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1200&auto=format&fit=crop&sat=-40&bri=5",
    mockupAlt:
      "Luxurious feature wall finished in Onyx White Alabaster porcelain with a crystalline cool-white sheen",
    application: "Feature Wall",
    featured: true,
  },
]
