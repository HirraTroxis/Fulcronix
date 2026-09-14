import type { ReactNode } from "react";
import { MarketingNavbar } from "@/components/home/marketing-navbar";
import { MarketingFooter } from "@/components/home/marketing-footer";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <MarketingNavbar />
      <main className="flex flex-1 flex-col">{children}</main>
      <MarketingFooter />
    </>
  );
}
