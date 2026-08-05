import { readFileSync, writeFileSync } from "node:fs";
import { serviceAreas } from "../src/data/serviceAreas.js";
const files = ["src/data/serviceAreas.js", "src/data/serviceAreasExpansion1.js", "src/data/serviceAreasExpansion2.js"];
let n = 0;
for (const f of files) {
  let c = readFileSync(f, "utf8");
  for (const a of serviceAreas) {
    const re = new RegExp(`(slug: '${a.slug}',[\\s\\S]*?image: ')[^']*(')`);
    if (re.test(c)) { c = c.replace(re, `$1/images/areas/${a.slug}.webp$2`); n++; }
  }
  writeFileSync(f, c);
}
console.log(`updated ${n} image paths`);

