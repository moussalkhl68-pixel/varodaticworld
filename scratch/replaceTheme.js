const fs = require('fs');
const path = require('path');

const targetDir = "c:/Users/soufiane/Desktop/projects/next js/iptv varodatic";

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory() && !file.includes('node_modules') && !file.includes('.next')) { 
            results = results.concat(walk(file));
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk(targetDir);
let changedCount = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let newContent = content
        .replace(/text-\[#00FF88\]/gi, 'text-primary')
        .replace(/bg-\[#00FF88\]/gi, 'bg-primary')
        .replace(/border-\[#00FF88\]/gi, 'border-primary')
        .replace(/selection:bg-\[#00FF88\]/gi, 'selection:bg-primary');
    
    if (content !== newContent) {
        fs.writeFileSync(file, newContent, 'utf8');
        changedCount++;
        console.log(`Updated ${file}`);
    }
});

console.log(`Successfully updated ${changedCount} files.`);
