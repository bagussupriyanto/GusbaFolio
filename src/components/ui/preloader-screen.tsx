"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GREETINGS = [
  { lang: "en", text: "WELCOME TO MY PORTFOLIO" },
  { lang: "id", text: "SELAMAT DATANG DI PORTOFOLIO SAYA" },
  { lang: "zh", text: "欢迎来到我的作品集" },
  { lang: "en", text: "WELCOME TO MY PORTFOLIO" },
];

export const PreloaderScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      const step = Math.floor(Math.random() * 3) + 2;
      current += step;
      if (current >= 100) {
        current = 100;
        setProgress(100);
        clearInterval(interval);
        setTimeout(() => setIsDone(true), 600);
      } else {
        setProgress(current);
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  // Determine current greeting based on progress percentage
  const greetingIndex = Math.min(
    Math.floor((progress / 100) * GREETINGS.length),
    GREETINGS.length - 1
  );
  const currentGreeting = GREETINGS[greetingIndex];

  return (
    <AnimatePresence mode="wait">
      {!isDone && (
        <motion.div
          key="preloader"
          initial={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-[#161616] text-[#FAF9F6] flex flex-col items-center justify-center select-none font-sans overflow-hidden"
        >
          {/* Welcome Text with Dynamic Multilingual Transition */}
          <div className="text-center px-4 max-w-3xl min-h-[90px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentGreeting.text}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="font-serif-editorial text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white uppercase"
              >
                {currentGreeting.text}<span className="text-[#B89355]">.</span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Progress Bar & Branding */}
          <div className="absolute bottom-8 sm:bottom-14 left-6 right-6 sm:left-14 sm:right-14 space-y-3">
            <div className="flex items-end justify-between">
              <div className="flex items-center gap-2 text-[9px] sm:text-[10px] font-mono text-[#888888] tracking-widest uppercase">
                <span className="text-white font-bold">BAGUS SUPRIYANTO</span>
                <span>•</span>
                <span className="text-[#B89355] font-bold">{currentGreeting.lang.toUpperCase()}</span>
              </div>
              <div className="font-mono text-2xl sm:text-4xl font-bold text-white tracking-tighter">
                {String(progress).padStart(3, '0')}%
              </div>
            </div>
            <div className="w-full h-[2px] bg-[#2A2A2A] rounded-full overflow-hidden">
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
