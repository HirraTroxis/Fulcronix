import { SectionContainer } from "@/components/home/section-container";
import { ButtonLink } from "@/components/ui/button";
import { PlaceholderMedia } from "@/components/ui/placeholder-media";

const CAPABILITIES = [
  { name: "Intelligence", href: "/#" },
  { name: "Build & Transform", href: "/#" },
  { name: "Design Studio", href: "/#" },
  { name: "Growth", href: "/#" },
] as const;

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="bg-ink-700 py-24">
      <SectionContainer>
        <h2 className="max-w-xl font-serif text-4xl text-white sm:text-5xl">
          Capabilities Behind Every Strategic Pivot
        </h2>
      </SectionContainer>

      <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
        {CAPABILITIES.map((capability) => (
          <SectionContainer key={capability.name}>
            <div className="grid grid-cols-1 items-center gap-8 py-12 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col items-start gap-4">
                <h3 className="text-3xl font-medium text-slate-400 sm:text-4xl">
                  {capability.name}
                </h3>
                <ButtonLink
                  href={capability.href}
                  variant="translucent"
                  size="sm"
                  withIcon
                >
                  Explore {capability.name}
                </ButtonLink>
              </div>
              <PlaceholderMedia
                label={`${capability.name} visual`}
                className="h-56 w-full sm:h-72"
              />
            </div>
          </SectionContainer>
        ))}
      </div>
    </section>
  );
}
