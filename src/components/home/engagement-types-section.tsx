import { SectionContainer } from "@/components/home/section-container";
import { ButtonLink } from "@/components/ui/button";
import { PlaceholderMedia } from "@/components/ui/placeholder-media";

const ENGAGEMENT_TYPES = [
  { index: "01", name: "Offshore Delivery" },
  { index: "02", name: "Staff Augmentation" },
  { index: "03", name: "Dedicated Teams" },
  { index: "04", name: "Managed Delivery" },
] as const;

export function EngagementTypesSection() {
  return (
    <section id="engagement-types" className="bg-ink-900 py-24">
      <SectionContainer>
        <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <h2 className="max-w-md font-serif text-4xl text-white sm:text-5xl">
            Engagements That Pivot with You
          </h2>
          <ButtonLink href="/#contact" variant="translucent" size="sm" withIcon>
            Learn More
          </ButtonLink>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {ENGAGEMENT_TYPES.map((type) => (
            <div key={type.index} className="flex flex-col gap-4">
              <span className="text-brand font-serif text-lg">
                {type.index}
              </span>
              <PlaceholderMedia className="h-32 w-full" />
              <p className="text-lg font-medium text-white">{type.name}</p>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
