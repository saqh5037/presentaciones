import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, Menu, X, Home } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

// Import all slide components
import Slide1 from './Slide1'
import Slide2 from './Slide2'
import Slide3 from './Slide3'
import Slide3a from './Slide3a'
import Slide3b from './Slide3b'
import Slide3c from './Slide3c'
import Slide4 from './Slide4'
import Slide5 from './Slide5'
import Slide6 from './Slide6'
import Slide7 from './Slide7'
import Slide8 from './Slide8'
import Slide9 from './Slide9'
import Slide10 from './Slide10'
import Slide11 from './Slide11'
import Slide12 from './Slide12'

function LabsisExpertPresentation() {
  const navigate = useNavigate()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  
  const slides = [
    { component: Slide1, title: 'Título' },
    { component: Slide2, title: 'El Desafío Actual' },
    { component: Slide3, title: 'La Solución' },
    { component: Slide3a, title: 'Diagnóstico Asistido por IA' },
    { component: Slide3b, title: 'Bases de Datos Vectoriales' },
    { component: Slide3c, title: 'Implementación Técnica' },
    { component: Slide4, title: 'Beneficios Clave' },
    { component: Slide5, title: 'Cómo Funciona' },
    { component: Slide6, title: 'Caso de Éxito' },
    { component: Slide7, title: 'Integración Simple' },
    { component: Slide8, title: 'IA Responsable' },
    { component: Slide9, title: 'ROI y Valor' },
    { component: Slide10, title: 'Próximos Pasos' },
    { component: Slide11, title: 'Testimonios' },
    { component: Slide12, title: 'Contacto' }
  ]

  const CurrentSlideComponent = slides[currentSlide].component

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
    setMenuOpen(false)
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault()
        nextSlide()
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        prevSlide()
      } else if (e.key === 'Escape') {
        navigate('/')
      }
    }

    const handleWheel = (e) => {
      if (e.deltaY > 50) {
        nextSlide()
      } else if (e.deltaY < -50) {
        prevSlide()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('wheel', handleWheel)
    }
  }, [currentSlide])

  return (
    <div className="app">

      {/* Navigation Menu */}
      <div className={`menu ${menuOpen ? 'open' : ''}`}>
        <button 
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        
        <AnimatePresence>
          {menuOpen && (
            <motion.div 
              className="menu-content"
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2>Navegación</h2>
              <ul>
                {slides.map((slide, index) => (
                  <li key={index}>
                    <button
                      className={currentSlide === index ? 'active' : ''}
                      onClick={() => goToSlide(index)}
                    >
                      <span className="slide-number">{index + 1}</span>
                      <span className="slide-title">{slide.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Progress Bar */}
      <div className="progress-bar">
        <div 
          className="progress-fill"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Slide Counter */}
      <div className="slide-counter">
        {currentSlide + 1} / {slides.length}
      </div>

      {/* Main Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="slide-container"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <CurrentSlideComponent />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="navigation-arrows">
        {currentSlide > 0 && (
          <motion.button 
            className="nav-arrow up" 
            onClick={prevSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronUp size={30} />
          </motion.button>
        )}
        {currentSlide < slides.length - 1 && (
          <motion.button 
            className="nav-arrow down" 
            onClick={nextSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronDown size={30} />
            {currentSlide === 0 && <span className="scroll-hint">Scroll o Click</span>}
          </motion.button>
        )}
      </div>
    </div>
  )
}

export default LabsisExpertPresentation