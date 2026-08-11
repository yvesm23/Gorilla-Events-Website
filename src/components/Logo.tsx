interface LogoProps {
  darkMode?: boolean
  compact?: boolean
}

export default function Logo({ darkMode = true, compact = false }: LogoProps) {
  const color = darkMode ? '#ffffff' : '#0c0c0c'
  const barW = 7
  const r = 3.5
  const cy = 46
  const totalW = 220

  // Bar heights (half-heights from center, ascending toward G)
  const bars = [
    { x: 30, h: 20 },
    { x: 42, h: 34 },
    { x: 54, h: 48 },
    { x: 66, h: 60 },
  ]
  const barsRight = [
    { x: 152, h: 60 },
    { x: 164, h: 48 },
    { x: 176, h: 34 },
    { x: 188, h: 20 },
  ]

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: compact ? 8 : 10 }}>
      {/* Soundwave G mark */}
      <svg
        width={compact ? 100 : 130}
        height={compact ? 36 : 46}
        viewBox={`0 0 ${totalW} 92`}
        fill="none"
        aria-hidden="true"
      >
        {/* Left dots */}
        <circle cx="8" cy={cy} r={r} fill={color} />
        <circle cx="19" cy={cy} r={r} fill={color} />

        {/* Left bars */}
        {bars.map((b, i) => (
          <rect
            key={i}
            x={b.x}
            y={cy - b.h / 2}
            width={barW}
            height={b.h}
            rx={r}
            fill={color}
          />
        ))}

        {/* G letterform */}
        <path
          d="M85 8C68 8 56 25 56 46C56 67 68 84 85 84C98 84 106 78 109 72V46H89V56H100V70C97 73 92 75 85 75C72 75 66 63 66 46C66 29 72 17 85 17C92 17 97 21 100 27L109 20C104 13 95 8 85 8Z"
          fill={color}
        />

        {/* Right bars */}
        {barsRight.map((b, i) => (
          <rect
            key={i}
            x={b.x}
            y={cy - b.h / 2}
            width={barW}
            height={b.h}
            rx={r}
            fill={color}
          />
        ))}

        {/* Right dots */}
        <circle cx="201" cy={cy} r={r} fill={color} />
        <circle cx="212" cy={cy} r={r} fill={color} />
      </svg>

      {/* Wordmark */}
      <div style={{ lineHeight: 1 }}>
        <div
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800,
            fontSize: compact ? '0.95rem' : '1.15rem',
            letterSpacing: '0.08em',
            color,
            textTransform: 'uppercase',
          }}
        >
          Gorilla Events
        </div>
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: compact ? '0.48rem' : '0.56rem',
            letterSpacing: '0.45em',
            color,
            opacity: 0.55,
            textTransform: 'uppercase',
            marginTop: 2,
          }}
        >
          Limited
        </div>
      </div>
    </div>
  )
}
