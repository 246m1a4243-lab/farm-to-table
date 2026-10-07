import {
  Compass, Layers, Users, CheckCircle2
} from 'lucide-react'
import { HOW_IT_WORKS_STEPS } from '../data/companyData'

const iconMap = {
  Compass,
  Layers,
  Users,
  CheckCircle2,
}

export default function HowItWorks() {
  return (
    <section className="section hiw-section" id="how-it-works">
      <div className="glow-accent hiw-glow-1" />
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <Compass size={14} />
            How It Works
          </span>
          <h2 className="section-title">
            Your Journey to <span className="highlight-gold">Pure Gastronomy</span>
          </h2>
          <p className="section-subtitle">
            From first discovery to extraordinary dining — our seamless four-step process ensures every detail is handled with precision and passion.
          </p>
        </div>

        {/* Steps */}
        <div className="hiw-steps-container">
          {HOW_IT_WORKS_STEPS.map((step, idx) => {
            const Icon = iconMap[step.icon] || Compass
            const isLast = idx === HOW_IT_WORKS_STEPS.length - 1
            return (
              <div key={step.step} className="hiw-step-row">
                {/* Step Visual Column */}
                <div className="hiw-step-visual">
                  <div className="hiw-step-number-wrap">
                    <span className="hiw-step-number">{step.step}</span>
                  </div>
                  {!isLast && <div className="hiw-step-connector" />}
                </div>

                {/* Step Content */}
                <div className="glass-card hiw-step-card">
                  <div className="hiw-step-icon-wrap">
                    <Icon size={22} />
                  </div>
                  <div className="hiw-step-body">
                    <span className="hiw-step-subtitle">{step.subtitle}</span>
                    <h3 className="hiw-step-title">{step.title}</h3>
                    <p className="hiw-step-description">{step.description}</p>
                    <div className="hiw-step-details">
                      <span className="hiw-details-bullet">→</span>
                      <span>{step.details}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
