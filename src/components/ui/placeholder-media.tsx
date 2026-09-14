import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";
import type { ComponentPropsWithoutRef } from "react";

/**
 * Stands in for real imagery/logos until final assets are supplied.
 * Swap for `next/image` once assets land — call sites won't need to change shape.
 */
export function PlaceholderMedia({
  label,
  className,
  ...props
}: ComponentPropsWithoutRef<"div"> & { label?: string }) {
  return (
    <div
      role="img"
      aria-label={label ?? "Placeholder image"}
      className={cn(
        "from-ink-600 to-ink-800 flex items-center justify-center gap-2 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br text-slate-400",
        className,
      )}
      {...props}
    >
      <ImageIcon className="size-6 shrink-0" aria-hidden />
      {label && <span className="text-sm">{label}</span>}
    </div>
  );
}
