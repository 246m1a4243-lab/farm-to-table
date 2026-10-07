import { ShieldCheck, HeartHandshake, Sprout, Utensils } from 'lucide-react'
import { ABOUT_DATA } from '../data/companyData'

const iconMap = {
  ShieldCheck,
  HeartHandshake,
  Sprout,
  Utensils,
}

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="glow-accent about-glow-1" />
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <Sprout size={14} />
            {ABOUT_DATA.badge}
          </span>
          <h2 className="section-title">{ABOUT_DATA.title}</h2>
          <p className="section-subtitle">{ABOUT_DATA.whoWeAre.description}</p>
        </div>

        {/* Mission & Vision Row */}
        <div className="about-mv-grid">
          <div className="glass-card about-mv-card">
            <div className="about-mv-icon">🌱</div>
            <h3>{ABOUT_DATA.mission.title}</h3>
            <p>{ABOUT_DATA.mission.description}</p>
          </div>
          <div className="glass-card about-mv-card about-mv-card--accent">
            <div className="about-mv-icon">🔭</div>
            <h3>{ABOUT_DATA.vision.title}</h3>
            <p>{ABOUT_DATA.vision.description}</p>
          </div>
        </div>

        {/* Problem We Solve */}
        <div className="about-problem-block glass-card">
          <div className="about-problem-label">The Problem We Solve</div>
          <p>{ABOUT_DATA.problemWeSolve.description}</p>
        </div>

        {/* Values Grid */}
        <div className="about-values-header">
          <h3>Our Core Values</h3>
        </div>
        <div className="about-values-grid">
          {ABOUT_DATA.values.map((val, idx) => {
            const Icon = iconMap[val.icon] || ShieldCheck
            return (
              <div key={idx} className="glass-card about-value-card">
                <div className="about-value-icon-wrap">
                  <Icon size={22} className="about-value-icon" />
                </div>
                <h4>{val.title}</h4>
                <p>{val.description}</p>
              </div>
            )
          })}
        </div>

        {/* What Makes Us Different */}
        <div className="about-difference-section">
          <h3 className="about-difference-title">What Makes Us Different</h3>
          <div className="about-difference-grid">
            {ABOUT_DATA.differencePillars.map((pillar, idx) => (
              <div key={idx} className="about-diff-item">
                <div className="about-diff-dot" />
                <div>
                  <span className="about-diff-label">{pillar.label}</span>
                  <p className="about-diff-text">{pillar.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
