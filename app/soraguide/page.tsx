import fs from 'fs';
import path from 'path';

export default function SoraGuidePage() {
  const soraGuidePath = path.join(process.cwd(), 'public', 'SoraGuide.txt');
  let content = '';
  try {
    content = fs.readFileSync(soraGuidePath, 'utf-8');
  } catch (e) {
    content = 'Could not load SoraGuide.txt.';
  }

  const linkStyle = { color: '#2563eb', textDecoration: 'underline', wordBreak: 'break-all' };
  const containerStyle = {
    maxWidth: 700,
    margin: '2rem auto',
    padding: '2rem',
    background: '#fff',
    borderRadius: 16,
    boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
    fontFamily: 'inherit',
    fontSize: '1.1rem',
    lineHeight: 1.7,
    transition: 'box-shadow 0.2s',
  };
  const sectionStyle = {
    margin: '2.5rem 0 1.5rem 0',
    padding: 0,
    border: 0,
    borderTop: '1px solid #e5e7eb',
  };
  const headingStyle = {
    fontSize: '2.2rem',
    fontWeight: 700,
    marginBottom: '1.2rem',
    letterSpacing: '-0.02em',
    textAlign: 'center',
  };
  const subheadingStyle = {
    fontSize: '1.3rem',
    fontWeight: 600,
    margin: '1.5rem 0 0.7rem 0',
    color: '#2563eb',
  };
  const tipStyle = {
    background: '#f1f5f9',
    borderRadius: 8,
    padding: '0.7rem 1rem',
    margin: '1rem 0',
    fontWeight: 500,
    color: '#0f172a',
    display: 'inline-block',
  };
  const listStyle = {
    paddingLeft: '1.2rem',
    margin: '0.5rem 0 1.2rem 0',
  };
  const mobileStyle = `@media (max-width: 600px) {
    .sora-container { padding: 1rem !important; }
    .sora-heading { font-size: 1.5rem !important; }
    .sora-section { margin: 1.5rem 0 1rem 0 !important; }
    .sora-tip { font-size: 1rem !important; }
  }`;

  return (
    <>
      <style>{mobileStyle}</style>
      <main className="sora-container" style={containerStyle}>
        <h1 className="sora-heading" style={headingStyle}>Sora Guide</h1>
        <div>
          <p style={{marginBottom: 12}}>
            <span role="img" aria-label="paperclip">📎</span> <strong>Free Resource Vault</strong><br />
            Everything you need to turn free AI images into real money
          </p>

          <hr className="sora-section" style={sectionStyle} />

          <div style={subheadingStyle}><span role="img" aria-label="fire">🔥</span> Top Sora Prompts (Tested for Merch)</div>
          <p>Use these prompts to generate art that actually sells — for posters, shirts, stickers, and more.</p>
          <ul style={listStyle}>
            <li>Psychedelic tiger head with lightning bolts, ultra-detailed, neon colors, black background</li>
            <li>Anime-style cyberpunk girl, glowing katana, city at night, cinematic lighting</li>
            <li>Surreal coffee mug with a human face, vapor rising, moody lighting, photorealistic</li>
            <li>Minimalist yin-yang koi fish, Japanese ink style, clean white background</li>
            <li>Vintage biker logo, red and black, skull in helmet, retro font</li>
            <li>Retro arcade room with glowing machines, vaporwave colors, wide angle</li>
            <li>Sad clown in a business suit, moody lighting, 35mm film look</li>
          </ul>
          <div className="sora-tip" style={tipStyle}>✅ Tip: Use dark backgrounds for shirts, clean whites for posters/stickers.</div>

          <hr className="sora-section" style={sectionStyle} />

          <div style={subheadingStyle}><span role="img" aria-label="tools">🛠️</span> Printify Walkthrough (Quick-Start)</div>
          <p>Go to: <a href="https://try.printify.com/qylsr3giz2y6" style={linkStyle} target="_blank" rel="noopener noreferrer">https://try.printify.com/qylsr3giz2y6</a></p>
          <ul style={listStyle}>
            <li>Sign up for free</li>
            <li>Click "Create Product"</li>
            <li>Choose something simple like a T-shirt or poster</li>
            <li>Upload your AI image</li>
            <li>Adjust placement → click Save → Done</li>
            <li>You can connect to Etsy or just download mockups and sell directly.</li>
          </ul>

          <hr className="sora-section" style={sectionStyle} />

          <div style={subheadingStyle}><span role="img" aria-label="briefcase">💼</span> Fiverr Gig Templates (Copy & Paste)</div>
          <div style={{marginBottom: 8}}><u>Gig Title Ideas:</u></div>
          <ul style={listStyle}>
            <li>I'll create high-quality streetwear designs using AI</li>
            <li>I'll design surreal poster art using free AI tools</li>
            <li>I'll make viral digital art in 24 hours using AI</li>
          </ul>
          <div style={{marginBottom: 8}}><u>Gig Description:</u></div>
          <p>I'll use high-end AI tools like Sora to generate stunning visuals based on your idea — perfect for shirts, posters, branding, or content. You tell me the vibe, I deliver print-ready art within 24–48h.</p>
          <p>Ideal for: streetwear brands, musicians, creators, and startups.<br />No stock images. All original. All yours.</p>
          <p>Start your gig here: <a href="https://go.fiverr.com/visit/?bta=1123100&brand=fiverrmarketplace" style={linkStyle} target="_blank" rel="noopener noreferrer">https://go.fiverr.com/visit/?bta=1123100&brand=fiverrmarketplace</a></p>

          <hr className="sora-section" style={sectionStyle} />

          <div style={subheadingStyle}><span role="img" aria-label="toolbox">🧰</span> Free Mockup Generators</div>
          <p>Use these to make your designs look real for Fiverr, Etsy, or social content:</p>
          <ul style={listStyle}>
            <li><a href="https://smartmockups.com" style={linkStyle} target="_blank" rel="noopener noreferrer">SmartMockups – https://smartmockups.com</a></li>
            <li><a href="https://placeit.net" style={linkStyle} target="_blank" rel="noopener noreferrer">Placeit – https://placeit.net</a></li>
            <li><a href="https://create.vista.com" style={linkStyle} target="_blank" rel="noopener noreferrer">VistaCreate – https://create.vista.com</a></li>
            <li><a href="https://canva.com" style={linkStyle} target="_blank" rel="noopener noreferrer">Canva – https://canva.com</a></li>
          </ul>
          <p>Upload your AI image → Pick a mockup → Download your preview → Done.</p>
        </div>
        <section style={{ marginTop: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', textAlign: 'center', color: '#2563eb' }}>Free Tools</h2>
          <ul style={{ fontSize: '1.1rem', lineHeight: 2, paddingLeft: '1.2rem', textAlign: 'center', listStyle: 'none' }}>
            <li><a href="https://smartmockups.com" style={linkStyle} target="_blank" rel="noopener noreferrer">SmartMockups</a></li>
            <li><a href="https://placeit.net" style={linkStyle} target="_blank" rel="noopener noreferrer">Placeit</a></li>
            <li><a href="https://create.vista.com" style={linkStyle} target="_blank" rel="noopener noreferrer">VistaCreate</a></li>
            <li><a href="https://canva.com" style={linkStyle} target="_blank" rel="noopener noreferrer">Canva</a></li>
            <li><a href="https://try.printify.com/qylsr3giz2y6" style={linkStyle} target="_blank" rel="noopener noreferrer">Printify</a></li>
            <li><a href="https://go.fiverr.com/visit/?bta=1123100&brand=fiverrmarketplace" style={linkStyle} target="_blank" rel="noopener noreferrer">Fiverr</a></li>
          </ul>
        </section>
      </main>
    </>
  );
} 