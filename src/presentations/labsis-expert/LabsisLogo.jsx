import { motion } from 'framer-motion'

function LabsisLogo({ size = 200, animated = true }) {
  return (
    <motion.svg
      width={size}
      height={size * 0.4}
      viewBox="0 0 400 160"
      initial={animated ? { opacity: 0, scale: 0.8 } : {}}
      animate={animated ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.4))'
      }}
    >
      {/* Anillo principal */}
      <defs>
        <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7EC8E3" />
          <stop offset="50%" stopColor="#9575CD" />
          <stop offset="100%" stopColor="#BA68C8" />
        </linearGradient>
        <linearGradient id="dotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EF5350" />
          <stop offset="100%" stopColor="#E53935" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Anillo elíptico con efecto 3D */}
      <motion.ellipse
        cx="80"
        cy="80"
        rx="65"
        ry="35"
        fill="none"
        stroke="url(#ringGradient)"
        strokeWidth="20"
        opacity="1"
        transform="rotate(-30 80 80)"
        filter="url(#glow)"
        initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
        animate={animated ? { pathLength: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      
      {/* Sombra sutil del anillo */}
      <ellipse
        cx="82"
        cy="82"
        rx="65"
        ry="35"
        fill="none"
        stroke="rgba(0, 0, 0, 0.3)"
        strokeWidth="18"
        transform="rotate(-30 82 82)"
      />

      {/* Punto rojo */}
      <motion.circle
        cx="100"
        cy="45"
        r="14"
        fill="url(#dotGradient)"
        filter="url(#glow)"
        initial={animated ? { scale: 0 } : { scale: 1 }}
        animate={animated ? { scale: 1 } : {}}
        transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
      />
      
      {/* Sombra sutil del punto rojo */}
      <circle
        cx="101"
        cy="46"
        r="12"
        fill="rgba(0, 0, 0, 0.2)"
      />

      {/* Texto "labsis" con brillo */}
      <motion.g
        initial={animated ? { opacity: 0, x: -20 } : {}}
        animate={animated ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 1, duration: 0.5 }}
      >
        {/* Sombra del texto */}
        <text
          x="162"
          y="97"
          fontFamily="Arial, sans-serif"
          fontSize="72"
          fontWeight="bold"
          fill="rgba(0, 0, 0, 0.5)"
        >
          labsis
        </text>
        {/* Texto principal */}
        <text
          x="160"
          y="95"
          fontFamily="Arial, sans-serif"
          fontSize="72"
          fontWeight="bold"
          fill="#FFFFFF"
        >
          labsis
        </text>
      </motion.g>

      {/* Efecto de brillo animado */}
      {animated && (
        <motion.ellipse
          cx="80"
          cy="80"
          rx="65"
          ry="35"
          fill="none"
          stroke="white"
          strokeWidth="2"
          opacity="0"
          transform="rotate(-30 80 80)"
          animate={{
            opacity: [0, 0.6, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 2
          }}
        />
      )}
    </motion.svg>
  )
}

export default LabsisLogo