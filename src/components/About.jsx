import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="order-2 lg:order-1"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold">About Me</h2>
          <p className="mt-4 text-white/80 leading-relaxed">
            I’m a full‑stack engineer who treats performance budgets like bounties. I design bold interfaces,
            build reliable APIs, and ship features that regenerate quickly. My toolkit includes React, FastAPI,
            and modern DevOps.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {[
              ['Performance', 'Lighthouse 95+ targets'],
              ['Animations', 'Framer Motion wizardry'],
              ['Backends', 'FastAPI + MongoDB'],
              ['DX', 'CLI tools & automation'],
            ].map(([label, value]) => (
              <div key={label} className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-sm text-white/60">{label}</p>
                <p className="font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="order-1 lg:order-2"
        >
          <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-red-600/20 via-black to-black" />
        </motion.div>
      </div>
    </section>
  )
}
