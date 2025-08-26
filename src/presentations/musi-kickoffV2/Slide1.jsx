import { motion } from 'framer-motion'

function Slide1() {
  return (
    <div className="slide-fifco slide1-hero" style={{ 
      width: '100vw', 
      height: '100vh', 
      padding: 0,
      margin: 0,
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #FFFFFF 0%, #F5F8FA 50%, #E8EEF2 100%)'
    }}>
      {/* Geometric Overlay */}
      <div className="geometric-overlay" style={{ opacity: 0.1 }}>
        <div className="diagonal-shape diagonal-shape-1"></div>
        <div className="diagonal-shape diagonal-shape-2"></div>
        <div className="diagonal-shape diagonal-shape-3"></div>
      </div>

      <div className="hero-content" style={{
        width: '100%',
        maxWidth: '100%',
        padding: '2rem 4rem',
        boxSizing: 'border-box'
      }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Logos Animados */}
          <motion.div 
            className="logo-container"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              marginBottom: '4rem',
              padding: '0 10%'
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{
                background: 'white',
                padding: '1.5rem',
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(27, 93, 174, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img 
                src="/musi/logoFifcoRetail.png" 
                alt="FIFCO Retail" 
                style={{
                  height: '75px',
                  width: 'auto',
                  objectFit: 'contain'
                }}
              />
            </motion.div>
            
            <motion.div 
              style={{ 
                textAlign: 'center',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                padding: '1.5rem 2.5rem',
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src="/musi/WBI-Logo-Blanco.png" 
                alt="WBI Innovations" 
                style={{
                  height: '75px',
                  width: 'auto',
                  objectFit: 'contain'
                }}
              />
            </motion.div>
          </motion.div>

          {/* Título Principal con Efecto */}
          <motion.h1 
            className="hero-title"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              textAlign: 'center',
              lineHeight: 1.2,
              marginBottom: '2rem',
              color: 'var(--fifco-blue-dark)',
              fontWeight: 'var(--font-weight-bold)'
            }}
          >
            Sistema de Gestión de
            <br />
            <span style={{
              color: 'var(--fifco-blue-dark)',
              fontSize: 'clamp(3.5rem, 7vw, 6rem)',
              fontWeight: 'var(--font-weight-bold)'
            }}>
              Espacios Comerciales
            </span>
          </motion.h1>
          
          <motion.h2
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              textAlign: 'center',
              marginBottom: '3rem',
              color: 'var(--fifco-blue-medium)',
              fontWeight: 'var(--font-weight-semibold)'
            }}
          >
            Kickoff Meeting • RFP-IMS-2025
          </motion.h2>

          {/* Info Cards con Diseño FIFCO */}
          <motion.div
            className="hero-info"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '2rem',
              width: '100%',
              maxWidth: '1400px',
              margin: '0 auto'
            }}
          >
            <motion.div 
              className="hero-info-item"
              whileHover={{ 
                scale: 1.1,
                filter: 'brightness(1.1)'
              }}
              style={{
                background: 'white',
                padding: '2rem 3rem',
                borderRadius: '20px',
                border: '2px solid var(--fifco-blue-light)',
                boxShadow: '0 10px 30px rgba(27, 93, 174, 0.1)',
                flex: 1,
                textAlign: 'center'
              }}
            >
              <div style={{ 
                fontSize: '0.9rem',
                color: 'var(--fifco-blue-medium)',
                fontWeight: 'var(--font-weight-semibold)',
                marginBottom: '0.5rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>CLIENTE</div>
              <div style={{
                fontSize: '1.8rem',
                color: 'var(--fifco-blue-dark)',
                fontWeight: 'var(--font-weight-bold)',
                marginBottom: '0.25rem'
              }}>Musi / Musmanni</div>
              <div style={{ 
                fontSize: '1rem', 
                color: 'var(--fifco-cyan)',
                fontWeight: 'var(--font-weight-medium)'
              }}>
                FIFCO
              </div>
            </motion.div>

            <motion.div 
              className="hero-info-item"
              whileHover={{ 
                scale: 1.1,
                filter: 'brightness(1.1)'
              }}
              style={{
                background: 'white',
                padding: '2rem 3rem',
                borderRadius: '20px',
                border: '2px solid var(--fifco-blue-light)',
                boxShadow: '0 10px 30px rgba(27, 93, 174, 0.1)',
                flex: 1,
                textAlign: 'center'
              }}
            >
              <div style={{ 
                fontSize: '0.9rem',
                color: 'var(--fifco-blue-medium)',
                fontWeight: 'var(--font-weight-semibold)',
                marginBottom: '0.5rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>DURACIÓN</div>
              <div style={{
                fontSize: '1.8rem',
                color: 'var(--fifco-blue-dark)',
                fontWeight: 'var(--font-weight-bold)',
                marginBottom: '0.25rem'
              }}>6 Meses</div>
              <div style={{ 
                fontSize: '1rem', 
                color: 'var(--fifco-cyan)',
                fontWeight: 'var(--font-weight-medium)'
              }}>
                Ago 2025 - Ene 2026
              </div>
            </motion.div>
          </motion.div>

          {/* Animated Scroll Indicator */}
          <motion.div
            style={{ 
              marginTop: '3rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            animate={{ 
              y: [0, 10, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span style={{ 
              color: 'var(--fifco-blue-medium)', 
              fontSize: '1rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontWeight: 'var(--font-weight-semibold)'
            }}>
              Scroll para continuar
            </span>
            <svg 
              width="30" 
              height="30" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              style={{ color: 'var(--fifco-blue-dark)' }}
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Slide1