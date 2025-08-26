// Token service for managing shared tokens
// Uses a JSON file in public folder that can be accessed from anywhere

const TOKENS_URL = '/sharedTokens.json';

// Load tokens from JSON file
export const loadTokens = async () => {
  try {
    const response = await fetch(TOKENS_URL);
    const data = await response.json();
    return data.tokens || {};
  } catch (error) {
    console.error('Error loading tokens:', error);
    // Return hardcoded tokens as fallback
    return {
      'demo123': { presentationId: 'dynamtek-centro-mando' },
      'labsis456': { presentationId: 'labsis-expert' },
      'musi789': { presentationId: 'musi-kickoff' },
      'etiquetas321': { presentationId: 'etiquetas-bernardo' }
    };
  }
};

// Validate a token
export const validateTokenAsync = async (token) => {
  const tokens = await loadTokens();
  const tokenData = tokens[token];
  
  if (!tokenData) {
    return null;
  }
  
  // Check expiration if exists
  if (tokenData.expiresAt) {
    const expiryDate = new Date(tokenData.expiresAt);
    if (expiryDate < new Date()) {
      return null;
    }
  }
  
  return tokenData.presentationId;
};

// Generate a new token (for local use)
export const generateNewToken = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';
  for (let i = 0; i < 12; i++) {
    token += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return token;
};

// Save token locally (won't persist to file, but works for session)
let sessionTokens = {};

export const addSessionToken = (token, presentationId) => {
  sessionTokens[token] = {
    presentationId,
    createdAt: new Date().toISOString(),
    expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
  };
};

export const getSessionToken = (token) => {
  return sessionTokens[token];
};