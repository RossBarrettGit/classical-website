import { motion, useScroll, useTransform } from 'framer-motion'
import { useLayoutEffect, useRef, useState } from 'react'
import { procession } from '../data/statues'

// A pinned section whose vertical scroll drives a horizontal pan through the works.
export default function Procession() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const [distance, setDistance] = useState(0)

  useLayoutEffect(() => {
    const measure = () => {
      const track = trackRef.current
      if (track) setDistance(Math.max(0, track.scrollWidth - window.innerWidth))
    }
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(trackRef.current)
    window.addEventListener('resize', measure)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [])

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] })
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance])

  return (
    <section
      id="procession"
      ref={sectionRef}
      className="relative bg-stone-100"
      style={{ height: `calc(100svh + ${distance}px)` }}
    >
      <div className="sticky top-0 flex h-svh items-center overflow-hidden">
        <motion.div ref={trackRef} style={{ x }} className="flex items-center gap-10 pr-[10vw] pl-6 md:gap-16 md:pl-[8vw]">
          <div className="w-[80vw] shrink-0 sm:w-[46vw] md:w-[30vw]">
            <p className="eyebrow">The Procession</p>
            <h2 className="mt-6 font-serif text-5xl leading-[1.05] font-light md:text-7xl">
              Gods, heroes <br />
              <span className="italic">&amp; emperors</span>
            </h2>
            <p className="mt-8 max-w-xs text-stone-700">
              Keep scrolling — the gallery moves past you, as it once did along the Sacred Way.
            </p>
          </div>

          {procession.map((statue, i) => (
            <ProcessionCard key={statue.id} statue={statue} index={i} progress={scrollYProgress} />
          ))}
        </motion.div>

        <div className="absolute inset-x-6 bottom-10 h-px bg-stone-300 md:inset-x-[8vw]">
          <motion.div style={{ scaleX: scrollYProgress }} className="h-full origin-left bg-stone-700" />
        </div>
      </div>
    </section>
  )
}

function ProcessionCard({ statue, index, progress }) {
  // Each card drifts at a slightly different vertical rate for a layered feel.
  const y = useTransform(progress, [0, 1], index % 2 ? ['6%', '-6%'] : ['-4%', '4%'])

  return (
    <motion.figure style={{ y }} className="w-[72vw] shrink-0 sm:w-[42vw] md:w-[26vw]">
      <div className="group aspect-[3/4] overflow-hidden bg-stone-200">
        <img
          src={statue.image}
          alt={statue.name}
          loading="lazy"
          className="h-full w-full object-cover sepia-[0.15] transition-transform duration-[1.6s] ease-out group-hover:scale-105"
        />
      </div>
      <figcaption className="mt-5 flex items-baseline justify-between gap-4 border-t border-stone-300 pt-4">
        <span className="font-serif text-2xl text-stone-900">{statue.name}</span>
        <span className="eyebrow shrink-0">{statue.date}</span>
      </figcaption>
      <p className="mt-1 text-sm text-stone-500">{statue.location}</p>
    </motion.figure>
  )
}
