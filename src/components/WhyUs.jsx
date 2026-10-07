import {
  Award, Clock, BadgePercent, HeartHandshake, ShieldCheck, MapPin, Zap, Star
} from 'lucide-react'
import { WHY_CHOOSE_US_PILLARS, STATISTICS_DATA, TESTIMONIALS_DATA } from '../data/companyData'

const iconMap = {
  Award,
  Clock,
  BadgePercent,
  HeartHandshake,
  ShieldCheck,
  MapPin,
  Zap,
}

export default function WhyUs() {
  return (
    <section className="section whyus-section" id="why-us">
      <div className="glow-accent whyus-glow-1" />
      <div className="glow-accent whyus-glow-2" />
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <Award size={14} />
            Why Choose Us
          </span>
          <h2 className="section-title">
            The <span className="highlight-gold">Farm-to-Table</span> Difference
          </h2>
          <p className="section-subtitle">
            In a world of mass-produced food and faceless supply chains, we stand apart — with radical transparency, grower equity, and unmatched culinary integrity baked into every decision we make.
          </p>
        </div>

        {/* Stats Strip */}
        <div className="whyus-stats-strip">
          {STATISTICS_DATA.map((stat, idx) => (
            <div key={idx} className="whyus-stat-item">
              <span className="whyus-stat-value">
                {stat.value}
                {stat.suffix && <span className="stat-suffix">{stat.suffix}</span>}
              </span>
              <span className="whyus-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Pillars Grid */}
        <div className="whyus-pillars-grid">
          {WHY_CHOOSE_US_PILLARS.map((pillar) => {
            const Icon = iconMap[pillar.icon] || Award
            return (
              <div key={pillar.id} className="glass-card whyus-pillar-card">
                <div className="whyus-pillar-top">
                  <div className="whyus-pillar-icon-wrap">
                    <Icon size={20} />
                  </div>
                  <span className="whyus-pillar-badge">{pillar.badge}</span>
                </div>
                <h3 className="whyus-pillar-title">{pillar.title}</h3>
                <span className="whyus-pillar-headline">{pillar.headline}</span>
                <p className="whyus-pillar-desc">{pillar.description}</p>
              </div>
            )
          })}
        </div>

        {/* Testimonials */}
        <div className="whyus-testimonials-header">
          <h3>Voices from Our Community</h3>
          <p>Real stories from the people who trust us</p>
        </div>
        <div className="whyus-testimonials-grid">
          {TESTIMONIALS_DATA.map((testimonial) => (
            <div key={testimonial.id} className="glass-card testimonial-card">
              {/* Stars */}
              <div className="testimonial-stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="#d4af37" color="#d4af37" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="testimonial-quote">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <strong className="testimonial-name">{testimonial.name}</strong>
                  <span className="testimonial-role">{testimonial.role}</span>
                </div>
                <span className="testimonial-tag">{testimonial.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
