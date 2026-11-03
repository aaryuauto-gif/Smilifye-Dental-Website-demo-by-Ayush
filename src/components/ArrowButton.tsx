interface ArrowButtonProps {
  children: React.ReactNode;
  variant?: "dark" | "light" | "accent" | "outline" | "ghost";
  href?: string;
  className?: string;
}

function ArrowIcon() {
  return (
    <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0">
      <svg
        viewBox="0 0 24 24"
        className="w-3.5 h-3.5 stroke-white fill-none"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
      </svg>
    </span>
  );
}

const variants: Record<string, string> = {
  dark: "bg-primary-900 text-white hover:bg-primary-700",
  light: "bg-white text-primary-900 hover:bg-neutral-100",
  accent: "bg-accent text-white hover:bg-accent-dark",
  outline: "border border-border text-fg bg-surface hover:border-accent",
  ghost: "border border-white/20 text-white hover:border-white/40",
};

export default function ArrowButton({
  children,
  variant = "dark",
  href = "#",
  className = "",
}: ArrowButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-medium text-base transition-all duration-300 hover:-translate-y-0.5 ${variants[variant]} ${className}`}
    >
      {children}
      <ArrowIcon />
    </a>
  );
}
