"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Tag from "./Tag";

gsap.registerPlugin(ScrollTrigger);

const storyCards = [
  {
    img: "/images/69dd949075e2270e49e3ae28_our-story-image-1.webp",
    stat: "92%",
    label: "Comfort &\nCare",
    text: "Patients say they feel less anxious during visits with us",
  },
  {
    img: "/images/69dd9af4b18f391ad352b55c_our-story-image-2.webp",
    stat: "3/4",
    label: "Trusted by\nCommunity",
    text: "New patients come from word-of-mouth referrals the care",
  },
  {
    img: "/images/69dd9af41ae0af5299d4972f_our-story-image-3.webp",
    stat: "7 Mi",
    label: "Quick &\nAccessible",
    text: "Just 7 minutes is the average wait time before being seen",
  },
  {
    img: "/images/69dd9af40f20dd2f826a7f52_our-story-image-4.webp",
    stat: "24/7",
    label: "Emergency\nSupport",
    text: "Experiencing sudden pain, injury or issues? Our team is here for you 24/7.",
  },
  {
    img: "/images/69dd9af4fdbd04af53ca9fa0_our-story-image-5.webp",
    stat: "",
    label: "",
    text: "",
  },
];

export default function Story() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.fromTo(
        ".story-header",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%", toggleActions: "play none none none" },
        }
      );

      gsap.fromTo(
        ".story-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          scrollTrigger: { trigger: ".story-scroll", start: "top 90%", toggleActions: "play none none none" },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="story" className="py-[120px] pb-[100px] bg-bg">
      <div className="container">
        <div className="story-header text-center mb-15">
          <div className="mb-5">
            <Tag>Our Story</Tag>
          </div>
          <h2 className="max-w-[700px] mx-auto">
            Redefining Dental Care with Trust, Innovation in{" "}
            <span className="text-accent">
              Dental Wellness
            </span>
          </h2>
        </div>

        <div className="story-scroll flex gap-5 overflow-x-auto pb-5 snap-x snap-mandatory scrollbar-thin">
          {storyCards.map((card, i) => (
            <div
              key={i}
              className="story-card flex-[0_0_340px] min-w-0 relative rounded-[20px] overflow-hidden aspect-[3/4] snap-start transition-transform duration-500 hover:scale-[1.02]"
            >
              <Image
                src={card.img}
                alt={card.label || `Story ${i + 1}`}
                fill
                className="object-cover"
                sizes="340px"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/5 to-black/75 flex flex-col justify-end p-7">
                {card.stat && (
                  <>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-[40px] font-bold text-white tracking-[-1.5px]">{card.stat}</span>
                      <span className="text-sm font-medium text-white/80 whitespace-pre-line">{card.label}</span>
                    </div>
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, j) => (
                        <span key={j} className="w-4 h-[3px] rounded-sm bg-accent" />
                      ))}
                    </div>
                    {card.text && (
                      <div className="text-white/85 text-sm leading-[155%]">{card.text}</div>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
