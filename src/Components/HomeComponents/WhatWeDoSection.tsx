"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

const WhatWeDoSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gaugeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !gaugeRef.current) return;

    const section = sectionRef.current;
    const gauge = gaugeRef.current;

    // Set perspective on the section
    gsap.set(section, { perspective: 650 });

    // Create quickTo animations for smooth performance
    const gaugeRX = gsap.quickTo(gauge, "rotationX", { ease: "power3" });
    const gaugeRY = gsap.quickTo(gauge, "rotationY", { ease: "power3" });
    const gaugeX = gsap.quickTo(gauge, "x", { ease: "power3" });
    const gaugeY = gsap.quickTo(gauge, "y", { ease: "power3" });

    // Mouse move handler
    const handlePointerMove = (e: PointerEvent) => {
      const rect = section.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      gaugeRX(gsap.utils.interpolate(15, -15, y));
      gaugeRY(gsap.utils.interpolate(-15, 15, x));
      gaugeX(gsap.utils.interpolate(-30, 30, x));
      gaugeY(gsap.utils.interpolate(-30, 30, y));
    };

    // Mouse leave handler - reset to original position
    const handlePointerLeave = () => {
      gaugeRX(0);
      gaugeRY(0);
      gaugeX(0);
      gaugeY(0);
    };

    section.addEventListener("pointermove", handlePointerMove);
    section.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      section.removeEventListener("pointermove", handlePointerMove);
      section.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen overflow-hidden">
      {/* Background Pattern/Gradient */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          background: `
            radial-gradient(
              ellipse at 80% 20%,
              rgba(22, 59, 11, 0.45),
              transparent 50%
            ),
            linear-gradient(
              135deg,
              #080b09 0%,
              #10200d 50%,
              #080b09 100%
            )
          `
        }}
      ></div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 h-full py-20">
        {/* Main Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl text-white font-bold">
            What We Do
          </h2>
        </div>

        {/* Layout with Center Element and Side Content */}
        <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Left Side Content */}
          <div className="flex-1 space-y-20 lg:space-y-32">
            {/* Top Left - We Architect */}
            <div className="text-white space-y-4">
              <h3 className="text-3xl md:text-4xl mb-4 font-semibold">We Architect</h3>
              <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-md">
                We start with system thinking. Our engineers design scalable architectures, data flows, and AI-ready foundations that support long-term growth — not short-term fixes.
              </p>
            </div>

            {/* Bottom Left - We Design */}
            <div className="text-white space-y-4">
              <h3 className="text-3xl md:text-4xl mb-4 font-semibold">We Design</h3>
              <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-md">
                We craft intuitive, user-focused experiences that balance aesthetics with usability. Every interface is designed to be fast, accessible, and aligned with real business workflows.
              </p>
            </div>
          </div>

          {/* Center Image with 3D Effect */}
          <div className="flex-shrink-0 relative">
            <div ref={gaugeRef} className="relative w-[450px] h-[450px] flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
              <Image
                src="/assets/Images/HerooSection/herolock.png"
                alt="Hero Lock"
                width={450}
                height={450}
                className="w-full h-auto drop-shadow-[0_0_30px_rgba(124,255,0,0.3)]"
                priority
              />
            </div>
          </div>

          {/* Right Side Content */}
          <div className="flex-1 space-y-20 lg:space-y-32">
            {/* Top Right - We Build */}
            <div className="text-white space-y-4 lg:text-left">
              <h3 className="text-3xl md:text-4xl mb-4 font-semibold">We Build</h3>
              <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-md">
                Using modern frameworks, cloud-native infrastructure, and AI technologies, we build secure, high-performance software — from MVPs to enterprise platforms.
              </p>
            </div>

            {/* Bottom Right - We Scale */}
            <div className="text-white space-y-4 lg:text-left">
              <h3 className="text-3xl md:text-4xl mb-4 font-semibold">We Scale</h3>
              <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-md">
                We optimize, automate, and evolve systems using DevOps, analytics, and AI-driven insights to ensure your product scales smoothly with users, data, and demand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
