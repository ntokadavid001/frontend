import { useMemo, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PortfolioCard from '../components/cards/PortfolioCard'
import PageIntro from '../components/common/PageIntro'
import PageLayout from '../components/layout/PageLayout'
import { portfolioItems } from '../data/siteData'

const categories = ['All', 'Websites', 'Technology', 'Oil & Gas', 'Food Business', 'Real Estate']

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')
  const filteredItems = useMemo(() => activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeCategory), [activeCategory])

  return (
    <PageLayout>
      <section className="subpage-hero container">
        <PageIntro eyebrow="Portfolio" title={<>Ideas across<br /><em>our industries.</em></>} description="A sample gallery showing the kinds of projects and business stories we can present. Demonstrations are clearly labelled; no client projects or live links have been supplied." />
      </section>
      <section className="portfolio-page-section"><div className="container">
        <div className="portfolio-filter" role="group" aria-label="Filter portfolio by category">{categories.map((category) => <button type="button" key={category} className={activeCategory === category ? 'filter-active' : ''} aria-pressed={activeCategory === category} onClick={() => setActiveCategory(category)}>{category}</button>)}</div>
        <div className="portfolio-grid">{filteredItems.map((item) => <PortfolioCard key={item.title} item={item} />)}</div>
        <div className="portfolio-enquiry"><div><span className="eyebrow">Have a project to share?</span><h2>Let’s add your story <em>next.</em></h2><p>Ask about website development or tell us about your business collaboration idea.</p></div><Link className="button button-gold" to="/contact">Start an enquiry <ArrowUpRight size={16} /></Link></div>
      </div></section>
    </PageLayout>
  )
}
