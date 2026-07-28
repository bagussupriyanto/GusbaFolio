"use client";

import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { audioManager } from '@/lib/audio-manager';
import { FEATURED_PROJECTS } from '@/lib/constants';
import { Project } from '@/types';
import { Compass } from 'lucide-react';

interface WorldMapSectionProps {
  onSelectProject: (project: Project) => void;
}

export const WorldMapSection: React.FC<WorldMapSectionProps> = React.memo(({ onSelectProject }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const minimapDotRef = useRef<HTMLDivElement>(null);
  const [isWalking, setIsWalking] = useState(false);
  const [facingLeft, setFacingLeft] = useState(false);
  const [currentPos, setCurrentPos] = useState({ x: 50, y: 78 });

  const landmarks = [
    { pin: "1", name: "PT SURYA MITRA\nSERVICE", projectId: "pt-surya-mitra-service", posClass: "left-1/2 top-[25%] sm:left-[22%] sm:top-[46%]", desktopX: 22, desktopY: 68, mobileX: 50, mobileY: 33 },
    { pin: "2", name: "SMARTCAFE POS", projectId: "smartcafe-pos", posClass: "left-1/2 top-[45%] sm:left-[48%] sm:top-[44%]", desktopX: 48, desktopY: 66, mobileX: 50, mobileY: 53 },
    { pin: "3", name: "INVOICE\nSYSTEM", projectId: "invoice-management-system", posClass: "left-1/2 top-[65%] sm:left-[74%] sm:top-[46%]", desktopX: 74, desktopY: 68, mobileX: 50, mobileY: 73 },
  ];

  const animatePlayerTo = (targetX: number, targetY: number, onDone?: () => void) => {
    if (!playerRef.current) return;

    if (targetX < currentPos.x) setFacingLeft(true);
    else if (targetX > currentPos.x) setFacingLeft(false);

    const distance = Math.hypot(targetX - currentPos.x, targetY - currentPos.y);
    const duration = Math.max(distance / 30, 0.4);

    audioManager.playClickSound();
    setIsWalking(true);

    gsap.killTweensOf(playerRef.current);
    gsap.to(playerRef.current, {
      left: `${targetX}%`,
      top: `${targetY}%`,
      duration,
      ease: "power2.inOut",
      onUpdate: () => {
        if (playerRef.current && minimapDotRef.current) {
          const leftVal = parseFloat(playerRef.current.style.left);
          minimapDotRef.current.style.left = `${leftVal * 0.8 + 5}%`;
        }
      },
      onComplete: () => {
        setIsWalking(false);
        setCurrentPos({ x: targetX, y: targetY });
        if (onDone) onDone();
      },
    });
  };

  const handleLandmarkClick = (e: React.MouseEvent, landmark: typeof landmarks[0]) => {
    e.stopPropagation();
    const isMobile = window.innerWidth < 640;
    const targetX = isMobile ? landmark.mobileX : landmark.desktopX;
    const targetY = isMobile ? landmark.mobileY : landmark.desktopY;

    animatePlayerTo(targetX, targetY, () => {
      audioManager.playCoinSound();
      const project = FEATURED_PROJECTS.find(p => p.id === landmark.projectId);
      if (project) setTimeout(() => onSelectProject(project), 300);
    });
  };

  const handleMapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!mapRef.current) return;
    const rect = mapRef.current.getBoundingClientRect();
    const targetX = Math.max(8, Math.min(92, ((e.clientX - rect.left) / rect.width) * 100));
    const targetY = Math.max(18, Math.min(82, ((e.clientY - rect.top) / rect.height) * 100));

    const isMobile = window.innerWidth < 640;
    const nearbyLandmark = landmarks.find(loc => {
      const lx = isMobile ? loc.mobileX : loc.desktopX;
      const ly = isMobile ? loc.mobileY : loc.desktopY;
      return Math.hypot(targetX - lx, targetY - ly) <= 12;
    });

    if (nearbyLandmark) {
      handleLandmarkClick(e, nearbyLandmark);
      return;
    }

    animatePlayerTo(targetX, targetY);
  };

  return (
    <section
      id="world-map-section"
      className="relative h-screen flex flex-col bg-[#0a0e17] font-silkscreen overflow-hidden text-[#F8FAFC] w-full z-10"
    >
      {/* ===== TITLE OVERLAY ===== */}
      <div className="absolute top-16 sm:top-20 inset-x-0 z-20 flex flex-col items-center gap-1 pointer-events-none">
        <div className="absolute left-4 sm:left-6 top-0 flex items-center gap-2 pointer-events-auto">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#4ee6d8] animate-pulse" />
            <span className="text-xs sm:text-sm text-[#4ee6d8] font-bold tracking-widest uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              3. WORLD MAP
            </span>
          </div>
        </div>

        <h2 className="font-pixel text-2xl sm:text-3xl lg:text-4xl text-[#F8FAFC] text-shadow-pixel drop-shadow-[0_0_20px_rgba(78,230,216,0.4)] mt-1">
          EXPLORE MY PROJECTS
        </h2>
        <p className="hidden sm:block text-[9px] sm:text-[10px] text-[#94A3B8] tracking-widest uppercase">CLICK LANDMARK TO VIEW PROJECT</p>
      </div>

      {/* ===== FULL-BLEED PIXEL ART WORLD MAP ===== */}
      <div
        ref={mapRef}
        onClick={handleMapClick}
        className="relative w-full h-full overflow-hidden cursor-crosshair select-none"
      >
        <img src="/assets/game/world-map-mobile-bg.jpg" alt="World Map Mobile" loading="lazy" className="absolute inset-0 w-full h-full object-cover sm:hidden" />
        <img src="/assets/game/world-map-bg.jpg" alt="World Map Desktop" loading="lazy" className="absolute inset-0 w-full h-full object-cover hidden sm:block" />

        {/* Gradient fades */}
        <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#0a0e17] to-transparent pointer-events-none z-[2]" />
        <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#0a0e17] to-transparent pointer-events-none z-[2]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(10,14,23,0.6)_100%)] pointer-events-none z-[1]" />

        {/* Stars */}
        <div className="absolute inset-0 pointer-events-none z-[3]">
          <style>{`
            @keyframes twinkle {
              0%, 100% { opacity: 0.2; }
              50% { opacity: 1; }
            }
            @keyframes pin-bob {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-5px); }
            }
          `}</style>
          {[
            { x: '10%', y: '8%', s: 2.5, d: 0 }, { x: '25%', y: '5%', s: 2, d: 1.2 },
            { x: '45%', y: '10%', s: 2, d: 0.5 }, { x: '65%', y: '3%', s: 3, d: 2 },
            { x: '80%', y: '12%', s: 2, d: 0.8 }, { x: '92%', y: '6%', s: 2.5, d: 1.5 },
          ].map((s, i) => (
            <div
              key={`s-${i}`}
              style={{ 
                left: s.x, top: s.y, width: s.s, height: s.s,
                animation: `twinkle 2.5s ease-in-out ${s.d}s infinite`,
                willChange: 'opacity',
                transform: 'translateZ(0)'
              }}
              className="absolute rounded-full bg-white"
            />
          ))}
        </div>

        {/* Landmarks */}
        {landmarks.map((loc) => (
          <div
            key={loc.pin}
            onClick={(e) => handleLandmarkClick(e, loc)}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-10 flex flex-col items-center ${loc.posClass}`}
          >
            {/* Pin Badge */}
            <div
              style={{
                animation: 'pin-bob 2s ease-in-out infinite',
                willChange: 'transform',
              }}
              className="z-20 mb-1"
            >
              <div 
                className="px-2 py-0.5 bg-[#4ee6d8] text-[#0a0e17] font-pixel text-[10px] font-black border-2 border-white shadow-[2px_2px_0px_#000] group-hover:scale-110 transition-transform rounded-sm"
                style={{ transform: 'translateZ(0)' }}
              >
                {loc.pin}
              </div>
            </div>

            {/* Name Badge */}
            <div className="px-2.5 py-1 bg-[#0a0e17]/90 border-2 border-[#4ee6d8] text-[9px] sm:text-[10px] text-white font-bold text-center group-hover:border-white group-hover:bg-[#4ee6d8]/30 transition-all shadow-[2px_2px_0px_#000] whitespace-pre-line leading-tight z-20 mb-1">
              {loc.name}
            </div>

            {/* Building Hitbox - 100% transparent clickable area covering building artwork */}
            <div className="w-20 sm:w-32 h-20 sm:h-32 bg-transparent cursor-pointer" />
          </div>
        ))}

        {/* Player */}
        <div
          ref={playerRef}
          style={{ left: `${currentPos.x}%`, top: `${currentPos.y}%` }}
          className="absolute transform -translate-x-1/2 -translate-y-full z-20 pointer-events-none"
        >
          <img
            src="/assets/game/player.svg"
            alt="Bagus Avatar"
            loading="lazy"
            className={`w-10 h-14 sm:w-12 sm:h-16 pixelated ${isWalking ? 'walking' : ''} ${facingLeft ? 'scale-x-[-1]' : ''} filter drop-shadow-[0_4px_12px_rgba(78,230,216,0.7)]`}
            style={{ transform: 'translateZ(0)' }}
          />
        </div>

        {/* Bottom-left hint */}
        <div className="absolute bottom-14 sm:bottom-4 left-4 z-10 flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-4 sm:py-3 bg-[#0a0e17]/90 border-2 border-[#4ee6d8]/60 text-[#CBD5E1] shadow-[0_0_15px_rgba(78,230,216,0.15)] animate-pulse">
          <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-[#4ee6d8] shrink-0" />
          <span className="text-[9px] sm:text-xs font-bold tracking-wider leading-tight">CLICK LANDMARK<br />TO VIEW PROJECT</span>
        </div>

        {/* Minimap */}
        <div className="absolute bottom-4 right-4 z-10 hidden sm:block w-20 h-16 sm:w-24 sm:h-20 bg-[#0a0e17]/80 border border-[#4ee6d8]/40 overflow-hidden">
          <div className="absolute inset-1 bg-[radial-gradient(#4ee6d8_1px,transparent_1px)] [background-size:8px_8px] opacity-30" />
          {[22, 48, 74].map((x, i) => (
            <div key={i} className="absolute top-[40%] w-1.5 h-1.5 bg-[#4ee6d8] rounded-full" style={{ left: `${x}%` }} />
          ))}
          <div ref={minimapDotRef} className="absolute w-2 h-2 bg-amber-400 rounded-full animate-pulse border border-white" style={{ left: `${currentPos.x * 0.8 + 5}%`, top: '55%', willChange: 'left', transform: 'translateZ(0)' }} />
          <div className="absolute top-[55%] left-[10%] right-[10%] h-[1px] bg-[#4ee6d8]/40" />
        </div>
      </div>
    </section>
  );
});

WorldMapSection.displayName = "WorldMapSection";
