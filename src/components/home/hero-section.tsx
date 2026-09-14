import { siteConfig } from "@/config/site";
import { SectionContainer } from "@/components/home/section-container";
import { ButtonLink } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="from-ink-500 to-ink-900 relative overflow-hidden bg-gradient-to-b">
      {/* Decorative glow */}
      <div
        aria-hidden
        className="bg-brand/20 pointer-events-none absolute -top-40 right-0 size-[700px] rounded-full blur-[160px]"
      />
      {/* Decorative grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:96px_96px] opacity-20"
      />

      <SectionContainer className="relative pt-16 pb-40">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex max-w-xl flex-col items-start gap-6">
            <h1 className="font-serif text-5xl leading-[1.05] text-white sm:text-7xl">
              Pivot with Precision
            </h1>
            <p className="max-w-sm text-lg leading-8 tracking-wide text-slate-400">
              {siteConfig.description}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <ButtonLink href="/#capabilities" variant="primary" withIcon>
                See Our Capabilities
              </ButtonLink>
              <ButtonLink href="/#engagements" variant="translucent" withIcon>
                See Case-Studies
              </ButtonLink>
            </div>
          </div>

          <aside className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl">
            <p className="text-brand text-2xl leading-snug font-medium tracking-wide">
              50% Less Talent Deployment Time for Vertex IT Systems
            </p>
            <ButtonLink
              href="/#engagements"
              variant="translucent"
              size="sm"
              className="mt-4 bg-white/10 hover:bg-white/15"
            >
              Read Case-Study
            </ButtonLink>
          </aside>
        </div>
      </SectionContainer>

      {/* Giant watermark wordmark */}
      <p
        aria-hidden
        className="pointer-events-none relative -mt-10 mb-0 text-center font-serif text-[22vw] leading-none font-normal text-transparent select-none [-webkit-text-stroke:1px_rgba(255,255,255,0.08)] sm:text-[16vw]"
      >
        {siteConfig.name.toLowerCase()}
      </p>
    </section>
  );
}
