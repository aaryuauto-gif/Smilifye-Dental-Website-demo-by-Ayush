"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ArrowButton from "./ArrowButton";

gsap.registerPlugin(ScrollTrigger);

const infoCards = [
  {
    icon: (
      <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
    ),
    title: "Get An Appointment",
    text: "Ready for a healthier smile? Book your visit today. Click here",
  },
  {
    icon: (
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.11 2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    ),
    title: "Emergency Contact",
    text: (
      <>
        Call : +784 4567 4587
        <br />
        Email: smilifye@gmail.com
      </>
    ),
  },
  {
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </>
    ),
    title: "Get An Appointment",
    text: (
      <>
        Mon- Fri&emsp;8:00- 17:00
        <br />
        Sat-Sun&emsp;9:30- 17:30
      </>
    ),
  },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const words = titleRef.current?.querySelectorAll(".word-inner");
      if (words?.length) {
        gsap.fromTo(
          words,
          { y: 80, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", stagger: 0.08, delay: 0.3 }
        );
      }

      gsap.fromTo(".hero-para", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 1 });
      gsap.fromTo(".hero-btn", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, delay: 1.3 });
      gsap.fromTo(".hero-info", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 1.5 });
      gsap.fromTo(
        ".hero-info-card",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.15, delay: 1.7 }
      );

      gsap.to(".hero-bg-img", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "bottom top", scrub: true },
      });
    },
    { scope: sectionRef }
  );

  const titleWords = "Trusted Dental Care for Every Generation".split(" ");

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-end mt-[72px] bg-primary-900 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/699f415616567b8df6531e79_dentist-examining-patients-teeth-close-up_201.webp"
          alt="Dentist examining patient"
          fill
          className="object-cover hero-bg-img"
          priority
          sizes="100vw"
        />
      </div>
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(157deg, rgba(1,31,35,0.9) 16%, rgba(1,31,35,0) 47%, rgb(1,31,35) 100%)",
        }}
      />

      <div className="relative z-[2] max-w-[1160px] mx-auto w-full px-5 pb-20 max-lg:pb-12">
        <h1 ref={titleRef} className="text-white max-w-[700px] mb-5">
          {titleWords.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden align-top pb-1 mr-[0.3em]">
              <span
                className={`word-inner inline-block ${
                  word === "Every" || word === "Generation" ? "text-accent" : ""
                }`}
              >
                {word}
              </span>
            </span>
          ))}
        </h1>

        <p className="hero-para text-white/70 text-lg max-w-[580px] mb-8 leading-[155%]">
          We combine modern technology with heartfelt service to ensure every generation.
        </p>

        <div className="hero-btn flex items-center gap-4">
          <ArrowButton variant="dark" href="#cta">
            Get Appointment
          </ArrowButton>
          <a
            href="#story"
            className="w-[52px] h-[52px] rounded-full border border-white/20 flex items-center justify-center hover:border-white/40 transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 stroke-accent fill-none"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        </div>

        <div className="hero-info grid grid-cols-3 border-t border-white/15 mt-15 max-lg:grid-cols-1">
          {infoCards.map((card, i) => (
            <div
              key={i}
              className={`hero-info-card flex items-start gap-4 py-8 max-lg:py-5 ${
                i < 2 ? "border-r border-white/15 max-lg:border-r-0 max-lg:border-b" : ""
              } ${i === 0 ? "pr-6 max-lg:pr-0" : i === 1 ? "px-6 max-lg:px-0" : "pl-6 max-lg:pl-0"}`}
            >
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 stroke-accent fill-none"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {card.icon}
                </svg>
              </div>
              <div>
                <div className="text-white text-lg font-semibold mb-1">{card.title}</div>
                <div className="text-white/50 text-sm leading-[150%]">{card.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
