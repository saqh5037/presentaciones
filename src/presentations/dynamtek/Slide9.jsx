import { motion } from 'framer-motion'
import { AlertTriangle, TrendingDown, Clock, ArrowUpRight } from 'lucide-react'

function Slide9() {
  const risks = [
    {
      icon: TrendingDown,
      title: 'El Mercado no Espera',
      description: 'La complejidad de las pruebas diagnósticas solo va a aumentar. Quien no se adapte, se quedará atrás.'
    },
    {
      icon: Clock,
      title: 'El Costo de la Inacción',
      description: 'Cada día que operamos con puntos ciegos es un día que perdemos eficiencia, calidad y ventaja competitiva.'
    },
    {
      icon: ArrowUpRight,
      title: 'El Mandato del Liderazgo',
      description: 'Nuestra posición en el mercado exige que demos el siguiente paso audaz. Esta es nuestra oportunidad para definir el futuro.'
    }
  ]

  return (
    <div className="dynamtek-slide">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ width: '100%', maxWidth: '1200px' }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          La Encrucijada Estratégica:
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{ 
            fontSize: '3rem', 
            color: '#ffd89b',
            marginBottom: '50px',
            textAlign: 'center'
          }}
        >
          Liderar o Seguir
        </motion.h2>

        {/* Central Alert Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{
            background: 'linear-gradient(135deg, rgba(255, 150, 50, 0.15) 0%, rgba(255, 100, 0, 0.08) 100%)',
            border: '3px solid #ff9632',
            borderRadius: '25px',
            padding: '40px',
            marginBottom: '50px',
            textAlign: 'center',
            position: 'relative'
          }}
        >
          <motion.div
            animate={{ 
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3
            }}
            style={{ marginBottom: '20px' }}
          >
            <AlertTriangle size={60} color="#ff9632" />
          </motion.div>
          
          <h3 style={{
            fontSize: '2rem',
            color: '#ff9632',
            marginBottom: '20px',
            fontWeight: '700'
          }}>
            El Momento es Ahora
          </h3>
          
          <p style={{
            fontSize: '1.3rem',
            color: '#ffffff',
            lineHeight: '1.8'
          }}>
            La decisión que tomemos hoy determinará si lideramos la industria 
            o nos convertimos en seguidores del cambio
          </p>
        </motion.div>

        {/* Risk Cards */}
        <div className="feature-grid" style={{ marginBottom: '50px' }}>
          {risks.map((risk, index) => {
            const Icon = risk.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                className="feature-card"
                whileHover={{ 
                  scale: 1.03,
                  borderColor: '#ff9632',
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div
                  className="feature-icon"
                  style={{ 
                    background: 'linear-gradient(135deg, #ff9632 0%, #ff7a1a 100%)'
                  }}
                  whileHover={{ rotate: 15 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon size={35} />
                </motion.div>
                
                <h3 className="feature-title" style={{ color: '#ff9632' }}>
                  {risk.title}
                </h3>
                
                <p className="feature-description">
                  {risk.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Decision Matrix */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '30px',
            marginBottom: '40px'
          }}
        >
          {/* Option 1: Act Now */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            style={{
              background: 'linear-gradient(135deg, rgba(74, 222, 128, 0.1) 0%, rgba(34, 197, 94, 0.05) 100%)',
              border: '2px solid #4ade80',
              borderRadius: '20px',
              padding: '30px',
              textAlign: 'center'
            }}
          >
            <h3 style={{ color: '#4ade80', fontSize: '1.5rem', marginBottom: '20px' }}>
              Si Actuamos Ahora
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left' }}>
              {['Liderazgo del mercado', 'Ventaja competitiva', 'ROI exponencial', 'Atracción de talento'].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.6 + i * 0.1, duration: 0.4 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '10px',
                    color: '#e0e0e0'
                  }}
                >
                  <ArrowUpRight size={16} color="#4ade80" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Option 2: Wait */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            style={{
              background: 'linear-gradient(135deg, rgba(255, 100, 100, 0.1) 0%, rgba(255, 50, 50, 0.05) 100%)',
              border: '2px solid #ff6b6b',
              borderRadius: '20px',
              padding: '30px',
              textAlign: 'center'
            }}
          >
            <h3 style={{ color: '#ff6b6b', fontSize: '1.5rem', marginBottom: '20px' }}>
              Si Esperamos
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left' }}>
              {['Pérdida de competitividad', 'Costos crecientes', 'Talento fugándose', 'Reacción tardía'].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.6 + i * 0.1, duration: 0.4 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '10px',
                    color: '#e0e0e0'
                  }}
                >
                  <TrendingDown size={16} color="#ff6b6b" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="cta-section"
        >
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              fontSize: '1.4rem',
              padding: '25px 60px'
            }}
          >
            Es Hora de Decidir
          </motion.button>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.6 }}
            style={{
              marginTop: '20px',
              fontSize: '1.2rem',
              color: '#b0b0b0',
              fontStyle: 'italic'
            }}
          >
            "El futuro pertenece a quienes se preparan para él hoy"
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Slide9