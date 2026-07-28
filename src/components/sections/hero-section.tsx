"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowDown } from 'lucide-react';
import { audioManager } from '@/lib/audio-manager';

function InteractiveName() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      onMouseEnter={() => {
        setIsHovered(true);
        try { audioManager.playClickSound(); } catch {}
      }}
      onMouseLeave={() => setIsHovered(false)}
      className="relative inline-block cursor-pointer select-none group"
    >
      <motion.span
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={`inline-block text-[#4ee6d8] transition-all duration-300 will-change-transform ${
          isHovered
            ? 'drop-shadow-[0_0_30px_rgba(78,230,216,1)] text-[#6efff0]'
            : 'drop-shadow-[0_0_15px_rgba(78,230,216,0.5)]'
        }`}
      >
        BAGUS SUPRIYANTO!
      </motion.span>

      {/* Floating Sparkles on Hover */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {[
          { top: '-20%', left: '5%', delay: 0 },
          { top: '-30%', left: '30%', delay: 0.15 },
          { top: '-25%', left: '60%', delay: 0.08 },
          { top: '-20%', left: '85%', delay: 0.2 },
          { top: '75%', left: '15%', delay: 0.1 },
          { top: '80%', left: '75%', delay: 0.25 },
        ].map((p, idx) => (
          <motion.div
            key={idx}
            animate={isHovered ? { opacity: [0.2, 1, 0.2], y: [0, -14, 0] } : { opacity: 0 }}
            transition={{ duration: 1.2, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
            style={{ top: p.top, left: p.left }}
            className="absolute bg-transparent z-30 flex items-center justify-center pointer-events-none"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="w-3 h-3 filter drop-shadow-[0_0_6px_rgba(254,240,138,0.9)]">
              <path d="M6 0L7.3 4.7L12 6L7.3 7.3L6 12L4.7 7.3L0 6L4.7 4.7L6 0Z" fill="#FEF08A" />
            </svg>
          </motion.div>
        ))}
      </div>
    </span>
  );
}

interface HeroSectionProps {
  onExploreWork: () => void;
}

const heroStyles = `
@keyframes twinkle {
  0%, 100% { opacity: 0.15; transform: scale(0.7) translateZ(0); }
  50% { opacity: 1; transform: scale(1.4) translateZ(0); }
}
@keyframes starburst {
  0%, 100% { opacity: 0.1; transform: scale(0.6) rotate(0deg) translateZ(0); }
  50% { opacity: 1; transform: scale(1.3) rotate(90deg) translateZ(0); }
}
@keyframes meteor {
  0% { transform: translate3d(0vw, 0vh, 0); opacity: 0; }
  11.5% { opacity: 1; transform: translate3d(20vw, 12.5vh, 0); }
  23% { transform: translate3d(40vw, 25vh, 0); opacity: 0; }
  100% { transform: translate3d(40vw, 25vh, 0); opacity: 0; }
}
@keyframes cloud-1 {
  0% { transform: translate3d(-20%, 0, 0); }
  100% { transform: translate3d(110%, 0, 0); }
}
@keyframes cloud-2 {
  0% { transform: translate3d(110%, 0, 0); }
  100% { transform: translate3d(-20%, 0, 0); }
}
@keyframes cloud-3 {
  0% { transform: translate3d(-15%, 0, 0); }
  100% { transform: translate3d(115%, 0, 0); }
}
@keyframes wave-1 {
  0% { transform: translate3d(-100%, 0, 0); }
  100% { transform: translate3d(100%, 0, 0); }
}
@keyframes wave-2 {
  0% { transform: translate3d(100%, 0, 0); }
  100% { transform: translate3d(-100%, 0, 0); }
}
@keyframes wave-3 {
  0% { transform: translate3d(-80%, 0, 0); }
  100% { transform: translate3d(120%, 0, 0); }
}
@keyframes moon-pulse {
  0%, 100% { opacity: 0.15; transform: scale(1) translateZ(0); }
  50% { opacity: 0.3; transform: scale(1.1) translateZ(0); }
}
.gpu-accel {
  will-change: transform, opacity;
}
`;

export const HeroSection: React.FC<HeroSectionProps> = React.memo(({ onExploreWork }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col bg-[#0a0e17] font-silkscreen overflow-hidden text-[#F8FAFC] w-full z-10"
    >
      <div className="relative w-full flex-1 overflow-hidden flex flex-col justify-between">
        <style>{heroStyles}</style>
        {/* Background Image */}
        <img
          src="/assets/game/hero-opening-bg.jpg"
          alt="16-Bit Pixel Art Night Coastal Scene"
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* ===== ANIMATED OVERLAY LAYERS ===== */}

        {/* TWINKLING STARS & STARBURSTS */}
        <div className="absolute inset-0 pointer-events-none z-[3]">
          {/* 35+ Twinkling Stars */}
          {[
            { x: '5%', y: '4%', size: 3, delay: 0, dur: 2.5, color: 'bg-white shadow-[0_0_6px_rgba(255,255,255,0.8)]' },
            { x: '12%', y: '14%', size: 2, delay: 0.8, dur: 3, color: 'bg-[#4ee6d8] shadow-[0_0_6px_rgba(78,230,216,0.8)]' },
            { x: '18%', y: '7%', size: 2.5, delay: 1.5, dur: 2.1, color: 'bg-white' },
            { x: '24%', y: '3%', size: 3.5, delay: 0.4, dur: 2.8, color: 'bg-[#fef08a] shadow-[0_0_8px_rgba(254,240,138,0.9)]' },
            { x: '30%', y: '18%', size: 2, delay: 2.1, dur: 3.2, color: 'bg-white' },
            { x: '36%', y: '5%', size: 2.5, delay: 1.1, dur: 2.3, color: 'bg-[#4ee6d8] shadow-[0_0_6px_rgba(78,230,216,0.8)]' },
            { x: '42%', y: '12%', size: 3, delay: 0.2, dur: 2.7, color: 'bg-white shadow-[0_0_6px_rgba(255,255,255,0.9)]' },
            { x: '48%', y: '3%', size: 2, delay: 1.7, dur: 3.5, color: 'bg-white' },
            { x: '54%', y: '16%', size: 2.5, delay: 0.6, dur: 2.4, color: 'bg-[#fef08a] shadow-[0_0_6px_rgba(254,240,138,0.8)]' },
            { x: '62%', y: '7%', size: 3, delay: 1.9, dur: 2.9, color: 'bg-[#4ee6d8] shadow-[0_0_8px_rgba(78,230,216,0.9)]' },
            { x: '69%', y: '13%', size: 2, delay: 0.3, dur: 3.1, color: 'bg-white' },
            { x: '75%', y: '4%', size: 3.5, delay: 1.4, dur: 2.2, color: 'bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)]' },
            { x: '82%', y: '17%', size: 2.5, delay: 2.3, dur: 2.6, color: 'bg-[#4ee6d8] shadow-[0_0_6px_rgba(78,230,216,0.8)]' },
            { x: '89%', y: '8%', size: 3, delay: 0.9, dur: 3.3, color: 'bg-[#fef08a] shadow-[0_0_6px_rgba(254,240,138,0.8)]' },
            { x: '95%', y: '15%', size: 2, delay: 1.6, dur: 2.7, color: 'bg-white' },

            /* Row 2 - Sky mid fill */
            { x: '3%', y: '22%', size: 2, delay: 0.7, dur: 3.5, color: 'bg-white' },
            { x: '9%', y: '28%', size: 2.5, delay: 1.3, dur: 2.4, color: 'bg-[#4ee6d8] shadow-[0_0_6px_rgba(78,230,216,0.8)]' },
            { x: '16%', y: '24%', size: 2, delay: 2.5, dur: 2.8, color: 'bg-white' },
            { x: '27%', y: '29%', size: 3, delay: 0.5, dur: 3.4, color: 'bg-[#fef08a] shadow-[0_0_6px_rgba(254,240,138,0.8)]' },
            { x: '34%', y: '23%', size: 2, delay: 1.8, dur: 2.2, color: 'bg-white' },
            { x: '46%', y: '26%', size: 2.5, delay: 1.0, dur: 3.0, color: 'bg-[#4ee6d8] shadow-[0_0_6px_rgba(78,230,216,0.8)]' },
            { x: '58%', y: '22%', size: 2, delay: 2.2, dur: 2.5, color: 'bg-white' },
            { x: '65%', y: '28%', size: 3, delay: 0.1, dur: 3.2, color: 'bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)]' },
            { x: '72%', y: '21%', size: 2, delay: 1.7, dur: 2.9, color: 'bg-[#4ee6d8] shadow-[0_0_6px_rgba(78,230,216,0.8)]' },
            { x: '83%', y: '27%', size: 2.5, delay: 0.4, dur: 2.3, color: 'bg-[#fef08a] shadow-[0_0_6px_rgba(254,240,138,0.8)]' },
            { x: '91%', y: '25%', size: 2, delay: 2.0, dur: 3.1, color: 'bg-white' },

            /* Extra scattered small stars */
            { x: '14%', y: '35%', size: 1.5, delay: 0.9, dur: 2.6, color: 'bg-white' },
            { x: '21%', y: '33%', size: 2, delay: 1.6, dur: 3.3, color: 'bg-[#4ee6d8]' },
            { x: '39%', y: '34%', size: 1.5, delay: 2.4, dur: 2.1, color: 'bg-white' },
            { x: '51%', y: '31%', size: 2, delay: 0.8, dur: 2.7, color: 'bg-[#fef08a]' },
            { x: '77%', y: '34%', size: 1.5, delay: 1.1, dur: 3.4, color: 'bg-white' },
            { x: '87%', y: '32%', size: 2, delay: 2.7, dur: 2.3, color: 'bg-[#4ee6d8]' },
          ].map((star, i) => (
            <div
              key={`star-${i}`}
              style={{
                left: star.x,
                top: star.y,
                width: star.size,
                height: star.size,
                animation: `twinkle ${star.dur}s ease-in-out ${star.delay}s infinite`
              }}
              className={`absolute rounded-full gpu-accel ${star.color}`}
            />
          ))}

          {/* Sparkling Starbursts (+ shape) */}
          {[
            { x: '15%', y: '9%', size: 16, delay: 0.5 },
            { x: '50%', y: '6%', size: 18, delay: 1.8 },
            { x: '79%', y: '10%', size: 16, delay: 2.7 },
          ].map((spark, i) => (
            <div
              key={`spark-${i}`}
              style={{
                left: spark.x,
                top: spark.y,
                width: spark.size,
                height: spark.size,
                animation: `starburst 3.5s ease-in-out ${spark.delay}s infinite`
              }}
              className="absolute flex items-center justify-center text-[#4ee6d8] drop-shadow-[0_0_10px_rgba(78,230,216,0.9)] gpu-accel"
            >
              ✦
            </div>
          ))}

          {/* Shooting Star / Meteor Streak */}
          <div
            style={{
              left: '20%',
              top: '5%',
              animation: 'meteor 7.8s ease-out infinite'
            }}
            className="absolute w-24 h-[2px] bg-gradient-to-r from-transparent via-[#4ee6d8] to-white -rotate-[25deg] shadow-[0_0_12px_rgba(78,230,216,1)] gpu-accel"
          />
        </div>

        {/* DRIFTING CLOUDS (slow horizontal movement) */}
        <div className="absolute inset-0 pointer-events-none z-[3] overflow-hidden">
          {/* Cloud 1 - large, slow */}
          <div
            style={{ animation: 'cloud-1 80s linear infinite' }}
            className="absolute top-[8%] opacity-20 gpu-accel"
          >
            <div className="w-48 h-10 bg-gradient-to-r from-transparent via-[#94A3B8] to-transparent rounded-full blur-md" />
          </div>

          {/* Cloud 2 - medium, medium speed */}
          <div
            style={{ animation: 'cloud-2 60s linear 10s infinite' }}
            className="absolute top-[14%] opacity-15 gpu-accel"
          >
            <div className="w-36 h-8 bg-gradient-to-r from-transparent via-[#CBD5E1] to-transparent rounded-full blur-md" />
          </div>

          {/* Cloud 3 - small, faster */}
          <div
            style={{ animation: 'cloud-3 50s linear 25s infinite' }}
            className="absolute top-[20%] opacity-10 gpu-accel"
          >
            <div className="w-28 h-6 bg-gradient-to-r from-transparent via-white to-transparent rounded-full blur-sm" />
          </div>
        </div>

        {/* OCEAN WATER SHIMMER (bottom area) */}
        <div className="absolute bottom-0 inset-x-0 h-[35%] pointer-events-none z-[3] overflow-hidden">
          {/* Wave shimmer line 1 */}
          <div
            style={{ animation: 'wave-1 8s linear infinite' }}
            className="absolute bottom-[55%] w-full h-[1px] bg-gradient-to-r from-transparent via-[#4ee6d8]/20 to-transparent gpu-accel"
          />
          {/* Wave shimmer line 2 */}
          <div
            style={{ animation: 'wave-2 10s linear 2s infinite' }}
            className="absolute bottom-[45%] w-full h-[1px] bg-gradient-to-r from-transparent via-[#38BDF8]/15 to-transparent gpu-accel"
          />
          {/* Wave shimmer line 3 */}
          <div
            style={{ animation: 'wave-3 12s linear 4s infinite' }}
            className="absolute bottom-[35%] w-full h-[1px] bg-gradient-to-r from-transparent via-[#4ee6d8]/15 to-transparent gpu-accel"
          />
        </div>

        {/* MOON GLOW PULSE */}
        <div
          style={{ animation: 'moon-pulse 4s ease-in-out infinite' }}
          className="absolute top-[5%] right-[18%] w-20 h-20 rounded-full bg-[#D4A853]/30 blur-xl pointer-events-none z-[3] gpu-accel"
        />

        {/* Edge fades */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#0a0e17] to-transparent pointer-events-none z-[4]" />
        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#0a0e17]/40 to-transparent pointer-events-none z-[4]" />
        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#0a0e17]/40 to-transparent pointer-events-none z-[4]" />

        {/* Center darkening for text readability */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,14,23,0.45)_0%,rgba(10,14,23,0.15)_70%)] pointer-events-none z-[4]" />

        {/* ===== TOP SECTION LABEL ===== */}
        <div className="relative z-10 flex items-center justify-between px-4 sm:px-6 pt-20 pb-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#4ee6d8] animate-pulse" />
            <span className="text-xs sm:text-sm text-[#4ee6d8] font-bold tracking-widest uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              1. OPENING
            </span>
          </div>
          <div className="text-[10px] sm:text-xs text-[#94A3B8] font-mono drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            <span className="sm:hidden">KEPRI • ID</span>
            <span className="hidden sm:inline">KEPULAUAN RIAU • INDONESIA</span>
          </div>
        </div>

        {/* ===== CENTERED TEXT OVERLAY ===== */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 gap-5">

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0a0e17]/70 border-2 border-[#4ee6d8] text-xs text-[#4ee6d8] font-bold shadow-[3px_3px_0px_#000]"
          >
            <Sparkles className="w-4 h-4 text-[#4ee6d8]" />
            <span>FRONTEND ENGINEER</span>
          </motion.div>



          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-pixel text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-[#F8FAFC] tracking-tight leading-[1.15] text-shadow-pixel drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]"
          >
            HALO, NAMAKU<br />
            <InteractiveName />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-xs sm:text-sm text-[#CBD5E1] font-sans font-medium leading-relaxed max-w-xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          >
            Saya seorang Frontend Engineer yang berfokus membangun website dan aplikasi web modern yang rapi, responsif, dan mudah digunakan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <button
              onClick={() => {
                audioManager.playCoinSound();
                onExploreWork();
              }}
              className="pixel-btn px-6 py-3.5 text-xs sm:text-sm font-black inline-flex items-center gap-2 shadow-[0_0_25px_rgba(78,230,216,0.5)] cursor-pointer"
            >
              <span>EXPLORE MY PORTFOLIO ▶</span>
              <ArrowDown className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        {/* ===== BOTTOM STATUS BAR ===== */}
        <div className="relative z-10 flex items-center justify-between px-4 sm:px-6 py-3 text-[10px] sm:text-xs text-[#94A3B8]/80">
          <span className="text-[#4ee6d8] font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">GULF OS V2.6</span>
          <span className="tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] hidden sm:inline">SCROLL TO BEGIN YOUR JOURNEY</span>
        </div>
      </div>

    </section>
  );
});
