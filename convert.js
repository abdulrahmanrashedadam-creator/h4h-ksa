const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir  = path.join(__dirname, 'frames22');
const outputDir = path.join(__dirname, 'frames_webp');

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.png')).sort();
let done = 0;

async function convert(file) {
  const input  = path.join(inputDir, file);
  const output = path.join(outputDir, file.replace('.png', '.webp'));
  await sharp(input).webp({ quality: 82 }).toFile(output);
  done++;
  if (done % 10 === 0 || done === files.length)
    process.stdout.write(`\r${done}/${files.length} converted...`);
}

(async () => {
  const CONCURRENCY = 8;
  for (let i = 0; i < files.length; i += CONCURRENCY) {
    await Promise.all(files.slice(i, i + CONCURRENCY).map(convert));
  }
  const pngSize  = files.reduce((s, f) => s + fs.statSync(path.join(inputDir, f)).size, 0);
  const webpFiles = fs.readdirSync(outputDir);
  const webpSize = webpFiles.reduce((s, f) => s + fs.statSync(path.join(outputDir, f)).size, 0);
  console.log(`\nDone! PNG: ${(pngSize/1024/1024).toFixed(1)}MB → WebP: ${(webpSize/1024/1024).toFixed(1)}MB`);
})();
