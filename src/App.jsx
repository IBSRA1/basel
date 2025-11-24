import { Routes, Route, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useTheme } from './contexts/ThemeContext'
import { useLanguage } from './contexts/LanguageContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ProjectPage from './pages/ProjectPage'
import CursorFollower from './components/CursorFollower'
// import FlyingBird from './components/FlyingBird' // REMOVED - Flying birds disabled
import FloatingElements from './components/FloatingElements'
import { useEffect } from 'react'

function App() {
  const { theme } = useTheme()
  const { language } = useLanguage()
  const location = useLocation()

  useEffect(() => {
    const hash = location.hash.slice(1)
    if (hash) {
      const element = document.getElementById(hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [location])

  return (
    <>
      <Helmet>
        <html data-theme={theme} data-lang={language} />
      </Helmet>
      <CursorFollower />
      {/* <FlyingBird /> */} {/* REMOVED - Flying birds disabled */}
      <FloatingElements />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:projectId" element={<ProjectPage />} />
      </Routes>
    </>
  )
}

export default App
