import { useState } from 'react'
import { Clock3, Mail, MapPin, Phone } from 'lucide-react'

const formEndpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT as string | undefined
const contactEmail = (import.meta.env.VITE_CONTACT_EMAIL as string | undefined) || 'info@gorillaevents.co.rw'

type FormState = {
  firstName: string
  lastName: string
  email: string
  phone: string
  eventType: string
  eventDate: string
  venue: string
  guests: string
  message: string
}

const defaultForm: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  eventType: '',
  eventDate: '',
  venue: '',
  guests: '',
  message: '',
}

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

export function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor">
      <path d="M14.5 8.5h2.2V5.2h-2.6c-3.1 0-4.6 1.9-4.6 4.6v2.2H7.5v3.3h2.1V22h3.7v-6.7h2.8l.5-3.3h-3.3V9.9c0-.8.5-1.4 1.2-1.4Z" />
    </svg>
  )
}

export function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor">
      <path d="M21.6 7.2c-.2-.9-.9-1.6-1.8-1.8C17.9 5 12 5 12 5s-5.9 0-7.8.4C3.3 5.6 2.6 6.3 2.4 7.2 2 9.1 2 12 2 12s0 2.9.4 4.8c.2.9.9 1.6 1.8 1.8C6.1 19 12 19 12 19s5.9 0 7.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.9.4-4.8.4-4.8s0-2.9-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
    </svg>
  )
}

export function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor">
      <path d="M6.9 8.6A1.9 1.9 0 1 1 6.9 4.8a1.9 1.9 0 0 1 0 3.8ZM5.2 9.8h3.4V19H5.2V9.8Zm5.6 0h3.3v1.3h.1c.5-.9 1.7-1.9 3.4-1.9 3.7 0 4.4 2.4 4.4 5.6V19h-3.4v-17.7c0-1.3-.1-2.9-1.8-2.9-1.8 0-2.1 1.4-2.1 2.8V19h-3.4V9.8Z" />
    </svg>
  )
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(defaultForm)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [feedback, setFeedback] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setFeedback('')

    const subject = `Quote Request: ${form.eventType || 'Event Enquiry'}`
    const body = [
      'New quote request from Gorilla Events website.',
      '',
      `First Name: ${form.firstName}`,
      `Last Name: ${form.lastName}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || 'Not provided'}`,
      `Event Type: ${form.eventType || 'Not specified'}`,
      `Event Date: ${form.eventDate || 'Not specified'}`,
      `Venue / Location: ${form.venue || 'Not specified'}`,
      `Estimated Guests: ${form.guests || 'Not specified'}`,
      '',
      'Message:',
      form.message || 'No additional message provided.',
    ].join('\n')

    try {
      if (formEndpoint) {
        const response = await fetch(formEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            phone: form.phone,
            eventType: form.eventType,
            eventDate: form.eventDate,
            venue: form.venue,
            guests: form.guests,
            message: form.message,
            _subject: subject,
          }),
        })

        if (!response.ok) {
          throw new Error('We could not submit your request right now.')
        }
      } else {
        window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      }

      setForm(defaultForm)
      setStatus('success')
    } catch (error) {
      setStatus('error')
      setFeedback(error instanceof Error ? error.message : 'We could not submit your request right now. Please try again later.')
    }
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
                icon={<Phone size={20} />}
                label="Phone"
                value="+250 788 423 390"
                href="tel:+250 788 423 390"
              />
              <ContactItem
                icon={<Mail size={20} />}
                label="Email"
                value="info@gorillaevents.co.rw"
                href="mailto:info@gorillaevents.co.rw"
              />
              <ContactItem
                icon={<MapPin size={20} />}
                label="Office Location"
                value="KG 7 Ave, Kigali, Rwanda"
              />
              <ContactItem
                icon={<Clock3 size={20} />}
                label="Business Hours"
                value="Mon – Sat: 8:00 AM – 7:00 PM"
              />
            </div>

            {/* Map */}
            <div
              style={{
                marginTop: '2.5rem',
                borderRadius: 'var(--radius)',
                overflow: 'hidden',
                height: 220,
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border)',
                boxShadow: '0 18px 38px rgba(0, 0, 0, 0.12)',
              }}
            >
              <iframe
                title="Gorilla Events location in Kigali"
                src="https://www.google.com/maps?q=KG%207%20Ave,%20Kigali,%20Rwanda&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
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
                  { name: 'Facebook', href: 'https://www.facebook.com/share/1HYCKsFxcA/?mibextid=wwXIfr', icon: <FacebookIcon /> },
                  { name: 'Instagram', href: 'https://www.instagram.com/gorilla_events_ltd?igsh=MWg1cjZ4NTMxb2k0aw==', icon: <InstagramIcon /> },
                  { name: 'YouTube', href: 'http://www.youtube.com/@gorillaeventsltd4761', icon: <YouTubeIcon /> },
                  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/jean-de-dieu-nsengimana-0b2036379?utm_source=share_via&utm_content=profile&utm_medium=member_ios', icon: <LinkedInIcon /> },
                ].map(s => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
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
            {status === 'success' ? (
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
                {status === 'error' && (
                  <div
                    role="alert"
                    style={{
                      marginBottom: '1rem',
                      padding: '0.9rem 1rem',
                      borderRadius: 8,
                      background: 'rgba(239, 68, 68, 0.12)',
                      border: '1px solid rgba(239, 68, 68, 0.25)',
                      color: 'var(--fg)',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.9rem',
                    }}
                  >
                    {feedback}
                  </div>
                )}
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
                  disabled={status === 'submitting'}
                  style={{
                    width: '100%',
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: '1.05rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    background: status === 'submitting' ? 'rgba(245, 158, 11, 0.65)' : 'var(--accent)',
                    color: '#0c0c0c',
                    border: 'none',
                    borderRadius: 8,
                    padding: '0.95rem',
                    cursor: status === 'submitting' ? 'wait' : 'pointer',
                    transition: 'background 0.2s, transform 0.15s',
                    opacity: status === 'submitting' ? 0.9 : 1,
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
                  {status === 'submitting' ? 'Sending...' : 'Request a Quote'}
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