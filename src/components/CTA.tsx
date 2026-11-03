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
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="cta" className="py-[120px] bg-white">
      <div className="container">
        <div className="cta-inner bg-primary-900 rounded-3xl px-12 py-16 text-center max-sm:px-6 max-sm:py-10">
          <h2 className="text-white max-w-[600px] mx-auto mb-4">
            Ready to Transform{" "}
            <span className="bg-gradient-to-r from-primary-400 to-accent bg-clip-text text-transparent">
              Your Smile?
            </span>
          </h2>
          <p className="text-white/60 max-w-[500px] mx-auto mb-8 leading-[155%]">
            Book your appointment today and take the first step toward a healthier, more
            confident smile. Our expert team is here to help.
          </p>
          <div className="flex items-center justify-center gap-4 max-sm:flex-col">
            <ArrowButton variant="light" href="#">
              Book Appointment
            </ArrowButton>
            <ArrowButton variant="ghost" href="#">
              Contact Us
            </ArrowButton>
          </div>
        </div>
      </div>
    </section>
  );
}
