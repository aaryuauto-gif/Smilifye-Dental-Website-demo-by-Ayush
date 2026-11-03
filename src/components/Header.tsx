"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import ArrowButton from "./ArrowButton";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#story" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
  { label: "Pages", href: "#faq" },
];

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 bg-primary-900 text-white px-5 transition-shadow duration-300 ${
        scrolled ? "shadow-[0_2px_20px_rgba(0,0,0,0.15)]" : ""
      }`}
    >
      <div
        className={`flex items-center justify-between max-w-[1160px] mx-auto transition-all duration-300 ${
          scrolled ? "h-[60px]" : "h-[72px]"
        }`}
      >
        <a href="#" className="flex items-center gap-2.5">
          <Image
            src="/images/699c12dafab10922f849f4d6_smilifye-logo-dark.svg"
            alt="Smilifye"
            width={120}
            height={28}
            className="h-7 w-auto"
            priority
          />
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm text-white/70 rounded-full transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ArrowButton variant="light" href="#cta" className="!py-2.5 !px-5 !text-sm">
            Get Appointment
          </ArrowButton>
        </div>

        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 stroke-current fill-none"
            strokeWidth={1.5}
            strokeLinecap="round"
          >
            {mobileOpen ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden pb-4 border-t border-white/10">
          <nav className="flex flex-col gap-1 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-3 text-sm text-white/70 hover:text-white transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="px-4 pt-4">
            <ArrowButton variant="light" href="#cta" className="!py-2.5 !px-5 !text-sm w-full justify-center">
              Get Appointment
            </ArrowButton>
          </div>
        </div>
      )}
    </header>
  );
}
