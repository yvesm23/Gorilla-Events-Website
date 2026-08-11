interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  tags: string[]
}

export default function ServiceCard({ icon, title, description, tags }: ServiceCardProps) {
  return (
    <article
      style={{
        borderRadius: 'var(--radius)',
        padding: '1.75rem',
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        boxShadow: 'var(--shadow)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: 12,
          background: 'var(--accent-dim)',
          border: '1px solid var(--accent-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--accent)',
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
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid var(--border)',
              color: 'var(--fg-muted)',
              fontSize: '0.72rem',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}
