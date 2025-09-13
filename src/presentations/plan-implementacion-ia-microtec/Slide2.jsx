import { motion } from 'framer-motion'
import { Code, Package, Layers, GitBranch, DollarSign, Monitor, Server, Brain, Database, Cloud } from 'lucide-react'
import MicrotecLogo from './MicrotecLogo'

function Slide2() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  const principles = [
    { icon: <Code size={30} />, title: 'Build vs Buy', desc: 'Desarrollar soluciones a la medida cuando sea posible', color: '#1e3a8a' },
    { icon: <Package size={30} />, title: 'Open Source First', desc: 'Preferir tecnologías abiertas y adaptables', color: '#6ba644' },
    { icon: <Layers size={30} />, title: 'APIs como base', desc: 'Todo debe ser modular e integrable', color: '#ef4444' },
    { icon: <GitBranch size={30} />, title: 'Quick Wins continuos', desc: 'Valor visible cada mes', color: '#1e3a8a' },
    { icon: <DollarSign size={30} />, title: 'Inversión progresiva', desc: 'Crecer según resultados', color: '#6ba644' }
  ]

  const stackLayers = [
    { 
      icon: <Monitor size={35} />,
      name: 'Frontend & Mobile', 
      tech: 'React + Progressive Web App',
      details: ['Dashboard Analytics', 'App Móvil', 'Portal Clientes'],
      color: '#1e3a8a' 
    },
    { 
      icon: <Server size={35} />,
      name: 'Backend & APIs', 
      tech: 'Node.js + FastAPI + GraphQL',
      details: ['REST APIs', 'Microservicios', 'WebSockets'],
      color: '#6ba644' 
    },
    { 
      icon: <Brain size={35} />,
      name: 'Inteligencia Artificial', 
      tech: 'TensorFlow + LangChain + OpenAI',
      details: ['ML Models', 'NLP', 'Computer Vision'],
      color: '#ef4444' 
    },
    { 
      icon: <Database size={35} />,
      name: 'Datos & Storage', 
      tech: 'PostgreSQL + MongoDB + S3',
      details: ['Data Lake', 'Cache Redis', 'Backups'],
      color: '#1e3a8a' 
    },
    { 
      icon: <Cloud size={35} />,
      name: 'Cloud AWS', 
      tech: 'EC2 + Lambda + RDS',
      details: ['Auto-scaling', 'CDN CloudFront', 'Pay-as-you-go'],
      color: '#6ba644' 
    }
  ]

  return (
    <div className="microtec-slide">
      <MicrotecLogo size="small" />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ width: '100%' }}
      >
        <motion.h1 variants={itemVariants} style={{ 
          fontSize: '3rem', 
          margin: 0,
          marginBottom: '8px',
          color: '#1e3a8a',
          fontWeight: '900',
          cursor: 'pointer',
          letterSpacing: '-0.02em',
          WebkitTextFillColor: '#1e3a8a',
          textFillColor: '#1e3a8a'
        }}>
          Filosofía de Implementación
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="subtitle"
          style={{ fontSize: '1.3rem', marginBottom: '20px', color: '#475569', fontWeight: '500' }}
        >
          Principios fundamentales y arquitectura técnica
        </motion.p>

        {/* Principles Grid */}
        <motion.div
          variants={itemVariants}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '15px',
            marginBottom: '25px'
          }}
        >
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              style={{
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                boxShadow: '0 8px 32px rgba(59, 130, 246, 0.12)',
                borderRadius: '20px',
                padding: '18px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transformStyle: 'preserve-3d',
                transform: 'perspective(1000px)'
              }}
            >
              <div style={{ color: principle.color, marginBottom: '10px', opacity: 0.8 }}>
                {principle.icon}
              </div>
              <motion.h3 
                whileHover={{ scale: 1.1, color: '#6ba644' }}
                transition={{ duration: 0.2 }}
                style={{ 
                  color: '#1e3a8a', 
                  fontSize: '1.1rem', 
                  marginBottom: '8px',
                  fontWeight: '700',
                  cursor: 'pointer'
                }}>
                {principle.title}
              </motion.h3>
              <p style={{ 
                fontSize: '0.95rem', 
                color: '#1e293b',
                fontWeight: '500',
                lineHeight: '1.4'
              }}>
                {principle.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Architecture Stack - New Design */}
        <motion.h2 
          variants={itemVariants}
          style={{ 
            textAlign: 'center', 
            marginBottom: '20px',
            marginTop: '15px',
            color: '#1e3a8a',
            fontSize: '2rem',
            fontWeight: '700'
          }}
        >
          Stack Tecnológico Completo
        </motion.h2>

        <motion.div
          variants={itemVariants}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '15px',
            marginBottom: '30px'
          }}
        >
          {stackLayers.map((layer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { duration: 0.2 }
              }}
              style={{
                background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(250, 255, 254, 0.9) 100%)',
                border: `2px solid ${layer.color}30`,
                borderTop: `4px solid ${layer.color}`,
                boxShadow: '0 8px 32px rgba(59, 130, 246, 0.08)',
                borderRadius: '15px',
                padding: '20px',
                position: 'relative',
                overflow: 'hidden',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)'
              }}
            >
              {/* Icon */}
              <div style={{ 
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '15px',
                color: layer.color,
                opacity: 0.9
              }}>
                {layer.icon}
              </div>
              
              {/* Layer Name */}
              <h4 style={{ 
                fontSize: '1.1rem', 
                color: layer.color,
                fontWeight: '700',
                marginBottom: '10px',
                textAlign: 'center'
              }}>
                {layer.name}
              </h4>
              
              {/* Technologies */}
              <div style={{ 
                fontSize: '0.9rem', 
                color: '#1e293b',
                fontWeight: '600',
                marginBottom: '12px',
                textAlign: 'center',
                borderBottom: `1px solid ${layer.color}20`,
                paddingBottom: '10px'
              }}>
                {layer.tech}
              </div>
              
              {/* Details */}
              <div style={{ marginTop: '10px' }}>
                {layer.details.map((detail, i) => (
                  <div key={i} style={{
                    fontSize: '0.8rem',
                    color: '#475569',
                    marginBottom: '5px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}>
                    <span style={{ 
                      width: '4px', 
                      height: '4px', 
                      background: layer.color,
                      borderRadius: '50%',
                      flexShrink: 0
                    }} />
                    {detail}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Benefits */}
        <motion.div
          variants={itemVariants}
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: '30px',
            flexWrap: 'wrap',
            gap: '30px'
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <motion.div
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ 
                fontSize: '2.5rem', 
                fontWeight: 'bold',
                color: '#1e3a8a',
                cursor: 'pointer'
              }}>
              100%
            </motion.div>
            <div style={{ color: '#1e293b', fontSize: '1rem', fontWeight: '600' }}>Open Source</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <motion.div
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ 
                fontSize: '2.5rem', 
                fontWeight: 'bold',
                color: '#6ba644',
                cursor: 'pointer'
              }}>
              Modular
            </motion.div>
            <div style={{ color: '#1e293b', fontSize: '1rem', fontWeight: '600' }}>Arquitectura</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <motion.div
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ 
                fontSize: '2.5rem', 
                fontWeight: 'bold',
                color: '#ef4444',
                cursor: 'pointer'
              }}>
              Escalable
            </motion.div>
            <div style={{ color: '#1e293b', fontSize: '1rem', fontWeight: '600' }}>Crecimiento</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Slide2