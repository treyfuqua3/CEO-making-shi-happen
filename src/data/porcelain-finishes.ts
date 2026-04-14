/**
 * Porcelain Finishes catalog for Fuqua Finishes LLC
 *
 * This file is the single source of truth for every porcelain finish rendered
 * on the site. To add a new finish, append an entry to `porcelainFinishes`.
 *
 * Color + image notes:
 *   - `mockupImage` points at a real client-supplied slab photograph stored
 *     locally under `public/finishes/`.
 *   - `swatch` values are sampled from those photos. They are expressed as a
 *     base/mid/vein/highlight set so each swatch renders as a realistic,
 *     layered marble tile rather than a flat fill.
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
      base: "#F1F0ED",
      mid: "#DFDEDB",
      vein: "#6E6E72",
      highlight: "#FFFFFF",
    },
    mockupImage: "/finishes/statuario-leonardo.jpg",
    mockupAlt:
      "Statuario Leonardo porcelain slab — bright white with bold charcoal veining",
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
      base: "#F4EEDE",
      mid: "#E7DCC1",
      vein: "#B08A4C",
      highlight: "#FBF6E8",
    },
    mockupImage: "/finishes/calacatta-oro.jpg",
    mockupAlt:
      "Calacatta Oro porcelain slab — creamy white with warm gold and soft grey veining",
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
      base: "#E6D9B9",
      mid: "#D6C59F",
      vein: "#A58A5E",
      highlight: "#F0E5C9",
    },
    mockupImage: "/finishes/lims-ivory.jpg",
    mockupAlt:
      "Lims Ivory porcelain slab — warm ivory limestone with a soft matte sand texture",
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
      base: "#E9ECEE",
      mid: "#D4D8DB",
      vein: "#9AA2AA",
      highlight: "#F8FAFB",
    },
    mockupImage: "/finishes/onyx-white-alabaster.jpg",
    mockupAlt:
      "Onyx White Alabaster porcelain slab — icy cool white with translucent crystalline banding",
    application: "Feature Wall",
    featured: true,
  },
]
