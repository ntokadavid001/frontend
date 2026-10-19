export default function PageLayout({ children, className = '' }) {
  return <main className={`page-main ${className}`}>{children}</main>
}
