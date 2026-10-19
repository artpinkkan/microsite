import { Eyebrow, SectionHead } from "@/components/ui";
import { CURRICULUM } from "@/content/curriculum";
import { SITE, TRAINERS } from "@/content/site";

/* ── LMS §8 light tokens, inline so the page is self-contained ────────── */
const C = {
  bg: "#FFFFFF",
  panel: "#F5F6F8",
  panel2: "#EDEEF1",
  border: "#E8EAEE",
  borderStrong: "#D6D9DE",
  accent: "#2563EB",
  accentHover: "#1D4ED8",
  accentSoft: "rgba(37, 99, 235, 0.08)",
  text: "#111827",
  textSecondary: "#5B6470",
  textMuted: "#9AA1AC",
  success: "#16A34A",
};

const SHADOW_CARD = "0 1px 2px rgba(16,24,40,0.04)";
const SHADOW_LIFT = "0 12px 32px rgba(16,24,40,0.10)";

const OUTCOMES = [
  "Design and evaluate agentic AI systems grounded in LLM fundamentals.",
  "Build autonomous AI agents for real banking workflows — OCR, vision, NLP, code.",
  "Conduct model evaluations with defensible evidence, not demos.",
  "Apply AI-native engineering practices across the software development lifecycle.",
  "Navigate compliance and governance requirements for AI in regulated environments.",
  "Lead AI product decisions with engineering depth and business fluency.",
];

const FORMATS = [
  { label: "Duration", value: "6 months" },
  { label: "Format", value: SITE.mode },
  { label: "Cadence", value: SITE.cadence },
  { label: "Cohort", value: SITE.cohort },
];

const PILLARS = [
  {
    code: "01",
    title: "Practice-first learning",
    body:
      "Every session ships a deck, a curated prompt set and an AI mentor grounded in that session's material. You learn by doing, not by watching.",
  },
  {
    code: "02",
    title: "Banking context throughout",
    body:
      "Case studies, datasets and compliance scenarios are drawn from the bank's actual domain — OCR on real document types, vision on branch CCTV, NLP on internal policy.",
  },
  {
    code: "03",
    title: "AI-native software delivery",
    body:
      "Months 4–6 cover the SDLC changes AI demands: how teams are restructured, how reviews change, how the manifesto maps to new tooling.",
  },
];

// This is a static marketing landing — sign-in buttons intentionally point at
// "#". The real app (the full Next.js microsite with auth) lives elsewhere;
// change these hrefs when that app has a public URL.
const SIGN_IN_HREF = "#";

export default function LandingPage() {
  const totalSessions = CURRICULUM.reduce((n, m) => n + m.sessions.length, 0);
  const confirmedMonths = CURRICULUM.filter((m) => m.status !== "pending").length;

  return (
    <main style={{ background: C.bg, color: C.text, minHeight: "100vh" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "32px 32px 96px" }}>
        {/* ── Top chrome: lockup + sign-in ──────────────────────── */}
        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: 24,
            borderBottom: `1px solid ${C.border}`,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span
              aria-hidden="true"
              style={{
                width: 30,
                height: 30,
                borderRadius: 9,
                background: C.accent,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-mono)",
                fontSize: 8.5,
                letterSpacing: "0.06em",
                color: "#fff",
              }}
            >
              AINE
            </span>
            <div style={{ lineHeight: 1.2 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: C.text }}>{SITE.short}</p>
              <p style={{ fontSize: 11.5, color: C.textSecondary }}>
                {SITE.client} · {SITE.programme}
              </p>
            </div>
          </div>
          <a
            href={SIGN_IN_HREF}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              padding: "9px 16px",
              fontSize: 12.5,
              fontWeight: 500,
              color: C.text,
              background: "transparent",
              border: `1px solid ${C.borderStrong}`,
              borderRadius: 10,
            }}
          >
            Sign in <span aria-hidden="true">→</span>
          </a>
        </header>

        {/* ── 0 · Hero ──────────────────────────────────────────── */}
        <section style={{ paddingTop: 72, paddingBottom: 24 }}>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: C.textSecondary,
            }}
          >
            <span
              aria-hidden="true"
              style={{ display: "inline-block", width: 24, height: 1, background: C.borderStrong }}
            />
            {SITE.programme} · {SITE.cohort}
          </p>

          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              lineHeight: 1.06,
              color: C.text,
              marginTop: 20,
              maxWidth: "20ch",
            }}
          >
            Engineers for the <span style={{ color: C.accent }}>AI-native era</span> of banking.
          </h1>

          <p
            style={{
              fontSize: 16,
              lineHeight: 1.7,
              color: C.textSecondary,
              marginTop: 20,
              maxWidth: "58ch",
            }}
          >
            A six-month intensive for Danamon engineers. Move from understanding how large language
            models work to shipping autonomous AI agents on real banking workflows — with the
            governance guardrails the industry requires.
          </p>

          <div style={{ display: "flex", gap: 10, marginTop: 32, flexWrap: "wrap" }}>
            <a
              href={SIGN_IN_HREF}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 22px",
                fontSize: 13.5,
                fontWeight: 500,
                color: "#fff",
                background: C.accent,
                border: `1px solid ${C.accent}`,
                borderRadius: 10,
                boxShadow: SHADOW_LIFT,
              }}
            >
              Sign in to the academy <span aria-hidden="true">→</span>
            </a>
            <a
              href="#structure"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 22px",
                fontSize: 13.5,
                fontWeight: 500,
                color: C.text,
                background: "transparent",
                border: `1px solid ${C.borderStrong}`,
                borderRadius: 10,
              }}
            >
              See the syllabus
            </a>
          </div>

          {/* Stats strip */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              marginTop: 56,
              background: C.bg,
              border: `1px solid ${C.border}`,
              borderRadius: 14,
              overflow: "hidden",
              boxShadow: SHADOW_CARD,
            }}
          >
            {[
              [String(CURRICULUM.length), "Modules"],
              [String(totalSessions), "Sessions planned"],
              [`${confirmedMonths}/${CURRICULUM.length}`, "Months with syllabus"],
              [String(TRAINERS.length), "Industry trainers"],
            ].map(([value, label], i, arr) => (
              <div
                key={label}
                style={{
                  padding: "22px 24px",
                  borderRight: i < arr.length - 1 ? `1px solid ${C.border}` : undefined,
                }}
              >
                <b
                  style={{
                    display: "block",
                    fontSize: 30,
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    color: C.text,
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {value}
                </b>
                <span
                  style={{
                    display: "block",
                    marginTop: 6,
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: C.textMuted,
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── 01 · Programme Overview ───────────────────────────── */}
        <section style={{ marginTop: 96 }}>
          <SectionHead index="01" label="Programme overview" />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)",
              gap: 56,
              alignItems: "start",
              marginTop: 32,
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "clamp(24px, 2.8vw, 36px)",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.18,
                  color: C.text,
                  maxWidth: "28ch",
                }}
              >
                From engineer to <span style={{ color: C.accent }}>AI-native practitioner.</span>
              </h2>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.75,
                  color: C.textSecondary,
                  marginTop: 20,
                  maxWidth: "54ch",
                }}
              >
                {SITE.programme} is a six-month intensive programme for {SITE.client} engineers.
                You will move from understanding how large language models work to building
                autonomous AI agents on real banking workflows — and doing it with the governance
                guardrails the industry requires.
              </p>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.75,
                  color: C.textSecondary,
                  marginTop: 14,
                  maxWidth: "54ch",
                }}
              >
                Every session is grounded in the bank&apos;s own document types, data and
                compliance context. You leave each month with something you can deploy, not just
                something you can explain.
              </p>
            </div>

            {/* Format facts card */}
            <div
              style={{
                padding: "26px 28px",
                background: C.bg,
                border: `1px solid ${C.border}`,
                borderRadius: 14,
                boxShadow: SHADOW_CARD,
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: C.textMuted,
                  marginBottom: 18,
                }}
              >
                Programme details
              </p>
              {FORMATS.map(({ label, value }, i) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    gap: 16,
                    padding: "12px 0",
                    borderBottom: i < FORMATS.length - 1 ? `1px solid ${C.border}` : undefined,
                    fontSize: 13.5,
                  }}
                >
                  <span style={{ color: C.textSecondary }}>{label}</span>
                  <span style={{ fontWeight: 500, color: C.text, textAlign: "right" }}>
                    {value}
                  </span>
                </div>
              ))}
              <div style={{ marginTop: 24 }}>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: C.textMuted,
                    marginBottom: 14,
                  }}
                >
                  Trainers
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {TRAINERS.map((t) => (
                    <div key={t.code} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span
                        aria-hidden="true"
                        style={{
                          width: 26,
                          height: 26,
                          borderRadius: 999,
                          background: C.accentSoft,
                          border: `1px solid rgba(37,99,235,0.2)`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: "var(--font-mono)",
                          fontSize: 9,
                          color: C.accent,
                          flexShrink: 0,
                        }}
                      >
                        {t.name
                          .split(" ")
                          .map((w) => w[0])
                          .join("")
                          .slice(0, 2)}
                      </span>
                      <div style={{ fontSize: 12.5, lineHeight: 1.35 }}>
                        <span style={{ fontWeight: 500, color: C.text }}>{t.name}</span>{" "}
                        <span style={{ color: C.textMuted }}>· {t.role}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Three pillars */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              marginTop: 48,
              borderTop: `1px solid ${C.border}`,
              borderLeft: `1px solid ${C.border}`,
            }}
          >
            {PILLARS.map((f) => (
              <div
                key={f.code}
                style={{
                  padding: "28px 28px 32px",
                  borderBottom: `1px solid ${C.border}`,
                  borderRight: `1px solid ${C.border}`,
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: C.accent,
                  }}
                >
                  {f.code}
                </p>
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                    marginTop: 10,
                    color: C.text,
                  }}
                >
                  {f.title}
                </h3>
                <p style={{ fontSize: 13, lineHeight: 1.75, color: C.textSecondary, marginTop: 10 }}>
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 02 · Course Structure ─────────────────────────────── */}
        <section id="structure" style={{ marginTop: 96, scrollMarginTop: 24 }}>
          <SectionHead index="02" label="Course structure" />

          <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 12 }}>
            {CURRICULUM.map((m) => {
              const isPending = m.status === "pending";
              const written = m.sessions.filter((s) => s.title).length;

              return (
                <div
                  key={m.id}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "88px minmax(0, 1fr) minmax(0, 1.6fr)",
                    gap: 0,
                    alignItems: "stretch",
                    background: C.bg,
                    border: `1px solid ${C.border}`,
                    borderRadius: 14,
                    boxShadow: SHADOW_CARD,
                    opacity: isPending ? 0.72 : 1,
                    overflow: "hidden",
                  }}
                >
                  {/* Month col */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "24px 16px",
                      borderRight: `1px solid ${C.border}`,
                      background: isPending ? C.panel : C.accentSoft,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 9,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: isPending ? C.textMuted : C.accent,
                      }}
                    >
                      {m.code}
                    </span>
                    <b
                      style={{
                        display: "block",
                        fontSize: 22,
                        fontWeight: 600,
                        color: isPending ? C.textMuted : C.accent,
                        marginTop: 4,
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      M.0{m.month}
                    </b>
                  </div>

                  {/* Title + blurb col */}
                  <div style={{ padding: "22px 26px", borderRight: `1px solid ${C.border}` }}>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: C.textMuted,
                        marginBottom: 8,
                      }}
                    >
                      Month {m.month}
                    </p>
                    <h3
                      style={{
                        fontSize: 15,
                        fontWeight: 600,
                        letterSpacing: "-0.01em",
                        lineHeight: 1.35,
                        color: C.text,
                      }}
                    >
                      {m.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 12.5,
                        lineHeight: 1.7,
                        color: C.textSecondary,
                        marginTop: 8,
                      }}
                    >
                      {m.blurb}
                    </p>
                    {m.lead ? (
                      <p style={{ fontSize: 11.5, color: C.textMuted, marginTop: 10 }}>
                        {m.lead} <span>· {m.leadRole}</span>
                      </p>
                    ) : null}
                  </div>

                  {/* Sessions col */}
                  <div style={{ padding: "22px 26px" }}>
                    {isPending ? (
                      <p
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: 10,
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: C.textMuted,
                        }}
                      >
                        [{m.sessions.length} sessions — syllabus pending]
                      </p>
                    ) : (
                      <>
                        <p
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: 10,
                            letterSpacing: "0.14em",
                            textTransform: "uppercase",
                            color: C.textMuted,
                            marginBottom: 10,
                          }}
                        >
                          {written} / {m.sessions.length} sessions written
                        </p>
                        <ol style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                          {m.sessions.map((s) => (
                            <li
                              key={s.code}
                              style={{
                                display: "flex",
                                gap: 10,
                                fontSize: 12.5,
                                lineHeight: 1.55,
                                color: s.title ? C.text : C.textMuted,
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: "var(--font-mono)",
                                  fontSize: 9,
                                  flexShrink: 0,
                                  paddingTop: 3,
                                  color: s.title ? C.accent : C.textMuted,
                                }}
                              >
                                {s.index}
                              </span>
                              <span>{s.title ?? "TBD"}</span>
                            </li>
                          ))}
                        </ol>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── 03 · Course Highlights ────────────────────────────── */}
        <section style={{ marginTop: 96 }}>
          <SectionHead index="03" label="Course highlights" />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
              gap: 56,
              alignItems: "start",
              marginTop: 32,
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "clamp(22px, 2.4vw, 30px)",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                  color: C.text,
                }}
              >
                What you will be able to do
              </h2>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.75,
                  color: C.textSecondary,
                  marginTop: 14,
                  maxWidth: "48ch",
                }}
              >
                By the end of the programme, participants can build, evaluate and govern AI
                systems in a regulated banking context — not just describe how they work.
              </p>

              <ul style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 0 }}>
                {OUTCOMES.map((outcome, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      gap: 16,
                      padding: "14px 0",
                      borderBottom: `1px solid ${C.border}`,
                      fontSize: 13.5,
                      lineHeight: 1.65,
                      color: C.text,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 9,
                        color: C.accent,
                        flexShrink: 0,
                        paddingTop: 4,
                        letterSpacing: "0.1em",
                      }}
                    >
                      0{i + 1}
                    </span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right column — module topics */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <h3
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                  color: C.textSecondary,
                  marginBottom: 4,
                }}
              >
                Topics across six months
              </h3>
              {CURRICULUM.filter((m) => m.status !== "pending").map((m) => (
                <div
                  key={m.id}
                  style={{
                    padding: "18px 20px",
                    background: C.bg,
                    border: `1px solid ${C.border}`,
                    borderRadius: 14,
                    boxShadow: SHADOW_CARD,
                  }}
                >
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 9,
                        letterSpacing: "0.14em",
                        color: C.accent,
                        background: C.accentSoft,
                        padding: "3px 8px",
                        borderRadius: 999,
                        border: `1px solid rgba(37,99,235,0.2)`,
                      }}
                    >
                      {m.code}
                    </span>
                    <span style={{ fontSize: 13, fontWeight: 500, color: C.text }}>{m.short}</span>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {m.sessions
                      .filter((s) => s.title)
                      .map((s) => (
                        <span
                          key={s.code}
                          style={{
                            fontSize: 11,
                            padding: "4px 10px",
                            borderRadius: 999,
                            background: C.panel,
                            border: `1px solid ${C.border}`,
                            color: C.textSecondary,
                          }}
                        >
                          {s.title}
                        </span>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 04 · Fee & Payment ────────────────────────────────── */}
        <section style={{ marginTop: 96 }}>
          <SectionHead index="04" label="Fee & payment" />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)",
              gap: 16,
              marginTop: 32,
            }}
          >
            {/* Tier 1 */}
            <div
              style={{
                padding: "28px 30px",
                background: C.bg,
                border: `1px solid ${C.border}`,
                borderRadius: 14,
                boxShadow: SHADOW_CARD,
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: C.textMuted,
                }}
              >
                Early enrolment
              </p>
              <b
                style={{
                  display: "block",
                  fontSize: 32,
                  fontWeight: 600,
                  letterSpacing: "-0.03em",
                  color: C.accent,
                  marginTop: 14,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                Rp 18.500.000
              </b>
              <p style={{ fontSize: 12, color: C.textMuted, marginTop: 6 }}>
                Per participant · before cohort start
              </p>
              <div
                style={{
                  marginTop: 22,
                  paddingTop: 18,
                  borderTop: `1px solid ${C.border}`,
                  display: "flex",
                  flexDirection: "column",
                  gap: 9,
                }}
              >
                {[
                  "6-month full access",
                  "All decks and prompt sets",
                  "AI mentor access",
                  "Certificate of completion",
                ].map((f) => (
                  <p
                    key={f}
                    style={{
                      fontSize: 12.5,
                      color: C.textSecondary,
                      display: "flex",
                      gap: 8,
                    }}
                  >
                    <span style={{ color: C.success, fontWeight: 600 }}>✓</span> {f}
                  </p>
                ))}
              </div>
            </div>

            {/* Tier 2 — recommended */}
            <div
              style={{
                padding: "28px 30px",
                background: C.accentSoft,
                border: `1px solid rgba(37,99,235,0.3)`,
                borderRadius: 14,
                boxShadow: SHADOW_LIFT,
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: C.accent,
                }}
              >
                Standard · recommended
              </p>
              <b
                style={{
                  display: "block",
                  fontSize: 32,
                  fontWeight: 600,
                  letterSpacing: "-0.03em",
                  color: C.text,
                  marginTop: 14,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                Rp 22.000.000
              </b>
              <p style={{ fontSize: 12, color: C.textSecondary, marginTop: 6 }}>
                Per participant · standard rate
              </p>
              <div
                style={{
                  marginTop: 22,
                  paddingTop: 18,
                  borderTop: `1px solid rgba(37,99,235,0.15)`,
                  display: "flex",
                  flexDirection: "column",
                  gap: 9,
                }}
              >
                {[
                  "6-month full access",
                  "All decks and prompt sets",
                  "AI mentor access",
                  "Certificate of completion",
                  "Group coaching sessions",
                ].map((f) => (
                  <p
                    key={f}
                    style={{
                      fontSize: 12.5,
                      color: C.textSecondary,
                      display: "flex",
                      gap: 8,
                    }}
                  >
                    <span style={{ color: C.accent, fontWeight: 600 }}>✓</span> {f}
                  </p>
                ))}
              </div>
            </div>

            {/* Payment options */}
            <div
              style={{
                padding: "28px 30px",
                background: C.bg,
                border: `1px solid ${C.border}`,
                borderRadius: 14,
                boxShadow: SHADOW_CARD,
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: C.textMuted,
                }}
              >
                Payment options
              </p>
              <div
                style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 16 }}
              >
                {[
                  {
                    label: "Option A — Full payment",
                    desc:
                      "Single invoice before the cohort start date. Eligible for early-enrolment rate.",
                  },
                  {
                    label: "Option B — Monthly installment",
                    desc:
                      "Six equal monthly payments, billed on the first of each programme month.",
                  },
                  {
                    label: "Option C — Corporate billing",
                    desc:
                      "Direct invoice to HR or Finance. Contact the programme team for a PO template.",
                  },
                ].map((opt, i, arr) => (
                  <div
                    key={opt.label}
                    style={{
                      paddingBottom: i < arr.length - 1 ? 16 : 0,
                      borderBottom:
                        i < arr.length - 1 ? `1px solid ${C.border}` : undefined,
                    }}
                  >
                    <p style={{ fontSize: 13, fontWeight: 500, color: C.text }}>{opt.label}</p>
                    <p
                      style={{
                        fontSize: 12,
                        lineHeight: 1.7,
                        color: C.textSecondary,
                        marginTop: 5,
                      }}
                    >
                      {opt.desc}
                    </p>
                  </div>
                ))}
              </div>
              <p
                style={{
                  fontSize: 11.5,
                  color: C.textMuted,
                  marginTop: 16,
                  lineHeight: 1.6,
                }}
              >
                All fees are in Indonesian Rupiah and exclude VAT. Contact your HR Business
                Partner or reach out to the programme team to enrol.
              </p>
            </div>
          </div>

          {/* Refund note */}
          <div
            style={{
              marginTop: 32,
              padding: "22px 24px",
              background: C.panel,
              borderRadius: 10,
              border: `1px solid ${C.border}`,
            }}
          >
            <Eyebrow>Refund policy</Eyebrow>
            <p
              style={{
                fontSize: 13,
                lineHeight: 1.75,
                color: C.textSecondary,
                marginTop: 10,
                maxWidth: "72ch",
              }}
            >
              Full refund available up to 14 days before the cohort start date. After that, a
              credit note valid for the next cohort is issued. No refund once Month 2 begins.
            </p>
          </div>
        </section>

        {/* ── Bottom CTA ────────────────────────────────────────── */}
        <section
          style={{
            marginTop: 72,
            padding: "40px 36px",
            background: C.bg,
            border: `1px solid ${C.border}`,
            borderRadius: 14,
            boxShadow: SHADOW_CARD,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "clamp(20px, 2vw, 26px)",
                fontWeight: 600,
                letterSpacing: "-0.01em",
                color: C.text,
                maxWidth: "32ch",
              }}
            >
              Ready to join {SITE.cohort}?
            </h2>
            <p
              style={{
                fontSize: 13.5,
                lineHeight: 1.7,
                color: C.textSecondary,
                marginTop: 8,
                maxWidth: "52ch",
              }}
            >
              Sign in with your {SITE.client} account to resume the programme, or reach out to the
              programme team if you have not been invited yet.
            </p>
          </div>
          <a
            href={SIGN_IN_HREF}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 22px",
              fontSize: 13.5,
              fontWeight: 500,
              color: "#fff",
              background: C.accent,
              border: `1px solid ${C.accent}`,
              borderRadius: 10,
              boxShadow: SHADOW_LIFT,
            }}
          >
            Sign in to the academy <span aria-hidden="true">→</span>
          </a>
        </section>
      </div>
    </main>
  );
}
