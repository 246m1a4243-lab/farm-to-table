import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight, MapPin, Phone } from 'lucide-react'
import { COMPANY_INFO } from '../data/companyData'

export default function Navbar({ onOpenGetStarted }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)

      const sections = ['home', 'about', 'services', 'how-it-works', 'why-us', 'contact']
      const scrollPosition = window.scrollY + 180

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'How It Works', href: '#how-it-works', id: 'how-it-works' },
    { name: 'Why Us', href: '#why-us', id: 'why-us' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Top Notification / Location Ticker */}
      <div className="top-announcement-bar">
        <div className="container announcement-inner">
          <div className="announcement-left">
            <span className="live-dot"></span>
            <span className="announcement-text">
              <strong>Godavari Harvest Notice:</strong> Organic farm harvests picked fresh daily within 40 km of Rajahmundry.
            </span>
          </div>
          <div className="announcement-right">
            <span className="loc-badge">
              <MapPin size={13} />
              Rajahmundry (Rajamahendravaram), AP
            </span>
            <a href="tel:+918832479898" className="phone-link">
              <Phone size={13} />
              +91 883 247 9898
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className={`navbar-header ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Brand Logo & Name */}
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="brand-logo-link">
            <img 
              src="./images/logo.png" 
              alt="Farm-to-Table Experience Bistro Logo" 
              className="brand-logo-img" 
            />
            <div className="brand-text">
              <span className="brand-name">Farm-to-Table</span>
              <span className="brand-sub">EXPERIENCE BISTRO</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="desktop-nav">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Action Button */}
          <div className="navbar-actions">
            <button
              type="button"
              className="btn btn-primary btn-sm get-started-btn"
              onClick={onOpenGetStarted}
              id="nav-get-started-btn"
            >
              Get Started
              <ArrowRight size={15} />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="mobile-dropdown-menu">
            <div className="container mobile-menu-inner">
              <ul className="mobile-nav-list">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mobile-menu-cta">
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                  onClick={() => {
                    setMobileMenuOpen(false)
                    onOpenGetStarted()
                  }}
                >
                  Get Started
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
