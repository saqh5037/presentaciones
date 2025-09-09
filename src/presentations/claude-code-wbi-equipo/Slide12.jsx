import { motion } from 'framer-motion'
import { Star, MessageCircle, Quote } from 'lucide-react'
import { useState } from 'react'

function Slide12() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      quote: "Como Junior, ahora codifico al nivel de un Semi-Senior",
      author: "Dev Junior",
      role: "después de 1 semana",
      avatar: "👨‍💻",
      rating: 5,
      impact: "+300% productividad"
    },
    {
      quote: "Reduje el tiempo de QA en 70% con tests automáticos",
      author: "QA Engineer",
      role: "después de 3 días",
      avatar: "👩‍💻",
      rating: 5,
      impact: "95% coverage"
    },
    {
      quote: "Los componentes salen perfectos desde el diseño",
      author: "UI/UX Team",
      role: "después de 1 día",
      avatar: "🎨",
      rating: 5,
      impact: "144x más rápido"
    },
    {
      quote: "Es como tener un mentor 24/7 que conoce todas las mejores prácticas",
      author: "Dev Semi-Senior",
      role: "después de 2 semanas",
      avatar: "🚀",
      rating: 5,
      impact: "Senior level code"
    },
    {
      quote: "Refactoricé todo nuestro código legacy en 3 días",
      author: "Tech Lead",
      role: "proyecto real",
      avatar: "💡",
      rating: 5,
      impact: "3 meses → 3 días"
    }
  ]

  return (
    <div className="claude-slide">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ width: '100%', maxWidth: '1400px' }}
      >
        {/* Background Particles Effect */}
        <div className="particles-container">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '10px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.2) 0%, rgba(255, 179, 71, 0.1) 100%)',
                border: '2px solid #ffd89b',
                borderRadius: '12px'
              }}
            >
              <MessageCircle size={22} color="#ffd89b" />
            </motion.div>
            <h1 style={{ margin: 0, fontSize: '2.8rem' }}>Reviews del Team</h1>
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, -10, 10, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.2) 0%, rgba(255, 179, 71, 0.1) 100%)',
                border: '2px solid #ffd89b',
                borderRadius: '12px'
              }}
            >
              <Quote size={22} color="#ffd89b" />
            </motion.div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{ 
            fontSize: '1.5rem', 
            color: '#ffb347',
            marginBottom: '25px',
            textAlign: 'center'
          }}
        >
          Lo que dicen los Early Adopters
        </motion.p>

        {/* Main testimonial display */}
        <div style={{ marginBottom: '20px' }}>
          <motion.div
            key={activeTestimonial}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div style={{
              background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.15) 0%, rgba(255, 179, 71, 0.08) 100%)',
              border: '3px solid #ffd89b',
              borderRadius: '30px',
              padding: '20px',
              boxShadow: '0 20px 40px rgba(255, 216, 155, 0.3)'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
              }}>
                {/* Avatar */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity
                  }}
                  style={{
                    fontSize: '3rem',
                    marginBottom: '15px'
                  }}
                >
                  {testimonials[activeTestimonial].avatar}
                </motion.div>

                {/* Quote */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  style={{
                    fontSize: '1.4rem',
                    color: '#e0e0e0',
                    fontWeight: '600',
                    marginBottom: '20px',
                    maxWidth: '900px',
                    lineHeight: '1.4'
                  }}
                >
                  {testimonials[activeTestimonial].quote}
                </motion.p>

                {/* Author */}
                <div style={{ marginBottom: '15px' }}>
                  <p style={{
                    fontSize: '1.2rem',
                    color: '#ffd89b',
                    fontWeight: '700',
                    marginBottom: '5px'
                  }}>
                    {testimonials[activeTestimonial].author}
                  </p>
                  <p style={{
                    fontSize: '0.95rem',
                    color: '#ffb347'
                  }}>
                    {testimonials[activeTestimonial].role}
                  </p>
                </div>

                {/* Rating */}
                <div style={{
                  display: 'flex',
                  gap: '5px',
                  marginBottom: '15px'
                }}>
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <Star size={22} color="#ffd89b" fill="#ffd89b" />
                    </motion.div>
                  ))}
                </div>

                {/* Impact badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  style={{
                    background: 'linear-gradient(135deg, rgba(74, 222, 128, 0.2) 0%, rgba(34, 197, 94, 0.1) 100%)',
                    border: '2px solid #4ade80',
                    borderRadius: '50px',
                    padding: '10px 25px'
                  }}
                >
                  <p style={{
                    fontSize: '1.1rem',
                    color: '#4ade80',
                    fontWeight: '700',
                    margin: 0
                  }}>
                    {testimonials[activeTestimonial].impact}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Testimonial selector */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '15px',
          marginBottom: '20px'
        }}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              style={{
                height: '12px',
                borderRadius: '10px',
                transition: 'all 0.3s ease',
                border: 'none',
                cursor: 'pointer',
                width: index === activeTestimonial ? '50px' : '12px',
                background: index === activeTestimonial
                  ? 'linear-gradient(90deg, #ffd89b 0%, #ffb347 100%)'
                  : 'rgba(255, 216, 155, 0.3)'
              }}
            />
          ))}
        </div>

        {/* Success metric */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          style={{ textAlign: 'center' }}
        >
          <div style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, rgba(255, 216, 155, 0.15) 0%, rgba(255, 179, 71, 0.08) 100%)',
            border: '3px solid #ffd89b',
            borderRadius: '30px',
            padding: '20px 40px',
            boxShadow: '0 20px 40px rgba(255, 216, 155, 0.3)'
          }}>
            <motion.div
              animate={{
                scale: [1, 1.03, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity
              }}
            >
              <p style={{
                fontSize: '2.5rem',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #ffd89b 0%, #ffb347 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '15px'
              }}>
                95% de satisfacción
              </p>
              <p style={{
                fontSize: '1.1rem',
                color: '#e0e0e0'
              }}>
                en equipos que adoptan Claude Code
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Slide12