/** Programme-level facts. Everything the chrome needs and nothing else. */

export const SITE = {
  client: "Danamon",
  programme: "AI Native Engineering",
  short: "AINE Academy",
  cohort: "Cohort 01 · 2026",
  cadence: "2 hours per week",
  mode: "Hybrid — online and onsite",
  /** Until the real asset arrives the sidebar renders a text lockup. */
  logo: null as string | null,
};

/** Stand-in for the signed-in participant. Replace when auth exists. */
export const VIEWER = {
  name: "Wendy Sidharta",
  team: "Agile Transformation",
  initials: "WS",
};

export interface Trainer {
  code: string;
  name: string;
  role: string;
}

export const TRAINERS: Trainer[] = [
  { code: "T.01", name: "Risman Adnan", role: "CTO, ParagonCorp" },
  { code: "T.02", name: "Edwin Simjaya", role: "AI Head, Kalbe CDT" },
  { code: "T.03", name: "Russel Otniel", role: "Software, Kalbe CDT" },
  { code: "T.04", name: "Tamaria Artpinkan", role: "Product, Kalbe CDT" },
  { code: "T.05", name: "Soma Wiraga", role: "UI/UX, Samsung" },
  { code: "T.06", name: "Junaidillah Fadlil", role: "AI, Samsung" },
];
