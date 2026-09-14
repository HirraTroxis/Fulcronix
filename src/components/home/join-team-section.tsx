import { Play } from "lucide-react";
import { SectionContainer } from "@/components/home/section-container";
import { ButtonLink } from "@/components/ui/button";

const AVATAR_POSITIONS = [
  "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
  "top-1/2 right-0 translate-x-1/2 -translate-y-1/2",
  "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
  "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2",
] as const;

export function JoinTeamSection() {
  return (
    <section className="bg-ink-900 py-24">
      <SectionContainer>
        <div className="from-ink-800 to-brand-dark/40 relative overflow-hidden rounded-3xl bg-gradient-to-br px-8 py-16 sm:px-16">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col items-start gap-6">
              <h2 className="font-serif text-4xl text-white sm:text-5xl">
                Be a Part of Our Amazing Team to Build AI-Driven Digital
                Solutions
              </h2>
              <ButtonLink href="/#contact" variant="primary" withIcon>
                Join Our Network
              </ButtonLink>
            </div>

            <div className="relative mx-auto aspect-square w-full max-w-[280px]">
              <div className="absolute inset-6 rounded-full bg-gradient-to-b from-white/20 to-transparent" />
              <button
                type="button"
                aria-label="Play team introduction video"
                className="text-ink-950 absolute top-1/2 left-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-105"
              >
                <Play
                  className="size-6 translate-x-0.5"
                  fill="currentColor"
                  aria-hidden
                />
              </button>
              {AVATAR_POSITIONS.map((position) => (
                <div
                  key={position}
                  className={`border-ink-800 bg-ink-600 absolute size-14 rounded-full border-2 ${position}`}
                />
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
