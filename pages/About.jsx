import { ArrowUpRight, Compass, Eye, Gem, QrCode } from 'lucide-react'
import { QRCodeSVG } from 'qrcode.react'
import { Link } from 'react-router-dom'
import BusinessCard from '../components/cards/BusinessCard'
import PageIntro from '../components/common/PageIntro'
import PageLayout from '../components/layout/PageLayout'
import { businessAreas, company } from '../data/siteData'

const values = [
  { title: 'Integrity', description: 'We value straightforward communication and responsible business practices.', icon: Gem },
  { title: 'Service', description: 'We aim to understand the people and communities our businesses serve.', icon: Compass },
  { title: 'Growth', description: 'We keep learning, improving, and building with a long-term view.', icon: Eye },
]

export default function About() {
  const isDeployed = !['localhost', '127.0.0.1', ''].includes(window.location.hostname)
  const publicUrl = isDeployed ? window.location.origin : ''

  return (
    <PageLayout>
      <section className="subpage-hero container">
        <PageIntro eyebrow="About The Dav Group" title={<>A shared vision.<br /><em>Many ways to grow.</em></>} description={`${company.name} is a diversified group based in ${company.location}, bringing together technology, energy, food services, and real estate.`} />
      </section>
      <section className="about-intro-section container">
        <div className="about-visual"><img src="/images/david-portrait-placeholder.svg" alt="Placeholder portrait for Ntoka David Chukwudi" /><span>Replace with founder portrait</span></div>
        <div className="about-copy"><span className="eyebrow">Founder & CEO</span><h2>Meet {company.founder}.</h2><p>With interests spanning website development, oil and gas, food services, and real estate, he is building a diversified business group focused on innovation, service, and sustainable growth.</p><p>Based in Asaba, Delta State, The Dav Group is being developed around a simple belief: different ventures can share one clear commitment to useful service and long-term value.</p><p className="founder-role">Professional title: {company.title}</p><Link to="/contact" className="text-link">Connect with the founder <ArrowUpRight size={16} /></Link></div>
      </section>
      <section className="statement-section">
        <div className="container statement-grid">
          <article><span className="statement-icon"><Compass size={21} /></span><span className="eyebrow">Our mission</span><p>“{company.mission}”</p></article>
          <article><span className="statement-icon"><Eye size={21} /></span><span className="eyebrow">Our vision</span><p>“{company.vision}”</p></article>
        </div>
      </section>
      <section className="section container values-section"><div className="section-heading"><div><span className="eyebrow">What guides us</span><h2>Our core <em>values.</em></h2></div></div><div className="value-grid">{values.map(({ title, description, icon: Icon }) => <article className="value-card" key={title}><Icon size={23} /><h3>{title}</h3><p>{description}</p></article>)}</div></section>
      <section className="section container about-businesses"><div className="section-heading"><div><span className="eyebrow">Our work</span><h2>Four areas. <em>One group.</em></h2></div></div><div className="business-grid">{businessAreas.map((business, index) => <BusinessCard key={business.path} business={business} index={index} />)}</div></section>
      <section className="qr-section"><div className="container qr-inner"><div><span className="eyebrow"><QrCode size={16} /> Stay connected</span><h2>Scan to visit<br /><em>The Dav Group.</em></h2><p>{isDeployed ? 'Scan this code to open the live website.' : 'A website QR code will be generated here after you deploy this site to its public domain.'}</p><span className="qr-url">{publicUrl || 'Deployment URL not configured yet'}</span></div><div className="qr-code-frame">{isDeployed ? <QRCodeSVG value={publicUrl} size={176} bgColor="#ffffff" fgColor="#121212" level="H" /> : <div className="qr-placeholder"><QrCode size={53} /><span>QR available<br />after deployment</span></div>}</div></div></section>
      <section className="simple-cta"><div className="container"><h2>Let’s build the next chapter <em>together.</em></h2><Link className="button button-gold" to="/contact">Contact The Dav Group <ArrowUpRight size={16} /></Link></div></section>
    </PageLayout>
  )
}
