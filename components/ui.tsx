import type { ReactNode } from "react";

export function Eyebrow({ children, rule = true }: { children: ReactNode; rule?: boolean }) {
  return (
    <p className="eyebrow">
      {rule ? <span className="rule" aria-hidden="true" /> : null}
      {children}
    </p>
  );
}

export function SectionHead({
  index,
  label,
  meta,
}: {
  index?: string;
  label: string;
  meta?: ReactNode;
}) {
  return (
    <div className="section-head">
      {index ? <span className="index">{index}</span> : null}
      <span className="bar" aria-hidden="true" />
      <span className="label">{label}</span>
      {meta ? <span className="meta">{meta}</span> : null}
    </div>
  );
}
