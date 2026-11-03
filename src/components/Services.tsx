"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Tag from "./Tag";
import ArrowButton from "./ArrowButton";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    img: "/images/699c52f336cd1c03293a16d6_service-thumbnail-image.jpg",
    title: "Cosmetic Dentistry",
    text: "Transform your smile with our expert cosmetic treatments, from whitening to veneers and complete smile makeovers.",
  },
  {
    img: "/images/69dde4c6be5aa13c0c8ac8bd_service-thumbnail-image-2.jpg",
    title: "Orthodontics & Braces",
    text: "Achieve a perfectly aligned smile with our modern orthodontic solutions, including clear aligners and traditional braces.",
  },
  {
    img: "/images/69dde5bba2659ede481db0b6_service-thumbnail-image-3.jpg",
    title: "Root Canal Treatment",
    text: "Save your natural tooth with gentle, precise root canal therapy using the latest techniques and technology.",
  },
  {
    img: "/images/69dde7bcf2f03350abca0ee8_service-thumbnail-image-4.jpg",
    title: "Teeth Whitening",
    text: "Brighten your smile safely and effectively with our professional in-office and take-home whitening solutions.",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

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

      gsap.fromTo(
        ".service-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          scrollTrigger: { trigger: ".services-grid", start: "top 90%" },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="services" className="py-[120px] bg-white">
      <div className="container">
        <div className="services-header flex items-end justify-between mb-12 max-md:flex-col max-md:items-start max-md:gap-6">
          <div>
            <div className="mb-5">
              <Tag>Services</Tag>
            </div>
            <h2 className="max-w-[500px]">
              Comprehensive Dental{" "}
              <span className="bg-gradient-to-r from-primary-400 to-accent bg-clip-text text-transparent">
                Services
              </span>
            </h2>
          </div>
          <ArrowButton variant="dark" href="#cta">
            All Services
          </ArrowButton>
        </div>

        <div className="services-grid grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {services.map((service, i) => (
            <div
              key={i}
              className="service-card group rounded-2xl overflow-hidden border border-border bg-surface transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width:640px)100vw,(max-width:1024px)50vw,25vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 tracking-[-0.5px]">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-[155%]">{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
