import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const ease = [0.22, 1, 0.36, 1]

const reveal = {
  hidden: { clipPath: 'inset(100% 0% 0% 0%)' },
  show: { clipPath: 'inset(0% 0% 0% 0%)', transition: { duration: 1.6, ease } },
}

const settle = {
  hidden: { scale: 1.3 },
  show: { scale: 1.15, transition: { duration: 2.2, ease } },
}

const rise = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 1.1, ease } },
}

export default function Feature({ statue, flip }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  const numeralY = useTransform(scrollYProgress, [0, 1], ['40%', '-40%'])

  return (
    <article
      ref={ref}
      className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 md:grid-cols-12 md:gap-10 md:px-10 md:py-40"
    >
      {/* The in-view trigger lives on this wrapper: a fully clipped element never reports as visible. */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className={`md:col-span-6 ${flip ? 'md:order-2 md:col-start-7' : 'md:col-start-1'}`}
      >
        <motion.div variants={reveal} className="relative aspect-[3/4] overflow-hidden bg-stone-200">
          <motion.img
            src={statue.image}
            alt={statue.name}
            loading="lazy"
            style={{ y: imageY }}
            variants={settle}
            className="absolute inset-0 h-full w-full object-cover sepia-[0.15]"
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ staggerChildren: 0.12 }}
        className={`relative md:col-span-5 ${flip ? 'md:order-1 md:col-start-1' : 'md:col-start-8'}`}
      >
        <motion.span
          aria-hidden
          style={{ y: numeralY }}
          className="pointer-events-none absolute -top-24 -left-2 font-serif text-[10rem] leading-none font-light text-stone-200 select-none md:-top-32 md:text-[14rem]"
        >
          {statue.numeral}
        </motion.span>

        <div className="relative">
          <motion.p variants={rise} className="eyebrow">
            {statue.culture} · {statue.date}
          </motion.p>
          <motion.h2
            variants={rise}
            className="mt-5 font-serif text-5xl leading-[1.05] font-light text-stone-900 md:text-6xl"
          >
            {statue.name}
          </motion.h2>
          <motion.div variants={rise} className="my-8 h-px w-16 bg-ochre" />
          <motion.p variants={rise} className="max-w-md text-base leading-relaxed text-stone-700">
            {statue.text}
          </motion.p>
          <motion.dl variants={rise} className="mt-10 grid max-w-md grid-cols-2 gap-6 text-sm">
            <div>
              <dt className="eyebrow">Material</dt>
              <dd className="mt-2 font-serif text-lg text-stone-900">{statue.material}</dd>
            </div>
            <div>
              <dt className="eyebrow">Held at</dt>
              <dd className="mt-2 font-serif text-lg text-stone-900">{statue.location}</dd>
            </div>
          </motion.dl>
        </div>
      </motion.div>
    </article>
  )
}
