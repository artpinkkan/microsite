import type { Metadata } from "next";

import { SITE } from "@/content/site";

import "./globals.css";

export const metadata: Metadata = {
  title: `${SITE.programme} — ${SITE.short}`,
  description: `${SITE.programme} at ${SITE.client}. A six-month intensive for engineers moving from LLM fundamentals to shipping autonomous AI agents on banking workflows.`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
