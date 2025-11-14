import { motion } from 'framer-motion'
import { Code2, Database, Sparkles, Server } from 'lucide-react'

const skills = [
  { icon: Code2, label: 'Frontend', items: ['React', 'Vite', 'Tailwind', 'Framer Motion'] },
  { icon: Server, label: 'Backend', items: ['FastAPI', 'Node', 'JWT', 'REST'] },
  { icon: Database, label: 'Database', items: ['MongoDB', 'Mongoose', 'Aggregation'] },
  { icon: Sparkles, label: 'Nice to Have', items: ['A11y', 'Testing', 'CI/CD'] },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-gradient-to-b from-black to-neutral-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-10">Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map(({ icon: Icon, label, items }, idx) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white/5 border border-white/10 rounded-xl p-5"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-red-600 to-red-400 flex items-center justify-center">
                  <Icon size={20} />
                </div>
                <h3 className="font-semibold">{label}</h3>
              </div>
              <ul className="mt-3 space-y-1 text-white/80 text-sm">
                {items.map((i) => (
                  <li key={i}>• {i}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
