import { promises as fs } from 'fs';
import path from 'path';

export default async function SoraGuidePage() {
  const soraGuidePath = path.join(process.cwd(), 'public', 'SoraGuide.txt');
  let content = '';
  try {
    content = await fs.readFile(soraGuidePath, 'utf-8');
  } catch (e) {
    content = 'Could not load SoraGuide.txt.';
  }

  return (
    <main style={{ maxWidth: 700, margin: '2rem auto', padding: '2rem', background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Sora Guide</h1>
      <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', fontFamily: 'inherit', fontSize: '1.1rem' }}>{content}</pre>
    </main>
  );
} 