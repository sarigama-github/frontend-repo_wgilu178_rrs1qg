import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <footer className="py-10 text-center text-white/60 bg-neutral-950">
        <p>© {new Date().getFullYear()} Deadpool.dev — Built with love, tacos, and a little chaos.</p>
      </footer>
    </div>
  )
}

export default App
