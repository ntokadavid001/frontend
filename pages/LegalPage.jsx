import PageIntro from '../components/common/PageIntro'
import PageLayout from '../components/layout/PageLayout'
import { company } from '../data/siteData'

export function PrivacyPolicy() {
  return (
    <PageLayout>
      <section className="subpage-hero container"><PageIntro eyebrow="Website information" title={<>Privacy <em>policy.</em></>} description={`Draft placeholder · last reviewed ${new Date().toLocaleDateString()}`} /></section>
      <article className="legal-content container">
        <div className="legal-notice">This starter policy is informational only and is not legal advice. Have it reviewed and updated to match your final hosting, analytics, and form services before launch.</div>
        <h2>Information submitted through forms</h2><p>This website does not currently send or store form submissions. Contact and project forms prepare a message in your device’s email app. If you choose to send that email, the details are handled by your email provider and The Dav Group’s email provider.</p>
        <h2>Hosting, logs, and external images</h2><p>The hosting provider may process standard technical logs such as IP address, browser type, and requested pages. Some demonstration photography is loaded from Unsplash, which may process connection data when an image is requested. Review the relevant provider policies before deployment.</p>
        <h2>Cookies and analytics</h2><p>No analytics or advertising tracking has been configured in this starter project. Update this page if you add cookies, analytics, maps, or embedded third-party services.</p>
        <h2>Contact</h2><p>Questions about this draft can be sent to <a href={`mailto:${company.email}`}>{company.email}</a>.</p>
      </article>
    </PageLayout>
  )
}

export function TermsOfUse() {
  return (
    <PageLayout>
      <section className="subpage-hero container"><PageIntro eyebrow="Website information" title={<>Terms of <em>use.</em></>} description={`Draft placeholder · last reviewed ${new Date().toLocaleDateString()}`} /></section>
      <article className="legal-content container">
        <div className="legal-notice">These starter terms are a placeholder, not legal advice. Review and replace them with terms appropriate to your business before launch.</div>
        <h2>Website content</h2><p>Information, imagery, business details, and service descriptions on this website are provided for general information. Demonstration portfolio concepts and sample property or menu content are not verified offers or completed client work.</p>
        <h2>Enquiries and services</h2><p>Submitting an enquiry through your email app does not create a service agreement, order, booking, or property transaction. Confirm scope, prices, availability, and terms directly with The Dav Group.</p>
        <h2>Third-party links and imagery</h2><p>Links to external services are provided for convenience. External services operate under their own terms. Replace placeholder social links and imagery with authorised company materials before launch.</p>
        <h2>Contact</h2><p>For questions about these draft terms, contact <a href={`mailto:${company.email}`}>{company.email}</a>.</p>
      </article>
    </PageLayout>
  )
}
