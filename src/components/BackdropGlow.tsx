import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const BackdropGlow: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const glow1Ref = useRef<HTMLDivElement>(null);
  const glow2Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Follow scroll with smooth inertia
    ScrollTrigger.create({
      start: 'top top',
      end: 'max',
      onUpdate: (self) => {
        const scrollProgress = self.progress; // 0 to 1
        const scrollY = self.scroll();

        if (glow1Ref.current) {
          gsap.to(glow1Ref.current, {
            y: scrollY * 0.45,
            x: Math.sin(scrollProgress * Math.PI * 2) * 80,
            scale: 1 + Math.sin(scrollProgress * Math.PI) * 0.25,
            opacity: 0.65 + Math.cos(scrollProgress * Math.PI) * 0.2,
            duration: 1.2,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        }

        if (glow2Ref.current) {
          gsap.to(glow2Ref.current, {
            y: scrollY * 0.35 + 200,
            x: -Math.cos(scrollProgress * Math.PI * 2) * 70,
            scale: 1 + Math.cos(scrollProgress * Math.PI) * 0.2,
            opacity: 0.45 + Math.sin(scrollProgress * Math.PI) * 0.25,
            duration: 1.5,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        }
      },
    });
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* Primary Amber Foundry Glow */}
      <div
        ref={glow1Ref}
        className="absolute -top-40 left-1/4 w-[650px] h-[650px] rounded-full blur-[140px] opacity-60 mix-blend-screen transition-opacity duration-700"
        style={{
          background: 'radial-gradient(circle, rgba(255, 94, 0, 0.35) 0%, rgba(255, 160, 0, 0.15) 50%, transparent 75%)',
        }}
      />

      {/* Secondary Cyan / Blue Industrial Glow */}
      <div
        ref={glow2Ref}
        className="absolute top-1/3 -right-20 w-[550px] h-[550px] rounded-full blur-[150px] opacity-40 mix-blend-screen transition-opacity duration-700"
        style={{
          background: 'radial-gradient(circle, rgba(11, 99, 246, 0.25) 0%, rgba(0, 240, 255, 0.12) 50%, transparent 75%)',
        }}
      />
    </div>
  );
};
