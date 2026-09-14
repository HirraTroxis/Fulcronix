import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

const VARIANT_STYLES = {
  /** Solid brand teal — the highest-emphasis action on a page (e.g. "Subscribe"). */
  brand: "bg-brand text-ink-950 hover:bg-brand/90",
  /** Solid light pill on dark backgrounds — the site's primary CTA style. */
  primary: "bg-foreground text-background hover:opacity-90",
  /** Translucent dark pill — secondary CTA next to a primary button. */
  translucent: "bg-ink-800/80 text-white backdrop-blur hover:bg-ink-800",
  /** Bordered, transparent background. */
  outline: "border border-white/15 hover:border-white/30 hover:bg-white/5",
  /** No border or fill until hovered — lowest emphasis. */
  ghost: "text-slate-400 hover:bg-white/5 hover:text-white",
} as const;

const SIZE_STYLES = {
  md: "h-12 px-5 text-base",
  sm: "h-[42px] px-4 text-sm",
} as const;

type ButtonVariant = keyof typeof VARIANT_STYLES;
type ButtonSize = keyof typeof SIZE_STYLES;

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-colors disabled:pointer-events-none disabled:opacity-40";

type SharedProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Shows a trailing chevron, matching the site's pill-button style. */
  withIcon?: boolean;
};

type ButtonProps = ComponentPropsWithoutRef<"button"> & SharedProps;

export function Button({
  className,
  variant = "primary",
  size = "md",
  withIcon,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        baseStyles,
        VARIANT_STYLES[variant],
        SIZE_STYLES[size],
        className,
      )}
      {...props}
    >
      {children}
      {withIcon && <ChevronRight className="size-4 shrink-0" aria-hidden />}
    </button>
  );
}

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & SharedProps;

export function ButtonLink({
  className,
  variant = "primary",
  size = "md",
  withIcon,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        baseStyles,
        VARIANT_STYLES[variant],
        SIZE_STYLES[size],
        className,
      )}
      {...props}
    >
      {children}
      {withIcon && <ChevronRight className="size-4 shrink-0" aria-hidden />}
    </Link>
  );
}
