"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Tag from "./Tag";
import ArrowButton from "./ArrowButton";

gsap.registerPlugin(ScrollTrigger);

const posts = [
  {
    img: "/images/69e15ed5f04ff9636a17e1e8_blog-image-4.jpg",
    title: "Dental myths busted: what your teeth really need for you career",
  },
  {
    img: "/images/69e15ff64495113a87fc8c93_blog-image-5.jpg",
    title: "The truth about flossing: why skipping it isn’t an option",
  },
  {
    img: "/images/69e1602ff6439f6075d47037_blog-image-6.jpg",
    title: "The ultimate guide to brushing: are you doing it right?",
  },
];

export default function Blog() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.fromTo(
        ".blog-header",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
        }
      );

      gsap.fromTo(
        ".blog-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          scrollTrigger: { trigger: ".blog-grid", start: "top 90%" },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="blog" className="py-[120px] bg-[#fef5ec]">
      <div className="container">
        {/* Header area */}
        <div className="blog-header text-center mb-14">
          <div className="mb-5">
            <Tag>Blogs</Tag>
          </div>
          <div className="flex items-end justify-between max-md:flex-col max-md:items-center max-md:gap-6">
            <h2 className="text-[#011f23] text-left max-md:text-center">
              Stories and Tips From
              <br />
              Around the World
            </h2>
            <ArrowButton variant="dark" href="#">
              See All Blogs
            </ArrowButton>
          </div>
        </div>

        {/* Blog cards with dark overlay */}
        <div className="blog-grid grid grid-cols-3 gap-5 max-md:grid-cols-1">
          {posts.map((post, i) => (
            <article
              key={i}
              className="blog-card group rounded-2xl overflow-hidden relative cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width:768px)100vw,33vw"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#011f23]/90 via-[#011f23]/40 to-transparent" />
                {/* Title on image */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-semibold leading-[130%] tracking-[-0.5px] mb-3">
                    {post.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-white/80 text-sm font-medium group-hover:text-white transition-colors">
                    Read More
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4 stroke-current fill-none"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
