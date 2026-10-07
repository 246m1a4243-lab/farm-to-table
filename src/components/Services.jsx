import { useState } from 'react'
import {
  Utensils, Sparkles, Leaf, ChefHat, Users, TrendingUp,
  ChevronDown, ChevronUp, CheckCircle2
} from 'lucide-react'
import { SERVICES_DATA } from '../data/companyData'

const iconMap = {
  Utensils,
  Sparkles,
  Leaf,
  ChefHat,
  Users,
  TrendingUp,
}

export default function Services() {
  const [expandedId, setExpandedId] = useState(null)

  const toggleExpand = (id) => {
    setExpandedId(prev => (prev === id ? null : id))
  }

  return (
    <section className="section services-section" id="services">
      <div className="glow-accent services-glow-1" />
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <Sparkles size={14} />
            Our Services
          </span>
          <h2 className="section-title">
            Extraordinary Experiences. <span className="highlight-gold">One Source.</span>
          </h2>
          <p className="section-subtitle">
            From intimate bistro dining to grand wedding feasts, weekly organic farm boxes to corporate wellness — every offering is rooted in the same uncompromising philosophy: pure, chemical-free, Godavari-grown goodness.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {SERVICES_DATA.map((service) => {
            const Icon = iconMap[service.icon] || Utensils
            const isExpanded = expandedId === service.id

            return (
              <div
                key={service.id}
                className={`glass-card service-card ${isExpanded ? 'service-card--expanded' : ''}`}
              >
                {/* Card Header */}
                <div className="service-card-header">
                  <div className="service-icon-wrap">
                    <Icon size={24} />
                  </div>
                  <div className="service-meta">
                    <span className="service-category">{service.category}</span>
                    <h3 className="service-name">{service.name}</h3>
                    <span className="service-tagline">{service.tagline}</span>
                  </div>
                </div>

                {/* Short Description */}
                <p className="service-description">{service.shortDescription}</p>

                {/* Benefits */}
                <ul className="service-benefits">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="service-benefit-item">
                      <CheckCircle2 size={15} className="benefit-check" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Expandable Full Details */}
                {isExpanded && (
                  <div className="service-full-details">
                    <p>{service.fullDetails}</p>
                  </div>
                )}

                {/* Toggle Button */}
                <button
                  type="button"
                  className="service-expand-btn"
                  onClick={() => toggleExpand(service.id)}
                  id={`service-expand-${service.id}`}
                >
                  {isExpanded ? (
                    <>
                      <span>Show Less</span>
                      <ChevronUp size={16} />
                    </>
                  ) : (
                    <>
                      <span>Learn More</span>
                      <ChevronDown size={16} />
                    </>
                  )}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
