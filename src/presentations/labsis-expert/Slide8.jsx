import { motion } from 'framer-motion'
import { Lock, Shield, Fingerprint, Award } from 'lucide-react'

function Slide8() {
  const securityFeatures = [
    {
      icon: Award,
      title: 'Máxima Seguridad (Cumplimiento HIPAA)',
      description: 'Supera los más altos estándares de protección de datos de salud.',
      color: '#4caf50'
    },
    {
      icon: Lock,
      title: 'Cifrado Total',
      description: 'Los datos están encriptados y protegidos en todo momento.',
      color: '#667eea'
    },
    {
      icon: Shield,
      title: 'Aislamiento de Datos',
      description: 'La información de los pacientes está completamente aislada y segura.',
      color: '#ffd89b'
    }
  ]

  return (
    <div className="slide">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Seguridad y Privacidad: Nuestra Prioridad #1
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{ marginBottom: '40px', fontSize: '1.2rem' }}
      >
        La confianza es la base de nuestro trabajo. Por eso, Labsis Expert está construido con:
      </motion.p>

      {/* Security Shield Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        style={{ 
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '40px'
        }}
      >
        <div style={{ position: 'relative' }}>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              top: '-20px',
              left: '-20px',
              width: '140px',
              height: '140px',
              borderRadius: '50%',
              border: '3px dashed rgba(255,216,155,0.3)'
            }}
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              top: '-10px',
              left: '-10px',
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              border: '2px dotted rgba(102,126,234,0.3)'
            }}
          />
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              boxShadow: [
                '0 0 20px rgba(76,175,80,0.4)',
                '0 0 40px rgba(76,175,80,0.6)',
                '0 0 20px rgba(76,175,80,0.4)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #4caf50 0%, #45a049 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Shield size={50} color="white" />
          </motion.div>
        </div>
      </motion.div>

      <div className="icons-grid" style={{ marginTop: '50px' }}>
        {securityFeatures.map((feature, index) => {
          const Icon = feature.icon
          return (
            <motion.div
              key={index}
              className="icon-card"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
              }}
            >
              <motion.div
                animate={{ 
                  y: [0, -5, 0],
                }}
                transition={{ 
                  duration: 3,
                  delay: index * 0.5,
                  repeat: Infinity
                }}
              >
                <Icon size={60} color={feature.color} />
              </motion.div>
              <h3 style={{ color: feature.color, marginTop: '20px' }}>
                {feature.title}
              </h3>
              <p style={{ fontSize: '1rem' }}>
                {feature.description}
              </p>
            </motion.div>
          )
        })}
      </div>

      {/* Security Badges */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        style={{ 
          display: 'flex',
          justifyContent: 'center',
          gap: '30px',
          marginTop: '40px'
        }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          style={{
            padding: '15px 30px',
            background: 'rgba(76,175,80,0.1)',
            borderRadius: '30px',
            border: '2px solid #4caf50'
          }}
        >
          <span style={{ color: '#4caf50', fontWeight: 'bold' }}>HIPAA Compliant</span>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          style={{
            padding: '15px 30px',
            background: 'rgba(102,126,234,0.1)',
            borderRadius: '30px',
            border: '2px solid #667eea'
          }}
        >
          <span style={{ color: '#667eea', fontWeight: 'bold' }}>ISO 27001</span>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          style={{
            padding: '15px 30px',
            background: 'rgba(255,216,155,0.1)',
            borderRadius: '30px',
            border: '2px solid #ffd89b'
          }}
        >
          <span style={{ color: '#ffd89b', fontWeight: 'bold' }}>256-bit Encryption</span>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.5 }}
        style={{ 
          marginTop: '40px',
          padding: '25px',
          background: 'linear-gradient(135deg, rgba(76,175,80,0.1) 0%, rgba(102,126,234,0.1) 100%)',
          borderRadius: '20px',
          border: '2px solid rgba(255,255,255,0.2)'
        }}
      >
        <Fingerprint size={30} color="#ffd89b" style={{ marginBottom: '10px' }} />
        <motion.p 
          style={{ 
            fontSize: '1.3rem', 
            color: '#fff',
            fontWeight: 'bold'
          }}
          animate={{ 
            textShadow: [
              '0 0 10px rgba(76,175,80,0.5)',
              '0 0 20px rgba(76,175,80,0.8)',
              '0 0 10px rgba(76,175,80,0.5)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          La seguridad no es una opción, es una garantía.
        </motion.p>
      </motion.div>
    </div>
  )
}

export default Slide8