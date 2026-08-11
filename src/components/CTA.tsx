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
            {/* WhatsApp icon */}
            <svg width="18" height="18" viewBox="0 0 32 32" fill="currentColor">
              <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.738 5.472 2.027 7.775L0 32l8.458-2.007A15.934 15.934 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.77-1.848l-.484-.288-5.02 1.19 1.258-4.897-.315-.504A13.249 13.249 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.935c-.398-.2-2.355-1.162-2.72-1.294-.364-.133-.63-.2-.894.2-.265.397-1.026 1.294-1.258 1.56-.232.265-.464.298-.862.1-.398-.199-1.68-.619-3.2-1.977-1.183-1.056-1.982-2.36-2.214-2.758-.232-.399-.025-.614.174-.813.18-.18.398-.464.597-.696.2-.232.265-.398.398-.663.133-.265.066-.497-.033-.696-.1-.2-.894-2.155-1.225-2.95-.322-.772-.65-.668-.894-.68-.231-.012-.497-.015-.762-.015-.265 0-.696.1-1.06.497-.365.398-1.392 1.36-1.392 3.315s1.425 3.844 1.624 4.11c.2.265 2.805 4.282 6.796 6.003.95.41 1.69.655 2.267.838.953.303 1.82.26 2.505.158.764-.114 2.355-.963 2.688-1.893.332-.93.332-1.727.232-1.893-.099-.166-.364-.265-.762-.464z"/>
            </svg>
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  )
}
