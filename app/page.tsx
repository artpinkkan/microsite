import { CURRICULUM } from "@/content/curriculum";
import { SITE, TRAINERS } from "@/content/site";

/* ── Shannon LMS §8 light tokens (mirrors globals.css for inline use) ──── */
const C = {
  // text
  ink:    "#111827",   // text-primary (headings, dark surfaces)
  ink70:  "#374151",   // slightly muted body
  ink50:  "#5B6470",   // text-secondary
  ink30:  "#9AA1AC",   // text-muted
  // accent — royal blue replaces the lime from the reference
  accent:     "#2563EB",
  accentHov:  "#1D4ED8",
  accentSoft: "rgba(37, 99, 235, 0.08)",
  // surfaces
  white: "#FFFFFF",
  wash:  "#F5F6F8",    // panel — section bg
  rule:  "#E8EAEE",    // border — hairline
};

const SIGN_IN_HREF = "#"; // static mockup — no auth endpoint

const NAV = [
  { label: "Home", href: "#top" },
  { label: "Programme", href: "#overview" },
  { label: "Curriculum", href: "#structure" },
  { label: "Outcomes", href: "#highlights" },
  { label: "Fees", href: "#fees" },
];

const OUTCOMES = [
  "Design and evaluate agentic AI systems grounded in LLM fundamentals.",
  "Build autonomous AI agents for real banking workflows — OCR, vision, NLP, code.",
  "Conduct model evaluations with defensible evidence, not demos.",
  "Apply AI-native engineering practices across the software development lifecycle.",
  "Navigate compliance and governance requirements for AI in regulated environments.",
  "Lead AI product decisions with engineering depth and business fluency.",
];

const FEES = [
  {
    tone: "plain" as const,
    tag: "Early enrolment",
    price: "Rp 18.500.000",
    note: "Per participant · before cohort start",
    perks: ["6-month full access", "All decks and prompt sets", "AI mentor access", "Certificate of completion"],
  },
  {
    tone: "lime" as const,
    tag: "Standard · recommended",
    price: "Rp 22.000.000",
    note: "Per participant · standard rate",
    perks: ["6-month full access", "All decks and prompt sets", "AI mentor access", "Certificate of completion", "Group coaching sessions"],
  },
];

const PAYMENT_OPTS = [
  { label: "Full payment", desc: "Single invoice before cohort start. Qualifies for early-enrolment rate." },
  { label: "Monthly installment", desc: "Six equal monthly payments, billed on the first of each programme month." },
  { label: "Corporate billing", desc: "Direct invoice to HR or Finance. Programme team supplies a PO template on request." },
];

// Hero image — Unsplash hot-link. Mockup only; swap for a local or branded
// asset when the real campaign goes live.
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1000&q=80";

export default function LandingPage() {
  const totalSessions = CURRICULUM.reduce((n, m) => n + m.sessions.length, 0);
  const confirmedMonths = CURRICULUM.filter((m) => m.status !== "pending").length;

  return (
    <div id="top">
      {/* Full-width — sections span the viewport; content gutters live on each section. */}
      <div style={{ background: C.white }}>
        {/* ───────── Top nav ───────── */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "22px 40px",
            borderBottom: `1px solid ${C.rule}`,
          }}
        >
          <a href="#top" style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              aria-hidden="true"
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: C.accent,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                color: C.white,
                fontWeight: 800,
                fontSize: 13,
                letterSpacing: "0.02em",
              }}
            >
              A
            </span>
            <span style={{ fontSize: 20, fontWeight: 800, color: C.ink, letterSpacing: "-0.02em" }}>
              AINE
            </span>
          </a>

          <ul
            style={{
              display: "flex",
              alignItems: "center",
              gap: 32,
              fontSize: 14,
              fontWeight: 500,
              color: C.ink70,
            }}
          >
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} style={{ color: "inherit" }}>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>

          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <a href={SIGN_IN_HREF} style={{ fontSize: 14, fontWeight: 500, color: C.ink }}>
              Sign in
            </a>
            <a
              href={SIGN_IN_HREF}
              style={{
                padding: "11px 22px",
                borderRadius: 999,
                border: `1.5px solid ${C.ink}`,
                fontSize: 14,
                fontWeight: 600,
                color: C.ink,
              }}
            >
              Join cohort
            </a>
          </div>
        </nav>

        {/* ───────── Hero ───────── */}
        <section
          style={{
            padding: "72px 56px 88px",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
            gap: 56,
            alignItems: "center",
          }}
        >
          {/* Left — copy */}
          <div>
            {/* Social proof row */}
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 32 }}>
              <div style={{ display: "flex" }}>
                {TRAINERS.slice(0, 3).map((t, i) => (
                  <span
                    key={t.code}
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 999,
                      background: i === 0 ? "#F2C94C" : i === 1 ? "#2F80ED" : "#56CCF2",
                      border: `2.5px solid ${C.white}`,
                      marginLeft: i === 0 ? 0 : -10,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: C.white,
                      fontWeight: 700,
                      fontSize: 12,
                    }}
                  >
                    {t.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                  </span>
                ))}
              </div>
              <p style={{ fontSize: 13.5, color: C.ink70 }}>
                Trusted by <b style={{ color: C.ink }}>{SITE.client}</b> engineering teams
              </p>
            </div>

            <h1
              style={{
                fontSize: "clamp(42px, 5.2vw, 72px)",
                fontWeight: 800,
                letterSpacing: "-0.035em",
                lineHeight: 1.02,
                color: C.ink,
                maxWidth: "14ch",
              }}
            >
              Build the next AI-native engineers of {SITE.client}.
            </h1>

            <p
              style={{
                fontSize: 16.5,
                lineHeight: 1.65,
                color: C.ink70,
                marginTop: 28,
                maxWidth: "48ch",
              }}
            >
              A six-month intensive moving your team from LLM fundamentals to shipping autonomous
              AI agents on real banking workflows — with the governance guardrails the industry
              requires.
            </p>

            <div style={{ display: "flex", gap: 14, marginTop: 40, flexWrap: "wrap" }}>
              <a
                href={SIGN_IN_HREF}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "16px 30px",
                  background: C.ink,
                  color: C.white,
                  borderRadius: 999,
                  fontSize: 14.5,
                  fontWeight: 600,
                }}
              >
                Get Started Now
              </a>
              <a
                href="#structure"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "16px 30px",
                  background: C.white,
                  color: C.ink,
                  border: `1.5px solid ${C.ink}`,
                  borderRadius: 999,
                  fontSize: 14.5,
                  fontWeight: 600,
                }}
              >
                View All Modules
              </a>
            </div>
          </div>

          {/* Right — image + floating module pills */}
          <div style={{ position: "relative", width: "100%", aspectRatio: "4 / 5" }}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: 24,
                overflow: "hidden",
                backgroundColor: C.wash,
                backgroundImage: `url("${HERO_IMAGE}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              aria-label="A learner reviewing course material on a laptop"
            />
            {/* Pill overlay — scattered module chips, one highlighted */}
            <div
              style={{
                position: "absolute",
                left: "6%",
                right: "6%",
                bottom: "6%",
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                justifyContent: "center",
              }}
            >
              {CURRICULUM.map((m, i) => {
                const highlighted = i === 1; // AINE Fundamentals → Agentic AI feel
                return (
                  <span
                    key={m.id}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "10px 18px",
                      borderRadius: 999,
                      fontSize: 13,
                      fontWeight: 600,
                      color: highlighted ? C.white : C.ink,
                      background: highlighted ? C.accent : C.white,
                      boxShadow: "0 6px 20px rgba(17, 24, 39, 0.08)",
                      border: highlighted ? `1px solid ${C.accentHov}` : `1px solid ${C.rule}`,
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: 999,
                        background: highlighted ? C.white : C.ink50,
                      }}
                    />
                    {m.short}
                  </span>
                );
              })}
            </div>
          </div>
        </section>

        {/* ───────── 01 · Programme overview — "brighter future" style ───────── */}
        <section
          id="overview"
          style={{
            background: C.wash,
            padding: "88px 56px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 0.95fr) minmax(0, 1fr)",
              gap: 56,
              alignItems: "center",
            }}
          >
            {/* Left — image + two stat tiles */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridTemplateRows: "auto auto",
                gap: 16,
              }}
            >
              {/* Image card spanning left column, two rows */}
              <div
                style={{
                  gridRow: "1 / 3",
                  borderRadius: 20,
                  background: `url("${HERO_IMAGE}") center/cover`,
                  minHeight: 440,
                  position: "relative",
                  color: C.white,
                  padding: 22,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ fontSize: 12, fontWeight: 600, textAlign: "center", display: "block", color: C.white }}>
                  Start your AI journey
                </span>
                <div
                  style={{
                    background: "linear-gradient(180deg, rgba(14,34,56,0) 0%, rgba(14,34,56,0.75) 100%)",
                    margin: "-22px",
                    marginTop: "auto",
                    padding: "60px 22px 22px",
                    borderRadius: "0 0 20px 20px",
                  }}
                >
                  <p style={{ fontSize: 14, lineHeight: 1.5, fontWeight: 600, color: C.white }}>
                    &ldquo;Six months later, our team ships AI features that pass compliance review on the first pass.&rdquo;
                  </p>
                  <p style={{ fontSize: 12, color: "rgba(255,255,255,0.75)", marginTop: 8 }}>
                    Head of Engineering, {SITE.client}
                  </p>
                </div>
              </div>

              {/* Dark navy stat */}
              <div
                style={{
                  background: C.ink,
                  color: C.white,
                  borderRadius: 20,
                  padding: 24,
                  minHeight: 212,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ fontSize: 12.5, color: "rgba(255,255,255,0.6)", textAlign: "center" }}>
                  Programme duration
                </p>
                <div style={{ textAlign: "center" }}>
                  <b style={{ fontSize: 54, fontWeight: 800, letterSpacing: "-0.03em", color: C.white, display: "block" }}>
                    6
                  </b>
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.75)" }}>months intensive</span>
                </div>
                <p style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", textAlign: "center" }}>
                  {SITE.cadence}
                </p>
              </div>

              {/* Accent stat — soft blue tint, royal-blue numerals */}
              <div
                style={{
                  background: C.accentSoft,
                  color: C.ink,
                  borderRadius: 20,
                  padding: 24,
                  minHeight: 212,
                  border: `1px solid rgba(37, 99, 235, 0.18)`,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <b style={{ fontSize: 54, fontWeight: 800, letterSpacing: "-0.03em", color: C.accent, display: "block" }}>
                    {totalSessions}
                  </b>
                  <span style={{ fontSize: 13, color: C.ink70, fontWeight: 600 }}>
                    Sessions across {CURRICULUM.length} modules
                  </span>
                </div>
                <span style={{ fontSize: 12, fontWeight: 600, color: C.accent }}>
                  {confirmedMonths} months with syllabus confirmed →
                </span>
              </div>
            </div>

            {/* Right — eyebrow + headline + body */}
            <div>
              <p style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, fontWeight: 600, color: C.ink50 }}>
                <span style={{ width: 8, height: 8, borderRadius: 999, background: C.accent, display: "inline-block" }} />
                Next-level engineering programme
              </p>
              <h2
                style={{
                  fontSize: "clamp(32px, 3.6vw, 48px)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.08,
                  color: C.ink,
                  marginTop: 20,
                  maxWidth: "16ch",
                }}
              >
                Together for a brighter engineering future.
              </h2>
              <p
                style={{
                  fontSize: 15.5,
                  lineHeight: 1.7,
                  color: C.ink70,
                  marginTop: 22,
                  maxWidth: "48ch",
                }}
              >
                Every session is grounded in {SITE.client}&apos;s own document types, data and
                compliance context. You leave each month with something you can deploy, not just
                something you can explain.
              </p>

              <div
                style={{
                  marginTop: 32,
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: 24,
                }}
              >
                {TRAINERS.slice(0, 3).map((t) => (
                  <div key={t.code} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <span
                      aria-hidden="true"
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: 999,
                        background: C.accent,
                        color: C.white,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 800,
                        fontSize: 13,
                      }}
                    >
                      {t.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                    </span>
                    <div style={{ lineHeight: 1.3 }}>
                      <p style={{ fontSize: 13.5, fontWeight: 700, color: C.ink }}>{t.name}</p>
                      <p style={{ fontSize: 12, color: C.ink50 }}>{t.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ───────── 02 · Course structure ───────── */}
        <section id="structure" style={{ padding: "96px 56px", scrollMarginTop: 24 }}>
          <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", gap: 32, marginBottom: 48 }}>
            <div>
              <p style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, fontWeight: 600, color: C.ink50 }}>
                <span style={{ width: 8, height: 8, borderRadius: 999, background: C.accent, display: "inline-block" }} />
                Six-month curriculum
              </p>
              <h2
                style={{
                  fontSize: "clamp(32px, 3.6vw, 48px)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.08,
                  color: C.ink,
                  marginTop: 18,
                  maxWidth: "20ch",
                }}
              >
                A path from LLM fundamentals to shipping AI-native systems.
              </h2>
            </div>
            <p style={{ fontSize: 13.5, color: C.ink50, maxWidth: "32ch" }}>
              Each month builds on the last. Months 1–3 are confirmed; 4–6 ship with each cohort&apos;s
              industry context.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 20,
            }}
          >
            {CURRICULUM.map((m) => {
              const isPending = m.status === "pending";
              const written = m.sessions.filter((s) => s.title).length;

              return (
                <div
                  key={m.id}
                  style={{
                    background: C.white,
                    border: `1px solid ${C.rule}`,
                    borderRadius: 20,
                    padding: "28px 28px 24px",
                    opacity: isPending ? 0.65 : 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: 18,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        padding: "6px 14px",
                        borderRadius: 999,
                        background: isPending ? C.wash : C.accentSoft,
                        border: isPending ? `1px solid ${C.rule}` : `1px solid rgba(37, 99, 235, 0.18)`,
                        fontSize: 11.5,
                        fontWeight: 700,
                        letterSpacing: "0.04em",
                        color: isPending ? C.ink50 : C.accent,
                      }}
                    >
                      {m.code} · M{m.month}
                    </span>
                    <span style={{ fontSize: 11.5, fontWeight: 600, color: C.ink50 }}>
                      {isPending ? "Syllabus pending" : `${written}/${m.sessions.length} sessions`}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: 20,
                      fontWeight: 800,
                      letterSpacing: "-0.02em",
                      lineHeight: 1.22,
                      color: C.ink,
                    }}
                  >
                    {m.title}
                  </h3>

                  <p style={{ fontSize: 13.5, lineHeight: 1.65, color: C.ink70 }}>
                    {m.blurb}
                  </p>

                  {!isPending && (
                    <ul style={{ display: "flex", flexDirection: "column", gap: 6, borderTop: `1px solid ${C.rule}`, paddingTop: 14 }}>
                      {m.sessions.map((s) => (
                        <li
                          key={s.code}
                          style={{
                            display: "flex",
                            gap: 10,
                            fontSize: 12.5,
                            lineHeight: 1.5,
                            color: s.title ? C.ink70 : C.ink30,
                          }}
                        >
                          <span style={{ fontWeight: 700, color: C.ink50, flexShrink: 0, width: 24 }}>
                            {s.index}
                          </span>
                          <span>{s.title ?? "TBD"}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {m.lead && (
                    <p style={{ fontSize: 11.5, color: C.ink50, marginTop: "auto", paddingTop: 10 }}>
                      Led by <b style={{ color: C.ink }}>{m.lead}</b> · {m.leadRole}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ───────── 03 · Highlights (outcomes) ───────── */}
        <section
          id="highlights"
          style={{ background: C.wash, padding: "96px 56px" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
              gap: 72,
              alignItems: "start",
            }}
          >
            <div>
              <p style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, fontWeight: 600, color: C.ink50 }}>
                <span style={{ width: 8, height: 8, borderRadius: 999, background: C.accent, display: "inline-block" }} />
                Programme outcomes
              </p>
              <h2
                style={{
                  fontSize: "clamp(32px, 3.6vw, 48px)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.08,
                  color: C.ink,
                  marginTop: 20,
                  maxWidth: "16ch",
                }}
              >
                What you will be able to do.
              </h2>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: C.ink70,
                  marginTop: 22,
                  maxWidth: "42ch",
                }}
              >
                By the end of the programme, participants build, evaluate and govern AI systems in a
                regulated banking context — not just describe how they work.
              </p>

              <div
                style={{
                  marginTop: 36,
                  background: C.ink,
                  color: C.white,
                  padding: 28,
                  borderRadius: 20,
                  maxWidth: 420,
                }}
              >
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>Delivery format</p>
                <p style={{ fontSize: 20, fontWeight: 800, marginTop: 8, letterSpacing: "-0.01em" }}>
                  {SITE.mode}
                </p>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", marginTop: 6 }}>
                  {SITE.cadence} · {SITE.cohort}
                </p>
              </div>
            </div>

            <ol style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {OUTCOMES.map((outcome, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    gap: 20,
                    padding: "22px 0",
                    borderBottom: i < OUTCOMES.length - 1 ? `1px solid ${C.rule}` : "none",
                    fontSize: 15.5,
                    lineHeight: 1.55,
                    color: C.ink,
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      width: 42,
                      height: 42,
                      borderRadius: 999,
                      background: i % 2 === 0 ? C.accent : C.white,
                      border: i % 2 === 0 ? "none" : `1.5px solid ${C.ink}`,
                      color: i % 2 === 0 ? C.white : C.ink,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 800,
                      fontSize: 14,
                    }}
                  >
                    0{i + 1}
                  </span>
                  <span style={{ paddingTop: 10, fontWeight: 500 }}>{outcome}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ───────── 04 · Fees ───────── */}
        <section id="fees" style={{ padding: "96px 56px" }}>
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 56px" }}>
            <p style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 13, fontWeight: 600, color: C.ink50 }}>
              <span style={{ width: 8, height: 8, borderRadius: 999, background: C.accent, display: "inline-block" }} />
              Fees &amp; payment
            </p>
            <h2
              style={{
                fontSize: "clamp(32px, 3.6vw, 48px)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.08,
                color: C.ink,
                marginTop: 18,
              }}
            >
              Transparent pricing. Two ways in.
            </h2>
            <p style={{ fontSize: 15, color: C.ink70, marginTop: 16 }}>
              All fees in Indonesian Rupiah, exclude VAT. Reach out to HR or the programme team to
              enrol — invitation-only, max 24 participants per cohort.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 20,
              maxWidth: 920,
              margin: "0 auto 40px",
            }}
          >
            {FEES.map((f) => {
              const isLime = f.tone === "lime";
              return (
                <div
                  key={f.tag}
                  style={{
                    padding: 36,
                    borderRadius: 24,
                    background: isLime ? C.ink : C.white,
                    color: isLime ? C.white : C.ink,
                    border: isLime ? "none" : `1px solid ${C.rule}`,
                    display: "flex",
                    flexDirection: "column",
                    gap: 20,
                  }}
                >
                  <span
                    style={{
                      alignSelf: "flex-start",
                      padding: "6px 14px",
                      borderRadius: 999,
                      fontSize: 11.5,
                      fontWeight: 700,
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      background: isLime ? C.accent : C.wash,
                      color: isLime ? C.white : C.ink,
                    }}
                  >
                    {f.tag}
                  </span>
                  <div>
                    <b
                      style={{
                        display: "block",
                        fontSize: 40,
                        fontWeight: 800,
                        letterSpacing: "-0.03em",
                        color: isLime ? C.accent : C.ink,
                      }}
                    >
                      {f.price}
                    </b>
                    <p style={{ fontSize: 13, color: isLime ? "rgba(255,255,255,0.7)" : C.ink50, marginTop: 6 }}>
                      {f.note}
                    </p>
                  </div>
                  <ul
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                      borderTop: isLime ? "1px solid rgba(255,255,255,0.12)" : `1px solid ${C.rule}`,
                      paddingTop: 20,
                    }}
                  >
                    {f.perks.map((p) => (
                      <li
                        key={p}
                        style={{
                          display: "flex",
                          gap: 10,
                          fontSize: 14,
                          color: isLime ? "rgba(255,255,255,0.85)" : C.ink70,
                        }}
                      >
                        <span style={{ color: C.accent, fontWeight: 800 }}>✓</span> {p}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={SIGN_IN_HREF}
                    style={{
                      display: "inline-flex",
                      alignSelf: "flex-start",
                      padding: "13px 24px",
                      borderRadius: 999,
                      fontSize: 14,
                      fontWeight: 600,
                      marginTop: 6,
                      background: isLime ? C.accent : C.ink,
                      color: C.white,
                      border: "none",
                    }}
                  >
                    {isLime ? "Choose Standard" : "Choose Early"} →
                  </a>
                </div>
              );
            })}
          </div>

          {/* Payment options row */}
          <div
            style={{
              maxWidth: 920,
              margin: "0 auto",
              background: C.wash,
              borderRadius: 20,
              padding: 32,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 24,
            }}
          >
            {PAYMENT_OPTS.map((opt) => (
              <div key={opt.label}>
                <p style={{ fontSize: 14, fontWeight: 700, color: C.ink }}>{opt.label}</p>
                <p style={{ fontSize: 13, lineHeight: 1.6, color: C.ink70, marginTop: 6 }}>{opt.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ───────── Bottom CTA ───────── */}
        <section
          style={{
            padding: "72px 56px 96px",
            background: C.ink,
            color: C.white,
          }}
        >
          <div
            style={{
              maxWidth: 920,
              margin: "0 auto",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 32,
            }}
          >
            <div>
              <p style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.5)" }}>
                <span style={{ width: 8, height: 8, borderRadius: 999, background: C.accent, display: "inline-block" }} />
                Ready when you are
              </p>
              <h2
                style={{
                  fontSize: "clamp(28px, 2.8vw, 40px)",
                  fontWeight: 800,
                  letterSpacing: "-0.025em",
                  lineHeight: 1.1,
                  marginTop: 16,
                  color: C.white,
                  maxWidth: "20ch",
                }}
              >
                Join {SITE.cohort} — invitation open to {SITE.client} engineers.
              </h2>
            </div>
            <a
              href={SIGN_IN_HREF}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "18px 32px",
                background: C.accent,
                color: C.white,
                borderRadius: 999,
                fontSize: 15,
                fontWeight: 700,
              }}
            >
              Request access →
            </a>
          </div>
        </section>

        {/* ───────── Footer ───────── */}
        <footer
          style={{
            padding: "32px 56px",
            background: C.white,
            borderTop: `1px solid ${C.rule}`,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 16,
            fontSize: 12.5,
            color: C.ink50,
          }}
        >
          <p>
            © {SITE.short} · {SITE.client}
          </p>
          <p>Shannon Dynamics · Mockup landing — artpinkkan.github.io/microsite</p>
        </footer>
      </div>
    </div>
  );
}
