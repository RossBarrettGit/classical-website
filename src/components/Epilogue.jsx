import { motion } from 'framer-motion'
import { credits } from '../data/statues'

const ease = [0.22, 1, 0.36, 1]

export default function Epilogue() {
  return (
    <>
      <section id="epilogue" className="mx-auto max-w-4xl px-6 py-40 text-center md:py-56">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease }}
          className="mx-auto mb-16 h-24 w-px origin-top bg-stone-300"
        />
        <motion.blockquote
          initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.6, ease }}
          className="font-serif text-[clamp(2rem,5vw,4rem)] leading-[1.15] font-light italic"
        >
          “Ars longa, vita brevis.”
        </motion.blockquote>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="eyebrow mt-8"
        >
          Art is long, life is short — Hippocrates
        </motion.p>
      </section>

      <footer className="border-t border-stone-200 bg-stone-100">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-12 md:px-10">
          <div className="md:col-span-4">
            <p className="font-serif text-2xl tracking-[0.3em]">MARMOR</p>
            <p className="mt-4 max-w-xs text-sm text-stone-500">
              A small, quiet gallery of ancient sculpture. All photographs are in the public domain.
            </p>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="eyebrow mb-5">Image sources · Wikimedia Commons</p>
            <ul className="grid gap-x-10 gap-y-2 text-sm sm:grid-cols-2">
              {credits.map(([name, url]) => (
                <li key={name}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-stone-700 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-stone-900 hover:decoration-stone-700"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}
