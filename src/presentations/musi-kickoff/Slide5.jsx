import { motion } from 'framer-motion'
import { CheckCircle, Layout, Database, Cloud, Globe } from 'lucide-react'

function Slide5() {
  const scopeItems = [
    {
      category: "Funcionalidades Core",
      items: [
        "Dashboard administrativo",
        "Gestión de tiendas múltiples",
        "Editor de layouts 2D/3D",
        "Gestión de planogramas",
        "Sistema de reportería"
      ]
    },
    {
      category: "Integraciones",
      items: [
        "APIs REST para sistemas externos",
        "Sincronización con bases de datos FIFCO",
        "Exportación de datos (Excel, PDF)",
        "Webhooks para notificaciones"
      ]
    },
    {
      category: "Seguridad y Acceso",
      items: [
        "Autenticación multi-factor",
        "Gestión de roles y permisos",
        "Auditoría de cambios",
        "Backup automático de datos"
      ]
    },
    {
      category: "Soporte y Mantenimiento",
      items: [
        "Soporte técnico post-implementación",
        "Actualizaciones de seguridad",
        "Optimización de rendimiento",
        "Capacitación de usuarios"
      ]
    }
  ]

  return (
    <div className="musi-slide">
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Alcance del Proyecto
      </motion.h1>

      <motion.p
        className="subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Entregables y componentes del sistema
      </motion.p>

      <motion.div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '30px',
          maxWidth: '1200px',
          margin: '40px auto'
        }}
      >
        {scopeItems.map((scope, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
            style={{
              background: 'white',
              borderRadius: '12px',
              padding: '30px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              borderTop: '4px solid #E31E24'
            }}
          >
            <h3 style={{ color: '#E31E24', marginBottom: '20px', fontSize: '1.3rem' }}>
              {scope.category}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {scope.items.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 + idx * 0.05, duration: 0.3 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '12px',
                    color: '#666',
                    fontSize: '1rem'
                  }}
                >
                  <CheckCircle size={20} color="#E31E24" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        style={{
          background: 'linear-gradient(135deg, rgba(227, 30, 36, 0.05) 0%, rgba(227, 30, 36, 0.1) 100%)',
          borderRadius: '12px',
          padding: '30px',
          maxWidth: '900px',
          margin: '40px auto',
          border: '1px solid rgba(227, 30, 36, 0.2)'
        }}
      >
        <h3 style={{ color: '#E31E24', marginBottom: '15px' }}>Tecnologías a Utilizar</h3>
        <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center' }}>
            <Layout size={40} color="#E31E24" />
            <p style={{ marginTop: '10px', color: '#666', fontWeight: '600' }}>Angular</p>
            <p style={{ marginTop: '5px', color: '#999', fontSize: '0.9rem' }}>Frontend App</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Database size={40} color="#E31E24" />
            <p style={{ marginTop: '10px', color: '#666', fontWeight: '600' }}>BigQuery</p>
            <p style={{ marginTop: '5px', color: '#999', fontSize: '0.9rem' }}>Base de Datos</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Cloud size={40} color="#E31E24" />
            <p style={{ marginTop: '10px', color: '#666', fontWeight: '600' }}>Cloud Run</p>
            <p style={{ marginTop: '5px', color: '#999', fontSize: '0.9rem' }}>Deployment</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Globe size={40} color="#E31E24" />
            <p style={{ marginTop: '10px', color: '#666', fontWeight: '600' }}>Google Cloud</p>
            <p style={{ marginTop: '5px', color: '#999', fontSize: '0.9rem' }}>Infraestructura</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Slide5