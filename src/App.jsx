import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Splash from './components/Splash.jsx'
import BgAmbient from './components/BgAmbient.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Experience from './pages/Experience.jsx'
import Projects from './pages/Projects.jsx'
import Certificates from './pages/Certificates.jsx'
import Gallery from './pages/Gallery.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')
  const { pathname } = useLocation()

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  return (
    <>
      <Splash />
      <BgAmbient />
      <Navbar theme={theme} onToggleTheme={() => setTheme(t => (t === 'dark' ? 'light' : 'dark'))} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}
