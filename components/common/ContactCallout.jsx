import { ArrowUpRight, Mail, MessageCircle, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { company } from '../../data/siteData'

export default function ContactCallout() {
  return (
    <section className="contact-callout">
      <div className="container callout-inner">
        <div><span className="eyebrow">Your next step starts here</span><h2>Let’s Build Something <em>Great Together.</em></h2><p>Have a project, a question, or an idea you would like to explore? Let’s talk.</p></div>
        <div className="callout-actions">
          <Link className="button button-gold" to="/contact">Contact Us <ArrowUpRight size={16} /></Link>
          <a className="button button-outline-light" href={company.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={15} /> WhatsApp</a>
          <a className="button button-outline-light" href={company.phoneLink}><Phone size={15} /> Call us</a>
          <a className="callout-email" href={`mailto:${company.email}`}><Mail size={15} />{company.email}</a>
        </div>
      </div>
    </section>
  )
}
