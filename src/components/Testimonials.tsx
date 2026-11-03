"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote:
      "I've always been nervous about visiting the dentist, but Smilifye changed everything. The staff is warm, and the care is exceptional. I finally enjoy smiling again.",
    name: "Kristin Watson",
    role: "Business Owner",
    avatar: "/images/69f2a59c19ae6fdd3081c087_testimonial-author-1.webp",
  },
  {
    quote:
      "The team made my dental visit incredibly comfortable. Professional care, clear explanations, and excellent results. I finally feel confident about my smile again.",
    name: "Michael Carter",
    role: "Business Consultant",
    avatar: "/images/69f5c8fa1f4ebe5de80710ed_testimonial-author-2.webp",
  },
  {
    quote:
      "From consultation to treatment, everything was smooth and stress-free. The dentist was gentle, and the staff was supportive. Highly recommend their dental services.",
    name: "Daniel Hughes",
    role: "Software Engineer",
    avatar: "/images/69f5c8fb3aea82102c7a57e3_testimonial-author-3.webp",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  const next = useCallback(
    () => setActive((p) => (p + 1) % testimonials.length),
    []
  );
  const prev = useCallback(
    () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length),
    []
  );

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.fromTo(
        ".testimonial-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none none" },
        }
      );
    },
    { scope: sectionRef }
  );

  const t = testimonials[active];

  return (
    <section ref={sectionRef} className="relative py-[140px] overflow-hidden">
      {/* Full-width dental office background */}
      <div className="absolute inset-0">
        <Image
          src="/images/69ddd539a343355970d2be89_testimonial-background.webp"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#011f23]/60" />
      </div>

      <div className="container relative z-10">
        <div className="testimonial-card max-w-[680px] mx-auto flex flex-col items-center">
          {/* Teal gradient header card */}
          <div className="w-full rounded-t-[20px] bg-gradient-to-br from-[#022f34] to-[#24a3b1] pt-12 pb-16 px-10 text-center">
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/30 text-sm font-medium text-white mb-6">
              <span className="text-[10px] text-white/70">✳</span>
              Testimonials
            </span>
            <h2 className="text-[48px] leading-[110%] font-semibold tracking-[-2px] text-white max-md:text-[36px]">
              Voices of
              <br />
              <span className="text-[#7ecdd6]">Trust and Care</span>
            </h2>
          </div>

          {/* White testimonial card overlapping the gradient */}
          <div className="w-[90%] -mt-8 bg-white rounded-2xl shadow-xl px-10 py-10 text-center relative z-10 max-md:px-6 max-md:py-8">
            {/* Author photo */}
            <div className="w-[100px] h-[100px] rounded-xl overflow-hidden mx-auto mb-5 max-md:w-[80px] max-md:h-[80px]">
              <Image
                src={t.avatar}
                alt={t.name}
                width={100}
                height={100}
                className="object-cover w-full h-full"
              />
            </div>

            <h4 className="text-[#011f23] font-semibold text-lg mb-1">
              {t.name}
            </h4>
            <p className="text-[#587d81] text-sm mb-5">{t.role}</p>

            <blockquote className="text-[#011f23] text-lg font-medium leading-[170%] max-w-[500px] mx-auto">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            {/* Dot indicators */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {testimonials.map((_, j) => (
                <button
                  key={j}
                  onClick={() => setActive(j)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    j === active ? "bg-[#24a3b1]" : "bg-[#d0d5d5]"
                  }`}
                  aria-label={`Testimonial ${j + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
