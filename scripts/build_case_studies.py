#!/usr/bin/env python3
"""Generate case-study pages from one shared template.

Each project gets case-<slug>.html, matching the approved template
(css/case-study.css). Edit the PROJECTS data below and re-run.

Run:  python3 scripts/build_case_studies.py
"""
import html, os

OUT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def esc(s):
    return html.escape(s, quote=True)


# ---- per-project content (chain order = homepage order) -------------------
# Easy Spotlight (external Figma link) and the Coming-soon AI Agent are excluded.
PROJECTS = [
    {
        "slug": "core-platform",
        "title": "Wayfair Core Platform Redesign",
        "summary": "Redefined the platform's information architecture and core workflows by introducing a new 3-panel design.",
        "cover": "core-platform.png",
        "role": "Lead Product Designer · Core Platform",
        "timeline": "2024",
        "team": "PM · Engineering · Design",
        "outcome_lead": "A restructured platform built around a 3-panel model that made complex workflows faster to navigate and far easier to scale.",
        "stats": [
            ("3-panel", "Unified workspace", "Replaced scattered tabs with one coherent inputs / workspace / context layout."),
            ("IA", "Rebuilt architecture", "Reorganized the platform's information architecture around how people actually work."),
            ("Shipped", "In production", "Rolled out across the platform's core workflows."),
        ],
        "problem": [
            "The platform had grown through “tab overwhelm” — fractured navigation, duplicated entry points, and workflows scattered across disconnected screens.",
            "How might we restructure the platform's information architecture so complex tasks happen in one coherent space?",
        ],
        "process": [
            ("Mapping", "the architecture", "I audited every existing surface and traced how people actually moved through tasks, exposing the real structure hidden under the navigation.", "Architecture map"),
            ("Designing", "the 3-panel model", "I prototyped a three-panel layout — inputs, workspace, and context — so users could stay in one place across the full journey.", "3-panel prototype"),
        ],
        "solution_head": ("The 3-panel", "system"),
        "solution_body": "The shipped redesign organizes the platform into a predictable 3-panel system with consistent patterns across every core workflow.",
        "solution_visuals": ["3-panel overview", "Navigation model", "Workflow in context", "Before / after"],
        "reflection_learned": "How much information architecture shapes whether a complex product feels simple — structure did more for usability than any single screen.",
        "reflection_diff": "I'd pressure-test the 3-panel model with users earlier, before investing in high-fidelity flows.",
    },
    {
        "slug": "template-system",
        "title": "Wayfair Internal Template System",
        "summary": "Launched a reusable template system that reduced page creation time by 63% and helped teams scale high-traffic page launches.",
        "cover": "template-system.png",
        "role": "Product Designer",
        "timeline": "2024",
        "team": "Cross-team · Design & Engineering",
        "outcome_lead": "A reusable template system that let teams launch high-traffic pages in a fraction of the time, without reinventing layouts every time.",
        "stats": [
            ("63%", "Faster page creation", "Cut the time teams spent building new pages from scratch."),
            ("High-traffic", "Scaled launches", "Helped teams reliably ship high-traffic page launches."),
            ("Reusable", "Shared templates", "Replaced ad-hoc page building with one governed system."),
        ],
        "problem": [
            "Teams rebuilt similar pages from scratch every launch — slow, inconsistent, and error-prone, especially under high-traffic deadlines.",
            "How might we give teams a reusable system to launch pages quickly without sacrificing quality or consistency?",
        ],
        "process": [
            ("Auditing", "page patterns", "I studied the pages teams launched most and pulled out the repeating structures worth turning into templates.", "Pattern audit"),
            ("Building", "the system", "I designed configurable templates with guardrails, so teams could move fast while staying on-brand and consistent.", "Template builder"),
        ],
        "solution_head": ("The template", "system"),
        "solution_body": "The shipped system pairs a gallery of configurable templates with a guided launch flow, so teams can stand up high-traffic pages quickly and consistently.",
        "solution_visuals": ["Template gallery", "Configurable layout", "Launch flow", "In-product example"],
        "reflection_learned": "A good system is as much about guardrails as flexibility — the constraints are what made teams trust it and move faster.",
        "reflection_diff": "I'd involve more launch teams during early design to capture edge cases before rollout.",
    },
    {
        "slug": "favorites",
        "title": "Favorites for Faster Block Access",
        "summary": "Introduced a favorites feature that lets users quickly return to frequently used blocks and reduce time spent searching.",
        "cover": "favorites.png",
        "role": "Product Designer",
        "timeline": "2024",
        "team": "Design · Engineering",
        "outcome_lead": "A favorites feature that gives users one-tap access to the blocks they use most — taking repetitive searching out of their workflow.",
        "stats": [
            ("1-tap", "Instant access", "Let users jump straight to frequently used blocks."),
            ("↓ search", "Less hunting", "Reduced time spent searching a growing block library."),
            ("Shipped", "In production", "Launched as a core part of the block experience."),
        ],
        "problem": [
            "Users repeatedly searched for the same blocks, losing time navigating a growing library to find familiar tools.",
            "How might we let users return to their frequently used blocks instantly?",
        ],
        "process": [
            ("Spotting", "repeat behavior", "I looked at how often people re-searched for the same blocks and where that friction showed up in their flow.", "Usage analysis"),
            ("Designing", "the pattern", "I designed a lightweight favorites pattern that fit naturally into the existing block library without adding clutter.", "Favorites pattern"),
        ],
        "solution_head": ("The favorites", "feature"),
        "solution_body": "The shipped feature lets users favorite blocks and reach them in one tap, with a clear way to manage and reorder the ones they rely on.",
        "solution_visuals": ["Favorites entry", "Managing favorites", "Empty state", "In-product example"],
        "reflection_learned": "Small, well-placed shortcuts can remove a surprising amount of daily friction for power users.",
        "reflection_diff": "I'd explore surfacing favorites proactively based on usage, not just manual saving.",
    },
    {
        "slug": "google-maps",
        "title": "Google Maps for Gen Z",
        "summary": "Designed new features to help Gen Z users discover outdoor groups and connect with like-minded communities.",
        "cover": "google-maps.png",
        "role": "Product Designer · Capstone",
        "timeline": "2022",
        "team": "Solo (graduate capstone)",
        "outcome_lead": "A set of community-discovery features for Google Maps that help Gen Z find outdoor groups and connect with people who share their interests.",
        "stats": [
            ("Capstone", "Graduate project", "A self-directed graduate capstone, end to end."),
            ("Research-led", "Grounded in research", "Shaped by user research with Gen Z participants."),
            ("iOS", "Interactive prototype", "Delivered as prototyped, high-fidelity iOS flows."),
        ],
        "problem": [
            "Gen Z users want to find outdoor communities and like-minded people, but mapping tools focus on places — not the groups and connections around them.",
            "How might we help Gen Z discover outdoor groups and build community through a maps experience?",
        ],
        "process": [
            ("Researching", "Gen Z", "I ran interviews and surveys to understand how Gen Z discovers communities and what keeps them from joining in.", "Research synthesis"),
            ("Prototyping", "the features", "I designed and prototyped iOS flows for discovering groups, exploring communities, and joining in.", "iOS prototype"),
        ],
        "solution_head": ("The discovery", "features"),
        "solution_body": "The concept adds community discovery to Maps — finding nearby outdoor groups, exploring their profiles, and joining with a few taps.",
        "solution_visuals": ["Group discovery", "Community profile", "Join flow", "Map view"],
        "reflection_learned": "Designing for a specific audience's motivations — not just tasks — made the feature set feel genuinely useful.",
        "reflection_diff": "I'd run a round of usability testing on the prototype to validate the discovery flow before finalizing.",
    },
    {
        "slug": "shipping-ai",
        "title": "Designing and Shipping with AI",
        "summary": "Used AI tools to translate designs into production-ready code, enabling faster iteration and lightweight UI updates with minimal engineering dependency.",
        "cover": "shipping-ai.png",
        "role": "Product Designer",
        "timeline": "2024 – 2025",
        "team": "Design · Engineering",
        "outcome_lead": "An AI-assisted workflow that turns designs into production-ready code, letting design ship lightweight UI updates without waiting on an engineering queue.",
        "stats": [
            ("Faster", "Quicker iteration", "Shortened the loop from design to shipped UI."),
            ("↓ dependency", "Less eng reliance", "Enabled UI updates with minimal engineering hand-off."),
            ("Shipped", "Real updates", "Used to ship production UI changes."),
        ],
        "problem": [
            "Small UI updates stalled in engineering queues, slowing iteration and widening the gap between design intent and the shipped product.",
            "How might designers ship production-ready UI changes with minimal engineering dependency?",
        ],
        "process": [
            ("Prototyping", "the workflow", "I used AI tools like Cursor and Claude to go from design to working code, learning where they helped and where they needed guardrails.", "AI workflow"),
            ("Shipping", "to production", "I built a repeatable path for turning lightweight design changes into production-ready, reviewed code.", "Shipping pipeline"),
        ],
        "solution_head": ("The AI", "workflow"),
        "solution_body": "The workflow lets design translate updates straight into production-ready code — closing the gap between design and engineering on lightweight changes.",
        "solution_visuals": ["Design → code", "Workflow", "Shipped update", "Before / after"],
        "reflection_learned": "AI shifts where a designer's leverage is — the value moves from pixel-pushing to clearly defining intent and reviewing output.",
        "reflection_diff": "I'd formalize review and QA steps earlier so the workflow scales safely beyond small changes.",
    },
    {
        "slug": "design-system",
        "title": "Wayfair Design System Rebuild",
        "summary": "Rebuilding a fragmented component library into one scalable, trusted system.",
        "cover": "design-system.png",
        "role": "Product Designer · Design Systems",
        "timeline": "Jan '24 – Jun '24",
        "team": "2 designers · 4 engineers",
        "outcome_lead": "A single source of truth that cut design-to-dev handoff time and brought visual consistency across 30+ product surfaces.",
        "stats": [
            ("120+", "Components consolidated", "Merged duplicate and one-off components into a governed, documented library."),
            ("40%", "Faster handoff", "Reduced the time from final design to engineering implementation."),
            ("5", "Teams onboarded", "Adopted by product teams across the platform within the first quarter."),
        ],
        "problem": [
            "Components had drifted across teams — multiple buttons, inconsistent spacing, and no shared documentation. Designers rebuilt the same patterns from scratch, and engineers interpreted them differently, creating visual debt and slow, error-prone handoffs.",
            "How might we create one trusted, scalable system that designers and engineers actually want to use?",
        ],
        "process": [
            ("Auditing", "the chaos", "I audited every existing component across the product, cataloguing duplicates, edge cases, and inconsistencies to understand the real surface area before rebuilding.", "Component audit"),
            ("Building", "the foundations", "I defined the foundational layer first — tokens for color, type, and spacing — then rebuilt components on top so the system could scale and re-theme without breaking.", "Tokens & foundations"),
        ],
        "solution_head": ("Final designs", "and system"),
        "solution_body": "The shipped system pairs a documented component library with usage guidelines, so teams can build consistent, accessible experiences quickly — and trust that what they design is what gets built.",
        "solution_visuals": ["Library overview", "Component specs", "Usage guidelines", "In-product example"],
        "reflection_learned": "Adoption is a design problem too — documentation and onboarding mattered as much as the components themselves.",
        "reflection_diff": "I'd set up contribution and governance rituals from day one so the system stays healthy as it grows.",
    },
    {
        "slug": "rapid-quote",
        "title": "Rapid Quote Flow for Homeowners",
        "summary": "Streamlined the mobile web quote flow to help homeowners request quotes faster, reducing wait time from 2 weeks to 3 minutes.",
        "cover": "rapid-quote.png",
        "role": "UX Design Intern",
        "timeline": "Summer Internship",
        "team": "Design · Engineering",
        "outcome_lead": "A streamlined mobile web quote flow that cut homeowner wait time from two weeks to three minutes.",
        "stats": [
            ("2 wks → 3 min", "Faster quotes", "Cut homeowner wait time dramatically."),
            ("mWeb", "Mobile-first", "Redesigned specifically for the mobile web experience."),
            ("Internship", "Shipped", "Designed and shipped during my internship."),
        ],
        "problem": [
            "Homeowners requesting a quote faced a slow, multi-step process that could take up to two weeks — causing drop-off and frustration.",
            "How might we help homeowners get a quote in minutes instead of weeks?",
        ],
        "process": [
            ("Mapping", "the journey", "I mapped the existing quote journey to find where homeowners stalled, waited, or abandoned the process.", "Journey map"),
            ("Redesigning", "the flow", "I redesigned the mobile flow to collect only what's essential and return a quote almost immediately.", "Mobile flow"),
        ],
        "solution_head": ("The streamlined", "flow"),
        "solution_body": "The redesigned mobile web flow gets homeowners from request to quote in minutes, with a focused set of steps and an instant result.",
        "solution_visuals": ["Quote entry", "Streamlined steps", "Instant result", "Mobile flow"],
        "reflection_learned": "Removing steps is a feature — cutting the flow down to essentials did more for conversion than any visual polish.",
        "reflection_diff": "I'd test the shortened flow with real homeowners to confirm nothing essential was lost.",
    },
    {
        "slug": "nonprofit",
        "title": "Non-Profit Visual System",
        "summary": "Built a psychology-driven visual system for a gardening community platform.",
        "cover": "nonprofit.png",
        "role": "Visual / Brand Designer",
        "timeline": "Side project",
        "team": "Solo",
        "outcome_lead": "A psychology-driven visual system for a gardening community platform that makes the experience feel warm, trustworthy, and inviting.",
        "stats": [
            ("Brand", "Visual system", "A cohesive identity spanning color, type, and components."),
            ("Psychology", "Behavior-driven", "Grounded design choices in color and behavioral psychology."),
            ("Side project", "Self-directed", "Built independently for a gardening community."),
        ],
        "problem": [
            "The platform lacked a cohesive visual identity, making it feel impersonal for a community built around connection and growth.",
            "How might we craft a visual system that feels warm and trustworthy to a gardening community?",
        ],
        "process": [
            ("Grounding", "in psychology", "I researched how color and visual cues shape trust and warmth, then translated that into a direction for the brand.", "Mood & psychology"),
            ("Building", "the system", "I built out the palette, type, and components into a consistent, reusable visual system.", "Visual system"),
        ],
        "solution_head": ("The visual", "system"),
        "solution_body": "The system pairs a warm, nature-rooted palette with friendly type and components, giving the gardening community a cohesive and inviting feel.",
        "solution_visuals": ["Color & type", "Components", "Brand in use", "Screens"],
        "reflection_learned": "Visual choices carry real emotional weight — grounding them in psychology made the brand feel intentional rather than decorative.",
        "reflection_diff": "I'd test the system with community members to confirm it reads as warm and trustworthy to them, not just to me.",
    },
]

# Next chain loops back to the first project.
for i, p in enumerate(PROJECTS):
    p["next_slug"] = PROJECTS[(i + 1) % len(PROJECTS)]["slug"]


def stat_html(num, title, desc):
    return f"""            <div class="cs-stat">
              <span class="cs-stat__num">{esc(num)}</span>
              <div>
                <h3 class="cs-stat__title">{esc(title)}</h3>
                <p class="cs-stat__desc">{esc(desc)}</p>
              </div>
            </div>"""


def process_html(idx, head_main, head_span, body, visual):
    return f"""    <!-- ── PROCESS ── -->
    <section class="cs-section">
      <div class="container cs-split">
        <p class="cs-eyebrow">Process · 0{idx}</p>
        <h2 class="cs-h">{esc(head_main)}<span>{esc(head_span)}</span></h2>
        <div class="cs-split__body">
          <p class="cs-body">{esc(body)}</p>
          <div class="cs-visual" style="margin-top: var(--sp-5);">
            <span>{esc(visual)} — visual placeholder</span>
          </div>
        </div>
      </div>
    </section>"""


def page_html(p):
    stats = "\n".join(stat_html(*s) for s in p["stats"])
    problem = "\n".join(
        f'          <p class="cs-body">{esc(par)}</p>' for par in p["problem"]
    )
    process = "\n\n".join(
        process_html(i + 1, hm, hs, body, vis)
        for i, (hm, hs, body, vis) in enumerate(p["process"])
    )
    sol_visuals = "\n".join(
        f'          <div class="cs-visual"><span>{esc(v)} — placeholder</span></div>'
        for v in p["solution_visuals"]
    )
    sh_main, sh_span = p["solution_head"]
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{esc(p['title'])} — Katherine Swei</title>
  <meta name="robots" content="noindex, nofollow" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="stylesheet" href="./css/tokens.css" />
  <link rel="stylesheet" href="./css/base.css" />
  <link rel="stylesheet" href="./css/portfolio.css" />
  <link rel="stylesheet" href="./css/case-study.css" />
</head>
<body>

  <a class="skip-link" href="#main">Skip to content</a>

  <!-- ── NAV (shared) ── -->
  <header class="nav" role="banner">
    <a href="./work.html" class="nav__mark" aria-label="Katherine Swei — Home">
      <img src="./assets/images/nav-mark.png" alt="" />
    </a>
    <div class="nav__inner">
      <nav aria-label="Primary navigation">
        <ul class="nav__links">
          <li><a href="./work.html" class="nav__link active" data-label="Work"><span class="nav__link-text">Work</span></a></li>
          <li><a href="./about.html" class="nav__link" data-label="About me"><span class="nav__link-text">About me</span></a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main id="main" class="cs">

    <!-- ── HERO: title + one-line summary + cover ── -->
    <header class="cs-hero">
      <!-- Cover image slot. Replace the <span> with an <img> when ready. -->
      <div class="container">
        <div class="cs-hero__cover">
          <span>Cover image — add later</span>
          <!-- <img src="./assets/images/{p['cover']}" alt="{esc(p['title'])}" /> -->
        </div>
      </div>

      <div class="container cs-hero__head">
        <h1 class="cs-hero__title">{esc(p['title'])}</h1>
        <p class="cs-hero__summary">{esc(p['summary'])}</p>

        <!-- ── META: role + timeline, inline ── -->
        <div class="cs-meta">
          <div class="cs-meta__item">
            <span class="cs-meta__label">Role</span>
            <span class="cs-meta__value">{esc(p['role'])}</span>
          </div>
          <div class="cs-meta__group">
            <div class="cs-meta__item">
              <span class="cs-meta__label">Timeline</span>
              <span class="cs-meta__value">{esc(p['timeline'])}</span>
            </div>
            <div class="cs-meta__item">
              <span class="cs-meta__label">Team</span>
              <span class="cs-meta__value">{esc(p['team'])}</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- ── OUTCOME ── -->
    <section class="cs-section">
      <div class="container cs-split">
        <p class="cs-eyebrow">Outcome</p>
        <h2 class="cs-h">What<span>shipped</span></h2>
        <div class="cs-split__body">
          <p class="cs-lead">{esc(p['outcome_lead'])}</p>
          <div class="cs-stats" style="margin-top: var(--sp-6);">
{stats}
          </div>
        </div>
      </div>
    </section>

    <!-- ── PROBLEM ── -->
    <section class="cs-section">
      <div class="container cs-split">
        <p class="cs-eyebrow">Problem</p>
        <h2 class="cs-h">What wasn't<span>working</span></h2>
        <div class="cs-split__body">
{problem}
        </div>
      </div>
    </section>

{process}

    <!-- ── SOLUTION ── -->
    <section class="cs-section">
      <div class="container">
        <div class="cs-split" style="margin-bottom: var(--sp-8);">
          <p class="cs-eyebrow">Solution</p>
          <h2 class="cs-h">{esc(sh_main)}<span>{esc(sh_span)}</span></h2>
          <p class="cs-body cs-split__body">{esc(p['solution_body'])}</p>
        </div>
        <div class="cs-visual-grid">
{sol_visuals}
        </div>
      </div>
    </section>

    <!-- ── REFLECTION ── -->
    <section class="cs-section">
      <div class="container cs-split">
        <h2 class="cs-h">Reflection</h2>
        <div class="cs-split__body cs-reflect">
          <div class="cs-reflect__item">
            <h3 class="cs-reflect__title">What I learned</h3>
            <p class="cs-body">{esc(p['reflection_learned'])}</p>
          </div>
          <div class="cs-reflect__item">
            <h3 class="cs-reflect__title">What I'd do differently</h3>
            <p class="cs-body">{esc(p['reflection_diff'])}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── PAGER ── -->
    <nav class="container cs-pager" aria-label="Case study navigation">
      <a class="cs-pager__btn cs-pager__home" href="./work.html">← All work</a>
      <a class="cs-pager__btn cs-pager__next" href="./case-{p['next_slug']}.html">Next</a>
    </nav>

  </main>

  <!-- ── FOOTER (shared) ── -->
  <footer class="footer">
    <div class="container footer__inner">
      <p class="footer__copy">© 2026 Katherine Swei</p>
      <ul class="footer__links">
        <li><a class="footer__link" href="mailto:hello@katherineswei.com">Email</a></li>
        <li><a class="footer__link" href="https://linkedin.com/in/katherineswei" target="_blank" rel="noopener">LinkedIn</a></li>
      </ul>
    </div>
  </footer>

  <script src="./js/portfolio.js"></script>
</body>
</html>
"""


def main():
    for p in PROJECTS:
        path = os.path.join(OUT_DIR, f"case-{p['slug']}.html")
        with open(path, "w") as f:
            f.write(page_html(p))
        print(f"wrote case-{p['slug']}.html  (next → {p['next_slug']})")


if __name__ == "__main__":
    main()
