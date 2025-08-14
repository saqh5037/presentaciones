import { motion } from 'framer-motion'
import { Target, TrendingUp, Users, Zap } from 'lucide-react'

function Slide4() {
  const objectives = [
    {
      icon: TrendingUp,
      title: "Optimizar la gestión de espacios",
      description: "Maximizar el aprovechamiento del espacio disponible en cada tienda mediante herramientas digitales avanzadas"
    },
    {
      icon: Users,
      title: "Mejorar la experiencia del cliente",
      description: "Facilitar la navegación y compra mediante una distribución estratégica de productos"
    },
    {
      icon: Zap,
      title: "Agilizar procesos operativos",
      description: "Reducir tiempos de planificación y ejecución de cambios en layouts de tienda"
    },
    {
      icon: Target,
      title: "Centralizar la información",
      description: "Unificar la gestión de todas las tiendas en una plataforma única y accesible"
    }
  ]

  return (
    <div className="musi-slide">
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Objetivos del Proyecto
      </motion.h1>

      <motion.p
        className="subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Metas clave para el éxito del proyecto
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        whileHover={{ scale: 1.02 }}
        style={{
          background: 'white',
          borderRadius: '16px',
          padding: '30px',
          maxWidth: '850px',
          margin: '20px auto',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
          border: '3px solid #E31E24'
        }}
      >
        <motion.h3 
          style={{ 
            fontSize: '1.8rem', 
            marginBottom: '20px',
            color: '#E31E24',
            fontWeight: '700'
          }}
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🎯 Objetivo Principal
        </motion.h3>
        <p style={{ 
          fontSize: '1.2rem', 
          lineHeight: '1.8',
          color: '#333',
          fontWeight: '400'
        }}>
          Desarrollar e implementar un <strong style={{ color: '#E31E24' }}>sistema integral de gestión</strong> de espacios comerciales 
          que permita a Musi y Mussmanni <strong style={{ color: '#E31E24' }}>optimizar la distribución</strong> de sus productos y 
          mejorar la <strong style={{ color: '#E31E24' }}>eficiencia operativa</strong> en todas sus tiendas.
        </p>
      </motion.div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(2, 1fr)', 
        gap: '20px',
        maxWidth: '950px',
        margin: '20px auto'
      }}>
        {objectives.map((obj, index) => {
          const Icon = obj.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              style={{
                background: 'white',
                borderRadius: '12px',
                padding: '20px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                borderLeft: '4px solid #E31E24',
                cursor: 'pointer'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'rgba(227, 30, 36, 0.1)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Icon size={30} color="#E31E24" />
                </div>
                <div>
                  <h3 style={{ color: '#333', marginBottom: '10px', fontSize: '1.2rem' }}>
                    {obj.title}
                  </h3>
                  <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.5', textAlign: 'left' }}>
                    {obj.description}
                  </p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

    </div>
  )
}

export default Slide4