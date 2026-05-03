import sharp from 'sharp'
import fs from 'fs'

const svgBuffer = fs.readFileSync('app/icon.svg')

await sharp(svgBuffer).resize(32, 32).png().toFile('public/favicon-32x32.png')
await sharp(svgBuffer).resize(16, 16).png().toFile('public/favicon-16x16.png')
await sharp(svgBuffer).resize(180, 180).png().toFile('public/apple-touch-icon.png')
await sharp(svgBuffer).resize(192, 192).png().toFile('public/android-chrome-192x192.png')
await sharp(svgBuffer).resize(512, 512).png().toFile('public/android-chrome-512x512.png')
await sharp(svgBuffer).resize(32, 32).png().toFile('app/favicon.ico')

console.log('All favicon sizes generated')
