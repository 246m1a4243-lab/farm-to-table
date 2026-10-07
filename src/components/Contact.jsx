import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, Share2, Link2, Globe, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react'
import { COMPANY_INFO, FAQ_DATA } from '../data/companyData'

export default function Contact({ onOpenGetStarted }) {
  const [openFaq, setOpenFaq] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="glow-accent contact-glow-1" />
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <MapPin size={14} />
            Get In Touch
          </span>
          <h2 className="section-title">
            Start Your <span className="highlight-gold">Farm-to-Table</span> Journey
          </h2>
          <p className="section-subtitle">
            Whether you&rsquo;re planning an intimate dinner, a grand celebration, or simply want the purest organic pantry delivered to your door — we&rsquo;re here. Reach out and let&rsquo;s craft something extraordinary together.
          </p>
        </div>

        {/* Main Contact Grid */}
        <div className="contact-main-grid">
          {/* Left: Info + Socials + Map */}
          <div className="contact-info-col">
            {/* Info Cards */}
            <div className="glass-card contact-info-card">
              <div className="contact-info-item">
                <div className="contact-info-icon-wrap">
                  <MapPin size={18} />
                </div>
                <div>
                  <strong>Location</strong>
                  <p>{COMPANY_INFO.location.address}</p>
                  <a
                    href="https://maps.google.com/?q=Rajahmundry+Andhra+Pradesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-map-link"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon-wrap">
                  <Phone size={18} />
                </div>
                <div>
                  <strong>Phone</strong>
                  <a href={`tel:${COMPANY_INFO.contact.phone.replace(/\s/g, '')}`} className="contact-link">
                    {COMPANY_INFO.contact.phone}
                  </a>
                  <a href={`tel:${COMPANY_INFO.contact.altPhone.replace(/\s/g, '')}`} className="contact-link">
                    {COMPANY_INFO.contact.altPhone}
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon-wrap">
                  <Mail size={18} />
                </div>
                <div>
                  <strong>Email</strong>
                  <a href={`mailto:${COMPANY_INFO.contact.email}`} className="contact-link">
                    {COMPANY_INFO.contact.email}
                  </a>
                  <a href={`mailto:${COMPANY_INFO.contact.reservationsEmail}`} className="contact-link">
                    {COMPANY_INFO.contact.reservationsEmail}
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon-wrap">
                  <Clock size={18} />
                </div>
                <div>
                  <strong>Hours</strong>
                  <p>{COMPANY_INFO.contact.hours}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="contact-socials">
              <a href={COMPANY_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <Share2 size={18} />
                <span>Instagram</span>
              </a>
              <a href={COMPANY_INFO.socials.facebook} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                <Globe size={18} />
                <span>Facebook</span>
              </a>
              <a href={COMPANY_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <Link2 size={18} />
                <span>LinkedIn</span>
              </a>
              <a href={COMPANY_INFO.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="social-link social-link--whatsapp" aria-label="WhatsApp">
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Map embed */}
            <div className="contact-map-wrap">
              <iframe
                title="Farm-to-Table Bistro Location"
                src={COMPANY_INFO.location.mapEmbedUrl}
                width="100%"
                height="220"
                style={{ border: 0, borderRadius: '12px', display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="glass-card contact-form-card">
            <h3 className="contact-form-title">Send Us a Message</h3>

            {submitted ? (
              <div className="contact-success-banner">
                <span>🎉</span>
                <div>
                  <strong>Message Received!</strong>
                  <p>Our team will contact you within 24 hours. We look forward to welcoming you.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" id="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name">Full Name *</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email">Email Address *</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-phone">Phone Number</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-service">Service Interest</label>
                    <select
                      id="contact-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service…</option>
                      <option value="dining">Bistro Dining Reservation</option>
                      <option value="catering">Event & Wedding Catering</option>
                      <option value="farm-box">Farm Box Subscription</option>
                      <option value="chefs-table">Chef's Table Experience</option>
                      <option value="corporate">Corporate Meal Program</option>
                      <option value="farm-partnership">Farm Partnership</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Message *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements, preferred date, guest count, or any special requests…"
                    rows={5}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary contact-submit-btn" id="contact-submit-btn">
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="contact-faq-section">
          <h3 className="contact-faq-title">Frequently Asked Questions</h3>
          <div className="faq-list">
            {FAQ_DATA.map((faq, idx) => (
              <div key={idx} className={`faq-item ${openFaq === idx ? 'faq-item--open' : ''}`}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  id={`faq-toggle-${idx}`}
                >
                  <span>{faq.question}</span>
                  {openFaq === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                {openFaq === idx && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="contact-cta-banner">
          <div>
            <h3>Ready to Experience Godavari Gastronomy?</h3>
            <p>Reserve your table, plan your event, or start your farm box subscription today.</p>
          </div>
          <button type="button" className="btn btn-primary" onClick={onOpenGetStarted} id="contact-cta-btn">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  )
}
