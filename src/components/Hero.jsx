import { ArrowRight, Sparkles, Sprout, ShieldCheck, MapPin, Star } from 'lucide-react'
import { HERO_DATA, COMPANY_INFO } from '../data/companyData'

export default function Hero({ onOpenGetStarted }) {
  const handleScrollToServices = (e) => {
    e.preventDefault()
    const servicesSection = document.getElementById('services')
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero-section" id="home">
      <div className="glow-accent hero-glow-1"></div>
      <div className="glow-accent hero-glow-2"></div>

      <div className="container hero-container">
        <div className="hero-grid">
          {/* Left Column: Text & CTAs */}
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-pulse"></span>
              <Sprout size={15} className="badge-icon" />
              <span>{HERO_DATA.badge}</span>
            </div>

            <div className="company-tagline-kicker">
              <span className="location-flag">
                <MapPin size={14} />
                Rajahmundry, Andhra Pradesh
              </span>
              <span className="dot-divider">•</span>
              <span className="culinary-tagline">{COMPANY_INFO.tagline}</span>
            </div>

            <h1 className="hero-title">
              From the Fertile Soils of <span className="highlight-gold">Godavari</span> Directly to Your Table.
            </h1>

            <p className="hero-description">
              <strong>{COMPANY_INFO.name}</strong> bridges the rich agrarian bounty of Rajamahendravaram with contemporary culinary mastery. Sourced directly from local certified organic growers—harvested at dawn, free of cold-storage chemicals, and prepared with passionate perfection.
            </p>

            {/* CTAs */}
            <div className="hero-cta-group">
              <button
                type="button"
                className="btn btn-primary hero-btn-main"
                onClick={onOpenGetStarted}
                id="hero-get-started-cta"
              >
                <span>{HERO_DATA.primaryCta}</span>
                <ArrowRight size={18} />
              </button>

              <a
                href="#services"
                onClick={handleScrollToServices}
                className="btn btn-secondary hero-btn-secondary"
                id="hero-explore-services-cta"
              >
                <span>{HERO_DATA.secondaryCta}</span>
                <Sparkles size={16} />
              </a>
            </div>

            {/* Trust Metric Chips */}
            <div className="hero-metrics-strip">
              {HERO_DATA.highlights.map((item, idx) => (
                <div key={idx} className="metric-chip">
                  <span className="metric-val">{item.value}</span>
                  <span className="metric-lbl">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="hero-visual-wrapper">
            <div className="hero-card-frame">
              <img
                src="./images/hero.jpg"
                alt="Farm-to-Table Experience Bistro artisanal dining spread with freshly harvested organic produce"
                className="hero-main-img"
              />
              <div className="hero-img-gradient-overlay"></div>

              {/* Floating Badge 1: Fresh Harvest Stamp */}
              <div className="floating-badge badge-harvest">
                <div className="badge-icon-wrap">
                  <Sprout size={20} color="#52b788" />
                </div>
                <div className="badge-text-wrap">
                  <span className="floating-title">Harvested at Dawn</span>
                  <span className="floating-desc">Godavari Delta • 06:00 AM Today</span>
                </div>
              </div>

              {/* Floating Badge 2: Bistro Rating & Experience */}
              <div className="floating-badge badge-rating">
                <div className="stars-row">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#d4af37" color="#d4af37" />
                  ))}
                </div>
                <div className="rating-text">
                  <strong>4.9 / 5.0 Rating</strong>
                  <span>Award-winning Experience Bistro</span>
                </div>
              </div>

              {/* Floating Badge 3: Logo Emblem Watermark */}
              <div className="hero-logo-emblem">
                <img
                  src="./images/logo.png"
                  alt="Emblem"
                  className="emblem-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
