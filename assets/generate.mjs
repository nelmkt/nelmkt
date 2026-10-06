// Generates the pixel-art SVGs used by the profile README.
// Run: node assets/generate.mjs
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const out = (name, svg) => writeFileSync(join(here, name), svg.trim() + "\n");

// --- shared pixel helpers -------------------------------------------------
const grid = (rows, x0, y0, s, colors) =>
  rows
    .flatMap((row, y) =>
      [...row].map((c, x) =>
        colors[c] ? `<rect x="${x0 + x * s}" y="${y0 + y * s}" width="${s}" height="${s}" fill="${colors[c]}"/>` : "",
      ),
    )
    .join("");

// The runner sprite from the portfolio (components/sprite.ts), standing pose.
const SPRITE = [
  "....kkkkkk......",
  "...kHHHHHHkk....",
  "..kHHhhHHHHHk.k.",
  ".kHHhHHHHHHHHkHk",
  ".kHHHHHkHHHkHHHk",
  ".kHHHkSSkHkSSHk.",
  ".kHkGWEGGGWEGkHk",
  ".kHkGEEGSGEEGkHk",
  "..kHsSSSSSSSsHk.",
  "..kHkSSSTSSSkHk.",
  "..kH.kkSSSSkkHk.",
  "...k.kSSSSk..k..",
  "...kBBBkkBBBk...",
  "..kBBBBBBBBBBk..",
  ".kBbBBBBBBBBbBk.",
  ".kSkBBBBBBBBkSk.",
  "...kBBBBBBBBk...",
  "...kPPPPPPPPk...",
  "....kPPkkPPk....",
  "....kFFkkFFk....",
];
const SPRITE_COLORS = {
  k: "#140c12", H: "#2b2b30", h: "#55505e", S: "#fde3c4", s: "#efbfa0", G: "#1d1a22",
  W: "#ffffff", E: "#8e8a99", T: "#f37aa3", B: "#26242b", b: "#4a4652", P: "#4b2f6b", F: "#2f2c34",
};

// --- banner ----------------------------------------------------------------
{
  const W = 1200, H = 340, HZ = 222; // horizon y
  let stars = "";
  for (let i = 0; i < 46; i++) {
    const r = (n) => (Math.sin(i * 97.13 + n * 13.7) + 1) / 2;
    const s = r(3) > 0.8 ? 4 : r(3) > 0.4 ? 3 : 2;
    stars += `<rect x="${(r(1) * W) | 0}" y="${(r(2) * (HZ - 30)) | 0}" width="${s}" height="${s}" fill="${r(5) > 0.75 ? "#e2b6c9" : "#fff"}" opacity="${(0.35 + r(4) * 0.5).toFixed(2)}"/>`;
  }
  // perspective floor
  let floor = "";
  for (let i = -14; i <= 14; i++) floor += `<line x1="${W / 2}" y1="${HZ}" x2="${W / 2 + i * 120}" y2="${H}"/>`;
  [6, 15, 28, 46, 70, 100].forEach((d) => (floor += `<line x1="0" y1="${HZ + d}" x2="${W}" y2="${HZ + d}"/>`));
  // sun slats (cut across the lower half of the sun)
  const slats = [[HZ - 44, 4], [HZ - 30, 6], [HZ - 16, 8]]
    .map(([y, h]) => `<rect x="${W / 2 - 140}" y="${y}" width="280" height="${h}" fill="url(#sky)"/>`)
    .join("");

  const name = "NELLY ALMAKTOUM";
  const arabic = "نيللي المكتوم";
  const mono = `font-family="'Courier New', Courier, monospace" font-weight="700"`;
  const kufi = `font-family="Tahoma, 'Segoe UI', Arial, sans-serif" font-weight="700"`;
  const shadowed = (txt, x, y, size, fam, extra = "") =>
    [["#140c14", 6], ["#a85f80", 3], ["#ffffff", 0]]
      .map(([fill, d]) => `<text x="${x + d}" y="${y + d}" font-size="${size}" ${fam} fill="${fill}" text-anchor="middle" ${extra}>${txt}</text>`)
      .join("");

  out(
    "banner.svg",
    `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" shape-rendering="crispEdges">
  <title>Nelly Almaktoum · نيللي المكتوم</title>
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="${HZ}" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#0c0910"/><stop offset=".55" stop-color="#231827"/><stop offset="1" stop-color="#43293f"/>
    </linearGradient>
    <linearGradient id="sun" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ecd28a"/><stop offset=".5" stop-color="#e2a07c"/><stop offset="1" stop-color="#cf7a9b"/>
    </linearGradient>
    <linearGradient id="rainbow" x1="0" x2="1">
      <stop offset="0" stop-color="#cf6f95"/><stop offset=".2" stop-color="#d98b5f"/><stop offset=".4" stop-color="#c7a84a"/>
      <stop offset=".6" stop-color="#5fa57e"/><stop offset=".8" stop-color="#5f93c4"/><stop offset="1" stop-color="#a06db8"/>
    </linearGradient>
    <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".35" stop-color="#fff" stop-opacity=".4"/>
    </linearGradient>
    <mask id="floorfade" maskUnits="userSpaceOnUse" x="0" y="0" width="${W}" height="${H}"><rect width="${W}" height="${H}" fill="url(#fade)"/></mask>
    <clipPath id="above"><rect width="${W}" height="${HZ}"/></clipPath>
  </defs>
  <rect width="${W}" height="${HZ}" fill="url(#sky)"/>
  <rect y="${HZ}" width="${W}" height="${H - HZ}" fill="#08030a"/>
  ${stars}
  <g clip-path="url(#above)">
    <circle cx="${W / 2}" cy="${HZ}" r="130" fill="url(#sun)" shape-rendering="geometricPrecision"/>
    ${slats}
  </g>
  <g mask="url(#floorfade)"><g stroke="url(#rainbow)" stroke-width="2">${floor}</g></g>
  <rect y="${HZ - 1}" width="${W}" height="2" fill="url(#rainbow)" opacity=".7"/>
  ${shadowed(name, W / 2, 104, 64, mono, 'letter-spacing="2"')}
  ${shadowed(arabic, W / 2, 168, 46, kufi, 'direction="rtl"')}
  ${grid(SPRITE, 150, HZ + 22, 4, SPRITE_COLORS)}
  <text x="${W / 2}" y="${H - 34}" font-size="18" ${mono} fill="#fff" text-anchor="middle" letter-spacing="3">RESEARCHER · INNOVATOR · ML ENGINEERING · GREEN TECH</text>
  <rect y="${H - 8}" width="${W}" height="8" fill="url(#rainbow)"/>
</svg>`,
  );
}

// --- divider ---------------------------------------------------------------
{
  const W = 900;
  out(
    "divider.svg",
    `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} 18" width="${W}" height="18" shape-rendering="crispEdges">
  <defs>
    <linearGradient id="rb" x1="0" x2="1"><stop offset="0" stop-color="#cf6f95"/><stop offset=".2" stop-color="#d98b5f"/><stop offset=".4" stop-color="#c7a84a"/><stop offset=".6" stop-color="#5fa57e"/><stop offset=".8" stop-color="#5f93c4"/><stop offset="1" stop-color="#a06db8"/></linearGradient>
    <linearGradient id="edge" x1="0" x2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".15" stop-color="#fff"/><stop offset=".85" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><mask id="m"><rect width="${W}" height="18" fill="url(#edge)"/></mask>
  </defs>
  <rect x="0" y="8" width="${W}" height="2" fill="url(#rb)" mask="url(#m)"/>
</svg>`,
  );
}

console.log("wrote banner.svg, divider.svg");
