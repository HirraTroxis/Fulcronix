import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export type DropdownItem = {
  label: string;
  href: string;
};

type DropdownProps = {
  label: string;
  items: readonly DropdownItem[];
  /**
   * "floating" opens an absolutely-positioned panel over the page (desktop nav).
   * "inline" expands the items in place, pushing surrounding content down
   * (mobile nav, sidebars).
   */
  variant?: "floating" | "inline";
  align?: "left" | "right";
  className?: string;
  /** Called when an item is clicked — e.g. to close a parent mobile menu. */
  onItemClick?: () => void;
};

/**
 * Accessible, JS-free dropdown built on `<details>`/`<summary>` — keyboard and
 * screen-reader support come from the browser, no client-side state needed.
 */
export function Dropdown({
  label,
  items,
  variant = "floating",
  align = "left",
  className,
  onItemClick,
}: DropdownProps) {
  return (
    <details
      className={cn("group", variant === "floating" && "relative", className)}
    >
      <summary
        className={cn(
          "flex cursor-pointer list-none items-center gap-1 rounded-full px-3 py-2 text-sm text-slate-400 hover:text-white [&::-webkit-details-marker]:hidden",
          variant === "inline" && "justify-between rounded-lg",
        )}
      >
        {label}
        <ChevronDown
          className="size-3.5 shrink-0 transition-transform group-open:rotate-180"
          aria-hidden
        />
      </summary>
      <div
        className={cn(
          variant === "floating"
            ? cn(
                "bg-ink-900 absolute top-full z-10 mt-2 min-w-56 rounded-xl border border-white/10 p-2 shadow-xl",
                align === "right" ? "right-0" : "left-0",
              )
            : "pl-3",
        )}
      >
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={onItemClick}
            className="block rounded-lg px-3 py-2 text-sm text-slate-400 hover:bg-white/5 hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </details>
  );
}
