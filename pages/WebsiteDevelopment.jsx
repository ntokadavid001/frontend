import { Code2, Laptop, MonitorSmartphone, PenTool, RefreshCw, ShieldCheck } from 'lucide-react'
import ContactForm from '../components/contact/ContactForm'
import ServiceCard from '../components/cards/ServiceCard'
import PortfolioCard from '../components/cards/PortfolioCard'
import PageIntro from '../components/common/PageIntro'
import PageLayout from '../components/layout/PageLayout'
import { developmentServices, portfolioItems } from '../data/siteData'

const process = [
  { number: '01', title: 'Discover', detail: 'We discuss your goals, audience, content, and the problem your website should solve.' },
  { number: '02', title: 'Plan & design', detail: 'We agree on the structure and visual direction before building.' },
  { number: '03', title: 'Build & review', detail: 'We develop a responsive experience and review it together.' },
  { number: '04', title: 'Launch & support', detail: 'We prepare the site for launch and discuss ongoing support where needed.' },
]

export default function WebsiteDevelopment() {
  return (
    <PageLayout>
      <section className="subpage-hero container service-hero">
        <div className="service-hero-icon"><Code2 size={30} /></div>
        <PageIntro eyebrow="Website Developer" title={<>Digital ideas,<br /><em>built with purpose.</em></>} description="We design and develop responsive websites that help businesses, creators, schools, restaurants, and property teams tell their story online." />
        <div className="service-hero-actions"><a className="button button-gold" href="#project-enquiry">Request a Website <PenTool size={16} /></a><span><MonitorSmartphone size={17} /> Mobile and desktop responsive</span></div>
      </section>
      <section className="website-service-band"><div className="container service-benefits"><span><Laptop size={19} /> Custom website builds</span><span><MonitorSmartphone size={19} /> Responsive layouts</span><span><RefreshCw size={19} /> Redesign & improvements</span><span><ShieldCheck size={19} /> Maintenance options</span></div></section>
      <section className="section container"><div className="section-heading"><div><span className="eyebrow">What we can help with</span><h2>Website services.</h2></div><p>From first website to a considered refresh, discuss the right scope for your goals.</p></div><div className="service-cards-grid"><ServiceCard title="Websites for organizations" description="Clear, responsive sites shaped around your audience and the information they need." items={developmentServices.slice(0, 5)} /><ServiceCard title="Digital products & commerce" description="Purposeful online experiences for selling products and supporting digital services." items={developmentServices.slice(5, 7)} /><ServiceCard title="Website care & flexibility" description="Keep your site working well as your content, audience, and business change." items={developmentServices.slice(7)} /></div></section>
      <section className="section portfolio-preview"><div className="container"><div className="section-heading"><div><span className="eyebrow">Ideas on the screen</span><h2>Demonstration <em>portfolio.</em></h2></div></div><p className="section-note">These concepts demonstrate possible directions only; they are not client projects or completed work.</p><div className="portfolio-grid">{portfolioItems.filter((item) => item.category === 'Websites' || item.category === 'Technology').map((item) => <PortfolioCard key={item.title} item={item} />)}</div></div></section>
      <section className="section container process-section"><div className="section-heading"><div><span className="eyebrow">A clear path from idea to launch</span><h2>How we <em>work.</em></h2></div></div><div className="process-grid">{process.map((item) => <article key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.detail}</p></article>)}</div></section>
      <section className="form-section" id="project-enquiry"><div className="container form-container"><ContactForm project /></div></section>
    </PageLayout>
  )
}
