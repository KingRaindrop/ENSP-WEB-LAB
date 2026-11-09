// 把根目录的前端文件同步到 cf_ver/public，避免两份代码手动维护而漂移。
// index.html 不同步：cf_ver 版额外引入了 cf-sync.js 与云端 CSP。
import { copyFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..", "..");
const target = join(here, "..", "public");
const files = [
  "app.js",
  "app-improvements.js",
  "command-autocomplete.js",
  "styles.css",
  "styles-improvements.css",
  "sample-topology.txt"
];

for (const file of files) {
  copyFileSync(join(root, file), join(target, file));
  console.log(`synced ${file}`);
}
