"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Tag from "./Tag";
import ArrowButton from "./ArrowButton";

gsap.registerPlugin(ScrollTrigger);

const team = [
  {
    img: "/images/69de74662ec267211bb070d6_team-image-6.jpg",
    name: "Dr. Oliver Thompson",
    role: "Pediatric Dentist",
  },
  {
    img: "/images/69de73dce21822529ce2fcde_team-image-5.jpg",
    name: "Dr. Rishi",
    role: "Pediatric Dentist",
  },
  {
    img: "/images/69de730f3764273782bd4d9d_team-image-4.jpg",
    name: "Dr. Emman Collins",
    role: "Pediatric Dentist",
  },
];

export default function Team() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.fromTo(
        ".team-header",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%", toggleActions: "play none none none" },
        }
      );

      gsap.fromTo(
        ".team-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: { trigger: ".team-grid", start: "top 90%", toggleActions: "play none none none" },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-[120px]" style={{ backgroundColor: "#e8f4f3" }}>
      <div className="container">
        <div className="team-header flex flex-col items-center text-center mb-12">
          <div className="mb-5">
            <Tag>Our Team</Tag>
          </div>
          <h2 className="mb-4">
            Our{" "}
            <span style={{ color: "#24a3b1" }}>Experts</span>{" "}
            in Oral Health
          </h2>
          <p className="max-w-[620px] text-[#587d81] text-base leading-[160%]">
            Each member of our clinical staff is not only highly qualified but deeply passionate about helping patients achieve healthier.
          </p>
        </div>

        <div className="team-grid grid grid-cols-3 gap-6 max-md:grid-cols-1">
          {team.map((member, i) => (
            <div
              key={i}
              className="team-card group relative rounded-2xl overflow-hidden"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width:768px)100vw,33vw"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-semibold tracking-[-0.5px] text-[#011f23]">{member.name}</h3>
                    <p className="text-[#587d81] text-sm mt-0.5">{member.role}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <a href="#" className="w-8 h-8 rounded-full border border-[#dde5e6] flex items-center justify-center hover:bg-[#f0f5f5] transition-colors">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#011f23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full border border-[#dde5e6] flex items-center justify-center hover:bg-[#f0f5f5] transition-colors">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#011f23">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <ArrowButton variant="dark" href="#cta">
            View All Doctors
          </ArrowButton>
        </div>
      </div>
    </section>
  );
}
