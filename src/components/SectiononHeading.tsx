interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
}

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
      {eyebrow && (
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
          {eyebrow}
        </div>
      )}
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
        {title}
      </h2>
      {description && (
        <p
          style={{
            maxWidth: '760px',
            margin: '1rem auto 0',
            fontFamily: "'Inter', sans-serif",
            fontSize: '1rem',
            lineHeight: 1.8,
            color: 'var(--fg-muted)',
          }}
        >
          {description}
        </p>
      )}
    </div>
  )
}
