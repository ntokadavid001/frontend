import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import BackToTop from './components/common/BackToTop'
import ScrollToTop from './components/common/ScrollToTop'
import WhatsAppButton from './components/contact/WhatsAppButton'
import { sampleProperties } from './data/siteData'
import Home from './pages/Home'
import About from './pages/About'
import WebsiteDevelopment from './pages/WebsiteDevelopment'
import OilAndGas from './pages/OilAndGas'
import ShawarmaBarbecue from './pages/ShawarmaBarbecue'
import RealEstate from './pages/RealEstate'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import { PrivacyPolicy, TermsOfUse } from './pages/LegalPage'
import NotFound from './pages/NotFound'
import './App.css'

const pageMetadata = {
  '/': ['The Dav Group of Companies | Multiple Businesses. One Vision.', 'Discover The Dav Group of Companies in Asaba, Nigeria: website development, oil and gas, shawarma and barbecue, and real estate.'],
  '/about': ['About The Dav Group | Our Mission & Vision', 'Meet Ntoka David Chukwudi and learn about the mission, vision, values, and businesses of The Dav Group of Companies.'],
  '/website-development': ['Website Development | The Dav Group', 'Responsive business, portfolio, e-commerce, school, real estate, and restaurant websites by Ntoka David Chukwudi, Website Developer.'],
  '/oil-and-gas': ['Oil & Gas | The Dav Group', 'Contact The Dav Group in Asaba, Delta State, for current gas sales and energy service information.'],
  '/shawarma-and-barbecue': ['Shawarma & Barbecue | The Dav Group', 'Explore the demonstration menu and contact The Dav Group about shawarma, barbecue, and grilled food availability.'],
  '/real-estate': ['Real Estate | The Dav Group', 'Explore demonstration property showcases and contact The Dav Group about real estate enquiries.'],
  '/portfolio': ['Portfolio | The Dav Group', 'Browse clearly labelled demonstration concepts across websites, technology, energy, food business, and real estate.'],
  '/contact': ['Contact The Dav Group', 'Contact Ntoka David Chukwudi and The Dav Group of Companies in Asaba, Delta State, Nigeria.'],
  '/privacy': ['Privacy Policy | The Dav Group', 'Starter privacy information for The Dav Group of Companies website.'],
  '/terms': ['Terms of Use | The Dav Group', 'Starter website terms placeholder for The Dav Group of Companies.'],
}

function RouteMetadata() {
  const { pathname } = useLocation()

  useEffect(() => {
    const propertyRoute = pathname.match(/^\/real-estate\/property-(\d+)$/)
    const property = propertyRoute ? sampleProperties[Number(propertyRoute[1]) - 1] : null
    const [title, description] = pageMetadata[pathname]
      || (property
        ? [`${property.title} | Real Estate | The Dav Group`, 'Demonstration property details. Contact The Dav Group to confirm current, verified property information.']
        : ['Page not found | The Dav Group', 'The requested page could not be found on The Dav Group of Companies website.'])
    document.title = title
    let descriptionElement = document.querySelector('meta[name="description"]')
    if (!descriptionElement) {
      descriptionElement = document.createElement('meta')
      descriptionElement.name = 'description'
      document.head.append(descriptionElement)
    }
    descriptionElement.content = description
  }, [pathname])

  return null
}

export default function App() {
  return (
    <>
      <RouteMetadata />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/website-development" element={<WebsiteDevelopment />} />
        <Route path="/oil-and-gas" element={<OilAndGas />} />
        <Route path="/shawarma-and-barbecue" element={<ShawarmaBarbecue />} />
        <Route path="/real-estate" element={<RealEstate />} />
        <Route path="/real-estate/:propertyId" element={<RealEstate />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <WhatsAppButton className="whatsapp-floating" />
      <BackToTop />
    </>
  )
}
