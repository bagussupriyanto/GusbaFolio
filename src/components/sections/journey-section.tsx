"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const JourneySection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const careerExperiences = [
    {
      year: "NOW",
      role: "AI-Assisted Developer",
      company: "Product & Web Engineering",
      description: "Membangun sistem web produksi modern (Company Profile CMS, POS System, & Invoice System) menggunakan Next.js 16, Supabase, dan TypeScript.",
      isCurrent: true,
    },
    {
      year: "2024",
      role: "Instrument Control",
      company: "PT BFCI (Under PT Bintan Alumina)",
      description: "Pemeliharaan & kalibrasi instrumen proses (sensor, transmitter, control valve) serta monitoring sistem instrumentasi dan wiring P&ID.",
      isCurrent: false,
    },
    {
      year: "2024",
      role: "Washing Boats & Yacht",
      company: "Freelance Sentosa Cove (Singapura)",
      description: "Perawatan & pencucian kapal/yacht di Sentosa Cove Singapura sesuai standar kebersihan dan keselamatan kerja (K3).",
      isCurrent: false,
    },
    {
      year: "2024",
      role: "S1 Teknologi Informatika",
      company: "Universitas Teknologi Yogyakarta (UTY)",
      description: "Lulus S1 UTY (2024). Skripsi: Enkripsi dan Deskripsi Data Metode DES. Sertifikasi: Microsoft Specialist Certiport.",
      isCurrent: false,
    },
    {
      year: "2023",
      role: "Operator Produksi WVC",
      company: "PT Pertama Precision Indonesia",
      description: "Pemasangan plug/konektor kabel, crimping, dan perakitan wiring sesuai SOP & K3 industri.",
      isCurrent: false,
    },
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        ".timeline-row-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="journey"
      aria-label="My career & experience section"
      className="relative py-24 lg:py-32 px-4 sm:px-6 border-t border-slate-200 dark:border-white/[0.06] bg-slate-50 dark:bg-[#0A0A0A] overflow-hidden transition-colors duration-300"
    >
      {/* Signature Blue Radial Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-5xl mx-auto space-y-16 relative z-10">
        
        {/* Editorial Section Headline */}
        <div ref={titleRef} className="text-center space-y-2">
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-slate-900 dark:text-slate-100 tracking-tight">
            My career & <span className="text-orange-500">experience.</span>
          </h2>
        </div>

        {/* 3-Column Timeline Layout */}
        <div ref={timelineRef} className="relative space-y-12 sm:space-y-16">
          
          {/* Vertical Glowing Line */}
          <div className="hidden md:block absolute left-[38%] top-4 bottom-4 w-[2px] bg-orange-500/30 pointer-events-none">
            <div className="sticky top-1/2 w-3 h-3 -left-[5px] rounded-full bg-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.4)] animate-pulse" />
          </div>

          {careerExperiences.map((exp, index) => (
            <div
              key={index}
              className="timeline-row-item grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center"
            >
              
              {/* Left Column: Role & Company */}
              <div className="md:col-span-4 md:text-right space-y-1">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-slate-100 tracking-tight">
                  {exp.role}
                </h3>
                <div className="text-xs font-mono text-orange-500 dark:text-orange-400 font-medium">
                  {exp.company}
                </div>
              </div>

              {/* Center Column: Year Badge */}
              <div className="md:col-span-3 text-left md:text-center">
                <span className={`font-display font-black text-3xl sm:text-5xl tracking-tight ${
                  exp.isCurrent
                    ? 'text-slate-900 dark:text-slate-100 drop-shadow-[0_0_20px_rgba(255,107,0,0.4)]'
                    : 'text-slate-400 dark:text-slate-500'
                }`}>
                  {exp.year}
                </span>
              </div>

              {/* Right Column: Description Paragraph */}
              <div className="md:col-span-5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                {exp.description}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
