"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GREETINGS = [
  { code: "EN", text: "HELLO", subtext: "WELCOME TO MY PORTFOLIO" },
  { code: "ID", text: "HALO", subtext: "SELAMAT DATANG DI PORTOFOLIO SAYA" },
  { code: "ES", text: "HOLA", subtext: "BIENVENIDO A MI PORTAFOLIO" },
  { code: "FR", text: "BONJOUR", subtext: "BIENVENUE SUR MON PORTFOLIO" },
  { code: "JP", text: "ようこそ", subtext: "ポートフォリオへようこそ" },
  { code: "ZH", text: "你好", subtext: "欢迎来到我的作品集" },
  { code: "DE", text: "HALLO", subtext: "WILLKOMMEN ZU MEINEM PORTFOLIO" },
  { code: "IT", text: "CIAO", subtext: "BENVENUTO NEL MIO PORTAFOGLIO" },
  { code: "EN", text: "WELCOME", subtext: "WELCOME TO MY PORTFOLIO" },
];

export const PreloaderScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current >= 100) {
        current = 100;
        setProgress(100);
        clearInterval(interval);
        setTimeout(() => setIsDone(true), 700);
      } else {
        setProgress(current);
      }
    }, 42);

    return () => clearInterval(interval);
  }, []);

  // Gold Matrix Rain Canvas Animation Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const chars = '0123456789ABCDEFGHJKLMNPQRSTUVWXYZ<>/{}=+*';
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(10, 10, 10, 0.15)';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = '#B89355';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

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
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-[#0A0A0A] text-[#FAF9F6] flex flex-col items-center justify-center select-none font-sans overflow-hidden"
        >
          {/* HTML5 Video Backdrop (Valid Mixkit & Coverr CDN Video URLs) */}
          <div className="absolute inset-0 z-0 opacity-40 pointer-events-none overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover mix-blend-screen filter contrast-125"
            >
              <source
                src="https://assets.mixkit.co/videos/preview/mixkit-code-running-on-a-computer-screen-40439-large.mp4"
                type="video/mp4"
              />
              <source
                src="https://cdn.coverr.co/videos/coverr-typing-code-on-computer-5231/1080p.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-transparent to-[#0A0A0A]/90" />
          </div>

          {/* Matrix Gold Rain Code Stream Canvas */}
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-25 pointer-events-none z-0" />

          {/* Ambient Background Radial Glow */}
          <div className="absolute w-96 h-96 rounded-full bg-[#B89355]/20 blur-[130px] pointer-events-none z-0" />

          {/* iPhone Setup Style Welcome Sequence */}
          <div className="relative z-10 text-center px-4 max-w-4xl min-h-[160px] flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentGreeting.text}
                initial={{ opacity: 0, y: 16, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 1.05 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center space-y-3"
              >
                {/* Main Iconic Word */}
                <div className="font-serif-editorial text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase drop-shadow-md">
                  {currentGreeting.text}<span className="text-[#B89355]">.</span>
                </div>

                {/* Subtitle Translation */}
                <div className="text-xs sm:text-sm font-mono tracking-widest text-[#CCCCCC] uppercase max-w-lg drop-shadow-sm">
                  {currentGreeting.subtext}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom iPhone Progress Indicator */}
          <div className="absolute bottom-8 sm:bottom-14 left-6 right-6 sm:left-14 sm:right-14 space-y-3 max-w-6xl mx-auto z-10">
            <div className="flex items-end justify-between">
              <div className="flex items-center gap-2.5 text-[10px] font-mono text-[#AAAAAA] tracking-widest uppercase">
                <span className="text-white font-bold">BAGUS SUPRIYANTO</span>
                <span className="text-[#55524C]">•</span>
                <span className="px-2 py-0.5 rounded-full bg-[#262626] border border-[#444444] text-[#B89355] font-bold">
                  {currentGreeting.code}
                </span>
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
