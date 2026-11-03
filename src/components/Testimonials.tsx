"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Tag from "./Tag";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote:
      "The team at Smilifye made me feel so comfortable during my entire treatment. I used to dread dental visits, but now I actually look forward to them. My smile has never looked better!",
    name: "Sarah Johnson",
    role: "Regular Patient",
    avatar: "/images/69f2a59c19ae6fdd3081c087_testimonial-author-1.webp",
    rating: 5,
  },
  {
    quote:
      "From the moment I walked in, I knew this was different. The staff is incredibly kind, the technology is top-notch, and the results speak for themselves. Highly recommended!",
    name: "Michael Chen",
    role: "Cosmetic Patient",
    avatar: "/images/69f5c8fa1f4ebe5de80710ed_testimonial-author-2.webp",
    rating: 5,
  },
  {
    quote:
      "I brought my whole family here and every single one of us has had an amazing experience. The kids love coming here, which says a lot about how welcoming and gentle the team is.",
    name: "Emily Rodriguez",
    role: "Family Patient",
    avatar: "/images/69f5c8fb3aea82102c7a57e3_testimonial-author-3.webp",
    rating: 5,
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  const next = useCallback(() => setActive((p) => (p + 1) % testimonials.length), []);
  const prev = useCallback(() => setActive((p) => (p - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.fromTo(
        ".testimonial-content",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );
    },
    { scope: sectionRef }
  );

  const t = testimonials[active];

  return (
    <section
      ref={sectionRef}
      className="relative py-[120px] overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/69ddd539a343355970d2be89_testimonial-background.webp"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary-900/90" />
      </div>

      <div className="container relative z-10">
        <div className="testimonial-content max-w-[800px] mx-auto text-center text-white">
          <div className="mb-5">
            <Tag>Testimonials</Tag>
          </div>
          <h2 className="text-white mb-10">
            What Our Patients{" "}
            <span className="bg-gradient-to-r from-primary-400 to-accent bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>

          <div className="relative min-h-[200px]">
            <div className="flex gap-1 justify-center mb-6">
              {[...Array(t.rating)].map((_, j) => (
                <svg key={j} viewBox="0 0 24 24" className="w-5 h-5 fill-accent stroke-none">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>

            <blockquote className="text-lg leading-[170%] text-white/80 mb-8 transition-opacity duration-500">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-accent">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-left">
                <div className="font-semibold text-white">{t.name}</div>
                <div className="text-white/50 text-sm">{t.role}</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-white/40 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg viewBox="0 0 10 18" className="w-2.5 h-4 fill-white rotate-180">
                <path d="M1 1l8 8-8 8" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === active ? "bg-accent" : "bg-white/30"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-white/40 transition-colors"
              aria-label="Next testimonial"
            >
              <svg viewBox="0 0 10 18" className="w-2.5 h-4 fill-white">
                <path d="M1 1l8 8-8 8" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
