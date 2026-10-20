/**
 * Course catalogue for the microsite.
 *
 * Each entry is one static page under /{slug}/. The shape is the microsite's
 * own view of a course — mapped by hand from the LMS's mockData.ts (courses +
 * courseModules). AINE pulls its deeper curriculum from content/curriculum.ts
 * instead of courseModules because the AINE programme is month-structured and
 * does not fit the activity-level shape the other courses use.
 */

import { CURRICULUM } from "./curriculum";

export interface Activity {
  index: string;   // "1.1", "2.3"
  title: string;
  meta?: string;   // "12 min · Video", "Open · Discussion"
}

export interface Module {
  code: string;    // "M1", "M.03"
  title: string;
  blurb?: string;
  activities: Activity[];
}

export interface MicrositeCourse {
  slug: string;
  code: string;
  title: string;
  description: string;
  instructor: string;
  semester: string;
  theme: { accent: string; client: string; programme: string };
  modules: Module[];
  /** AINE ships the fee + outcome blocks; others don't. */
  showFees?: boolean;
}

/* ── AINE (Danamon) — month-shaped curriculum ────────────────────────── */
const AINE: MicrositeCourse = {
  slug: "aine-danamon",
  code: "AINE",
  title: "AI Native Engineering",
  description:
    "Six-month intensive programme for Bank Danamon engineers: LLM fundamentals, agentic AI applications, and banking use cases with governance guardrails.",
  instructor: "Risman Adnan",
  semester: "Cohort 01 · 2026",
  theme: { accent: "#2563EB", client: "Bank Danamon", programme: "AI Native Engineering" },
  showFees: true,
  modules: CURRICULUM.map((m) => ({
    code: `M${m.month}`,
    title: m.title,
    blurb: m.blurb,
    activities: m.sessions.map((s) => ({
      index: s.index,
      title: s.title ?? "Session TBD",
    })),
  })),
};

/* ── University-side courses (shape adapted from LMS courseModules) ──── */

const if101: MicrositeCourse = {
  slug: "if101-algoritma",
  code: "IF101",
  title: "Algoritma & Pemrograman",
  description:
    "Dasar-dasar algoritma dan pemrograman menggunakan Python. Mulai dari pengenalan algoritma, struktur kontrol, hingga fungsi dan modularitas.",
  instructor: "Dr. Sari Dewi",
  semester: "Ganjil 2024/2025",
  theme: { accent: "#2563EB", client: "Universitas Contoh", programme: "S1 Informatika" },
  modules: [
    {
      code: "M1",
      title: "Pengenalan Pemrograman",
      activities: [
        { index: "1.1", title: "Video: Apa itu Algoritma?", meta: "12 min · Video" },
        { index: "1.2", title: "Materi: Dasar Python", meta: "20 min · Reading" },
        { index: "1.3", title: "Prompts: Explore Python fundamentals", meta: "20 min · Prompts" },
        { index: "1.4", title: "Kuis: Dasar Pemrograman", meta: "30 min · Quiz" },
        { index: "1.5", title: "UTS: Algoritma & Pemrograman", meta: "120 min · Live Exam" },
      ],
    },
    {
      code: "M2",
      title: "Struktur Kontrol",
      activities: [
        { index: "2.1", title: "Video: If-Else & Loops", meta: "18 min · Video" },
        { index: "2.2", title: "Tugas: Implementasi Loop", meta: "2 hr · Assignment" },
        { index: "2.3", title: "Diskusi: Best Practices", meta: "Open · Discussion" },
        { index: "2.4", title: "Live: Tanya Jawab Struktur Kontrol", meta: "90 min · Live" },
      ],
    },
    {
      code: "M3",
      title: "Fungsi & Modularitas",
      blurb: "Draft — scheduled for Week 5.",
      activities: [
        { index: "3.1", title: "Video: Functions in Python", meta: "22 min · Video" },
        { index: "3.2", title: "Kuis: Fungsi Rekursif", meta: "45 min · Quiz" },
      ],
    },
  ],
};

const if201: MicrositeCourse = {
  slug: "if201-basis-data",
  code: "IF201",
  title: "Basis Data",
  description: "Konsep basis data relasional dan SQL — model data, ERD, kueri dasar hingga lanjut.",
  instructor: "Dr. Sari Dewi",
  semester: "Ganjil 2024/2025",
  theme: { accent: "#2563EB", client: "Universitas Contoh", programme: "S1 Informatika" },
  modules: [
    {
      code: "M1",
      title: "Model Data & ERD",
      activities: [
        { index: "1.1", title: "Video: Konsep Basis Data Relasional", meta: "15 min · Video" },
        { index: "1.2", title: "Materi: Entity Relationship Diagram", meta: "25 min · Reading" },
      ],
    },
    {
      code: "M2",
      title: "SQL Dasar",
      activities: [
        { index: "2.1", title: "Video: SELECT, WHERE, JOIN", meta: "22 min · Video" },
        { index: "2.2", title: "Kuis: SQL Dasar", meta: "30 min · Quiz" },
        { index: "2.3", title: "Tugas: Query Perpustakaan", meta: "3 hr · Assignment" },
      ],
    },
  ],
};

const if301: MicrositeCourse = {
  slug: "if301-jaringan",
  code: "IF301",
  title: "Jaringan Komputer",
  description: "Protokol jaringan, model OSI dan TCP/IP, pengalamatan IP, dan praktik lab jaringan.",
  instructor: "Dr. Sari Dewi",
  semester: "Ganjil 2024/2025",
  theme: { accent: "#2563EB", client: "Universitas Contoh", programme: "S1 Informatika" },
  modules: [
    {
      code: "M1",
      title: "Model OSI & TCP/IP",
      activities: [
        { index: "1.1", title: "Video: Tujuh Lapis OSI", meta: "18 min · Video" },
        { index: "1.2", title: "Materi: Pengalamatan IP dan Subnetting", meta: "30 min · Reading" },
        { index: "1.3", title: "Tugas: Lab Packet Tracer", meta: "2 hr · Assignment" },
      ],
    },
  ],
};

const if401: MicrositeCourse = {
  slug: "if401-ai",
  code: "IF401",
  title: "Kecerdasan Buatan",
  description: "Pengantar machine learning, neural networks, dan aplikasi AI dalam konteks Indonesia.",
  instructor: "Dr. Sari Dewi",
  semester: "Ganjil 2024/2025",
  theme: { accent: "#2563EB", client: "Universitas Contoh", programme: "S1 Informatika" },
  modules: [
    {
      code: "M1",
      title: "Pengantar Kecerdasan Buatan",
      activities: [
        { index: "1.1", title: "Video: Sejarah dan Ruang Lingkup AI", meta: "20 min · Video" },
        { index: "1.2", title: "Diskusi: Etika AI di Indonesia", meta: "Open · Discussion" },
      ],
    },
    {
      code: "M2",
      title: "Machine Learning Dasar",
      activities: [
        { index: "2.1", title: "Materi: Supervised vs Unsupervised", meta: "25 min · Reading" },
        { index: "2.2", title: "Kuis: Regresi dan Klasifikasi", meta: "25 min · Quiz" },
      ],
    },
  ],
};

const bniCloud: MicrositeCourse = {
  slug: "bni-cloud",
  code: "BNI-CF",
  title: "Cloud Foundations — BNI",
  description:
    "Introductory cloud architecture programme for BNI infrastructure engineers. Compute, storage, networking, and security fundamentals.",
  instructor: "Edwin Simjaya",
  semester: "Cohort 01 · 2026",
  theme: { accent: "#2563EB", client: "Bank BNI", programme: "Cloud Foundations" },
  modules: [
    {
      code: "M1",
      title: "Cloud fundamentals",
      blurb: "Syllabus pending — detailed outline publishes with cohort kickoff.",
      activities: [],
    },
  ],
};

export const COURSES: MicrositeCourse[] = [AINE, if101, if201, if301, if401, bniCloud];

export const DEFAULT_COURSE = AINE;

export function findCourse(slug: string): MicrositeCourse | undefined {
  return COURSES.find((c) => c.slug === slug);
}
