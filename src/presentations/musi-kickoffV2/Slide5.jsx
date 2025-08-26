import { motion } from 'framer-motion'
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react'

function Slide5() {
  const incluido = [
    "Biblioteca de elementos predefinidos (góndolas, exhibidores, etc.)",
    "Gestión multi-tienda desde plataforma centralizada",
    "Sistema de usuarios y permisos por rol",
    "Dashboard con métricas clave de rendimiento",
    "Reportes exportables en múltiples formatos",
    "Integración con sistemas actuales de inventario",
    "Capacitación completa al personal"
  ]

  const excluido = [
    "Modificación de sistemas POS existentes",
    "Hardware adicional (tablets, equipos)",
    "Rediseño físico de tiendas",
    "Gestión de inventario en tiempo real"
  ]

  const supuestos = [
    "Disponibilidad del equipo de FIFCO para sesiones de trabajo",
    "Acceso a información actual de layouts de tienda",
    "Infraestructura de red adecuada en todas las ubicaciones",
    "Aprobaciones oportunas en cada fase del proyecto"
  ]

  return (
    <div className="slide-fifco slide5-scope">
      <div className="scope-container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem' }}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '2.5rem' }}
        >
          <h1 style={{ 
            fontSize: 'clamp(2rem, 4vw, 3rem)', 
            color: 'var(--fifco-blue-dark)',
            fontWeight: 'var(--font-weight-bold)',
            marginBottom: '0.5rem'
          }}>
            Alcance del Proyecto
          </h1>
          <p style={{ 
            fontSize: 'var(--text-body)', 
            color: 'var(--fifco-dark)',
            opacity: 0.8
          }}>
            Definición clara de entregables y límites
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* Incluido en el Alcance */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{
              background: 'linear-gradient(135deg, #E8F5E9 0%, #F1F8E9 100%)',
              borderRadius: '16px',
              padding: '1.5rem',
              border: '2px solid #4CAF50',
              boxShadow: '0 8px 20px rgba(76, 175, 80, 0.15)'
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1.25rem'
            }}>
              <CheckCircle size={28} color="#2E7D32" />
              <h3 style={{
                fontSize: '1.35rem',
                color: '#1B5E20',
                fontWeight: 'bold',
                margin: 0
              }}>
                Incluido en el Alcance
              </h3>
            </div>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {incluido.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.05, duration: 0.4 }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    marginBottom: '0.85rem',
                    color: '#2E7D32',
                    fontSize: '0.95rem',
                    lineHeight: '1.4'
                  }}
                >
                  <span style={{
                    display: 'inline-block',
                    width: '6px',
                    height: '6px',
                    backgroundColor: '#4CAF50',
                    borderRadius: '50%',
                    marginTop: '0.5rem',
                    flexShrink: 0
                  }} />
                  <span style={{ color: '#424242' }}>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Fuera del Alcance */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{
              background: 'linear-gradient(135deg, #FFEBEE 0%, #FFF3E0 100%)',
              borderRadius: '16px',
              padding: '1.5rem',
              border: '2px solid #FF5252',
              boxShadow: '0 8px 20px rgba(255, 82, 82, 0.15)'
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1.25rem'
            }}>
              <XCircle size={28} color="#C62828" />
              <h3 style={{
                fontSize: '1.35rem',
                color: '#B71C1C',
                fontWeight: 'bold',
                margin: 0
              }}>
                Fuera del Alcance
              </h3>
            </div>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {excluido.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.05, duration: 0.4 }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    marginBottom: '0.85rem',
                    color: '#C62828',
                    fontSize: '0.95rem',
                    lineHeight: '1.4'
                  }}
                >
                  <span style={{
                    display: 'inline-block',
                    width: '6px',
                    height: '6px',
                    backgroundColor: '#FF5252',
                    borderRadius: '50%',
                    marginTop: '0.5rem',
                    flexShrink: 0
                  }} />
                  <span style={{ color: '#424242' }}>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Supuestos del Proyecto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          style={{
            background: 'linear-gradient(135deg, #E3F2FD 0%, #E1F5FE 100%)',
            borderRadius: '16px',
            padding: '1.5rem',
            border: '2px solid #2196F3',
            boxShadow: '0 8px 20px rgba(33, 150, 243, 0.15)'
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '1.25rem'
          }}>
            <AlertCircle size={28} color="#1565C0" />
            <h3 style={{
              fontSize: '1.35rem',
              color: '#0D47A1',
              fontWeight: 'bold',
              margin: 0
            }}>
              📋 Supuestos del Proyecto
            </h3>
          </div>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '0.85rem'
          }}>
            {supuestos.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0 + index * 0.05, duration: 0.4 }}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  color: '#1565C0',
                  fontSize: '0.95rem',
                  lineHeight: '1.4'
                }}
              >
                <span style={{
                  display: 'inline-block',
                  minWidth: '8px',
                  minHeight: '8px',
                  backgroundColor: '#2196F3',
                  borderRadius: '2px',
                  marginTop: '0.4rem',
                  flexShrink: 0
                }} />
                <span style={{ color: '#424242' }}>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  )
}

export default Slide5