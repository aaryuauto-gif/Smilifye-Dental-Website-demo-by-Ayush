"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import ArrowButton from "./ArrowButton";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#story" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
  {
    label: "Pages",
    href: "#",
    dropdown: [
      { label: "Home", href: "#" },
      { label: "About", href: "#story" },
      { label: "Services", href: "#services" },
      { label: "Services Details", href: "#services" },
      { label: "Doctor Details", href: "#team" },
      { label: "Contact Us", href: "#cta" },
      { label: "Blogs", href: "#blog" },
      { label: "Blog Details", href: "#blog" },
      { label: "Privacy Policy", href: "#" },
      { label: "Cookies", href: "#" },
      { label: "404", href: "#" },
      { label: "Terms & Conditions", href: "#" },
      { label: "Styleguide", href: "#" },
      { label: "Instruction", href: "#" },
    ],
  },
];

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
            src="/images/smilifye-logo-light.svg"
            alt="Smilifye"
            width={120}
            height={28}
            className="h-7 w-auto"
            priority
          />
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className="px-4 py-2 text-sm text-white/70 rounded-full transition-colors hover:text-white inline-flex items-center gap-1">
                  {link.label}
                  <svg
                    viewBox="0 0 24 24"
                    className="w-3.5 h-3.5 stroke-current fill-none"
                    strokeWidth={2}
                    strokeLinecap="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full right-0 mt-1 w-52 bg-primary-900 border border-white/10 rounded-xl py-2 shadow-xl">
                    {link.dropdown.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm text-white/70 rounded-full transition-colors hover:text-white"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#cta"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full font-medium text-sm bg-white text-[#011f23] hover:bg-neutral-100 transition-all duration-300 hover:-translate-y-0.5"
          >
            Get Appointment
            <span className="w-7 h-7 rounded-full bg-[#24a3b1] flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" className="w-3 h-3 stroke-white fill-none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
          </a>
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
                href={link.dropdown ? "#" : link.href}
                className="px-4 py-3 text-sm text-white/70 hover:text-white transition-colors"
                onClick={() => !link.dropdown && setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="px-4 pt-4">
            <a
              href="#cta"
              className="inline-flex items-center justify-center gap-2.5 w-full px-5 py-2.5 rounded-full font-medium text-sm bg-white text-[#011f23] hover:bg-neutral-100 transition-all duration-300"
            >
              Get Appointment
              <span className="w-7 h-7 rounded-full bg-[#24a3b1] flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" className="w-3 h-3 stroke-white fill-none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
