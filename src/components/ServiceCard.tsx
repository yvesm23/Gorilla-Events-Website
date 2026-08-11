import { useState } from 'react'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  tags: string[]
}

export default function ServiceCard({ icon, title, description, tags }: ServiceCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 'var(--radius)',
        padding: '1.75rem',
        background: hovered ? 'var(--bg-elevated)' : 'var(--bg-card)',
        border: `1px solid ${hovered ? 'var(--accent-border)' : 'var(--border)'}`,
        boxShadow: hovered ? '0 8px 30px rgba(245,158,11,0.08)' : 'var(--shadow)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        transition: 'all 0.25s ease',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        cursor: 'default',
      }}
    >
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: 12,
          background: hovered ? 'var(--accent)' : 'var(--accent-dim)',
          border: `1px solid ${hovered ? 'transparent' : 'var(--accent-border)'}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: hovered ? '#0c0c0c' : 'var(--accent)',
          transition: 'all 0.25s ease',
        }}
      >
        {icon}
      </div>

      <h3
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 700,
          fontSize: '1.5rem',
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          color: 'var(--fg)',
          margin: 0,
        }}
      >
        {title}
      </h3>

      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.96rem',
          lineHeight: 1.7,
          color: 'var(--fg-muted)',
          margin: 0,
        }}
      >
        {description}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              padding: '0.4rem 0.7rem',
              borderRadius: 999,
              background: hovered ? 'rgba(245, 158, 11, 0.08)' : 'rgba(255,255,255,0.03)',
              border: '1px solid var(--border)',
              color: 'var(--fg-muted)',
              fontSize: '0.72rem',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              transition: 'all 0.25s ease',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}
