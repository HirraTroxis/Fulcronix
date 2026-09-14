export default function Loading() {
  return (
    <div className="bg-ink-900 flex flex-1 items-center justify-center py-24">
      <div
        role="status"
        aria-label="Loading"
        className="border-t-brand size-8 animate-spin rounded-full border-2 border-white/20"
      />
    </div>
  );
}
