import { useState } from 'react'
import {
  CalendarCheck2,
  Headphones,
  PackageCheck,
  Radio,
  Wrench,
  Zap,
} from 'lucide-react'

const steps = [
  {
    num: '01',
    title: 'Consultation',
    desc: 'Understanding your goals, audience, venue, and event requirements in detail.',
    icon: <Radio size={24} />,
  },
  {
    num: '02',
    title: 'Planning',
    desc: 'Creating detailed production schedules, equipment lists, and technical plans.',
    icon: <CalendarCheck2 size={24} />,
  },
  {
    num: '03',
    title: 'Preparation',
    desc: 'Testing, organizing, and preparing all required equipment before the event.',
    icon: <Wrench size={24} />,
  },
  {
    num: '04',
    title: 'Installation',
    desc: 'Professional setup of staging, sound, lighting, LED screens, and all branding elements.',
    icon: <Zap size={24} />,
  },
  {
    num: '05',
    title: 'Live Support',
    desc: 'On-site technicians ensuring everything runs perfectly throughout your event.',
    icon: <Headphones size={24} />,
  },
  {
    num: '06',
    title: 'Breakdown',
    desc: 'Safe dismantling and equipment removal after your event is complete.',
    icon: <PackageCheck size={24} />,
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
