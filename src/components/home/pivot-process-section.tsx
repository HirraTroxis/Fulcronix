const STAGES = [
  { name: "Discover", top: "4%", left: "50%" },
  { name: "Define", top: "27%", left: "89%" },
  { name: "Design", top: "73%", left: "89%" },
  { name: "Build", top: "96%", left: "50%" },
  { name: "Launch", top: "73%", left: "11%" },
  { name: "Evolve", top: "27%", left: "11%" },
] as const;

export function PivotProcessSection() {
  return (
    <section
      id="process"
      className="from-ink-800 relative overflow-hidden bg-gradient-to-br to-[#5C8197] py-28"
    >
      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-4 px-6 text-center">
        <h2 className="font-serif text-4xl text-white sm:text-5xl">
          The Pivot Process
        </h2>
        <p className="text-lg text-slate-400">
          Every engagement runs on the same framework.
        </p>
      </div>

      <div className="relative mx-auto mt-16 aspect-square w-full max-w-md">
        {/* Center piece */}
        <div
          aria-hidden
          className="absolute top-1/2 left-1/2 size-44 -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-white/20 bg-gradient-to-br from-white/15 to-white/5 shadow-2xl [clip-path:polygon(50%_6%,94%_88%,6%_88%)]"
        />

        {STAGES.map((stage) => (
          <div
            key={stage.name}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm"
            style={{ top: stage.top, left: stage.left }}
          >
            <span
              className="bg-brand size-2 shrink-0 rounded-full"
              aria-hidden
            />
            <span className="text-sm font-medium whitespace-nowrap text-white">
              {stage.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
