const fs = require('fs');
const path = require('path');

const directoriesToScan = ['app', 'components'];

const replacements = {
  'text-foreground': 'text-white',
  'text-muted-foreground': 'text-[#A0A0A0]',
  'bg-background': 'bg-black',
  'bg-card': 'bg-[#111111]',
  'bg-popover': 'bg-[#1a1a1a]',
  'border-border': 'border-white/10',
  'text-card-foreground': 'text-white',
  'text-primary': 'text-[#00FF88]',
  'bg-primary': 'bg-[#00FF88]'
};

function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

let filesModified = 0;

directoriesToScan.forEach(dir => {
  walkDir(dir, (filePath) => {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      
      for (const [key, value] of Object.entries(replacements)) {
        // Use a global regex with word boundaries to avoid partial matches
        // But since tailwind classes can have prefixes (like hover:bg-background) or suffixes (like bg-primary/10)
        // A simple string replace all is safe since these are standard token names, but regex handles word boundaries better so we don't accidentally replace text-primary-dark if it existed.
        const regex = new RegExp(`\\b${key}\\b`, 'g');
        content = content.replace(regex, value);
      }

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
        filesModified++;
      }
    }
  });
});

console.log(`Total files modified: ${filesModified}`);
