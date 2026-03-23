import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
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
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'

function HomePage({ openQuote }) {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const target = document.querySelector(location.hash)
        if (target) {
          const offset = 100
          const bodyRect = document.body.getBoundingClientRect().top
          const elementRect = target.getBoundingClientRect().top
          const elementPosition = elementRect - bodyRect
          window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth'
          })
        }
      }, 100)
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [location])

  return (
    <>
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
    </>
  )
}

function App() {
  const [quoteOpen, setQuoteOpen] = useState(false)
  const openQuote = () => setQuoteOpen(true)
  const closeQuote = () => setQuoteOpen(false)

  return (
    <>
      <Navbar onQuote={openQuote} />
      <Routes>
        <Route path="/" element={<HomePage openQuote={openQuote} />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      <Footer />
      <QuoteModal isOpen={quoteOpen} onClose={closeQuote} />
      <FloatingCTA onClick={openQuote} />
    </>
  )
}

export default App
