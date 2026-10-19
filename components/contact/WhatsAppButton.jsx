import { MessageCircle } from 'lucide-react'
import { company } from '../../data/siteData'

export default function WhatsAppButton({ className = '', message }) {
  const target = new URL(company.whatsapp)
  if (message) target.searchParams.set('text', message)

  return (
    <a className={`whatsapp-button ${className}`} href={target.toString()} target="_blank" rel="noreferrer" aria-label="Contact The Dav Group on WhatsApp">
      <MessageCircle size={18} />
      <span>WhatsApp us</span>
    </a>
  )
}
