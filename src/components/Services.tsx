import { AudioLines, Lightbulb, MonitorPlay, PanelsTopLeft, Camera, ClipboardList } from 'lucide-react'
import SectionHeading from '../components/SectiononHeading'
import ServiceCard from '../components/ServiceCard'

const services = [
  {
    icon: <AudioLines size={24} />,
    title: 'Professional Sound Systems',
    description:
      'Crystal-clear audio solutions engineered for concerts, conferences, weddings, festivals, churches, and large-scale corporate events.',
    tags: ['Line Arrays', 'Subwoofers', 'Monitors', 'PA Systems'],
  },
  {
    icon: <Lightbulb size={24} />,
    title: 'Lighting Production',
    description:
      'Intelligent moving heads, atmospheric effects, custom lighting design, and full stage lighting environments that transform any venue.',
    tags: ['Moving Heads', 'Stage Effects', 'Atmospheric', 'LED Par'],
  },
  {
    icon: <MonitorPlay size={24} />,
    title: 'LED Screens & Displays',
    description:
      'High-resolution indoor and outdoor LED panels for concerts, exhibitions, corporate presentations, and live broadcasts.',
    tags: ['Indoor LED', 'Outdoor LED', 'Videowall', 'Live Broadcast'],
  },
  {
    icon: <PanelsTopLeft size={24} />,
    title: 'Stage & Truss Systems',
    description:
      'Custom-engineered stage platforms, roof structures, trusses, backdrops, and rigging designed for safety, flexibility, and visual impact.',
    tags: ['Stage Platforms', 'Roof Structures', 'Trusses', 'Rigging'],
  },
  {
    icon: <Camera size={24} />,
    title: 'Photography & Videography',
    description:
      'Capturing every significant moment — from cinematic highlight reels to drone coverage, weddings to concerts and corporate milestones.',
    tags: ['Drone Coverage', 'Highlight Videos', 'Event Coverage', 'Livestreaming'],
  },
  {
    icon: <ClipboardList size={24} />,
    title: 'Event Management',
    description:
      'End-to-end event planning and execution: coordination, technical direction, vendor management, and dedicated on-site production support.',
    tags: ['Full Planning', 'Coordination', 'Tech Direction', 'On-site Support'],
  },
]

export default function Services() {
  return (
    <section id="services" className="content-section" style={{ padding: '7rem 0' }}>
      <div className="container">
        <SectionHeading
          eyebrow="What We Do"
          title="Everything You Need for a Successful Event"
          description="From planning to production, Gorilla Events provides complete technical and creative solutions for events of every scale."
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '1rem',
            marginTop: '2rem',
          }}
        >
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

