import Logo from './Logo'
import { FacebookIcon, InstagramIcon, YouTubeIcon, LinkedInIcon } from './Contact'

interface FooterProps {
  darkMode: boolean
}

const quickLinks = ['Home', 'Services', 'Portfolio', 'About', 'Process', 'Contact']
const services = ['Sound Systems', 'Lighting', 'LED Screens', 'Staging', 'Photography', 'Videography', 'Event Management']
const socials = [
  { name: 'Facebook', href: 'https://www.facebook.com/share/1HYCKsFxcA/?mibextid=wwXIfr', icon: <FacebookIcon /> },
                  { name: 'Instagram', href: 'https://www.instagram.com/gorilla_events_ltd?igsh=MWg1cjZ4NTMxb2k0aw==', icon: <InstagramIcon /> },
                  { name: 'YouTube', href: 'http://www.youtube.com/@gorillaeventsltd4761', icon: <YouTubeIcon /> },
                  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/jean-de-dieu-nsengimana-0b2036379?utm_source=share_via&utm_content=profile&utm_medium=member_ios', icon: <LinkedInIcon /> },
]

export default function Footer({ darkMode }: FooterProps) {
  return (
    <footer style={{ background: '#080808', borderTop: '1px solid rgba(255,255,255,0.06)', color: '#ffffff' }}>
      <div className="container" style={{ padding: '5rem 1.5rem 2.5rem' }}>
        {/* Top grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem',
          }}
        >
          {/* Brand column */}
          <div style={{ maxWidth: 300 }}>
            <Logo darkMode compact />
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                lineHeight: 1.7,
                color: 'rgba(255,255,255,0.45)',
                margin: '1.25rem 0 1.5rem',
              }}
            >
              Your Vision. Our Production. Professional event production services across Rwanda — from intimate gatherings to large-scale concerts.
            </p>
            {/* Social icons */}
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              {socials.map(s => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    color: 'rgba(255,255,255,0.45)',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget
                    el.style.background = 'rgba(245,158,11,0.15)'
                    el.style.color = '#f59e0b'
                    el.style.borderColor = 'rgba(245,158,11,0.3)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget
                    el.style.background = 'rgba(255,255,255,0.06)'
                    el.style.color = 'rgba(255,255,255,0.45)'
                    el.style.borderColor = 'rgba(255,255,255,0.08)'
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#ffffff',
                margin: '0 0 1.25rem',
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {quickLinks.map(link => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.875rem',
                      color: 'rgba(255,255,255,0.45)',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => ((e.target as HTMLElement).style.color = '#f59e0b')}
                    onMouseLeave={e => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.45)')}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#ffffff',
                margin: '0 0 1.25rem',
              }}
            >
              Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {services.map(s => (
                <li key={s}>
                  <a
                    href="#services"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.875rem',
                      color: 'rgba(255,255,255,0.45)',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => ((e.target as HTMLElement).style.color = '#f59e0b')}
                    onMouseLeave={e => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.45)')}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#ffffff',
                margin: '0 0 1.25rem',
              }}
            >
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { label: 'Phone', value: '+250 788 423 390' },
                { label: 'Email', value: 'info@gorillaevents.co.rw' },
                { label: 'Address', value: 'KG 7 Ave, Kigali, Rwanda' },
              ].map(c => (
                <div key={c.label}>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      fontSize: '0.7rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: '#f59e0b',
                      marginBottom: '0.2rem',
                    }}
                  >
                    {c.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.875rem',
                      color: 'rgba(255,255,255,0.6)',
                    }}
                  >
                    {c.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.8rem',
              color: 'rgba(255,255,255,0.3)',
              margin: 0,
            }}
          >
            © {new Date().getFullYear()} Gorilla Events Limited. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.8rem',
              color: 'rgba(255,255,255,0.3)',
              margin: 0,
            }}
          >
            Your Vision. Our Production.
          </p>
        </div>
      </div>
    </footer>
  )
}
