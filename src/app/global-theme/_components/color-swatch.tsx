export function ColorSwatch({
  name,
  hex,
  bgClassName,
}: {
  name: string;
  hex: string;
  bgClassName: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className={`h-16 w-full rounded-lg border border-white/10 ${bgClassName}`}
      />
      <div>
        <p className="text-sm font-medium text-white">{name}</p>
        <p className="font-mono text-xs text-slate-500">{hex}</p>
      </div>
    </div>
  );
}
