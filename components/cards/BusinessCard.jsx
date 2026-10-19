import { ArrowUpRight, Building2, Code2, Fuel, Utensils } from 'lucide-react'
import { Link } from 'react-router-dom'

const iconMap = { Code2, Fuel, Utensils, Building2 }

export default function BusinessCard({ business, index = 0 }) {
  const Icon = iconMap[business.icon] || Code2

  return (
    <article className="business-card">
      <div className="business-card-image">
        <img src={`https://images.unsplash.com/${business.image}?auto=format&fit=crop&w=900&q=82`} alt={business.imageAlt} loading="lazy" />
        <span className="business-number">0{index + 1}</span>
      </div>
      <div className="business-card-body">
        <span className="business-icon"><Icon size={21} strokeWidth={1.6} /></span>
        <h3>{business.title}</h3>
        <p>{business.description}</p>
        <ul>{business.items.map((item) => <li key={item}>{item}</li>)}</ul>
        <Link to={business.path} className="card-link">Explore {business.title} <ArrowUpRight size={16} /></Link>
      </div>
    </article>
  )
}
