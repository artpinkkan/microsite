/**
 * The curriculum is the single source of truth for the whole microsite:
 * navigation, the learning path, session pages, and the scope the AI mentor
 * is grounded in.
 *
 * Months 4-6 are deliberately unwritten. A session with `title: null` renders
 * as a live placeholder slot everywhere — nav, path, dashboard — so filling in
 * the syllabus is a content edit in this file, never a code change.
 */

export type SessionStatus = "done" | "current" | "next" | "scheduled" | "tbd";

export type MaterialKind = "deck" | "doc" | "repo" | "recording";

export interface Material {
  kind: MaterialKind;
  title: string;
  /** Absolute path under /public, or an external URL. Null while unpublished. */
  href: string | null;
}

export interface Session {
  /** "M1.03" — the code used in prompts, citations and breadcrumbs. */
  code: string;
  /** URL segment, e.g. "m1-03-evaluation-metrics". Stable once published. */
  slug: string;
  /** ".03" — the index shown against the module. */
  index: string;
  /** null means the syllabus has not been written yet. */
  title: string | null;
  summary: string | null;
  /** What a participant should be able to do afterwards. */
  outcomes: string[];
  status: SessionStatus;
  materials: Material[];
  deck: { file: string | null; slides: number | null } | null;
}

export interface Module {
  /** URL segment and prompt-library key. */
  id: string;
  /** "M1" */
  code: string;
  month: number;
  title: string;
  /** Sidebar label — the title is too long for 268px. */
  short: string;
  blurb: string;
  lead: string | null;
  leadRole: string | null;
  status: "in-progress" | "confirmed" | "pending";
  sessions: Session[];
}

/** A session slot that exists on the calendar but has no content yet. */
function tbd(code: string, index: string): Session {
  return {
    code,
    slug: code.toLowerCase().replace(".", "-"),
    index,
    title: null,
    summary: null,
    outcomes: [],
    status: "tbd",
    materials: [],
    deck: null,
  };
}

export const CURRICULUM: Module[] = [
  {
    id: "m1",
    code: "M1",
    month: 1,
    title: "LLM Fundamentals for Agentic AI",
    short: "LLM Fundamentals",
    blurb: "Enough of the machinery to make decisions about it.",
    lead: "Risman Adnan",
    leadRole: "CTO, ParagonCorp",
    status: "in-progress",
    sessions: [
      {
        code: "M1.01",
        slug: "m1-01-foundations",
        index: ".01",
        title: "Foundation of Large Language Models",
        summary:
          "Tokenisation, attention and context windows — the parts you have to hold in your head to reason about everything that follows.",
        outcomes: [
          "Explain to a non-engineer why context length costs money.",
          "Predict which failures come from the model and which from your prompt.",
        ],
        status: "done",
        materials: [
          { kind: "deck", title: "Session deck", href: null },
          { kind: "doc", title: "Glossary for the six months", href: null },
        ],
        deck: { file: null, slides: null },
      },
      {
        code: "M1.02",
        slug: "m1-02-llm-ops",
        index: ".02",
        title: "LLM Ops — train, fine-tune, inference",
        summary:
          "What each of the three actually costs, what each one is for, and how to tell which one your problem needs.",
        outcomes: [
          "Choose between fine-tuning and retrieval with a defensible argument.",
          "Read an inference bill and say where the money went.",
        ],
        status: "done",
        materials: [
          { kind: "deck", title: "Session deck", href: null },
          { kind: "repo", title: "LoRA walkthrough notebook", href: null },
        ],
        deck: { file: null, slides: null },
      },
      {
        code: "M1.03",
        slug: "m1-03-evaluation-metrics",
        index: ".03",
        title: "LLM Evaluation Metrics",
        summary:
          "Why accuracy is the wrong headline number, what a grounded eval set for a bank looks like, and how to read a scorecard you did not build.",
        outcomes: [
          "Read someone else's model scorecard and say what it does not tell you.",
          "Build a 200-case eval set for one of your own workflows, with sign-off.",
          "Defend or reject a go-live on evidence rather than a demo.",
        ],
        status: "current",
        materials: [
          { kind: "deck", title: "Session deck", href: null },
          { kind: "doc", title: "Eval checklist for bank models", href: null },
          { kind: "repo", title: "Starter eval harness", href: null },
        ],
        deck: { file: null, slides: null },
      },
      {
        code: "M1.04",
        slug: "m1-04-self-hosted-llm",
        index: ".04",
        title: "Self-Hosted LLM Services",
        summary:
          "Serving, batching and the KV cache — where self-hosting is cheaper, and the point at which it stops being.",
        outcomes: [
          "Size the hardware for a stated concurrency and context length.",
          "State the compliance case for and against hosting inside the bank.",
        ],
        status: "next",
        materials: [{ kind: "deck", title: "Session deck", href: null }],
        deck: { file: null, slides: null },
      },
    ],
  },
  {
    id: "m2",
    code: "M2",
    month: 2,
    title: "Agentic AI Applications Development",
    short: "Agentic AI Apps",
    blurb: "Building the thing, not describing it.",
    lead: "Edwin Simjaya",
    leadRole: "AI Head, Kalbe CDT",
    status: "confirmed",
    sessions: [
      {
        code: "M2.01",
        slug: "m2-01-agent-architecture",
        index: ".01",
        title: "Agentic AI Apps Architecture",
        summary: "The loop, the tools, the state and the stopping condition.",
        outcomes: [],
        status: "scheduled",
        materials: [{ kind: "deck", title: "Session deck", href: null }],
        deck: { file: null, slides: null },
      },
      {
        code: "M2.02",
        slug: "m2-02-harness-engine",
        index: ".02",
        title: "Deep dive into the harness engine",
        summary: "What the harness owns and what the model owns, traced through a real run.",
        outcomes: [],
        status: "scheduled",
        materials: [{ kind: "deck", title: "Session deck", href: null }],
        deck: { file: null, slides: null },
      },
      {
        code: "M2.03",
        slug: "m2-03-web-desktop-ui",
        index: ".03",
        title: "Deep dive into web and desktop UI",
        summary: "Streaming, interruption and the interface affordances an agent needs.",
        outcomes: [],
        status: "scheduled",
        materials: [{ kind: "deck", title: "Session deck", href: null }],
        deck: { file: null, slides: null },
      },
      {
        code: "M2.04",
        slug: "m2-04-autonomous-agents",
        index: ".04",
        title: "Autonomous AI agents",
        summary: "Long-running agents, review gates, and what an agent may do unattended.",
        outcomes: [],
        status: "scheduled",
        materials: [{ kind: "deck", title: "Session deck", href: null }],
        deck: { file: null, slides: null },
      },
    ],
  },
  {
    id: "m3",
    code: "M3",
    month: 3,
    title: "Agentic AI Use Cases for Banking",
    short: "Banking Use Cases",
    blurb: "Four real intakes, on the document and video types the bank already has.",
    lead: null,
    leadRole: null,
    status: "confirmed",
    sessions: [
      {
        code: "M3.01",
        slug: "m3-01-ocr",
        index: ".01",
        title: "OCR — printed and scanned document reasoning",
        summary: "Mixed print and handwriting, two languages, and the points where a human must sign.",
        outcomes: [],
        status: "scheduled",
        materials: [{ kind: "deck", title: "Session deck", href: null }],
        deck: { file: null, slides: null },
      },
      {
        code: "M3.02",
        slug: "m3-02-vision",
        index: ".02",
        title: "Vision — CCTV video understanding and reasoning",
        summary: "What a vision model can commit to in a branch, and what it must not be asked to decide.",
        outcomes: [],
        status: "scheduled",
        materials: [{ kind: "deck", title: "Session deck", href: null }],
        deck: { file: null, slides: null },
      },
      {
        code: "M3.03",
        slug: "m3-03-nlp",
        index: ".03",
        title: "NLP — document understanding, reasoning and workflow",
        summary: "Turning prose obligations into checks a system can run.",
        outcomes: [],
        status: "scheduled",
        materials: [{ kind: "deck", title: "Session deck", href: null }],
        deck: { file: null, slides: null },
      },
      {
        code: "M3.04",
        slug: "m3-04-codex",
        index: ".04",
        title: "Codex — data analytics, RPA and the software factory",
        summary: "Agents against data and against existing systems, with the audit trail attached.",
        outcomes: [],
        status: "scheduled",
        materials: [{ kind: "deck", title: "Session deck", href: null }],
        deck: { file: null, slides: null },
      },
    ],
  },
  {
    id: "m4",
    code: "M4",
    month: 4,
    title: "AI Native SDLC with the Agile Manifesto",
    short: "AI Native SDLC",
    blurb: "Titles agreed, sessions not yet written.",
    lead: null,
    leadRole: null,
    status: "pending",
    sessions: [tbd("M4.01", ".01"), tbd("M4.02", ".02"), tbd("M4.03", ".03"), tbd("M4.04", ".04")],
  },
  {
    id: "m5",
    code: "M5",
    month: 5,
    title: "AI Native Design Thinking Lifecycle",
    short: "Design Thinking",
    blurb: "Titles agreed, sessions not yet written.",
    lead: null,
    leadRole: null,
    status: "pending",
    sessions: [tbd("M5.01", ".01"), tbd("M5.02", ".02"), tbd("M5.03", ".03"), tbd("M5.04", ".04")],
  },
  {
    id: "m6",
    code: "M6",
    month: 6,
    title: "Agentic AI for Cyber Security",
    short: "Cyber Security",
    blurb: "Titles agreed, sessions not yet written.",
    lead: null,
    leadRole: null,
    status: "pending",
    sessions: [tbd("M6.01", ".01"), tbd("M6.02", ".02"), tbd("M6.03", ".03"), tbd("M6.04", ".04")],
  },
];

// ── lookups ──────────────────────────────────────────────────────

export const ALL_SESSIONS: Session[] = CURRICULUM.flatMap((m) => m.sessions);

export function moduleById(id: string): Module | undefined {
  return CURRICULUM.find((m) => m.id === id);
}

export function moduleOfSession(code: string): Module | undefined {
  return CURRICULUM.find((m) => m.sessions.some((s) => s.code === code));
}

export function sessionBySlug(slug: string): Session | undefined {
  return ALL_SESSIONS.find((s) => s.slug === slug);
}

export function sessionByCode(code: string): Session | undefined {
  return ALL_SESSIONS.find((s) => s.code === code);
}

export function currentSession(): Session | undefined {
  return ALL_SESSIONS.find((s) => s.status === "current");
}

export const COUNTS = {
  modules: CURRICULUM.length,
  sessions: ALL_SESSIONS.length,
  written: ALL_SESSIONS.filter((s) => s.title !== null).length,
  done: ALL_SESSIONS.filter((s) => s.status === "done").length,
  pendingSyllabus: ALL_SESSIONS.filter((s) => s.status === "tbd").length,
};
