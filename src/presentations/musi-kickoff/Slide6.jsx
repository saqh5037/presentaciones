import { motion } from 'framer-motion'
import { Monitor, Layers, BarChart, Users, Settings, Bell } from 'lucide-react'

function Slide6() {
  const features = [
    {
      icon: Monitor,
      title: "Dashboard Intuitivo",
      description: "Vista general de todas las tiendas con métricas clave y alertas en tiempo real"
    },
    {
      icon: Layers,
      title: "Visualizador de Espacios",
      description: "Herramienta para visualizar layouts de tienda"
    },
    {
      icon: BarChart,
      title: "Analytics Avanzado",
      description: "Análisis de rendimiento por zona, categoría y periodo de tiempo"
    },
    {
      icon: Users,
      title: "Gestión Multi-usuario",
      description: "Roles personalizados para administradores, supervisores y personal de tienda"
    },
    {
      icon: Settings,
      title: "Configuración Flexible",
      description: "Parámetros ajustables según necesidades específicas de cada tienda"
    },
    {
      icon: Bell,
      title: "Notificaciones Inteligentes",
      description: "Alertas automáticas sobre cambios críticos y oportunidades de mejora"
    }
  ]

  return (
    <div className="musi-slide">
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Funcionalidades Clave
      </motion.h1>

      <motion.p
        className="subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Características principales del sistema
      </motion.p>

      <motion.div className="feature-grid" style={{ maxWidth: '1200px', margin: '40px auto' }}>
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 10px 40px rgba(227, 30, 36, 0.2)'
              }}
            >
              <motion.div
                animate={{ 
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              >
                <Icon size={50} color="#E31E24" style={{ marginBottom: '20px' }} />
              </motion.div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          )
        })}
      </motion.div>

      <motion.div
        className="store-mockup"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        style={{ marginTop: '40px' }}
      >
        <img src="/musi/Desktop - 29.png" alt="Dashboard del Sistema" />
      </motion.div>
    </div>
  )
}

export default Slide6