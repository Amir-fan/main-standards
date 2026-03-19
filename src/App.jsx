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
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  )
}

export default App
