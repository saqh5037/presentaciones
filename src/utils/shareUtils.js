// Share utilities for generating and managing shareable links
import { generateNewToken, addSessionToken } from '../services/tokenService';

// Generate a unique share token
export const generateShareToken = () => {
  return generateNewToken();
};

// Store share data in localStorage and session
export const createShareLink = async (presentationId) => {
  const token = generateShareToken();
  
  // Add to session store (works for current session)
  addSessionToken(token, presentationId);
  
  const shareData = {
    presentationId,
    token,
    createdAt: new Date().toISOString(),
    expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString() // 30 days
  };
  
  // Also save to localStorage for local tracking
  const shares = JSON.parse(localStorage.getItem('sharedPresentations') || '{}');
  shares[token] = shareData;
  localStorage.setItem('sharedPresentations', JSON.stringify(shares));
  
  // Automatically save to JSON file through API
  try {
    const response = await fetch('http://localhost:4322/api/saveToken', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token, presentationId })
    });
    
    if (response.ok) {
      console.log('Token automatically saved to sharedTokens.json');
    } else {
      console.error('Failed to save token to file');
    }
  } catch (error) {
    console.error('Error saving token:', error);
    console.log('Note: Make sure token server is running with: npm run token-server');
  }
  
  // Generate the shareable URL with public tunnel
  // Using Cloudflare tunnel for public access (no password required!)
  const publicURL = 'https://intention-reproduction-engineer-educated.trycloudflare.com';
  const shareUrl = `${publicURL}/share/${token}`;
  
  console.log('New token created:', token, 'for presentation:', presentationId);
  
  return {
    url: shareUrl,
    token,
    expiresAt: shareData.expiresAt
  };
};

// Validate a share token
export const validateShareToken = (token) => {
  const shares = JSON.parse(localStorage.getItem('sharedPresentations') || '{}');
  const shareData = shares[token];
  
  if (!shareData) {
    return { valid: false, error: 'Invalid share link' };
  }
  
  // Check if expired
  if (new Date(shareData.expiresAt) < new Date()) {
    return { valid: false, error: 'This share link has expired' };
  }
  
  return { 
    valid: true, 
    presentationId: shareData.presentationId,
    createdAt: shareData.createdAt,
    expiresAt: shareData.expiresAt
  };
};

// Get all active shares for a presentation
export const getSharesForPresentation = (presentationId) => {
  const shares = JSON.parse(localStorage.getItem('sharedPresentations') || '{}');
  const presentationShares = [];
  
  // Using Cloudflare tunnel for public access (no password required!)
  const publicURL = 'https://intention-reproduction-engineer-educated.trycloudflare.com';
  
  Object.entries(shares).forEach(([token, data]) => {
    if (data.presentationId === presentationId && new Date(data.expiresAt) > new Date()) {
      presentationShares.push({
        token,
        url: `${publicURL}/share/${token}`,
        ...data
      });
    }
  });
  
  return presentationShares;
};

// Revoke a share link
export const revokeShareLink = (token) => {
  const shares = JSON.parse(localStorage.getItem('sharedPresentations') || '{}');
  delete shares[token];
  localStorage.setItem('sharedPresentations', JSON.stringify(shares));
};

// Copy text to clipboard
export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      document.execCommand('copy');
      document.body.removeChild(textArea);
      return true;
    } catch (err) {
      document.body.removeChild(textArea);
      return false;
    }
  }
};