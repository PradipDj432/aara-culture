# Aara Culture — Brand

Everything about how Aara Culture looks: colours, fonts, logo options and the owner's reference boards. Use the same colours, fonts and logo files everywhere (website, tags, packaging, WhatsApp, Instagram).

**Spelling:** always **Aara Culture**. Some AI-made boards say "Araa" or "Cluture"; those are mistakes.

## Colours (final, D-020)
| Name | Hex | Use it for |
|---|---|---|
| Maroon | `#6E2639` | Logo wordmark, headings, buttons, dark backgrounds |
| Ivory | `#F8F1E7` | Page and card backgrounds, text on maroon |
| Antique Gold | `#B88A44` | Lotus, thin lines, small decorations |
| Muted Rose | `#C98F91` | Soft accents and backgrounds |
| Charcoal | `#292522` | Body text, "CULTURE" in the logo |

Gold and rose are too light for small text on ivory. Use them for shapes and lines, and keep text maroon or charcoal.

## Fonts
| Font | Use it for |
|---|---|
| **Cormorant Garamond** (SemiBold in the logo) | Logo, headings |
| **Cormorant Garamond Italic** | Taglines ("Rooted in Grace.") |
| **Jost** | Labels, buttons, body text |

The owner's boards suggest Montserrat or Manrope for body text. Jost is the same clean geometric style and is already on the website, so we keep Jost. Don't retype the logo with fonts: use the logo files below, so the letters and sizes stay exactly the same everywhere.

## The logo: Palace arch (chosen, D-022)
A gold Indian palace arch with a lotus, **AARA** in maroon, **CULTURE** in charcoal, and the tagline **"Wear Your Story."** Files are in `logo/`, made by `tools/make_logo.py` and `tools/export_png.js`.

| Use | File |
|---|---|
| Main logo on light backgrounds (packaging, tags, posts) | `logo/aara-logo-on-light.svg` · print: `logo/aara-logo-on-light-2000.png` |
| Main logo on maroon / dark backgrounds | `logo/aara-logo-on-dark.svg` · print: `logo/aara-logo-on-dark-2000.png` |
| Without the tagline | `logo/aara-logo-no-tagline-on-light.svg`, `…-on-dark.svg` |
| Side-by-side version (website header, narrow spaces) | `logo/aara-logo-horizontal-on-light.svg`, `…-on-dark.svg` |
| Icon (browser tab, app icon) | `logo/aara-icon.svg` (maroon), `logo/aara-icon-on-light.svg` (ivory), `logo/aara-icon-180.png`, `logo/aara-icon-512.png` |
| **WhatsApp / Instagram profile picture** | `logo/aara-profile-picture-1080.png` |
| Link preview (when the website is shared) | `../images/share.jpg` |

Rules:
- Use these files; don't retype the logo or change its colours.
- Keep empty space around the logo, at least the height of "CULTURE" on every side.
- On ivory, use the "on-light" files. On maroon or photos, use the "on-dark" files.
- In small spaces (under about 120px tall), use the side-by-side version or the icon, not the full arch.

## Other logo options (not chosen, D-021)
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

Whichever the owner picks is traced exactly into clean vector files, checked side by side with the original, then replaces the current logo.

## Taglines from the boards
- **"Wear Your Story."** (in use, part of the chosen arch logo)
- "Rooted in Grace."
- "Tradition, Beautifully Worn."
- "More than fashion. A culture you wear."

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
python3 brand/tools/make_logo.py      # the chosen logo -> logo/
node brand/tools/export_png.js        # PNG / JPG versions + images/share.jpg (needs Node + Playwright)
python3 brand/tools/make_logo_options.py   # the other options -> logo-options/
```

- `tools/make_logo.py`: draws the chosen logo, the side-by-side version and the icon into `logo/`. The tagline is set at the top of this file.
- `tools/export_png.js`: makes the PNG/JPG versions and the website's link preview image.
- `tools/make_logo_options.py`: draws every option and icon into `logo-options/`.
- `tools/logo_lib.py`: turns text into shapes using the fonts in `tools/fonts/`, so the SVG files look the same on any device without the fonts installed.
- `tools/preview-board.html`: the preview page used for `00-preview-board.webp`.
- Fonts: Cormorant Garamond and Jost, both free under the SIL Open Font License (`tools/fonts/OFL-*.txt`).
