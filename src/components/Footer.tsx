"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#story" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#cta" },
];

const serviceLinks = [
  "Cosmetic Dentistry",
  "Orthodontics & Braces",
  "Root Canal Treatment",
  "Teeth Whitening",
  "Dental Implants",
];

const socials = [
  {
    label: "Facebook",
    icon: (
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    ),
  },
  {
    label: "Twitter",
    icon: (
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
    ),
  },
  {
    label: "Instagram",
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
  },
  {
    label: "LinkedIn",
    icon: (
      <>
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.fromTo(
        ".footer-col",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          scrollTrigger: { trigger: footerRef.current, start: "top 90%" },
        }
      );
    },
    { scope: footerRef }
  );

  return (
    <footer ref={footerRef} className="bg-[#fef5ec] pt-[80px] pb-8">
      <div className="container">
        <div className="grid grid-cols-4 gap-8 pb-12 border-b border-primary-900/10 max-lg:grid-cols-2 max-sm:grid-cols-1">
          <div className="footer-col">
            <Image
              src="/images/6989a716ebe888bb965ec361_c71fe80c4c991598637fdd3f4674e407_flowfye.svg"
              alt="Smilifye"
              width={120}
              height={28}
              className="h-7 w-auto mb-5"
            />
            <p className="text-sm text-primary-900/60 leading-[155%] mb-5">
              We combine modern technology with heartfelt service to ensure every generation
              enjoys a healthy, beautiful smile.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  className="w-9 h-9 rounded-full border border-primary-900/15 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                  aria-label={s.label}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 stroke-current fill-none"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {s.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4 className="font-semibold text-primary-900 mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-900/60 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="font-semibold text-primary-900 mb-5">Services</h4>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#services"
                    className="text-sm text-primary-900/60 hover:text-accent transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="font-semibold text-primary-900 mb-5">Contact Info</h4>
            <ul className="flex flex-col gap-4 text-sm text-primary-900/60">
              <li className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-accent fill-none mt-0.5 shrink-0" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                123 Dental Street, Suite 100, New York, NY 10001
              </li>
              <li className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-accent fill-none mt-0.5 shrink-0" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.11 2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                +784 4567 4587
              </li>
              <li className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-accent fill-none mt-0.5 shrink-0" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                smilifye@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between pt-8 max-sm:flex-col max-sm:gap-4 max-sm:text-center">
          <p className="text-xs text-primary-900/40">
            &copy; 2025 Smilifye. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-primary-900/40">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
