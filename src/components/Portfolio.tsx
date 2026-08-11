import { useState } from 'react'

const categories = ['All', 'Concerts', 'Corporate', 'Weddings', 'Conferences', 'Festivals']

const items = [
  {
    category: 'Concerts',
    title: 'Arena Concert Production',
    subtitle: 'Kigali Arena — 2024',
    image: 'https://images.unsplash.com/photo-1501612780327-45045538702b?w=800&h=600&fit=crop&auto=format',
    size: 'large',
  },
  {
    category: 'Corporate',
    title: 'Tech Summit Rwanda',
    subtitle: 'Radisson Blu — 2024',
    image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=600&h=400&fit=crop&auto=format',
    size: 'small',
  },
  {
    category: 'Concerts',
    title: 'Festival Lighting Design',
    subtitle: 'Nyarutarama — 2023',
    image: 'https://images.unsplash.com/photo-1583795484071-3c453e3a7c71?w=600&h=400&fit=crop&auto=format',
    size: 'small',
  },
  {
    category: 'Conferences',
    title: 'East Africa Business Forum',
    subtitle: 'Convention Centre — 2024',
    image: 'https://images.unsplash.com/photo-1558008258-3256797b43f3?w=800&h=500&fit=crop&auto=format',
    size: 'medium',
  },
  {
    category: 'Weddings',
    title: 'Grand Wedding Production',
    subtitle: 'Serena Hotel — 2024',
    image: 'https://images.unsplash.com/photo-1653821355736-0c2598d0a63e?w=600&h=400&fit=crop&auto=format',
    size: 'small',
  },
  {
    category: 'Festivals',
    title: 'Kigali Music Festival',
    subtitle: 'Amahoro Stadium — 2023',
    image: 'https://images.unsplash.com/photo-1515175192010-cf3250992719?w=800&h=600&fit=crop&auto=format',
    size: 'large',
  },
  {
    category: 'Corporate',
    title: 'Product Launch Event',
    subtitle: 'Conference Centre — 2024',
    image: 'https://images.unsplash.com/photo-1558620013-a08999547a36?w=600&h=400&fit=crop&auto=format',
    size: 'small',
  },
  {
    category: 'Concerts',
    title: 'Outdoor Stage Setup',
    subtitle: 'Gikondo — 2023',
    image: 'https://images.unsplash.com/photo-1670028514318-0ac718c0590d?w=600&h=500&fit=crop&auto=format',
    size: 'medium',
  },
  {
    category: 'Weddings',
    title: 'Luxury Wedding Lighting',
    subtitle: 'Kigali Heights — 2024',
    image: 'https://images.unsplash.com/photo-1563841930606-67e2bce48b78?w=600&h=400&fit=crop&auto=format',
    size: 'small',
  },
]

export default function Portfolio() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? items : items.filter(i => i.category === active)

  return (
    <section id="portfolio" className="section-pad" style={{ background: 'var(--bg)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
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
            Our Work
          </div>
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(2.2rem, 4vw, 3.6rem)',
              lineHeight: 1.0,
              textTransform: 'uppercase',
              color: 'var(--fg)',
              margin: '0 0 1rem',
            }}
          >
            Our Work{' '}
            <span className="gold-text">Speaks for Itself</span>
          </h2>
        </div>

        {/* Filters */}
        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '2.5rem',
          }}
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 600,
                fontSize: '0.9rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '0.5rem 1.25rem',
                borderRadius: 100,
                border: `1px solid ${active === cat ? 'var(--accent)' : 'var(--border)'}`,
                background: active === cat ? 'var(--accent)' : 'transparent',
                color: active === cat ? '#0c0c0c' : 'var(--fg-muted)',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1rem',
            gridAutoRows: 'auto',
          }}
        >
          {filtered.map((item, i) => (
            <PortfolioCard key={`${item.title}-${i}`} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface PortfolioCardProps {
  category: string
  title: string
  subtitle: string
  image: string
  size: string
}

function PortfolioCard({ category, title, subtitle, image, size }: PortfolioCardProps) {
  const [hovered, setHovered] = useState(false)

  const aspectMap: Record<string, string> = {
    large: '16 / 10',
    medium: '4 / 3',
    small: '4 / 3',
  }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 'var(--radius)',
        overflow: 'hidden',
        aspectRatio: aspectMap[size] || '4/3',
        position: 'relative',
        background: '#1a1a1a',
        cursor: 'pointer',
        gridColumn: size === 'large' ? 'span 2' : 'span 1',
      }}
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        decoding="async"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          transition: 'transform 0.5s ease',
          transform: hovered ? 'scale(1.06)' : 'scale(1)',
        }}
      />

      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: hovered
            ? 'linear-gradient(to top, rgba(8,8,8,0.9) 0%, rgba(8,8,8,0.4) 60%, rgba(8,8,8,0.1) 100%)'
            : 'linear-gradient(to top, rgba(8,8,8,0.7) 0%, transparent 60%)',
          transition: 'background 0.3s',
        }}
      />

      {/* Category badge */}
      <div
        style={{
          position: 'absolute',
          top: '1rem',
          left: '1rem',
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
          fontSize: '0.7rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          background: 'var(--accent)',
          color: '#0c0c0c',
          borderRadius: 100,
          padding: '0.25rem 0.75rem',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateY(0)' : 'translateY(-4px)',
          transition: 'opacity 0.25s, transform 0.25s',
        }}
      >
        {category}
      </div>

      {/* Info */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '1.5rem',
          transform: hovered ? 'translateY(0)' : 'translateY(4px)',
          transition: 'transform 0.3s',
        }}
      >
        <h3
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: '1.25rem',
            letterSpacing: '0.03em',
            textTransform: 'uppercase',
            color: '#ffffff',
            margin: '0 0 0.25rem',
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.8rem',
            color: 'rgba(255,255,255,0.6)',
            margin: 0,
          }}
        >
          {subtitle}
        </p>
      </div>
    </div>
  )
}
