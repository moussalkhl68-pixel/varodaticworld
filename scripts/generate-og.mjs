import sharp from 'sharp'
import fs from 'fs'

// Create a 1200x630 OG image with brand colors
const svg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="1200" height="630" fill="#0a0a0a"/>
  
  <!-- Subtle grid pattern -->
  <defs>
    <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
      <path d="M 60 0 L 0 0 0 60" fill="none" 
            stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="url(#grid)"/>
  
  <!-- Cyan glow top-left -->
  <ellipse cx="200" cy="200" rx="300" ry="250" 
           fill="rgba(0,229,255,0.06)"/>
  
  <!-- Purple glow bottom-right -->
  <ellipse cx="1000" cy="450" rx="300" ry="250" 
           fill="rgba(139,92,246,0.06)"/>
  
  <!-- Brand name -->
  <text x="100" y="220" 
        font-family="Arial Black, sans-serif" 
        font-weight="900" 
        font-size="80" 
        fill="#00e5ff"
        letter-spacing="-2">VARODATIC</text>
  
  <!-- Tagline -->
  <text x="100" y="300" 
        font-family="Arial, sans-serif" 
        font-weight="700" 
        font-size="38" 
        fill="rgba(255,255,255,0.9)">IPTV — 26,000+ Channels in 4K</text>
  
  <!-- Sub-tagline -->
  <text x="100" y="360" 
        font-family="Arial, sans-serif" 
        font-weight="400" 
        font-size="26" 
        fill="rgba(255,255,255,0.45)">Zero Buffering · Free Trial · Instant Setup</text>
  
  <!-- Bottom URL badge -->
  <rect x="100" y="490" width="280" height="48" 
        rx="24" fill="rgba(0,229,255,0.15)" 
        stroke="rgba(0,229,255,0.3)" stroke-width="1"/>
  <text x="240" y="521" 
        font-family="Arial, sans-serif" 
        font-weight="600" 
        font-size="18" 
        fill="#00e5ff"
        text-anchor="middle">varodaticiptv.pro</text>
</svg>`

try {
  await sharp(Buffer.from(svg))
    .resize(1200, 630)
    .png({ quality: 90 })
    .toFile('public/og-image.png')

  console.log('✅ OG image created: public/og-image.png')
} catch (err) {
  console.error('❌ Error creating OG image:', err)
  process.exit(1)
}
