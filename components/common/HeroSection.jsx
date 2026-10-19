import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { company } from '../../data/siteData'

export default function HeroSection() {
  return (
    <section className="home-hero">
      <div className="hero-grid-overlay" />
      <div className="hero-inner container">
        <div className="hero-copy">
          <span className="eyebrow"><span className="eyebrow-line" /> A diversified business group</span>
          <h1>The Dav Group<br />of <em>Companies.</em></h1>
          <p className="hero-slogan">{company.slogan}</p>
          <p className="hero-description">We bring together digital innovation, energy, food services, and real estate under one vision of growth, quality, and excellence.</p>
          <div className="hero-actions">
            <a className="button button-gold" href="#businesses">Explore Our Businesses <ArrowDown size={16} /></a>
            <Link className="button button-outline-light" to="/contact">Contact Us <ArrowUpRight size={16} /></Link>
          </div>
          <div className="hero-founder"><span className="founder-line" /><span><strong>{company.founder}</strong><small>CEO & Founder · {company.title}</small></span></div>
        </div>
        <div className="hero-portrait-wrap">
          <div className="portrait-frame">
            <img src="/images/david-portrait-placeholder.svg" alt="Placeholder portrait for Ntoka David Chukwudi, replace with the founder’s photo" />
            <span className="portrait-placeholder-note">Replace with founder portrait</span>
          </div>
          <div className="portrait-caption"><span className="caption-mark">DG</span><span><strong>Purpose in every venture.</strong><small>One group. A world of possibility.</small></span></div>
          <span className="hero-orbit hero-orbit-one" /><span className="hero-orbit hero-orbit-two" />
        </div>
      </div>
      <div className="hero-bottom-line container"><span>ASABA, DELTA STATE, NIGERIA</span><span>01 — 04 / OUR BUSINESSES</span></div>
    </section>
  )
}
