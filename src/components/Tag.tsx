export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border text-sm font-medium bg-surface">
      <span className="text-[10px] text-accent">✳</span>
      {children}
    </span>
  );
}
