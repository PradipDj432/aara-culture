// Makes the PNG and JPG versions of the logo, and the link preview image.
// Run from the repo root after make_logo.py:  node brand/tools/export_png.js
// Needs Node and Playwright (npm i -g playwright). Not part of the website.
const fs = require("fs");
const os = require("os");
const path = require("path");
const { chromium } = require("playwright");

const ROOT = path.resolve(__dirname, "..", "..");
const url = (p) => "file://" + path.join(ROOT, p);
const MAROON = "#6e2639";
const IVORY = "#f8f1e7";

// [output file, width, height, html]
const JOBS = [
  ["brand/logo/aara-icon-180.png", 180, 180, `<img src="${url("brand/logo/aara-icon.svg")}" style="width:180px">`],
  ["brand/logo/aara-icon-512.png", 512, 512, `<img src="${url("brand/logo/aara-icon.svg")}" style="width:512px">`],
  ["brand/logo/aara-profile-picture-1080.png", 1080, 1080, `<img src="${url("brand/logo/aara-profile-picture.svg")}" style="width:1080px">`],
  ["brand/logo/aara-logo-on-light-2000.png", 2000, 2000,
    `<div style="background:${IVORY};width:2000px;height:2000px;display:flex;align-items:center;justify-content:center">
       <img src="${url("brand/logo/aara-logo-on-light.svg")}" style="height:1500px"></div>`],
  ["brand/logo/aara-logo-on-dark-2000.png", 2000, 2000,
    `<div style="background:${MAROON};width:2000px;height:2000px;display:flex;align-items:center;justify-content:center">
       <img src="${url("brand/logo/aara-logo-on-dark.svg")}" style="height:1500px"></div>`],
  // Link preview for WhatsApp / Instagram / Facebook: photo on the left, logo on ivory on the right.
  ["images/share.jpg", 1200, 630,
    `<div style="display:flex;width:1200px;height:630px">
       <img src="${url("images/hero.jpg")}" style="width:504px;height:630px;object-fit:cover">
       <div style="flex:1;background:${IVORY};display:flex;align-items:center;justify-content:center">
         <img src="${url("brand/logo/aara-logo-on-light.svg")}" style="height:400px"></div></div>`],
];

(async () => {
  const browser = await chromium.launch();
  for (const [out, w, h, html] of JOBS) {
    const page = await browser.newPage({ viewport: { width: w, height: h } });
    // Load from a file (not setContent) so the file:// images are allowed to load.
    const tmp = path.join(os.tmpdir(), "aara-export.html");
    fs.writeFileSync(tmp, `<!doctype html><body style="margin:0">${html}</body>`);
    await page.goto("file://" + tmp, { waitUntil: "load" });
    const broken = await page.evaluate(() => [...document.images].filter((i) => !i.naturalWidth).length);
    if (broken) throw new Error(out + ": " + broken + " image(s) did not load");
    await page.waitForTimeout(200);
    const options = { path: path.join(ROOT, out), clip: { x: 0, y: 0, width: w, height: h } };
    if (out.endsWith(".jpg")) Object.assign(options, { type: "jpeg", quality: 85 });
    await page.screenshot(options);
    await page.close();
    console.log("made", out);
  }
  await browser.close();
})();
