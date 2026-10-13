import { writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const title = process.argv.slice(2).join(" ").trim();

if (!title) {
  console.error('Usage: npm run note -- "what I learned"');
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);
const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "");

const dir = "notes";
const file = join(dir, `${today}-${slug}.md`);

if (existsSync(file)) {
  console.error(`Note already exists: ${file}`);
  process.exit(1);
}

mkdirSync(dir, { recursive: true });
writeFileSync(
  file,
  `# ${title}

Date: ${today}

## What I was trying to do

## What I learned

## Commands / code worth remembering

\`\`\`sh

\`\`\`

## Still confused about
`,
);

console.log(`Created ${file}`);
