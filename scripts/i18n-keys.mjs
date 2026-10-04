// Lists every English string that needs a translation and reports what is missing per language.
//   node scripts/i18n-keys.mjs collect   -> builds the site while recording lookups, writes scripts/.i18n-keys.json
//   node scripts/i18n-keys.mjs missing   -> prints keys missing from src/i18n/messages/{ru,uz}.json
import { execSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUT = "scripts/.i18n-keys.json";
const mode = process.argv[2] ?? "missing";

function scanSource(dir, found) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) scanSource(p, found);
    else if (/\.(tsx?|mjs)$/.test(name)) {
      const src = readFileSync(p, "utf8");
      for (const m of src.matchAll(/\bt\(\s*"((?:[^"\\]|\\.)*)"/g)) found.add(JSON.parse(`"${m[1]}"`));
    }
  }
}

const skip = (k) => !/[A-Za-z]/.test(k) || /^[a-z0-9-]+$/.test(k) || k.startsWith("@") || /^\+?\d/.test(k);

if (mode === "collect") {
  const log = "/tmp/i18n-collect.log";
  if (existsSync(log)) rmSync(log);
  execSync("yarn -s build", { stdio: "inherit", env: { ...process.env, I18N_COLLECT: log } });
  const keys = new Set(readFileSync(log, "utf8").split("\n").filter(Boolean).map((l) => JSON.parse(l)));
  scanSource("src", keys);
  const list = [...keys].filter((k) => !skip(k)).sort();
  writeFileSync(OUT, JSON.stringify(list, null, 2) + "\n");
  console.log(`${list.length} keys -> ${OUT}`);
} else {
  const keys = JSON.parse(readFileSync(OUT, "utf8"));
  for (const lang of ["ru", "uz"]) {
    const dict = JSON.parse(readFileSync(`src/i18n/messages/${lang}.json`, "utf8"));
    const missing = keys.filter((k) => !(k in dict));
    const unused = Object.keys(dict).filter((k) => !keys.includes(k));
    console.log(`${lang}: ${keys.length - missing.length}/${keys.length} translated, ${missing.length} missing, ${unused.length} unused`);
    if (process.argv[3] === "--list") missing.forEach((k) => console.log("  - " + k));
  }
}
