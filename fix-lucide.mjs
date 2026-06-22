import fs from 'fs';
import path from 'path';

// 1. Parse lucide-react.mjs to build a map of ExportName -> file.mjs
const lucideMainPath = 'node_modules/lucide-react/dist/esm/lucide-react.mjs';
const lucideContent = fs.readFileSync(lucideMainPath, 'utf8');

const exportMap = new Map();

// Match lines like: export { default as AlarmCheck, default as AlarmCheckIcon } from './icons/alarm-clock-check.mjs';
const exportRegex = /export\s+\{([^}]+)\}\s+from\s+['"]([^'"]+)['"]/g;
let match;
while ((match = exportRegex.exec(lucideContent)) !== null) {
  const exportsList = match[1];
  const sourceFile = match[2]; // e.g. './icons/file-name.mjs'
  
  // Clean up the source file path to be used as import path
  const importPath = `lucide-react/dist/esm/${sourceFile.replace(/^\.\//, '').replace(/\.mjs$/, '')}`;
  
  const individualExports = exportsList.split(',').map(s => s.trim());
  for (const exp of individualExports) {
    const defaultAsMatch = exp.match(/default\s+as\s+([A-Za-z0-9_]+)/);
    if (defaultAsMatch) {
      exportMap.set(defaultAsMatch[1], importPath);
    }
  }
}

// Also read from index.mjs just in case
const lucideIndexPath = 'node_modules/lucide-react/dist/esm/icons/index.mjs';
const indexContent = fs.readFileSync(lucideIndexPath, 'utf8');
while ((match = exportRegex.exec(indexContent)) !== null) {
  const exportsList = match[1];
  const sourceFile = match[2]; 
  const importPath = `lucide-react/dist/esm/icons/${sourceFile.replace(/^\.\//, '').replace(/\.mjs$/, '')}`;
  
  const individualExports = exportsList.split(',').map(s => s.trim());
  for (const exp of individualExports) {
    const defaultAsMatch = exp.match(/default\s+as\s+([A-Za-z0-9_]+)/);
    if (defaultAsMatch) {
      exportMap.set(defaultAsMatch[1], importPath);
    }
  }
}

// 2. Iterate through files and replace
function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

let filesUpdated = 0;

walk('apps/web/src', (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find incorrect default imports (from our previous run)
    // e.g. import CheckCircle2 from 'lucide-react/dist/esm/icons/check-circle2';
    const brokenImportRegex = /import\s+([A-Za-z0-9_]+)\s+from\s+['"]lucide-react\/dist\/esm\/icons\/[^'"]+['"];/g;
    let modified = false;
    
    content = content.replace(brokenImportRegex, (match, iconName) => {
      const correctPath = exportMap.get(iconName);
      if (correctPath) {
        modified = true;
        return `import ${iconName} from '${correctPath}';`;
      }
      console.error(`Warning: Could not find correct path for ${iconName} in ${filePath}`);
      // Fallback: assume it might be a valid kebab case
      return match;
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${filePath}`);
      filesUpdated++;
    }
  }
});

console.log(`Finished processing. Updated ${filesUpdated} files.`);
