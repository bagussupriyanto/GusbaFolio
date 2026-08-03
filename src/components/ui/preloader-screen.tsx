"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    }, 50);

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
          className="fixed inset-0 z-[9999] bg-[#161616] text-[#FAF9F6] flex flex-col items-center justify-center select-none font-sans overflow-hidden"
        >
          {/* Welcome Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="text-center space-y-4"
          >
            <div className="font-serif-editorial text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              SELAMAT DATANG DI PORTOFOLIO SAYA<span className="text-[#B89355]">.</span>
            </div>
          </motion.div>

          {/* Bottom Progress */}
          <div className="absolute bottom-8 sm:bottom-14 left-6 right-6 sm:left-14 sm:right-14 space-y-3">
            <div className="flex items-end justify-between">
              <div className="text-[9px] sm:text-[10px] font-mono text-[#666666] tracking-widest uppercase">
                BAGUS SUPRIYANTO
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
