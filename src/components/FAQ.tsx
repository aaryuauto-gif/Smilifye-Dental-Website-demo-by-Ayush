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
    a: "We recommend a routine dental checkup every six months to maintain optimal oral health and catch any issues early.",
  },
  {
    q: "Do you offer emergency dental services?",
    a: "Yes, we provide emergency dental care for urgent issues like pain, injury, or infections with prompt attention.",
  },
  {
    q: "Are your treatments painful?",
    a: "Most treatments are comfortable with modern techniques and anesthesia, ensuring minimal pain and a stress-free experience.",
  },
  {
    q: "What dental services do you provide?",
    a: "We offer preventive, cosmetic, restorative, and specialized dental services tailored to maintain and improve your health.",
  },
  {
    q: "Do you accept insurance?",
    a: "Yes, we accept most major dental insurance plans. Our team can help verify your coverage and explain costs before treatment.",
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
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none none" },
        }
      );

      gsap.fromTo(
        ".faq-right",
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none none" },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="faq" className="py-[120px] bg-[#fef5ec]">
      <div className="container">
        <div className="grid grid-cols-[1fr_1.2fr] gap-12 max-lg:grid-cols-1">
          {/* Left column */}
          <div className="faq-left">
            <div className="mb-5">
              <Tag>FAQ</Tag>
            </div>
            <h2 className="mb-5">
              <span className="text-[#24a3b1]">Questions</span> We Get
              <br />
              Often
            </h2>
            <p className="text-[#587d81] leading-[155%] mb-8 max-w-[400px]">
              Answers to Your Most Common Questions About Dental Care and Our
              Services
            </p>

            {/* Still have a question? card */}
            <div className="bg-white rounded-2xl p-6 max-w-[480px]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#011f23] flex items-center justify-center shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 stroke-white fill-none"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
              </div>
              <div className="flex items-end justify-between gap-4">
                <div>
                  <h4 className="text-[#011f23] font-semibold text-lg mb-1">
                    Still have a question?
                  </h4>
                  <p className="text-[#587d81] text-sm">
                    Our team is ready to assist you with anything you need.
                  </p>
                </div>
                <div className="shrink-0">
                  <ArrowButton variant="dark" href="#">
                    Make A Call
                  </ArrowButton>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - FAQ accordion */}
          <div className="faq-right flex flex-col">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border-b border-[#d4d4d4] last:border-b-0"
              >
                <button
                  className="w-full flex items-center justify-between py-5 text-left gap-4"
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                >
                  <span className="font-medium text-[#011f23] text-lg">
                    {faq.q}
                  </span>
                  <span className="w-6 h-6 flex items-center justify-center shrink-0">
                    {openIndex === i ? (
                      <svg
                        viewBox="0 0 24 24"
                        className="w-5 h-5 stroke-[#011f23] fill-none"
                        strokeWidth={2}
                        strokeLinecap="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    ) : (
                      <svg
                        viewBox="0 0 24 24"
                        className="w-5 h-5 stroke-[#011f23] fill-none"
                        strokeWidth={2}
                        strokeLinecap="round"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    )}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? "max-h-40 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="text-[#587d81] text-base leading-[160%]">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
