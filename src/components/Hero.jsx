import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const ease = [0.22, 1, 0.36, 1]
const title = 'MARMOR'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12])
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '-60%'])
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section id="top" ref={ref} className="relative h-[110svh] overflow-hidden">
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-0 flex items-end justify-center"
      >
        <motion.img
          src="/images/nike.jpg"
          alt="The Winged Victory of Samothrace"
          initial={{ opacity: 0, scale: 1.08, filter: 'blur(8px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 2.4, ease }}
          className="h-[92svh] w-auto max-w-none object-cover mix-blend-multiply"
          style={{
            maskImage: 'radial-gradient(ellipse 60% 70% at 50% 45%, #000 50%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse 60% 70% at 50% 45%, #000 50%, transparent 80%)',
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: titleY, opacity: fade }}
        className="relative z-10 isolate flex h-svh flex-col [text-shadow:0_0_24px_var(--color-stone-50),0_0_8px_var(--color-stone-50)] items-center justify-center px-6 text-center"
      >
        <div
          aria-hidden
          className="absolute inset-x-0 top-1/2 -z-10 h-[55%] -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgb(247_243_236/0.8),transparent_65%)]"
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease }}
          className="eyebrow mb-6 font-medium !text-stone-900"
        >
          Sculpture of Greece &amp; Rome
        </motion.p>

        <h1 className="flex overflow-hidden font-serif text-[clamp(3.25rem,14vw,15rem)] leading-none font-light tracking-[0.04em] md:tracking-[0.08em] text-stone-900">
          {title.split('').map((letter, i) => (
            <motion.span
              key={i}
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 1.4, delay: 0.4 + i * 0.08, ease }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 1.3 }}
          className="mt-6 max-w-sm font-serif text-2xl text-stone-900 italic"
        >
          Stone that learned to breathe.
        </motion.p>
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="eyebrow">Scroll</span>
        <span className="relative block h-12 w-px overflow-hidden bg-stone-300">
          <motion.span
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 bg-stone-700"
          />
        </span>
      </motion.div>
    </section>
  )
}
