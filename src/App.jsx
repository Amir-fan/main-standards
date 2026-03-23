import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import VisionMission from './components/VisionMission/VisionMission'
import Objectives from './components/Objectives/Objectives'
import Values from './components/Values/Values'
import WhyUs from './components/WhyUs/WhyUs'
import Services from './components/Services/Services'
import Projects from './components/Projects/Projects'
import Certifications from './components/Certifications/Certifications'
import Contact from './components/Contact/Contact'
import PreFooterCTA from './components/PreFooterCTA/PreFooterCTA'
import Footer from './components/Footer/Footer'
import QuoteModal from './components/QuoteModal/QuoteModal'
import FloatingCTA from './components/FloatingCTA/FloatingCTA'

function App() {
  const [quoteOpen, setQuoteOpen] = useState(false)
  const openQuote = () => setQuoteOpen(true)
  const closeQuote = () => setQuoteOpen(false)

  return (
    <>
      <Navbar onQuote={openQuote} />
      <main>
        <Hero />
        <About />
        <VisionMission />
        <Objectives />
        <Values />
        <WhyUs />
        <Services />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <PreFooterCTA onClick={openQuote} />
      <Footer />
      <QuoteModal isOpen={quoteOpen} onClose={closeQuote} />
      <FloatingCTA onClick={openQuote} />
    </>
  )
}

export default App
