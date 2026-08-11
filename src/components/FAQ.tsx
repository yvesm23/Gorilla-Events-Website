import { useState } from 'react'

const faqs = [
  {
    q: 'How much does event production cost?',
    a: "Pricing depends on your event size, venue, equipment requirements, and production scope. We create customized quotations for every client. Contact us for a detailed, transparent proposal — we offer flexible packages to fit different budgets without compromising on quality.",
  },
  {
    q: 'How early should I book Gorilla Events?',
    a: 'We recommend booking at least 2–4 weeks in advance for standard events. Larger productions such as concerts, festivals, and major conferences should be booked 6–12 weeks ahead to ensure full equipment availability and sufficient preparation time.',
  },
  {
    q: 'Do you travel and operate outside Kigali?',
    a: "Absolutely. Gorilla Events provides event production services throughout Rwanda — including all provinces. We have the logistics and team capacity to serve clients anywhere in the country, from urban venues to remote locations.",
  },
  {
    q: 'Do you provide experienced technicians on-site?',
    a: 'Yes, every production includes our experienced technical staff. Our audio engineers, lighting operators, LED technicians, and stage managers are present throughout your event to ensure everything runs perfectly and any issues are resolved immediately.',
  },
  {
    q: 'Can you livestream or broadcast our event?',
    a: 'Yes. We offer professional multi-camera livestreaming, live video production, and broadcast services. Whether for social media streaming, corporate webcasts, or live television broadcasts, our team provides full technical coverage.',
  },
  {
    q: 'What types of events do you produce?',
    a: 'We produce concerts, music festivals, corporate conferences, product launches, gala dinners, weddings, church services, exhibitions, sports events, government functions, and more. Our equipment and team can scale to any event size or format.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faqs" className="section-pad" style={{ background: 'var(--bg)' }}>
      <div className="container" style={{ maxWidth: 840 }}>
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
            Common Questions
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
            Frequently Asked <span className="gold-text">Questions</span>
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.q}
              answer={faq.a}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div
      style={{
        borderRadius: 'var(--radius)',
        border: `1px solid ${isOpen ? 'var(--accent-border)' : 'var(--border)'}`,
        background: isOpen ? 'var(--bg-card)' : 'var(--bg-card)',
        overflow: 'hidden',
        transition: 'border-color 0.25s',
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          padding: '1.5rem',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          textAlign: 'left',
        }}
      >
        <span
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 600,
            fontSize: '1.15rem',
            letterSpacing: '0.02em',
            color: isOpen ? 'var(--accent)' : 'var(--fg)',
            transition: 'color 0.2s',
          }}
        >
          {question}
        </span>
        <span
          style={{
            width: 32,
            height: 32,
            borderRadius: 8,
            background: isOpen ? 'var(--accent)' : 'var(--bg-elevated)',
            border: `1px solid ${isOpen ? 'transparent' : 'var(--border)'}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'all 0.25s',
            color: isOpen ? '#0c0c0c' : 'var(--fg-muted)',
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            style={{ transform: isOpen ? 'rotate(45deg)' : 'none', transition: 'transform 0.25s' }}
          >
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
        </span>
      </button>

      <div
        style={{
          maxHeight: isOpen ? 400 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.35s ease',
        }}
      >
        <div
          style={{
            padding: '0 1.5rem 1.5rem',
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.95rem',
            lineHeight: 1.75,
            color: 'var(--fg-muted)',
          }}
        >
          {answer}
        </div>
      </div>
    </div>
  )
}
