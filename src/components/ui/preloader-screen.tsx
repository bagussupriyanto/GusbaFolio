"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Coins, Volume2, VolumeX, Compass } from 'lucide-react';
import { audioManager } from '@/lib/audio-manager';
import gsap from 'gsap';

export const PreloaderScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [showCoin, setShowCoin] = useState(false);
  const [flash, setFlash] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Character State
  const [playerX, setPlayerX] = useState(50);
  const [isWalking, setIsWalking] = useState(false);
  const [facingLeft, setFacingLeft] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);

  // Preloader progress timer
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsLoaded(true);
      setShowTitle(true);
      setHasStarted(true);
      return;
    }

    let current = 0;
    const timer = setInterval(() => {
      let step = Math.floor(Math.random() * 3) + 2;
      
      if ((current >= 35 && current <= 42) || (current >= 80 && current <= 85)) {
        if (Math.random() > 0.4) step = 1;
      }

      current += step;

      if (current >= 100) {
        current = 100;
        setProgress(100);
        setIsLoaded(true);
        // Delay title reveal for dramatic effect
        setTimeout(() => setShowTitle(true), 600);
        clearInterval(timer);
      } else {
        setProgress(current);
      }
    }, 40);

    return () => clearInterval(timer);
  }, []);

  // Keyboard Control Movement
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (hasStarted || isJumping || !showTitle) return;

      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        setFacingLeft(false);
        setIsWalking(true);
        setPlayerX((prev) => Math.min(prev + 3, 85));
        audioManager.playClickSound();
      } else if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        setFacingLeft(true);
        setIsWalking(true);
        setPlayerX((prev) => Math.max(prev - 3, 15));
        audioManager.playClickSound();
      } else if (e.key === 'Enter' || e.key === ' ') {
        handleStartGame();
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (['ArrowRight', 'ArrowLeft', 'd', 'D', 'a', 'A'].includes(e.key)) {
        setIsWalking(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [hasStarted, isJumping, showTitle]);

  // Click-to-Walk
  const handleGroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isJumping || hasStarted || !showTitle || !containerRef.current || !playerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const targetX = Math.max(15, Math.min(85, ((e.clientX - rect.left) / rect.width) * 100));

    if (targetX < playerX) {
      setFacingLeft(true);
    } else if (targetX > playerX) {
      setFacingLeft(false);
    }

    const distance = Math.abs(targetX - playerX);
    const duration = Math.max(distance / 30, 0.3);

    audioManager.playClickSound();
    setIsWalking(true);

    gsap.killTweensOf(playerRef.current);
    gsap.to(playerRef.current, {
      left: `${targetX}%`,
      duration: duration,
      ease: "power1.inOut",
      onComplete: () => {
        setIsWalking(false);
        setPlayerX(targetX);
      },
    });
  };

  const handleStartGame = () => {
    if (isJumping || !showTitle) return;
    
    audioManager.playCoinSound();
    
    setIsWalking(false);
    setPlayerX(50);
    setIsJumping(true);
    
    setFlash(true);
    setTimeout(() => setFlash(false), 120);

    setTimeout(() => {
      setShowCoin(true);
    }, 200);

    setTimeout(() => {
      setHasStarted(true);
    }, 950);
  };

  const handleToggleSound = () => {
    const muted = audioManager.toggleMute();
    setIsMuted(muted);
  };

  // Loading hints that cycle
  const loadingHints = [
    "INITIALIZING WORLD...",
    "LOADING COASTAL MAP...",
    "PREPARING ASSETS...",
    "COMPILING SHADERS...",
    "SPAWNING ENTITIES...",
    "CONNECTING TO SERVER...",
    "ALMOST READY...",
  ];
  const hintIndex = Math.min(Math.floor(progress / 15), loadingHints.length - 1);

  // Twinkling Star data
  const stars = [
    { x: '6%', y: '8%', s: 3, d: 0 }, { x: '14%', y: '15%', s: 2, d: 1.2 },
    { x: '22%', y: '5%', s: 2.5, d: 0.5 }, { x: '32%', y: '12%', s: 2, d: 2 },
    { x: '40%', y: '4%', s: 3, d: 0.8 }, { x: '50%', y: '10%', s: 2, d: 1.5 },
    { x: '58%', y: '6%', s: 2.5, d: 0.3 }, { x: '66%', y: '14%', s: 2, d: 1.8 },
    { x: '75%', y: '3%', s: 3, d: 1 }, { x: '82%', y: '11%', s: 2, d: 0.6 },
    { x: '90%', y: '7%', s: 2.5, d: 2.2 }, { x: '95%', y: '16%', s: 2, d: 0.9 },
    { x: '10%', y: '22%', s: 2, d: 1.4 }, { x: '28%', y: '20%', s: 2.5, d: 0.7 },
    { x: '45%', y: '18%', s: 2, d: 2.5 }, { x: '63%', y: '20%', s: 3, d: 0.2 },
    { x: '78%', y: '22%', s: 2, d: 1.7 }, { x: '88%', y: '19%', s: 2.5, d: 1.1 },
  ];

  return (
    <AnimatePresence mode="wait">
      {!hasStarted && (
        <motion.div
          key="coastal-night-preloader"
          ref={containerRef}
          onClick={handleGroundClick}
          initial={{ opacity: 1, scale: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.08,
            filter: "blur(14px)",
            transition: { duration: 0.85, ease: [0.65, 0, 0.35, 1] }
          }}
          className={`fixed inset-0 z-50 flex flex-col justify-between p-4 sm:p-8 text-[#F8FAFC] select-none overflow-hidden origin-center pointer-events-auto font-silkscreen cursor-pointer ${flash ? 'bg-white' : 'bg-[#0a0e17]'}`}
        >
          {/* ===== BACKGROUND ===== */}
          <img
            src="/assets/game/preloader-harbor-bg.jpg"
            alt="Harbor Dock Night Scene"
            loading="eager"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,14,23,0.55)_0%,rgba(10,14,23,0.25)_70%)] pointer-events-none z-[1]" />
          <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#0a0e17] to-transparent pointer-events-none z-[1]" />
          <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-[#0a0e17]/80 to-transparent pointer-events-none z-[1]" />
          <div className="absolute inset-0 bg-[radial-gradient(#4ee6d8_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none z-[1]" />

          {/* ===== TWINKLING STARS (CSS Animation) ===== */}
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes preloaderTwinkle {
              0%, 100% { opacity: 0.2; transform: scale(0.8); }
              50% { opacity: 1; transform: scale(1.3); }
            }
            @keyframes preloaderMoonGlow {
              0%, 100% { opacity: 0.15; transform: scale(1); }
              50% { opacity: 0.3; transform: scale(1.1); }
            }
          `}} />
          <div className="absolute inset-0 pointer-events-none z-[2]">
            {stars.map((star, i) => (
              <div
                key={`pre-star-${i}`}
                style={{
                  left: star.x, top: star.y, width: star.s, height: star.s,
                  animation: `preloaderTwinkle 2.5s ease-in-out ${star.d}s infinite`,
                  willChange: 'opacity, transform',
                }}
                className="absolute rounded-full bg-white"
              />
            ))}
          </div>

          {/* ===== MOON GLOW (CSS Animation) ===== */}
          <div
            style={{ animation: 'preloaderMoonGlow 4s ease-in-out infinite', willChange: 'opacity, transform' }}
            className="absolute top-[5%] right-[18%] w-20 h-20 rounded-full bg-[#D4A853]/30 blur-xl pointer-events-none z-[2]"
          />

          {/* ===== TOP STATUS BAR ===== */}
          <div className="flex flex-wrap items-center justify-between gap-2 z-10 text-xs border-b border-[#4ee6d8]/30 pb-3">
            <div className="flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full bg-[#4ee6d8] ${!isLoaded ? 'animate-ping' : ''}`} />
              <span className="font-silkscreen text-[#4ee6d8] tracking-widest uppercase font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                {!isLoaded ? 'SYSTEM BOOTING...' : 'SYSTEM READY'}
              </span>
            </div>
            
            <div className="flex items-center gap-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleToggleSound();
                }}
                className="flex items-center gap-1.5 px-3 py-1 bg-[#0a0e17]/80 border border-[#4ee6d8] text-[#4ee6d8] hover:bg-[#4ee6d8] hover:text-[#0a0e17] transition-colors backdrop-blur-sm"
                aria-label="Toggle Sound"
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                <span className="text-[10px]">{isMuted ? "MUTED" : "SOUND ON"}</span>
              </button>

              <div className="flex items-center gap-2 text-[#4ee6d8] font-silkscreen drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                <Compass className="w-4 h-4 text-[#4ee6d8]" />
                <span>COASTAL NIGHT</span>
              </div>
            </div>
          </div>

          {/* ===== CENTER CONTENT ===== */}
          <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center max-w-4xl mx-auto w-full">
            
            <AnimatePresence mode="wait">
              {/* ===== PHASE 1: LOADING SCREEN ===== */}
              {!showTitle && (
                <motion.div
                  key="loading-phase"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center gap-6"
                >
                  {/* Retro Terminal Loading Box */}
                  <div className="bg-[#0a0e17]/80 border-2 border-[#4ee6d8] p-6 sm:p-8 backdrop-blur-sm shadow-[4px_4px_0px_#000] min-w-0 w-full sm:w-auto sm:min-w-[400px]">
                    {/* Terminal Header */}
                    <div className="flex items-center gap-2 border-b border-[#4ee6d8]/40 pb-3 mb-4">
                      <div className="flex gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-500" />
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      </div>
                      <span className="text-[9px] text-[#4ee6d8]/70 ml-2 font-mono">GULF_OS://boot.sys</span>
                    </div>

                    {/* Loading Log Lines */}
                    <div className="space-y-1.5 mb-5 text-left font-mono">
                      {progress > 5 && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[10px] text-emerald-400">
                          ✓ KERNEL LOADED
                        </motion.div>
                      )}
                      {progress > 25 && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[10px] text-emerald-400">
                          ✓ RENDERING ENGINE OK
                        </motion.div>
                      )}
                      {progress > 50 && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[10px] text-emerald-400">
                          ✓ ASSETS LOADED ({Math.floor(progress * 0.42)} FILES)
                        </motion.div>
                      )}
                      {progress > 75 && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[10px] text-emerald-400">
                          ✓ WORLD MAP READY
                        </motion.div>
                      )}
                      <motion.div
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="text-[10px] text-[#4ee6d8]"
                      >
                        {`> ${loadingHints[hintIndex]}`}
                      </motion.div>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="text-[#94A3B8]">PROGRESS</span>
                        <span className="text-[#4ee6d8] font-bold font-pixel text-sm">{progress}%</span>
                      </div>
                      <div className="w-full h-4 bg-[#060B14] border-2 border-[#4ee6d8]/60 p-0.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]">
                        <motion.div
                          className="h-full bg-gradient-to-r from-[#4ee6d8] to-[#38BDF8]"
                          style={{ width: `${progress}%` }}
                          transition={{ duration: 0.15 }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ===== PHASE 2: TITLE + PRESS START ===== */}
              {showTitle && (
                <motion.div
                  key="title-phase"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex flex-col items-center gap-5"
                >
                  <div className="text-xs text-[#4ee6d8] tracking-widest uppercase font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    WELCOME TO
                  </div>

                  <h1 className="font-pixel text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-[#F8FAFC] tracking-tight leading-tight text-shadow-pixel drop-shadow-[0_0_30px_rgba(78,230,216,0.5)]">
                    MY PORTFOLIO
                  </h1>

                  <p className="font-silkscreen text-xs sm:text-sm text-[#CBD5E1] max-w-xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                    BAGUS SUPRIYANTO • PRODUCT-FOCUSED FRONTEND ENGINEER
                  </p>

                  {/* Floating Gold Coin FX */}
                  <AnimatePresence>
                    {showCoin && (
                      <motion.div
                        initial={{ opacity: 0, y: 0, scale: 0.5 }}
                        animate={{ opacity: [1, 1, 0], y: [-20, -70, -100], scale: [0.8, 1.4, 1] }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="absolute top-0 flex flex-col items-center gap-1 z-40 pointer-events-none"
                      >
                        <div className="flex items-center gap-1.5 px-3 py-1 bg-amber-400 text-slate-950 font-pixel text-xs rounded border-2 border-amber-300 shadow-[3px_3px_0px_#000]">
                          <Coins className="w-4 h-4 text-slate-950 animate-bounce" />
                          <span>+100 PTS!</span>
                        </div>
                        <span className="font-pixel text-[10px] text-amber-300">DING! 🪙</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* PRESS START Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="mt-4"
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleStartGame();
                      }}
                      disabled={isJumping}
                      className="pixel-btn px-10 py-4 text-lg sm:text-2xl font-black flex items-center gap-3 mx-auto uppercase tracking-wider shadow-[0_0_30px_rgba(78,230,216,0.6)] cursor-pointer"
                    >
                      <span>PRESS START</span>
                      <Play className="w-6 h-6 fill-[#0a0e17]" />
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ===== PLAYER CHARACTER (only visible after title) ===== */}
          <AnimatePresence>
            {showTitle && (
              <motion.div
                ref={playerRef}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                style={{
                  left: `${playerX}%`,
                  transform: 'translateX(-50%)',
                }}
                className="absolute bottom-14 z-30 flex flex-col items-center pointer-events-none"
              >
                <motion.div
                  animate={isJumping ? { y: [0, -110, 0] } : {}}
                  transition={{ duration: 0.55, ease: "easeInOut" }}
                  className="flex flex-col items-center"
                >
                  <img
                    src="/assets/game/player.svg"
                    alt="Bagus Avatar"
                    className={`w-11 h-15 object-contain pixelated ${isWalking ? 'walking' : ''} ${facingLeft ? 'scale-x-[-1]' : ''} filter drop-shadow-[0_4px_12px_rgba(78,230,216,0.6)]`}
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ===== BOTTOM STATUS BAR ===== */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-silkscreen text-[#94A3B8] z-30 pt-2 bg-transparent">
            <div className="text-[#4ee6d8] font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">GULF OS V2.6</div>
            <div className="text-[#4ee6d8] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {showTitle ? 'CLICK TO WALK • PRESS START TO PLAY' : 'PLEASE WAIT...'}
            </div>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};
