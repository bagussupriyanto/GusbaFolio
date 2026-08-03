"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const PreloaderScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Fast, smooth counter animation
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 12) + 6;
      if (current >= 100) {
        current = 100;
        setProgress(100);
        clearInterval(interval);
        setTimeout(() => setIsDone(true), 400);
      } else {
        setProgress(current);
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {!isDone && (
        <motion.div
          key="preloader"
          initial={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-[#161616] text-[#FAF9F6] flex flex-col justify-between p-8 sm:p-14 select-none font-sans overflow-hidden"
        >
          {/* Top Bar Info */}
          <div className="flex items-center justify-between text-xs font-mono tracking-widest text-[#888888] uppercase">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B89355] animate-pulse" />
              <span>BAGUS SUPRIYANTO</span>
            </div>
            <div>AI PRODUCT ENGINEER</div>
          </div>

          {/* Center Monogram & Brand Statement */}
          <div className="my-auto space-y-6 max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif-editorial text-5xl sm:text-7xl font-bold tracking-tight text-white"
            >
              BS<span className="text-[#B89355]">.</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xs sm:text-sm font-mono text-[#AAAAAA] uppercase tracking-widest leading-relaxed"
            >
              Building modern web applications <br />
              & AI-powered digital products.
            </motion.p>
          </div>

          {/* Bottom Counter & Progress Bar */}
          <div className="space-y-4">
            <div className="flex items-end justify-between">
              <div className="text-[10px] font-mono text-[#666666] tracking-widest uppercase">
                INITIALIZING WORKSPACE
              </div>
              <div className="font-mono text-4xl sm:text-6xl font-bold text-white tracking-tighter">
                {String(progress).padStart(3, '0')}%
              </div>
            </div>

            {/* Hairline Progress Bar */}
            <div className="w-full h-[2px] bg-[#333333] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#B89355]"
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
