import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 4322;

app.use(cors());
app.use(express.json());

app.post('/api/saveToken', (req, res) => {
  const { token, presentationId } = req.body;

  if (!token || !presentationId) {
    return res.status(400).json({ error: 'Token and presentationId are required' });
  }

  try {
    const filePath = path.join(__dirname, 'public', 'sharedTokens.json');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContent);

    data.tokens[token] = {
      presentationId,
      createdAt: new Date().toISOString().split('T')[0],
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    };

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    console.log(`Token saved: ${token} for presentation: ${presentationId}`);
    return res.status(200).json({ success: true, message: 'Token saved successfully' });
  } catch (error) {
    console.error('Error saving token:', error);
    return res.status(500).json({ error: 'Failed to save token' });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Token server running on http://0.0.0.0:${PORT}`);
});