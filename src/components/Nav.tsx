import { useState, useEffect } from 'react'
import { Menu, MoonStar, SunMedium, X } from 'lucide-react'
import Logo from './Logo'

interface NavProps {
  darkMode: boolean
  toggleTheme: () => void
}

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav({ darkMode, toggleTheme }: NavProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeHref, setActiveHref] = useState('#home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        setActiveHref('#contact')
        return
      }

      const activeSection = links
        .map(link => document.getElementById(link.href.slice(1)))
        .filter((section): section is HTMLElement => section !== null)
        .filter(section => section.getBoundingClientRect().top <= 100)
        .sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top)
        .at(-1)

      if (activeSection) setActiveHref(`#${activeSection.id}`)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navBg = scrolled
    ? 'var(--nav-bg)'
    : 'transparent'

  const borderBottom = scrolled ? `1px solid var(--border)` : '1px solid transparent'

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: navBg,
          borderBottom,
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          transition: 'background 0.3s ease, border-color 0.3s ease',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          {/* Logo */}
          <a href="#home" style={{ textDecoration: 'none' }}>
            <Logo darkMode={darkMode} compact />
          </a>

          {/* Desktop Links */}
          <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="hidden-mobile">
            {links.map(l => {
              const isActive = activeHref === l.href
              return (
                <a
                  key={l.href}
                  href={l.href}
                  aria-current={isActive ? 'location' : undefined}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: '0.875rem',
                    color: isActive ? 'var(--accent)' : 'var(--fg-muted)',
                    textDecoration: 'none',
                    letterSpacing: '0.02em',
                    padding: '8px 0',
                    borderBottom: `2px solid ${isActive ? 'var(--accent)' : 'transparent'}`,
                    transition: 'color 0.2s, border-color 0.2s',
                  }}
                >
                  {l.label}
                </a>
              )
            })}
          </nav>

          {/* Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              style={{
                width: 38,
                height: 38,
                borderRadius: '50%',
                border: '1px solid var(--border-strong)',
                background: 'var(--bg-card)',
                color: 'var(--fg)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.2s',
                flexShrink: 0,
              }}
            >
              {darkMode ? <SunMedium size={16} /> : <MoonStar size={16} />}
            </button>

            {/* CTA */}
            <a
              href="#contact"
              className="hidden-mobile"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: '0.95rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                background: 'var(--accent)',
                color: '#0c0c0c',
                border: 'none',
                borderRadius: 6,
                padding: '0.55rem 1.25rem',
                cursor: 'pointer',
                textDecoration: 'none',
                transition: 'background 0.2s, transform 0.15s',
                display: 'inline-block',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.background = 'var(--accent-hover)'
                el.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.background = 'var(--accent)'
                el.style.transform = 'translateY(0)'
              }}
            >
              Get a Quote
            </a>

            {/* Hamburger */}
            <button
              className="show-mobile"
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
              style={{
                width: 38,
                height: 38,
                borderRadius: 6,
                border: '1px solid var(--border-strong)',
                background: 'var(--bg-card)',
                color: 'var(--fg)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99,
          background: 'var(--bg)',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s ease',
          paddingTop: 90,
          display: 'flex',
          flexDirection: 'column',
          padding: '90px 2rem 2rem',
          gap: '0.25rem',
        }}
      >
        {links.map(l => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: '2rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              color: activeHref === l.href ? 'var(--accent)' : 'var(--fg)',
              textDecoration: 'none',
              padding: '0.6rem 0',
              borderBottom: `1px solid ${activeHref === l.href ? 'var(--accent)' : 'var(--border)'}`,
              transition: 'color 0.2s',
            }}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: '1.1rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            background: 'var(--accent)',
            color: '#0c0c0c',
            borderRadius: 8,
            padding: '0.85rem 1.5rem',
            cursor: 'pointer',
            textDecoration: 'none',
            textAlign: 'center',
            marginTop: '1.5rem',
            display: 'block',
          }}
        >
          Get a Quote
        </a>
      </div>

      <style>{`
        @media (min-width: 769px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  )
}
