import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export function Section({ eyebrow, title, desc, children }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className="py-14">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          {eyebrow ? <div className="badge">{eyebrow}</div> : null}
          {title ? <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">{title}</h2> : null}
          {desc ? <p className="mt-3 max-w-2xl text-slate-600">{desc}</p> : null}
          <div className="mt-8">{children}</div>
        </motion.div>
      </div>
    </section>
  )
}
