"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Tag from "./Tag";
import ArrowButton from "./ArrowButton";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "How often should I visit the dentist?",
    a: "We recommend visiting the dentist every 6 months for a routine check-up and professional cleaning. However, if you have specific dental concerns, more frequent visits may be advised.",
  },
  {
    q: "What should I do in a dental emergency?",
    a: "Contact us immediately. We offer 24/7 emergency support. In the meantime, rinse your mouth gently, apply a cold compress to reduce swelling, and avoid aspirin near the affected area.",
  },
  {
    q: "Are dental X-rays safe?",
    a: "Yes, dental X-rays use very low levels of radiation and are considered safe. We use digital X-rays, which reduce radiation exposure by up to 80% compared to traditional X-rays.",
  },
  {
    q: "How can I whiten my teeth safely?",
    a: "Professional whitening is the safest and most effective option. We offer both in-office treatments and take-home kits. Avoid over-the-counter products without consulting us first.",
  },
  {
    q: "Do you accept dental insurance?",
    a: "Yes, we accept most major dental insurance plans. Our front desk team can help verify your coverage and explain any out-of-pocket costs before your appointment.",
  },
  {
    q: "What age should children start seeing a dentist?",
    a: "Children should have their first dental visit by age 1 or within 6 months after their first tooth appears. Early visits help establish good oral health habits.",
  },
];

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState(0);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.fromTo(
        ".faq-left",
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );

      gsap.fromTo(
        ".faq-right",
        { x: 40, opacity: 0 },
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
    <section ref={sectionRef} id="faq" className="py-[120px] bg-bg">
      <div className="container">
        <div className="grid grid-cols-[1fr_1.2fr] gap-12 max-lg:grid-cols-1">
          <div className="faq-left">
            <div className="mb-5">
              <Tag>FAQ</Tag>
            </div>
            <h2 className="mb-5">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-primary-400 to-accent bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-gray-500 leading-[155%] mb-8">
              Find answers to common questions about our dental services, treatments, and
              what to expect during your visit.
            </p>
            <ArrowButton variant="dark" href="#cta">
              Book Appointment
            </ArrowButton>
          </div>

          <div className="faq-right flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`rounded-xl border transition-colors duration-300 ${
                  openIndex === i ? "border-accent/30 bg-accent/5" : "border-border bg-surface"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between p-5 text-left gap-4"
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                >
                  <span className="font-medium text-fg">{faq.q}</span>
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
                  <p className="text-gray-500 text-sm leading-[155%]">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
