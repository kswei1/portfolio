/* ============================================================
   Portfolio Presentation — local presentation tool
   - Deck switcher (Core Redesign / Blocky)
   - Builder: slide navigator + editable presenter notes
   - Present  /  Present with notes
   - Export editable .pptx (PptxGenJS) with notes
   ============================================================ */

const IMG = "../assets/images/";

/* Set to false to show the real portfolio images instead of placeholders. */
const USE_PLACEHOLDERS = true;

function mediaImg(src, alt) {
  return USE_PLACEHOLDERS
    ? `<div class="ph"><span>Image placeholder</span></div>`
    : `<img src="${src}" alt="${alt || ""}">`;
}

/* ---------- DECK DATA ---------- */
const DECKS = {
  core: {
    id: "core",
    kicker: "Core Platform Redesign",
    name: "Redesigning Block Builder's Workspace",
    meta: "Shipped internal platform · 50+ teams · +8.6% satisfaction",
    thumb: IMG + "WF-New-IA-1.png",
    slides: [
      /* 01 — Title + outcome */
      {
        layout: "hero",
        h: "Redesigning Block Builder's workspace and navigation",
        meta: [
          { label: "Role", value: "Lead Product Designer" },
          { label: "Length", value: "5 months" },
          { label: "Team", value: "Content Platform" },
          { label: "Year", value: "2025" },
          { label: "Collaboration", value: "1 PM, 5 Engineers, 1 EM" }
        ],
        video: "../assets/videos/wayfair-core",
        img: IMG + "WF-New-IA-1.png",
        notes: "I led a workspace redesign for Block Builder, an internal platform at Wayfair that 50-plus teams use to build the experiences customers see on the site. The platform had grown a lot, but the workspace hadn't kept up. I led this end to end, and we shipped it with an 8.6 percent lift in satisfaction. I'm still adding the business impact number here."
      },
      /* 02 — What is Block Builder */
      {
        layout: "figure",
        realMedia: true,
        fullWidth: true,
        titleSm: true,
        titleFull: true,
        topAlign: true,
        figBuild: true,
        h: "Block Builder is an internal CMS used by 7 user groups across 50+ teams, powering 95% of storefront traffic across Wayfair.com.",
        hDim: "powering 95% of storefront traffic across Wayfair.com.",
        imgStep0: IMG + "Block-Builder-UI.png",
        imgStep0Bg: "#F1EFEB",
        img: IMG + "what-is-bb-nobackground.png",
        caps: [
          { t: "Block Builder", sub: "Where teams build and manage customer-facing experiences" },
          { t: "Wayfair.com", sub: "Where those experiences come to life" }
        ],
        notes: "Quick bit of context first. Block Builder is Wayfair's internal CMS where teams build and manage customer-facing experiences. Then — it powers 95% of storefront traffic across Wayfair.com, where those experiences come to life."
      },
      /* 03a — User workflows + one fixed workspace */
      {
        layout: "userresult",
        titleSm: true,
        titleFull: true,
        topAlign: true,
        pushIn: true,
        h: "7 user groups. 8 features. One fixed workspace.",
        users: [
          { name: "Product", story: "As a Product user, I want to run experiments on customer experiences, so that I can test which experience performs better.", img: IMG + "WF-PM-Example.png" },
          { name: "Marketing", story: "As a Marketing user, I want to create and manage pages and versions, so that I can launch the right content at the right time.", img: IMG + "WF-Marketing-Example.png" },
          { name: "Commercial", story: "As a Commercial user, I want to target experiences to specific audiences, so that different customers see the most relevant content.", img: IMG + "WF-Commercial-Example.png" },
          { name: "Engineering", story: "As an Engineering user, I want to configure and troubleshoot blocks, so that I can keep customer-facing experiences working as expected." },
          { name: "Design", story: "As a Design user, I want to preview and refine customer-facing experiences, so that I can make sure the final experience looks and feels right." },
          { name: "Data Science", story: "As a Data Science user, I want to work with experiments and content data, so that I can understand how different experiences perform." },
          { name: "Business Analytics", story: "As a Business Analytics user, I want to organize and analyze blocks, so that I can understand and manage content across the platform." }
        ],
        usersChips: true,
        chipInteractive: true,
        hideRisks: true,
        colLabels: ["User workflows", "One fixed workspace", ""],
        img: IMG + "wf-old-layout-example-presentation.png",
        mediaBg: "#F1EFEB",
        features: ["Locales", "Previews", "Block Trees", "Versions", "Block Groups", "Targeted Instances", "Experiments", "Notifications"],
        notes: "Seven user groups, eight features, all in one fixed workspace."
      },
      /* 03a2 — One fixed workspace -> the cost of friction */
      {
        layout: "userresult",
        titleSm: true,
        titleFull: true,
        topAlign: true,
        pushIn: true,
        h: "A fixed workspace created a productivity cost across teams.",
        hideUsers: true,
        colLabels: ["", "One fixed workspace", "The cost of friction"],
        img: IMG + "wf-old-layout-example-presentation.png",
        mediaBg: "#F1EFEB",
        risks: [
          { icon: "⏱️", label: "More time spent on routine tasks", desc: "Finding features and blocks" },
          { icon: "🔀", label: "More context switching", desc: "Across tools and sections" },
          { icon: "⚠️", label: "Higher risk of errors", desc: "When managing complex pages" },
          { icon: "📉", label: "Less capacity for high-value work", desc: "Experiments, campaigns, QA, improvements" }
        ],
        notes: "As new teams, workflows, and features were added, the workspace stayed the same. The result was everyday work becoming less efficient — more time finding things, more context switching, and a higher chance of errors on complex pages."
      },
      /* 04a — The inefficiency came from two parts */
      {
        layout: "duo",
        titleSm: true,
        titleFull: true,
        h: "That productivity loss came from two parts of the experience.",
        cols: [
          { title: "A · Workspace structure", desc: "Users had to scan through capabilities they didn't need.", img: IMG + "wf-A-slide5.png" },
          { title: "B · Page hierarchy", desc: "Users had to drill through layers to reach the block they needed.", img: IMG + "wf-B-slide5-13s.png" }
        ],
        notes: "The inefficiency came from two parts of the experience. First, the workspace structure — users had to scan through capabilities they didn't need. Second, the page hierarchy — users had to drill through layers to reach the block they needed."
      },
      /* 04 — Problem A */
      {
        layout: "split",
        tag: "Problem A",
        h: "One workspace wasn't built for different workflows.",
        video: "../assets/videos/wf-problem1",
        mediaBg: "#F1EFEB",
        mediaPad: "16px",
        img: IMG + "WF-old-bb.PNG",
        notes: "The first problem was finding features. Targeting, experimentation, block groups, they all lived in one long list. Different roles needed different things, but everyone scanned the same list. This one was really a structural problem. The team already knew that adding more into one column wouldn't scale."
      },
      /* 06 — Problem B */
      {
        layout: "split",
        tag: "Problem B",
        h: "Users had to drill through layers to reach the block they needed.",
        wideMedia: true,
        videoPlain: "../assets/videos/wf-problem2",
        mediaBg: "#F1EFEB",
        mediaPad: "10px",
        img: IMG + "WF-IA.png",
        notes: "The second problem was navigating deep hierarchies, and this was the one users complained about the most. To reach a block eight levels down, you'd open eight drawers, then close them one by one to get back out. It felt like being trapped in layers."
      },
      /* 07b — Design challenge */
      {
        layout: "statement",
        tag: "Design challenge",
        plainTag: true,
        full: true,
        q: "How could we solve both problems without rebuilding the platform?",
        notes: "That set up the real design challenge: how could we solve both problems — finding features and navigating deep hierarchies — without rebuilding the platform?"
      },
      /* 08 — How I designed within the constraint */
      {
        layout: "threeup",
        realMedia: true,
        h: "How I designed within the constraint",
        body: "I focused on what I could change, what I could reuse, and what we could ship safely.",
        cards: [
          { img: IMG + "WF-Design-Expolration2.png", title: "01 · Explore", text: "Test different ways to simplify navigation." },
          { img: IMG + "WF-competitive-research.png", title: "02 · Learn", text: "Study patterns from complex products." },
          { video: "../assets/videos/wf-collaboration", title: "03 · Validate", text: "Prototype early and align on what to ship." }
        ],
        notes: "Given the constraints, I focused on three things. First, exploring different ways to simplify navigation. Second, learning from how other complex products handle dense workflows. And third, validating early by prototyping and aligning with PM, EM, and engineering on what we could actually ship."
      },
      /* 10a — Three design directions */
      {
        layout: "matrix3",
        titleSm: true,
        titleFull: true,
        h: "I explored three directions, each testing a different way to solve the problems.",
        dirs: [
          { label: "Direction 1", name: "Overview page", a: true, b: false, img: IMG + "WF-Design-Expolration2.png", constraint: "No backend changes", tradeoff: "More eng effort and platform risk, same navigation" },
          { label: "Direction 2", name: "Add a menu for navigation", a: false, b: true, img: IMG + "WF-exploration2.png", constraint: "Frontend only", tradeoff: "Hierarchy improved, workspace stayed crowded" },
          { label: "Direction 3", name: "3 Panel", a: true, b: "partial", img: IMG + "WF-exploration3.png", constraint: "Frontend only", tradeoff: "Better structure, hierarchy still needed refinement" }
        ],
        notes: "I explored three directions. Direction 1 solved Problem B but not A. Direction 2 solved Problem A but not B. Direction 3 solved both — but the real question was the technical part: how to do it without rebuilding the platform."
      },
      /* 10b — The 3-panel direction */
      {
        layout: "cols",
        titleSm: true,
        titleFull: true,
        midAlign: true,
        eyebrow: "THE DESIGN DIRECTION",
        h: "The 3-panel direction gave every workflow a place to live.",
        body: "Prototyped in Figma Make to align with stakeholders and validate the interaction with users.",
        colTemplate: "1fr 1fr",
        cols: [
          { videoPlain: "../assets/videos/WF-direction3-problema", bg: "#F1EFEB", tag: "Problem A", from: "Workspace structure", to: "Navigation panel" },
          { videoPlain: "../assets/videos/WF-direction3-problemb", bg: "#F1EFEB", tag: "Problem B", from: "Page hierarchy", to: "Menu / Hierarchy navigation" }
        ],
        notes: "The 3-panel direction gave every workflow a place to live. On the left, how it solves Problem A. On the right, how it solves Problem B."
      },
      /* 10 — Reframe (vertical) */
      {
        layout: "reframe",
        eyebrow: "THE CONSTRAINT",
        from: "We couldn't change the backend structure.",
        to: "So how could we make navigation easier with what we already had?",
        notes: "We couldn't change the backend structure. So the real question became: how could we make navigation easier with what we already had?"
      },
      /* 11 — Reimagining what we already had (Block Tree → Mini Tree, click to switch) */
      {
        layout: "toggle",
        eyebrow: "THE DESIGN MOVE",
        h: "From visualizing the hierarchy to navigating it.",
        body: "Repurposed Block Tree as a lightweight navigation tool.",
        img: IMG + "WF-Minitree-Presentation.png",
        img2: IMG + "WF-Blocktree-design-details.png",
        notes: "This is where the direction changed. Instead of building something new, I reimagined what we already had, turning Block Tree, an existing visualization, into a lightweight navigation tool. (Click the image to see the design details.)"
      },
      /* 13 — Drawer design tradeoff (Before/After) */
      {
        layout: "compare2",
        eyebrow: "DESIGN TRADE-OFF",
        h: "We couldn't remove the Drawer. So I changed how it felt and behaved.",
        left: { label: "Before", img: IMG + "WF-multiple_layers png.png", zoom: true },
        right: { label: "After", videoPlain: "../assets/videos/wf-solution2", zoom: true },
        notes: "The drawer was a real design tradeoff. We couldn't remove it, since we still needed navigation depth. So instead of removing it, I changed how it felt, so it no longer felt like being trapped in stacked layers."
      },
      /* 15 — Interaction detail (horizontal-scroll drawer) */
      {
        layout: "figure",
        realMedia: true,
        scrollX: true,
        h: "Interaction detail",
        img: IMG + "WF-Drawer.png",
        notes: "A closer look at the drawer interaction — scroll through the full sequence to see how it behaves step by step."
      },
      /* 16 — Section divider: The solution */
      {
        layout: "divider",
        h: "The solution",
        notes: "So that brings us to the solution."
      },
      /* 15 — A workspace built around how people work (Before/After, with IA inset overlay) */
      {
        layout: "compare2",
        big: true,
        eyebrow: "THE SOLUTION",
        h: "A workspace built around how people work",
        left: { label: "Before", img: IMG + "WF-old-bb.PNG", toggle: { img: IMG + "WF-Old-IA.png" } },
        right: { label: "After", img: IMG + "WF-IA.png", toggle: { videoPlain: "../assets/videos/wf-new-ia" } },
        notes: ""
      },
      /* 16 — Three core jobs (media + columns) */
      {
        layout: "mediacols",
        video: "../assets/videos/wayfair-core",
        cols: [
          { t: "Left: Features", desc: "A dedicated area for platform features, grouped so users see and reach the tools relevant to their work instead of one long list." },
          { t: "Center: Main work", desc: "The primary editing space, the task users are always on, kept visible and stable." },
          { t: "Right: Preview", desc: "A persistent place to see and validate the customer-facing result while working." }
        ],
        notes: ""
      },
      /* 17 — Flexible panel architecture (click to switch layout) */
      {
        layout: "toggle",
        h: "Flexible panel architecture (3 panels + AI agent)",
        img: IMG + "WF-flexible-panel1.png",
        img2: IMG + "WF-flexible-panel2.png",
        notes: ""
      },
      /* 18 — Solution A (cycle back to Problem A) */
      {
        layout: "split",
        eyebrow: "SOLUTION → PROBLEM A",
        h: "Grouped features around how users work",
        videoPlain: "../assets/videos/wf-solution1",
        body: "I moved features into a persistent navigation panel and grouped them by workflow, so users could quickly access the tools relevant to their jobs instead of scanning one long list.",
        notes: ""
      },
      /* 19 — Solution B (cycle back to Problem B) */
      {
        layout: "split",
        eyebrow: "SOLUTION → PROBLEM B",
        h: "Kept users oriented while navigating deep hierarchies",
        videoPlain: "../assets/videos/wf-solution2",
        body: "I replaced nested drawers with a persistent workspace structure that keeps the page, its hierarchy, and the active block visible, reducing the steps and travel distance needed to move between levels.",
        notes: ""
      },
      /* 20 — Shipped (impact) */
      {
        layout: "split",
        eyebrow: "SHIPPED",
        h: "Shipped with an 8.6% increase in user satisfaction",
        realMedia: true,
        contain: true,
        img: IMG + "WF-user-feedback.png",
        notes: ""
      },
      /* 21 — (empty) was: Reframe */
      { layout: "blank", notes: "" },
      /* 19 — Takeaways */
      {
        layout: "threeup",
        h: "What I took away",
        cards: [
          { step: "01", title: "Don't always add more", text: "Sometimes the better solution is rethinking what already exists." },
          { step: "02", title: "Constraints shape better design", text: "Technical constraints pushed us toward a simpler direction." },
          { step: "03", title: "Design for what's next", text: "The workspace needed to support future features, not just today's." }
        ],
        notes: "Three things I took away. Don't always add more, sometimes the better move is rethinking what already exists. Constraints can shape better design, the technical limits actually pushed us somewhere simpler. And design for what's next, the workspace had to hold future features, not just today's."
      }
    ]
  },

  blocky: {
    id: "blocky",
    kicker: "Blocky · AI Agent Redesign",
    name: "Reimagining Blocky's AI Agent",
    meta: "AI agent UX · interaction model · prototype in code",
    thumb: IMG + "Blocky.png",
    slides: [
      /* 01 — Title */
      {
        layout: "hero",
        h: "Beyond chat: Reimagining Blocky's AI agent experience",
        mediaBg: "rgb(94, 93, 179)",
        video: "../assets/videos/blocky-solution",
        meta: [
          { label: "Role", value: "Product Designer" },
          { label: "Surface", value: "Block Builder · Blocky" },
          { label: "Focus", value: "UI + interaction model" },
          { label: "Made with", value: "Cursor + Claude Code prototype" }
        ],
        notes: "This is Blocky, Wayfair's internal AI agent inside Block Builder. I led a redesign of its UI and interaction model."
      },
      /* 02 — Problem + survey evidence (merged) */
      {
        layout: "split",
        titleSm: true,
        h: "Blocky was valuable but not everyone was using it",
        body: "#3 most important feature in Block Builder, yet a real group of users still weren't using it. So we asked why.",
        list: [
          "“I don't know what I can ask Blocky.”",
          "“I don't know what Blocky can do.”"
        ],
        realMedia: true,
        focus: "tl",
        img: IMG + "WF-survey.PNG",
        notes: "Blocky was already valuable — it ranked as the #3 most important feature in Block Builder. But a meaningful group of users still weren't using it, so we asked why. The survey answers were consistent: people didn't know what they could ask, or what Blocky could even do."
      },
      /* 04 — The real problem (annotated old design) */
      {
        layout: "figure",
        realMedia: true,
        contain: true,
        h: "The problem wasn't the UI. It was open-ended chat.",
        body: "A chat-first model that didn't scale, hid what Blocky could do, and left users without guidance on where to start.",
        bodyWide: true,
        titleSm: true,
        mediaBg: "var(--surface)",
        img: IMG + "old-blocky-design.png",
        notes: "The problem wasn't simply that Blocky needed a better UI. The experience was built around open-ended chat, which didn't scale with Blocky's growing capabilities, made it hard to discover what Blocky could do, and gave users little guidance or feedback. This breaks down the specific issues in the old design: not built to scale, poor discoverability, limited guidance and feedback, and too many competing actions."
      },
      /* 05 — Opportunity: one thing, three levels */
      {
        layout: "threeup",
        h: "One opportunity, three levels",
        cards: [
          { step: "01", title: "Discover", text: "Help users understand what Blocky can do — and find new capabilities." },
          { step: "02", title: "Get started", text: "Help new users know where to begin, without learning to prompt from scratch." },
          { step: "03", title: "Scale", text: "An interaction model that grows as Blocky gains more capabilities." }
        ],
        foot: "Not three feature requests — three levels of the same opportunity.",
        notes: "Blocky was meant to become a much bigger entry point for AI workflows. So the opportunity had three levels: discover, get started, and scale — the same opportunity at increasing depth."
      },
      /* 06 — Design question */
      {
        layout: "statement",
        tag: "Objective",
        full: true,
        q: "How might we make Blocky easier to understand and easier to work with, while giving it a more distinct identity as an AI agent?",
        notes: "That framed the design question."
      },
      /* 07 — Interaction model (reframe) */
      {
        layout: "reframe",
        from: "Open-ended chat",
        to: "A more guided, structured AI experience — still chat, just easier to work with",
        notes: "An important insight: both the old and new experience are still chat. This isn't about replacing chat. It's about evolving the interaction model from open-ended to guided and structured."
      },
      /* 08 — Exploration: wizard flow */
      {
        layout: "compare2",
        tag: "Exploration",
        h: "First idea: a guided wizard flow",
        body: "I explored a step-by-step wizard to guide users through missing information instead of relying on back-and-forth chat.",
        frame: true,
        left: { img: IMG + "WF-blocky-before.png", label: "Before" },
        right: { videoPlain: "../assets/videos/blocky-wizard-flow", speed: 1.2, zoom: 1.1, label: "After" },
        notes: "The first direction was a guided wizard flow that fills in missing context. It reduced back-and-forth, but a rigid wizard could make users dependent on the UI instead of understanding the agent — and it still didn't answer what Blocky could do."
      },
      /* 09 — Pivot: show, don't tell (shaping the direction) */
      {
        layout: "figure",
        realMedia: true,
        contain: true,
        h: "I shifted from guiding tasks to teaching by example",
        body: "The wizard helped users complete a task, but it didn't help them understand what Blocky could do.",
        bodyWide: true,
        titleSm: true,
        mediaBg: "var(--surface)",
        img: IMG + "Blocky-shapping-direction2.png",
        notes: "So I moved toward a more flexible idea: teaching by example. Structured entry points make Blocky easier to scale, more discoverable, and clearer to work with, while reducing cognitive load."
      },
      /* 09 — Section divider: Solution */
      {
        layout: "divider",
        h: "Solution",
        notes: "So that brings us to the solution."
      },
      /* 09b — From chatbot to AI workspace */
      {
        layout: "figure",
        realMedia: true,
        contain: true,
        titleSm: true,
        h: "From chatbot to AI workspace",
        mediaBg: "var(--surface)",
        img: IMG + "Blocky-shapping-direction.png",
        notes: "The solution reframed Blocky from a chatbot into an AI workspace — structured entry points, suggested actions, and clearer feedback."
      },
      /* 10b — Building Blocky's visual language (bento, 3 images to add) */
      {
        layout: "bento",
        titleSm: true,
        h: "Building Blocky's visual language",
        body: "Purple, subtle motion, and expressive details give the AI agent a distinct identity within Block Builder.",
        media: [],
        notes: "The visual language uses purple, subtle motion, and expressive details to give Blocky a distinct identity within Block Builder."
      },
      /* 12 — Personality (visual hero) */
      {
        layout: "figure",
        realMedia: true,
        contain: true,
        h: "Giving Blocky a personality",
        body: "Purple, gradients, subtle dimensionality, and expressive states — approachable, but still part of an enterprise product.",
        bodyWide: true,
        mediaBg: "var(--surface)",
        img: IMG + "Blocky-icon.png",
        notes: "I wanted Blocky to feel like more than a generic chatbot. The visual language uses purple, gradients, highlights, and expressive states, with the Blocky icon as the face of the agent — while still fitting inside the product."
      },
      /* 13 — Dark mode */
      {
        layout: "split",
        realMedia: true,
        contain: true,
        wideMedia: true,
        titleSm: true,
        h: "Dark Mode",
        body: "Engineering-heavy teams often work in dark mode, so I designed Blocky's colors, surfaces, and states to feel just as clear and intentional in dark mode.",
        img: IMG + "blocky-dark-mode.png",
        notes: "Engineering-heavy teams often work in dark mode, so I designed Blocky's colors, surfaces, and states to feel just as clear and intentional in dark mode."
      },
      /* 14 — What's next */
      {
        layout: "split",
        tag: "Post-MVP",
        h: "Making conversations easier to return to",
        body: "The clearest follow-up was conversation history — letting users return to previous conversations and pick up where they left off. A future direction, not shipped.",
        img: IMG + "blocky-history.png",
        notes: "One of the clearest follow-up needs was conversation history — returning to previous conversations. This is framed as a post-MVP direction, not shipped functionality."
      }
    ]
  }
};

/* ---------- SLIDE RENDERING ---------- */
function esc(s) { return (s == null ? "" : String(s)); }
function liList(arr, cls) { return `<ul class="${cls || "l-list"}">${arr.map(li => `<li>${li}</li>`).join("")}</ul>`; }
const CHIP_EMOJI = {
  "Product": "📦",
  "Marketing": "📣",
  "Commercial": "💰",
  "Design": "🎨",
  "Engineering": "⚙️",
  "Data Science": "🔬",
  "Business Analytics": "📊"
};
function chipRow(chips, stories, images) {
  if (!chips || !chips.length) return "";
  const ico = `<svg class="chip-ico" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><circle cx="12" cy="8" r="3.6" fill="currentColor"/><path d="M5 19.5c0-3.6 3.1-5.5 7-5.5s7 1.9 7 5.5z" fill="currentColor"/></svg>`;
  const click = stories && stories.length;
  const attr = (v) => String(v == null ? "" : v).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
  const lis = chips.map((c, i) => {
    const icon = CHIP_EMOJI[c] ? `<span class="chip-emoji" aria-hidden="true">${CHIP_EMOJI[c]}</span>` : ico;
    const img = images && images[i] ? ` data-img="${attr(images[i])}"` : "";
    return `<li${click ? ` class="chip--click" data-story="${attr(stories[i])}"${img} role="button" tabindex="0"` : ""}>${icon}<span>${esc(c)}</span></li>`;
  }).join("");
  return `<ul class="chip-list chip-list--lg chip-list--row${click ? " chip-list--click" : ""}">${lis}</ul>`;
}

function slideInnerHTML(s) {
  switch (s.layout) {
    case "hero":
      return `<div class="l-hero__text">
          <h1 class="s-h1">${esc(s.h)}</h1>
          <div class="slide__spacer"></div>
          ${s.body ? `<p class="s-body s-body--wide">${esc(s.body)}</p>` : ""}
          ${s.meta ? `<dl class="hero-meta">${s.meta.map(m => `<div class="hero-meta__row"><dt>${esc(m.label)}</dt><dd>${esc(m.value)}</dd></div>`).join("")}</dl>` : ""}
        </div>
        <div class="l-hero__media${s.video ? " l-hero__media--framed" : ""}"${s.mediaBg ? ` style="background:${s.mediaBg}"` : ""}>${
          s.video
            ? `<video autoplay muted loop playsinline><source src="${s.video}.webm" type="video/webm"><source src="${s.video}.mp4" type="video/mp4"></video>`
            : mediaImg(s.img)
        }</div>`;

    case "metric":
      return `<div class="slide__spacer"></div>
        <div class="l-metric__num">${esc(s.num)}</div>
        <p class="l-metric__label">${esc(s.label)}</p>
        ${s.support ? `<p class="l-metric__support">${esc(s.support)}</p>` : ""}
        ${s.list ? liList(s.list) : ""}
        ${s.placeholder ? `<span class="placeholder-chip">${esc(s.placeholder)}</span>` : ""}
        <div class="slide__spacer"></div>`;

    case "split":
      return `<div>
          ${s.eyebrow ? `<p class="s-eyebrow">${esc(s.eyebrow)}</p>` : s.tag ? `<span class="s-tag">${esc(s.tag)}</span>` : ""}
          <h2 class="s-h2${s.titleSm ? " s-h2--sm" : ""}">${esc(s.h)}</h2>
          ${s.body ? `<p class="s-body s-body--wide" style="margin-top:16px">${esc(s.body)}</p>` : ""}
          ${s.list ? liList(s.list) : ""}
          ${s.callout ? `<p class="s-callout">${esc(s.callout)}</p>` : ""}
        </div>
        <div class="l-split__media${s.videoPlain && !s.contain ? " l-split__media--wide" : ""}${s.contain ? " l-split__media--contain" : ""}${s.focus === "tl" ? " l-split__media--focus-tl" : ""}"${(s.mediaBg || s.mediaPad) ? ` style="${s.mediaBg ? `background:${s.mediaBg};` : ""}${s.mediaPad ? `padding:${s.mediaPad};` : ""}"` : ""}>${
          s.video
            ? `<div class="pf-zoom"><video autoplay loop muted playsinline${s.speed ? ` data-speed="${s.speed}"` : ""}><source src="${s.video}.webm" type="video/webm"><source src="${s.video}.mp4" type="video/mp4"></video></div>`
            : s.videoPlain
              ? `<video class="pf-plain" autoplay loop muted playsinline${s.speed ? ` data-speed="${s.speed}"` : ""}${s.zoom ? ` style="transform:scale(${s.zoom}) translateY(-2.5%);transform-origin:top center"` : ""}><source src="${s.videoPlain}.webm" type="video/webm"><source src="${s.videoPlain}.mp4" type="video/mp4"></video>`
              : s.realMedia
                ? `<img src="${s.img}" alt="">`
                : mediaImg(s.img)
        }</div>`;

    case "figure": {
      if (s.figBuild) {
        const dim = s.hDim || "";
        const di = dim ? s.h.indexOf(dim) : -1;
        const titleHtml = di >= 0
          ? `${esc(s.h.slice(0, di)).replace(/\s+$/, "")}<br><span class="fig-dim">${esc(s.h.slice(di))}</span>`
          : esc(s.h);
        return `<div class="fig-build is-step-0">
          <h2 class="s-h2${s.titleSm ? " s-h2--sm" : ""}${s.titleFull ? " s-h2--full" : ""}">${titleHtml}</h2>
          <div class="l-figure__media l-figure__media--figbuild fig-zoom"${s.imgStep0Bg ? ` style="background:${s.imgStep0Bg}"` : ""}>
            <div class="fig-zoom__inner">
              <img class="fig-img fig-img--a" src="${s.imgStep0 || s.img}" alt="">
              <img class="fig-img fig-img--b" src="${s.img}" alt="">
            </div>
          </div>
          ${s.caps ? `<div class="fig-caps">${s.caps.map((c, i) => `<div class="fig-cap" data-cap="${i}"><span class="cols-cap__t">${esc(c.t)}</span>${c.sub ? `<span class="cols-cap__s">${esc(c.sub)}</span>` : ""}</div>`).join("")}</div>` : ""}
        </div>`;
      }
      return `<h2 class="s-h2${s.titleSm ? " s-h2--sm" : ""}${s.titleFull ? " s-h2--full" : ""}">${esc(s.h)}</h2>
        ${s.body ? `<p class="s-body${s.bodyWide ? " s-body--full" : ""}" style="margin-top:16px">${esc(s.body)}</p>` : ""}
        ${chipRow(s.chips)}
        <div class="l-figure__media${s.realMedia ? " l-figure__media--real" : ""}${s.contain ? " l-figure__media--contain" : ""}${s.scrollX ? " l-figure__media--scrollx" : ""}${s.mediaBg ? " l-figure__media--bg" : ""}${s.noBorder ? " l-figure__media--noborder" : ""}${s.fullWidth ? " l-figure__media--fullwidth" : ""}"${s.mediaBg ? ` style="background:${s.mediaBg}"` : ""}>${s.realMedia ? `<img src="${s.img}" alt="">` : mediaImg(s.img)}</div>
        ${s.caps ? `<div class="fig-caps">${s.caps.map(c => `<div class="fig-cap"><span class="cols-cap__t">${esc(c.t)}</span>${c.sub ? `<span class="cols-cap__s">${esc(c.sub)}</span>` : ""}</div>`).join("")}</div>` : ""}`;
    }

    case "bento": {
      const cell = (o) => o && o.video
        ? `<video autoplay loop muted playsinline${o.speed ? ` data-speed="${o.speed}"` : ""}><source src="${o.video}.webm" type="video/webm"><source src="${o.video}.mp4" type="video/mp4"></video>`
        : o && o.img
          ? `<img src="${o.img}" alt="">`
          : mediaImg();
      const md = s.media || [];
      return `<h2 class="s-h2${s.titleSm ? " s-h2--sm" : ""}">${esc(s.h)}</h2>
        ${s.body ? `<p class="s-body" style="margin-top:14px;max-width:none">${esc(s.body)}</p>` : ""}
        <div class="bento-grid">
          <div class="bento-item bento-item--a">${cell(md[0])}</div>
          <div class="bento-item bento-item--b">${cell(md[1])}</div>
          <div class="bento-item bento-item--c">${cell(md[2])}</div>
        </div>`;
    }

    case "reframe":
      return `<div class="reframe">
          ${s.eyebrow ? `<p class="s-eyebrow reframe__eyebrow">${esc(s.eyebrow)}</p>` : ""}
          <p class="reframe__from">${esc(s.from)}</p>
          <div class="reframe__arrow" aria-hidden="true">↓</div>
          <p class="reframe__to">${esc(s.to)}</p>
        </div>`;

    case "learn": {
      const md = s.media || {};
      const leftMedia = md.video
        ? `<video autoplay loop muted playsinline><source src="${md.video}.webm" type="video/webm"><source src="${md.video}.mp4" type="video/mp4"></video>`
        : s.realMedia ? `<img src="${md.img}" alt="">` : mediaImg(md.img);
      return `<div class="learn">
          <figure class="learn__left">
            <div class="learn__media">${leftMedia}</div>
            ${md.step ? `<p class="tcard__title">${esc(md.step)}</p>` : ""}
            ${md.text ? `<p class="tcard__text">${esc(md.text)}</p>` : ""}
          </figure>
          <div class="learn__right">
            ${s.points.map(p => `<div class="learn__point">
              <p class="learn__label">${esc(p.label)}</p>
              <p class="learn__statement">${esc(p.text)}</p>
            </div>`).join("")}
          </div>
        </div>`;
    }

    case "compare2": {
      const spd = (o) => o.speed ? ` data-speed="${o.speed}"` : "";
      const zst = (o) => (typeof o.zoom === "number") ? ` style="transform:scale(${o.zoom});transform-origin:center"` : "";
      const m = (o) => o.videoPlain
        ? `<video autoplay loop muted playsinline${spd(o)}${zst(o)}><source src="${o.videoPlain}.webm" type="video/webm"><source src="${o.videoPlain}.mp4" type="video/mp4"></video>`
        : o.video
          ? `<video autoplay loop muted playsinline${spd(o)}${zst(o)}><source src="${o.video}.webm" type="video/webm"><source src="${o.video}.mp4" type="video/mp4"></video>`
          : o.img
            ? `<img src="${o.img}" alt=""${zst(o)}>`
            : mediaImg();
      const sub = (o) => o.overlay ? `<div class="cmp2__media cmp2__sub">${m(o.overlay)}</div>` : "";
      const mediaBlock = (o) => {
        if (o.list) return `<ol class="numlist" style="--num-color:${o.color || "#D80027"}">${o.list.map((t, i) => `<li><span class="numlist__n">${i + 1}</span><span>${esc(t)}</span></li>`).join("")}</ol>`;
        if (o.table) return `<div class="cmp2__table"><table class="dtable"><thead><tr>${o.table.head.map(h => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${o.table.rows.map(r => `<tr>${r.map(c => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
        const zoom = o.zoom === true ? " cmp2__media--zoom" : "";
        const styles = `${o.bg ? `background:${o.bg};` : ""}${o.pad ? `padding:${o.pad};` : ""}`;
        const bg = styles ? ` style="${styles}"` : "";
        return o.toggle
          ? `<div class="cmp2__media cmp2--toggle${zoom}"${bg}><div class="cmp2__base">${m(o)}</div><div class="cmp2__alt">${m(o.toggle)}</div></div>`
          : `<div class="cmp2__media${zoom}"${bg}>${m(o)}</div>`;
      };
      const cap = (o) => o.label ? `<figcaption class="cmp2__cap"><span class="cmp2__cap-t">${esc(o.label)}</span>${o.labelSub ? `<span class="cmp2__cap-s">${esc(o.labelSub)}</span>` : ""}</figcaption>` : "";
      const hasToggle = s.left.toggle || s.right.toggle;
      return `${s.eyebrow ? `<p class="s-eyebrow">${esc(s.eyebrow)}</p>` : s.tag ? `<span class="s-tag">${esc(s.tag)}</span>` : ""}
        <h2 class="s-h2${s.titleSm ? " s-h2--sm" : ""}${s.titleFull ? " s-h2--full" : ""}">${esc(s.h)}</h2>
        ${s.body ? `<p class="s-body s-body--wide" style="margin-top:12px">${esc(s.body)}</p>` : ""}
        ${chipRow(s.chips, s.chipStories, s.chipImages)}
        <div class="cmp2${s.anim === "cover" ? " cmp2--cover" : ""}${hasToggle ? " cmp2--toggle-sync" : ""}${s.fill ? " cmp2--fill" : ""}${s.frame ? " cmp2--frame" : ""}${s.framePadY ? " cmp2--pad-y" : ""}${s.big ? " cmp2--big" : ""}"${hasToggle ? ` title="Click to switch"` : ""}>
          <figure class="cmp2__item">
            ${s.chipStories
              ? `<div class="chip-swap__main">${mediaBlock(s.left)}</div><div class="chip-swap__story" data-chip-story hidden></div>`
              : `${mediaBlock(s.left)}${sub(s.left)}${cap(s.left)}`}
          </figure>
          ${s.noArrow ? "" : `<div class="cmp2__arrow" aria-hidden="true">→</div>`}
          <figure class="cmp2__item">
            ${mediaBlock(s.right)}
            ${sub(s.right)}
            ${cap(s.right)}
          </figure>
        </div>`;
    }

    case "cols": {
      const colCell = (o) => {
        if (o.list) return `<ol class="numlist" style="--num-color:${o.color || "#D80027"}">${o.list.map((t, i) => `<li><span class="numlist__n">${i + 1}</span><span>${esc(t)}</span></li>`).join("")}</ol>`;
        const inner = o.videoPlain
          ? `<video autoplay loop muted playsinline${o.speed ? ` data-speed="${o.speed}"` : ""}><source src="${o.videoPlain}.webm" type="video/webm"><source src="${o.videoPlain}.mp4" type="video/mp4"></video>`
          : o.video
            ? `<video autoplay loop muted playsinline${o.speed ? ` data-speed="${o.speed}"` : ""}><source src="${o.video}.webm" type="video/webm"><source src="${o.video}.mp4" type="video/mp4"></video>`
            : o.img
              ? `<img src="${o.img}" alt="">`
              : mediaImg();
        return `<div class="cols__media"${o.bg ? ` style="background:${o.bg}"` : ""}>${inner}</div>`;
      };
      return `${s.eyebrow ? `<p class="s-eyebrow">${esc(s.eyebrow)}</p>` : ""}
        <h2 class="s-h2${s.titleSm ? " s-h2--sm" : ""}${s.titleFull ? " s-h2--full" : ""}">${esc(s.h)}</h2>
        ${s.body ? `<p class="s-body s-body--wide" style="margin-top:12px">${esc(s.body)}</p>` : ""}
        ${chipRow(s.chips)}
        <div class="cols-row" style="grid-template-columns:${s.colTemplate || `repeat(${s.cols.length}, 1fr)`}">
          ${s.cols.map(c => `<div class="cols-col">${colCell(c)}${
            c.from
              ? `<p class="cols-reframe">${c.tag ? `<span class="cols-reframe__tag">${esc(c.tag)}</span><span class="cols-reframe__dot"> · </span>` : ""}<span class="cols-reframe__from">${esc(c.from)}</span><span class="cols-reframe__arrow" aria-hidden="true"> → </span><span class="cols-reframe__to">${esc(c.to)}</span></p>`
              : c.caption ? `<p class="cols-cap"><span class="cols-cap__t">${esc(c.caption)}</span>${c.sub ? `<span class="cols-cap__s">${esc(c.sub)}</span>` : ""}</p>` : ""
          }</div>`).join("")}
        </div>`;
    }

    case "userresult": {
      const attrEsc = (v) => String(v == null ? "" : v).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
      const users = s.usersChips
        ? (s.users || []).map(u => `<li class="ur-chip${s.chipInteractive ? " chip--user" : ""}"${s.chipInteractive ? ` data-name="${attrEsc(u.name)}" data-story="${attrEsc(u.story || "")}"${u.img ? ` data-img="${attrEsc(u.img)}"` : ""} role="button" tabindex="0"` : ""}><span class="chip-emoji" aria-hidden="true">${CHIP_EMOJI[u.name] || "•"}</span><span>${esc(u.name)}</span></li>`).join("")
        : (s.users || []).map(u => `<li class="ur-user">
          <span class="ur-user__ico" aria-hidden="true">${CHIP_EMOJI[u.name] || "•"}</span>
          <span class="ur-user__txt"><span class="ur-user__name">${esc(u.name)}</span><span class="ur-user__desc">${esc(u.desc)}</span></span>
        </li>`).join("");
      const risks = (s.risks || []).map(r => `<li class="ur-risk">
          <span class="ur-risk__ico" aria-hidden="true">${r.icon || "•"}</span>
          <span class="ur-risk__txt"><span class="ur-risk__label">${esc(r.label)}</span><span class="ur-risk__desc">${esc(r.desc)}</span></span>
        </li>`).join("");
      const media = s.video
        ? `<video autoplay loop muted playsinline${s.speed ? ` data-speed="${s.speed}"` : ""}><source src="${s.video}.webm" type="video/webm"><source src="${s.video}.mp4" type="video/mp4"></video>`
        : `<img src="${s.img}" alt="">`;
      const lbl = s.colLabels || [];
      const head = (i) => lbl[i] ? `<p class="ur-eyebrow">${esc(lbl[i])}</p>` : "";
      const arrow = `<div class="ur-arrow" aria-hidden="true">→</div>`;
      const usersCol = `<div class="ur-col" data-col="0">${head(0)}<ul class="${s.usersChips ? "ur-chips" : "ur-users"}">${users}</ul></div>`;
      const featureList = s.features
        ? `<ol class="numlist numlist--sm" style="--num-color:${s.featuresColor || "#D80027"}">${s.features.map((t, i) => `<li><span class="numlist__n">${i + 1}</span><span>${esc(t)}</span></li>`).join("")}</ol>`
        : "";
      const mediaCol = `<div class="ur-col" data-col="1">${head(1)}<div class="ur-workspace"><div class="ur-media"${s.chipInteractive && s.img ? ` data-default-img="${attrEsc(s.img)}"` : ""}${s.mediaBg ? ` style="background:${s.mediaBg}"` : ""}>${media}</div>${(featureList || s.chipInteractive) ? `<div class="ur-side">${featureList ? `<div class="ur-features">${featureList}</div>` : ""}${s.chipInteractive ? `<div class="ur-story" data-chip-user-story hidden></div>` : ""}</div>` : ""}</div></div>`;
      const risksCol = `<div class="ur-col" data-col="2">${head(2)}<ul class="ur-risks">${risks}</ul></div>`;
      const titleCls = `s-h2${s.titleSm ? " s-h2--sm" : ""}${s.titleFull ? " s-h2--full" : ""}`;
      const title = `<h2 class="${titleCls}">${esc(s.h)}</h2>
        ${s.sub ? `<p class="s-body s-body--wide" style="margin-top:12px">${esc(s.sub)}</p>` : ""}`;
      // build mode: step 0 shows [users → workspace], step 1 shows [workspace → cost]
      if (s.build) {
        const t0 = `<h2 class="${titleCls} ur-title" data-step="0">${esc(s.h)}</h2>`;
        const t1 = `<h2 class="${titleCls} ur-title" data-step="1">${esc(s.hStep1 || s.h)}</h2>`;
        const subEl = s.sub ? `<p class="s-body s-body--wide" style="margin-top:12px">${esc(s.sub)}</p>` : "";
        return `<div class="ur-build is-step-0">
          ${t0}${t1}${subEl}
          <div class="ur-grid ur-grid--build">
            ${usersCol}
            <div class="ur-arrow" data-arrow="0" aria-hidden="true">→</div>
            ${mediaCol}
            <div class="ur-arrow" data-arrow="1" aria-hidden="true">→</div>
            ${risksCol}
          </div>
        </div>`;
      }
      // compose only the columns that aren't hidden, with arrows between them
      const colDefs = [
        !s.hideUsers && { el: usersCol, w: s.usersChips ? "0.8fr" : "1fr" },
        !s.hideMedia && { el: mediaCol, w: s.features ? "1.6fr" : "1.3fr" },
        !s.hideRisks && { el: risksCol, w: "0.9fr" }
      ].filter(Boolean);
      const parts = [], widths = [];
      colDefs.forEach((c, idx) => {
        if (idx > 0) { parts.push(arrow); widths.push("auto"); }
        parts.push(c.el); widths.push(c.w);
      });
      return `${title}
        <div class="ur-grid${s.pushIn ? " ur-grid--push" : ""}" style="grid-template-columns:${s.colTemplate || widths.join(" ")}">
          ${parts.join("")}
        </div>`;
    }

    case "matrix3": {
      const dirs = s.dirs || [];
      const media = (o) => o.video
        ? `<video autoplay loop muted playsinline${o.speed ? ` data-speed="${o.speed}"` : ""}><source src="${o.video}.webm" type="video/webm"><source src="${o.video}.mp4" type="video/mp4"></video>`
        : o.img ? `<img src="${o.img}" alt="">` : mediaImg();
      const flag = (v, letter) => {
        const cls = v === "partial" ? "is-partial" : v ? "is-yes" : "is-no";
        const mark = v === "partial" ? "–" : v ? "✓" : "✗";
        return `<span class="mx3__flag ${cls}">${letter} ${mark}</span>`;
      };
      const labels = s.rowLabels;
      const showLabels = Array.isArray(labels) && labels.length > 0;
      const tpl = showLabels ? `${s.gutter || "150px"} repeat(${dirs.length}, 1fr)` : `repeat(${dirs.length}, 1fr)`;
      const gut = (i) => showLabels ? `<div class="mx3__rowlabel">${esc(labels[i] || "")}</div>` : "";
      return `<h2 class="s-h2${s.titleSm ? " s-h2--sm" : ""}${s.titleFull ? " s-h2--full" : ""}">${esc(s.h)}</h2>
        ${s.sub ? `<p class="s-body s-body--wide" style="margin-top:12px">${esc(s.sub)}</p>` : ""}
        <div class="mx3" style="grid-template-columns:${tpl}">
          ${gut(-1)}
          ${dirs.map(d => `<div class="mx3__col">${(d.label || d.name) ? `<p class="mx3__dir">${d.label ? esc(d.label) : ""}${d.label && d.name ? " · " : ""}${d.name ? `<span class="mx3__name">${esc(d.name)}</span>` : ""}</p>` : ""}<div class="mx3__media"${d.bg ? ` style="background:${d.bg}"` : ""}>${media(d)}</div></div>`).join("")}
          ${gut(0)}
          ${dirs.map(d => `<div class="mx3__cell mx3__solve">${flag(d.a, "Problem A")}${flag(d.b, "Problem B")}</div>`).join("")}
          ${gut(1)}
          ${dirs.map(d => `<div class="mx3__cell mx3__tech">${
            (d.constraint || d.tradeoff)
              ? `${d.constraint ? `<p class="mx3__tech-line"><span class="mx3__tech-k">Constraint:</span> ${esc(d.constraint)}</p>` : ""}${d.tradeoff ? `<p class="mx3__tech-line"><span class="mx3__tech-k">Trade-off:</span> ${esc(d.tradeoff)}</p>` : ""}`
              : esc(d.tech || "")
          }</div>`).join("")}
        </div>`;
    }

    case "toggle":
      return `${s.eyebrow ? `<p class="s-eyebrow">${esc(s.eyebrow)}</p>` : ""}
        <h2 class="s-h2${s.titleSm ? " s-h2--sm" : ""}${s.titleFull ? " s-h2--full" : ""}">${esc(s.h)}</h2>
        ${s.body ? `<p class="s-body s-body--wide" style="margin-top:14px">${esc(s.body)}</p>` : ""}
        <div class="toggle-media">
          <img class="toggle-img js-toggle-img" src="${s.img}" data-a="${s.img}" data-b="${s.img2}" alt="" title="Click to switch layout">
        </div>`;

    case "mediacols":
      return `${s.h ? `<h2 class="s-h2">${esc(s.h)}</h2>` : ""}
        <div class="mc-media">${
          s.video
            ? `<video autoplay loop muted playsinline><source src="${s.video}.webm" type="video/webm"><source src="${s.video}.mp4" type="video/mp4"></video>`
            : `<img src="${s.img}" alt="">`
        }</div>
        <div class="mc-cols">
          ${s.cols.map(c => `<div class="mc-col">
            <h3 class="mc-col__title">${esc(c.t)}</h3>
            <p class="mc-col__desc">${esc(c.desc)}</p>
          </div>`).join("")}
        </div>`;

    case "duo":
      return `<h2 class="s-h2${s.titleSm ? " s-h2--sm" : ""}${s.titleFull ? " s-h2--full" : ""}">${esc(s.h)}</h2>
        <div class="duo-grid">
          ${s.cols.map(c => `<div class="duo-col">
            <div class="duo-media">${
              c.video
                ? `<div class="pf-zoom"><video autoplay loop muted playsinline><source src="${c.video}.webm" type="video/webm"><source src="${c.video}.mp4" type="video/mp4"></video></div>`
                : c.videoPlain
                  ? `<video class="pf-plain" autoplay loop muted playsinline><source src="${c.videoPlain}.webm" type="video/webm"><source src="${c.videoPlain}.mp4" type="video/mp4"></video>`
                  : c.img
                    ? `<img src="${c.img}" alt="">`
                    : mediaImg()
            }</div>
            ${c.tag ? `<span class="s-tag">${esc(c.tag)}</span>` : ""}
            ${c.title ? `<p class="duo-title">${esc(c.title)}</p>` : ""}
            ${c.desc ? `<p class="duo-desc">${esc(c.desc)}</p>` : ""}
          </div>`).join("")}
        </div>`;

    case "twoup":
      return `<h2 class="s-h2">${esc(s.h)}</h2>
        ${s.lead ? `<p class="s-body s-body--wide" style="margin-top:14px">${esc(s.lead)}</p>` : ""}
        <div class="ts-grid">
          ${s.cols.map(c => `<div class="l-col">
            <div class="l-col__k">${c.n ? `<span class="l-col__num">${esc(c.n)}</span>` : ""}<h3 class="l-col__title">${esc(c.t)}</h3></div>
            ${c.desc ? `<p class="l-col__desc">${esc(c.desc)}</p>` : ""}
            ${c.list ? liList(c.list) : ""}
            ${c.img ? `<div class="l-col__media">${mediaImg(c.img)}</div>` : ""}
          </div>`).join("")}
        </div>
        ${s.foot ? `<p class="s-foot">${esc(s.foot)}</p>` : ""}`;

    case "threeup": {
      const hasMedia = s.cards.some(c => c.img || c.video);
      const cardMedia = (c) => c.video
        ? `<video autoplay loop muted playsinline><source src="${c.video}.webm" type="video/webm"><source src="${c.video}.mp4" type="video/mp4"></video>`
        : s.realMedia
          ? `<img src="${c.img}" alt="">`
          : mediaImg(c.img);
      return `<h2 class="s-h2">${esc(s.h)}</h2>
        ${s.body ? `<p class="s-body s-body--wide" style="margin-top:12px">${esc(s.body)}</p>` : ""}
        <div class="tu-grid${hasMedia ? "" : " tu-grid--text"}${s.cards.length === 2 ? " tu-grid--2" : ""}">
          ${s.cards.map(c => `<div class="tcard${c.dim ? " tcard--dim" : ""}">
            ${(c.img || c.video) ? `<div class="tcard__media">${cardMedia(c)}</div>` : ""}
            ${c.step ? `<p class="tcard__step">${esc(c.step)}</p>` : ""}
            ${c.title ? `<h3 class="tcard__title">${esc(c.title)}</h3>` : ""}
            ${c.text ? `<p class="tcard__text">${esc(c.text)}</p>` : ""}
          </div>`).join("")}
        </div>
        ${s.foot ? `<p class="s-foot">${esc(s.foot)}</p>` : ""}`;
    }

    case "matrix":
      return `<h2 class="s-h2">${esc(s.h)}</h2>
        <div class="mx-grid">
          <div class="l-matrix__media">${mediaImg(s.img)}</div>
          <div>
            <ul class="chip-list">${s.chips.map(c => `<li>${esc(c)}</li>`).join("")}</ul>
            <p class="principle">${s.principle}</p>
          </div>
        </div>`;

    case "center":
      return `${s.h ? `<h2 class="s-h2" style="text-align:center">${esc(s.h)}</h2>` : ""}
        <h2 class="s-h2 center-text">${esc(s.text)}</h2>
        <div class="center-media"><img src="${s.img}" alt=""></div>`;

    case "chips": {
      const ico = `<svg class="chip-ico" viewBox="0 0 24 24" width="17" height="17" aria-hidden="true"><circle cx="12" cy="8" r="3.6" fill="currentColor"/><path d="M5 19.5c0-3.6 3.1-5.5 7-5.5s7 1.9 7 5.5z" fill="currentColor"/></svg>`;
      const chipsUl = `<ul class="chip-list chip-list--lg${s.img ? " chip-col" : ""}">${s.chips.map(c => `<li>${ico}<span>${esc(c)}</span></li>`).join("")}</ul>`;
      if (s.img) {
        return `<h2 class="s-h2">${esc(s.h)}</h2>
          <div class="chips-split">
            <div class="chips-left">${chipsUl}</div>
            <div class="chips-right">
              <div class="chips-media"><img src="${s.img}" alt=""></div>
              ${s.caption ? `<p class="chips-caption">${esc(s.caption)}</p>` : ""}
            </div>
          </div>`;
      }
      return `<h2 class="s-h2">${esc(s.h)}</h2>
        ${s.lead ? `<p class="s-body s-body--wide" style="margin-top:16px">${esc(s.lead)}</p>` : ""}
        ${chipsUl}`;
    }

    case "flow":
      return `<h2 class="s-h2">${esc(s.h)}</h2>
        ${s.sub ? `<p class="s-body s-body--wide" style="margin-top:16px">${esc(s.sub)}</p>` : ""}
        <div class="flow">
          ${s.nodes.map((n, i) => `<div class="flow__node">${esc(n)}</div>${i < s.nodes.length - 1 ? `<div class="flow__arrow" aria-hidden="true">↓</div>` : ""}`).join("")}
        </div>`;

    case "statement":
      return `<div class="slide__spacer"></div>
        ${s.tag ? (s.plainTag ? `<p class="s-eyebrow">${esc(s.tag)}</p>` : `<span class="s-tag" style="margin-bottom:24px">${esc(s.tag)}</span>`) : ""}
        <p class="l-statement__q${s.full ? " l-statement__q--full" : ""}">${s.q}</p>
        ${s.sub ? `<p class="l-statement__sub">${esc(s.sub)}</p>` : ""}
        ${s.foot ? `<p class="s-foot">${esc(s.foot)}</p>` : ""}
        <div class="slide__spacer"></div>`;

    case "bullets":
      return `<h2 class="s-h2">${esc(s.h)}</h2>
        <ul class="big-list">${s.items.map(li => `<li>${esc(li)}</li>`).join("")}</ul>`;

    case "divider":
      return `<div class="divider"><span class="divider__label">${esc(s.h)}</span></div>`;

    case "blank":
      return "";

    default:
      return `<h2 class="s-h2">${esc(s.h || "")}</h2>`;
  }
}

function buildSlideEl(s) {
  const el = document.createElement("div");
  el.className = "slide l-" + s.layout;
  if (s.bg) { el.style.background = s.bg; el.classList.add("slide--oncolor"); }
  if (s.wideMedia) el.classList.add("l-split--wide-media");
  if (s.topAlign) el.classList.add("slide--top");
  if (s.midAlign) el.classList.add("slide--center");
  el.innerHTML = slideInnerHTML(s);
  return el;
}

/* mount a slide into a wrapper as a scaled stage-frame */
function mountScaled(wrap, slideEl, scale) {
  wrap.innerHTML = "";
  const frame = document.createElement("div");
  frame.className = "stage-frame";
  frame.style.position = "relative";
  frame.style.width = 1280 * scale + "px";
  frame.style.height = 720 * scale + "px";
  const stage = document.createElement("div");
  stage.className = "stage";
  stage.style.position = "absolute";
  stage.style.top = "0";
  stage.style.left = "0";
  stage.style.transform = "scale(" + scale + ")";
  stage.appendChild(slideEl);
  frame.appendChild(stage);
  wrap.appendChild(frame);
  return frame;
}

function fitScale(container, pad) {
  const w = container.clientWidth - (pad || 0);
  const h = container.clientHeight - (pad || 0);
  return Math.max(0.05, Math.min(w / 1280, h / 720));
}

/* ---------- STATE ---------- */
let deck = null;
let cur = 0;
let toggleState = {}; // per-slide-index: is the alternate view shown? (synced across windows)

/* set playback speed on any video that declares data-speed */
function applyVideoSpeed(scope) {
  if (!scope) return;
  scope.querySelectorAll("video[data-speed]").forEach(v => {
    const rate = parseFloat(v.dataset.speed);
    if (!rate) return;
    const set = () => { try { v.playbackRate = rate; } catch (e) {} };
    set();
    v.addEventListener("loadedmetadata", set, { once: true });
    v.addEventListener("play", set);
  });
}

/* select a chip by default (story + right image swapped in) after a slide mounts */
function applyChipDefault(scope, s) {
  if (!scope || !s || typeof s.chipDefault !== "number") return;
  const chips = scope.querySelectorAll(".chip--click");
  const chip = chips[s.chipDefault];
  if (!chip) return;
  const story = scope.querySelector("[data-chip-story]");
  const main = scope.querySelector(".chip-swap__main");
  const rightItem = scope.querySelectorAll(".cmp2__item")[1];
  const rightImg = rightItem ? rightItem.querySelector(".cmp2__media img") : null;
  chips.forEach(c => c.classList.remove("is-active"));
  chip.classList.add("is-active");
  if (story && main) { story.textContent = chip.dataset.story || ""; story.hidden = false; main.hidden = true; }
  if (rightImg) {
    if (!rightImg.dataset.defaultSrc) rightImg.dataset.defaultSrc = rightImg.getAttribute("src");
    rightImg.src = chip.dataset.img || rightImg.dataset.defaultSrc;
  }
}

/* apply the synced toggle (alt vs base) to a rendered slide inside `scope` */
function applyToggle(scope, i) {
  if (!scope) return;
  const on = !!toggleState[i];
  scope.querySelectorAll(".cmp2--toggle-sync").forEach(el => el.classList.toggle("show-alt", on));
  scope.querySelectorAll(".js-toggle-img").forEach(img => {
    const want = on ? img.dataset.b : img.dataset.a;
    if (want && img.getAttribute("src") !== want) img.src = want;
  });
}

/* ---------- IN-SLIDE BUILD STEPS (synced across windows) ---------- */
let buildState = {}; // per-slide-index: which reveal step is showing
function maxBuildStep(i) { return deck && deck.slides[i] && (deck.slides[i].build || deck.slides[i].figBuild) ? 1 : 0; }
function applyBuild(scope, i) {
  if (!scope) return;
  const step = Math.max(0, Math.min(maxBuildStep(i), buildState[i] || 0));
  scope.querySelectorAll(".ur-build, .fig-build").forEach(g => {
    g.classList.toggle("is-step-1", step >= 1);
    g.classList.toggle("is-step-0", step < 1);
    const fimg = g.querySelector(".fig-swap-img");
    if (fimg) {
      const want = step >= 1 ? fimg.dataset.step1 : fimg.dataset.step0;
      if (want && fimg.getAttribute("src") !== want) fimg.src = want;
    }
  });
}
function refreshBuild() {
  if (presentEl.classList.contains("is-active")) {
    applyBuild(presentMode === "plain" ? presentStageWrap : presenterNow, cur);
  } else if (editorEl.classList.contains("is-active")) {
    applyBuild(stageArea, cur);
  }
}

/* ---------- CLICKABLE USER CHIPS (userresult) — swap image + show story ---------- */
let chipUserState = {}; // per-slide-index: active chip name (or undefined)
function applyChipUser(scope, i) {
  if (!scope) return;
  const active = chipUserState[i];
  scope.querySelectorAll(".ur-grid").forEach(grid => {
    grid.querySelectorAll(".chip--user").forEach(chip => {
      chip.classList.toggle("is-active", !!active && chip.dataset.name === active);
    });
    const activeChip = active ? grid.querySelector(`.chip--user[data-name="${CSS.escape(active)}"]`) : null;
    const img = grid.querySelector(".ur-media img");
    const media = grid.querySelector(".ur-media");
    const features = grid.querySelector(".ur-features");
    const story = grid.querySelector("[data-chip-user-story]");
    if (activeChip) {
      const want = activeChip.dataset.img || (media && media.dataset.defaultImg);
      if (img && want && img.getAttribute("src") !== want) img.src = want;
      if (features) features.hidden = true;
      if (story) { story.textContent = activeChip.dataset.story || ""; story.hidden = false; }
    } else {
      const def = media && media.dataset.defaultImg;
      if (img && def && img.getAttribute("src") !== def) img.src = def;
      if (features) features.hidden = false;
      if (story) { story.hidden = true; story.textContent = ""; }
    }
  });
}
function refreshChipUser() {
  if (presentEl.classList.contains("is-active")) {
    applyChipUser(presentMode === "plain" ? presentStageWrap : presenterNow, cur);
  } else if (editorEl.classList.contains("is-active")) {
    applyChipUser(stageArea, cur);
  }
}

/* ---------- ELEMENTS ---------- */
const startEl = document.getElementById("start");
const editorEl = document.getElementById("editor");
const railEl = document.getElementById("rail");
const stageArea = document.getElementById("stageArea");
const notesArea = document.getElementById("notesArea");
const deckTitleEl = document.getElementById("deckTitle");

/* ---------- NOTES PERSISTENCE ---------- */
function notesKey(i) { return `ksp_notes_${deck.id}_${i}`; }
function getNotes(i) {
  try {
    const saved = localStorage.getItem(notesKey(i));
    // treat an empty saved override as "not set" so the code default shows through
    if (saved != null && saved !== "") return saved;
  } catch (e) {}
  return deck.slides[i].notes || "";
}
function setNotes(i, val) {
  try { localStorage.setItem(notesKey(i), val); } catch (e) {}
}

/* ---------- PRIVATE PER-SLIDE COMMENT THREAD (localStorage, never exported/presented) ---------- */
function commentKey(i) { return `ksp_comments_${deck.id}_${i}`; }
function getComments(i) {
  try {
    const raw = localStorage.getItem(commentKey(i));
    const arr = raw ? JSON.parse(raw) : [];
    return Array.isArray(arr) ? arr : [];
  } catch (e) { return []; }
}
function saveComments(i, arr) {
  try {
    if (arr && arr.length) localStorage.setItem(commentKey(i), JSON.stringify(arr));
    else localStorage.removeItem(commentKey(i));
  } catch (e) {}
}
function addComment(i, text) {
  const t = (text || "").trim();
  if (!t) return;
  const arr = getComments(i);
  arr.push({ id: Date.now() + "-" + Math.random().toString(36).slice(2, 7), text: t, ts: Date.now() });
  saveComments(i, arr);
}
function deleteComment(i, id) {
  saveComments(i, getComments(i).filter(c => c.id !== id));
}

/* ---------- SKIP STATE (per slide, persisted per deck) ---------- */
function skipKey() { return `ksp_skip_${deck.id}`; }
function saveSkips() {
  try {
    const idx = deck.slides.map((s, i) => (s._skip ? i : -1)).filter(i => i >= 0);
    localStorage.setItem(skipKey(), JSON.stringify(idx));
  } catch (e) {}
}
function loadSkips() {
  try {
    const raw = localStorage.getItem(skipKey());
    if (!raw) return;
    const idx = JSON.parse(raw);
    if (Array.isArray(idx)) idx.forEach(i => { if (deck.slides[i]) deck.slides[i]._skip = true; });
  } catch (e) {}
}
function isSkipped(i) { return !!(deck.slides[i] && deck.slides[i]._skip); }
function setSkipped(i, val) { if (deck.slides[i]) { deck.slides[i]._skip = !!val; saveSkips(); } }
function visibleIndices() { return deck.slides.map((_, i) => i).filter(i => !isSkipped(i)); }
// numbering that skips skipped slides: "–" if skipped, else its 1-based position among visible slides
function visibleNumber(i) {
  if (isSkipped(i)) return "–";
  let n = 0;
  for (let k = 0; k <= i; k++) if (!isSkipped(k)) n++;
  return String(n);
}

/* ---------- STRUCTURAL EDITS (this session) ---------- */
// snapshot every slide's effective note (localStorage override or code default)
function readAllNotes() { return deck.slides.map((_, i) => getNotes(i)); }
// persist a reordered notes array back to localStorage (never destroys — only remaps)
function writeAllNotes(arr) {
  arr.forEach((val, i) => {
    try {
      if (val != null && val !== "") localStorage.setItem(notesKey(i), val);
      else localStorage.removeItem(notesKey(i));
    } catch (e) {}
  });
  // clear stale keys past the new end so a shortened deck doesn't keep orphans
  for (let i = arr.length; i < arr.length + 12; i++) { try { localStorage.removeItem(notesKey(i)); } catch (e) {} }
  // mirror onto the in-memory objects too, so notes survive within this session
  deck.slides.forEach((s, i) => { if (arr[i] != null) s.notes = arr[i]; });
}
// private comment threads follow the same reorder/never-destroy rules as notes
function readAllComments() { return deck.slides.map((_, i) => getComments(i)); }
function writeAllComments(arr) {
  arr.forEach((val, i) => saveComments(i, val));
  for (let i = arr.length; i < arr.length + 12; i++) { try { localStorage.removeItem(commentKey(i)); } catch (e) {} }
}
function createSlideAfter(i) {
  const notes = readAllNotes();
  const comments = readAllComments();
  notes.splice(i + 1, 0, "");
  comments.splice(i + 1, 0, "");
  deck.slides.splice(i + 1, 0, { layout: "blank", notes: "" });
  writeAllNotes(notes);
  writeAllComments(comments);
  saveSkips();
  toggleState = {};
  renderRail(); selectSlide(i + 1);
  toast("New slide added");
}
function deleteSlide(i) {
  if (deck.slides.length <= 1) { toast("Can't delete the only slide"); return; }
  const notes = readAllNotes();
  const comments = readAllComments();
  notes.splice(i, 1);
  comments.splice(i, 1);
  deck.slides.splice(i, 1);
  writeAllNotes(notes);
  writeAllComments(comments);
  saveSkips();
  toggleState = {};
  renderRail(); selectSlide(Math.min(i, deck.slides.length - 1));
  toast("Slide deleted");
}
function moveSlide(i, dir) {
  const j = i + dir;
  if (j < 0 || j >= deck.slides.length) return;
  const notes = readAllNotes();
  const comments = readAllComments();
  const [nv] = notes.splice(i, 1);
  notes.splice(j, 0, nv);
  const [cv] = comments.splice(i, 1);
  comments.splice(j, 0, cv);
  const [s] = deck.slides.splice(i, 1);
  deck.slides.splice(j, 0, s);
  writeAllNotes(notes);
  writeAllComments(comments);
  saveSkips();
  toggleState = {};
  renderRail(); selectSlide(j);
}

/* ---------- DECK SWITCHER ---------- */
function renderStart() {
  const grid = document.getElementById("deckGrid");
  grid.innerHTML = "";
  Object.values(DECKS).forEach(d => {
    const card = document.createElement("button");
    card.className = "deck-card";
    card.innerHTML = `
      <div class="deck-card__thumb">${mediaImg(d.thumb)}</div>
      <div class="deck-card__body">
        <p class="deck-card__kicker">${d.kicker}</p>
        <p class="deck-card__name">${d.name}</p>
        <p class="deck-card__meta">${d.meta}</p>
        ${d.locked ? `<span class="deck-card__badge">Storyline pending</span>` : `<span class="deck-card__badge">${d.slides.length} slides · ready</span>`}
      </div>`;
    card.addEventListener("click", () => openDeck(d.id));
    grid.appendChild(card);
  });
}

function openDeck(id, slide) {
  deck = DECKS[id];
  cur = 0;
  toggleState = {};
  buildState = {};
  chipUserState = {};
  startEl.style.display = "none";
  editorEl.classList.add("is-active");
  try { localStorage.setItem("ksp_last_deck", id); } catch (e) {}
  loadSkips();
  deckTitleEl.innerHTML = `${deck.name} <span>· ${visibleIndices().length} slides</span>`;
  renderRail();
  selectSlide(slide || 0);
}

function backToStart() {
  editorEl.classList.remove("is-active");
  startEl.style.display = "grid";
  deck = null;
  try { localStorage.removeItem("ksp_last_deck"); localStorage.removeItem("ksp_last_slide"); } catch (e) {}
}

/* ---------- RAIL (navigator) ---------- */
function renderRail() {
  railEl.innerHTML = `<p class="nav-rail__label">Slides</p>`;
  deck.slides.forEach((s, i) => {
    const t = document.createElement("button");
    t.className = "thumb";
    t.dataset.i = i;
    t.classList.toggle("thumb--skipped", isSkipped(i));
    const wrap = document.createElement("div");
    wrap.className = "thumb__stage-wrap";
    const railScale = (railEl.clientWidth - 24 - 4) / 1280;
    mountScaled(wrap, buildSlideEl(s), Math.max(0.05, railScale));
    t.innerHTML = `<span class="thumb__num">${visibleNumber(i)}</span>
      <span class="thumb__skip-badge">Skipped</span>
      <span class="thumb__cmt-dot"${getComments(i).length ? "" : " hidden"} title="Has comments"></span>`;
    t.appendChild(wrap);
    t.addEventListener("click", () => selectSlide(i));
    t.addEventListener("contextmenu", (e) => openThumbCtx(e, i));
    railEl.appendChild(t);
  });
  markActiveThumb();
  deckTitleEl.innerHTML = `${deck.name} <span>· ${visibleIndices().length} slides</span>`;
}

/* ---------- RAIL RIGHT-CLICK MENU ---------- */
const ctxMenu = document.createElement("div");
ctxMenu.className = "ctx-menu";
ctxMenu.hidden = true;
document.body.appendChild(ctxMenu);
let ctxIndex = -1;
function openThumbCtx(e, i) {
  e.preventDefault();
  ctxIndex = i;
  ctxMenu.innerHTML = `
    <button class="ctx-item" data-act="skip">${isSkipped(i) ? "Unskip slide" : "Skip slide"}</button>
    <button class="ctx-item" data-act="new">Create new slide</button>
    <div class="ctx-sep"></div>
    <button class="ctx-item" data-act="up"${i === 0 ? " disabled" : ""}>Move up</button>
    <button class="ctx-item" data-act="down"${i === deck.slides.length - 1 ? " disabled" : ""}>Move down</button>
    <div class="ctx-sep"></div>
    <button class="ctx-item ctx-item--danger" data-act="delete">Delete slide</button>`;
  ctxMenu.hidden = false;
  const mw = ctxMenu.offsetWidth, mh = ctxMenu.offsetHeight;
  ctxMenu.style.left = Math.max(8, Math.min(e.clientX, window.innerWidth - mw - 8)) + "px";
  ctxMenu.style.top = Math.max(8, Math.min(e.clientY, window.innerHeight - mh - 8)) + "px";
}
function closeCtx() { ctxMenu.hidden = true; ctxIndex = -1; }
ctxMenu.addEventListener("click", (e) => {
  const btn = e.target.closest(".ctx-item");
  if (!btn || btn.disabled) return;
  const act = btn.dataset.act, i = ctxIndex;
  closeCtx();
  if (i < 0) return;
  if (act === "skip") {
    setSkipped(i, !isSkipped(i));
    renderRail(); // re-render so numbers renumber and skipped shows "–"
  }
  else if (act === "new") createSlideAfter(i);
  else if (act === "delete") deleteSlide(i);
  else if (act === "up") moveSlide(i, -1);
  else if (act === "down") moveSlide(i, 1);
});
document.addEventListener("click", (e) => { if (!ctxMenu.hidden && !ctxMenu.contains(e.target)) closeCtx(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeCtx(); });
function markActiveThumb() {
  railEl.querySelectorAll(".thumb").forEach(t => {
    t.classList.toggle("is-active", Number(t.dataset.i) === cur);
  });
}

/* ---------- MAIN STAGE ---------- */
function renderMain() {
  const scale = fitScale(stageArea, 48);
  mountScaled(stageArea, buildSlideEl(deck.slides[cur]), scale);
  applyToggle(stageArea, cur);
  applyVideoSpeed(stageArea);
  applyChipDefault(stageArea, deck.slides[cur]);
  applyBuild(stageArea, cur);
  applyChipUser(stageArea, cur);
}

function selectSlide(i) {
  cur = Math.max(0, Math.min(deck.slides.length - 1, i));
  renderMain();
  markActiveThumb();
  notesArea.value = getNotes(cur);
  renderComments();
  try { localStorage.setItem("ksp_last_slide", String(cur)); } catch (e) {}
  const active = railEl.querySelector(".thumb.is-active");
  if (active) active.scrollIntoView({ block: "nearest" });
}

notesArea.addEventListener("input", () => setNotes(cur, notesArea.value));

/* ---------- COMMENT PANEL (per-slide thread) ---------- */
const commentBtn = document.getElementById("commentBtn");
const commentPanel = document.getElementById("commentPanel");
const commentList = document.getElementById("commentList");
const commentForm = document.getElementById("commentForm");
const commentInput = document.getElementById("commentInput");
const commentBadge = document.getElementById("commentBadge");
const commentSlideLabel = document.getElementById("commentSlideLabel");

function relTime(ts) {
  const s = Math.floor((Date.now() - ts) / 1000);
  if (s < 60) return "just now";
  const m = Math.floor(s / 60);
  if (m < 60) return m + "m ago";
  const h = Math.floor(m / 60);
  if (h < 24) return h + "h ago";
  const d = Math.floor(h / 24);
  if (d < 7) return d + "d ago";
  return new Date(ts).toLocaleDateString();
}
function renderComments() {
  if (!commentList) return;
  const items = getComments(cur);
  commentList.innerHTML = items.length
    ? items.map(c => `<div class="cmt-item" data-id="${c.id}">
        <div class="cmt-item__body">
          <div class="cmt-item__meta"><span class="cmt-item__who">You</span><span class="cmt-item__time">${esc(relTime(c.ts))}</span></div>
          <p class="cmt-item__text">${esc(c.text)}</p>
        </div>
        <button class="cmt-item__del" data-del="${c.id}" title="Delete comment" aria-label="Delete comment">🗑</button>
      </div>`).join("")
    : `<p class="cmt-empty">No comments yet. Add one below.</p>`;
  // badge on the toolbar button
  if (commentBadge) {
    if (items.length) { commentBadge.textContent = String(items.length); commentBadge.hidden = false; }
    else commentBadge.hidden = true;
  }
  if (commentSlideLabel) commentSlideLabel.textContent = "Slide " + visibleNumber(cur);
  // sync the rail dot for the current slide
  const dot = railEl && railEl.querySelector(`.thumb[data-i="${cur}"] .thumb__cmt-dot`);
  if (dot) dot.hidden = !items.length;
}
function openComments() {
  commentPanel.hidden = false;
  commentBtn.setAttribute("aria-expanded", "true");
  renderComments();
  setTimeout(() => commentInput && commentInput.focus(), 0);
}
function closeComments() {
  commentPanel.hidden = true;
  commentBtn.setAttribute("aria-expanded", "false");
}
if (commentBtn) {
  commentBtn.addEventListener("click", () => { commentPanel.hidden ? openComments() : closeComments(); });
  document.getElementById("commentClose").addEventListener("click", closeComments);
  commentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addComment(cur, commentInput.value);
    commentInput.value = "";
    renderComments();
    markActiveThumb();
  });
  commentList.addEventListener("click", (e) => {
    const del = e.target.closest("[data-del]");
    if (!del) return;
    deleteComment(cur, del.getAttribute("data-del"));
    renderComments();
    markActiveThumb();
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !commentPanel.hidden) closeComments(); });
}

/* collapse / expand the presenter-notes dock */
document.getElementById("notesToggle").addEventListener("click", (e) => {
  const collapsed = editorEl.classList.toggle("notes-collapsed");
  e.currentTarget.textContent = collapsed ? "Show notes" : "Hide notes";
  e.currentTarget.setAttribute("aria-expanded", String(!collapsed));
  renderMain();
});

/* ---------- PRESENT MODE ---------- */
const presentEl = document.getElementById("present");
const presentStageWrap = document.getElementById("presentStageWrap");
const presenterNow = document.getElementById("presenterNow");
const presenterNext = document.getElementById("presenterNext");
const presenterNotes = document.getElementById("presenterNotes");
const presentCounter = document.getElementById("presentCounter");
const presenterClock = document.getElementById("presenterClock");
let presentMode = null;
let clockTimer = null, clockStart = 0, clockElapsed = 0, clockRunning = false;

/* cross-window sync (presenter notes window  <->  shareable audience window) */
let audienceWin = null;
let bc = null;
try { bc = new BroadcastChannel("ksp_present"); } catch (e) {}
const IS_AUDIENCE = new URLSearchParams(location.search).get("audience") === "1";
function broadcastSync() {
  if (bc && deck) bc.postMessage({ type: "sync", deckId: deck.id, cur: cur, toggle: toggleState, build: buildState, chipUser: chipUserState, slides: deck.slides });
}
function applySync(m) {
  if (!m || !DECKS[m.deckId]) return;
  deck = DECKS[m.deckId];
  // adopt the presenter's live slide order/content so indices line up across windows
  if (Array.isArray(m.slides)) deck.slides = m.slides;
  cur = Math.max(0, Math.min(deck.slides.length - 1, m.cur));
  if (m.toggle) toggleState = m.toggle;
  if (m.build) buildState = m.build;
  if (m.chipUser) chipUserState = m.chipUser;
  if (presentEl.classList.contains("is-active")) { renderPresent(); refreshBuild(); refreshChipUser(); }
}
if (bc) {
  bc.onmessage = (e) => {
    const m = e.data || {};
    if (m.type === "sync") applySync(m);
    else if (m.type === "hello" && !IS_AUDIENCE) broadcastSync();
    else if (m.type === "bye" && IS_AUDIENCE) { try { window.close(); } catch (_) {} }
  };
}

function openAudienceWindow() {
  try { audienceWin = window.open(location.pathname + "?audience=1", "ksp_audience", "width=1280,height=760"); } catch (e) { audienceWin = null; }
  if (!audienceWin) { toast("Allow pop-ups to open the shareable slide window."); return; }
  try { audienceWin.focus(); } catch (e) {}
  setTimeout(broadcastSync, 300);
}

function startPresent(mode) {
  presentMode = mode;
  presentEl.classList.add("is-active");
  presentEl.classList.toggle("present--notes", mode === "notes");
  // never start on a skipped slide
  if (isSkipped(cur)) {
    const vis = visibleIndices();
    if (vis.length) cur = vis.find(i => i >= cur) ?? vis[0];
  }
  const shareBtn = document.getElementById("present-share");
  if (shareBtn) shareBtn.hidden = mode !== "notes";
  const pauseBtn = document.getElementById("present-pause");
  const resetBtn = document.getElementById("present-reset");
  if (pauseBtn) pauseBtn.hidden = mode !== "notes";
  if (resetBtn) resetBtn.hidden = mode !== "notes";
  if (mode === "notes") {
    // open a separate clean slide window to share on Zoom / Google Meet
    openAudienceWindow();
    startClock();
  } else {
    if (presentEl.requestFullscreen) presentEl.requestFullscreen().catch(() => {});
  }
  renderPresent();
  broadcastSync();
}
function stopPresent() {
  presentEl.classList.remove("is-active");
  if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
  stopClock();
  if (bc) bc.postMessage({ type: "bye" });
  if (audienceWin && !audienceWin.closed) { try { audienceWin.close(); } catch (e) {} }
  audienceWin = null;
}
function fmtClock(ms) {
  const s = Math.floor(ms / 1000);
  return String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0");
}
function renderClock() {
  const ms = clockElapsed + (clockRunning ? Date.now() - clockStart : 0);
  presenterClock.textContent = fmtClock(ms);
}
function updatePauseBtn() {
  const b = document.getElementById("present-pause");
  if (b) b.textContent = clockRunning ? "⏸ Pause" : "▶ Resume";
  presenterClock.classList.toggle("is-paused", !clockRunning);
}
function startClock() {
  stopClock();
  clockElapsed = 0; clockStart = Date.now(); clockRunning = true;
  renderClock();
  clockTimer = setInterval(renderClock, 250);
  updatePauseBtn();
}
function pauseClock() {
  if (!clockRunning) return;
  clockElapsed += Date.now() - clockStart;
  clockRunning = false;
  renderClock(); updatePauseBtn();
}
function resumeClock() {
  if (clockRunning) return;
  clockStart = Date.now(); clockRunning = true;
  if (!clockTimer) clockTimer = setInterval(renderClock, 250);
  renderClock(); updatePauseBtn();
}
function toggleClock() { clockRunning ? pauseClock() : resumeClock(); }
function resetClock() {
  clockElapsed = 0; clockStart = Date.now();
  renderClock(); updatePauseBtn();
}
function stopClock() { if (clockTimer) { clearInterval(clockTimer); clockTimer = null; } clockRunning = false; }

function renderPresent() {
  const vis = visibleIndices();
  const pos = vis.indexOf(cur);
  presentCounter.textContent = (pos >= 0 ? pos + 1 : "–") + " / " + vis.length;
  if (presentMode === "plain") {
    mountScaled(presentStageWrap, buildSlideEl(deck.slides[cur]), fitScale(presentEl, 0));
    applyToggle(presentStageWrap, cur);
    applyVideoSpeed(presentStageWrap);
    applyChipDefault(presentStageWrap, deck.slides[cur]);
    applyBuild(presentStageWrap, cur);
    applyChipUser(presentStageWrap, cur);
  } else {
    mountScaled(presenterNow, buildSlideEl(deck.slides[cur]), fitScale(presenterNow, 24));
    applyToggle(presenterNow, cur);
    applyVideoSpeed(presenterNow);
    applyChipDefault(presenterNow, deck.slides[cur]);
    applyBuild(presenterNow, cur);
    applyChipUser(presenterNow, cur);
    const nextIdx = Math.min(deck.slides.length - 1, cur + 1);
    if (cur + 1 < deck.slides.length) {
      mountScaled(presenterNext, buildSlideEl(deck.slides[nextIdx]), Math.max(0.05, presenterNext.clientWidth / 1280));
      applyToggle(presenterNext, nextIdx);
    } else {
      presenterNext.innerHTML = `<div style="aspect-ratio:16/9;display:grid;place-items:center;color:#6b675f;background:#000;border-radius:8px;font-size:14px">End of deck</div>`;
    }
    presenterNotes.textContent = getNotes(cur);
  }
}

function presentNav(dir) {
  // advance/retreat an in-slide build step before changing slides
  const maxB = maxBuildStep(cur);
  const step = buildState[cur] || 0;
  if (dir > 0 && step < maxB) { buildState[cur] = step + 1; refreshBuild(); broadcastSync(); return; }
  if (dir < 0 && step > 0) { buildState[cur] = step - 1; refreshBuild(); broadcastSync(); return; }
  let n = cur + dir;
  while (n >= 0 && n < deck.slides.length && isSkipped(n)) n += dir;
  if (n < 0 || n >= deck.slides.length) return;
  cur = n;
  // entering forward starts at first reveal; entering backward starts fully revealed
  buildState[cur] = dir < 0 ? maxBuildStep(cur) : 0;
  renderPresent();
  markActiveThumb();
  notesArea.value = getNotes(cur);
  broadcastSync();
}

/* ---------- KEYBOARD ---------- */
document.addEventListener("keydown", (e) => {
  if (IS_AUDIENCE && e.key === "Escape") { try { window.close(); } catch (_) {} return; }
  if (presentEl.classList.contains("is-active")) {
    if (["ArrowRight", "ArrowDown", " ", "PageDown"].includes(e.key)) { e.preventDefault(); presentNav(1); }
    else if (["ArrowLeft", "ArrowUp", "PageUp"].includes(e.key)) { e.preventDefault(); presentNav(-1); }
    else if (e.key === "Escape") stopPresent();
    else if (e.key === "Home") { const vis = visibleIndices(); if (vis.length) { cur = vis[0]; renderPresent(); markActiveThumb(); broadcastSync(); } }
    else if (e.key === "End") { const vis = visibleIndices(); if (vis.length) { cur = vis[vis.length - 1]; renderPresent(); markActiveThumb(); broadcastSync(); } }
    else if ((e.key === "p" || e.key === "P") && presentMode === "notes") { e.preventDefault(); toggleClock(); }
    return;
  }
  if (!editorEl.classList.contains("is-active")) return;
  if (document.activeElement === notesArea) return;
  if (["ArrowRight", "ArrowDown"].includes(e.key)) { e.preventDefault(); selectSlide(cur + 1); }
  else if (["ArrowLeft", "ArrowUp"].includes(e.key)) { e.preventDefault(); selectSlide(cur - 1); }
});

document.addEventListener("fullscreenchange", () => {
  if (!document.fullscreenElement && presentEl.classList.contains("is-active")) {
    presentEl.classList.remove("is-active");
    stopClock();
    selectSlide(cur);
  }
});

/* ---------- RESIZE ---------- */
let rt = null;
window.addEventListener("resize", () => {
  clearTimeout(rt);
  rt = setTimeout(() => {
    if (presentEl.classList.contains("is-active")) renderPresent();
    else if (editorEl.classList.contains("is-active")) renderMain();
  }, 120);
});

/* ---------- BUTTON WIRING ---------- */
document.getElementById("backBtn").addEventListener("click", backToStart);
document.getElementById("presentBtn").addEventListener("click", () => startPresent("plain"));
document.getElementById("presentNotesBtn").addEventListener("click", () => startPresent("notes"));
document.getElementById("exportBtn").addEventListener("click", exportPptx);
document.getElementById("present-prev").addEventListener("click", () => presentNav(-1));
document.getElementById("present-next").addEventListener("click", () => presentNav(1));
document.getElementById("present-exit").addEventListener("click", stopPresent);
document.getElementById("present-share").addEventListener("click", openAudienceWindow);
document.getElementById("present-pause").addEventListener("click", toggleClock);
document.getElementById("present-reset").addEventListener("click", resetClock);
presenterClock.addEventListener("click", toggleClock);

/* click-to-switch media — state-driven so it syncs to the shared audience window */
document.addEventListener("click", (e) => {
  const el = e.target.closest(".cmp2--toggle-sync, .js-toggle-img");
  if (!el || el.closest(".nav-rail")) return; // ignore tiny rail previews
  toggleState[cur] = !toggleState[cur];
  const scope = el.closest("#presenterNow, #presentStageWrap, #stageArea") || document;
  applyToggle(scope, cur);
  broadcastSync();
});

/* click a user chip to swap the workspace image + show that user's story (click again to revert) */
document.addEventListener("click", (e) => {
  const chip = e.target.closest(".chip--user");
  if (!chip || chip.closest(".nav-rail")) return;
  const name = chip.dataset.name;
  chipUserState[cur] = (chipUserState[cur] === name) ? undefined : name;
  refreshChipUser();
  broadcastSync();
});

/* click a build slide to advance/cycle its reveal step (for previewing in the editor) */
document.addEventListener("click", (e) => {
  const g = e.target.closest(".ur-grid--build, .fig-build");
  if (!g || g.closest(".nav-rail")) return;
  const maxB = maxBuildStep(cur);
  buildState[cur] = ((buildState[cur] || 0) >= maxB) ? 0 : (buildState[cur] || 0) + 1;
  refreshBuild();
  broadcastSync();
});

/* click a chip to swap the panel's table with that user's story (click again to revert) */
document.addEventListener("click", (e) => {
  const chip = e.target.closest(".chip--click");
  if (!chip || chip.closest(".nav-rail")) return;
  const item = chip.closest(".slide");
  if (!item) return;
  const story = item.querySelector("[data-chip-story]");
  const main = item.querySelector(".chip-swap__main");
  if (!story || !main) return;
  const wasActive = chip.classList.contains("is-active");
  item.querySelectorAll(".chip--click").forEach(c => c.classList.remove("is-active"));
  const rightImg = (item.querySelectorAll(".cmp2__item")[1] || {}).querySelector
    ? item.querySelectorAll(".cmp2__item")[1].querySelector(".cmp2__media img")
    : null;
  if (rightImg && !rightImg.dataset.defaultSrc) rightImg.dataset.defaultSrc = rightImg.getAttribute("src");
  if (wasActive) {
    story.hidden = true; main.hidden = false;
    if (rightImg) rightImg.src = rightImg.dataset.defaultSrc;
  } else {
    chip.classList.add("is-active");
    story.textContent = chip.dataset.story || "";
    story.hidden = false; main.hidden = true;
    if (rightImg) rightImg.src = chip.dataset.img || rightImg.dataset.defaultSrc;
  }
});

/* ---------- TOAST ---------- */
function toast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("is-show");
  clearTimeout(t._t);
  t._t = setTimeout(() => t.classList.remove("is-show"), 2600);
}

/* ---------- PPTX EXPORT (generic, layout-aware) ---------- */
const imgCache = {};
async function toDataURL(url) {
  if (imgCache[url]) return imgCache[url];
  try {
    const res = await fetch(url);
    const blob = await res.blob();
    const data = await new Promise((resolve, reject) => {
      const fr = new FileReader();
      fr.onload = () => resolve(fr.result);
      fr.onerror = reject;
      fr.readAsDataURL(blob);
    });
    imgCache[url] = data;
    return data;
  } catch (e) { return null; }
}
const strip = (t) => esc(t).replace(/<[^>]+>/g, "");

async function exportPptx() {
  if (typeof PptxGenJS === "undefined") { toast("Export library didn't load — check your connection."); return; }
  toast("Building .pptx…");
  const p = new PptxGenJS();
  p.defineLayout({ name: "W", width: 13.333, height: 7.5 });
  p.layout = "W";
  const BG = "FAFAF8", TXT = "0A0A0A", TXT2 = "5C5A57", FONT = "General Sans";

  async function placeholder(sl, x, y, w, h) {
    if (USE_PLACEHOLDERS) {
      sl.addShape(p.ShapeType.roundRect, { x, y, w, h, rectRadius: 0.06, fill: { color: "EFEDE9" }, line: { color: "E4E2DE", width: 1 } });
      sl.addText("Image placeholder", { x, y, w, h, align: "center", valign: "middle", fontFace: FONT, fontSize: 12, color: "908884" });
    } else {
      const d = await toDataURL(x._src);
      if (d) sl.addImage({ data: d, x, y, w, h, sizing: { type: "contain", w, h } });
    }
  }

  for (let i = 0; i < deck.slides.length; i++) {
    const s = deck.slides[i];
    const sl = p.addSlide();
    sl.background = { color: BG };

    if (s.layout === "metric") {
      sl.addText(strip(s.num), { x: 0.7, y: 1.9, w: 11.9, h: 1.6, fontFace: FONT, fontSize: 96, color: TXT });
      sl.addText(strip(s.label), { x: 0.75, y: 3.55, w: 11, h: 0.6, fontFace: FONT, fontSize: 22, color: TXT });
      let y = 4.35;
      if (s.support) { sl.addText(strip(s.support), { x: 0.75, y, w: 11.5, h: 0.9, fontFace: FONT, fontSize: 14, color: TXT2, lineSpacingMultiple: 1.2 }); y += 1.0; }
      if (s.list) { sl.addText(s.list.map(t => ({ text: strip(t), options: { bullet: { code: "2022" }, breakLine: true } })), { x: 0.8, y, w: 11.5, h: 1.4, fontFace: FONT, fontSize: 14, color: TXT2, lineSpacingMultiple: 1.25 }); }
      if (s.placeholder) sl.addText(strip(s.placeholder), { x: 0.75, y: 6.7, w: 8, h: 0.4, fontFace: FONT, fontSize: 12, italic: true, color: "908884" });
    } else if (s.layout === "statement") {
      sl.addText(strip(s.q), { x: 0.7, y: 1.9, w: 10.5, h: 2.6, fontFace: FONT, fontSize: 34, color: TXT, valign: "top", lineSpacingMultiple: 1.12 });
      if (s.sub) sl.addText(strip(s.sub), { x: 0.75, y: 4.6, w: 10, h: 0.8, fontFace: FONT, fontSize: 16, color: TXT2 });
      if (s.foot) sl.addText(strip(s.foot), { x: 0.75, y: 5.4, w: 11, h: 0.8, fontFace: FONT, fontSize: 15, color: TXT2 });
    } else {
      const title = s.h || strip(s.q) || "";
      let titleY = 0.6;
      if (s.tag) { sl.addText(s.tag, { x: 0.7, y: 0.5, w: 4, h: 0.35, fontFace: FONT, fontSize: 12, color: TXT2 }); titleY = 0.95; }
      sl.addText(title, { x: 0.7, y: titleY, w: s.img && (s.layout === "hero" || s.layout === "split") ? 6.4 : 12, h: 1.3, fontFace: FONT, fontSize: s.layout === "hero" ? 30 : 28, color: TXT, valign: "top", lineSpacingMultiple: 1.03 });

      // gather body lines
      const lines = [];
      if (s.body) lines.push({ text: strip(s.body) });
      if (s.text) lines.push({ text: strip(s.text) });
      if (s.from) lines.push({ text: strip(s.from), options: { color: "8A8884" } });
      if (s.to) lines.push({ text: "→ " + strip(s.to), options: { bold: true } });
      (s.meta || []).forEach(m => lines.push({ text: strip(m.label) + ":   " + strip(m.value) }));
      if (s.lead) lines.push({ text: strip(s.lead) });
      if (s.sub) lines.push({ text: strip(s.sub) });
      (s.list || []).forEach(t => lines.push({ text: strip(t), options: { bullet: { code: "2022" } } }));
      (s.items || []).forEach(t => lines.push({ text: strip(t), options: { bullet: { code: "2022" } } }));
      (s.chips || []).forEach(t => lines.push({ text: strip(t), options: { bullet: { code: "2022" } } }));
      (s.nodes || []).forEach((t, k) => lines.push({ text: (k ? "↓ " : "") + strip(t) }));
      (s.cols || []).forEach(c => {
        const heading = (c.n ? c.n + "  " : "") + strip(c.t || "") + (c.tag ? strip(c.tag) : "");
        if (heading.trim()) lines.push({ text: heading, options: { bold: true } });
        if (c.title) lines.push({ text: strip(c.title) });
        if (c.desc) lines.push({ text: strip(c.desc) });
        (c.list || []).forEach(t => lines.push({ text: strip(t), options: { bullet: { code: "2022" } } }));
      });
      (s.cards || []).forEach(c => {
        lines.push({ text: strip(c.step) + (c.title ? " — " + strip(c.title) : ""), options: { bold: true } });
        if (c.text) lines.push({ text: strip(c.text) });
      });
      lines.forEach((l, k) => { l.options = Object.assign({ breakLine: true, paraSpaceAfter: 6 }, l.options || {}); });

      const textW = s.img && (s.layout === "hero" || s.layout === "split") ? 6.4 : 11.9;
      if (lines.length) sl.addText(lines, { x: 0.7, y: 2.0, w: textW, h: 4.4, fontFace: FONT, fontSize: 15, color: TXT2, valign: "top", lineSpacingMultiple: 1.2 });
      if (s.foot) sl.addText(strip(s.foot), { x: 0.7, y: 6.5, w: 11.9, h: 0.6, fontFace: FONT, fontSize: 15, color: TXT, bold: true });

      if (s.img && (s.layout === "hero" || s.layout === "split" || s.layout === "figure" || s.layout === "matrix")) {
        await placeholder(sl, 7.4, s.layout === "figure" ? 3.0 : 1.9, 5.5, s.layout === "figure" ? 4.0 : 4.6);
      }
    }
    const notes = getNotes(i);
    if (notes) sl.addNotes(notes);
  }

  const fname = deck.id === "core" ? "Block-Builder-Redesign.pptx" : deck.id + "-presentation.pptx";
  await p.writeFile({ fileName: fname });
  toast("Exported " + fname);
}

/* ---------- INIT ---------- */
function initAudience() {
  document.body.classList.add("is-audience");
  startEl.style.display = "none";
  editorEl.classList.remove("is-active");
  presentMode = "plain";
  presentEl.classList.add("is-active");
  presentEl.classList.remove("present--notes");
  if (bc) bc.postMessage({ type: "hello" });
}

if (IS_AUDIENCE) {
  initAudience();
} else {
  renderStart();
  // restore the last-open deck + slide so a refresh stays put
  let lastDeck = null, lastSlide = 0;
  try {
    lastDeck = localStorage.getItem("ksp_last_deck");
    lastSlide = parseInt(localStorage.getItem("ksp_last_slide"), 10) || 0;
  } catch (e) {}
  if (lastDeck && DECKS[lastDeck]) openDeck(lastDeck, lastSlide);
}
