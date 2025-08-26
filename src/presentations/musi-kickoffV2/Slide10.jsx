import { motion } from 'framer-motion'

function Slide10() {
  return (
    <div className="slide-fifco slide10-qa" style={{
      background: 'linear-gradient(135deg, var(--fifco-white) 0%, var(--fifco-gray-light) 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh'
    }}>
      <div className="qa-container">
        <motion.div 
          className="qa-content"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          style={{
            textAlign: 'center',
            padding: '4rem'
          }}
        >
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            style={{
              fontSize: 'clamp(4rem, 8vw, 7rem)',
              color: 'var(--fifco-blue-dark)',
              fontWeight: 'bold',
              marginBottom: '2rem',
              textShadow: '3px 3px 6px rgba(0,0,0,0.1)'
            }}
          >
            ¿Preguntas?
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              color: 'var(--fifco-cyan)',
              marginBottom: '4rem',
              fontWeight: '500'
            }}
          >
            Este es el momento para aclarar cualquier duda sobre el proyecto
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            style={{
              background: 'linear-gradient(135deg, var(--fifco-blue-dark) 0%, var(--fifco-blue-medium) 100%)',
              padding: '3rem',
              borderRadius: '25px',
              maxWidth: '800px',
              margin: '0 auto',
              boxShadow: '0 20px 40px rgba(27, 93, 174, 0.2)'
            }}
          >
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: 'var(--fifco-white)',
              marginBottom: '1rem',
              fontWeight: 'bold'
            }}>
              ¡Gracias por su tiempo!
            </h2>
            <p style={{
              fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
              color: 'var(--fifco-white)',
              opacity: 0.95
            }}>
              Esperamos con entusiasmo trabajar juntos en este proyecto
            </p>
            
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
              style={{
                fontSize: '4rem',
                marginTop: '2rem'
              }}
            >
              🚀
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Slide10