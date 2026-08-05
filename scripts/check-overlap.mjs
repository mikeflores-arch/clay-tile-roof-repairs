// QA: 5-gram overlap between area pages' unique prose (localContext + faqs).
// Guards against the doorway-page pattern — flags any pair over 30%.
import { serviceAreas } from '../src/data/serviceAreas.js';

const text = (a) => (a.localContext.join(' ') + ' ' + a.faqs.map((f) => f.question + ' ' + f.answer).join(' ')).toLowerCase();
const grams = (t) => {
  const w = t.split(/\s+/).filter(Boolean);
  const g = new Set();
  for (let i = 0; i + 5 <= w.length; i++) g.add(w.slice(i, i + 5).join(' '));
  return g;
};

const sets = serviceAreas.map((a) => ({ slug: a.slug, g: grams(text(a)), words: text(a).split(/\s+/).length }));
let worst = { pct: 0 };
for (let i = 0; i < sets.length; i++) {
  for (let j = i + 1; j < sets.length; j++) {
    let hit = 0;
    for (const g of sets[i].g) if (sets[j].g.has(g)) hit++;
    const pct = (hit / Math.min(sets[i].g.size, sets[j].g.size)) * 100;
    if (pct > worst.pct) worst = { pct, a: sets[i].slug, b: sets[j].slug };
    if (pct > 30) console.log(`⚠ ${sets[i].slug} <-> ${sets[j].slug}: ${pct.toFixed(0)}%`);
  }
}
console.log(`${sets.length} areas · unique prose ${Math.min(...sets.map((s) => s.words))}-${Math.max(...sets.map((s) => s.words))} words`);
console.log(`worst pair: ${worst.a} <-> ${worst.b} at ${worst.pct.toFixed(1)}% (threshold 30%)`);
