import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Menu, X } from 'lucide-react'
import './PlanImplementacionIAMicrotec.css'
import Slide1 from './Slide1'
import Slide2 from './Slide2'
import Slide3 from './Slide3'
import Slide4 from './Slide4'
import Slide5 from './Slide5'
import Slide6 from './Slide6'
import Slide7 from './Slide7'
import Slide8 from './Slide8'

const slides = [
  Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8
]

const slideTitles = [
  '1. Plan de Implementación IA - Microtec',
  '2. Filosofía y Arquitectura',
  '3. Roadmap 18 Meses',
  '4. Quick Wins Operativos',
  '5. CRM y Automatización',
  '6. IA en Laboratorio',
  '7. Métricas y ROI',
  '8. Próximos Pasos'
]

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.8
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.4 },
      scale: { duration: 0.4 }
    }
  },
  exit: (direction) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.8,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.3 },
      scale: { duration: 0.3 }
    }
  })
}

function PlanImplementacionIAMicrotecPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1)
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1)
      setCurrentSlide(currentSlide - 1)
    }
  }

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
    setMenuOpen(false)
  }

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight') nextSlide()
      if (e.key === 'ArrowLeft') prevSlide()
      if (e.key === 'Escape') navigate('/dashboard')
      if (e.key >= '1' && e.key <= '9') {
        const slideIndex = parseInt(e.key) - 1
        if (slideIndex < slides.length) {
          goToSlide(slideIndex)
        }
      }
    }
    
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [currentSlide, navigate])

  const CurrentSlideComponent = slides[currentSlide]

  return (
    <div className="presentation-container microtec-ia-presentation">
      {/* Minimal Navigation Header - Only Menu */}
      <div className="presentation-nav" style={{
        position: 'fixed',
        top: 15,
        left: 15,
        zIndex: 100
      }}>
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'rgba(255, 255, 255, 0.9)',
            border: '2px solid rgba(107, 166, 68, 0.3)',
            borderRadius: '10px',
            padding: '10px 14px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            color: '#1e3a8a',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
          }}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Slide Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            style={{
              position: 'fixed',
              left: 0,
              top: '70px',
              bottom: 0,
              width: '320px',
              background: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(20px)',
              borderRight: '2px solid rgba(30, 58, 138, 0.2)',
              zIndex: 99,
              overflowY: 'auto',
              padding: '20px'
            }}
          >
            <h3 style={{ color: '#1e3a8a', marginBottom: '20px', fontSize: '1.4rem' }}>
              Navegación
            </h3>
            {slideTitles.map((title, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '12px 15px',
                  marginBottom: '8px',
                  background: currentSlide === index 
                    ? 'linear-gradient(135deg, rgba(107, 166, 68, 0.15) 0%, rgba(139, 195, 74, 0.1) 100%)'
                    : 'rgba(240, 240, 240, 0.5)',
                  border: currentSlide === index 
                    ? '2px solid #6ba644'
                    : '1px solid rgba(203, 213, 225, 0.5)',
                  borderRadius: '10px',
                  color: currentSlide === index ? '#1e3a8a' : '#475569',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontSize: '0.95rem'
                }}
              >
                {title}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          style={{ 
            width: '100%', 
            height: '100vh'
          }}
        >
          <CurrentSlideComponent />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls - Vertical Right Side */}
      <div className="presentation-controls" style={{
        position: 'fixed',
        right: '30px',
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        zIndex: 100
      }}>
        <motion.button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          whileHover={{ scale: currentSlide === 0 ? 1 : 1.1 }}
          whileTap={{ scale: currentSlide === 0 ? 1 : 0.95 }}
          style={{
            background: currentSlide === 0 
              ? 'rgba(203, 213, 225, 0.3)' 
              : 'linear-gradient(135deg, rgba(107, 166, 68, 0.9) 0%, rgba(139, 195, 74, 0.8) 100%)',
            border: '2px solid rgba(107, 166, 68, 0.5)',
            borderRadius: '15px',
            width: '60px',
            height: '60px',
            cursor: currentSlide === 0 ? 'not-allowed' : 'pointer',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: currentSlide === 0 ? 0.4 : 1,
            boxShadow: currentSlide === 0 ? 'none' : '0 4px 15px rgba(107, 166, 68, 0.3)'
          }}
        >
          <ChevronLeft size={28} color={currentSlide === 0 ? "#94a3b8" : "#ffffff"} />
        </motion.button>

        <motion.button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          whileHover={{ scale: currentSlide === slides.length - 1 ? 1 : 1.1 }}
          whileTap={{ scale: currentSlide === slides.length - 1 ? 1 : 0.95 }}
          style={{
            background: currentSlide === slides.length - 1
              ? 'rgba(203, 213, 225, 0.3)'
              : 'linear-gradient(135deg, rgba(107, 166, 68, 0.9) 0%, rgba(139, 195, 74, 0.8) 100%)',
            border: '2px solid rgba(107, 166, 68, 0.5)',
            borderRadius: '15px',
            width: '60px',
            height: '60px',
            cursor: currentSlide === slides.length - 1 ? 'not-allowed' : 'pointer',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: currentSlide === slides.length - 1 ? 0.4 : 1,
            boxShadow: currentSlide === slides.length - 1 ? 'none' : '0 4px 15px rgba(107, 166, 68, 0.3)'
          }}
        >
          <ChevronRight size={28} color={currentSlide === slides.length - 1 ? "#94a3b8" : "#ffffff"} />
        </motion.button>
      </div>

      {/* Progress Bar */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'rgba(255, 216, 155, 0.1)',
        zIndex: 100
      }}>
        <motion.div
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, #1e3a8a 0%, #6ba644 100%)',
            borderRadius: '2px'
          }}
          initial={{ width: '0%' }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  )
}

export default PlanImplementacionIAMicrotecPresentation