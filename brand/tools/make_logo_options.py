"""Draws the Aara Culture logo options into brand/logo-options/.

Run: pip install fonttools && python3 brand/tools/make_logo_options.py
"""
import os, sys, math
sys.path.insert(0, os.path.dirname(__file__))
from logo_lib import text_path, font, SERIF, ITALIC, SANS
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen

MAROON, IVORY, GOLD, ROSE, CHARCOAL = "#6E2639", "#F8F1E7", "#B88A44", "#C98F91", "#292522"
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "logo-options"); os.makedirs(OUT, exist_ok=True)

def F(d, c): return f'<path d="{d}" fill="{c}"/>'
def ST(d, c, w=2.5): return f'<path d="{d}" fill="none" stroke="{c}" stroke-width="{w}" stroke-linecap="round" stroke-linejoin="round"/>'

def char_path(fname, wght, ch, size, x, y, angle=0):
    """One glyph, centred horizontally on (x, y) baseline, rotated by angle (deg)."""
    f = font(fname, wght); upem = f["head"].unitsPerEm; gs = f.getGlyphSet()
    n = f.getBestCmap()[ord(ch)]; s = size / upem; adv = f["hmtx"][n][0] * s
    a = math.radians(angle); ca, sa = math.cos(a), math.sin(a)
    pen = SVGPathPen(gs)
    # glyph space -> local (scale, flip, centre) -> rotate -> translate
    tp = TransformPen(pen, (s * ca, s * sa, s * sa, -s * ca, x - (adv / 2) * ca, y - (adv / 2) * sa))
    gs[n].draw(tp)
    return pen.getCommands(), adv

def arc_text(fname, wght, text, size, cx, cy, r, start_deg, tracking=0.25):
    """Text along the top of a circle, reading left to right, centred on start_deg (-90 = top)."""
    f = font(fname, wght); upem = f["head"].unitsPerEm; cmap = f.getBestCmap(); hmtx = f["hmtx"]
    s = size / upem
    advs = [hmtx[cmap[ord(c)]][0] * s + tracking * size for c in text]
    total = sum(advs) - tracking * size
    ang = start_deg - math.degrees(total / r) / 2
    out = ""
    for c, a in zip(text, advs):
        mid = ang + math.degrees((a - tracking * size) / 2 / r)
        if c != " ":
            x = cx + r * math.cos(math.radians(mid)); y = cy + r * math.sin(math.radians(mid))
            d, _ = char_path(fname, wght, c, size, x, y, mid + 90)
            out += d
        ang += math.degrees(a / r)
    return out

LOTUS3 = ("M60 4 C73 20 74 44 60 66 C46 44 47 20 60 4 Z "
          "M60 66 C46 66 24 58 8 38 C22 32 38 36 48 46 C54 52 58 58 60 66 Z "
          "M60 66 C74 66 96 58 112 38 C98 32 82 36 72 46 C66 52 62 58 60 66 Z "
          "M44 26 C38 22 38 14 44 13 M76 26 C82 22 82 14 76 13")
def lotus(x, y, scale, color, w=2.6):
    return f'<g transform="translate({x} {y}) scale({scale})">{ST(LOTUS3, color, w / scale)}</g>'

SWASH_L = "M124 193 C82 184 34 198 28 232 C24 256 44 272 66 262 C46 266 34 252 38 233 C44 204 84 194 124 198 Z"
SWASH_R = "M503 222 C530 236 556 254 548 270 C540 286 506 286 466 272 C506 280 536 278 540 267 C546 254 526 240 503 230 Z"

def divider(cx, y, color, half=58):
    return (ST(f"M{cx-half} {y} H{cx-9} M{cx+9} {y} H{cx+half}", color, 1.6)
            + f'<circle cx="{cx}" cy="{y}" r="5" fill="none" stroke="{color}" stroke-width="1.8"/><circle cx="{cx}" cy="{y}" r="1.8" fill="{color}"/>')

def svg(w, h, body, bg=None):
    r = f'<rect width="{w}" height="{h}" fill="{bg}"/>' if bg else ""
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}">{r}{body}</svg>'

# 1 — Signature (lotus + swash AARA)
def signature(word, sub, gold, tag="Rooted in Grace."):
    a, _ = text_path(SERIF, 600, "AARA", 150, 300, 230, 0.02)
    c, _ = text_path(SANS, 500, "CULTURE", 30, 300, 292, 0.42)
    t, _ = text_path(ITALIC, 500, tag, 32, 300, 388, 0.04) if tag else ("", 0)
    return (lotus(234, 26, 1.1, gold) + F(a, word) + F(SWASH_L, word) + F(SWASH_R, word)
            + F(c, sub) + divider(300, 332, gold) + (F(t, sub) if tag else ""))

# 2 — Modern minimal
def minimal(word, sub, gold, tag="Tradition, Beautifully Worn."):
    a, _ = text_path(SERIF, 600, "AARA", 150, 300, 200, 0.06)
    c, _ = text_path(SANS, 500, "CULTURE", 30, 300, 262, 0.42)
    t, _ = text_path(ITALIC, 500, tag, 30, 300, 352, 0.03)
    return F(a, word) + F(c, sub) + ST("M276 300 H324", gold, 2) + F(t, sub)

# 3 — AC monogram in a ring with curved name
LEAF = "M0 0 C6 -10 18 -14 28 -12 C24 -2 12 4 0 0 Z M0 0 C-2 -10 2 -22 10 -28 C14 -18 10 -6 0 0 Z"
def monogram(word, sub, gold, ring_text=True):
    a, _ = text_path(SERIF, 600, "A", 170, 272, 214)
    c, _ = text_path(SERIF, 500, "C", 150, 330, 262)
    body = (f'<circle cx="300" cy="200" r="132" fill="none" stroke="{gold}" stroke-width="1.6"/>'
            + F(c, word) + F(a, word)
            + f'<g transform="translate(356 124) scale(1.15)">{F(LEAF, gold)}</g>')
    if ring_text:
        body += F(arc_text(SANS, 500, "AARA CULTURE", 20, 300, 200, 150, -90, 0.42), sub)
    return body

# 4 — Arch with lotus inside
ARCH_BIG = "M150 380 V170 C150 108 222 92 300 30 C378 92 450 108 450 170 V380"
ARCH_IN = "M162 380 V174 C162 118 230 102 300 46 C370 102 438 118 438 174 V380"
def arch(word, sub, gold, tag="Wear Your Story."):
    a, _ = text_path(SERIF, 600, "AARA", 74, 300, 258, 0.04)
    c, _ = text_path(SANS, 500, "CULTURE", 19, 300, 298, 0.42)
    t, _ = text_path(ITALIC, 500, tag, 28, 300, 430, 0.04)
    return (ST(ARCH_BIG, gold, 3) + ST(ARCH_IN, gold, 1.2) + lotus(266, 112, 0.57, gold, 2.2)
            + F(a, word) + F(c, sub) + F(t, sub))

# 5 — Diamond floral motif + wordmark
PETAL = "M0 -10 C24 -32 24 -66 0 -96 C-24 -66 -24 -32 0 -10 Z"
SEED = "M0 -34 C7 -44 7 -56 0 -66 C-7 -56 -7 -44 0 -34 Z"
GEM = "M0 -60 L9 -72 L0 -84 L-9 -72 Z"
def floral_mark(petal, seed, gem, cx, cy, s):
    g = ""
    for k in range(4):
        g += f'<g transform="rotate({k*90})">{ST(PETAL, petal, 7)}{F(SEED, seed)}</g>'
        g += f'<g transform="rotate({k*90+45})">{F(GEM, gem)}</g>'
    return f'<g transform="translate({cx} {cy}) scale({s})">{g}</g>'
def floral(word, sub, gold, tag="Rooted in Grace."):
    a, _ = text_path(SERIF, 600, "AARA CULTURE", 54, 300, 318, 0.22)
    t, _ = text_path(ITALIC, 500, tag, 28, 300, 372, 0.04)
    return floral_mark(word, word, gold, 300, 140, 1.12) + F(a, word) + F(t, sub)

def main():
    OPTIONS = [("1", signature, 600, 410), ("2", minimal, 600, 380), ("3", monogram, 600, 400), ("4", arch, 600, 450), ("5", floral, 600, 400)]
    for num, fn, w, h in OPTIONS:
        open(f"{OUT}/opt{num}-light.svg", "w").write(svg(w, h, fn(MAROON, CHARCOAL, GOLD), IVORY))
        open(f"{OUT}/opt{num}-dark.svg", "w").write(svg(w, h, fn(IVORY, IVORY, GOLD), MAROON))

    # Icons (profile picture / app / browser tab): 200 x 200
    def icon(body): return svg(200, 200, body, MAROON)
    open(f"{OUT}/icon-ac.svg", "w").write(icon(f'<g transform="translate(-50 0) scale(0.5)">{monogram(IVORY, IVORY, GOLD, ring_text=False)}</g>'))
    open(f"{OUT}/icon-lotus.svg", "w").write(icon(lotus(30, 52, 1.17, GOLD, 3)))
    open(f"{OUT}/icon-floral.svg", "w").write(icon(floral_mark(IVORY, IVORY, GOLD, 100, 100, 0.78)))
    a, _ = text_path(SERIF, 600, "A", 120, 100, 150)
    open(f"{OUT}/icon-a.svg", "w").write(icon(lotus(70, 22, 0.5, GOLD, 2.2) + F(a, IVORY)))
    print(sorted(os.listdir(OUT)))


if __name__ == "__main__":
    main()
