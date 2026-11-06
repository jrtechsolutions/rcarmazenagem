import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const standalone = join(root, ".next", "standalone");
const deploy = join(root, "deploy");

if (!existsSync(standalone)) {
  console.error(
    "Pasta .next/standalone não encontrada. Rode `npm run build` antes.",
  );
  process.exit(1);
}

rmSync(deploy, { recursive: true, force: true });
mkdirSync(deploy, { recursive: true });

cpSync(standalone, deploy, { recursive: true });

const staticSrc = join(root, ".next", "static");
const staticDest = join(deploy, ".next", "static");
if (!existsSync(staticSrc)) {
  console.error("Pasta .next/static não encontrada após o build.");
  process.exit(1);
}
mkdirSync(join(deploy, ".next"), { recursive: true });
cpSync(staticSrc, staticDest, { recursive: true });

const publicSrc = join(root, "public");
if (existsSync(publicSrc)) {
  cpSync(publicSrc, join(deploy, "public"), { recursive: true });
}

writeFileSync(
  join(deploy, ".env.example"),
  [
    "# Copie para .env no servidor e preencha (necessário para o formulário de orçamento)",
    "CONTACT_WEBHOOK_URL=",
    "RESEND_API_KEY=",
    "CONTACT_TO_EMAIL=",
    "CONTACT_FROM_EMAIL=",
    "PORT=3000",
    "HOSTNAME=0.0.0.0",
    "",
  ].join("\n"),
);

console.log("Deploy pronto em ./deploy");
console.log("No Plesk: Application Root = pasta deploy | Startup File = server.js");
