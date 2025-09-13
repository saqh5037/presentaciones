import { motion } from 'framer-motion'

function MicrotecLogo({ size = 'small' }) {
  const isSmall = size === 'small'
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      style={{
        position: isSmall ? 'absolute' : 'relative',
        top: isSmall ? '15px' : 'auto',
        right: isSmall ? '20px' : 'auto',
        zIndex: 10,
        background: 'rgba(255, 255, 255, 0.95)',
        padding: isSmall ? '8px 16px' : '25px 45px',
        borderRadius: isSmall ? '10px' : '15px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
        border: '1px solid rgba(240, 240, 240, 0.8)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)'
      }}
    >
      <img 
        src="/images/microtec-logo.png" 
        alt="Microtec"
        style={{
          height: isSmall ? '35px' : '100px',
          width: 'auto',
          objectFit: 'contain',
          opacity: isSmall ? 0.9 : 1
        }}
        onError={(e) => {
          // Fallback to text version if image doesn't exist
          e.target.style.display = 'none';
          e.target.parentElement.innerHTML = `
            <div style="display: flex; align-items: center; gap: 0;">
              <span style="font-size: ${isSmall ? '1rem' : '2.8rem'}; font-weight: 800; color: #1e3a8a; letter-spacing: -0.02em;">MICRO-</span>
              <span style="font-size: ${isSmall ? '1rem' : '2.8rem'}; font-weight: 800; color: #6ba644; letter-spacing: -0.02em;">TEC</span>
            </div>
            ${!isSmall ? '<div style="font-size: 0.7rem; color: #1e3a8a; letter-spacing: 0.2em; margin-top: -5px; font-weight: 600;">GRUPO</div>' : ''}
          `;
        }}
      />
    </motion.div>
  )
}

export default MicrotecLogo