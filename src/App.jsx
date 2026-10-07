import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import GetStartedModal from './components/GetStartedModal'

function App() {
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  return (
    <>
      <Navbar onOpenGetStarted={openModal} />
      <main>
        <Hero onOpenGetStarted={openModal} />
        <About />
        <Services />
        <HowItWorks />
        <WhyUs />
        <Contact onOpenGetStarted={openModal} />
      </main>
      <Footer onOpenGetStarted={openModal} />

      {modalOpen && <GetStartedModal onClose={closeModal} />}
    </>
  )
}

export default App
