"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Zap, ShieldCheck, Sparkles } from 'lucide-react';
import { SpotlightCard } from '@/components/ui/spotlight-card';

gsap.registerPlugin(ScrollTrigger);

export const ValueSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const bentoGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".bento-card-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bentoGridRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="value"
      aria-label="Value Proposition & Capabilities Section"
      className="relative py-20 lg:py-28 px-4 sm:px-6 border-t border-slate-200 dark:border-white/[0.06] bg-slate-50 dark:bg-[#0A0A0A] transition-colors duration-300"
    >
      <div className="w-full max-w-6xl mx-auto space-y-12">
        
        {/* Section Header (Matching Screenshot 3 Marquee Text) */}
        <div ref={headlineRef} className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 dark:border-white/[0.08] pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-orange-500/10 text-orange-600 dark:text-orange-400 border-2 border-orange-500/25 shadow-[2px_2px_0px_rgba(249,115,22,0.15)]">
              <Sparkles className="w-3.5 h-3.5 text-orange-500" />
              <span>CORE CAPABILITIES</span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-slate-900 dark:text-slate-100 tracking-tight">
              WHAT I DO.
            </h2>
          </div>
          <p className="font-sans text-sm text-slate-600 dark:text-slate-400 max-w-md">
            Membangun produk web modern yang cepat, teruji, dan memberikan dampak bisnis nyata.
          </p>
        </div>

        {/* Bento Grid with Cyber Corner Brackets ┌ ┐ └ ┘ (Matching Screenshot 3) */}
        <div ref={bentoGridRef} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: Product Engineering */}
          <div className="bento-card-item md:col-span-6 relative group">
            {/* Cyber Brackets */}
            <span className="absolute -top-1 -left-1 text-slate-500 font-mono text-sm pointer-events-none">┌</span>
            <span className="absolute -top-1 -right-1 text-slate-500 font-mono text-sm pointer-events-none">┐</span>
            <span className="absolute -bottom-1 -left-1 text-slate-500 font-mono text-sm pointer-events-none">└</span>
            <span className="absolute -bottom-1 -right-1 text-slate-500 font-mono text-sm pointer-events-none">┘</span>

            <SpotlightCard className="h-full p-6 sm:p-8 space-y-4 bg-[#141414]/90 backdrop-blur-xl border-dashed border-slate-700/60">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="font-display font-extrabold text-xl text-slate-100 uppercase tracking-wide">
                FULL-STACK & PRODUCT ENGINEERING
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                Turning ideas into production applications using Next.js 16, TypeScript, Supabase, and PostgreSQL. Focused on clean architecture and seamless user experiences.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono text-slate-400">
                <span className="px-2.5 py-1 rounded-lg bg-white/[0.04] border-2 border-white/10 font-bold">Next.js 16</span>
                <span className="px-2.5 py-1 rounded-lg bg-white/[0.04] border-2 border-white/10 font-bold">TypeScript</span>
                <span className="px-2.5 py-1 rounded-lg bg-white/[0.04] border-2 border-white/10 font-bold">Supabase</span>
              </div>
            </SpotlightCard>
          </div>

          {/* Card 2: Accelerated Development */}
          <div className="bento-card-item md:col-span-6 relative group">
            {/* Cyber Brackets */}
            <span className="absolute -top-1 -left-1 text-slate-500 font-mono text-sm pointer-events-none">┌</span>
            <span className="absolute -top-1 -right-1 text-slate-500 font-mono text-sm pointer-events-none">┐</span>
            <span className="absolute -bottom-1 -left-1 text-slate-500 font-mono text-sm pointer-events-none">└</span>
            <span className="absolute -bottom-1 -right-1 text-slate-500 font-mono text-sm pointer-events-none">┘</span>

            <SpotlightCard className="h-full p-6 sm:p-8 space-y-4 bg-[#141414]/90 backdrop-blur-xl border-dashed border-slate-700/60">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-display font-extrabold text-xl text-slate-100 uppercase tracking-wide">
                ACCELERATED AI WORKFLOW
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                Leveraging modern AI tools to accelerate architecture research, boilerplate generation, and code refactoring while maintaining high engineering quality.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono text-slate-400">
                <span className="px-2.5 py-1 rounded-lg bg-white/[0.04] border-2 border-white/10 font-bold">Gemini API</span>
                <span className="px-2.5 py-1 rounded-lg bg-white/[0.04] border-2 border-white/10 font-bold">Cursor AI</span>
                <span className="px-2.5 py-1 rounded-lg bg-white/[0.04] border-2 border-white/10 font-bold">Rapid Iteration</span>
              </div>
            </SpotlightCard>
          </div>

          {/* Card 3: Built For Real Users */}
          <div className="bento-card-item md:col-span-12 relative group">
            {/* Cyber Brackets */}
            <span className="absolute -top-1 -left-1 text-slate-500 font-mono text-sm pointer-events-none">┌</span>
            <span className="absolute -top-1 -right-1 text-slate-500 font-mono text-sm pointer-events-none">┐</span>
            <span className="absolute -bottom-1 -left-1 text-slate-500 font-mono text-sm pointer-events-none">└</span>
            <span className="absolute -bottom-1 -right-1 text-slate-500 font-mono text-sm pointer-events-none">┘</span>

            <SpotlightCard className="p-6 sm:p-8 space-y-4 bg-[#141414]/90 backdrop-blur-xl border-dashed border-slate-700/60">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-display font-extrabold text-xl text-slate-100 uppercase tracking-wide">
                BUILT FOR REAL USERS & PRODUCTION STANDARDS
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                Every application is engineered with high performance targets, SEO optimizations, responsive mobile layouts, and production deployment stability.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono text-slate-400">
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">Lighthouse 95+ Score</span>
                <span className="px-2.5 py-1 rounded-lg bg-white/[0.04] border-2 border-white/10 font-bold">Vercel Deployment</span>
                <span className="px-2.5 py-1 rounded-lg bg-white/[0.04] border-2 border-white/10 font-bold">Dynamic OpenGraph SEO</span>
              </div>
            </SpotlightCard>
          </div>

        </div>

      </div>
    </section>
  );
};
