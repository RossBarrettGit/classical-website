import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

// Full-bleed image that opens from a narrow frame to the full viewport as you scroll.
export default function Interlude() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] })

  const clip = useTransform(scrollYProgress, [0, 0.85], ['inset(18% 22% 18% 22%)', 'inset(0% 0% 0% 0%)'])
  const scale = useTransform(scrollYProgress, [0, 1], [1.35, 1])
  const captionOpacity = useTransform(scrollYProgress, [0.7, 1], [0, 1])
  const captionY = useTransform(scrollYProgress, [0.7, 1], [30, 0])

  return (
    <section ref={ref} className="relative h-[200svh]">
      <div className="sticky top-0 h-svh overflow-hidden">
        <motion.div style={{ clipPath: clip }} className="absolute inset-0">
          <motion.img
            src="/images/dying-gaul.jpg"
            alt="The Dying Gaul"
            loading="lazy"
            style={{ scale }}
            className="h-full w-full object-cover sepia-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
        </motion.div>

        <motion.div
          style={{ opacity: captionOpacity, y: captionY }}
          className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-6 pb-16 text-stone-50 md:px-10"
        >
          <p className="text-[0.7rem] tracking-[0.32em] text-stone-200 uppercase">Interlude · Roman copy of a Pergamene bronze</p>
          <h2 className="mt-4 font-serif text-5xl font-light md:text-7xl">The Dying Gaul</h2>
          <p className="mt-4 max-w-lg text-stone-200">
            A defeated warrior, carved by his conquerors with more dignity than triumph. Musei Capitolini, Rome.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
