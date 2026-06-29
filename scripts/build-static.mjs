import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";

const outputDir = "dist";
const staticEntries = [
  ".nojekyll",
  "404.html",
  "index.html",
  "robots.txt",
  "sitemap.xml",
  "assets",
];

rmSync(outputDir, { recursive: true, force: true });
mkdirSync(outputDir, { recursive: true });

for (const entry of staticEntries) {
  if (!existsSync(entry)) continue;
  cpSync(entry, join(outputDir, entry), { recursive: true });
}
