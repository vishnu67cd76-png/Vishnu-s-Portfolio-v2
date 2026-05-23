import sharp from "sharp";
import { readFile, writeFile, unlink } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const profilePath = path.join(__dirname, "../src/assets/images/profile.jpg");
const tempPath = path.join(__dirname, "../src/assets/images/profile.tmp.jpg");

const before = await readFile(profilePath);
const beforeKb = (before.length / 1024).toFixed(1);

await sharp(profilePath)
  .resize(640, 640, { fit: "inside", withoutEnlargement: true })
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(tempPath);

await unlink(profilePath);
await writeFile(profilePath, await readFile(tempPath));
await unlink(tempPath);

const after = await readFile(profilePath);
const afterKb = (after.length / 1024).toFixed(1);

console.log(`profile.jpg: ${beforeKb} KB → ${afterKb} KB`);
