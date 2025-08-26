import { motion } from 'framer-motion'
import { Target, TrendingUp, Users, Zap, Eye, FileText, ShoppingCart, Database, UserCheck, BarChart3 } from 'lucide-react'

function Slide4() {
  const objectives = [
    {
      icon: Eye,
      title: "Visualización y gestión de espacios",
      description: "Brindar sistema que permita la visualización y gestión de los espacios disponibles en tiendas"
    },
    {
      icon: FileText,
      title: "Control de facturación",
      description: "Tener un módulo para llevar el control de la facturación y vinculado a las operaciones de compra y gestión de espacios (sin integración a SAP)"
    },
    {
      icon: ShoppingCart,
      title: "Portal para proveedores",
      description: "Contar con funcionalidades para que los proveedores puedan seleccionar, reservar y comprar espacios directamente desde la plataforma"
    },
    {
      icon: Database,
      title: "Arquitectura escalable",
      description: "Garantizar que la arquitectura del software permita integración en un futuro (Mejora continua) con sistemas existentes de inventarios o CRM (SAP)"
    },
    {
      icon: UserCheck,
      title: "Experiencia de usuario intuitiva",
      description: "Ofrecer una experiencia de usuario intuitiva para el administrador de la tienda como para los proveedores"
    },
    {
      icon: BarChart3,
      title: "Decisiones basadas en datos",
      description: "Facilitar la toma de decisiones basada en datos"
    }
  ]

  return (
    <div className="slide-fifco slide4-objectives">
      <div className="fifco-container">
        <div className="objectives-hero">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: 'var(--text-h1)',
              color: 'var(--fifco-blue-dark)',
              fontWeight: 'var(--font-weight-bold)',
              marginBottom: '1rem'
            }}
          >
            Objetivos Específicos
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              fontSize: 'var(--text-body)',
              color: 'var(--fifco-dark)',
              opacity: 0.8
            }}
          >
            Metas clave para el éxito del proyecto de gestión de espacios comerciales
          </motion.p>
        </div>

        <motion.div
          className="main-objective"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          style={{
            padding: '2rem',
            marginBottom: '2.5rem',
            background: 'linear-gradient(135deg, var(--fifco-blue-dark) 0%, var(--fifco-blue-medium) 100%)',
            borderRadius: '20px',
            boxShadow: '0 15px 35px rgba(27, 93, 174, 0.2)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{
            position: 'absolute',
            top: '-30px',
            right: '-30px',
            width: '150px',
            height: '150px',
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
            borderRadius: '50%'
          }}></div>
          <div className="objective-icon" style={{
            fontSize: '2.5rem',
            marginBottom: '1rem'
          }}>🎯</div>
          <h3 style={{ 
            fontSize: '1.5rem', 
            marginBottom: '1rem',
            fontWeight: 'var(--font-weight-bold)',
            color: 'white',
            textShadow: '0 2px 8px rgba(0,0,0,0.2)'
          }}>
            Objetivo Principal
          </h3>
          <p className="objective-text" style={{
            fontSize: '1.05rem',
            lineHeight: '1.6',
            color: 'white',
            opacity: 0.95,
            position: 'relative',
            zIndex: 1
          }}>
            El proyecto consiste en implementar una plataforma en la cual podamos tener el control de los espacios disponibles a alquilar (catálogo espacios) y los espacios que ya alquilamos a los proveedores, 
            esto para minimizar errores de facturación y poder llevar el control exacto ante cualquier situación que se presente y darles resultados a los proveedores. 
            Beneficio en cuanto a un mayor control automáticamente, poder actualizar los espacios por tiendas desde un sistema para así no tener necesidad de usar un Excel manualmente como es hoy.
          </p>
        </motion.div>

        <div className="objectives-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1.8rem',
          width: '100%',
          marginTop: '2rem'
        }}>
          {objectives.map((obj, index) => {
            const Icon = obj.icon
            return (
              <motion.div
                key={index}
                className="objective-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.15, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 20px 40px rgba(27, 93, 174, 0.25)',
                  transition: { duration: 0.3 }
                }}
                style={{
                  padding: '1.5rem',
                  minHeight: '140px',
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8fbff 100%)',
                  border: '2px solid',
                  borderImage: 'linear-gradient(135deg, var(--fifco-blue-medium), var(--fifco-cyan)) 1',
                  borderRadius: '16px',
                  position: 'relative',
                  boxShadow: '0 8px 20px rgba(27, 93, 174, 0.15)',
                  overflow: 'visible'
                }}
              >
                <div className="objective-card-number" style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '20px',
                  background: 'linear-gradient(135deg, var(--fifco-blue-dark) 0%, var(--fifco-blue-medium) 100%)',
                  color: 'white',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  boxShadow: '0 4px 10px rgba(27, 93, 174, 0.3)'
                }}>{index + 1}</div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem' }}>
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    style={{
                      width: '55px',
                      height: '55px',
                      background: `linear-gradient(135deg, var(--fifco-blue-medium) 0%, var(--fifco-cyan) 100%)`,
                      borderRadius: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: '0 6px 15px rgba(91, 192, 222, 0.3)'
                    }}
                  >
                    <Icon size={28} color="white" />
                  </motion.div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ 
                      color: 'var(--fifco-blue-dark)', 
                      marginBottom: '0.6rem', 
                      fontSize: '1.15rem',
                      fontWeight: 'var(--font-weight-bold)',
                      lineHeight: '1.3',
                      textShadow: '0 2px 4px rgba(0,0,0,0.05)'
                    }}>
                      {obj.title}
                    </h3>
                    <p style={{ 
                      color: 'var(--fifco-dark)', 
                      fontSize: '0.9rem', 
                      lineHeight: '1.5', 
                      textAlign: 'left',
                      opacity: 0.9,
                      fontWeight: '400'
                    }}>
                      {obj.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Slide4