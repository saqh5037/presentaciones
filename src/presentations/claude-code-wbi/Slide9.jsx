import { motion } from 'framer-motion'
import { Shield, Lock, Eye, CheckCircle, Award, Building } from 'lucide-react'

function Slide9() {
  const securityFeatures = [
    {
      icon: Lock,
      title: "Tu código nunca se usa para entrenar el modelo",
      description: "100% privado y confidencial"
    },
    {
      icon: Shield,
      title: "Cumplimiento SOC 2 Type II",
      description: "Estándares de seguridad enterprise"
    },
    {
      icon: Eye,
      title: "Encriptación end-to-end",
      description: "Protección en tránsito y reposo"
    },
    {
      icon: CheckCircle,
      title: "Sin acceso a datos sensibles",
      description: "Proyecto FIFCO 100% seguro"
    },
    {
      icon: Award,
      title: "Auditable y trazable",
      description: "Logs completos de actividad"
    },
    {
      icon: Building,
      title: "Enterprise-ready",
      description: "Listo para clientes corporativos"
    }
  ]

  return (
    <div className="claude-slide">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ width: '100%', maxWidth: '1400px' }}
      >
        {/* Background Particles Effect */}
        <div className="particles-container">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '10px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
            <Shield size={30} color="#ffd89b" />
            <h1 style={{ margin: 0, fontSize: '2.8rem' }}>Tu Código, Tu Control</h1>
            <Lock size={30} color="#ffd89b" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{ 
            fontSize: '1.5rem', 
            color: '#ffb347',
            marginBottom: '25px',
            textAlign: 'center'
          }}
        >
          Seguridad nivel WBI garantizada
        </motion.p>

        {/* Security Features Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '15px',
          marginBottom: '25px',
          maxWidth: '1300px',
          margin: '0 auto 25px auto'
        }}>
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.1) 0%, rgba(255, 179, 71, 0.05) 100%)',
                  border: '2px solid rgba(255, 216, 155, 0.3)',
                  borderRadius: '20px',
                  padding: '15px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '20px'
                }}>
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 4,
                      delay: index * 0.2,
                      repeat: Infinity
                    }}
                    style={{
                      width: '45px',
                      height: '45px',
                      background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.2) 0%, rgba(255, 179, 71, 0.1) 100%)',
                      border: '2px solid #ffd89b',
                      borderRadius: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Icon size={22} color="#ffd89b" />
                  </motion.div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: '1rem',
                      color: '#ffd89b',
                      fontWeight: '700',
                      marginBottom: '8px'
                    }}>
                      {feature.title}
                    </h3>
                    <p style={{
                      fontSize: '0.85rem',
                      color: '#e0e0e0',
                      margin: 0
                    }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Security Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            marginBottom: '20px',
            flexWrap: 'wrap'
          }}
        >
          {['SOC2', 'ISO', 'GDPR', 'HIPAA'].map((badge, index) => (
            <motion.div
              key={badge}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 + index * 0.1 }}
              whileHover={{ y: -5 }}
              style={{
                background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.15) 0%, rgba(255, 179, 71, 0.08) 100%)',
                border: '2px solid #ffd89b',
                borderRadius: '15px',
                padding: '12px 20px',
                textAlign: 'center',
                cursor: 'pointer'
              }}
            >
              <p style={{
                fontSize: '1rem',
                color: '#ffd89b',
                fontWeight: '700',
                marginBottom: '5px'
              }}>
                {badge}
              </p>
              <div style={{ display: 'flex', gap: '2px' }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: '#ffb347', fontSize: '1.2rem' }}>⭐</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* FIFCO Project Security Note */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5 }}
          style={{ textAlign: 'center' }}
        >
          <div style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.15) 0%, rgba(255, 179, 71, 0.08) 100%)',
            border: '3px solid #ffd89b',
            borderRadius: '30px',
            padding: '20px 35px',
            boxShadow: '0 20px 40px rgba(255, 216, 155, 0.3)'
          }}>
            <motion.div
              animate={{
                scale: [1, 1.02, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            >
              <p style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#ffd89b',
                marginBottom: '15px'
              }}>
                ✅ Proyecto FIFCO: 100% Privado y Seguro
              </p>
              <p style={{
                fontSize: '1.1rem',
                color: '#e0e0e0',
                marginBottom: '8px'
              }}>
                Tu código del proyecto nunca sale de tu organización
              </p>
              <p style={{
                fontSize: '0.95rem',
                color: '#ffb347'
              }}>
                Cumple con todos los requisitos de seguridad corporativa
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Slide9