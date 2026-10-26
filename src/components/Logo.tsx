interface LogoProps {
  darkMode?: boolean
  compact?: boolean
}

export default function Logo({ darkMode = true, compact = false }: LogoProps) {
  return (
    <img
      src="/gorilla-events-logo.png"
      alt="Gorilla Events Limited"
      style={{
        display: 'block',
        height: compact ? 64 : 100,
        width: 'auto',
        filter: darkMode ? 'none' : 'invert(1)',
      }}
    />
  )
}
