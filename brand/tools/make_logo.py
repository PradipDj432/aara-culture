"""Draws the chosen Aara Culture logo (Palace arch, D-022) into brand/logo/.

Run: pip install fonttools && python3 brand/tools/make_logo.py
Then, for the PNG versions: node brand/tools/export_png.js  (needs Node + Playwright)
"""
import os

from logo_lib import text_path, SERIF, ITALIC, SANS
from make_logo_options import (
    MAROON, IVORY, GOLD, CHARCOAL, ARCH_BIG, ARCH_IN, F, ST, lotus,
)

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "logo")
os.makedirs(OUT, exist_ok=True)
TAGLINE = "Wear Your Story."


def svg(viewbox, body, bg=None):
    w, h = viewbox[2], viewbox[3]
    rect = f'<rect x="{viewbox[0]}" y="{viewbox[1]}" width="{w}" height="{h}" fill="{bg}"/>' if bg else ""
    vb = " ".join(str(v) for v in viewbox)
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{vb}">{rect}{body}</svg>'


def arch_lockup(word, sub, gold, tagline=True):
    """The full logo: gold arch, lotus, AARA, CULTURE, and the tagline under the arch."""
    a, _ = text_path(SERIF, 600, "AARA", 74, 300, 258, 0.04)
    c, _ = text_path(SANS, 500, "CULTURE", 19, 300, 298, 0.42)
    body = (ST(ARCH_BIG, gold, 3) + ST(ARCH_IN, gold, 1.2) + lotus(266, 112, 0.57, gold, 2.2)
            + F(a, word) + F(c, sub))
    if tagline:
        t, _ = text_path(ITALIC, 500, TAGLINE, 28, 300, 430, 0.04)
        body += F(t, sub)
    return body


def mini_arch(gold, x, y, s):
    """Small arch with the lotus inside, for the side-by-side logo and the icon."""
    return (f'<g transform="translate({x} {y}) scale({s}) translate(-150 -30)">'
            f'{ST(ARCH_BIG, gold, 2.6 / s)}{ST(ARCH_IN, gold, 1.1 / s)}'
            f'{lotus(250, 150, 0.85, gold, 1.7 / s)}</g>')


def horizontal(word, sub, gold):
    """Side-by-side logo for the website header: small arch, then AARA over CULTURE."""
    a, _ = text_path(SERIF, 600, "AARA", 46, 80, 50, 0.06, "start")
    c, _ = text_path(SANS, 500, "CULTURE", 13, 82, 76, 0.52, "start")
    return mini_arch(gold, 0, 2, 0.2) + F(a, word) + F(c, sub)


def icon(gold, letter):
    """Square icon: arch with lotus and an A, for the browser tab and profile pictures."""
    a, _ = text_path(SERIF, 600, "A", 84, 100, 152)
    return (f'<g transform="translate(100 100) scale(0.38) translate(-300 -205)">'
            f'{ST(ARCH_BIG, gold, 7.5)}{ST(ARCH_IN, gold, 2.8)}</g>'
            + lotus(81, 58, 0.32, gold, 2) + F(a, letter))


FILES = {
    # Full logo, transparent background
    "aara-logo-on-light.svg": svg((130, 20, 340, 430), arch_lockup(MAROON, CHARCOAL, GOLD)),
    "aara-logo-on-dark.svg": svg((130, 20, 340, 430), arch_lockup(IVORY, IVORY, GOLD)),
    "aara-logo-no-tagline-on-light.svg": svg((140, 20, 320, 370), arch_lockup(MAROON, CHARCOAL, GOLD, False)),
    "aara-logo-no-tagline-on-dark.svg": svg((140, 20, 320, 370), arch_lockup(IVORY, IVORY, GOLD, False)),
    # Side-by-side logo (website header)
    "aara-logo-horizontal-on-light.svg": svg((0, 0, 232, 84), horizontal(MAROON, CHARCOAL, GOLD)),
    "aara-logo-horizontal-on-dark.svg": svg((0, 0, 232, 84), horizontal(IVORY, IVORY, GOLD)),
    # Square icon (browser tab, WhatsApp / Instagram picture)
    "aara-icon.svg": svg((0, 0, 200, 200), icon(GOLD, IVORY), MAROON),
    "aara-icon-on-light.svg": svg((0, 0, 200, 200), icon(GOLD, MAROON), IVORY),
}


def main():
    for name, content in FILES.items():
        with open(os.path.join(OUT, name), "w") as f:
            f.write(content)
    print(sorted(os.listdir(OUT)))


if __name__ == "__main__":
    main()
