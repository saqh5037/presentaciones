import { motion } from 'framer-motion'

function ClaudeLogo({ className = "w-24 h-24", animated = true }) {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={animated ? {
        rotate: [0, 360],
      } : {}}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      {/* Outer circle with gradient */}
      <defs>
        <linearGradient id="claudeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="50%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Animated rings */}
      <motion.circle
        cx="50"
        cy="50"
        r="45"
        stroke="url(#claudeGradient)"
        strokeWidth="2"
        fill="none"
        filter="url(#glow)"
        animate={{
          r: [45, 48, 45],
          opacity: [1, 0.6, 1]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.circle
        cx="50"
        cy="50"
        r="35"
        stroke="url(#claudeGradient)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
        animate={{
          r: [35, 38, 35],
          opacity: [0.6, 0.3, 0.6]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3
        }}
      />

      {/* Center symbol - Abstract "C" for Claude */}
      <motion.path
        d="M 35 50 Q 35 30, 50 30 T 65 50 Q 65 70, 50 70 T 35 50"
        stroke="url(#claudeGradient)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        filter="url(#glow)"
        animate={{
          pathLength: [0, 1, 1, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.4, 0.6, 1]
        }}
      />

      {/* Code brackets */}
      <motion.text
        x="20"
        y="55"
        fill="url(#claudeGradient)"
        fontSize="20"
        fontFamily="monospace"
        fontWeight="bold"
        animate={{
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        &lt;
      </motion.text>

      <motion.text
        x="72"
        y="55"
        fill="url(#claudeGradient)"
        fontSize="20"
        fontFamily="monospace"
        fontWeight="bold"
        animate={{
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      >
        /&gt;
      </motion.text>

      {/* Floating dots */}
      {[0, 72, 144, 216, 288].map((angle, i) => (
        <motion.circle
          key={i}
          cx={50 + 40 * Math.cos((angle * Math.PI) / 180)}
          cy={50 + 40 * Math.sin((angle * Math.PI) / 180)}
          r="2"
          fill="url(#claudeGradient)"
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut"
          }}
        />
      ))}
    </motion.svg>
  )
}

export default ClaudeLogo