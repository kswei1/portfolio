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
        layout: "center",
        text: "Block Builder is an internal platform used by 50+ teams to build and manage customer-facing experiences across Wayfair.com.",
        img: IMG + "WF-what-is-bb-nobackground.png",
        notes: "Quick bit of context first. Block Builder is Wayfair's internal CMS. It's what powers thousands of the pages people actually see on Wayfair.com."
      },
      /* 03 — Who uses it */
      {
        layout: "chips",
        h: "As the platform grew, the workspace became harder to use.",
        chips: ["Product", "Marketing", "Commercial", "Design", "Engineering", "Data Science", "Business Analytics"],
        img: IMG + "WF-old-bb-IA.png",
        caption: "More features. More workflows. Same workspace.",
        notes: "Quick context on who uses this. It's one platform, but the teams on it are really different. Product, marketing, commercial, design, engineering, data science, analytics. They all build in the same workspace, but they each need different features to do their jobs."
      },
      /* 04 — Problem A */
      {
        layout: "split",
        tag: "Problem A",
        h: "Finding features was harder than it should be",
        video: "../assets/videos/wf-problem1",
        body: "Targeting, Experimentation, Block Groups, and other features all lived in one long list. Different roles needed different things, but everyone scanned the same list.",
        callout: "[ADD REAL USER / TEAM FEEDBACK]",
        img: IMG + "WF-old-bb.PNG",
        notes: "The first problem was finding features. Targeting, experimentation, block groups, they all lived in one long list. Different roles needed different things, but everyone scanned the same list. This one was really a structural problem. The team already knew that adding more into one column wouldn't scale."
      },
      /* 05 — Wayfair.com <-> Block Builder */
      {
        layout: "compare2",
        h: "A single image on Wayfair.com could be buried eight levels deep in Block Builder. Finding it meant clicking through every layer.",
        left: { img: IMG + "WF-Homepage-presentation.PNG", label: "Wayfair.com" },
        right: { videoPlain: "../assets/videos/wf-problem2", label: "Block Builder" },
        notes: "Here's what that actually meant in practice. A single image you see on the Wayfair.com homepage could be buried eight levels deep in Block Builder. To find it, you'd click through every layer."
      },
      /* 06 — Problem B */
      {
        layout: "split",
        tag: "Problem B",
        h: "Navigating deep page hierarchies was cumbersome",
        videoPlain: "../assets/videos/wf-problem2",
        body: "<strong>8 levels in, 8 clicks out.</strong> To reach a block buried eight levels down, users might click through eight drawers, then close them one by one to get back.",
        callout: "[ADD REAL USER COMPLAINT]",
        img: IMG + "WF-IA.png",
        notes: "The second problem was navigating deep hierarchies, and this was the one users complained about the most. To reach a block eight levels down, you'd open eight drawers, then close them one by one to get back out. It felt like being trapped in layers."
      },
      /* 07 — We knew the problems (recap) */
      {
        layout: "duo",
        h: "We knew the problems. We didn't know the right solution.",
        cols: [
          { tag: "Problem A", title: "Finding features was harder than it should be", video: "../assets/videos/wf-problem1" },
          { tag: "Problem B", title: "Navigating deep page hierarchies was cumbersome", videoPlain: "../assets/videos/wf-problem2" }
        ],
        notes: "So we actually knew the two problems. Problem A, finding features. Problem B, navigating deep hierarchies. The hard part wasn't finding problems. It was finding one solution that solved both without rebuilding the platform."
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
      /* 09 — Explore reflection */
      {
        layout: "learn",
        realMedia: true,
        media: { img: IMG + "WF-Design-Expolration2.png", step: "01 · Explore", text: "Test different ways to simplify navigation." },
        points: [
          { label: "What I learned", text: "More context doesn't necessarily mean less navigation." },
          { label: "Technical constraint", text: "Block Builder powers the live site, so large backend changes carried real production risk and engineering cost." }
        ],
        notes: "My first exploration was a page-level overview. What I learned was that more context doesn't necessarily mean less navigation. And there was a hard technical constraint: Block Builder powers the live site, so large backend changes carried real production risk and engineering cost."
      },
      /* 10 — Reframe (vertical) */
      {
        layout: "reframe",
        from: "What new navigation can we build?",
        to: "What can we do with what we already have?",
        notes: "That pushed me to reframe the question. Instead of asking what new navigation we could build, I started asking what we could do with what we already had."
      },
      /* 11 — (recap, reuse slide 8 for now) */
      {
        layout: "threeup",
        realMedia: true,
        h: "How I designed within the constraint",
        body: "I focused on what I could change, what I could reuse, and what we could ship safely.",
        cards: [
          { img: IMG + "WF-Design-Expolration2.png", title: "01 · Explore", text: "Test different ways to simplify navigation.", dim: true },
          { img: IMG + "WF-competitive-research.png", title: "02 · Learn", text: "Study patterns from complex products." },
          { video: "../assets/videos/wf-collaboration", title: "03 · Validate", text: "Prototype early and align on what to ship." }
        ],
        notes: "Cycling back to the three-part process. (Placeholder — reusing slide 8 for now.)"
      },
      /* 11b — (duplicate of slide 11) */
      {
        layout: "threeup",
        realMedia: true,
        h: "How I designed within the constraint",
        body: "I focused on what I could change, what I could reuse, and what we could ship safely.",
        cards: [
          { img: IMG + "WF-Design-Expolration2.png", title: "01 · Explore", text: "Test different ways to simplify navigation.", dim: true },
          { img: IMG + "WF-competitive-research.png", title: "02 · Learn", text: "Study patterns from complex products." },
          { video: "../assets/videos/wf-collaboration", title: "03 · Validate", text: "Prototype early and align on what to ship." }
        ],
        notes: "Cycling back to the three-part process. (Placeholder — reusing slide 8 for now.)"
      },
      /* 12 — Reimagining what we already had (Block Tree → Mini Tree) */
      {
        layout: "figure",
        realMedia: true,
        h: "Reimagining what we already had",
        body: "Turned an existing visualization into a lightweight navigation tool.",
        img: "../assets/images/WF-Minitree-Presentation.png",
        notes: "This is where the direction changed. Instead of building something new, I reimagined what we already had, turning Block Tree, an existing visualization, into a lightweight navigation tool."
      },
      /* 13 — Drawer design tradeoff (Before/After) */
      {
        layout: "compare2",
        tag: "Design tradeoff",
        h: "We couldn't remove the Drawer. So I changed how it felt and behaved.",
        left: { label: "Before", img: IMG + "WF-multiple_layers png.png", zoom: true },
        right: { label: "After", videoPlain: "../assets/videos/wf-solution2", zoom: true },
        notes: "The drawer was a real design tradeoff. We couldn't remove it, since we still needed navigation depth. So instead of removing it, I changed how it felt, so it no longer felt like being trapped in stacked layers."
      },
      /* 12 — (empty) was: Cross-functional */
      { layout: "blank", notes: "" },
      /* 14 — Section divider: The solution */
      {
        layout: "divider",
        h: "The solution",
        notes: "So that brings us to the solution."
      },
      /* 15 — A workspace built around how people work (Before/After, with IA inset overlay) */
      {
        layout: "compare2",
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
        tag: "Solution A",
        h: "Grouped features around how users work",
        videoPlain: "../assets/videos/wf-solution1",
        body: "I moved features into a persistent navigation panel and grouped them by workflow, so users could quickly access the tools relevant to their jobs instead of scanning one long list.",
        notes: ""
      },
      /* 19 — Solution B (cycle back to Problem B) */
      {
        layout: "split",
        tag: "Solution B",
        h: "Kept users oriented while navigating deep hierarchies",
        videoPlain: "../assets/videos/wf-solution2",
        body: "I replaced nested drawers with a persistent workspace structure that keeps the page, its hierarchy, and the active block visible, reducing the steps and travel distance needed to move between levels.",
        notes: ""
      },
      /* 20 — Shipped (impact) */
      {
        layout: "split",
        tag: "Shipped",
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
        bg: "rgb(94, 93, 179)",
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
        layout: "split",
        tag: "Exploration",
        h: "First idea: a guided wizard flow",
        callout: "“What can Blocky do? What should I ask?” still went unanswered.",
        videoPlain: "../assets/videos/blocky-wizard-flow",
        speed: 1.2,
        contain: true,
        zoom: 1.1,
        notes: "The first direction was a guided wizard flow that fills in missing context. It reduced back-and-forth, but a rigid wizard could make users dependent on the UI instead of understanding the agent — and it still didn't answer what Blocky could do."
      },
      /* 09 — Pivot: show, don't tell (shaping the direction) */
      {
        layout: "figure",
        realMedia: true,
        contain: true,
        h: "Show them what they can do",
        body: "Structured entry points and suggested actions make Blocky's capabilities visible, and give people a clear place to start.",
        bodyWide: true,
        img: IMG + "Blocky-shapping-direction.png",
        notes: "So I moved toward a more flexible idea: teaching by example. Structured entry points make Blocky easier to scale, more discoverable, and clearer to work with, while reducing cognitive load."
      },
      /* 10 — Teaching by example */
      {
        layout: "split",
        tag: "Teaching by example",
        h: "Suggested actions as entry points",
        body: "Start from common tasks, surface fresh capabilities with a “New” badge, and use editable example prompts with placeholders — a starting point users can modify.",
        callout: "Example: “Create a new banner block for [brand] US”",
        img: IMG + "blocky-suggestions.png",
        notes: "Instead of telling users how to use Blocky, show them what they can do. Suggested actions and editable example prompts give a starting point and a clear example of Blocky's capabilities, while staying flexible. The goal was to make the blank canvas less intimidating."
      },
      /* 11 — Agent states / feedback */
      {
        layout: "split",
        tag: "System feedback",
        h: "Making the agent feel alive",
        body: "Blocky can take time on complex actions — so it always communicates where it is.",
        list: ["Thinking", "Working", "Success", "Failure"],
        img: IMG + "blocky-states.png",
        notes: "Blocky can take time to complete complex actions, so the interaction communicates what's happening across thinking, working, success, and failure. Users should never wonder whether Blocky is still working or whether it actually did something."
      },
      /* 12 — Personality (visual hero) */
      {
        layout: "figure",
        h: "Giving Blocky a personality",
        body: "Purple, gradients, subtle dimensionality, and expressive states — approachable, but still part of an enterprise product.",
        bodyWide: true,
        img: IMG + "blocky-personality.png",
        notes: "I wanted Blocky to feel like more than a generic chatbot. The visual language uses purple, gradients, highlights, and expressive states, with the Blocky icon as the face of the agent — while still fitting inside the product."
      },
      /* 13 — Personality quote */
      {
        layout: "statement",
        q: "An AI agent should feel like something you can work with — not just something you type into.",
        notes: "That was the principle guiding the craft."
      },
      /* 14 — In the real product / dark mode */
      {
        layout: "split",
        tag: "In context",
        h: "Designing within the real product",
        body: "Blocky lives inside Block Builder. A side panel keeps it distinct without taking over the screen — so users still see and edit their work. Built for the existing components, dark mode, and color contrast.",
        img: IMG + "blocky-darkmode.png",
        notes: "Blocky lives inside Block Builder, so the redesign had to work within the existing system, hierarchy, dark mode, and accessibility. The side panel was intentional — Blocky shouldn't take over the screen, because users still need to see and edit their content. Distinct, but not disconnected."
      },
      /* 15 — Prototype in code */
      {
        layout: "split",
        tag: "Making it real",
        h: "I built the prototype in code",
        body: "Using Cursor and Claude Code, I built a working prototype on my own branch — real states, transitions, and product context. Not to become an engineer, but to make the design real enough to interact with.",
        callout: "A design tool: PM and Eng could react to something concrete and ask sharper questions.",
        img: IMG + "blocky-prototype.png",
        notes: "I used Cursor and Claude Code to build a functional prototype directly in the codebase, on my own branch. Instead of static screens, I could show the interaction, states, transitions, and real product context. It became a design tool that helped PM and Engineering react to something concrete."
      },
      /* 16 — The result (before/after) */
      {
        layout: "compare2",
        h: "A new interaction model for Blocky",
        left: { label: "Before — open-ended chat" },
        right: { label: "After — a guided AI experience" },
        notes: "The result was a new interaction model: from open-ended chat to a guided AI experience."
      },
      /* 17 — What it unlocks */
      {
        layout: "bullets",
        h: "What it unlocks",
        items: [
          "Discover what Blocky can do",
          "Know how to get started",
          "Clearer feedback while Blocky works",
          "Work with an AI agent without the “perfect” prompt",
          "Room to grow as new capabilities are added"
        ],
        notes: "The redesign helps users discover what Blocky can do, get started, and get clearer feedback — without needing the perfect prompt. And it gives Blocky room to grow as more AI capabilities are added."
      },
      /* 18 — What's next */
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

function slideInnerHTML(s) {
  switch (s.layout) {
    case "hero":
      return `<div class="l-hero__text">
          <h1 class="s-h1">${esc(s.h)}</h1>
          <div class="slide__spacer"></div>
          ${s.body ? `<p class="s-body s-body--wide">${esc(s.body)}</p>` : ""}
          ${s.meta ? `<dl class="hero-meta">${s.meta.map(m => `<div class="hero-meta__row"><dt>${esc(m.label)}</dt><dd>${esc(m.value)}</dd></div>`).join("")}</dl>` : ""}
        </div>
        <div class="l-hero__media${s.video ? " l-hero__media--framed" : ""}">${
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
          ${s.tag ? `<span class="s-tag">${esc(s.tag)}</span>` : ""}
          <h2 class="s-h2">${esc(s.h)}</h2>
          ${s.body ? `<p class="s-body s-body--wide" style="margin-top:16px">${esc(s.body)}</p>` : ""}
          ${s.list ? liList(s.list) : ""}
          ${s.callout ? `<p class="s-callout">${esc(s.callout)}</p>` : ""}
        </div>
        <div class="l-split__media${s.videoPlain && !s.contain ? " l-split__media--wide" : ""}${s.contain ? " l-split__media--contain" : ""}${s.focus === "tl" ? " l-split__media--focus-tl" : ""}">${
          s.video
            ? `<div class="pf-zoom"><video autoplay loop muted playsinline${s.speed ? ` data-speed="${s.speed}"` : ""}><source src="${s.video}.webm" type="video/webm"><source src="${s.video}.mp4" type="video/mp4"></video></div>`
            : s.videoPlain
              ? `<video class="pf-plain" autoplay loop muted playsinline${s.speed ? ` data-speed="${s.speed}"` : ""}${s.zoom ? ` style="transform:scale(${s.zoom}) translateY(-2.5%);transform-origin:top center"` : ""}><source src="${s.videoPlain}.webm" type="video/webm"><source src="${s.videoPlain}.mp4" type="video/mp4"></video>`
              : s.realMedia
                ? `<img src="${s.img}" alt="">`
                : mediaImg(s.img)
        }</div>`;

    case "figure":
      return `<h2 class="s-h2">${esc(s.h)}</h2>
        ${s.body ? `<p class="s-body${s.bodyWide ? " s-body--full" : ""}" style="margin-top:16px">${esc(s.body)}</p>` : ""}
        <div class="l-figure__media${s.realMedia ? " l-figure__media--real" : ""}${s.contain ? " l-figure__media--contain" : ""}">${s.realMedia ? `<img src="${s.img}" alt="">` : mediaImg(s.img)}</div>`;

    case "reframe":
      return `<div class="reframe">
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
      const m = (o) => o.videoPlain
        ? `<video autoplay loop muted playsinline><source src="${o.videoPlain}.webm" type="video/webm"><source src="${o.videoPlain}.mp4" type="video/mp4"></video>`
        : o.video
          ? `<video autoplay loop muted playsinline><source src="${o.video}.webm" type="video/webm"><source src="${o.video}.mp4" type="video/mp4"></video>`
          : o.img
            ? `<img src="${o.img}" alt="">`
            : mediaImg();
      const sub = (o) => o.overlay ? `<div class="cmp2__media cmp2__sub">${m(o.overlay)}</div>` : "";
      const mediaBlock = (o) => {
        const zoom = o.zoom ? " cmp2__media--zoom" : "";
        return o.toggle
          ? `<div class="cmp2__media cmp2--toggle${zoom}"><div class="cmp2__base">${m(o)}</div><div class="cmp2__alt">${m(o.toggle)}</div></div>`
          : `<div class="cmp2__media${zoom}">${m(o)}</div>`;
      };
      const hasToggle = s.left.toggle || s.right.toggle;
      return `${s.tag ? `<span class="s-tag">${esc(s.tag)}</span>` : ""}
        <h2 class="s-h2">${esc(s.h)}</h2>
        <div class="cmp2${s.anim === "cover" ? " cmp2--cover" : ""}${hasToggle ? " cmp2--toggle-sync" : ""}"${hasToggle ? ` title="Click to switch"` : ""}>
          <figure class="cmp2__item">
            ${mediaBlock(s.left)}
            ${sub(s.left)}
            <figcaption class="cmp2__cap">${esc(s.left.label)}</figcaption>
          </figure>
          <div class="cmp2__arrow" aria-hidden="true">→</div>
          <figure class="cmp2__item">
            ${mediaBlock(s.right)}
            ${sub(s.right)}
            <figcaption class="cmp2__cap">${esc(s.right.label)}</figcaption>
          </figure>
        </div>`;
    }

    case "toggle":
      return `<h2 class="s-h2">${esc(s.h)}</h2>
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
      return `<h2 class="s-h2">${esc(s.h)}</h2>
        <div class="duo-grid">
          ${s.cols.map(c => `<div class="duo-col">
            <div class="duo-media">${
              c.video
                ? `<div class="pf-zoom"><video autoplay loop muted playsinline><source src="${c.video}.webm" type="video/webm"><source src="${c.video}.mp4" type="video/mp4"></video></div>`
                : c.videoPlain
                  ? `<video class="pf-plain" autoplay loop muted playsinline><source src="${c.videoPlain}.webm" type="video/webm"><source src="${c.videoPlain}.mp4" type="video/mp4"></video>`
                  : mediaImg(c.img)
            }</div>
            ${c.tag ? `<span class="s-tag">${esc(c.tag)}</span>` : ""}
            ${c.title ? `<p class="duo-title">${esc(c.title)}</p>` : ""}
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
        ${s.tag ? `<span class="s-tag" style="margin-bottom:24px">${esc(s.tag)}</span>` : ""}
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

/* ---------- SKIP STATE (per slide, this session) ---------- */
function isSkipped(i) { return !!(deck.slides[i] && deck.slides[i]._skip); }
function setSkipped(i, val) { if (deck.slides[i]) deck.slides[i]._skip = !!val; }
function visibleIndices() { return deck.slides.map((_, i) => i).filter(i => !isSkipped(i)); }

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
function createSlideAfter(i) {
  const notes = readAllNotes();
  notes.splice(i + 1, 0, "");
  deck.slides.splice(i + 1, 0, { layout: "blank", notes: "" });
  writeAllNotes(notes);
  toggleState = {};
  renderRail(); selectSlide(i + 1);
  toast("New slide added");
}
function deleteSlide(i) {
  if (deck.slides.length <= 1) { toast("Can't delete the only slide"); return; }
  const notes = readAllNotes();
  notes.splice(i, 1);
  deck.slides.splice(i, 1);
  writeAllNotes(notes);
  toggleState = {};
  renderRail(); selectSlide(Math.min(i, deck.slides.length - 1));
  toast("Slide deleted");
}
function moveSlide(i, dir) {
  const j = i + dir;
  if (j < 0 || j >= deck.slides.length) return;
  const notes = readAllNotes();
  const [nv] = notes.splice(i, 1);
  notes.splice(j, 0, nv);
  const [s] = deck.slides.splice(i, 1);
  deck.slides.splice(j, 0, s);
  writeAllNotes(notes);
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
  startEl.style.display = "none";
  editorEl.classList.add("is-active");
  deckTitleEl.innerHTML = `${deck.name} <span>· ${deck.slides.length} slides</span>`;
  try { localStorage.setItem("ksp_last_deck", id); } catch (e) {}
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
    t.innerHTML = `<span class="thumb__num">${i + 1}</span>
      <span class="thumb__skip-badge">Skipped</span>`;
    t.appendChild(wrap);
    t.addEventListener("click", () => selectSlide(i));
    t.addEventListener("contextmenu", (e) => openThumbCtx(e, i));
    railEl.appendChild(t);
  });
  markActiveThumb();
  deckTitleEl.innerHTML = `${deck.name} <span>· ${deck.slides.length} slides</span>`;
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
    const ns = !isSkipped(i);
    setSkipped(i, ns);
    const th = railEl.querySelector(`.thumb[data-i="${i}"]`);
    if (th) th.classList.toggle("thumb--skipped", ns);
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
}

function selectSlide(i) {
  cur = Math.max(0, Math.min(deck.slides.length - 1, i));
  renderMain();
  markActiveThumb();
  notesArea.value = getNotes(cur);
  try { localStorage.setItem("ksp_last_slide", String(cur)); } catch (e) {}
  const active = railEl.querySelector(".thumb.is-active");
  if (active) active.scrollIntoView({ block: "nearest" });
}

notesArea.addEventListener("input", () => setNotes(cur, notesArea.value));

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
  if (bc && deck) bc.postMessage({ type: "sync", deckId: deck.id, cur: cur, toggle: toggleState, slides: deck.slides });
}
function applySync(m) {
  if (!m || !DECKS[m.deckId]) return;
  deck = DECKS[m.deckId];
  // adopt the presenter's live slide order/content so indices line up across windows
  if (Array.isArray(m.slides)) deck.slides = m.slides;
  cur = Math.max(0, Math.min(deck.slides.length - 1, m.cur));
  if (m.toggle) toggleState = m.toggle;
  if (presentEl.classList.contains("is-active")) renderPresent();
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
  } else {
    mountScaled(presenterNow, buildSlideEl(deck.slides[cur]), fitScale(presenterNow, 24));
    applyToggle(presenterNow, cur);
    applyVideoSpeed(presenterNow);
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
  let n = cur + dir;
  while (n >= 0 && n < deck.slides.length && isSkipped(n)) n += dir;
  if (n < 0 || n >= deck.slides.length) return;
  cur = n;
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
