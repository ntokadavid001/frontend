import { ArrowUpRight, CheckCircle2, Lightbulb, ShieldCheck, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import BusinessCard from '../components/cards/BusinessCard'
import PortfolioCard from '../components/cards/PortfolioCard'
import ContactCallout from '../components/common/ContactCallout'
import HeroSection from '../components/common/HeroSection'
import { businessAreas, portfolioItems } from '../data/siteData'
import PageLayout from '../components/layout/PageLayout'

const features = [
  { title: 'Innovation', description: 'We look for thoughtful, practical ways to move ideas forward.', icon: Lightbulb },
  { title: 'Quality Service', description: 'We aim to bring care and attention to every customer interaction.', icon: ShieldCheck },
  { title: 'Customer Satisfaction', description: 'We value clear communication and lasting relationships.', icon: CheckCircle2 },
  { title: 'Business Growth', description: 'We are building a diverse group with a long-term perspective.', icon: TrendingUp },
]

export default function Home() {
  return (
    <PageLayout className="home-page">
      <HeroSection />
      <section className="section section-businesses container" id="businesses">
        <div className="section-heading">
          <div><span className="eyebrow">One vision, many possibilities</span><h2>Our <em>businesses.</em></h2></div>
          <p>Different industries, shared values. Explore the work and services that make up The Dav Group.</p>
        </div>
        <div className="business-grid">{businessAreas.map((business, index) => <BusinessCard key={business.path} business={business} index={index} />)}</div>
      </section>
      <section className="founder-section">
        <div className="founder-section-inner container">
          <div className="founder-photo"><img src="/images/david-portrait-placeholder.svg" alt="Placeholder portrait for Ntoka David Chukwudi, CEO and Founder" /><span>Founder portrait placeholder</span></div>
          <div className="founder-copy">
            <span className="eyebrow">A note from our founder</span>
            <h2>Meet Ntoka David <em>Chukwudi.</em></h2>
            <p>With interests spanning website development, oil and gas, food services, and real estate, he is building a diversified business group focused on innovation, service, and sustainable growth.</p>
            <span className="founder-role">CEO & Founder · Website Developer</span>
            <Link className="button button-outline-light" to="/about">Learn More About Us <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>
      <section className="section why-section container">
        <div className="section-heading section-heading-centered"><div><span className="eyebrow">The way we work</span><h2>Why work with <em>us?</em></h2></div><p>We keep our focus on people, thoughtful service, and building for the long term.</p></div>
        <div className="feature-grid">{features.map(({ title, description, icon: Icon }, index) => <article className="feature-card" key={title}><span className="feature-number">0{index + 1}</span><span className="feature-icon"><Icon size={22} strokeWidth={1.6} /></span><h3>{title}</h3><p>{description}</p></article>)}</div>
      </section>
      <section className="section portfolio-preview">
        <div className="container">
          <div className="section-heading"><div><span className="eyebrow">A glimpse of what we do</span><h2>Work in <em>progress.</em></h2></div><Link to="/portfolio" className="text-link">View portfolio <ArrowUpRight size={16} /></Link></div>
          <p className="section-note">Demonstration concepts shown below, not completed client projects or verified business results.</p>
          <div className="portfolio-grid portfolio-grid-preview">{[0, 2, 3, 4].map((index) => portfolioItems[index]).map((item) => <PortfolioCard key={item.title} item={item} />)}</div>
        </div>
      </section>
      <ContactCallout />
    </PageLayout>
  )
}
