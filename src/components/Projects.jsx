import { motion } from 'framer-motion'
import { Github, ExternalLink, Play } from 'lucide-react'

const projects = [
  {
    title: 'Regenerating UI Playground',
    description: 'A kinetic UI demo with physics-based interactions and micro‑animations.',
    tags: ['React', 'Framer Motion', 'Tailwind'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Snikt API',
    description: 'FastAPI backend with JWT auth and MongoDB. Sharp and fast.',
    tags: ['FastAPI', 'MongoDB', 'Pydantic'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Red & Black Design System',
    description: 'A Deadpool‑inspired component library with accessibility at its core.',
    tags: ['Design System', 'A11y', 'Radix UI'],
    link: '#',
    repo: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-neutral-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Featured Projects</h2>
          <a href="#" className="text-red-400 hover:text-red-300 inline-flex items-center gap-2">
            <Play size={18} /> See more demos
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative bg-white/5 border border-white/10 rounded-xl overflow-hidden"
            >
              <div className="aspect-video bg-gradient-to-br from-red-600/30 to-black/40" />
              <div className="p-5">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="text-white/70 mt-1 text-sm">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs bg-white/10 border border-white/10 rounded px-2 py-1">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <a href={p.link} className="inline-flex items-center gap-1 text-red-400 hover:text-red-300">
                    <ExternalLink size={16} /> Live
                  </a>
                  <a href={p.repo} className="inline-flex items-center gap-1 text-white/70 hover:text-white">
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-red-600/20 via-transparent to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
