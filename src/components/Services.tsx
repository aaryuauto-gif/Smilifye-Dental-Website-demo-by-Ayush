"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ArrowButton from "./ArrowButton";

gsap.registerPlugin(ScrollTrigger);

interface ServiceTag {
  label: string;
}

interface ServiceCard {
  num: string;
  title: string;
  description: string;
  image: string;
  tags: ServiceTag[];
  bgTint?: string;
}

const services: ServiceCard[] = [
  {
    num: "[01]",
    title: "Preventive dentistry",
    description:
      "Early care and regular checkups are the key to avoiding serious dental issues. Our preventive treatments help you maintain strong, healthy teeth and gums",
    image: "/images/699c52f336cd1c03293a16d6_service-thumbnail-image.jpg",
    tags: [
      { label: "Dental Cleaning" },
      { label: "Gum Therapy" },
      { label: "Fluoride Treatment" },
    ],
    bgTint: "rgba(232,244,243,0.5)",
  },
  {
    num: "[02]",
    title: "Cosmetic dentistry",
    description:
      "Cosmetic dentistry improves the appearance of your teeth through treatments like whitening, veneers, and bonding, helping you achieve a brighter, more confident smile.",
    image: "/images/69dde4c6be5aa13c0c8ac8bd_service-thumbnail-image-2.jpg",
    tags: [
      { label: "Dental Veneers" },
      { label: "Smile Makeover" },
      { label: "Teeth Whitening" },
    ],
    bgTint: "rgba(243,232,244,0.5)",
  },
  {
    num: "[03]",
    title: "Restorative treatments",
    description:
      "Restorative treatments repair damaged or missing teeth using fillings, crowns, bridges, and implants to restore function, strength, and natural appearance effectively.",
    image: "/images/69dde5bba2659ede481db0b6_service-thumbnail-image-3.jpg",
    tags: [
      { label: "Dental Fillings" },
      { label: "Crowns & Bridges" },
      { label: "Tooth Repair" },
      { label: "Dental Implants" },
    ],
    bgTint: "rgba(232,244,243,0.5)",
  },
  {
    num: "[04]",
    title: "Orthodontics",
    description:
      "Orthodontic treatments correct misaligned teeth and bite issues using braces or aligners, improving both appearance and long-term oral health.",
    image: "/images/69dde7bcf2f03350abca0ee8_service-thumbnail-image-4.jpg",
    tags: [
      { label: "Braces" },
      { label: "Clear Aligners" },
      { label: "Teeth Alignment" },
      { label: "Bite Correction" },
    ],
    bgTint: "rgba(243,232,244,0.5)",
  },
];

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="shrink-0"
    >
      <circle cx="8" cy="8" r="8" fill="#24a3b1" />
      <path
        d="M5 8l2 2 4-4"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ServiceTagPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#011f23] text-white text-xs font-medium whitespace-nowrap">
      <CheckIcon />
      {label}
    </span>
  );
}

function ViewDetailsButton() {
  return (
    <a
      href="#"
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#d0d5d5] text-sm font-medium text-[#011f23] hover:border-[#24a3b1] transition-colors duration-300"
    >
      View Details
      <span className="w-6 h-6 rounded-full bg-[#24a3b1] flex items-center justify-center shrink-0">
        <svg
          viewBox="0 0 24 24"
          className="w-3 h-3 stroke-white fill-none"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      </span>
    </a>
  );
}

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.fromTo(
        ".services-header",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
        }
      );

      const track = trackRef.current;
      if (!track) return;
      const cards = track.querySelectorAll(".service-slide");
      if (cards.length <= 1) return;

      const totalScroll = track.scrollWidth - track.clientWidth;

      gsap.fromTo(
        track,
        { x: 0 },
        {
          x: -totalScroll,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 10%",
            end: () => `+=${totalScroll}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="services"
      className="pt-[100px] pb-[60px] bg-white overflow-hidden"
    >
      <div className="container services-header mb-12">
        <div className="flex items-end justify-between max-md:flex-col max-md:items-start max-md:gap-6">
          <div>
            <h2 className="text-[56px] leading-[115%] font-medium tracking-[-2.8px] text-[#011f23] max-md:text-[36px] max-md:tracking-[-1.5px]">
              Comprehensive Dental
              <br />
              Care for{" "}
              <span className="text-[#24a3b1]">Every Smile</span>
            </h2>
            <p className="mt-4 text-[#587d81] text-base leading-[160%] max-w-[560px]">
              At Smilifye, we combine expertise, compassion, and modern
              technology to create a dental experience that patients truly value.
            </p>
          </div>
          <ArrowButton variant="dark" href="#">
            See All Services
          </ArrowButton>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex gap-5 pl-[max(16px,calc((100vw-1160px)/2))]"
        style={{ width: "max-content" }}
      >
        {services.map((service, i) => {
          const prevImage =
            i > 0 ? services[i - 1].image : services[services.length - 1].image;
          const prevTags =
            i > 0 ? services[i - 1].tags : services[services.length - 1].tags;

          return (
            <div
              key={i}
              className="service-slide flex shrink-0 gap-5 rounded-2xl overflow-hidden"
              style={{ width: "calc(100vw - 32px)", maxWidth: "1160px" }}
            >
              {/* Left image - previous service's image */}
              <div className="relative w-[35%] min-h-[500px] rounded-2xl overflow-hidden shrink-0 max-md:hidden">
                <Image
                  src={prevImage}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="35vw"
                />
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                  {prevTags.map((tag, ti) => (
                    <ServiceTagPill key={ti} label={tag.label} />
                  ))}
                </div>
              </div>

              {/* Center content card */}
              <div
                className="flex flex-col justify-between w-[30%] min-h-[500px] rounded-2xl p-8 shrink-0 max-md:w-full max-md:min-h-[400px]"
                style={{ backgroundColor: service.bgTint || "rgba(232,244,243,0.5)" }}
              >
                <span className="text-[60px] leading-none font-light text-[#c5cfd0] tracking-[-2px]">
                  {service.num}
                </span>
                <div>
                  <h3 className="text-[24px] leading-[120%] font-semibold text-[#011f23] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#587d81] text-[15px] leading-[165%] mb-6">
                    {service.description}
                  </p>
                  <ViewDetailsButton />
                </div>
              </div>

              {/* Right image - current service's image */}
              <div className="relative w-[35%] min-h-[500px] rounded-2xl overflow-hidden shrink-0 max-md:hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="35vw"
                />
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                  {service.tags.map((tag, ti) => (
                    <ServiceTagPill key={ti} label={tag.label} />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
