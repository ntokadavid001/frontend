import { Mail, MapPin, Phone } from 'lucide-react'
import ContactForm from '../components/contact/ContactForm'
import WhatsAppButton from '../components/contact/WhatsAppButton'
import PageIntro from '../components/common/PageIntro'
import PageLayout from '../components/layout/PageLayout'
import { company } from '../data/siteData'

export default function Contact() {
  return (
    <PageLayout>
      <section className="subpage-hero container contact-page-hero">
        <PageIntro eyebrow="Contact us" title={<>Let’s talk about<br /><em>what comes next.</em></>} description="For project enquiries, business questions, and general information, contact The Dav Group using the details below." />
      </section>
      <section className="contact-page-section"><div className="container contact-page-grid">
        <aside className="contact-details-card">
          <span className="eyebrow">Reach the team</span><h2>We’d be glad<br />to hear from you.</h2>
          <div className="contact-detail"><span><Phone size={18} /></span><div><small>Call us</small><a href={company.phoneLink}>{company.phone}</a></div></div>
          <div className="contact-detail"><span><Mail size={18} /></span><div><small>Email us</small><a href={`mailto:${company.email}`}>{company.email}</a></div></div>
          <div className="contact-detail"><span><MapPin size={18} /></span><div><small>Location</small><p>{company.location}</p></div></div>
          <div className="contact-detail"><span className="contact-person-mark">DG</span><div><small>Your contact</small><p>{company.founder}<br />CEO & Founder</p></div></div>
          <WhatsAppButton message="Hello, I would like to get in touch with The Dav Group of Companies." />
          <div className="map-placeholder"><MapPin size={22} /><strong>Asaba, Delta State, Nigeria</strong><span>Exact office / business address to be confirmed</span></div>
        </aside>
        <div className="contact-form-card"><ContactForm /></div>
      </div></section>
      <section className="contact-note"><div className="container"><span className="eyebrow">Please note</span><p>The contact form prepares an email in your device’s default email app. It does not send or store your information on this website. A backend form service can be connected when you choose one.</p></div></section>
    </PageLayout>
  )
}
