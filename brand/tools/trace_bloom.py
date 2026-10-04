"""Traces the owner's "03 Bloom" symbol (brand/references/03-icon-16-symbols.webp) into
vector petals, saved to brand/tools/bloom_paths.json. make_logo.py builds the logo from that file.

Run once from the repo root (only needed if the source image changes):
  pip install potracer scipy numpy pillow && python3 brand/tools/trace_bloom.py
"""
import json
import os

import numpy as np
import potrace
from PIL import Image
from scipy import ndimage

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..")
SOURCE = os.path.join(ROOT, "brand", "references", "03-icon-16-symbols.webp")
OUT = os.path.join(ROOT, "brand", "tools", "bloom_paths.json")
CROP = (725, 88, 920, 246)          # the Bloom symbol inside the board image
UP = 8                               # upscale before tracing, for smooth curves
BACKGROUND = np.array([250, 245, 238])


def main():
    board = Image.open(SOURCE).convert("RGB").crop(CROP)
    big = np.array(board.resize((board.width * UP, board.height * UP), Image.LANCZOS)).astype(float)
    ink = np.abs(big - BACKGROUND).sum(2) > 75
    ink = ndimage.binary_opening(ink, iterations=2)
    labels, count = ndimage.label(ink)
    petals = []
    for i in range(1, count + 1):
        mask = labels == i
        if mask.sum() < 2000:
            continue                 # specks
        core = ndimage.binary_erosion(mask, iterations=6)
        colour = np.median(big[core if core.any() else mask], 0)
        smooth = ndimage.gaussian_filter(mask.astype(float), sigma=5) > 0.5   # even out the AI-image texture
        # potracer fills the dark (False) pixels, so pass the inverse of the petal mask.
        curves = potrace.Bitmap(~smooth).trace(
            turdsize=10, turnpolicy=potrace.POTRACE_TURNPOLICY_MINORITY,
            alphamax=1.2, opticurve=True, opttolerance=0.5)
        d = []
        for curve in curves:
            d.append(f"M{curve.start_point.x:.1f} {curve.start_point.y:.1f}")
            for seg in curve.segments:
                if seg.is_corner:
                    d.append(f"L{seg.c.x:.1f} {seg.c.y:.1f}L{seg.end_point.x:.1f} {seg.end_point.y:.1f}")
                else:
                    d.append(f"C{seg.c1.x:.1f} {seg.c1.y:.1f} {seg.c2.x:.1f} {seg.c2.y:.1f} "
                             f"{seg.end_point.x:.1f} {seg.end_point.y:.1f}")
            d.append("Z")
        ys, xs = np.nonzero(mask)
        petals.append({
            "d": "".join(d),
            "part": "centre" if colour.mean() > 130 else "leaf",   # lighter centre petal, deeper leaves
            "box": [int(xs.min()), int(ys.min()), int(xs.max()), int(ys.max())],
        })
    petals.sort(key=lambda p: p["box"][0])
    box = [min(p["box"][0] for p in petals), min(p["box"][1] for p in petals),
           max(p["box"][2] for p in petals), max(p["box"][3] for p in petals)]
    with open(OUT, "w") as f:
        json.dump({"source": "brand/references/03-icon-16-symbols.webp", "box": box, "petals": petals}, f)
    print(f"{len(petals)} petals ->", OUT, "box", box)


if __name__ == "__main__":
    main()
