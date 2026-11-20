// gta6-clipper-01 entrypoint (Node 22, standard library only).
//
// The entry is the video itself: a 21-second vertical GTA 6 Short, cut from
// Rockstar's official Launch Trailer, that hooks with GTA 6 and then pitches
// make.fun on screen and in voice. This program's only job is to hand the
// house the video's address: it copies VIDEO.json from the repository root
// to /output/VIDEO.json, where the gate reads it.
//
// Nothing this program writes about the video is scored: the house reads
// the video itself through the YouTube Data API and ranks by its views.
// VIDEO.json currently holds the starter placeholder; it is replaced with
// the real public YouTube Short URL once the clip is uploaded.
//
// Local run: mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

const src = join(BOT_DIR, 'VIDEO.json');
const dst = join(OUTPUT_DIR, 'VIDEO.json');

let raw: string;
try {
  raw = readFileSync(src, 'utf8');
} catch (err) {
  console.error(`VIDEO.json could not be read from ${src}: ${(err as Error).message}`);
  process.exit(1);
}

const parsed = JSON.parse(raw) as { url?: unknown };
if (typeof parsed.url !== 'string' || !parsed.url.startsWith('https://')) {
  console.error(`VIDEO.json holds no https URL: ${raw.trim()}`);
  process.exit(1);
}

writeFileSync(dst, raw);
console.log(`VIDEO.json -> ${dst} (${parsed.url})`);
