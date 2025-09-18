"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
const HeroSection = () => {
    const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="pb-20 px-4 pt-40">
        <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 bg-gradient-to-br from-blue-600 to-blue-400 font-extrabold tracking-tighter pr-2 pb-2 text-transparent bg-clip-text">Manage Your Finances <br /> with Intelligence</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                An AI-powered financial management platform that helps you track,
                analyze, and optimize your spending with real-time insights.
            </p>
            <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8 cursor-pointer">
              Get Started
            </Button>
          </Link>
          <Link href="/sign-in">
            <Button size="lg" variant="outline" className="px-8 cursor-pointer">
              Login Now
            </Button>
          </Link>
        </div>
        </div>
        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image max-w-5xl mx-auto shadow-2xl overflow-hidden">
            <Image
              src="/dashboard.png"
              width={1080}
              height={1080}
              alt="Dashboard Preview"
              className="rounded-lg object-cover mx-auto mask-b-from-40% to-70% border-2"
              priority
            />
          </div>
        </div>
      </section>
  )
}

export default HeroSection