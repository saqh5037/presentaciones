// Static token storage for demo purposes
// In production, this should be in a database

export const sharedTokens = {
  // Token -> Presentation ID mapping
  'demo123': 'dynamtek-centro-mando',
  'labsis456': 'labsis-expert',
  'musi789': 'musi-kickoff',
  'etiquetas321': 'etiquetas-bernardo'
};

// Generate a random token
export const generateToken = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';
  for (let i = 0; i < 12; i++) {
    token += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return token;
};

// Add a new share token
export const addShareToken = (token, presentationId) => {
  sharedTokens[token] = presentationId;
  return token;
};

// Validate a token
export const validateToken = (token) => {
  return sharedTokens[token] || null;
};