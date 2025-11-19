import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Projects from './components/Projects'
import CTA from './components/CTA'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-slate-900" style={{ fontFamily: 'Bricolage Grotesque, var(--font-sans)' }}>
      <Navbar />
      <Hero />
      <Features />
      <Projects />
      <CTA />
    </div>
  )
}

export default App
