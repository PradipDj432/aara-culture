"""Shared helpers: turn text into SVG paths using the brand fonts (no font needed to view the logo)."""
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
import os
F = os.path.join(os.path.dirname(os.path.abspath(__file__)), "fonts")
_cache = {}
def font(name, wght):
    key = (name, wght)
    if key not in _cache:
        f = TTFont(os.path.join(F, name))
        _cache[key] = instantiateVariableFont(f, {"wght": wght})
    return _cache[key]

def text_path(fname, wght, text, size, x, y, tracking=0.0, anchor="middle"):
    """Return (svg path d, width). (x, y) is the baseline point; tracking in em."""
    f = font(fname, wght)
    upem = f["head"].unitsPerEm
    cmap = f.getBestCmap(); gs = f.getGlyphSet(); hmtx = f["hmtx"]
    scale = size / upem
    names = [cmap[ord(c)] for c in text]
    adv = [hmtx[n][0] * scale for n in names]
    width = sum(adv) + tracking * size * (len(text) - 1)
    start = {"middle": x - width / 2, "start": x, "end": x - width}[anchor]
    pen = SVGPathPen(gs)
    cx = start
    for n, a in zip(names, adv):
        tp = TransformPen(pen, (scale, 0, 0, -scale, cx, y))
        gs[n].draw(tp)
        cx += a + tracking * size
    return pen.getCommands(), width

SERIF = "CormorantGaramond[wght].ttf"
ITALIC = "CormorantGaramond-Italic[wght].ttf"
SANS = "Jost[wght].ttf"


ARCH = "M0 160 V72 C0 40 38 30 60 0 C82 30 120 40 120 72 V160"
