export default function PageIntro({ eyebrow, title, description, centered = false }) {
  return (
    <div className={`page-intro ${centered ? 'page-intro-centered' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </div>
  )
}
