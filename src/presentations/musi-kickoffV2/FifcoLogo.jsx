import React from 'react'

const FifcoLogo = ({ size = 'medium', showRetail = true }) => {
  const sizes = {
    small: { text: '1.5rem', leaf: 30 },
    medium: { text: '2.5rem', leaf: 45 },
    large: { text: '3.5rem', leaf: 60 }
  }
  
  const currentSize = sizes[size] || sizes.medium
  
  return (
    <div className="logo-fifco" style={{ fontSize: currentSize.text }}>
      <div className="logo-fifco-text">
        <span className="logo-fif">FIF</span>
        <span className="logo-co">CO</span>
      </div>
      <div className="logo-leaf" style={{ width: currentSize.leaf, height: currentSize.leaf }}>
        <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="leafGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1B5DAE" />
              <stop offset="100%" stopColor="#4A90E2" />
            </linearGradient>
            <linearGradient id="leafGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4A90E2" />
              <stop offset="100%" stopColor="#5BC0DE" />
            </linearGradient>
            <linearGradient id="leafGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5BC0DE" />
              <stop offset="100%" stopColor="#7BA7E1" />
            </linearGradient>
          </defs>
          
          {/* Hoja con 3 capas */}
          <path 
            d="M30 10 C20 10, 10 20, 10 30 C10 40, 20 50, 30 50 C30 40, 30 30, 30 20 Z" 
            fill="url(#leafGradient1)" 
            opacity="0.9"
          />
          <path 
            d="M30 10 C35 10, 40 15, 40 25 C40 35, 35 45, 30 50 C30 40, 30 30, 30 20 Z" 
            fill="url(#leafGradient2)" 
            opacity="0.8"
          />
          <path 
            d="M30 10 C40 10, 50 20, 50 30 C50 40, 40 50, 30 50 C30 40, 30 30, 30 20 Z" 
            fill="url(#leafGradient3)" 
            opacity="0.7"
          />
          
          {/* Tallo */}
          <line 
            x1="30" y1="50" 
            x2="30" y2="55" 
            stroke="#4A90E2" 
            strokeWidth="2" 
            strokeLinecap="round"
          />
        </svg>
      </div>
      {showRetail && (
        <span className="logo-retail">RETAIL</span>
      )}
    </div>
  )
}

export default FifcoLogo