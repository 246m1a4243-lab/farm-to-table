import { MapPin, Phone, Mail, Share2, Link2, Globe, MessageCircle, Sprout, ArrowRight } from 'lucide-react'
import { COMPANY_INFO } from '../data/companyData'

export default function Footer({ onOpenGetStarted }) {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ]

  const services = [
    'Farm-to-Table Bistro Dining',
    'Event & Wedding Catering',
    'Artisan Farm Box Subscriptions',
    'Chef\'s Table Masterclasses',
    'Corporate Meal Programs',
    'Agri-Traceability Supply',
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      {/* Footer Top */}
      <div className="container footer-grid">
        {/* Brand Column */}
        <div className="footer-brand-col">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="footer-brand-link">
            <img src="/images/logo.png" alt="Farm-to-Table Bistro Logo" className="footer-logo" />
            <div>
              <span className="footer-brand-name">Farm-to-Table</span>
              <span className="footer-brand-sub">EXPERIENCE BISTRO</span>
            </div>
          </a>
          <p className="footer-brand-desc">
            Bridging the rich organic bounty of the Godavari Delta with contemporary culinary artistry. Rooted in Rajahmundry, AP.
          </p>
          <div className="footer-socials">
            <a href={COMPANY_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social-btn">
              <Share2 size={17} />
            </a>
            <a href={COMPANY_INFO.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer-social-btn">
              <Globe size={17} />
            </a>
            <a href={COMPANY_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-social-btn">
              <Link2 size={17} />
            </a>
            <a href={COMPANY_INFO.socials.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="footer-social-btn footer-social-btn--wa">
              <MessageCircle size={17} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4 className="footer-col-title">Quick Links</h4>
          <ul className="footer-link-list">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="footer-link">
                  <ArrowRight size={13} />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4 className="footer-col-title">Our Services</h4>
          <ul className="footer-link-list">
            {services.map((svc) => (
              <li key={svc}>
                <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="footer-link">
                  <ArrowRight size={13} />
                  {svc}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-col">
          <h4 className="footer-col-title">Reach Us</h4>
          <div className="footer-contact-list">
            <div className="footer-contact-item">
              <MapPin size={15} />
              <span>{COMPANY_INFO.location.address}</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={15} />
              <a href={`tel:${COMPANY_INFO.contact.phone.replace(/\s/g, '')}`}>{COMPANY_INFO.contact.phone}</a>
            </div>
            <div className="footer-contact-item">
              <Mail size={15} />
              <a href={`mailto:${COMPANY_INFO.contact.email}`}>{COMPANY_INFO.contact.email}</a>
            </div>
          </div>
          <div className="footer-hours-badge">
            <Sprout size={13} />
            <span>{COMPANY_INFO.contact.hours}</span>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span className="footer-copy">
            &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </span>
          <span className="footer-copy-tag">
            Est. {COMPANY_INFO.establishedYear} · Rajahmundry, Andhra Pradesh, India
          </span>
        </div>
      </div>
    </footer>
  )
}
