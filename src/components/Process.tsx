import { useState } from 'react'

const steps = [
  {
    num: '01',
    title: 'Consultation',
    desc: 'Understanding your goals, audience, venue, and event requirements in detail.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Planning',
    desc: 'Creating detailed production schedules, equipment lists, and technical plans.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Preparation',
    desc: 'Testing, organizing, and preparing all required equipment before the event.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Installation',
    desc: 'Professional setup of staging, sound, lighting, LED screens, and all branding elements.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/>
        <polyline points="2 17 12 22 22 17"/>
        <polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Live Support',
    desc: 'On-site technicians ensuring everything runs perfectly throughout your event.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Breakdown',
    desc: 'Safe dismantling and equipment removal after your event is complete.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
  },
]

export default function Process() {
  return (
    <section id="process" className="section-pad" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
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
            Our Workflow
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
            How We <span className="gold-text">Work</span>
          </h2>
        </div>

        {/* Steps grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem',
            position: 'relative',
          }}
        >
          {steps.map((step, i) => (
            <ProcessStep key={i} {...step} isLast={i === steps.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ProcessStepProps {
  num: string
  title: string
  desc: string
  icon: React.ReactNode
  isLast: boolean
}

function ProcessStep({ num, title, desc, icon }: ProcessStepProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 'var(--radius)',
        padding: '2rem',
        background: hovered ? 'var(--bg-elevated)' : 'var(--bg)',
        border: `1px solid ${hovered ? 'var(--accent-border)' : 'var(--border)'}`,
        transition: 'all 0.25s ease',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: hovered ? '0 8px 30px rgba(245,158,11,0.08)' : 'none',
        cursor: 'default',
        display: 'flex',
        gap: '1.25rem',
      }}
    >
      {/* Number + Icon column */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, flexShrink: 0 }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 12,
            background: hovered ? 'var(--accent)' : 'var(--accent-dim)',
            border: `1px solid ${hovered ? 'transparent' : 'var(--accent-border)'}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: hovered ? '#0c0c0c' : 'var(--accent)',
            transition: 'all 0.25s',
          }}
        >
          {icon}
        </div>
        <div
          style={{
            width: 1,
            flex: 1,
            background: 'var(--border)',
            minHeight: 20,
          }}
        />
      </div>

      {/* Content */}
      <div style={{ paddingTop: 4 }}>
        <div
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900,
            fontSize: '0.75rem',
            letterSpacing: '0.2em',
            color: 'var(--accent)',
            marginBottom: '0.35rem',
          }}
        >
          STEP {num}
        </div>
        <h3
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: '1.3rem',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            color: 'var(--fg)',
            margin: '0 0 0.6rem',
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.875rem',
            lineHeight: 1.65,
            color: 'var(--fg-muted)',
            margin: 0,
          }}
        >
          {desc}
        </p>
      </div>
    </div>
  )
}
