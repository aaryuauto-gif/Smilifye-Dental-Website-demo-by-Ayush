"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ArrowButton from "./ArrowButton";

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#story" },
  { label: "Services", href: "#services" },
  { label: "Blogs", href: "#blog" },
];

const legalLinks = [
  { label: "Terms & Conditions", href: "#" },
  { label: "Cookies", href: "#" },
  { label: "Licenses", href: "#" },
  { label: "404", href: "#" },
];

const socialLinks = [
  { label: "Facebook", icon: "f" },
  { label: "Tweeter", icon: "𝕏" },
  { label: "LinkedIn", icon: "in" },
  { label: "Instagram", icon: "○" },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.fromTo(
        ".footer-content > *",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          scrollTrigger: { trigger: footerRef.current, start: "top 90%", toggleActions: "play none none none" },
        }
      );
    },
    { scope: footerRef }
  );

  return (
    <footer ref={footerRef} className="bg-[#fef5ec] pt-[80px] pb-8">
      <div className="container footer-content">
        {/* Top row: Logo + Phone/Email */}
        <div className="flex items-start justify-between pb-10 max-md:flex-col max-md:gap-8">
          <Image
            src="/images/6989a716ebe888bb965ec361_c71fe80c4c991598637fdd3f4674e407_flowfye.svg"
            alt="Smilifye"
            width={140}
            height={32}
            className="h-8 w-auto"
          />
          <div className="text-right max-md:text-left">
            <p className="text-[32px] font-semibold text-[#011f23] tracking-[-1px] leading-[130%] max-md:text-[24px]">
              +7 [495]124-87-87
            </p>
            <p className="text-[32px] font-semibold text-[#011f23] tracking-[-1px] leading-[130%] max-md:text-[24px]">
              smilifye@gmail.com
            </p>
          </div>
        </div>

        <div className="h-px bg-[#011f23]/10" />

        {/* Bottom row */}
        <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-8 pt-10 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {/* Description + Button */}
          <div>
            <p className="text-sm text-[#011f23]/60 leading-[155%] mb-6 max-w-[340px]">
              Advanced technology, a caring team, and treatments designed to keep your smile healthy for life.
            </p>
            <ArrowButton variant="outline" href="#cta">
              Get Appointment
            </ArrowButton>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-[#011f23] mb-5">Navigation</h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#011f23]/60 hover:text-[#24a3b1] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-[#011f23] mb-5">Legal</h4>
            <ul className="flex flex-col gap-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#011f23]/60 hover:text-[#24a3b1] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow us */}
          <div>
            <h4 className="font-semibold text-[#011f23] mb-5">Follow us</h4>
            <ul className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm text-[#011f23]/60 hover:text-[#24a3b1] transition-colors"
                  >
                    <span className="text-xs">{link.icon}</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-px bg-[#011f23]/10 mt-12" />

        <div className="flex items-center justify-between pt-6 max-sm:flex-col max-sm:gap-4 max-sm:text-center">
          <p className="text-xs text-[#011f23]/40">
            &copy; All rights reserved. Flowfye.
          </p>
          <div className="flex gap-6 text-xs text-[#011f23]/40">
            <span>Powered by Webflow</span>
            <span>•</span>
            <a href="#" className="hover:text-[#24a3b1] transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
