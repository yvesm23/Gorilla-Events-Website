import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import About from './components/About'
import Features from './components/Features'
import Process from './components/Process'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={darkMode ? 'dark' : 'light'} style={{ background: 'var(--bg)', color: 'var(--fg)', minHeight: '100vh' }}>
      <Nav darkMode={darkMode} toggleTheme={() => setDarkMode(d => !d)} />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <Features />
        <Process />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer darkMode={darkMode} />
    </div>
  )
}
