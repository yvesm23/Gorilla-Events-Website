import { useState, useEffect, useRef } from 'react'

interface StatProps {
  value: number
  suffix: string
  label: string
}

function CountUp({ value, suffix, label }: StatProps) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const duration = 1800
    const increment = value / (duration / 16)
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [started, value])

  return (
    <div
      ref={ref}
      style={{
        textAlign: 'center',
        padding: '2.5rem 2rem',
        borderRadius: 'var(--radius)',
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        flex: 1,
        minWidth: 180,
        transition: 'transform 0.2s, box-shadow 0.2s',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget
        el.style.transform = 'translateY(-4px)'
        el.style.boxShadow = '0 12px 40px rgba(245,158,11,0.12)'
        el.style.borderColor = 'var(--accent-border)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget
        el.style.transform = 'translateY(0)'
        el.style.boxShadow = 'none'
        el.style.borderColor = 'var(--border)'
      }}
    >
      <div
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 900,
          fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
          lineHeight: 1,
          color: 'var(--accent)',
          letterSpacing: '-0.02em',
        }}
      >
        {count}{suffix}
      </div>
      <div
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 500,
          fontSize: '0.875rem',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: 'var(--fg-muted)',
          marginTop: '0.75rem',
        }}
      >
        {label}
      </div>
    </div>
  )
}

const stats: StatProps[] = [
  { value: 500, suffix: '+', label: 'Events Delivered' },
  { value: 100, suffix: '+', label: 'Corporate Clients' },
  { value: 50, suffix: '+', label: 'Concerts Produced' },
  { value: 10, suffix: '+', label: 'Years of Experience' },
]

export default function Stats() {
  return (
    <section
      style={{
        background: 'var(--bg)',
        padding: '5rem 0',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            gap: '1.25rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {stats.map(s => (
            <CountUp key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
