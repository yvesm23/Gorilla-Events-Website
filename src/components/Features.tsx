import { useState } from 'react'
import {
  BatteryCharging,
  Clock3,
  MapPinned,
  ShieldCheck,
  Sparkles,
  Users,
  Wallet,
  Zap,
} from 'lucide-react'

const features = [
  {
    icon: <Zap size={18} />,
    title: 'Fast Setup',
    desc: 'Our experienced crew ensures quick and efficient installations so your event starts on time, every time.',
  },
  {
    icon: <Sparkles size={18} />,
    title: 'Modern Equipment',
    desc: 'Industry-standard sound, lighting, LED screens, staging, and production gear — always maintained and up to date.',
  },
  {
    icon: <Users size={18} />,
    title: 'Professional Technicians',
    desc: 'Highly trained operators dedicated to delivering flawless performances throughout your event.',
  },
  {
    icon: <MapPinned size={18} />,
    title: 'Nationwide Coverage',
    desc: 'Serving clients throughout Rwanda — from Kigali to every province with full logistical support.',
  },
  {
    icon: <Clock3 size={18} />,
    title: '24/7 Technical Support',
    desc: 'Our team remains fully available before, during, and after every event to handle any situation.',
  },
  {
    icon: <Wallet size={18} />,
    title: 'Flexible Pricing',
    desc: 'Tailored packages designed to fit your budget without compromising on quality or execution.',
  },
  {
    icon: <ShieldCheck size={18} />,
    title: 'Safety Standards',
    desc: 'Every installation follows rigorous professional safety procedures — protecting your guests and crew.',
  },
  {
    icon: <BatteryCharging size={18} />,
    title: 'Reliable Power Backup',
    desc: 'Robust backup power solutions keep your event running smoothly without any interruptions.',
  },
]

export default function Features() {
  return (
    <section style={{ background: 'var(--bg)', padding: '7rem 0' }}>
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
            Why Choose Us
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
            The Gorilla Events{' '}
            <span className="gold-text">Difference</span>
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1rem',
          }}
        >
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  desc: string
}

function FeatureCard({ icon, title, desc }: FeatureCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 'var(--radius)',
        padding: '1.75rem',
        background: hovered ? 'var(--bg-card)' : 'transparent',
        border: `1px solid ${hovered ? 'var(--border-strong)' : 'var(--border)'}`,
        transition: 'background 0.25s, border-color 0.25s, transform 0.2s',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        display: 'flex',
        gap: '1rem',
        alignItems: 'flex-start',
        cursor: 'default',
      }}
    >
      <div
        style={{
          fontSize: '1.5rem',
          width: 48,
          height: 48,
          borderRadius: 10,
          background: 'var(--accent-dim)',
          border: '1px solid var(--accent-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          transition: 'background 0.25s',
        }}
      >
        {icon}
      </div>
      <div>
        <h3
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: '1.1rem',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: 'var(--fg)',
            margin: '0 0 0.4rem',
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
