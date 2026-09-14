import type { Metadata } from "next";
import { Button, ButtonLink } from "@/components/ui/button";
import { Dropdown } from "@/components/ui/dropdown";
import { SectionContainer } from "@/components/home/section-container";
import { ToolkitSection } from "./_components/toolkit-section";
import { CodeSample } from "./_components/code-sample";
import { ColorSwatch } from "./_components/color-swatch";

export const metadata: Metadata = {
  title: "Global Theme",
  robots: { index: false, follow: false },
};

const COLORS = [
  { name: "brand", hex: "#2be8b6", bgClassName: "bg-brand" },
  { name: "brand-dark", hex: "#188266", bgClassName: "bg-brand-dark" },
  { name: "ink-950", hex: "#0a0f15", bgClassName: "bg-ink-950" },
  { name: "ink-900", hex: "#171f24", bgClassName: "bg-ink-900" },
  { name: "ink-800", hex: "#1e2a31", bgClassName: "bg-ink-800" },
  { name: "ink-700", hex: "#222e35", bgClassName: "bg-ink-700" },
  { name: "ink-600", hex: "#323944", bgClassName: "bg-ink-600" },
  { name: "ink-500", hex: "#36454e", bgClassName: "bg-ink-500" },
  { name: "slate-400", hex: "#a5b0c3", bgClassName: "bg-slate-400" },
  { name: "slate-500", hex: "#657083", bgClassName: "bg-slate-500" },
] as const;

const BUTTON_VARIANTS = [
  "brand",
  "primary",
  "translucent",
  "outline",
  "ghost",
] as const;

const DROPDOWN_ITEMS = [
  { label: "Intelligence", href: "/#capabilities" },
  { label: "Build & Transform", href: "/#capabilities" },
  { label: "Design Studio", href: "/#capabilities" },
] as const;

export default function GlobalThemePage() {
  return (
    <div className="bg-ink-900 min-h-full py-16">
      <SectionContainer className="max-w-4xl">
        <p className="text-brand text-sm font-medium">
          Internal reference — not a site page
        </p>
        <h1 className="mt-2 font-serif text-4xl text-white">Global Theme</h1>
        <p className="mt-3 max-w-2xl text-slate-400">
          Shared UI primitives, colors, and typography used across the app.
          Check here before styling something one-off — most needs are already
          covered by a variant below.
        </p>

        <ToolkitSection
          title="Colors"
          description="Defined as Tailwind theme tokens in globals.css. Use the utility classes (bg-brand, text-slate-400, ...) rather than hardcoding hex values."
        >
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {COLORS.map((color) => (
              <ColorSwatch key={color.name} {...color} />
            ))}
          </div>
        </ToolkitSection>

        <ToolkitSection
          title="Typography"
          description="font-serif (STIX Two Text) for headings, font-sans (Geist) for body text, font-mono (Geist Mono) for code."
        >
          <div className="flex flex-col gap-4">
            <p className="font-serif text-4xl text-white">
              Pivot with Precision
            </p>
            <p className="font-serif text-2xl text-white">The Pivot Process</p>
            <p className="text-lg text-slate-400">
              Body text uses the default sans font — no class needed.
            </p>
            <p className="font-mono text-sm text-slate-400">
              const cn = (...) =&gt; ...
            </p>
          </div>
        </ToolkitSection>

        <ToolkitSection
          title="Buttons"
          description="Button (renders <button>) and ButtonLink (renders next/link) share the same variants, sizes, and withIcon prop."
        >
          <div className="flex flex-col gap-6">
            {BUTTON_VARIANTS.map((variant) => (
              <div key={variant} className="flex flex-wrap items-center gap-3">
                <span className="w-28 shrink-0 font-mono text-xs text-slate-500">
                  {variant}
                </span>
                <Button variant={variant}>Button</Button>
                <Button variant={variant} size="sm">
                  Small
                </Button>
                <Button variant={variant} withIcon>
                  With icon
                </Button>
                <Button variant={variant} disabled>
                  Disabled
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="w-28 shrink-0 font-mono text-xs text-slate-500">
              ButtonLink
            </span>
            <ButtonLink href="/about" variant="outline" withIcon>
              Links to /about
            </ButtonLink>
          </div>

          <CodeSample
            code={`
import { Button, ButtonLink } from "@/components/ui/button";

<Button variant="brand" size="sm" withIcon>
  Subscribe
</Button>

<ButtonLink href="/about" variant="outline">
  Learn more
</ButtonLink>
`}
          />
        </ToolkitSection>

        <ToolkitSection
          title="Dropdown"
          description={`"floating" opens an absolutely-positioned panel (desktop nav). "inline" expands in place (mobile nav, sidebars). Built on <details>/<summary> — accessible without any JS.`}
        >
          <div className="flex flex-wrap items-start gap-12">
            <div>
              <p className="mb-3 font-mono text-xs text-slate-500">
                variant=&quot;floating&quot;
              </p>
              <Dropdown label="What We Do" items={DROPDOWN_ITEMS} />
            </div>
            <div className="w-64">
              <p className="mb-3 font-mono text-xs text-slate-500">
                variant=&quot;inline&quot;
              </p>
              <Dropdown
                label="What We Do"
                items={DROPDOWN_ITEMS}
                variant="inline"
              />
            </div>
          </div>

          <CodeSample
            code={`
import { Dropdown } from "@/components/ui/dropdown";

<Dropdown
  label="What We Do"
  items={[{ label: "Intelligence", href: "/#capabilities" }]}
  variant="floating" // or "inline"
/>
`}
          />
        </ToolkitSection>
      </SectionContainer>
    </div>
  );
}
