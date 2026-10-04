# Aara Culture — Brand files

This folder holds the brand's files: the logo, the owner's reference boards, the logo options that weren't chosen, and the scripts and fonts that draw the logo.

**The brand guide is [`../branding.md`](../branding.md)**: name and spelling, logo (which file to use where), colours, fonts and type styles, photos, website look, social media and words. Read that first.

| Folder | What's in it |
|---|---|
| `logo/` | The logo (Bloom, D-023): SVG and PNG files, icons, profile picture. The website loads its logo and browser icon from here. Which file to use where: `branding.md` → "Logo" |
| `references/` | The owner's own brand boards (see below) |
| `logo-options/` | Earlier logo options that weren't chosen (see below) |
| `tools/` | Scripts and fonts that draw the logo files (see "Change or redraw the logos") |

## Earlier logo options (not chosen, D-021, D-022)
The Palace arch (D-022) was used on the website for a short time, then replaced by the Bloom.
Redrawn from the owner's boards (`references/05` and `06`) as clean vector files. Each comes in a light version (on ivory) and a dark version (on maroon).

| # | Name | Files | Best for |
|---|---|---|---|
| 1 | Signature: lotus + flowing AARA + "Rooted in Grace." | `logo-options/opt1-light.svg`, `opt1-dark.svg` | Main logo |
| 2 | Modern minimal: AARA + CULTURE, no symbol | `opt2-light.svg`, `opt2-dark.svg` | Small print, invoices |
| 3 | AC monogram in a ring | `opt3-light.svg`, `opt3-dark.svg` | Tags, stickers |
| 4 | Palace arch with lotus | `opt4-light.svg`, `opt4-dark.svg` | Packaging, social posts |
| 5 | Diamond floral motif | `opt5-light.svg`, `opt5-dark.svg` | Pattern, packaging |

Profile and app icons (on maroon): `icon-ac.svg`, `icon-lotus.svg`, `icon-floral.svg`, `icon-a.svg`.

All options on one page: `logo-options/00-preview-board.webp`.

**Round 4 (owner's request: options taken only from their own boards, nothing new):**
- `logo-options/10-logos-from-your-boards.webp`: the 6 full logos cut straight out of boards 5 and 6 (1 Signature, 2 Modern minimal, 3 AC monogram, 4 Palace arch with scalloped top, 5 Reversed, 6 Single colour).
- `logo-options/11-symbols-board-3.webp`: symbols 01–16 from board 3.
- `logo-options/12-symbols-board-4.webp`: symbols 01.1–03.4 from board 4 (the board labels 03.2 as "02.2" by mistake).
- `logo-options/13-bloom-original-vs-traced.webp`: the owner's Bloom next to the traced version (the one chosen, D-023).

Whichever the owner picks is traced exactly into clean vector files, checked side by side with the original, then replaces the current logo.

## Reference images from the owner (`references/`)
| File | What it is |
|---|---|
| `01-board-silhouettes-rejected.jpg` | First board. **Rejected:** man/woman silhouettes, and it misspells the name as "ARAA". Its lifestyle sub-brand idea is in `business.md`. |
| `02-icon-diamond-floral-variations.webp` | Diamond floral icon, 3 variations |
| `03-icon-16-symbols.webp` | 16 symbol ideas (lotus, arch, mandala, paisley, jaali …) |
| `04-icon-mandala-floral-double-a.webp` | Mandala, diamond floral and double-A variations |
| `05-brand-board-concepts.webp` | Brand board: 4 logo concepts, colours, fonts, packaging, tags |
| `06-brand-board-final-colours.webp` | Brand board with the **final colours** and the main logo direction |

## Change or redraw the logos
The logo files are drawn by scripts, so they can be tweaked and redrawn exactly:

```bash
pip install fonttools
python3 brand/tools/trace_bloom.py    # only if the Bloom source image changes (needs potracer, scipy, numpy, pillow)
python3 brand/tools/make_logo.py      # the chosen logo -> logo/
node brand/tools/export_png.js        # PNG / JPG versions + images/share.jpg (needs Node + Playwright)
python3 brand/tools/make_logo_options.py   # the other options -> logo-options/
```

- `tools/trace_bloom.py`: traces the Bloom from `references/03-icon-16-symbols.webp` into `tools/bloom_paths.json`.
- `tools/make_logo.py`: draws the chosen logo, all its versions and the icons into `logo/`. Colours and the tagline are set at the top of this file.
- `tools/export_png.js`: makes the PNG/JPG versions and the website's link preview image.
- `tools/make_logo_options.py`: draws every option and icon into `logo-options/`.
- `tools/logo_lib.py`: turns text into shapes using the fonts in `tools/fonts/`, so the SVG files look the same on any device without the fonts installed.
- `tools/preview-board.html`: the preview page used for `00-preview-board.webp`.
- Fonts: Cormorant Garamond, Montserrat and Allura (the brand fonts), plus Jost (used only by the old logo options), all free under the SIL Open Font License (`tools/fonts/OFL-*.txt`).
