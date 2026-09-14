import type { ReactNode } from "react";

export function ToolkitSection({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-white/10 py-12 first:border-t-0 first:pt-0">
      <h2 className="text-2xl font-medium text-white">{title}</h2>
      {description && (
        <p className="mt-2 max-w-2xl text-slate-400">{description}</p>
      )}
      <div className="mt-8">{children}</div>
    </section>
  );
}
