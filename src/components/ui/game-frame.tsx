"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface GameFrameProps {
  id?: string;
  sectionNumber: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export const GameFrame: React.FC<GameFrameProps> = ({
  id,
  sectionNumber,
  title,
  subtitle,
  children,
  className = "",
}) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
      className={`relative min-h-[calc(100vh-4.5rem)] flex flex-col justify-between p-4 sm:p-8 space-y-6 font-silkscreen overflow-hidden text-[#F8FAFC] w-full max-w-6xl mx-auto z-10 ${className}`}
    >

      {/* Top Frame Label Bar */}
      <div className="flex items-center justify-between border-b-2 border-[#4ee6d8]/40 pb-3.5 relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#4ee6d8] animate-pulse" />
          <span className="text-xs sm:text-sm text-[#4ee6d8] font-bold tracking-widest uppercase">
            {sectionNumber}
          </span>
        </div>

        {subtitle && (
          <div className="text-[10px] sm:text-xs text-[#94A3B8] font-mono">
            {subtitle}
          </div>
        )}
      </div>

      {/* Main Content Body (Vertically Centered in 1-Screen Viewport) */}
      <div className="relative z-10 space-y-6 my-auto flex flex-col justify-center">
        {title && (
          <div className="space-y-1">
            <h2 className="font-pixel text-2xl sm:text-4xl text-[#4ee6d8]">
              {title}
            </h2>
          </div>
        )}
        {children}
      </div>

      {/* Bottom Frame Status Bar */}
      <div className="flex items-center justify-between border-t border-[#4ee6d8]/30 pt-3 text-[10px] text-[#94A3B8] relative z-10">
        <div className="text-[#4ee6d8] font-bold">16-BIT GAME LEVEL STAGE</div>
        <div>BAGUS SUPRIYANTO • PORTFOLIO</div>
      </div>
    </motion.section>
  );
};
