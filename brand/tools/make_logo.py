"""Draws the chosen Aara Culture logo (Bloom, D-023) into brand/logo/.

The Bloom petals are traced from the owner's own board (see trace_bloom.py); the
lettering uses the fonts named on the owner's brand boards: Cormorant Garamond
SemiBold for AARA, Montserrat for CULTURE.

Run: pip install fonttools && python3 brand/tools/make_logo.py
Then, for the PNG versions: node brand/tools/export_png.js  (needs Node + Playwright)
"""
import glob
import json
import os

from logo_lib import text_path, SERIF, ITALIC

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "..", "logo")
os.makedirs(OUT, exist_ok=True)

MONTSERRAT = "Montserrat[wght].ttf"
MAROON, IVORY, CHARCOAL = "#6E2639", "#F8F1E7", "#292522"
ROSE = "#C98F91"        # Muted Rose: the Bloom's centre petal
DEEP_ROSE = "#955457"   # the Bloom's outer leaves, as on the owner's board
TAGLINE = "Wear Your Story."

with open(os.path.join(HERE, "bloom_paths.json")) as f:
    BLOOM = json.load(f)
BX0, BY0, BX1, BY1 = BLOOM["box"]
BLOOM_RATIO = (BY1 - BY0) / (BX1 - BX0)


def F(d, colour):
    return f'<path d="{d}" fill="{colour}"/>'


def bloom(x, y, width, centre, leaf):
    """The Bloom symbol with its top-left corner at (x, y), `width` wide."""
    s = width / (BX1 - BX0)
    petals = "".join(F(p["d"], centre if p["part"] == "centre" else leaf) for p in BLOOM["petals"])
    return f'<g transform="translate({x} {y}) scale({s:.5f}) translate({-BX0} {-BY0})">{petals}</g>'


def colours(dark):
    """(name, CULTURE, bloom centre, bloom leaves) for light or dark backgrounds."""
    if dark:
        return IVORY, IVORY, IVORY, ROSE
    return MAROON, CHARCOAL, ROSE, DEEP_ROSE


def stacked(dark=False, name_only=False, tagline=False):
    """Main logo: Bloom above AARA, CULTURE under it. Drawn on a 600-wide canvas, centred on x=300."""
    word, sub, centre, leaf = colours(dark)
    a, _ = text_path(SERIF, 600, "AARA", 120, 300, 320, 0.04)
    body = bloom(200, 20, 200, centre, leaf) + F(a, word)
    if not name_only:
        c, _ = text_path(MONTSERRAT, 500, "CULTURE", 25, 300, 372, 0.45)
        body += F(c, sub)
    if tagline:
        t, _ = text_path(ITALIC, 500, TAGLINE, 30, 300, 432, 0.04)
        body += F(t, sub)
    return body


def horizontal(dark=False):
    """Side-by-side logo for the website header: Bloom, then AARA over CULTURE."""
    word, sub, centre, leaf = colours(dark)
    a, _ = text_path(SERIF, 600, "AARA", 50, 100, 50, 0.05, "start")
    c, _ = text_path(MONTSERRAT, 500, "CULTURE", 11.5, 102, 72, 0.5, "start")
    return bloom(0, 42 - 84 * BLOOM_RATIO / 2, 84, centre, leaf) + F(a, word) + F(c, sub)


def svg(viewbox, body, bg=None):
    x, y, w, h = viewbox
    rect = f'<rect x="{x}" y="{y}" width="{w}" height="{h}" fill="{bg}"/>' if bg else ""
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{x} {y} {w} {h}">{rect}{body}</svg>'


def icon(dark):
    """Square icon: just the Bloom, for the browser tab and app icons."""
    _, _, centre, leaf = colours(dark)
    w = 136
    return svg((0, 0, 200, 200), bloom(100 - w / 2, 100 - w * BLOOM_RATIO / 2 - 4, w, centre, leaf),
               MAROON if dark else IVORY)


def profile():
    """Profile picture: the full logo inside the circle WhatsApp / Instagram crop to."""
    return svg((0, 0, 600, 600), f'<g transform="translate(-45 70) scale(1.15)">{stacked()}</g>', IVORY)


FILES = {
    "aara-logo-on-light.svg": svg((100, 0, 400, 400), stacked()),
    "aara-logo-on-dark.svg": svg((100, 0, 400, 400), stacked(dark=True)),
    "aara-logo-tagline-on-light.svg": svg((100, 0, 400, 460), stacked(tagline=True)),
    "aara-logo-tagline-on-dark.svg": svg((100, 0, 400, 460), stacked(dark=True, tagline=True)),
    "aara-logo-name-only-on-light.svg": svg((100, 0, 400, 345), stacked(name_only=True)),
    "aara-logo-name-only-on-dark.svg": svg((100, 0, 400, 345), stacked(dark=True, name_only=True)),
    "aara-logo-horizontal-on-light.svg": svg((0, 0, 262, 84), horizontal()),
    "aara-logo-horizontal-on-dark.svg": svg((0, 0, 262, 84), horizontal(dark=True)),
    "aara-bloom.svg": svg((0, 0, 200, round(200 * BLOOM_RATIO)), bloom(0, 0, 200, ROSE, DEEP_ROSE)),
    "aara-bloom-on-dark.svg": svg((0, 0, 200, round(200 * BLOOM_RATIO)), bloom(0, 0, 200, IVORY, ROSE)),
    "aara-icon.svg": icon(dark=False),
    "aara-icon-on-dark.svg": icon(dark=True),
    "aara-profile-picture.svg": profile(),
}


def main():
    # Start clean, so files from an older logo don't linger.
    for old in glob.glob(os.path.join(OUT, "*")):
        os.remove(old)
    for name, content in FILES.items():
        with open(os.path.join(OUT, name), "w") as f:
            f.write(content)
    print(sorted(os.listdir(OUT)))


if __name__ == "__main__":
    main()
