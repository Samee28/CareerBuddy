import React from 'react';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (imageRef.current) {
        if (scrollPosition > 100) {
          imageRef.current.classList.add("scrolled");
        } else {
          imageRef.current.classList.remove("scrolled");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative z-10 w-full pt-36 md:pt-48 pb-10">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h1 className="gradient-title font-bold md:text-6xl lg:text-7xl xl:text-8xl">
          Your Career Coach
          <br />
          <span className="text-primary">Professional Success</span>
        </h1>
        <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
          Advance your career with personalized guidance, interview prep, and AI-powered tools for job success.
        </p>

        <div className="flex justify-center gap-4 mt-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
          <Link
            href="https://www.youtube.com/@Smart_Hack21"
            target="_blank"
          >
            <Button size="lg" className="px-8" variant="outline">
              Visit Channel
            </Button>
          </Link>
        </div>

        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image">
            <Image
              src="/resume.png"
              width={1280}
              height={720}
              alt="Career Banner"
              className="rounded-lg shadow-2xl mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; // ✅ Correct position
