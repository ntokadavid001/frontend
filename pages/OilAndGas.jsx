import { ArrowUpRight, Clock3, Fuel, MapPin, Phone, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageIntro from '../components/common/PageIntro'
import PageLayout from '../components/layout/PageLayout'
import WhatsAppButton from '../components/contact/WhatsAppButton'
import { company, portfolioItems } from '../data/siteData'

const services = [
  { title: 'Gas sales', description: 'Product options, prices, and availability can be confirmed directly with the business.' },
  { title: 'Gas plant information', description: 'Ask us about the plant and service location once operating details are confirmed.' },
  { title: 'Energy service enquiries', description: 'Contact the team to discuss current services and business enquiries.' },
]

export default function OilAndGas() {
  const demo = portfolioItems.find((item) => item.category === 'Oil & Gas')

  return (
    <PageLayout>
      <section className="industry-hero container">
        <div className="industry-hero-copy"><PageIntro eyebrow="The Dav Group · Energy" title={<>Energy services,<br /><em>rooted in service.</em></>} description="The Dav Group’s oil and gas business is focused on gas sales and related energy enquiries. Contact us directly for current product and service information." /><div className="industry-actions"><WhatsAppButton message="Hello, I would like to enquire about The Dav Group's oil and gas business." /><a className="button button-outline-dark" href={company.phoneLink}><Phone size={15} /> Call the team</a></div></div>
        <div className="industry-hero-image"><img src={`https://images.unsplash.com/${demo.image}?auto=format&fit=crop&w=1100&q=84`} alt={demo.imageAlt} /><span className="image-demo-caption">INDUSTRY IMAGE · ILLUSTRATIVE</span></div>
      </section>
      <section className="section container"><div className="section-heading"><div><span className="eyebrow">What we do</span><h2>Energy business <em>services.</em></h2></div></div><div className="industry-service-grid">{services.map((service, index) => <article className="industry-service-card" key={service.title}><span>0{index + 1}</span><Fuel size={22} /><h3>{service.title}</h3><p>{service.description}</p></article>)}</div></section>
      <section className="details-band"><div className="container details-grid">
        <div><span className="eyebrow"><MapPin size={14} /> Location</span><h2>Gas plant & service area</h2><p>Specific gas plant address and service locations will be added when confirmed.</p><span className="editable-placeholder">Primary location · to be confirmed</span></div>
        <div><span className="eyebrow"><Fuel size={14} /> Products & prices</span><h2>Ask about availability.</h2><p>Confirm current gas products, sizes, and prices directly with the business.</p><span className="editable-placeholder">Product range & prices · to be confirmed</span></div>
        <div><span className="eyebrow"><Clock3 size={14} /> Operating hours</span><h2>Planning a visit?</h2><p>Call or message us to confirm the current operating hours before visiting.</p><span className="editable-placeholder">Operating hours · to be confirmed</span></div>
        <div><span className="eyebrow"><MapPin size={14} /> Additional locations</span><h2>Service areas</h2><p>Additional plant and service locations will be added when they are confirmed.</p><span className="editable-placeholder">Additional locations · to be confirmed</span></div>
      </div></section>
      <section className="industry-note container"><ShieldCheck size={20} /><p>Prices, products, opening hours, operating location, and additional service areas have not been supplied yet. Please contact the business for current information.</p></section>
      <section className="contact-callout"><div className="container callout-inner"><div><span className="eyebrow">Oil & gas enquiries</span><h2>Need current <em>information?</em></h2><p>Talk directly with The Dav Group about gas sales and energy services.</p></div><div className="callout-actions"><WhatsAppButton message="Hello, I would like to enquire about gas sales and energy services." /><a className="button button-outline-light" href={company.phoneLink}><Phone size={15} /> Call us</a><Link className="callout-email" to="/contact">Send an enquiry <ArrowUpRight size={15} /></Link></div></div></section>
    </PageLayout>
  )
}
