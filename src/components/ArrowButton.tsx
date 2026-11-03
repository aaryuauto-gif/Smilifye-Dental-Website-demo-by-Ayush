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

const variants: Record<string, { className: string; color: string }> = {
  dark: { className: "bg-[#011f23] hover:bg-[#022f34]", color: "#ffffff" },
  light: { className: "bg-white hover:bg-neutral-100", color: "#011f23" },
  accent: { className: "bg-[#24a3b1] hover:bg-[#1c91a1]", color: "#ffffff" },
  outline: { className: "border border-[#d0d5d5] bg-white hover:border-[#24a3b1]", color: "#011f23" },
  ghost: { className: "border border-white/20 hover:border-white/40", color: "#ffffff" },
};

export default function ArrowButton({
  children,
  variant = "dark",
  href = "#",
  className = "",
}: ArrowButtonProps) {
  const v = variants[variant];
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-medium text-base transition-all duration-300 hover:-translate-y-0.5 ${v.className} ${className}`}
      style={{ color: v.color }}
    >
      {children}
      <ArrowIcon />
    </a>
  );
}
