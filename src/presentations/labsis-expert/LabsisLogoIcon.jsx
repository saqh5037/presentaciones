import { motion } from 'framer-motion'

function LabsisLogoIcon({ size = 80, animated = true }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      style={{
        filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))'
      }}
    >
      <defs>
        <linearGradient id="ringGradientIcon" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7EC8E3" />
          <stop offset="50%" stopColor="#9575CD" />
          <stop offset="100%" stopColor="#BA68C8" />
        </linearGradient>
        <linearGradient id="dotGradientIcon" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EF5350" />
          <stop offset="100%" stopColor="#E53935" />
        </linearGradient>
      </defs>

      {/* Anillo elíptico */}
      <ellipse
        cx="80"
        cy="80"
        rx="65"
        ry="35"
        fill="none"
        stroke="url(#ringGradientIcon)"
        strokeWidth="16"
        opacity="1"
        transform="rotate(-30 80 80)"
      />
      
      {/* Punto rojo */}
      <circle
        cx="100"
        cy="45"
        r="12"
        fill="url(#dotGradientIcon)"
      />
    </svg>
  )
}

export default LabsisLogoIcon