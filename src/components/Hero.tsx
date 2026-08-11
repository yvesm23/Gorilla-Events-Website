import img1 from "@/imports/PartnersLogo/c1a4e0a77a253101e64217c9dabf2481aa0cf8a3.png"
import img2 from "@/imports/PartnersLogo/61781d808e05b7b94bf42eaa2ad94f1004da97fc.png"
import img3 from "@/imports/PartnersLogo/52972e24dbe191ac06ebd1487b31f056ba5e58f1.png"
import img4 from "@/imports/PartnersLogo/418c531af02e0d5149d371b02fbbfacb878e4527.png"
import img5 from "@/imports/PartnersLogo/260041106d4edae081567dccb0a218c35469f4ef.png"
import img6 from "@/imports/PartnersLogo/286430a6b681dc1ade9c7bd3dc9631480b2a37f5.png"
import img7 from "@/imports/PartnersLogo/23f231c5d8677697b4e92b879cb8af383261ad4b.png"
import img8 from "@/imports/PartnersLogo/68cdf91d92791edc4415401211c9a48a425652ea.png"
import img9 from "@/imports/PartnersLogo/28dd8e327692ee2c9966606290fd7fd6c2be6044.png"
import img10 from "@/imports/PartnersLogo/de8437f5dc26f27bd82e428fd5060b7e5baeb037.png"
import img11 from "@/imports/PartnersLogo/24f493100fe35c44127eeba7c6124065f0aababa.png"
import img12 from "@/imports/PartnersLogo/47c345f4845972f2fddb44212611d1690a04b934.png"
import img13 from "@/imports/PartnersLogo/5abe87f535869a093206f4f957574080aad98ba4.png"
import img14 from "@/imports/PartnersLogo/90328cc8e775989010803da8d9e1c6966da94df8.png"

const partnerLogos = [
  { src: img1, alt: 'Partner 1' },
  { src: img2, alt: 'Partner 2' },
  { src: img3, alt: 'Partner 3' },
  { src: img4, alt: 'Partner 4' },
  { src: img5, alt: 'Partner 5' },
  { src: img6, alt: 'Partner 6' },
  { src: img7, alt: 'Partner 7' },
  { src: img8, alt: 'Partner 8' },
  { src: img9, alt: 'Partner 9' },
  { src: img10, alt: 'Partner 10' },
  { src: img11, alt: 'Partner 11' },
  { src: img12, alt: 'Partner 12' },
  { src: img13, alt: 'Partner 13' },
  { src: img14, alt: 'Partner 14' },
]

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'url(https://images.unsplash.com/photo-1501612780327-45045538702b?w=1920&h=1080&fit=crop&auto=format)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
      />

      {/* Gradient overlays */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, rgba(8,8,8,0.6) 0%, rgba(8,8,8,0.35) 40%, rgba(8,8,8,0.82) 85%, rgba(8,8,8,0.97) 100%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '35%',
          background:
            'linear-gradient(to top, rgba(245,158,11,0.06) 0%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Main content */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          maxWidth: 900,
          paddingTop: '100px',
          paddingBottom: '2rem',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Pre-badge — increased spacing */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            background: 'rgba(245,158,11,0.12)',
            border: '1px solid rgba(245,158,11,0.3)',
            borderRadius: 100,
            padding: '0.45rem 1.4rem',
            marginBottom: '2.25rem',
            animation: 'fadeUp 0.6s ease both',
            animationDelay: '0.1s',
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#f59e0b', display: 'block', flexShrink: 0 }} />
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: '0.78rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#f59e0b',
            }}
          >
            Rwanda's Premier Event Production Company
          </span>
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-up"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            lineHeight: 0.95,
            letterSpacing: '-0.01em',
            textTransform: 'uppercase',
            color: '#ffffff',
            margin: '0 0 1.5rem',
            animationDelay: '0.2s',
          }}
        >
          Elevating Events.{' '}
          <span className="gold-text" style={{ display: 'block' }}>
            Creating Unforgettable
          </span>
          Experiences.
        </h1>

        {/* Subheading */}
        <p
          className="animate-fade-up"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.72)',
            maxWidth: 680,
            margin: '0 auto 2.5rem',
            animationDelay: '0.35s',
          }}
        >
          World-class event production with professional sound, lighting, LED screens, staging, photography, videography, and technical support across Rwanda.
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-up"
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            animationDelay: '0.5s',
            marginBottom: '3rem',
          }}
        >
          <a
            href="#contact"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: '1.05rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              background: '#f59e0b',
              color: '#0c0c0c',
              borderRadius: 8,
              padding: '0.85rem 2rem',
              textDecoration: 'none',
              transition: 'background 0.2s, transform 0.15s, box-shadow 0.2s',
              display: 'inline-block',
              boxShadow: '0 4px 20px rgba(245,158,11,0.4)',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget
              el.style.background = '#fbbf24'
              el.style.transform = 'translateY(-2px)'
              el.style.boxShadow = '0 8px 30px rgba(245,158,11,0.5)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget
              el.style.background = '#f59e0b'
              el.style.transform = 'translateY(0)'
              el.style.boxShadow = '0 4px 20px rgba(245,158,11,0.4)'
            }}
          >
            Get a Quote
          </a>
          <a
            href="#portfolio"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: '1.05rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              background: 'rgba(255,255,255,0.08)',
              color: '#ffffff',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: 8,
              padding: '0.85rem 2rem',
              textDecoration: 'none',
              backdropFilter: 'blur(8px)',
              transition: 'background 0.2s, transform 0.15s',
              display: 'inline-block',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget
              el.style.background = 'rgba(255,255,255,0.15)'
              el.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget
              el.style.background = 'rgba(255,255,255,0.08)'
              el.style.transform = 'translateY(0)'
            }}
          >
            View Portfolio
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className="animate-scroll-bounce"
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}
        >
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
            }}
          >
            Scroll
          </span>
          <svg width="18" height="28" viewBox="0 0 18 28" fill="none">
            <rect x="1" y="1" width="16" height="26" rx="8" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5"/>
            <rect x="7.5" y="5" width="3" height="6" rx="1.5" fill="rgba(255,255,255,0.5)"/>
          </svg>
        </div>
      </div>

      {/* Partners Ticker — pinned to bottom of hero */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          paddingBottom: '3rem',
        }}
      >
        {/* Label */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '1.25rem',
          }}
        >
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: '0.72rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
            }}
          >
            Partners We Regularly Work With
          </span>
        </div>

        {/* Ticker track */}
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            width: '100%',
            /* Fade-blur mask on both edges */
            maskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '3rem',
              alignItems: 'center',
              width: 'max-content',
              animation: 'partnerScroll 32s linear infinite',
            }}
          >
            {/* Double the list for seamless loop */}
            {[...partnerLogos, ...partnerLogos].map((logo, i) => (
              <div
                key={i}
                style={{
                  flexShrink: 0,
                  height: 52,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{
                    height: '100%',
                    width: 'auto',
                    maxWidth: 140,
                    objectFit: 'contain',
                    filter: 'brightness(0) invert(1)',
                    opacity: 0.75,
                    transition: 'opacity 0.2s',
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.opacity = '1')}
                  onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.opacity = '0.75')}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes partnerScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
