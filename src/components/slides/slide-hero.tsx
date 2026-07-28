"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

interface SlideHeroProps {
  onExploreWork: () => void;
}

export const SlideHero: React.FC<SlideHeroProps> = ({ onExploreWork }) => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen lg:h-screen snap-start snap-always flex flex-col justify-between px-6 sm:px-12 lg:px-20 py-20 sm:py-24 bg-slate-50 dark:bg-[#0A0A0A] text-slate-900 dark:text-slate-100 transition-colors duration-300 overflow-hidden"
    >
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/10 dark:bg-orange-500/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Slide Index Badge */}
      <div className="text-xs font-mono font-bold tracking-widest text-slate-700 dark:text-slate-400 uppercase">
        01 / PRESENTATION HERO
      </div>

      {/* Central Content */}
      <motion.div
        initial={{ opacity: 0, y: 70, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.35 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-5xl mx-auto my-auto space-y-8 z-10"
      >
        
        {/* Name Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-mono font-bold text-orange-600 dark:text-orange-400">
            <span>FULLSTACK & FRONTEND ENGINEER</span>
          </div>

          <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[1.05] text-slate-900 dark:text-slate-100">
            BAGUS SUPRIYANTO
          </h1>
        </div>

        {/* Role & Positioning Statement */}
        <div className="space-y-4 max-w-2xl">
          <p className="font-sans text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-800 dark:text-slate-200 tracking-tight leading-snug">
            Product-Focused Frontend Engineer
          </p>
          <p className="font-sans text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
            Building digital products that solve real business problems.
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-4">
          <button
            onClick={onExploreWork}
            className="group inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-display font-bold text-sm tracking-wide shadow-lg shadow-orange-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none"
          >
            <span>View My Work</span>
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
          </button>
        </div>

      </motion.div>

      {/* Bottom Hint */}
      <div className="flex items-center justify-between text-xs font-mono text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-white/10 pt-4">
        <span>SCROLL DOWN TO PRESENTATION SLIDES</span>
        <span>INDONESIA • S1 UTY</span>
      </div>
    </section>
  );
};
