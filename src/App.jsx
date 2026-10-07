import { MotionConfig } from 'framer-motion'
import Epilogue from './components/Epilogue'
import Feature from './components/Feature'
import Hero from './components/Hero'
import Interlude from './components/Interlude'
import Nav from './components/Nav'
import Procession from './components/Procession'
import Prologue from './components/Prologue'
import { featured } from './data/statues'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="grain">
        <Nav />
        <main>
          <Hero />
          <Prologue />
          <section id="works">
            {featured.map((statue, i) => (
              <Feature key={statue.id} statue={statue} flip={i % 2 === 1} />
            ))}
          </section>
          <Procession />
          <Interlude />
          <Epilogue />
        </main>
      </div>
    </MotionConfig>
  )
}
