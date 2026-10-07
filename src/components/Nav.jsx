import { motion, useScroll, useSpring } from 'framer-motion'

export default function Nav() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-40 bg-stone-50/70 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="font-serif text-xl tracking-[0.3em] text-stone-900">
          MARMOR
        </a>
        <ul className="hidden gap-10 text-[0.7rem] tracking-[0.28em] text-stone-700 uppercase sm:flex">
          <li><a className="transition-colors hover:text-stone-900" href="#works">Works</a></li>
          <li><a className="transition-colors hover:text-stone-900" href="#procession">Procession</a></li>
          <li><a className="transition-colors hover:text-stone-900" href="#epilogue">Epilogue</a></li>
        </ul>
      </nav>
      <motion.div
        style={{ scaleX: progress }}
        className="h-px origin-left bg-stone-700/60"
      />
    </motion.header>
  )
}
