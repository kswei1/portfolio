#!/usr/bin/env python3
"""Generate the hero "workflow" Lottie animation.

Sequential reveal: Code -> Design -> Prototyping -> Implementation, arranged in a
2x2 loop with draw-on connectors. Styled to match the hero line-art palette.
Targets the lottie-web SVG renderer used on the portfolio.
"""
import json, math

FR = 60
W = H = 360
OP = 300  # 5s

# ---- palette (0..1) -------------------------------------------------------
def hx(h):
    h = h.lstrip('#')
    return [int(h[i:i+2], 16) / 255 for i in (0, 2, 4)]

INK    = hx('2E1B63')   # deep indigo line-art (matches the cocktail scene)
CARD   = hx('FFFFFF')   # card fill
PAPER  = hx('FAFAF8')   # bg
PILL   = hx('F2ECF0')   # label pill / soft fill
LAV    = hx('DAD2EC')   # lavender accent fill
BLUSH  = hx('EAAFC8')   # pink
DEEP   = hx('2E1B63')   # label text (matches ink)
MINT   = hx('7FB98B')   # check green
PEACH  = hx('F2A65A')   # rocket / mascot accent

# global stroke multiplier — bolder weight to match the cocktail illustration
SW = 1.45

# ---- low level shape helpers ---------------------------------------------
def rc(w, h, r, cx=0, cy=0):
    return {"ty": "rc", "p": {"a": 0, "k": [cx, cy]}, "s": {"a": 0, "k": [w, h]}, "r": {"a": 0, "k": r}}

def el(w, h, cx=0, cy=0):
    return {"ty": "el", "p": {"a": 0, "k": [cx, cy]}, "s": {"a": 0, "k": [w, h]}}

def sh(pts, closed=True):
    n = len(pts)
    return {"ty": "sh", "ks": {"a": 0, "k": {
        "c": closed,
        "v": [list(p) for p in pts],
        "i": [[0, 0] for _ in range(n)],
        "o": [[0, 0] for _ in range(n)],
    }}}

def fill(rgb, o=100):
    return {"ty": "fl", "c": {"a": 0, "k": rgb + [1]}, "o": {"a": 0, "k": o}}

def stroke(rgb, w=2.2, o=100, cap=2, join=2, dash=None):
    s = {"ty": "st", "c": {"a": 0, "k": rgb + [1]}, "o": {"a": 0, "k": o},
         "w": {"a": 0, "k": round(w * SW, 2)}, "lc": cap, "lj": join}
    if dash:
        # full bodymovin dash format requires offset(o) + dash(d) + gap(g)
        s["d"] = [
            {"n": "o", "nm": "offset", "v": {"a": 0, "k": 0}},
            {"n": "d", "nm": "dash",   "v": {"a": 0, "k": dash}},
            {"n": "g", "nm": "gap",    "v": {"a": 0, "k": dash}},
        ]
    return s

def trf(pos=(0, 0), anc=(0, 0), sc=(100, 100), rot=0, o=100):
    return {"ty": "tr", "p": {"a": 0, "k": list(pos)}, "a": {"a": 0, "k": list(anc)},
            "s": {"a": 0, "k": list(sc)}, "r": {"a": 0, "k": rot}, "o": {"a": 0, "k": o}}

def group(items, nm="g"):
    return {"ty": "gr", "nm": nm, "it": items + [trf()]}

# ---- keyframe helpers -----------------------------------------------------
def pop_in(start, dur=18):
    """Layer transform: scale+opacity overshoot reveal beginning at `start`."""
    o_out = {"x": [0.0], "y": [0.0]}
    i_in = {"x": [0.35], "y": [1.0]}
    sc = {"a": 1, "k": [
        {"t": start, "s": [42, 42], "o": o_out, "i": i_in},
        {"t": start + dur * 0.7, "s": [107, 107], "o": {"x":[0.3],"y":[0]}, "i": {"x":[0.4],"y":[1]}},
        {"t": start + dur, "s": [100, 100]},
    ]}
    op = {"a": 1, "k": [
        {"t": start, "s": [0], "o": o_out, "i": i_in},
        {"t": start + dur * 0.55, "s": [100]},
    ]}
    return sc, op

def fade_in(start, dur=10):
    """Opacity 0->100 reveal beginning at `start`."""
    return {"a": 1, "k": [
        {"t": start, "s": [0], "o": {"x":[0.4],"y":[0]}, "i": {"x":[0.4],"y":[1]}},
        {"t": start + dur, "s": [100]},
    ]}

def floaty(cx, cy, amp=4, period=300, phase=0):
    """Gentle vertical bob on layer position, looping over the comp."""
    ph = phase
    return {"a": 1, "k": [
        {"t": 0,            "s": [cx, cy - amp], "o": {"x":[0.4],"y":[0]}, "i": {"x":[0.4],"y":[1]}},
        {"t": period * 0.5, "s": [cx, cy + amp], "o": {"x":[0.4],"y":[0]}, "i": {"x":[0.4],"y":[1]}},
        {"t": period,       "s": [cx, cy - amp]},
    ]}

# ---- layer builders -------------------------------------------------------
layers = []

def card_layer(nm, cx, cy, icon_items, reveal_start):
    """A stage graphic centred at (cx,cy) drawn in local coords, with pop-in reveal.
    No outer card frame — just the inner device/screen illustration."""
    # Lottie paints array index 0 on top. Icons are authored background-first, so
    # reverse them (details end up on top).
    items = list(reversed(icon_items))
    sc, op = pop_in(reveal_start)
    return {
        "ddd": 0, "ty": 4, "nm": nm, "sr": 1,
        "ks": {
            "o": op,
            "r": {"a": 0, "k": 0},
            "p": floaty(cx, cy, amp=3.5),
            "a": {"a": 0, "k": [0, 0, 0]},
            "s": sc,
        },
        "ao": 0, "shapes": items, "ip": 0, "op": OP, "st": 0, "bm": 0,
    }

def connector_layer(nm, pts, reveal_start, dash=7):
    """Dashed line with arrowhead, revealed by an opacity fade."""
    line = group([sh(pts, closed=False), stroke(INK, 2.2, dash=dash)], "line")
    # arrowhead at last point, oriented along last segment
    (x0, y0), (x1, y1) = pts[-2], pts[-1]
    ang = math.atan2(y1 - y0, x1 - x0)
    L, Wd = 9, 5
    bx, by = x1 - L * math.cos(ang), y1 - L * math.sin(ang)
    px, py = -math.sin(ang), math.cos(ang)
    head = group([
        sh([(x1, y1), (bx + px * Wd, by + py * Wd), (bx - px * Wd, by - py * Wd)], closed=True),
        fill(INK),
    ], "head")
    return {
        "ddd": 0, "ty": 4, "nm": nm, "sr": 1,
        "ks": {"o": fade_in(reveal_start), "r": {"a": 0, "k": 0},
               "p": {"a": 0, "k": [0, 0, 0]}, "a": {"a": 0, "k": [0, 0, 0]}, "s": {"a": 0, "k": [100, 100]}},
        "ao": 0,
        "shapes": [line, head],
        "ip": 0, "op": OP, "st": 0, "bm": 0,
    }

def proto_scroll_layer(cx, cy, reveal_start):
    """Right-hand 'live page' that scrolls vertically, clipped to the screen via a mask.
    Shares the card's pop-in + float so it moves in lockstep with card-proto."""
    # page region (local coords): right half of the monitor screen
    PX, W_, TOP, BOT = 23, 40, -30, 22
    bg = group([rc(W_, BOT - TOP, 0, PX, (TOP + BOT) / 2), fill(CARD)], "page-bg")
    # tall content column (taller than the window so it can scroll)
    blocks = [
        group([rc(W_ - 4, 16, 2, PX, -22), fill(LAV), stroke(INK, 1.2)], "hero-img"),
        group([rc(W_ - 8, 3.2, 1.6, PX, -9), fill(PILL)], "t1"),
        group([rc(W_ - 16, 3.2, 1.6, PX - 4, -3), fill(PILL)], "t2"),
        group([rc(16, 8, 3, PX - 8, 7), fill(BLUSH), stroke(INK, 1.2)], "btn"),
        group([rc(W_ - 4, 14, 2, PX, 22), fill(PILL), stroke(INK, 1.2)], "img2"),
        group([rc(W_ - 8, 3.2, 1.6, PX, 35), fill(LAV)], "t3"),
        group([rc(W_ - 14, 3.2, 1.6, PX - 3, 41), fill(LAV)], "t4"),
    ]
    # animated transform: gentle vertical scroll loop
    scroll_tr = {"ty": "tr", "p": {"a": 1, "k": [
        {"t": 0,   "s": [0, 9],   "o": {"x":[0.45],"y":[0]}, "i": {"x":[0.55],"y":[1]}},
        {"t": 150, "s": [0, -17], "o": {"x":[0.45],"y":[0]}, "i": {"x":[0.55],"y":[1]}},
        {"t": 300, "s": [0, 9]},
    ]}, "a": {"a": 0, "k": [0, 0]}, "s": {"a": 0, "k": [100, 100]}, "r": {"a": 0, "k": 0}, "o": {"a": 0, "k": 100}}
    scroll_group = {"ty": "gr", "nm": "scroll", "it": blocks + [scroll_tr]}
    sc, op = pop_in(reveal_start)
    # rectangular mask clipping to the page window (local coords)
    mask = {"inv": False, "mode": "a", "x": {"a": 0, "k": 0}, "nm": "clip",
            "o": {"a": 0, "k": 100},
            "pt": {"a": 0, "k": {"c": True,
                   "v": [[3, TOP], [43, TOP], [43, BOT], [3, BOT]],
                   "i": [[0, 0]] * 4, "o": [[0, 0]] * 4}}}
    return {
        "ddd": 0, "ty": 4, "nm": "proto-scroll", "sr": 1,
        "hasMask": True, "masksProperties": [mask],
        "ks": {"o": op, "r": {"a": 0, "k": 0}, "p": floaty(cx, cy, amp=3.5),
               "a": {"a": 0, "k": [0, 0, 0]}, "s": sc},
        "ao": 0,
        "shapes": [scroll_group, bg],
        "ip": 0, "op": OP, "st": 0, "bm": 0,
    }

def label_layer(text, cx, cy, reveal_start):
    op = {"a": 1, "k": [
        {"t": reveal_start, "s": [0], "o": {"x":[0.4],"y":[0]}, "i": {"x":[0.4],"y":[1]}},
        {"t": reveal_start + 10, "s": [100]},
    ]}
    return {
        "ddd": 0, "ty": 5, "nm": "lbl-" + text, "sr": 1,
        "ks": {"o": op, "r": {"a": 0, "k": 0}, "p": {"a": 0, "k": [cx, cy, 0]},
               "a": {"a": 0, "k": [0, 0, 0]}, "s": {"a": 0, "k": [100, 100]}},
        "ao": 0,
        "t": {"d": {"k": [{"s": {
            "s": 15, "f": "DMSans", "t": text, "j": 2, "tr": 0, "lh": 19, "ls": 0,
            "fc": DEEP,
        }, "t": 0}]}, "p": {}, "m": {"g": 1, "a": {"a": 0, "k": [0, 0]}}, "a": []},
        "ip": 0, "op": OP, "st": 0, "bm": 0,
    }

# ---- icon sets (local coords, card centre = 0,0; card is 116x84) ---------
def icon_code():
    items = []
    # screen
    items.append(group([rc(78, 52, 6, 0, -2), fill(PAPER), stroke(INK, 2)], "screen"))
    # title bar dots
    for i, x in enumerate((-32, -27, -22)):
        items.append(group([el(3, 3, x, -22)], "d") )
        items[-1]["it"].insert(1, fill(INK, 70))
    # code lines
    for y, w, col in ((-12, 30, LAV), (-4, 20, BLUSH), (4, 26, LAV), (12, 14, MINT)):
        items.append(group([rc(w, 3.5, 1.8, -16 + w/2 - 14, y), fill(col)], "ln"))
    # brackets </>  (smaller + thinner, centred around x=26)
    items.append(group([sh([(24, -5), (20, 0), (24, 5)], False), stroke(INK, 1.4)], "lt"))
    items.append(group([sh([(30, -5), (34, 0), (30, 5)], False), stroke(INK, 1.4)], "gt"))
    items.append(group([sh([(30, -7), (24, 7)], False), stroke(INK, 1.4)], "sl"))
    return items

def icon_design():
    items = [group([rc(78, 56, 6, 0, -2), fill(PAPER), stroke(INK, 2)], "art")]
    # square / circle / triangle row
    items.append(group([rc(15, 15, 3, -24, -8), fill(LAV), stroke(INK, 1.8)], "sq"))
    items.append(group([el(15, 15, -2, -8), fill(BLUSH), stroke(INK, 1.8)], "ci"))
    items.append(group([sh([(20, -1), (28, -15), (35, -1)], True), fill(PILL), stroke(INK, 1.8)], "tri"))
    # baseline swatches
    for i, x in enumerate((-24, -7, 10, 27)):
        col = [LAV, BLUSH, MINT, PILL][i]
        items.append(group([rc(11, 7, 2, x, 14), fill(col), stroke(INK, 1.4)], "sw"))
    return items

def icon_proto():
    # A monitor: code editor on the left, live page preview on the right.
    # (the right-hand page content is drawn by the separate scrolling layer)
    items = [group([rc(98, 62, 6, 0, -4), fill(PAPER), stroke(INK, 2.2)], "screen")]
    # monitor stand
    items.append(group([rc(10, 7, 1, 0, 30), fill(PILL), stroke(INK, 1.8)], "neck"))
    items.append(group([rc(34, 4, 2, 0, 35), fill(PILL), stroke(INK, 1.8)], "base"))
    # vertical divider between code + preview
    items.append(group([sh([(2, -32), (2, 24)], False), stroke(INK, 1.6)], "divider"))
    # left: code lines
    for y, w, col in ((-22, 26, LAV), (-14, 16, BLUSH), (-6, 22, MINT), (2, 13, LAV), (10, 20, PILL)):
        items.append(group([rc(w, 3.4, 1.6, -44 + w/2, y), fill(col)], "ln"))
    # the white page bg + scrolling blocks live in PROTO_SCROLL layer (drawn on top)
    return items

def icon_impl():
    items = [group([rc(80, 56, 7, 0, -2), fill(PAPER), stroke(INK, 2)], "win")]
    items.append(group([rc(80, 14, 7, 0, -23), fill(PILL), stroke(INK, 2)], "bar"))
    for x in (-32, -27, -22):
        g = group([el(3, 3, x, -23)], "d"); g["it"].insert(1, fill(INK, 70)); items.append(g)
    # check circle
    items.append(group([el(26, 26, -18, 6), fill([0.9,0.96,0.91]), stroke(MINT, 2.4)], "ok"))
    items.append(group([sh([(-25, 6), (-20, 12), (-10, -1)], False), stroke(MINT, 3)], "tick"))
    # rocket
    items.append(group([sh([(20, 14), (28, -8), (36, 14)], True), fill(CARD), stroke(INK, 2)], "body"))
    items.append(group([el(6, 6, 28, 2), fill(LAV), stroke(INK, 1.4)], "port"))
    items.append(group([sh([(22, 14), (18, 22), (24, 16)], True), fill(PEACH), stroke(INK, 1.2)], "finL"))
    items.append(group([sh([(34, 14), (38, 22), (32, 16)], True), fill(PEACH), stroke(INK, 1.2)], "finR"))
    items.append(group([sh([(26, 16), (28, 26), (30, 16)], True), fill(PEACH)], "flame"))
    return items

# ---- layout (2x2 loop) ----------------------------------------------------
# columns x=96 / 264, rows y=132 / 250
CL, CR_ = 96, 264
RT, RB = 132, 250
LBL_ABOVE = -58   # top-row labels sit above their card
LBL_BELOW = 60    # bottom-row labels sit below their card

# reveal schedule (frames)
T = dict(code=0, a1=18, design=30, a2=48, proto=60, a3=78, impl=90)

# connectors (drawn between card edges)
half_w, half_h = 58, 42
# code -> design (top row, ->)
c1 = [(CL + half_w + 4, RT), (CR_ - half_w - 4, RT)]
# design -> proto (right col, down)
c2 = [(CR_, RT + half_h + 4), (CR_, RB - half_h - 4)]
# proto -> impl (bottom row, <-)
c3 = [(CR_ - half_w - 4, RB), (CL + half_w + 4, RB)]

# build in render order: cards on top, connectors beneath (labels removed)
layers.append(card_layer("card-code",  CL,  RT, icon_code(),   T["code"]))
layers.append(card_layer("card-design", CR_, RT, icon_design(), T["design"]))
# proto: scrolling page sits on top of the card screen
layers.append(proto_scroll_layer(CR_, RB, T["proto"]))
layers.append(card_layer("card-proto",  CR_, RB, icon_proto(),  T["proto"]))
layers.append(card_layer("card-impl",   CL,  RB, icon_impl(),   T["impl"]))

layers.append(connector_layer("conn-1", c1, T["a1"]))
layers.append(connector_layer("conn-2", c2, T["a2"]))
layers.append(connector_layer("conn-3", c3, T["a3"]))

for i, lyr in enumerate(layers, start=1):
    lyr["ind"] = i

doc = {
    "v": "5.7.4", "fr": FR, "ip": 0, "op": OP, "w": W, "h": H, "nm": "workflow", "ddd": 0,
    "assets": [],
    "fonts": {"list": [{"fName": "DMSans", "fFamily": "DM Sans", "fStyle": "Medium", "fWeight": "500", "ascent": 75}]},
    "layers": layers,
}

with open("assets/lottie/workflow.json", "w") as f:
    json.dump(doc, f, separators=(",", ":"))
print("wrote assets/lottie/workflow.json  layers:", len(layers))
