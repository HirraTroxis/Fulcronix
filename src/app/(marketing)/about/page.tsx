import type { Metadata } from "next";
import { SectionContainer } from "@/components/home/section-container";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <section className="bg-ink-900 flex flex-1 flex-col py-24">
      <SectionContainer className="max-w-3xl">
        <h1 className="font-serif text-4xl text-white sm:text-5xl">
          About {siteConfig.name}
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-400">
          {siteConfig.description} We pair engineering depth with design and
          growth expertise, so every engagement runs on one accountable team
          rather than a chain of handoffs.
        </p>
      </SectionContainer>
    </section>
  );
}
