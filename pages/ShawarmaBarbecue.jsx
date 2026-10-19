import { ArrowUpRight, Clock3, MapPin, Phone, Utensils } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageLayout from '../components/layout/PageLayout'
import WhatsAppButton from '../components/contact/WhatsAppButton'
import { company, foodMenu } from '../data/siteData'

const foodImages = [
  { url: 'photo-1529193591184-b1d58069ecdd', alt: 'Grilled barbecue food served fresh' },
  { url: 'photo-1555939594-58d7cb561ad1', alt: 'Grilled food cooking over a barbecue' },
  { url: 'photo-1561758033-d89a9ad46330', alt: 'A freshly prepared grilled meal' },
]

export default function ShawarmaBarbecue() {
  const orderMessage = 'Hello, I would like to ask about the shawarma and barbecue menu, availability, and prices.'

  return (
    <PageLayout>
      <section className="food-hero">
        <img src={`https://images.unsplash.com/${foodImages[0].url}?auto=format&fit=crop&w=1800&q=85`} alt={foodImages[0].alt} />
        <div className="food-hero-shade" />
        <div className="container food-hero-copy"><span className="eyebrow">The Dav Group · Food services</span><h1>Good food.<br /><em>Good company.</em></h1><p>Shawarma, barbecue, and grilled favourites. Contact us to confirm what’s available and place an enquiry.</p><div className="industry-actions"><WhatsAppButton message={orderMessage} /><a className="button button-outline-light" href={company.phoneLink}><Phone size={15} /> Call to enquire</a></div></div>
        <span className="food-hero-tag"><Utensils size={15} /> SHAWARMA · BARBECUE · GRILL</span>
      </section>
      <section className="section container menu-section">
        <div className="section-heading"><div><span className="eyebrow">Menu preview</span><h2>Made for <em>good appetites.</em></h2></div><span className="editable-placeholder">Demonstration menu · confirm current options by phone</span></div>
        <div className="menu-grid">{foodMenu.map((item, index) => <article className="menu-card" key={`${item.category}-${item.name}`}><span className="menu-index">0{index + 1}</span><span className="menu-category">{item.category}</span><h3>{item.name}</h3><p>{item.description}</p><strong>{item.price}</strong></article>)}</div>
      </section>
      <section className="section food-gallery-section"><div className="container"><div className="section-heading"><div><span className="eyebrow">From the grill</span><h2>A taste of the <em>atmosphere.</em></h2></div><span className="section-note">Illustrative food photography</span></div><div className="food-gallery">{foodImages.map((image, index) => <div className={`food-gallery-item food-gallery-${index + 1}`} key={image.url}><img src={`https://images.unsplash.com/${image.url}?auto=format&fit=crop&w=900&q=82`} alt={image.alt} loading="lazy" /></div>)}</div></div></section>
      <section className="details-band"><div className="container details-grid"><div><span className="eyebrow"><MapPin size={14} /> Find us</span><h2>Our food-business location</h2><p>Location details will be added once confirmed.</p><span className="editable-placeholder">Location to be confirmed · Asaba, Delta State</span></div><div><span className="eyebrow"><Clock3 size={14} /> Opening hours</span><h2>Check before you visit.</h2><p>Opening days and hours have not been supplied yet. Message or call us for current information.</p><span className="editable-placeholder">Opening hours · to be confirmed</span></div></div></section>
      <section className="food-order-band"><div className="container food-order-inner"><div><span className="eyebrow">Ordering is easy</span><h2>Ask us what’s <em>on the grill.</em></h2><p>Send a WhatsApp enquiry with the items you’re interested in. We’ll confirm menu, availability, price, and pickup or delivery details directly.</p><p className="no-fake-checkout">WhatsApp enquiries only. Online payment and order tracking are not available on this website.</p></div><div className="food-order-actions"><WhatsAppButton message={orderMessage} /><a className="button button-outline-dark" href={company.phoneLink}><Phone size={15} /> Call the food team</a><Link to="/contact" className="text-link">Other enquiries <ArrowUpRight size={16} /></Link></div></div></section>
    </PageLayout>
  )
}
