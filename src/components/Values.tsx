"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Tag from "./Tag";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    title: "Compassionate & Care",
    text: "Our approach goes beyond treatment — we provide compassionate care that ensures every patient feels comfortable, understood, and supported throughout their dental journey.",
  },
  {
    title: "Advanced Technology",
    text: "Our clinic uses advanced dental technology to deliver precise diagnoses, efficient treatments, and improved comfort for faster, more effective results.",
  },
  {
    title: "Comprehensive Services",
    text: "From preventive care to advanced treatments, we offer comprehensive dental services to meet all your oral health needs in one place.",
  },
  {
    title: "Our Honesty & Trust",
    text: "We believe in honest communication and transparent treatment plans, helping you make informed decisions with complete trust and confidence.",
  },
  {
    title: "Patient-Centered Care",
    text: "Every treatment plan is tailored to the individual. We listen to your concerns, respect your preferences, and prioritize your overall well-being.",
  },
];

export default function Values() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState(0);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.fromTo(
        ".values-header",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none none" },
        }
      );

      gsap.fromTo(
        ".values-left",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: { trigger: ".values-left", start: "top 90%", toggleActions: "play none none none" },
        }
      );

      gsap.fromTo(
        ".values-right",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.15,
          scrollTrigger: { trigger: ".values-right", start: "top 90%", toggleActions: "play none none none" },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-[120px] bg-white">
      <div className="container">
        {/* Full-width heading area */}
        <div className="values-header mb-12">
          <div className="mb-5">
            <Tag>Why Choose Us</Tag>
          </div>
          <h2 className="mb-4">
            We Treat You Like Family — Because Your{" "}
            <span style={{ color: "#24a3b1" }}>Smile Matters Most</span>
          </h2>
          <p className="text-[#587d81] text-base leading-[160%] max-w-[620px]">
            At Smilifye, we combine expertise, compassion, and modern technology to create a dental experience that patients truly value.
          </p>
        </div>

        {/* Accordion + Image side by side */}
        <div className="grid grid-cols-[1fr_1fr] gap-12 items-start max-lg:grid-cols-1">
          <div className="values-left">
            <div className="flex flex-col">
              {values.map((item, i) => (
                <div key={i}>
                  <button
                    className="w-full flex items-start gap-3 py-5 text-left"
                    onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  >
                    <span className="text-[#24a3b1] text-lg mt-0.5 shrink-0">✳</span>
                    <div className="flex-1">
                      <span className="font-semibold text-[#011f23] text-lg tracking-[-0.5px]">{item.title}</span>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          openIndex === i ? "max-h-40 mt-3" : "max-h-0"
                        }`}
                      >
                        <p className="text-[#587d81] text-[15px] leading-[160%]">{item.text}</p>
                      </div>
                    </div>
                  </button>
                  {i < values.length - 1 && (
                    <div className="h-px bg-[#dde5e6]" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="values-right">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/69ddaeb6ae6fea2f56ab02f9_home-value-image.webp"
                alt="Our values"
                fill
                className="object-cover"
                sizes="(max-width:1024px)100vw,50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
