"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const PreloaderScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Relaxed, cinematic counter animation (~2.8 seconds total duration)
    let current = 0;
    const interval = setInterval(() => {
      const step = Math.floor(Math.random() * 3) + 2;
      current += step;
      if (current >= 100) {
        current = 100;
        setProgress(100);
        clearInterval(interval);
        setTimeout(() => setIsDone(true), 700);
      } else {
        setProgress(current);
      }
    }, 55);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {!isDone && (
        <motion.div
          key="preloader"
          initial={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-[#161616] text-[#FAF9F6] flex flex-col justify-between p-6 sm:p-14 select-none font-sans overflow-hidden"
        >
          {/* Top Bar Info */}
          <div className="flex items-center justify-between text-[10px] sm:text-xs font-mono tracking-widest text-[#888888] uppercase">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B89355] animate-pulse" />
              <span>BAGUS SUPRIYANTO</span>
            </div>
            <div className="hidden sm:block">S1 IT GRADUATE • AI PRODUCT ENGINEER</div>
          </div>

          {/* Center Welcome Message & Monogram */}
          <div className="my-auto space-y-5 sm:space-y-6 max-w-2xl">
            {/* Monogram */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="font-serif-editorial text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white"
            >
              BS<span className="text-[#B89355]">.</span>
            </motion.div>

            {/* Welcome Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
              className="font-serif-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug"
            >
              Welcome to My Portfolio<span className="text-[#B89355]">.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" }}
              className="text-[11px] sm:text-sm font-mono text-[#999999] uppercase tracking-widest leading-relaxed"
            >
              Saya Bagus Supriyanto — Full-Stack Web Engineer
              <br className="hidden sm:block" />
              {' '}yang membangun aplikasi modern & platform AI.
            </motion.p>

            {/* Quick Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-3 sm:gap-5 pt-2"
            >
              <div className="px-3 py-1.5 rounded-full bg-[#222222] border border-[#333333] text-[9px] sm:text-[10px] font-mono text-[#CCCCCC] tracking-wider">
                📘 S.Kom UTY 2024
              </div>
              <div className="px-3 py-1.5 rounded-full bg-[#222222] border border-[#333333] text-[9px] sm:text-[10px] font-mono text-[#CCCCCC] tracking-wider">
                ⚡ Next.js • TypeScript • Supabase
              </div>
              <div className="px-3 py-1.5 rounded-full bg-[#222222] border border-[#333333] text-[9px] sm:text-[10px] font-mono text-emerald-400 tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                AVAILABLE FOR HIRE
              </div>
            </motion.div>
          </div>

          {/* Bottom Counter & Progress Bar */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-end justify-between">
              <div className="text-[9px] sm:text-[10px] font-mono text-[#666666] tracking-widest uppercase">
                PREPARING YOUR EXPERIENCE
              </div>
              <div className="font-mono text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tighter">
                {String(progress).padStart(3, '0')}%
              </div>
            </div>

            {/* Hairline Progress Bar */}
            <div className="w-full h-[2px] bg-[#2A2A2A] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#B89355] to-[#D4B06A]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
