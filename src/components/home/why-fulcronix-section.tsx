import { siteConfig } from "@/config/site";
import { SectionContainer } from "@/components/home/section-container";

const REASONS = [
  {
    index: "01",
    title: "Mutual trust",
    description:
      "We go beyond transactional client-vendor relationships and foster a culture of mutual trust where we help you achieve your goals as long-term partners.",
  },
  {
    index: "02",
    title: "Transparency at every level",
    description:
      "We provide access to the project dashboard from the outset and deliver regular progress reports to keep you updated at every development stage.",
  },
  {
    index: "03",
    title: "Commitment to excellence",
    description:
      "We are dedicated to delivering quality and value in every aspect of our work, developing robust solutions in alignment with ISO standards.",
  },
  {
    index: "04",
    title: "Reliability",
    description:
      "We strive to be a software development partner you can trust and rely on, delivering cutting-edge software solutions on time and within budget.",
  },
] as const;

export function WhyFulcronixSection() {
  return (
    <section id="why-fulcronix" className="bg-ink-900 py-24">
      <SectionContainer>
        <h2 className="mb-14 font-serif text-4xl text-white sm:text-5xl">
          Why {siteConfig.name}
        </h2>

        <div className="grid grid-cols-1 gap-x-16 gap-y-12 sm:grid-cols-2">
          {REASONS.map((reason) => (
            <div key={reason.index} className="flex gap-4">
              <span className="text-brand font-serif text-lg">
                {reason.index}
              </span>
              <div>
                <h3 className="text-xl font-medium text-white">
                  {reason.title}
                </h3>
                <p className="mt-2 max-w-sm text-slate-400">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
