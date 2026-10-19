import { useState } from 'react'
import { ArrowUpRight, Building2, MapPin, MessageCircle } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import ContactForm from '../components/contact/ContactForm'
import PageIntro from '../components/common/PageIntro'
import PageLayout from '../components/layout/PageLayout'
import NotFound from './NotFound'
import WhatsAppButton from '../components/contact/WhatsAppButton'
import { company, sampleProperties } from '../data/siteData'

export default function RealEstate() {
  const { propertyId } = useParams()
  const [propertyType, setPropertyType] = useState('All types')
  const propertyRoute = propertyId?.match(/^property-(\d+)$/)
  const propertyIndex = propertyRoute ? Number(propertyRoute[1]) - 1 : -1
  const property = propertyIndex >= 0 ? sampleProperties[propertyIndex] : null
  const visibleProperties = sampleProperties.filter((item) => propertyType === 'All types' || item.type === propertyType)

  if (propertyId) {
    if (!property) return <NotFound />
    const message = `Hello, I would like to enquire about the demonstration property listing "${property.title}". Please share current verified property details.`
    return (
      <PageLayout>
        <section className="container property-detail-page">
          <Link className="back-link" to="/real-estate">← Back to real estate</Link>
          <div className="property-detail-grid">
            <div className="property-detail-image"><img src={`https://images.unsplash.com/${property.image}?auto=format&fit=crop&w=1300&q=85`} alt={property.imageAlt} /><span className="demo-label"><Building2 size={12} /> DEMONSTRATION LISTING</span></div>
            <div className="property-detail-copy"><span className="eyebrow">Sample listing · not verified</span><h1>{property.title}</h1><span className="property-type-pill">{property.type}</span><p className="property-price">{property.price}</p><p>{property.description}</p><p className="property-place"><MapPin size={16} />{property.location}</p><p>Property details, photographs, availability, and prices must be confirmed directly with The Dav Group before any decisions are made.</p><WhatsAppButton message={message} /><Link className="text-link" to="/contact">Send a property enquiry <ArrowUpRight size={15} /></Link></div>
          </div>
          <div className="property-enquiry-form"><ContactForm initialSubject={`Property enquiry: ${property.title}`} initialMessage={`I am enquiring about the demonstration listing "${property.title}". Please share verified property details, location, availability, and pricing.`} /></div>
        </section>
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      <section className="subpage-hero container real-estate-hero">
        <span className="section-hero-icon"><Building2 size={27} /></span>
        <PageIntro eyebrow="The Dav Group · Property" title={<>Property and place,<br /><em>with a long view.</em></>} description="Our real estate interests include property marketing, investment, and development. Contact us to discuss current opportunities." />
      </section>
      <section className="property-listings-section"><div className="container">
        <div className="section-heading"><div><span className="eyebrow">Property showcase</span><h2>Explore the <em>possibilities.</em></h2></div><label className="filter-select">Filter by type<select value={propertyType} onChange={(event) => setPropertyType(event.target.value)}><option>All types</option>{sampleProperties.map((item) => <option key={item.type}>{item.type}</option>)}</select></label></div>
        <div className="listing-disclaimer"><Building2 size={17} /><span>Demonstration listings only. No live, verified properties or prices have been supplied. Contact us to confirm actual opportunities.</span></div>
        <div className="property-grid">{visibleProperties.map((item) => {
          const index = sampleProperties.indexOf(item)
          const message = `Hello, I would like to enquire about the demonstration property listing "${item.title}". Please share current verified property details.`
          return <article className="property-card" key={item.title}><Link className="property-card-image" to={`/real-estate/property-${index + 1}`}><img src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=1000&q=82`} alt={item.imageAlt} loading="lazy" /><span className="demo-label"><Building2 size={12} /> DEMO LISTING</span></Link><div className="property-card-body"><div className="property-meta"><span>{item.type}</span><span><MapPin size={13} /> {item.location}</span></div><h3>{item.title}</h3><p>{item.description}</p><div className="property-card-footer"><strong>{item.price}</strong><div><Link className="card-link" to={`/real-estate/property-${index + 1}`}>Details <ArrowUpRight size={15} /></Link><a className="property-whatsapp" href={`${company.whatsapp}?text=${encodeURIComponent(message)}`} target="_blank" rel="noreferrer" aria-label={`Enquire about ${item.title} on WhatsApp`}><MessageCircle size={17} /></a></div></div></div></article>
        })}</div>
      </div></section>
      <section className="simple-cta"><div className="container"><h2>Looking for a particular <em>opportunity?</em></h2><p>Get in touch to discuss property marketing, investment, or development enquiries.</p><Link className="button button-gold" to="/contact">Talk to our team <ArrowUpRight size={16} /></Link></div></section>
    </PageLayout>
  )
}
