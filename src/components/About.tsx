export default function About() {
  return (
    <section id="about" className="section-pad" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        {/* Two-column layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '5rem',
            alignItems: 'center',
          }}
        >
          {/* Image side */}
          <div style={{ position: 'relative' }}>
            {/* Main image */}
            <div
              style={{
                borderRadius: 'var(--radius)',
                overflow: 'hidden',
                aspectRatio: '4 / 5',
                background: '#1a1a1a',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1563841930606-67e2bce48b78?w=800&h=1000&fit=crop&auto=format"
                alt="Gorilla Events production team at a concert"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(8,8,8,0.7) 0%, transparent 50%)',
                  borderRadius: 'var(--radius)',
                }}
              />
            </div>

            {/* Floating stat card */}
            <div
              style={{
                position: 'absolute',
                bottom: -24,
                right: -24,
                background: 'var(--accent)',
                borderRadius: 'var(--radius)',
                padding: '1.5rem',
                color: '#0c0c0c',
                boxShadow: '0 16px 48px rgba(245,158,11,0.35)',
                minWidth: 160,
              }}
            >
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: '2.8rem',
                  lineHeight: 1,
                }}
              >
                10+
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  marginTop: 4,
                }}
              >
                Years of excellence
              </div>
            </div>

            {/* Decorative accent line */}
            <div
              style={{
                position: 'absolute',
                top: '10%',
                left: -16,
                width: 4,
                height: '40%',
                borderRadius: 2,
                background: 'linear-gradient(to bottom, var(--accent), transparent)',
              }}
            />
          </div>

          {/* Text side */}
          <div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: '0.78rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: '1rem',
              }}
            >
              About Gorilla Events
            </div>

            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
                lineHeight: 1.0,
                textTransform: 'uppercase',
                color: 'var(--fg)',
                letterSpacing: '-0.01em',
                margin: '0 0 1.5rem',
              }}
            >
              Bringing Your{' '}
              <span className="gold-text">Vision to Life</span>
            </h2>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '1rem',
                lineHeight: 1.8,
                color: 'var(--fg-muted)',
                margin: '0 0 1.25rem',
              }}
            >
              At Gorilla Events, we believe every event tells a story. From intimate gatherings to large-scale productions, our experienced team combines creativity, cutting-edge technology, and flawless execution to transform ideas into extraordinary experiences.
            </p>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '1rem',
                lineHeight: 1.8,
                color: 'var(--fg-muted)',
                margin: '0 0 2.5rem',
              }}
            >
              Our commitment to excellence has made us a trusted partner for businesses, organizations, churches, artists, and individuals throughout Rwanda.
            </p>

            {/* Mission & Vision */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div
                style={{
                  borderLeft: '3px solid var(--accent)',
                  paddingLeft: '1.25rem',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                    marginBottom: '0.4rem',
                  }}
                >
                  Our Mission
                </div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    color: 'var(--fg)',
                    margin: 0,
                    fontStyle: 'italic',
                  }}
                >
                  "To create unforgettable events by delivering professional, innovative, and reliable event production services with excellence."
                </p>
              </div>

              <div
                style={{
                  borderLeft: '3px solid var(--border-strong)',
                  paddingLeft: '1.25rem',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--fg-muted)',
                    marginBottom: '0.4rem',
                  }}
                >
                  Our Vision
                </div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    color: 'var(--fg-muted)',
                    margin: 0,
                    fontStyle: 'italic',
                  }}
                >
                  "To become East Africa's leading event production company, recognized for innovation, quality, and exceptional client experiences."
                </p>
              </div>
            </div>

            {/* CTA */}
            <div style={{ marginTop: '2.5rem' }}>
              <a
                href="#contact"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: '1rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  background: 'var(--accent)',
                  color: '#0c0c0c',
                  borderRadius: 8,
                  padding: '0.85rem 2rem',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'background 0.2s, transform 0.15s',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.background = 'var(--accent-hover)'
                  el.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.background = 'var(--accent)'
                  el.style.transform = 'translateY(0)'
                }}
              >
                Work With Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
