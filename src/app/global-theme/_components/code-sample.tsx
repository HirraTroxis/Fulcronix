export function CodeSample({ code }: { code: string }) {
  return (
    <pre className="bg-ink-950 mt-4 overflow-x-auto rounded-lg border border-white/10 p-4 text-sm text-slate-300">
      <code>{code.trim()}</code>
    </pre>
  );
}
