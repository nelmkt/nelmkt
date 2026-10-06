// Generates the images used by the profile README.
// Run: npm install && npm run assets
// The banner is rendered to PNG with the portfolio's fonts (Press Start 2P and
// Noto Kufi Arabic Bold, both OFL), because GitHub won't load custom fonts in README SVGs.
import { Resvg } from "@resvg/resvg-js";
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const out = (name, svg) => writeFileSync(join(here, name), svg.trim() + "\n");
const outPng = (name, svg, scale) => {
  const png = new Resvg(svg, {
    fitTo: { mode: "zoom", value: scale },
    font: {
      fontFiles: [join(here, "fonts/PressStart2P-Regular.ttf"), join(here, "fonts/NotoKufiArabic-Bold.ttf")],
      loadSystemFonts: false,
      defaultFontFamily: "Press Start 2P",
    },
  })
    .render()
    .asPng();
  writeFileSync(join(here, name), png);
};

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
    stars += `<rect x="${(r(1) * W) | 0}" y="${(r(2) * (HZ - 30)) | 0}" width="${s}" height="${s}" fill="${r(5) > 0.75 ? "#ff8cc0" : "#fff"}" opacity="${(0.35 + r(4) * 0.5).toFixed(2)}"/>`;
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
  const mono = `font-family="Press Start 2P"`;
  const kufi = `font-family="Noto Kufi Arabic" font-weight="700" text-rendering="geometricPrecision"`;
  const shadowed = (txt, x, y, size, fam, extra = "") =>
    [["#1a0612", 6], ["#b8306f", 3], ["#ffffff", 0]]
      .map(([fill, d]) => `<text x="${x + d}" y="${y + d}" font-size="${size}" ${fam} fill="${fill}" text-anchor="middle" ${extra}>${txt}</text>`)
      .join("");

  // Pixel Arabic, the same way the website's PixelText does it: render the text tiny,
  // keep only solid pixels, crop, then redraw each pixel as a scale x scale square.
  const pixelArabic = (txt, cx, top, size, scale) => {
    const sw = size * 20, sh = size * 3;
    const tiny = new Resvg(
      `<svg xmlns="http://www.w3.org/2000/svg" width="${sw}" height="${sh}"><text x="${sw / 2}" y="${sh * 0.62}" font-size="${size}" ${kufi} fill="#000" text-anchor="middle">${txt}</text></svg>`,
      { font: { fontFiles: [join(here, "fonts/NotoKufiArabic-Bold.ttf")], loadSystemFonts: false } },
    ).render();
    const px = tiny.pixels;
    const on = [];
    let minX = sw, maxX = -1, minY = sh, maxY = -1;
    for (let y = 0; y < sh; y++)
      for (let x = 0; x < sw; x++)
        if (px[(y * sw + x) * 4 + 3] > 110) {
          on.push([x, y]);
          minX = Math.min(minX, x); maxX = Math.max(maxX, x);
          minY = Math.min(minY, y); maxY = Math.max(maxY, y);
        }
    const x0 = Math.round(cx - ((maxX - minX + 1) * scale) / 2);
    // dark shadow 2 pixels out, pink 1 pixel out, then white, matching the English title
    return [["#1a0612", 2], ["#b8306f", 1], ["#ffffff", 0]]
      .map(([fill, d]) =>
        `<g fill="${fill}">` +
        on.map(([x, y]) => `<rect x="${x0 + (x - minX + d) * scale}" y="${top + (y - minY + d) * scale}" width="${scale}" height="${scale}"/>`).join("") +
        `</g>`,
      )
      .join("");
  };

  outPng(
    "banner.png",
    `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" shape-rendering="crispEdges">
  <title>Nelly Almaktoum · نيللي المكتوم</title>
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="${HZ}" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#08030a"/><stop offset=".55" stop-color="#2a0920"/><stop offset="1" stop-color="#5c1340"/>
    </linearGradient>
    <linearGradient id="sun" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffd000"/><stop offset=".5" stop-color="#ff6a00"/><stop offset="1" stop-color="#ff1f7a"/>
    </linearGradient>
    <linearGradient id="rainbow" x1="0" x2="1">
      <stop offset="0" stop-color="#ff1f7a"/><stop offset=".2" stop-color="#ff6a00"/><stop offset=".4" stop-color="#ffd000"/>
      <stop offset=".6" stop-color="#00d25b"/><stop offset=".8" stop-color="#0091ff"/><stop offset="1" stop-color="#8a2be2"/>
    </linearGradient>
    <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ff3d8b" stop-opacity="0"/><stop offset=".35" stop-color="#ff3d8b" stop-opacity=".45"/>
    </linearGradient>
    <clipPath id="above"><rect width="${W}" height="${HZ}"/></clipPath>
  </defs>
  <rect width="${W}" height="${HZ}" fill="url(#sky)"/>
  <rect y="${HZ}" width="${W}" height="${H - HZ}" fill="#08030a"/>
  ${stars}
  <g clip-path="url(#above)">
    <circle cx="${W / 2}" cy="${HZ}" r="130" fill="url(#sun)" shape-rendering="geometricPrecision"/>
    ${slats}
  </g>
  <g stroke="url(#fade)" stroke-width="2">${floor}</g>
  <rect y="${HZ - 1}" width="${W}" height="2" fill="#ff3d8b" opacity=".6"/>
  ${shadowed(name, W / 2, 98, 50, mono)}
  ${pixelArabic(arabic, W / 2, 122, 14, 3)}
  ${grid(SPRITE, 64, HZ + 22, 4, SPRITE_COLORS)}
  <text x="${W / 2}" y="${H - 34}" font-size="13" ${mono} fill="#fff" text-anchor="middle" letter-spacing="2">RESEARCHER · INNOVATOR · ML ENGINEER · GREEN TECH</text>
  <rect y="${H - 8}" width="${W}" height="8" fill="url(#rainbow)"/>
</svg>`,
    2,
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
    <linearGradient id="rb" x1="0" x2="1"><stop offset="0" stop-color="#ff4f9a"/><stop offset=".2" stop-color="#ff8a3d"/><stop offset=".4" stop-color="#f2c12e"/><stop offset=".6" stop-color="#2fbf71"/><stop offset=".8" stop-color="#3d9be9"/><stop offset="1" stop-color="#a855e0"/></linearGradient>
    <linearGradient id="edge" x1="0" x2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".15" stop-color="#fff"/><stop offset=".85" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><mask id="m"><rect width="${W}" height="18" fill="url(#edge)"/></mask>
  </defs>
  <rect x="0" y="8" width="${W}" height="2" fill="url(#rb)" mask="url(#m)"/>
</svg>`,
  );
}

console.log("wrote banner.png, divider.svg");
