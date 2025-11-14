import { useState } from 'react'
import { SendHorizonal } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    setTimeout(() => setStatus('Thanks! I\'ll get back to you.'), 900)
  }

  return (
    <section id="contact" className="relative py-24 bg-black text-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold">Contact</h2>
        <p className="text-white/80 mt-2">Have a mission? Let\'s team up.</p>
        <form onSubmit={onSubmit} className="mt-8 grid gap-4">
          <input required placeholder="Your name" className="bg-white/5 border border-white/10 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-red-600" />
          <input required type="email" placeholder="Email address" className="bg-white/5 border border-white/10 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-red-600" />
          <textarea required rows="4" placeholder="Tell me about your project" className="bg-white/5 border border-white/10 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-red-600" />
          <button type="submit" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold px-5 py-3 rounded-md shadow-lg shadow-red-600/30">
            <SendHorizonal size={18} /> Send
          </button>
          {status && <p className="text-green-400">{status}</p>}
        </form>
      </div>
    </section>
  )
}
