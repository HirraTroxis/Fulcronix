import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

/**
 * Full-width wrapper for the marketing home page's sections. Wider than
 * `components/ui/container`, which is tuned for narrow content pages.
 */
export function SectionContainer({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16",
        className,
      )}
      {...props}
    />
  );
}
