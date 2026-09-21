import { readFileSync, readdirSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const sections = [
  `THIRD-PARTY NOTICES

These notices apply only to the third-party materials identified below.
They do not grant a licence to Laiza Poletti's original portfolio content,
client work, photographs, trademarks, or other separately owned materials.

This file includes shadcn/ui source-component notices and the installed
runtime dependencies of React, React DOM, React Router, Motion, and Lucide.
It is not an asset-by-asset clearance of photographs or client screenshots.

UNSPLASH PHOTOGRAPHS
The Figma Make export attributes some photographs to Unsplash.
Standard licence: https://unsplash.com/license
Attribution is appreciated but not required under that licence.
Individual photo provenance and any separate rights must be checked separately.

SHADCN/UI
Source: https://github.com/shadcn-ui/ui/blob/main/LICENSE.md

${readFileSync(join(root, 'licenses/shadcn-ui-MIT.txt'), 'utf8').trim()}`,
];
const visited = new Set();
function collect(name, from = root) {
  let folder = from;
  let pkgDir;
  while (true) {
    const candidate = join(folder, 'node_modules', name);
    if (existsSync(join(candidate, 'package.json'))) { pkgDir = candidate; break; }
    const parent = dirname(folder);
    if (parent === folder) throw new Error(`Missing dependency: ${name}`);
    folder = parent;
  }
  if (visited.has(pkgDir)) return;
  visited.add(pkgDir);
  const pkg = JSON.parse(readFileSync(join(pkgDir, 'package.json'), 'utf8'));
  const notices = readdirSync(pkgDir, { withFileTypes: true })
    .filter(entry => entry.isFile() && /^(licen[cs]e|notice|copying)([.-]|$)/i.test(entry.name))
    .map(entry => entry.name).sort();
  if (!notices.length) throw new Error(`No licence text found for ${name}; add its upstream notice before publishing.`);
  sections.push(`${pkg.name} ${pkg.version}\nDeclared licence: ${pkg.license ?? 'See text below'}\n\n` + notices.map(file => readFileSync(join(pkgDir, file), 'utf8').trim()).join('\n\n'));
  for (const dependency of Object.keys(pkg.dependencies ?? {}).sort()) collect(dependency, pkgDir);
}
for (const name of ['react', 'react-dom', 'react-router', 'motion', 'lucide-react']) collect(name);
mkdirSync(join(root, 'public'), { recursive: true });
writeFileSync(join(root, 'public/THIRD-PARTY-NOTICES.txt'), sections.join('\n\n' + '='.repeat(72) + '\n\n') + '\n');
console.log(`Generated notices for shadcn/ui and ${visited.size} dependency packages.`);
