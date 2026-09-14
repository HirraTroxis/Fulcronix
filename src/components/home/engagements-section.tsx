import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionContainer } from "@/components/home/section-container";
import { PlaceholderMedia } from "@/components/ui/placeholder-media";

const ENGAGEMENTS = [
  {
    tag: "Retail & Technology",
    result: "40% faster support response, 3x support team productivity",
    progress: 70,
  },
  {
    tag: "Financial Services",
    result: "40% faster support response, 3x support team productivity",
    progress: 40,
  },
] as const;

export function EngagementsSection() {
  return (
    <section id="engagements" className="bg-ink-950 py-24">
      <SectionContainer>
        <div className="mb-12 flex items-center justify-between">
          <h2 className="font-serif text-4xl text-white sm:text-5xl">
            Selected Engagements
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          {ENGAGEMENTS.map((engagement, index) => (
            <article
              key={engagement.result + index}
              className={index === 0 ? "lg:col-span-3" : "lg:col-span-2"}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <PlaceholderMedia
                  label={engagement.tag}
                  className="aspect-4/3 w-full rounded-none"
                />
                <div className="from-ink-950 via-ink-950/80 absolute inset-x-0 bottom-0 bg-gradient-to-t to-transparent p-6">
                  <p className="text-brand text-sm font-medium">
                    {engagement.tag}
                  </p>
                  <p className="mt-1 max-w-sm text-lg font-medium text-white">
                    {engagement.result}
                  </p>
                  <Link
                    href="/#engagements"
                    className="hover:text-brand mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-white"
                  >
                    Read the case study
                    <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </div>
              </div>
              <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="bg-brand h-full rounded-full"
                  style={{ width: `${engagement.progress}%` }}
                />
              </div>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
