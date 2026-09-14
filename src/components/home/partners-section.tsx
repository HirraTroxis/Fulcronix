import { SectionContainer } from "@/components/home/section-container";

const PARTNERS = ["Bank of America", "AWS", "Microsoft", "Charter"] as const;

export function PartnersSection() {
  return (
    <section className="bg-ink-950 py-16">
      <SectionContainer className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="font-serif text-3xl text-white sm:text-4xl">
          Partners in Delivery
        </h2>
        <ul className="flex flex-wrap items-center gap-x-10 gap-y-4">
          {PARTNERS.map((partner) => (
            <li
              key={partner}
              className="text-lg font-medium text-slate-500 grayscale transition hover:text-slate-300 hover:grayscale-0"
            >
              {partner}
            </li>
          ))}
        </ul>
      </SectionContainer>
    </section>
  );
}
