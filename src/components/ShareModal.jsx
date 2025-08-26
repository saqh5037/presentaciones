import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  X, Link, Copy, Check, Clock, Trash2, 
  Globe, Lock, Calendar, Share2 
} from 'lucide-react'
import { 
  createShareLink, 
  copyToClipboard, 
  getSharesForPresentation,
  revokeShareLink 
} from '../utils/shareUtils'

function ShareModal({ presentation, isOpen, onClose }) {
  const [shareUrl, setShareUrl] = useState('')
  const [copied, setCopied] = useState(false)
  const [activeShares, setActiveShares] = useState([])
  const [showNewShare, setShowNewShare] = useState(false)

  useEffect(() => {
    if (isOpen && presentation) {
      // Load existing shares
      const shares = getSharesForPresentation(presentation.id);
      setActiveShares(shares);
      setShowNewShare(shares.length === 0);
    }
  }, [isOpen, presentation]);

  const handleCreateShare = async () => {
    const shareData = await createShareLink(presentation.id);
    setShareUrl(shareData.url);
    setShowNewShare(true);
    
    // Refresh active shares
    const shares = getSharesForPresentation(presentation.id);
    setActiveShares(shares);
  };

  const handleCopy = async (url) => {
    const success = await copyToClipboard(url || shareUrl);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleRevoke = (token) => {
    revokeShareLink(token);
    const shares = getSharesForPresentation(presentation.id);
    setActiveShares(shares);
    if (shares.length === 0) {
      setShowNewShare(true);
    }
  };

  if (!isOpen || !presentation) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            background: 'white',
            borderRadius: '20px',
            width: '100%',
            maxWidth: '600px',
            maxHeight: '80vh',
            overflow: 'auto',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
          }}
        >
          {/* Header */}
          <div style={{
            padding: '30px 30px 20px',
            borderBottom: '1px solid #eee',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{
                width: '50px',
                height: '50px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Share2 size={25} color="white" />
              </div>
              <div>
                <h2 style={{ margin: 0, fontSize: '1.5rem', color: '#333' }}>
                  Compartir Presentación
                </h2>
                <p style={{ margin: '5px 0 0', color: '#666', fontSize: '0.9rem' }}>
                  {presentation.title}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '5px'
              }}
            >
              <X size={24} color="#666" />
            </button>
          </div>

          {/* Content */}
          <div style={{ padding: '30px' }}>
            {/* New Share Section */}
            {showNewShare ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  background: '#f8f9fa',
                  borderRadius: '15px',
                  padding: '25px',
                  marginBottom: '25px'
                }}
              >
                <h3 style={{ 
                  margin: '0 0 20px', 
                  fontSize: '1.1rem', 
                  color: '#333',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <Link size={20} />
                  Nuevo Enlace de Compartir
                </h3>
                
                {shareUrl ? (
                  <>
                    <div style={{
                      display: 'flex',
                      gap: '10px',
                      marginBottom: '15px'
                    }}>
                      <input
                        type="text"
                        value={shareUrl}
                        readOnly
                        style={{
                          flex: 1,
                          padding: '12px 15px',
                          border: '2px solid #e0e0e0',
                          borderRadius: '10px',
                          fontSize: '0.95rem',
                          fontFamily: 'monospace',
                          background: 'white'
                        }}
                      />
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleCopy(shareUrl)}
                        style={{
                          padding: '12px 20px',
                          background: copied ? '#4ade80' : '#667eea',
                          color: 'white',
                          border: 'none',
                          borderRadius: '10px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontSize: '0.95rem',
                          fontWeight: '600'
                        }}
                      >
                        {copied ? <Check size={18} /> : <Copy size={18} />}
                        {copied ? 'Copiado!' : 'Copiar'}
                      </motion.button>
                    </div>
                    
                    <div style={{
                      display: 'flex',
                      gap: '20px',
                      fontSize: '0.85rem',
                      color: '#666'
                    }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <Globe size={14} />
                        Acceso de solo lectura
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <Clock size={14} />
                        Expira en 30 días
                      </span>
                    </div>
                  </>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleCreateShare}
                    style={{
                      width: '100%',
                      padding: '15px',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '10px',
                      fontSize: '1rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px'
                    }}
                  >
                    <Link size={20} />
                    Generar Enlace de Compartir
                  </motion.button>
                )}
              </motion.div>
            ) : (
              <div style={{ marginBottom: '25px' }}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCreateShare}
                  style={{
                    width: '100%',
                    padding: '15px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px'
                  }}
                >
                  <Link size={20} />
                  Crear Nuevo Enlace
                </motion.button>
              </div>
            )}

            {/* Active Shares */}
            {activeShares.length > 0 && (
              <div>
                <h3 style={{
                  margin: '0 0 15px',
                  fontSize: '1rem',
                  color: '#666',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <Lock size={18} />
                  Enlaces Activos ({activeShares.length})
                </h3>
                
                {activeShares.map((share, index) => (
                  <motion.div
                    key={share.token}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    style={{
                      background: '#f8f9fa',
                      borderRadius: '10px',
                      padding: '15px',
                      marginBottom: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <div style={{
                        fontFamily: 'monospace',
                        fontSize: '0.85rem',
                        color: '#333',
                        marginBottom: '8px',
                        wordBreak: 'break-all'
                      }}>
                        {share.url}
                      </div>
                      <div style={{
                        display: 'flex',
                        gap: '15px',
                        fontSize: '0.75rem',
                        color: '#999'
                      }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                          <Calendar size={12} />
                          Creado: {new Date(share.createdAt).toLocaleDateString()}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                          <Clock size={12} />
                          Expira: {new Date(share.expiresAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleCopy(share.url)}
                        style={{
                          padding: '8px',
                          background: '#667eea',
                          color: 'white',
                          border: 'none',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Copy size={16} />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleRevoke(share.token)}
                        style={{
                          padding: '8px',
                          background: '#ff6b6b',
                          color: 'white',
                          border: 'none',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Trash2 size={16} />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Info Section */}
            <div style={{
              marginTop: '25px',
              padding: '20px',
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
              borderRadius: '10px',
              border: '1px solid rgba(102, 126, 234, 0.2)'
            }}>
              <h4 style={{ margin: '0 0 10px', color: '#667eea', fontSize: '0.95rem' }}>
                Información sobre los enlaces compartidos
              </h4>
              <ul style={{
                margin: 0,
                paddingLeft: '20px',
                color: '#666',
                fontSize: '0.85rem',
                lineHeight: '1.8'
              }}>
                <li>Los enlaces permiten acceso de solo lectura a la presentación</li>
                <li>No se requiere autenticación para ver la presentación</li>
                <li>Los enlaces expiran automáticamente después de 30 días</li>
                <li>Puedes revocar el acceso en cualquier momento</li>
                <li>El visor no tendrá acceso al dashboard ni otras presentaciones</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ShareModal