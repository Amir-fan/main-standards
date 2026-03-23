import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { label: 'من نحن', href: '#about' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'مشاريعنا', href: '#projects' },
  { label: 'تواصل معنا', href: '#contact' },
]

export default function Navbar({ onQuote }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace('#', ''))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    
    // If not on the homepage, navigate back to home with the hash appended
    if (location.pathname !== '/') {
      navigate('/' + (href === '#hero' ? '' : href))
      return
    }

    if (href === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const target = document.querySelector(href)
    if (target) {
      const offset = 100 // Height of floating navbar + padding
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = target.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar__inner">
          {/* Logo */}
          <a href="#hero" className="navbar__logo" onClick={() => handleNavClick('#hero')}>
            <img src={import.meta.env.BASE_URL + 'images/ms-logo.png'} alt="المقاييس الرئيسية" className="navbar__logo-img" />
          </a>

          {/* Desktop Links */}
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  className={`navbar__link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div className="navbar__actions">
            <button className="btn btn-primary navbar__cta" onClick={onQuote}>
              طلب عرض سعر
            </button>
            <button
              className={`hamburger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="القائمة"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <button onClick={() => handleNavClick(link.href)}>{link.label}</button>
            </li>
          ))}
        </ul>
        <button className="btn btn-primary mobile-menu__cta" onClick={() => { setMenuOpen(false); onQuote(); }}>
          طلب عرض سعر
        </button>
      </div>
    </>
  )
}
