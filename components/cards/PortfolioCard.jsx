import { ArrowUpRight, FlaskConical } from 'lucide-react'

export default function PortfolioCard({ item }) {
  return (
    <article className="portfolio-card">
      <div className="portfolio-image">
        <img src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=900&q=82`} alt={item.imageAlt} loading="lazy" />
        <span className="demo-label"><FlaskConical size={12} /> DEMONSTRATION</span>
      </div>
      <div className="portfolio-card-body">
        <span className="portfolio-category">{item.category}</span>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <span className="portfolio-no-link">Sample concept · no live project link supplied <ArrowUpRight size={14} /></span>
      </div>
    </article>
  )
}
