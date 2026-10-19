import { ArrowLeft, Home } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import PageLayout from '../components/layout/PageLayout'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <PageLayout>
      <section className="not-found container">
        <span className="not-found-code">404</span>
        <span className="eyebrow">This page wandered off</span>
        <h1>We can’t find<br /><em>that address.</em></h1>
        <p>The page may have moved, or the link may not be quite right.</p>
        <div><Link className="button button-gold" to="/"><Home size={16} /> Go to home</Link><button className="button button-outline-dark" onClick={() => navigate(-1)}><ArrowLeft size={16} /> Go back</button></div>
      </section>
    </PageLayout>
  )
}
