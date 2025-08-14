import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, Menu, X, Home } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import './MusiKickoff.css'

// Import all slide components
import Slide1 from './Slide1'
import Slide2 from './Slide2'
import Slide3 from './Slide3'
import Slide4 from './Slide4'
import Slide5 from './Slide5'
import Slide6 from './Slide6'
import Slide7 from './Slide7'
import Slide8 from './Slide8'
import Slide9 from './Slide9'
import Slide10 from './Slide10'

function MusiKickoffPresentation() {
  const navigate = useNavigate()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  
  const slides = [
    { component: Slide1, title: 'Bienvenida' },
    { component: Slide2, title: 'Agenda' },
    { component: Slide3, title: 'Sobre el Proyecto' },
    { component: Slide4, title: 'Objetivos' },
    { component: Slide5, title: 'Alcance' },
    { component: Slide6, title: 'Funcionalidades Clave' },
    { component: Slide7, title: 'Cronograma' },
    { component: Slide8, title: 'Equipo de Trabajo' },
    { component: Slide9, title: 'Próximos Pasos' },
    { component: Slide10, title: 'Q&A' }
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
    <div className="app musi-presentation">
      {/* Home Button */}
      <motion.button
        className="home-button"
        onClick={() => navigate('/')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Home size={20} />
        <span>Dashboard</span>
      </motion.button>

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
              <img src="/musi/Desktop - 49.svg" alt="Musi" className="menu-logo" />
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
          initial={{ 
            opacity: 0, 
            scale: 0.95,
            rotateX: -10,
            y: 100 
          }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            rotateX: 0,
            y: 0 
          }}
          exit={{ 
            opacity: 0, 
            scale: 0.95,
            rotateX: 10,
            y: -100 
          }}
          transition={{ 
            duration: 0.6,
            ease: [0.645, 0.045, 0.355, 1.000],
            opacity: { duration: 0.4 },
            scale: { duration: 0.5 }
          }}
          style={{
            perspective: '1000px',
            transformStyle: 'preserve-3d'
          }}
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

export default MusiKickoffPresentation