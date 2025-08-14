import { motion } from 'framer-motion'
import { Beaker, Brain, Activity } from 'lucide-react'
import LabsisLogo from './LabsisLogo'
import LabsisLogoIcon from './LabsisLogoIcon'

function Slide1() {
  return (
    <div className="slide">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          position: 'relative'
        }}
      >
        {/* Contenedor para la animación del logo */}
        <div style={{ 
          height: '200px',
          width: '100%',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '40px'
        }}>
          {/* Logo completo que aparece y explota */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: [0, 1, 1, 1, 0],
              scale: [0.5, 1.2, 1.2, 2, 3],
              rotate: [0, 0, 0, 10, 180]
            }}
            transition={{ 
              duration: 2.5,
              times: [0, 0.12, 0.6, 0.88, 1],
              ease: "easeInOut"
            }}
            style={{ position: 'absolute' }}
          >
            <LabsisLogo size={400} animated={false} />
          </motion.div>
          
          {/* Partículas de explosión */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0, 1, 0],
                x: [0, 0, Math.cos(i * Math.PI / 6) * 250],
                y: [0, 0, Math.sin(i * Math.PI / 6) * 250],
                scale: [0, 0, 1.5, 0.5]
              }}
              transition={{
                duration: 2.5,
                times: [0, 0.72, 0.88, 1],
                ease: "easeOut"
              }}
              style={{
                position: 'absolute',
                width: '15px',
                height: '15px',
                borderRadius: '50%',
                background: i % 2 === 0 ? '#7EC8E3' : '#EF5350',
                boxShadow: '0 0 10px rgba(255,255,255,0.5)'
              }}
            />
          ))}
          
          {/* Logo Icon + Texto que aparece después de la explosión */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              delay: 2.6, 
              duration: 0.6, 
              type: "spring",
              stiffness: 120,
              damping: 10
            }}
            style={{ 
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              gap: '35px',
              whiteSpace: 'nowrap'
            }}
          >
            {/* Logo Icon (solo anillo y punto) con efecto de entrada */}
            <motion.div
              initial={{ rotate: -360, scale: 0 }}
              animate={{ 
                rotate: 0,
                scale: 1
              }}
              transition={{ 
                delay: 2.6,
                duration: 1,
                type: "spring",
                stiffness: 100
              }}
            >
              <motion.div
                animate={{ 
                  rotate: 360,
                }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity,
                  ease: "linear",
                  delay: 3.8
                }}
              >
                <LabsisLogoIcon size={100} animated={false} />
              </motion.div>
            </motion.div>
            
            {/* Texto Labsis Expert en una línea - MÁS GRANDE */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                delay: 2.8,
                duration: 0.6,
                type: "spring"
              }}
              style={{ display: 'flex', alignItems: 'baseline', gap: '20px' }}
            >
              <span style={{ 
                fontSize: '5rem',
                fontWeight: 'bold',
                color: 'white',
                textShadow: '0 6px 12px rgba(0, 0, 0, 0.4)',
                letterSpacing: '-2px'
              }}>
                Labsis
              </span>
              <span style={{ 
                fontSize: '5rem',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #ffd89b 0%, #ffb347 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
                letterSpacing: '-2px'
              }}>
                Expert
              </span>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Subtítulos con espacio dedicado */}
        <div style={{ marginTop: '40px' }}>
          <motion.p 
            className="subtitle"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 3.8, duration: 0.6 }}
            style={{ marginBottom: '20px' }}
          >
            El Futuro del Laboratorio Clínico
          </motion.p>
          
          <motion.p
            style={{ fontSize: '1.3rem', color: '#ffd89b', fontWeight: '500', marginBottom: '40px' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.2, duration: 0.6 }}
          >
            Potenciando la Expertise del Bioanalista
          </motion.p>
        </div>

        {/* Animated Icons */}
        <motion.div 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '60px', 
            marginTop: '30px' 
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.6, duration: 0.6 }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Beaker size={60} color="#ffd89b" />
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Brain size={60} color="#ffd89b" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Activity size={60} color="#ffd89b" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Slide1