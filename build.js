import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const esbuild = existsSync(path.join(root, ".tools", "esbuild.exe"))
  ? path.join(root, ".tools", "esbuild.exe")
  : "esbuild";

execFileSync(
  esbuild,
  [
    "src/main.tsx",
    "--bundle",
    "--outdir=dist",
    "--format=esm",
    "--jsx=automatic",
    "--loader:.png=file",
    "--loader:.jpg=file",
    "--loader:.svg=file",
    "--asset-names=assets/[name]",
  ],
  { cwd: root, stdio: "inherit" },
);
