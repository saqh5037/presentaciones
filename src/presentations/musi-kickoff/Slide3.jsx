import { motion } from 'framer-motion'
import { Store, MapPin, Package, BarChart3 } from 'lucide-react'

function Slide3() {
  return (
    <div className="musi-slide">
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Sobre el Proyecto
      </motion.h1>

      <motion.p
        className="subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Sistema de Gestión de Espacios Comerciales
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        style={{
          background: 'white',
          borderRadius: '12px',
          padding: '40px',
          maxWidth: '900px',
          margin: '40px auto',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
        }}
      >
        <h3 style={{ color: '#E31E24', marginBottom: '20px', fontSize: '1.6rem' }}>
          Contexto del Negocio
        </h3>
        <p style={{ textAlign: 'left', lineHeight: '1.8', marginBottom: '30px' }}>
          Musi y Mussmanni requieren una plataforma digital moderna para gestionar eficientemente 
          sus espacios comerciales, permitiendo visualización de layouts de tienda, gestión de 
          planogramas y optimización de la distribución de productos en múltiples ubicaciones.
        </p>

        <div className="feature-grid" style={{ marginTop: '40px' }}>
          <motion.div
            className="feature-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <Store size={40} color="#E31E24" style={{ marginBottom: '15px' }} />
            <h3>Gestión de Tiendas</h3>
            <p>Control centralizado de todas las tiendas Musi y Mussmanni en Costa Rica</p>
          </motion.div>

          <motion.div
            className="feature-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <MapPin size={40} color="#E31E24" style={{ marginBottom: '15px' }} />
            <h3>Visualización 3D</h3>
            <p>Planos interactivos en 2D y 3D para mejor comprensión del espacio</p>
          </motion.div>

          <motion.div
            className="feature-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <Package size={40} color="#E31E24" style={{ marginBottom: '15px' }} />
            <h3>Planogramas</h3>
            <p>Gestión y optimización de la distribución de productos en góndolas</p>
          </motion.div>

          <motion.div
            className="feature-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <BarChart3 size={40} color="#E31E24" style={{ marginBottom: '15px' }} />
            <h3>Reportería</h3>
            <p>Análisis de rendimiento y optimización de espacios comerciales</p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="store-mockup"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <img src="/musi/Desktop - 30.png" alt="Mockup 3D de Tienda" />
      </motion.div>
    </div>
  )
}

export default Slide3