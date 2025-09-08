import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Menu, X } from 'lucide-react'
import './ClaudeCodeWBIEquipo.css'
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
import Slide11 from './Slide11'
import Slide12 from './Slide12'

const slides = [
  Slide1, Slide2, Slide3, Slide4, Slide5, Slide6,
  Slide7, Slide8, Slide9, Slide10, Slide11, Slide12
]

const slideTitles = [
  '1. Claude Code para WBI',
  '2. Top 5 Time-Killers',
  '3. Junior vs Senior',
  '4. Tu Equipo con Superpoderes',
  '5. Proyecto FIFCO',
  '6. Your Playlist of Features',
  '7. ROI Inmediato',
  '8. Compatible con Tu Stack',
  '9. Tu Código, Tu Control',
  '10. Roadmap 30 Días',
  '11. Reviews del Team',
  '12. Ready to Play?'
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
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: (direction) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    }
  })
}

function ClaudeCodeWBIEquipoPresentation() {
  const navigate = useNavigate()
  const [[currentSlide, direction], setCurrentSlide] = useState([0, 0])
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [showSidebar, setShowSidebar] = useState(false)

  const paginate = (newDirection) => {
    if (isAnimating) return
    
    const newSlide = currentSlide + newDirection
    if (newSlide >= 0 && newSlide < slides.length) {
      setIsAnimating(true)
      setCurrentSlide([newSlide, newDirection])
      setTimeout(() => setIsAnimating(false), 600)
    }
  }

  const goToSlide = (slideIndex) => {
    if (isAnimating || slideIndex === currentSlide) return
    
    setIsAnimating(true)
    const direction = slideIndex > currentSlide ? 1 : -1
    setCurrentSlide([slideIndex, direction])
    setTimeout(() => setIsAnimating(false), 600)
  }

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      await document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') paginate(-1)
      if (e.key === 'ArrowRight') paginate(1)
      if (e.key === 'Escape' && document.fullscreenElement) {
        document.exitFullscreen()
      }
      if (e.key === 'f' || e.key === 'F') toggleFullscreen()
      if (e.key === 'm' || e.key === 'M') setShowSidebar(prev => !prev)
      if (e.key >= '1' && e.key <= '9') {
        const slideNum = parseInt(e.key) - 1
        if (slideNum < slides.length) goToSlide(slideNum)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentSlide, isAnimating])

  const CurrentSlideComponent = slides[currentSlide]

  return (
    <div className="claude-code-wbi-presentation relative w-full h-screen overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVybVVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjE0MiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {showSidebar && (
          <>
            {/* Backdrop to close menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSidebar(false)}
              className="fixed inset-0 z-[60]"
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-16 left-4 z-[70]"
              style={{
                width: '320px',
                background: 'rgba(255, 255, 255, 0.98)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
                maxHeight: '80vh'
              }}
            >
              {/* Header */}
              <div style={{ padding: '16px', borderBottom: '1px solid #e5e7eb' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <div>
                    <h3 style={{ color: '#FFB347', fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Claude Code</h3>
                    <p style={{ color: '#6b7280', fontSize: '12px', marginTop: '4px' }}>WBI Presentation</p>
                  </div>
                  <button
                    onClick={() => setShowSidebar(false)}
                    style={{
                      padding: '6px',
                      borderRadius: '8px',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'background 0.2s'
                    }}
                    onMouseOver={(e) => e.target.style.background = '#f3f4f6'}
                    onMouseOut={(e) => e.target.style.background = 'transparent'}
                  >
                    <X size={18} color="#4b5563" />
                  </button>
                </div>
                
                {/* Navigation Title */}
                <h4 style={{ color: '#111827', fontWeight: '600', fontSize: '14px' }}>Navegación</h4>
              </div>
              
              {/* Slides List - Vertical */}
              <div style={{ 
                maxHeight: 'calc(80vh - 180px)',
                overflowY: 'auto',
                padding: '8px 16px'
              }}>
                {slideTitles.map((title, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      goToSlide(index)
                      setShowSidebar(false)
                    }}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      marginBottom: '4px',
                      display: 'block',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      background: index === currentSlide
                        ? 'linear-gradient(to right, #FFD89B, #FFB347)'
                        : 'transparent'
                    }}
                    onMouseOver={(e) => {
                      if (index !== currentSlide) {
                        e.currentTarget.style.background = '#f3f4f6'
                      }
                    }}
                    onMouseOut={(e) => {
                      if (index !== currentSlide) {
                        e.currentTarget.style.background = 'transparent'
                      }
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        fontWeight: '700',
                        flexShrink: 0,
                        background: index === currentSlide ? 'rgba(255, 255, 255, 0.8)' : '#e5e7eb',
                        color: index === currentSlide ? '#111827' : '#6b7280'
                      }}>
                        {index + 1}
                      </span>
                      <span style={{
                        fontSize: '14px',
                        display: 'block',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        color: index === currentSlide ? '#111827' : '#374151',
                        fontWeight: index === currentSlide ? '600' : '400'
                      }}>
                        {title.split('. ')[1]}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
              
              {/* Footer */}
              <div style={{ 
                padding: '12px 16px',
                borderTop: '1px solid #e5e7eb'
              }}>
                <p style={{ color: '#6b7280', fontSize: '12px', margin: '0 0 4px 0' }}>
                  Usa las flechas ← → para navegar
                </p>
                <p style={{ color: '#6b7280', fontSize: '12px', margin: '0' }}>
                  Presiona F para pantalla completa
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Menu Button */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute top-4 left-4 z-50"
      >
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="p-3 bg-white/10 backdrop-blur-md rounded-lg text-white/80 hover:text-white hover:bg-white/20 transition-all"
          title="Menú de navegación"
        >
          <Menu size={24} />
        </button>
      </motion.div>

      {/* Slide Counter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        style={{
          position: 'absolute',
          top: '15px',
          right: '15px',
          zIndex: 50
        }}
      >
        <div style={{
          background: 'rgba(255, 216, 155, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 216, 155, 0.2)',
          borderRadius: '20px',
          padding: '6px 14px',
          transition: 'all 0.3s ease'
        }}>
          <span style={{
            fontSize: '13px',
            fontWeight: '600',
            background: 'linear-gradient(135deg, #ffd89b 0%, #ffb347 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '0.3px'
          }}>
            {currentSlide + 1} / {slides.length}
          </span>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 flex items-center justify-center p-8"
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-full px-6 py-3">
          <button
            onClick={() => paginate(-1)}
            disabled={currentSlide === 0 || isAnimating}
            className="p-2 text-white/80 hover:text-white disabled:text-white/30 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Slide indicators */}
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? 'w-8 bg-gradient-to-r from-purple-400 to-blue-400'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => paginate(1)}
            disabled={currentSlide === slides.length - 1 || isAnimating}
            className="p-2 text-white/80 hover:text-white disabled:text-white/30 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Keyboard shortcuts hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-4 right-4 text-white/40 text-xs"
      >
        ← → Navegar | F Pantalla completa | 1-9 Ir a slide
      </motion.div>

    </div>
  )
}

export default ClaudeCodeWBIEquipoPresentation