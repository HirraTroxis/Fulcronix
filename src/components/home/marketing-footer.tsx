import { siteConfig } from "@/config/site";
import { SectionContainer } from "@/components/home/section-container";
import { ButtonLink } from "@/components/ui/button";
import { NewsletterForm } from "@/components/home/newsletter-form";

const CONTACT_COLUMNS = [
  {
    title: "Address",
    lines: ["123 Commerce Drive, Suite 200", "Newark, DE 19713"],
  },
  {
    title: "Careers",
    lines: ["We're always hiring.", "careers@fulcronix.com"],
  },
  {
    title: "Phone",
    lines: ["+1 (302) 555-0173"],
  },
] as const;

export function MarketingFooter() {
  return (
    <footer id="contact" className="bg-ink-950 relative overflow-hidden pt-20">
      <SectionContainer>
        <div className="flex flex-col gap-10 border-b border-white/10 pb-16 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/#contact" variant="primary" withIcon>
              Request a Proposal
            </ButtonLink>
            <ButtonLink href="/#contact" variant="translucent" withIcon>
              Hire Top Talent
            </ButtonLink>
          </div>

          <NewsletterForm />
        </div>

        <div className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-3">
          {CONTACT_COLUMNS.map((column) => (
            <div key={column.title}>
              <p className="text-brand text-sm font-medium">{column.title}</p>
              <div className="mt-2 flex flex-col gap-1 text-slate-400">
                {column.lines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      <p
        aria-hidden
        className="text-brand/10 pointer-events-none mt-4 text-center font-serif text-[20vw] leading-none font-normal select-none sm:text-[14vw]"
      >
        {siteConfig.name.toLowerCase()}
      </p>

      <SectionContainer className="flex flex-col items-center justify-between gap-2 border-t border-white/10 py-6 text-sm text-slate-500 sm:flex-row">
        <p>
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </p>
      </SectionContainer>
    </footer>
  );
}
