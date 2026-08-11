import { useState } from 'react'

const testimonials = [
  {
    name: 'Jean-Paul Niyonzima',
    role: 'CEO, Kigali Business Hub',
    quote: 'Gorilla Events transformed our annual conference into an extraordinary experience. The sound quality, LED screens, and lighting were world-class. Our delegates were incredibly impressed.',
    stars: 5,
    avatar: 'JN',
  },
  {
    name: 'Amina Uwimana',
    role: 'Events Director, Rwanda Tourism Board',
    quote: "We've worked with many production companies across East Africa. Gorilla Events stands apart — professional team, flawless execution, and they always deliver on time and within budget.",
    stars: 5,
    avatar: 'AU',
  },
  {
    name: 'Emmanuel Kayitare',
    role: 'Founder, Kigali Music Festival',
    quote: 'For three consecutive years, Gorilla Events has produced our festival stage. Their technical expertise and creative vision are unmatched. They are true professionals who love what they do.',
    stars: 5,
    avatar: 'EK',
  },
  {
    name: 'Chantal Mukamana',
    role: 'Wedding Planner, Elegance Events',
    quote: 'I recommend Gorilla Events to every client. The lighting and décor they created for our premium weddings was absolutely breathtaking. Every guest was blown away.',
    stars: 5,
    avatar: 'CM',
  },
]

const colors = ['#f59e0b', '#d97706', '#f59e0b', '#d97706']

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section
      style={{
        background: 'var(--bg-card)',
        padding: '7rem 0',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
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
            Client Stories
          </div>
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(2.2rem, 4vw, 3.6rem)',
              lineHeight: 1.0,
              textTransform: 'uppercase',
              color: 'var(--fg)',
              margin: 0,
            }}
          >
            What Our <span className="gold-text">Clients Say</span>
          </h2>
        </div>

        {/* Featured testimonial */}
        <div
          style={{
            maxWidth: 800,
            margin: '0 auto 3rem',
            borderRadius: 16,
            padding: '3rem',
            background: 'var(--bg)',
            border: '1px solid var(--border)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative quote mark */}
          <div
            style={{
              position: 'absolute',
              top: -8,
              left: 24,
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: '8rem',
              color: 'var(--accent)',
              opacity: 0.08,
              lineHeight: 1,
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          >
            "
          </div>

          {/* Stars */}
          <div style={{ display: 'flex', gap: 4, marginBottom: '1.5rem' }}>
            {Array.from({ length: testimonials[active].stars }).map((_, i) => (
              <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#f59e0b">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>

          {/* Quote */}
          <blockquote
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              lineHeight: 1.8,
              color: 'var(--fg)',
              margin: '0 0 2rem',
              fontStyle: 'italic',
              position: 'relative',
              zIndex: 1,
            }}
          >
            "{testimonials[active].quote}"
          </blockquote>

          {/* Author */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: colors[active],
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: '0.95rem',
                color: '#0c0c0c',
                flexShrink: 0,
              }}
            >
              {testimonials[active].avatar}
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  color: 'var(--fg)',
                }}
              >
                {testimonials[active].name}
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.82rem',
                  color: 'var(--fg-muted)',
                  marginTop: 2,
                }}
              >
                {testimonials[active].role}
              </div>
            </div>
          </div>
        </div>

        {/* Selector pills */}
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: '0.82rem',
                padding: '0.5rem 1.25rem',
                borderRadius: 100,
                border: `1px solid ${i === active ? 'var(--accent)' : 'var(--border)'}`,
                background: i === active ? 'var(--accent-dim)' : 'transparent',
                color: i === active ? 'var(--accent)' : 'var(--fg-muted)',
                cursor: 'pointer',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <span
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: '50%',
                  background: i === active ? 'var(--accent)' : 'var(--bg-elevated)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.7rem',
                  color: i === active ? '#0c0c0c' : 'var(--fg-muted)',
                  flexShrink: 0,
                }}
              >
                {t.avatar}
              </span>
              {t.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
