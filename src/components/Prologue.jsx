import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const passage =
  'Two thousand years ago, sculptors in Athens, Pergamon and Rome found the body hidden inside a block of marble. Time took the paint, the bronze, sometimes the arms and heads. What remains is the gesture.'

function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.12, 1])
  const y = useTransform(progress, range, [6, 0])
  return (
    <motion.span style={{ opacity, y }} className="mr-[0.25em] inline-block">
      {children}
    </motion.span>
  )
}

export default function Prologue() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.45'] })
  const words = passage.split(' ')

  return (
    <section ref={ref} className="mx-auto max-w-4xl px-6 py-40 md:py-56">
      <p className="eyebrow mb-10 text-center">Prologue</p>
      <p className="text-center font-serif text-[clamp(1.75rem,4vw,3.25rem)] leading-[1.25] font-light text-stone-900">
        {words.map((word, i) => {
          const start = i / words.length
          return (
            <Word key={i} progress={scrollYProgress} range={[start, start + 1 / words.length]}>
              {word}
            </Word>
          )
        })}
      </p>
    </section>
  )
}
