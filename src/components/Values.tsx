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
    title: "Patient-Centered Care",
    text: "Every treatment plan is personalized. We listen to your concerns, explain every option, and make sure you're comfortable before, during, and after each visit.",
  },
  {
    title: "Advanced Technology",
    text: "From digital X-rays to 3D imaging, we invest in the latest dental technology to ensure precise diagnoses and more efficient, comfortable treatments.",
  },
  {
    title: "Trusted Experience",
    text: "With over 15 years of experience, our team of certified professionals has helped thousands of patients achieve their healthiest smiles.",
  },
  {
    title: "Comfortable Environment",
    text: "We've designed our clinic to feel welcoming and calm. From our waiting area to our treatment rooms, every detail is built for your comfort.",
  },
];

export default function Values() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState(0);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.fromTo(
        ".values-left",
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );

      gsap.fromTo(
        ".values-right",
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-[120px] bg-white">
      <div className="container">
        <div className="grid grid-cols-2 gap-12 items-center max-lg:grid-cols-1">
          <div className="values-left">
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

          <div className="values-right">
            <div className="mb-5">
              <Tag>Why Choose Us</Tag>
            </div>
            <h2 className="mb-8">
              Our Core Values in{" "}
              <span className="bg-gradient-to-r from-primary-400 to-accent bg-clip-text text-transparent">
                Dental Excellence
              </span>
            </h2>

            <div className="flex flex-col gap-3">
              {values.map((item, i) => (
                <div
                  key={i}
                  className={`rounded-xl border transition-colors duration-300 ${
                    openIndex === i
                      ? "border-accent/30 bg-accent/5"
                      : "border-border bg-surface"
                  }`}
                >
                  <button
                    className="w-full flex items-center justify-between p-5 text-left"
                    onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  >
                    <span className="font-semibold text-fg tracking-[-0.5px]">{item.title}</span>
                    <svg
                      viewBox="0 0 24 24"
                      className={`w-5 h-5 stroke-fg/50 fill-none shrink-0 transition-transform duration-300 ${
                        openIndex === i ? "rotate-180" : ""
                      }`}
                      strokeWidth={2}
                      strokeLinecap="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === i ? "max-h-40 pb-5 px-5" : "max-h-0"
                    }`}
                  >
                    <p className="text-gray-500 text-sm leading-[155%]">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
