"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Sparkles } from 'lucide-react';
import { DEVELOPER_DATA } from '@/lib/constants';

export const SlideAbout: React.FC = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen lg:h-screen snap-start snap-always flex flex-col justify-between px-6 sm:px-12 lg:px-20 py-20 sm:py-24 bg-slate-50 dark:bg-[#0A0A0A] text-slate-900 dark:text-slate-100 transition-colors duration-300 overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[450px] h-[450px] bg-sky-500/10 dark:bg-sky-500/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Slide Index Header */}
      <div className="text-xs font-mono font-bold tracking-widest text-slate-700 dark:text-slate-400 uppercase z-10">
        05 / ABOUT ME
      </div>

      {/* Presentation Content */}
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.35 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-4xl mx-auto my-auto space-y-10 z-10"
      >
        
        <div className="space-y-4">
          <div className="text-xs font-mono text-sky-600 dark:text-sky-400 tracking-wider uppercase font-extrabold">
            THE ENGINEER BEHIND THE PRODUCTS
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl text-slate-900 dark:text-slate-100 tracking-tight leading-[1.1]">
            Bagus Supriyanto
          </h2>
        </div>

        {/* Minimal 3-Line Presentation Items */}
        <div className="space-y-6 text-lg sm:text-2xl text-slate-800 dark:text-slate-200 font-sans leading-relaxed">
          {/* Line 1: Location */}
          <div className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#141414] border border-slate-200 dark:border-white/10 shadow-sm transition-colors">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="font-semibold text-slate-900 dark:text-slate-100">
              Based in Indonesia ({DEVELOPER_DATA.location}).
            </span>
          </div>

          {/* Line 2: Degree */}
          <div className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#141414] border border-slate-200 dark:border-white/10 shadow-sm transition-colors">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-500 flex items-center justify-center shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <span className="font-semibold text-slate-900 dark:text-slate-100">
              Informatics Engineering Graduate — UTY (2024).
            </span>
          </div>

          {/* Line 3: Focus */}
          <div className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#141414] border border-slate-200 dark:border-white/10 shadow-sm transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="font-semibold text-slate-900 dark:text-slate-100">
              Focused on building practical digital products using modern web technologies and AI-assisted workflows.
            </span>
          </div>
        </div>

      </motion.div>

      {/* Bottom Footer */}
      <div className="flex items-center justify-between text-xs font-mono text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-white/10 pt-4 z-10">
        <span>NEXT SLIDE ↓</span>
        <span>BACKGROUND & EDUCATION</span>
      </div>
    </section>
  );
};
