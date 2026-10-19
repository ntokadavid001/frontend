import { ArrowUpRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ServiceCard({ title, description, items, to = '/contact' }) {
  return (
    <article className="service-card">
      <span className="service-card-accent" />
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>{items.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul>
      <Link className="card-link" to={to}>Discuss this service <ArrowUpRight size={16} /></Link>
    </article>
  )
}
