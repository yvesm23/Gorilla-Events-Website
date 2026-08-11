import { MessageCircle } from 'lucide-react'

export default function CTA() {
  return (
    <section
      style={{
        position: 'relative',
        padding: '8rem 0',
        overflow: 'hidden',
        background: '#080808',
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'url(https://images.unsplash.com/photo-1583795484071-3c453e3a7c71?w=1920&h=800&fit=crop&auto=format)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.35,
        }}
      />

      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(135deg, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0.6) 50%, rgba(8,8,8,0.85) 100%)',
        }}
      />

      {/* Ambient glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(245,158,11,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          maxWidth: 760,
        }}
      >
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
            fontSize: '0.78rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: '1.25rem',
          }}
        >
          Ready to Begin
        </div>

        <h2
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(2.8rem, 6vw, 5rem)',
            lineHeight: 0.95,
            textTransform: 'uppercase',
            color: '#ffffff',
            margin: '0 0 1.5rem',
            letterSpacing: '-0.01em',
          }}
        >
          Ready to Create Something{' '}
          <span className="gold-text">Extraordinary?</span>
        </h2>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1.1rem',
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.65)',
            margin: '0 auto 3rem',
            maxWidth: 580,
          }}
        >
          Let's bring your vision to life with professional event production and exceptional service. Your next unforgettable event starts here.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="#contact"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: '1.05rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              background: '#f59e0b',
              color: '#0c0c0c',
              borderRadius: 8,
              padding: '0.95rem 2.25rem',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'background 0.2s, transform 0.15s, box-shadow 0.2s',
              boxShadow: '0 4px 24px rgba(245,158,11,0.45)',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget
              el.style.background = '#fbbf24'
              el.style.transform = 'translateY(-2px)'
              el.style.boxShadow = '0 8px 36px rgba(245,158,11,0.55)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget
              el.style.background = '#f59e0b'
              el.style.transform = 'translateY(0)'
              el.style.boxShadow = '0 4px 24px rgba(245,158,11,0.45)'
            }}
          >
            Get a Free Quote
          </a>
          <a
            href="https://wa.me/250780000000?text=Hi%20Gorilla%20Events%2C%20I%27d%20like%20to%20get%20a%20quote%20for%20my%20event."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: '1.05rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              background: '#25D366',
              color: '#ffffff',
              border: 'none',
              borderRadius: 8,
              padding: '0.95rem 2.25rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              transition: 'background 0.2s, transform 0.15s, box-shadow 0.2s',
              boxShadow: '0 4px 20px rgba(37,211,102,0.35)',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget
              el.style.background = '#1da851'
              el.style.transform = 'translateY(-2px)'
              el.style.boxShadow = '0 8px 32px rgba(37,211,102,0.5)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget
              el.style.background = '#25D366'
              el.style.transform = 'translateY(0)'
              el.style.boxShadow = '0 4px 20px rgba(37,211,102,0.35)'
            }}
          >
            <MessageCircle size={18} />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  )
}
