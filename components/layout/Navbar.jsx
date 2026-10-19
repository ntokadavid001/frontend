import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navLinks } from '../../data/siteData'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link className="brand-lockup" to="/" onClick={closeMenu} aria-label="The Dav Group home">
          <span className="brand-monogram">DG</span>
          <span className="brand-wordmark">THE DAV GROUP<small>OF COMPANIES</small></span>
        </Link>
        <button className="mobile-menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`primary-nav ${menuOpen ? 'primary-nav-open' : ''}`} aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} onClick={closeMenu}>
              {link.label}
            </NavLink>
          ))}
          <Link className="nav-contact-mobile" to="/contact" onClick={closeMenu}>Get in Touch <ArrowUpRight size={16} /></Link>
        </nav>
        <Link className="button button-gold nav-cta" to="/contact">Get in Touch <ArrowUpRight size={16} /></Link>
      </div>
    </header>
  )
}
