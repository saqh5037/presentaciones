import { motion } from 'framer-motion'
import { TrendingUp, ShoppingBag, Store, BarChart3 } from 'lucide-react'

function Slide3() {
  return (
    <div className="slide-fifco slide3-about">
      <div className="about-container">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h1 style={{ 
            fontSize: 'var(--text-h1)', 
            color: 'var(--fifco-blue-dark)',
            fontWeight: 'var(--font-weight-bold)',
            marginBottom: '1rem'
          }}>
            Sobre el Proyecto
          </h1>
          <h2 style={{ 
            fontSize: 'var(--text-h3)', 
            color: 'var(--fifco-cyan)',
            fontWeight: 'var(--font-weight-regular)'
          }}>
            Transformación Digital del Retail
          </h2>
        </motion.div>

        <div className="about-split">
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {/* El Desafío */}
            <div className="challenge-card">
              <div className="card-icon">
                <TrendingUp size={24} />
              </div>
              <h3 className="card-title">El Desafío</h3>
              <p className="card-text">
                En el competitivo mercado retail actual, la gestión eficiente de espacios 
                comerciales es crucial para maximizar ventas y mejorar la experiencia del cliente. 
                Musi y Musmanni necesitan una solución tecnológica que les permita optimizar 
                la distribución de productos en sus múltiples puntos de venta.
              </p>
            </div>

            {/* La Solución */}
            <div className="solution-card">
              <div className="card-icon">
                <Store size={24} />
              </div>
              <h3 className="card-title">La Solución</h3>
              <p className="card-text" style={{ marginBottom: '1rem' }}>
                Un sistema integral de gestión de espacios comerciales que permite:
              </p>
              <ul style={{ 
                listStyle: 'none', 
                padding: 0,
                display: 'grid',
                gap: '0.75rem'
              }}>
                {[
                  'Diseño visual e intuitivo de layouts de tienda',
                  'Análisis de rendimiento por ubicación',
                  'Gestión centralizada de múltiples tiendas',
                  'Reportes y analytics en tiempo real'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem'
                    }}
                  >
                    <span style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: 'var(--fifco-cyan)',
                      flexShrink: 0
                    }}></span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div 
            className="about-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}
          >
            {/* Visual Metrics */}
            <div style={{
              padding: '3rem',
              textAlign: 'center',
              position: 'relative',
              zIndex: 1
            }}>
              <h3 style={{ 
                color: 'white', 
                fontSize: 'var(--text-h3)',
                marginBottom: '2rem',
                fontWeight: 'var(--font-weight-bold)'
              }}>
                Beneficios Esperados
              </h3>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '2rem'
              }}>
                {[
                  { value: '70%', label: 'Reducción en tiempo de planificación' },
                  { value: '50%', label: 'Mejora en aprovechamiento del espacio' },
                  { value: '100%', label: 'Centralización de la información' },
                  { value: '24/7', label: 'Decisiones basadas en datos' }
                ].map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      delay: 0.8 + index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ scale: 1.05 }}
                    style={{
                      background: 'linear-gradient(135deg, var(--fifco-blue-dark) 0%, var(--fifco-blue-medium) 100%)',
                      backdropFilter: 'blur(10px)',
                      padding: '1.5rem',
                      borderRadius: '12px',
                      border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}
                  >
                    <div style={{ 
                      fontSize: '2rem', 
                      fontWeight: 'var(--font-weight-bold)',
                      color: 'white',
                      marginBottom: '0.5rem'
                    }}>
                      {metric.value}
                    </div>
                    <div style={{ 
                      fontSize: '0.875rem',
                      color: 'white',
                      lineHeight: 1.4,
                      opacity: 0.9
                    }}>
                      {metric.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Decorative Elements */}
            <div style={{
              position: 'absolute',
              top: '10%',
              left: '10%',
              width: '150px',
              height: '150px',
              background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
              borderRadius: '50%'
            }}></div>
            <div style={{
              position: 'absolute',
              bottom: '10%',
              right: '10%',
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(91,192,222,0.2) 0%, transparent 70%)',
              borderRadius: '50%'
            }}></div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Slide3