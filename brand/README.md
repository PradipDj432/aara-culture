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

## Logo options (waiting for the owner to pick, D-021)
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

## Taglines seen on the boards (owner to pick)
- "Rooted in Grace." (on most boards)
- "Tradition, Beautifully Worn."
- "Wear Your Story."
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
The logo files are drawn by a script, so they can be tweaked and redrawn exactly:

```bash
pip install fonttools
python3 brand/tools/make_logo_options.py
```

- `tools/make_logo_options.py`: draws every option and icon into `logo-options/`.
- `tools/logo_lib.py`: turns text into shapes using the fonts in `tools/fonts/`, so the SVG files look the same on any device without the fonts installed.
- `tools/preview-board.html`: the preview page used for `00-preview-board.webp`.
- Fonts: Cormorant Garamond and Jost, both free under the SIL Open Font License (`tools/fonts/OFL-*.txt`).
