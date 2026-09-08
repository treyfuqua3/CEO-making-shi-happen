'use client';

import { useState, useRef, useCallback } from 'react';

/**
 * Recent work section for fuquafinishes.com
 *
 * Drop-in for Next.js App Router. Images live in /public/work/.
 * Typography deliberately inherits from the host page so the section reads as
 * part of the site rather than an embedded widget; only scale, weight and
 * spacing are set here.
 */

const PROJECTS = [
  {
    id: 'calacatta-oro',
    name: 'Calacatta Oro',
    location: 'Houston, TX',
    before: '/calacatta-before.jpg',
    after: '/calacatta-after.jpg',
    beforeAlt: 'Shower alcove finished in wood-look plank tile with a hex mosaic floor.',
    afterAlt: 'The same alcove in Calacatta Oro porcelain with frameless glass and a recessed niche.',
    lede:
      'A tiled alcove taken back to studs and rebuilt in full-height porcelain. The dimensions and the niche stayed exactly where they were.',
    body:
      'The plank tile carried a grout line every few inches. Each one was a surface to scrub and a place for water to eventually find its way in. Full-height panels reduce that to the corners.',
    specs: [
      ['Finish', 'Calacatta Oro'],
      ['Scope', 'Walls, pan, floor'],
      ['Install', '2–3 days'],
    ],
  },
  {
    id: 'lims-ivory',
    name: 'Lims Ivory',
    location: 'Houston, TX',
    before: '/limestone-before.jpg',
    after: '/limestone-after.jpg',
    beforeAlt: 'Subway-tiled alcove with a drop-in bathtub and a curtain rod.',
    afterAlt: 'A walk-in shower in warm ivory porcelain on the same footprint.',
    lede:
      'The tub came out and a walk-in shower went in on the same footprint, without moving the plumbing wall.',
    body:
      'This is the job people expect to lose a bathroom over for weeks. The pan arrives finished and pre-sloped, so there is no mud bed and no waiting for it to cure.',
    specs: [
      ['Finish', 'Lims Ivory'],
      ['Scope', 'Tub to walk-in shower'],
      ['Install', '2–3 days'],
    ],
  },
];

const STEPS = [
  {
    img: '/step-1-waterproof.jpg',
    alt: 'Shower walls in cement backer board coated with red waterproofing membrane.',
    title: 'Waterproofing',
    text: 'Cement backer, seams banded, niche formed, then sealed under a liquid membrane.',
  },
  {
    img: '/step-2-adhesive.jpg',
    alt: 'Construction adhesive applied in dabs across the waterproofed wall, with wood shims.',
    title: 'Adhesive',
    text: 'Adhesive goes on the wall, not the panel. Shims bring each panel to level.',
  },
  {
    img: '/step-3-set.jpg',
    alt: 'Two installers lifting a full-height porcelain panel into a corner.',
    title: 'Setting',
    text: 'Two people, hand tools and suction cups. No slab crew, no mixing station.',
  },
  {
    img: '/step-4-complete.jpg',
    alt: 'The finished porcelain shower with rain head, niche and square drain.',
    title: 'Finished',
    text: 'Walls, pan and floor in. Two to three days of install; demo is separate.',
  },
];

function Compare({ before, after, beforeAlt, afterAlt }) {
  const [split, setSplit] = useState(52);
  const ref = useRef(null);
  const dragging = useRef(false);

  const move = useCallback((clientX) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const pct = ((clientX - r.left) / r.width) * 100;
    setSplit(Math.max(0, Math.min(100, pct)));
  }, []);

  const onKey = (e) => {
    if (e.key === 'ArrowLeft') { setSplit((v) => Math.max(0, v - 4)); e.preventDefault(); }
    if (e.key === 'ArrowRight') { setSplit((v) => Math.min(100, v + 4)); e.preventDefault(); }
    if (e.key === 'Home') { setSplit(0); e.preventDefault(); }
    if (e.key === 'End') { setSplit(100); e.preventDefault(); }
  };

  return (
    <div
      ref={ref}
      className="rw-compare"
      role="slider"
      tabIndex={0}
      aria-label="Drag to compare before and after"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(split)}
      onKeyDown={onKey}
      onMouseDown={(e) => { dragging.current = true; move(e.clientX); }}
      onMouseMove={(e) => { if (dragging.current) move(e.clientX); }}
      onMouseUp={() => { dragging.current = false; }}
      onMouseLeave={() => { dragging.current = false; }}
      onTouchStart={(e) => move(e.touches[0].clientX)}
      onTouchMove={(e) => move(e.touches[0].clientX)}
    >
      <img className="rw-img" src={before} alt={beforeAlt} draggable={false} />
      <div className="rw-clip" style={{ clipPath: `inset(0 0 0 ${split}%)` }}>
        <img className="rw-img" src={after} alt={afterAlt} draggable={false} />
      </div>

      <span className="rw-tag rw-tag-l">Before</span>
      <span className="rw-tag rw-tag-r">After</span>

      <div className="rw-seam" style={{ left: `${split}%` }} aria-hidden="true">
        <span className="rw-grip" />
      </div>

      <style jsx>{`
        .rw-compare {
          position: relative;
          aspect-ratio: 3 / 4;
          overflow: hidden;
          background: var(--rw-line);
          cursor: ew-resize;
          touch-action: pan-y;
          user-select: none;
        }
        .rw-compare:focus-visible {
          outline: 2px solid var(--rw-ink);
          outline-offset: 3px;
        }
        .rw-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .rw-clip { position: absolute; inset: 0; }
        .rw-seam {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          background: rgba(255, 255, 255, 0.92);
          box-shadow: 0 0 0 1px rgba(28, 30, 31, 0.22);
          pointer-events: none;
        }
        .rw-grip {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 40px;
          height: 40px;
          margin: -20px 0 0 -20px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 1px 10px rgba(28, 30, 31, 0.28);
        }
        .rw-grip::before,
        .rw-grip::after {
          content: '';
          position: absolute;
          top: 50%;
          width: 0;
          height: 0;
          border-top: 4px solid transparent;
          border-bottom: 4px solid transparent;
        }
        .rw-grip::before {
          left: 11px;
          margin-top: -4px;
          border-right: 5px solid var(--rw-ink);
        }
        .rw-grip::after {
          right: 11px;
          margin-top: -4px;
          border-left: 5px solid var(--rw-ink);
        }
        .rw-tag {
          position: absolute;
          bottom: 12px;
          font-size: 0.72rem;
          letter-spacing: 0.01em;
          padding: 4px 9px;
          background: rgba(28, 30, 31, 0.74);
          color: #fff;
          pointer-events: none;
        }
        .rw-tag-l { left: 12px; }
        .rw-tag-r { right: 12px; }
      `}</style>
    </div>
  );
}

export default function RecentWork() {
  return (
    <section className="rw" aria-labelledby="rw-heading">
      <div className="rw-wrap">
        <header className="rw-head">
          <h2 id="rw-heading">Recent work</h2>
          <p>
            Two bathrooms in one Houston home, finished in different colorways from the same
            system. Drag either image to see what changed.
          </p>
        </header>

        {PROJECTS.map((p, i) => (
          <article key={p.id} className={`rw-project ${i % 2 ? 'is-flipped' : ''}`}>
            <div className="rw-media">
              <Compare
                before={p.before}
                after={p.after}
                beforeAlt={p.beforeAlt}
                afterAlt={p.afterAlt}
              />
            </div>

            <div className="rw-copy">
              <h3>{p.name}</h3>
              <p className="rw-place">{p.location}</p>
              <p className="rw-lede">{p.lede}</p>
              <p className="rw-body">{p.body}</p>
              <dl className="rw-specs">
                {p.specs.map(([k, v]) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </article>
        ))}

        <div className="rw-process">
          <header className="rw-head rw-head-sm">
            <h3>How it goes in</h3>
            <p>
              Most of this is buried by the time a bathroom is finished. It is the part that
              decides how long you lose the room for.
            </p>
          </header>

          <ol className="rw-steps">
            {STEPS.map((s, i) => (
              <li key={s.title}>
                <img src={s.img} alt={s.alt} loading="lazy" />
                <div className="rw-step-head">
                  <span className="rw-step-n">{i + 1}</span>
                  <h4>{s.title}</h4>
                </div>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="rw-cta">
          <p>Planning a bathroom? We can walk you through finishes and timing.</p>
          <a href="/contact">Request a quote</a>
        </div>
      </div>

      <style jsx>{`
        .rw {
          --rw-paper: #fbfbf9;
          --rw-ink: #1c1e1f;
          --rw-muted: #6e7275;
          --rw-line: #e3e2dd;
          --rw-brass: #9c7a4e;
          background: var(--rw-paper);
          color: var(--rw-ink);
          padding: clamp(56px, 8vw, 104px) 0;
        }
        .rw-wrap {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .rw-head { max-width: 54ch; margin-bottom: clamp(36px, 5vw, 60px); }
        .rw-head h2 {
          margin: 0 0 12px;
          font-size: clamp(1.9rem, 4vw, 2.8rem);
          font-weight: 600;
          letter-spacing: -0.015em;
          line-height: 1.1;
        }
        .rw-head p { margin: 0; color: var(--rw-muted); line-height: 1.6; }
        .rw-head-sm h3 {
          margin: 0 0 12px;
          font-size: clamp(1.4rem, 2.6vw, 1.9rem);
          font-weight: 600;
          letter-spacing: -0.01em;
        }
        .rw-head-sm p { margin: 0; color: var(--rw-muted); line-height: 1.6; }

        .rw-project {
          display: grid;
          grid-template-columns: minmax(0, 5fr) minmax(0, 6fr);
          gap: clamp(28px, 5vw, 64px);
          align-items: center;
          padding: clamp(36px, 5vw, 56px) 0;
          border-top: 1px solid var(--rw-line);
        }
        .rw-project.is-flipped .rw-media { order: 2; }

        .rw-copy h3 {
          margin: 0 0 4px;
          font-size: clamp(1.5rem, 2.8vw, 2.1rem);
          font-weight: 600;
          letter-spacing: -0.012em;
        }
        .rw-place { margin: 0 0 20px; color: var(--rw-muted); font-size: 0.92rem; }
        .rw-lede { margin: 0 0 14px; font-size: 1.06rem; line-height: 1.62; max-width: 46ch; }
        .rw-body { margin: 0 0 26px; color: var(--rw-muted); line-height: 1.65; max-width: 48ch; }

        .rw-specs {
          display: flex;
          flex-wrap: wrap;
          gap: 0;
          margin: 0;
          border-top: 1px solid var(--rw-line);
        }
        .rw-specs > div {
          padding: 14px 26px 0 0;
          margin-right: 26px;
          border-right: 1px solid var(--rw-line);
        }
        .rw-specs > div:last-child { border-right: 0; margin-right: 0; padding-right: 0; }
        .rw-specs dt { margin: 0 0 3px; font-size: 0.8rem; color: var(--rw-muted); }
        .rw-specs dd { margin: 0; font-size: 1rem; font-weight: 600; }

        .rw-process { border-top: 1px solid var(--rw-line); padding-top: clamp(40px, 6vw, 68px); }
        .rw-steps {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: clamp(16px, 2.4vw, 30px);
        }
        .rw-steps img {
          width: 100%;
          aspect-ratio: 1 / 1;
          object-fit: cover;
          display: block;
          margin-bottom: 14px;
        }
        .rw-step-head { display: flex; align-items: baseline; gap: 9px; margin-bottom: 6px; }
        .rw-step-n { font-size: 0.8rem; color: var(--rw-brass); font-variant-numeric: tabular-nums; }
        .rw-steps h4 { margin: 0; font-size: 1rem; font-weight: 600; }
        .rw-steps p { margin: 0; font-size: 0.92rem; line-height: 1.55; color: var(--rw-muted); }

        .rw-cta {
          margin-top: clamp(44px, 6vw, 72px);
          padding-top: clamp(28px, 4vw, 40px);
          border-top: 1px solid var(--rw-line);
          display: flex;
          flex-wrap: wrap;
          gap: 18px 32px;
          align-items: center;
          justify-content: space-between;
        }
        .rw-cta p { margin: 0; font-size: 1.05rem; }
        .rw-cta a {
          display: inline-block;
          padding: 13px 26px;
          background: var(--rw-ink);
          color: var(--rw-paper);
          text-decoration: none;
          font-size: 0.95rem;
          transition: background 0.18s ease;
        }
        .rw-cta a:hover { background: var(--rw-brass); }
        .rw-cta a:focus-visible { outline: 2px solid var(--rw-brass); outline-offset: 3px; }

        @media (max-width: 900px) {
          .rw-project { grid-template-columns: 1fr; gap: 26px; }
          .rw-project.is-flipped .rw-media { order: 0; }
          .rw-media { max-width: 460px; }
          .rw-steps { grid-template-columns: repeat(2, 1fr); gap: 24px 18px; }
        }
        @media (max-width: 520px) {
          .rw-steps { grid-template-columns: 1fr; }
          .rw-specs > div { padding-right: 18px; margin-right: 18px; }
          .rw-cta a { width: 100%; text-align: center; }
        }
        @media (prefers-reduced-motion: reduce) {
          .rw-cta a { transition: none; }
        }
      `}</style>
    </section>
  );
}
