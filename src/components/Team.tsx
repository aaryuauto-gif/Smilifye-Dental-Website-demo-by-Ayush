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
    img: "/images/69de730f3764273782bd4d9d_team-image-4.jpg",
    name: "Dr. James Anderson",
    role: "Cosmetic Dentist",
  },
  {
    img: "/images/69de73dce21822529ce2fcde_team-image-5.jpg",
    name: "Dr. Sarah Mitchell",
    role: "Orthodontist",
  },
  {
    img: "/images/69de74662ec267211bb070d6_team-image-6.jpg",
    name: "Dr. Emily Carter",
    role: "Dental Surgeon",
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
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
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
          scrollTrigger: { trigger: ".team-grid", start: "top 90%" },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-[120px] bg-bg">
      <div className="container">
        <div className="team-header flex items-end justify-between mb-12 max-md:flex-col max-md:items-start max-md:gap-6">
          <div>
            <div className="mb-5">
              <Tag>Our Team</Tag>
            </div>
            <h2 className="max-w-[500px]">
              Meet Our Expert{" "}
              <span className="bg-gradient-to-r from-primary-400 to-accent bg-clip-text text-transparent">
                Dental Team
              </span>
            </h2>
          </div>
          <ArrowButton variant="outline" href="#cta">
            View All
          </ArrowButton>
        </div>

        <div className="team-grid grid grid-cols-3 gap-5 max-md:grid-cols-1">
          {team.map((member, i) => (
            <div
              key={i}
              className="team-card group rounded-2xl overflow-hidden bg-surface border border-border"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width:768px)100vw,33vw"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold tracking-[-0.5px]">{member.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
