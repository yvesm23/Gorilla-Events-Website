import { useState } from 'react'

const eventTypes = [
  'Concert / Music Festival',
  'Corporate Conference',
  'Wedding',
  'Product Launch',
  'Gala Dinner',
  'Church / Religious Event',
  'Sports Event',
  'Exhibition',
  'Other',
]

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    venue: '',
    guests: '',
    message: '',
  })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="section-pad" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}>
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
            Get In Touch
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
            Let's Plan Your <span className="gold-text">Next Event</span>
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
          }}
        >
          {/* Contact info */}
          <div>
            <h3
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: '1.4rem',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: 'var(--fg)',
                margin: '0 0 2rem',
              }}
            >
              Contact Information
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <ContactItem
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.45 2 2 0 0 1 3.61 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 8.29 8.29l1.16-.97a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                }
                label="Phone"
                value="+250 780 000 000"
                href="tel:+250780000000"
              />
              <ContactItem
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                }
                label="Email"
                value="info@gorillaevents.rw"
                href="mailto:info@gorillaevents.rw"
              />
              <ContactItem
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                }
                label="Office Location"
                value="KG 7 Ave, Kigali, Rwanda"
              />
              <ContactItem
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                }
                label="Business Hours"
                value="Mon – Sat: 8:00 AM – 7:00 PM"
              />
            </div>

            {/* Map placeholder */}
            <div
              style={{
                marginTop: '2.5rem',
                borderRadius: 'var(--radius)',
                overflow: 'hidden',
                height: 200,
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '0.5rem',
                color: 'var(--fg-muted)',
              }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem' }}>
                Kigali, Rwanda
              </span>
            </div>

            {/* Social links */}
            <div style={{ marginTop: '2rem' }}>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.78rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--fg-muted)',
                  marginBottom: '1rem',
                }}
              >
                Follow Us
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {[
                  { name: 'Facebook', href: '#', icon: 'f' },
                  { name: 'Instagram', href: '#', icon: '◉' },
                  { name: 'YouTube', href: '#', icon: '▶' },
                  { name: 'LinkedIn', href: '#', icon: 'in' },
                ].map(s => (
                  <a
                    key={s.name}
                    href={s.href}
                    aria-label={s.name}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      color: 'var(--fg-muted)',
                      textDecoration: 'none',
                      transition: 'background 0.2s, color 0.2s, border-color 0.2s',
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget
                      el.style.background = 'var(--accent-dim)'
                      el.style.color = 'var(--accent)'
                      el.style.borderColor = 'var(--accent-border)'
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget
                      el.style.background = 'var(--bg-elevated)'
                      el.style.color = 'var(--fg-muted)'
                      el.style.borderColor = 'var(--border)'
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            {sent ? (
              <div
                style={{
                  borderRadius: 'var(--radius)',
                  padding: '3rem',
                  background: 'var(--accent-dim)',
                  border: '1px solid var(--accent-border)',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: '1.6rem',
                    color: 'var(--accent)',
                    textTransform: 'uppercase',
                    margin: '0 0 0.75rem',
                  }}
                >
                  Message Sent!
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", color: 'var(--fg-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Thank you for reaching out. Our team will review your request and get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1rem',
                    marginBottom: '1rem',
                  }}
                >
                  <FormField label="First Name" name="firstName" value={form.firstName} onChange={handleChange} required />
                  <FormField label="Last Name" name="lastName" value={form.lastName} onChange={handleChange} required />
                </div>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1rem',
                    marginBottom: '1rem',
                  }}
                >
                  <FormField label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} required />
                  <FormField label="Phone Number" name="phone" type="tel" value={form.phone} onChange={handleChange} />
                </div>

                {/* Event Type */}
                <div style={{ marginBottom: '1rem' }}>
                  <label style={labelStyle}>Event Type</label>
                  <select
                    name="eventType"
                    value={form.eventType}
                    onChange={handleChange}
                    style={inputStyle}
                  >
                    <option value="">Select event type</option>
                    {eventTypes.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1rem',
                    marginBottom: '1rem',
                  }}
                >
                  <FormField label="Event Date" name="eventDate" type="date" value={form.eventDate} onChange={handleChange} />
                  <FormField label="Estimated Guests" name="guests" type="number" value={form.guests} onChange={handleChange} placeholder="e.g. 300" />
                </div>

                <FormField label="Venue / Location" name="venue" value={form.venue} onChange={handleChange} placeholder="Where is your event?" style={{ marginBottom: '1rem' }} />

                {/* Message */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={labelStyle}>Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your event and any specific requirements..."
                    style={{ ...inputStyle, resize: 'vertical', minHeight: 100 }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: '1.05rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    background: 'var(--accent)',
                    color: '#0c0c0c',
                    border: 'none',
                    borderRadius: 8,
                    padding: '0.95rem',
                    cursor: 'pointer',
                    transition: 'background 0.2s, transform 0.15s',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget
                    el.style.background = 'var(--accent-hover)'
                    el.style.transform = 'translateY(-1px)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget
                    el.style.background = 'var(--accent)'
                    el.style.transform = 'translateY(0)'
                  }}
                >
                  Request a Quote
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: "'Inter', sans-serif",
  fontWeight: 500,
  fontSize: '0.8rem',
  letterSpacing: '0.04em',
  color: 'var(--fg-muted)',
  marginBottom: '0.5rem',
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.75rem 1rem',
  borderRadius: 8,
  border: '1px solid var(--border)',
  background: 'var(--bg)',
  color: 'var(--fg)',
  fontFamily: "'Inter', sans-serif",
  fontSize: '0.9rem',
  outline: 'none',
  transition: 'border-color 0.2s',
  boxSizing: 'border-box',
}

interface FormFieldProps {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  required?: boolean
  placeholder?: string
  style?: React.CSSProperties
}

function FormField({ label, name, value, onChange, type = 'text', required, placeholder, style }: FormFieldProps) {
  const [focused, setFocused] = useState(false)
  return (
    <div style={style}>
      <label style={labelStyle}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          ...inputStyle,
          borderColor: focused ? 'var(--accent)' : 'var(--border)',
          boxShadow: focused ? '0 0 0 3px var(--accent-dim)' : 'none',
        }}
      />
    </div>
  )
}

interface ContactItemProps {
  icon: React.ReactNode
  label: string
  value: string
  href?: string
}

function ContactItem({ icon, label, value, href }: ContactItemProps) {
  const content = (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
      <div
        style={{
          width: 42,
          height: 42,
          borderRadius: 10,
          background: 'var(--accent-dim)',
          border: '1px solid var(--accent-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--accent)',
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div>
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
            fontSize: '0.75rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--fg-subtle)',
            marginBottom: '0.2rem',
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.95rem',
            fontWeight: 500,
            color: 'var(--fg)',
          }}
        >
          {value}
        </div>
      </div>
    </div>
  )

  if (href) {
    return (
      <a href={href} style={{ textDecoration: 'none', display: 'block' }}>
        {content}
      </a>
    )
  }
  return content
}
