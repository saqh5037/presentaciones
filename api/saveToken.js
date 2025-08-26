import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { token, presentationId } = req.body;

  if (!token || !presentationId) {
    return res.status(400).json({ error: 'Token and presentationId are required' });
  }

  try {
    // Read existing tokens
    const filePath = path.join(process.cwd(), 'public', 'sharedTokens.json');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContent);

    // Add new token
    data.tokens[token] = {
      presentationId,
      createdAt: new Date().toISOString().split('T')[0],
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    };

    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    return res.status(200).json({ success: true, message: 'Token saved successfully' });
  } catch (error) {
    console.error('Error saving token:', error);
    return res.status(500).json({ error: 'Failed to save token' });
  }
}