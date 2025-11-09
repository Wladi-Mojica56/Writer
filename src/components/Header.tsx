import { useState, useEffect } from 'react'
import './Header.css'

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['#poesia', '#fragmentos', '#escritos', '#contact']
      const current = sections.find(section => {
        const element = document.querySelector(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      setActiveSection(current || '')
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSkipToContent = () => {
    const main = document.querySelector('main')
    if (main) {
      main.focus()
      main.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navLinks = [
    { href: '#poesia', label: 'Poesía', ariaLabel: 'Ver poesía' },
    { href: '#fragmentos', label: 'Fragmentos', ariaLabel: 'Ver fragmentos' },
    { href: '#escritos', label: 'Escritos', ariaLabel: 'Ver escritos' },
    { href: '#contact', label: 'Contacto', ariaLabel: 'Contactarme' }
  ]

  return (
    <>
      <a 
        href="#main-content" 
        className="skip-link"
        onClick={handleSkipToContent}
      >
        Skip to main content
      </a>
      <header 
        className="header"
        role="banner"
      >
        <div className="header-content">
          <a href="/" className="logo" aria-label="Wladi Mojica - Home">
            WLADI MOJICA
          </a>

          <nav className="nav" role="navigation" aria-label="Main navigation">
            <ul className="nav-list">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className={`nav-link ${activeSection === link.href ? 'active' : ''}`}
                    aria-label={link.ariaLabel}
                    aria-current={activeSection === link.href ? 'page' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <button
              className="mobile-menu-toggle"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </nav>
        </div>
        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-list">
            {navLinks.map(link => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  className={`nav-link ${activeSection === link.href ? 'active' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label={link.ariaLabel}
                  aria-current={activeSection === link.href ? 'page' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header