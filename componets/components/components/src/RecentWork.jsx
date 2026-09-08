"use client"

import { useState, useRef, useCallback } from "react"
import { MoveHorizontal, ShieldCheck, Layers, Users, Sparkles } from "lucide-react"

const projects = [
  {
    id: "calacatta-oro",
    name: "Calacatta Oro",
    location: "Houston, TX",
    before: "/calacatta-before.jpg",
    after: "/calacatta-after.jpg",
    beforeAlt:
      "Shower alcove finished in wood-look plank tile with a hex mosaic floor.",
    afterAlt:
      "The same alcove in Calacatta Oro porcelain with frameless glass and a recessed niche.",
    lede:
      "A tiled alcove taken back to studs and rebuilt in full-height porcelain. The dimensions and the niche stayed exactly where they were.",
    body:
      "The plank tile carried a grout line every few inches. Each one was a surface to scrub and a place for water to eventually find its way in. Full-height panels reduce that to the corners.",
    specs: [
      { label: "Finish", value: "Calacatta Oro" },
      { label: "Scope", value: "Walls, pan, floor" },
      { label: "Install", value: "2–3 days" },
    ],
  },
  {
    id: "lims-ivory",
    name: "Lims Ivory",
    location: "Houston, TX",
    before: "/limestone-before.jpg",
    after: "/limestone-after.jpg",
    beforeAlt: "Subway-tiled alcove with a drop-in bathtub and a curtain rod.",
    afterAlt:
      "A walk-in shower in warm ivory porcelain on the same footprint.",
    lede:
      "The tub came out and a walk-in shower went in on the same footprint, without moving the plumbing wall.",
    body:
      "This is the job people expect to lose a bathroom over for weeks. The pan arrives finished and pre-sloped, so there is no mud bed and no waiting for it to cure.",
    specs: [
      { label: "Finish", value: "Lims Ivory" },
      { label: "Scope", value: "Tub to walk-in shower" },
      { label: "Install", value: "2–3 days" },
    ],
  },
]

const steps = [
  {
    icon: ShieldCheck,
    img: "/step-1-waterproof.jpg",
    alt: "Shower walls in cement backer board coated with red waterproofing membrane.",
    title: "Waterproofing",
    description:
      "Cement backer, seams banded, niche formed, then sealed under a liquid membrane.",
  },
  {
    icon: Layers,
    img: "/step-2-adhesive.jpg",
    alt: "Construction adhesive applied in dabs across the waterproofed wall, with wood shims.",
    title: "Adhesive",
    description:
      "Adhesive goes on the wall, not the panel. Shims bring each panel to level.",
  },
  {
    icon: Users,
    img: "/step-3-set.jpg",
    alt: "Two installers lifting a full-height porcelain panel into a corner.",
    title: "Setting",
    description:
      "Two people, hand tools and suction cups. No slab crew, no mixing station.",
  },
  {
    icon: Sparkles,
    img: "/step-4-complete.jpg",
    alt: "The finished porcelain shower with rain head, niche and square drain.",
    title: "Finished",
    description:
      "Walls, pan and floor in. Two to three days of install; demo is separate.",
  },
]

function Compare({ before, after, beforeAlt, afterAlt }) {
  const [split, setSplit] = useState(52)
  const frame = useRef(null)
  const dragging = useRef(false)

  const move = useCallback((clientX) => {
    const el = frame.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setSplit(Math.max(0, Math.min(100, pct)))
  }, [])

  const onKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      setSplit((v) => Math.max(0, v - 4))
      event.preventDefault()
    }
    if (event.key === "ArrowRight") {
      setSplit((v) => Math.min(100, v + 4))
      event.preventDefault()
    }
    if (event.key === "Home") {
      setSplit(0)
      event.preventDefault()
    }
    if (event.key === "End") {
      setSplit(100)
      event.preventDefault()
    }
  }

  return (
    <div
      ref={frame}
      role="slider"
      tabIndex={0}
      aria-label="Drag to compare before and after"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(split)}
      onKeyDown={onKeyDown}
      onMouseDown={(e) => {
        dragging.current = true
        move(e.clientX)
        e.preventDefault()
      }}
      onMouseMove={(e) => dragging.current && move(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchStart={(e) => move(e.touches[0].clientX)}
      onTouchMove={(e) => move(e.touches[0].clientX)}
      className="relative aspect-[3/4] w-full select-none overflow-hidden rounded-[32px] shadow-luxury-lg ring-1 ring-stone-200 cursor-ew-resize touch-pan-y focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <img
        src={before}
        alt={beforeAlt}
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 0 0 ${split}%)` }}
      >
        <img
          src={after}
          alt={afterAlt}
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <span className="pointer-events-none absolute bottom-5 left-5 rounded-full bg-stone-900/70 px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
        Before
      </span>
      <span className="pointer-events-none absolute bottom-5 right-5 rounded-full bg-stone-900/70 px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
        After
      </span>

      <div
        className="pointer-events-none absolute inset-y-0 w-px bg-white/90"
        style={{ left: `${split}%` }}
        aria-hidden
      >
        <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-luxury ring-1 ring-stone-200">
          <MoveHorizontal className="h-4 w-4 text-primary" />
        </span>
      </div>
    </div>
  )
}

export function RecentWork() {
  return (
    <>
      {/* Recent Work — completed installations */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="luxury-divider text-stone-400" aria-hidden />
              <span className="eyebrow text-stone-500">Recent Work</span>
              <span className="luxury-divider text-stone-400" aria-hidden />
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-stone-900 leading-[1.05]">
              Installed in Houston.
            </h2>
            <p className="mt-6 text-balance text-base md:text-lg text-stone-600 leading-relaxed">
              Two bathrooms in one home, finished in different colorways from the
              same system. Drag either image to see what changed.
            </p>
          </div>

          <div className="space-y-20 md:space-y-28">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
              >
                <div className={index % 2 === 1 ? "md:order-2" : undefined}>
                  <Compare
                    before={project.before}
                    after={project.after}
                    beforeAlt={project.beforeAlt}
                    afterAlt={project.afterAlt}
                  />
                </div>

                <div className={index % 2 === 1 ? "md:order-1" : undefined}>
                  <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-stone-900 leading-[1.08]">
                    {project.name}
                  </h3>
                  <p className="eyebrow text-stone-500 mt-3">
                    {project.location}
                  </p>
                  <p className="mt-6 text-base md:text-lg text-stone-700 leading-relaxed">
                    {project.lede}
                  </p>
                  <p className="mt-4 text-sm md:text-base text-stone-600 leading-relaxed">
                    {project.body}
                  </p>

                  <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-stone-200 pt-6">
                    {project.specs.map((spec) => (
                      <div key={spec.label}>
                        <dt className="eyebrow text-stone-500">{spec.label}</dt>
                        <dd className="font-display text-base md:text-lg text-stone-900 mt-2 leading-snug">
                          {spec.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Goes In — install sequence */}
      <section className="relative py-20 md:py-28 bg-stone-50 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 bg-luxury-radial"
          aria-hidden
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="luxury-divider text-stone-400" aria-hidden />
              <span className="eyebrow text-stone-500">The Install</span>
              <span className="luxury-divider text-stone-400" aria-hidden />
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-light tracking-tight text-stone-900 leading-[1.05]">
              How it goes in.
            </h2>
            <p className="mt-6 text-balance text-base md:text-lg text-stone-600 leading-relaxed">
              Most of this is buried by the time a bathroom is finished. It is
              also the part that decides how long the room is out of use.
            </p>
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="group rounded-[24px] overflow-hidden bg-white ring-1 ring-stone-200/80 hover:shadow-luxury transition-all duration-500 hover:-translate-y-1"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={step.img}
                    alt={step.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-[1200ms] ease-out"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 bg-primary/5 rounded-lg flex items-center justify-center flex-shrink-0 ring-1 ring-primary/10">
                      <step.icon className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="font-display text-lg text-stone-900">
                      {index + 1}. {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}

export default RecentWork
