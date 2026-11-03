"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ArrowButton from "./ArrowButton";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.fromTo(
        ".cta-inner > *",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%", toggleActions: "play none none none" },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="cta" className="cta-inner bg-[#022f34] py-[120px] max-sm:py-16 text-center rounded-t-[24px]">
      <div className="container">
        <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/30 text-sm font-medium text-white mb-8">
          <span className="text-[10px] text-white/70">✳</span>
          Get In Touch
        </span>
        <h2 className="text-white max-w-[700px] mx-auto mb-4 italic">
          Let&apos;s Talk Teeth—We&apos;re{" "}
          <br />
          <span style={{ color: "#7ecdd6" }}>Just a Smile Away</span>
        </h2>
        <p className="text-white/60 max-w-[560px] mx-auto mb-10 leading-[155%]">
          Your health journey starts with one simple step — we&apos;re here to guide you.
        </p>
        <div className="flex items-center justify-center">
          <ArrowButton variant="light" href="#">
            Get Started
          </ArrowButton>
        </div>
      </div>
    </section>
  );
}
