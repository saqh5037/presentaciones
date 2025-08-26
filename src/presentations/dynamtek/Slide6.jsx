import { motion } from 'framer-motion'
import { Cpu, Shield, Users, Layers, ArrowRight, Lock } from 'lucide-react'

function Slide6() {
  const techStack = [
    { name: 'Ecosistema Conectado', icon: Layers },
    { name: 'Inteligencia en Tiempo Real', icon: Cpu },
    { name: 'Dashboards Personalizados', icon: Users },
    { name: 'Seguridad HIPAA', icon: Shield }
  ]

  const dashboardViews = [
    {
      title: 'Vista de Mando (C-Suite)',
      items: ['KPIs Estratégicos', 'Métricas Financieras', 'Tendencias del Mercado']
    },
    {
      title: 'Consola de Operaciones',
      items: ['Control Táctico', 'Flujo en Tiempo Real', 'Gestión de Recursos']
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
          Nuestra Ventaja Tecnológica:
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{ 
            fontSize: '2.5rem', 
            color: '#ffd89b',
            marginBottom: '50px',
            textAlign: 'center'
          }}
        >
          Potencia y Simplicidad
        </motion.h2>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{
            background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.1) 0%, rgba(255, 179, 71, 0.05) 100%)',
            border: '2px solid rgba(255, 216, 155, 0.3)',
            borderRadius: '25px',
            padding: '40px',
            marginBottom: '40px',
            position: 'relative'
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '30px'
          }}>
            {/* Input Systems */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              style={{
                flex: 1,
                textAlign: 'center'
              }}
            >
              <h3 style={{ color: '#b0b0b0', fontSize: '1.2rem', marginBottom: '20px' }}>
                Sistemas Actuales
              </h3>
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '10px',
                alignItems: 'center'
              }}>
                {['LIS', 'Finanzas', 'Calidad', 'RRHH'].map((system, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    style={{
                      padding: '10px 20px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '10px',
                      border: '1px solid rgba(255, 216, 155, 0.2)',
                      fontSize: '0.9rem',
                      color: '#e0e0e0'
                    }}
                  >
                    {system}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Arrow */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, duration: 0.4 }}
            >
              <ArrowRight size={40} color="#ffd89b" />
            </motion.div>

            {/* Central Brain */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 1.2, duration: 0.8, type: "spring" }}
              style={{
                flex: 1,
                textAlign: 'center'
              }}
            >
              <motion.div
                animate={{ 
                  boxShadow: [
                    '0 0 20px rgba(255, 216, 155, 0.3)',
                    '0 0 40px rgba(255, 216, 155, 0.5)',
                    '0 0 20px rgba(255, 216, 155, 0.3)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  width: '150px',
                  height: '150px',
                  margin: '0 auto',
                  background: 'linear-gradient(135deg, #ffd89b 0%, #ffb347 100%)',
                  borderRadius: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Cpu size={80} color="#1a1a2e" />
              </motion.div>
              <h3 style={{ color: '#ffd89b', marginTop: '20px', fontSize: '1.4rem' }}>
                Cerebro Digital
              </h3>
              <p style={{ color: '#b0b0b0', fontSize: '0.9rem' }}>
                Procesamiento Inteligente
              </p>
            </motion.div>

            {/* Arrow */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.4, duration: 0.4 }}
            >
              <ArrowRight size={40} color="#ffd89b" />
            </motion.div>

            {/* Output Dashboards */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              style={{
                flex: 1,
                textAlign: 'center'
              }}
            >
              <h3 style={{ color: '#b0b0b0', fontSize: '1.2rem', marginBottom: '20px' }}>
                Dashboards Intuitivos
              </h3>
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '10px',
                alignItems: 'center'
              }}>
                {['CEO View', 'Operaciones', 'Calidad', 'Finanzas'].map((view, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    style={{
                      padding: '10px 20px',
                      background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.1) 0%, rgba(255, 179, 71, 0.05) 100%)',
                      borderRadius: '10px',
                      border: '1px solid #ffd89b',
                      fontSize: '0.9rem',
                      color: '#ffd89b'
                    }}
                  >
                    {view}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="tech-stack"
          style={{ marginBottom: '40px' }}
        >
          {techStack.map((tech, index) => {
            const Icon = tech.icon
            return (
              <motion.div
                key={index}
                className="tech-badge"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2 + index * 0.1, duration: 0.4 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                <Icon size={20} />
                {tech.name}
              </motion.div>
            )
          })}
        </motion.div>

        {/* Dashboard Views */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '30px',
          marginTop: '40px'
        }}>
          {dashboardViews.map((view, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2 + index * 0.2, duration: 0.6 }}
              className="feature-card"
            >
              <h3 style={{ color: '#ffd89b', fontSize: '1.3rem', marginBottom: '20px' }}>
                {view.title}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {view.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 2.4 + index * 0.2 + itemIndex * 0.1, duration: 0.4 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      marginBottom: '10px',
                      color: '#e0e0e0'
                    }}
                  >
                    <ArrowRight size={16} color="#ffd89b" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Security Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.8, duration: 0.6 }}
          style={{
            textAlign: 'center',
            marginTop: '40px',
            padding: '20px',
            background: 'linear-gradient(135deg, rgba(74, 222, 128, 0.1) 0%, rgba(34, 197, 94, 0.05) 100%)',
            border: '2px solid rgba(74, 222, 128, 0.3)',
            borderRadius: '15px'
          }}
        >
          <Lock size={30} color="#4ade80" style={{ marginBottom: '10px' }} />
          <p style={{ color: '#4ade80', fontSize: '1.1rem', fontWeight: '600' }}>
            Confianza Blindada: Seguridad HIPAA Integrada
          </p>
          <p style={{ color: '#b0b0b0', fontSize: '0.9rem', marginTop: '5px' }}>
            [Microsoft Power BI, Quest Diagnostics]
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Slide6