"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SectionContainer } from "@/components/home/section-container";
import { ButtonLink } from "@/components/ui/button";
import { Dropdown } from "@/components/ui/dropdown";

export function MarketingNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-ink-950/70 sticky top-0 z-50 border-b border-white/5 backdrop-blur-md">
      <SectionContainer className="flex h-20 items-center justify-between">
        <Link href="/" className="font-serif text-2xl text-white">
          {siteConfig.name.toLowerCase()}
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {siteConfig.marketingNav.map((item) =>
            "items" in item ? (
              <Dropdown
                key={item.label}
                label={item.label}
                items={item.items}
              />
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm text-slate-400 hover:text-white"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink
            href="/#contact"
            variant="primary"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Let&apos;s Talk
          </ButtonLink>
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle menu"
            className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 text-white lg:hidden"
          >
            {mobileOpen ? (
              <X className="size-5" aria-hidden />
            ) : (
              <Menu className="size-5" aria-hidden />
            )}
          </button>
        </div>
      </SectionContainer>

      {mobileOpen && (
        <div
          id="mobile-nav"
          className="bg-ink-950 border-t border-white/10 px-6 py-4 lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {siteConfig.marketingNav.map((item) =>
              "items" in item ? (
                <Dropdown
                  key={item.label}
                  label={item.label}
                  items={item.items}
                  variant="inline"
                  onItemClick={() => setMobileOpen(false)}
                />
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-slate-400 hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
          <ButtonLink
            href="/#contact"
            variant="primary"
            size="sm"
            className="mt-4 w-full"
          >
            Let&apos;s Talk
          </ButtonLink>
        </div>
      )}
    </header>
  );
}
