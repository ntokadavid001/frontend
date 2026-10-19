import { useState } from 'react'
import { ArrowUpRight, Mail } from 'lucide-react'
import { company } from '../../data/siteData'

const initialStatus = 'Submitting opens your email app with the message pre-filled. The website does not store or send enquiries until a form backend is connected.'

export default function ContactForm({ project = false, initialSubject = '', initialMessage = '' }) {
  const [status, setStatus] = useState(initialStatus)

  function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const subject = project ? `Website project enquiry: ${form.get('websiteType')}` : form.get('subject')
    const details = [...form.entries()]
      .filter(([key]) => key !== 'email' && key !== 'subject')
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n')
    const body = `${details}\n\nReply to: ${form.get('email')}`
    const mailto = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setStatus('Your email app should open with this enquiry ready. If it does not, email us directly at ' + company.email + '.')
    window.location.href = mailto
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-heading"><span className="eyebrow">{project ? 'Tell us about your project' : 'Send us a message'}</span><h2>{project ? 'Let’s make your website.' : 'Let’s start a conversation.'}</h2><p>Fields marked with * are required.</p></div>
      <div className="form-grid">
        <label>Full name *<input name="name" required autoComplete="name" placeholder="Your full name" /></label>
        <label>Email address *<input name="email" type="email" required autoComplete="email" placeholder="you@example.com" /></label>
        <label>Phone number<input name="phone" type="tel" autoComplete="tel" placeholder="+234 ..." /></label>
        {project ? <>
          <label>Type of website *<select name="websiteType" required defaultValue=""><option value="" disabled>Select a website type</option><option>Business website</option><option>E-commerce</option><option>Portfolio</option><option>School website</option><option>Real estate website</option><option>Restaurant website</option><option>Redesign or maintenance</option><option>Other</option></select></label>
          <label>Project budget (NGN)<input name="budget" type="number" min="0" inputMode="decimal" placeholder="Optional estimated budget" /></label>
        </> : <label>Subject *<input name="subject" required placeholder="How can we help?" defaultValue={initialSubject} /></label>}
        <label className="form-full">{project ? 'Project description *' : 'Message *'}<textarea name="message" required rows="5" placeholder={project ? 'Tell us about your goals, timeline, and any features you need...' : 'Write your message here...'} defaultValue={initialMessage} /></label>
      </div>
      <button type="submit" className="button button-gold">Prepare email enquiry <Mail size={16} /><ArrowUpRight size={15} /></button>
      <p className="form-status" aria-live="polite">{status}</p>
    </form>
  )
}
