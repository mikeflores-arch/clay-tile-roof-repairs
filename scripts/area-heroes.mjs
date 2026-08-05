// Downloads the 30 AI-generated area hero images and processes them to
// public/images/areas/<slug>.webp (1600w hero + full-res kept in area-heroes/).
import sharp from 'sharp';
import { mkdirSync, writeFileSync } from 'node:fs';

const BASE = 'https://d8j0ntlcm91z4.cloudfront.net/user_33NgAQ9bl218YCELHshDMiJiPMb';
const images = {
  'river-oaks': 'hf_20260805_221533_b901c66e-9028-4a6c-b276-e9139e2e2da4.png',
  'memorial-villages': 'hf_20260805_221536_6c736779-348e-4a98-9096-f3436bd133e5.png',
  'west-university-place': 'hf_20260805_221538_896667f2-e3f5-40dc-b1a1-eaf7035cccb0.png',
  'bellaire': 'hf_20260805_221541_1e90daf5-ffd6-4c52-947a-2beea56cbebe.png',
  'the-woodlands': 'hf_20260805_221647_485e7160-feb9-4a07-a383-6488a15e57d5.png',
  'sugar-land': 'hf_20260805_221650_a0da6ca3-b7a1-4d12-b56e-21f918d7b02a.png',
  'katy': 'hf_20260805_221652_72aaad72-b13b-4dac-88ae-9e2d1e34aa69.png',
  'tanglewood': 'hf_20260805_221654_ba5cd0e8-6dec-4428-aee5-dc6b1cce3efb.png',
  'the-heights': 'hf_20260805_221738_54926e57-2fbb-4aff-9f74-fb164a9a64a1.png',
  'montrose': 'hf_20260805_221740_0ecf9782-d14b-4b34-bd1b-ff6fea0ef2ec.png',
  'memorial': 'hf_20260805_221757_cb8dbb68-c5d0-4e59-bb3f-00cd760cfd6a.png',
  'rice-military': 'hf_20260805_221759_b56fc389-91e3-40ea-8328-99765641f65d.png',
  'midtown': 'hf_20260805_221831_af8adc4a-3f3c-40ce-9cd0-cadffd9f5ce4.png',
  'downtown-houston': 'hf_20260805_221833_a4d40780-0e97-473f-ba9c-61b1d78cf8f6.png',
  'eado': 'hf_20260805_221850_798d2403-4237-463f-84aa-11246f7de517.png',
  'museum-district': 'hf_20260805_221853_ae54b0ac-035f-4399-ad9d-0cbc404b8008.png',
  'upper-kirby': 'hf_20260805_221910_bdaffa9c-ce11-448a-a9ab-4840bc6645c6.png',
  'galleria-uptown': 'hf_20260805_221912_c3f57ad1-67a6-40b1-a1ad-c978c859aa4b.png',
  'garden-oaks': 'hf_20260805_221935_c86cdc02-88d6-45e8-a11a-c8b9893024a9.png',
  'oak-forest': 'hf_20260805_221937_2694d39e-7c85-4308-849a-4e35e07213ab.png',
  'spring-branch': 'hf_20260805_221955_299f6264-e97c-4a76-aa94-2d6ff59cc749.png',
  'braeswood-place': 'hf_20260805_221957_f2050670-fa1d-4117-9dc5-3decff80b11e.png',
  'meyerland': 'hf_20260805_222040_1e90f4af-a42b-4d9c-af5c-cea329abf56e.png',
  'pearland': 'hf_20260805_222042_ea07465d-2cf8-46c5-aad5-7dc37fd805d4.png',
  'cypress': 'hf_20260805_222112_55e46251-3ca5-4608-958c-d373de09d5e5.png',
  'kingwood': 'hf_20260805_222114_f8de8ff9-b6a9-4a09-929f-75fdc9b89c42.png',
  'clear-lake': 'hf_20260805_222307_36fcf26f-0602-4a12-86b8-8d9f5aa40f81.png',
  'league-city': 'hf_20260805_222309_bac3ed85-f986-460e-a15d-98f0bd2e0023.png',
  'friendswood': 'hf_20260805_222332_f8bd8f8a-c67b-4cdd-b928-e68eaeb49324.png',
  'third-ward': 'hf_20260805_222334_948d9da7-59a3-47b6-904c-b12eba5f8b35.png',
};

mkdirSync('public/images/areas', { recursive: true });
mkdirSync('area-heroes', { recursive: true });

let done = 0;
for (const [slug, file] of Object.entries(images)) {
  if (file.includes('PLACEHOLDER')) { console.log(`SKIP ${slug} — placeholder`); continue; }
  const buf = Buffer.from(await (await fetch(`${BASE}/${file}`)).arrayBuffer());
  writeFileSync(`area-heroes/${slug}.png`, buf);
  await sharp(buf).resize(1600).webp({ quality: 78 }).toFile(`public/images/areas/${slug}.webp`);
  done++;
}
console.log(`processed ${done} hero images -> public/images/areas/`);
