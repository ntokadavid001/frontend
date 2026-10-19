import { Link } from 'react-router-dom'
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { businessAreas, company } from '../../data/siteData'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main container">
        <div className="footer-about">
          <Link className="brand-lockup" to="/">
            <span className="brand-monogram">DG</span>
            <span className="brand-wordmark">THE DAV GROUP<small>OF COMPANIES</small></span>
          </Link>
          <p>{company.slogan}</p>
          <span className="footer-founder">Building with purpose. Growing with people.</span>
        </div>
        <div className="footer-column">
          <h2>Quick Links</h2>
          {quickLinks.map((link) => <Link key={link.to} to={link.to}>{link.label}</Link>)}
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Use</Link>
        </div>
        <div className="footer-column">
          <h2>Our Businesses</h2>
          {businessAreas.map((business) => <Link key={business.path} to={business.path}>{business.title}</Link>)}
        </div>
        <div className="footer-column footer-contact">
          <h2>Contact</h2>
          <a href={company.phoneLink}><Phone size={15} />{company.phone}</a>
          <a href={`mailto:${company.email}`}><Mail size={15} />{company.email}</a>
          <span><MapPin size={15} />{company.location}</span>
          <div className="social-placeholders" aria-label="Social profiles not supplied">
            <span>Facebook · profile coming soon</span>
            <span>Instagram · profile coming soon</span>
            <span>LinkedIn · profile coming soon</span>
            <span>TikTok · profile coming soon</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom container">
        <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
        <span>{company.slogan}</span>
        <Link to="/contact">Start a conversation <ArrowUpRight size={14} /></Link>
      </div>
    </footer>
  )
}
