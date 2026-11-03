"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Tag from "./Tag";

gsap.registerPlugin(ScrollTrigger);

const posts = [
  {
    img: "/images/69e15ed5f04ff9636a17e1e8_blog-image-4.jpg",
    category: "Oral Health",
    title: "5 Daily Habits for a Healthier Smile",
    text: "Small changes in your daily routine can make a big difference. Learn the top five habits dentists recommend for maintaining strong teeth and healthy gums.",
  },
  {
    img: "/images/69e15ff64495113a87fc8c93_blog-image-5.jpg",
    category: "Cosmetic",
    title: "What to Expect During a Teeth Whitening Session",
    text: "Curious about professional teeth whitening? Here's a step-by-step look at what happens during a session and how to maintain your bright results.",
  },
  {
    img: "/images/69e1602ff6439f6075d47037_blog-image-6.jpg",
    category: "Prevention",
    title: "Why Regular Dental Check-ups Matter More Than You Think",
    text: "Skipping your check-up might seem harmless, but regular visits catch problems early — saving you time, money, and discomfort in the long run.",
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
    <section ref={sectionRef} id="blog" className="py-[120px] bg-white">
      <div className="container">
        <div className="blog-header text-center mb-12">
          <div className="mb-5">
            <Tag>Blog</Tag>
          </div>
          <h2 className="max-w-[600px] mx-auto">
            Latest Tips & Insights for{" "}
            <span className="bg-gradient-to-r from-primary-400 to-accent bg-clip-text text-transparent">
              Your Dental Health
            </span>
          </h2>
        </div>

        <div className="blog-grid grid grid-cols-3 gap-5 max-md:grid-cols-1">
          {posts.map((post, i) => (
            <article
              key={i}
              className="blog-card group rounded-2xl overflow-hidden border border-border bg-surface transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width:768px)100vw,33vw"
                />
                <span className="absolute top-4 left-4 bg-accent text-white text-xs font-medium px-3 py-1.5 rounded-full">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 tracking-[-0.5px] group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-[155%]">{post.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
