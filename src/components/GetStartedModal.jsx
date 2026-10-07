import { useState } from 'react'
import { X, ArrowRight, CheckCircle2, Sprout } from 'lucide-react'
import { COMPANY_INFO } from '../data/companyData'

const serviceOptions = [
  { value: 'dining', label: '🍽️  Bistro Dining Reservation' },
  { value: 'catering', label: '✨  Event & Wedding Catering' },
  { value: 'farm-box', label: '🥦  Farm Box Subscription' },
  { value: 'chefs-table', label: '👨‍🍳  Chef\'s Table Experience' },
  { value: 'corporate', label: '🏢  Corporate Meal Program' },
  { value: 'farm-partnership', label: '🌾  Farm Partnership / Wholesale' },
]

export default function GetStartedModal({ onClose }) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    guests: '',
    notes: '',
  })

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStep(3) // success
  }

  const canProceedStep1 = formData.name.trim() && formData.email.trim() && formData.service

  return (
    <div
      className="modal-overlay"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal-content get-started-modal">
        {/* Close Button */}
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
          id="modal-close-btn"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="modal-header">
          <div className="modal-badge">
            <Sprout size={14} />
            <span>Farm-to-Table Experience Bistro</span>
          </div>
          <h2 id="modal-title" className="modal-title">
            {step === 3 ? 'You\'re on the List! 🎉' : 'Begin Your Journey'}
          </h2>
          {step !== 3 && (
            <p className="modal-subtitle">
              Tell us a little about what you need and our team will craft something extraordinary just for you.
            </p>
          )}

          {/* Step Indicator */}
          {step !== 3 && (
            <div className="modal-steps">
              {[1, 2].map((s) => (
                <div key={s} className={`modal-step-dot ${step >= s ? 'modal-step-dot--active' : ''}`} />
              ))}
            </div>
          )}
        </div>

        {/* Step 1: Contact & Service */}
        {step === 1 && (
          <form
            onSubmit={(e) => { e.preventDefault(); if (canProceedStep1) setStep(2) }}
            className="modal-form"
            id="modal-step-1-form"
          >
            <div className="form-group">
              <label htmlFor="modal-name">Your Name *</label>
              <input
                id="modal-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full name"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="modal-email">Email *</label>
                <input
                  id="modal-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="modal-phone">Phone</label>
                <input
                  id="modal-phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
            </div>

            <div className="form-group">
              <label>I&rsquo;m interested in… *</label>
              <div className="modal-service-grid">
                {serviceOptions.map((opt) => (
                  <label
                    key={opt.value}
                    className={`modal-service-option ${formData.service === opt.value ? 'selected' : ''}`}
                  >
                    <input
                      type="radio"
                      name="service"
                      value={opt.value}
                      checked={formData.service === opt.value}
                      onChange={handleChange}
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary modal-next-btn"
              disabled={!canProceedStep1}
              id="modal-step1-next-btn"
            >
              Next Step
              <ArrowRight size={16} />
            </button>
          </form>
        )}

        {/* Step 2: Details */}
        {step === 2 && (
          <form onSubmit={handleSubmit} className="modal-form" id="modal-step-2-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="modal-date">Preferred Date</label>
                <input
                  id="modal-date"
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="modal-guests">Guest Count</label>
                <input
                  id="modal-guests"
                  type="number"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  placeholder="e.g. 4 or 200"
                  min="1"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="modal-notes">Additional Notes or Requests</label>
              <textarea
                id="modal-notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Dietary needs, special decor requests, budget range, or anything else you'd like us to know…"
                rows={4}
              />
            </div>

            <div className="modal-form-actions">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setStep(1)}
                id="modal-step2-back-btn"
              >
                ← Back
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                id="modal-step2-submit-btn"
              >
                Submit Request
                <ArrowRight size={16} />
              </button>
            </div>
          </form>
        )}

        {/* Step 3: Success */}
        {step === 3 && (
          <div className="modal-success">
            <div className="modal-success-icon">
              <CheckCircle2 size={52} />
            </div>
            <p className="modal-success-desc">
              Thank you, <strong>{formData.name}</strong>! Our culinary concierge team will reach out within <strong>24 hours</strong> to discuss your experience.
            </p>
            <div className="modal-success-contact">
              <span>Questions? Call us:</span>
              <a href={`tel:${COMPANY_INFO.contact.phone.replace(/\s/g, '')}`} className="modal-success-phone">
                {COMPANY_INFO.contact.phone}
              </a>
            </div>
            <button
              type="button"
              className="btn btn-primary modal-close-success-btn"
              onClick={onClose}
              id="modal-success-close-btn"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
