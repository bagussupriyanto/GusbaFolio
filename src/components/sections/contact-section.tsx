"use client";

import React, { useState, useRef, memo } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { audioManager } from '@/lib/audio-manager';
import { Mail, MessageCircle, Github, Linkedin, Copy, Check, Heart, ArrowRight, Video } from 'lucide-react';
import { DEVELOPER_DATA } from '@/lib/constants';
import { PaperBattleGame } from '@/components/ui/paper-battle-game';

export const ContactSection: React.FC = memo(() => {
  const [copied, setCopied] = useState(false);
  const playerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const [isWalking, setIsWalking] = useState(false);
  const [facingLeft, setFacingLeft] = useState(false);
  const [playerX, setPlayerX] = useState(45);
  const [gameOpen, setGameOpen] = useState(false);

  const [isCasting, setIsCasting] = useState(false);
  const [spellScrolls, setSpellScrolls] = useState<{ id: number; startX: number; startY: number; targetX: number; targetY: number }[]>([]);
  const scrollIdCounter = useRef(0);

  const castPaperSpell = (e: React.MouseEvent) => {
    if (!playerRef.current) return;
    audioManager.playClickSound();

    const mageRect = playerRef.current.getBoundingClientRect();
    const targetRect = (e.currentTarget as HTMLElement).getBoundingClientRect();

    const startX = mageRect.left + mageRect.width / 2;
    const startY = mageRect.top + mageRect.height * 0.3; // Staff top area
    const targetX = targetRect.left + targetRect.width / 2;
    const targetY = targetRect.top + targetRect.height / 2;

    const id = ++scrollIdCounter.current;
    setSpellScrolls(prev => [...prev, { id, startX, startY, targetX, targetY }]);

    // Animate mage staff cast bounce
    setIsCasting(true);
    gsap.to(playerRef.current, {
      y: -12,
      duration: 0.2,
      yoyo: true,
      repeat: 1,
      onComplete: () => setIsCasting(false),
    });

    // Remove scroll after animation
    setTimeout(() => {
      setSpellScrolls(prev => prev.filter(s => s.id !== id));
      audioManager.playCoinSound();
    }, 700);
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    castPaperSpell(e);
    navigator.clipboard.writeText(DEVELOPER_DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleBgClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!bgRef.current || !playerRef.current) return;
    const rect = bgRef.current.getBoundingClientRect();
    const targetX = Math.max(5, Math.min(55, ((e.clientX - rect.left) / rect.width) * 100));

    if (targetX < playerX) setFacingLeft(true);
    else if (targetX > playerX) setFacingLeft(false);

    const distance = Math.abs(targetX - playerX);
    const duration = Math.max(distance / 25, 0.4);

    audioManager.playClickSound();
    setIsWalking(true);

    gsap.killTweensOf(playerRef.current);
    gsap.to(playerRef.current, {
      left: `${targetX}%`,
      duration,
      ease: "power2.inOut",
      onComplete: () => {
        setIsWalking(false);
        setPlayerX(targetX);
      },
    });
  };

  return (
    <section
      id="contact"
      className="relative h-screen h-[100dvh] w-full flex flex-col bg-[#0a0e17] font-silkscreen overflow-hidden text-[#F8FAFC] z-10"
    >
      {/* ===== FULL-BLEED PORTAL BACKGROUND ===== */}
      <div ref={bgRef} onClick={handleBgClick} className="absolute inset-0 cursor-crosshair">
        <img src="/assets/game/contact-portal-bg.jpg" alt="Portal Gate" loading="lazy" className="w-full h-full object-cover" />
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#0a0e17] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0a0e17] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#0a0e17]/40 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#0a0e17]/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-l from-[#0a0e17]/80 via-[#0a0e17]/30 to-transparent pointer-events-none" />
      </div>

      {/* ===== PORTAL PARTICLES ===== */}
      <style>{`
        @keyframes portal-particle {
          0%, 100% { opacity: 0; transform: translate3d(0, 0, 0) scale(0.5); }
          50% { opacity: 0.9; transform: translate3d(0, -12px, 0) scale(1.2); }
        }
        @keyframes portal-btn-anim {
          0%, 100% { transform: scale(1) translateZ(0); box-shadow: 0 0 15px rgba(78,230,216,0.4); }
          50% { transform: scale(1.05) translateZ(0); box-shadow: 0 0 30px rgba(78,230,216,0.7); }
        }
      `}</style>
      <div className="absolute inset-0 pointer-events-none z-[3]">
        {[
          { x: '30%', y: '35%', d: 0 }, { x: '35%', y: '50%', d: 1 },
          { x: '25%', y: '45%', d: 0.5 }, { x: '40%', y: '30%', d: 1.5 },
          { x: '20%', y: '55%', d: 2 }, { x: '32%', y: '25%', d: 0.8 },
        ].map((p, i) => (
          <div
            key={`particle-${i}`}
            style={{ 
              left: p.x, 
              top: p.y,
              animation: `portal-particle ${2.5 + i * 0.2}s ease-in-out ${p.d}s infinite`,
              willChange: 'transform, opacity'
            }}
            className="absolute w-1.5 h-1.5 rounded-full bg-[#4ee6d8] shadow-[0_0_8px_rgba(78,230,216,0.8)]"
          />
        ))}
      </div>

      {/* ===== FLYING PAPER SCROLLS OVERLAY ===== */}
      <style>{`
        @keyframes flyScroll {
          0% { opacity: 0; transform: translate(var(--sx), var(--sy)) scale(0.5) rotate(0deg); }
          20% { opacity: 1; transform: translate(calc(var(--sx) + (var(--tx) - var(--sx)) * 0.2), calc(var(--sy) + (var(--ty) - var(--sy)) * 0.2 - 30px)) scale(1.3) rotate(180deg); }
          100% { opacity: 0.9; transform: translate(var(--tx), var(--ty)) scale(0.8) rotate(360deg); }
        }
      `}</style>
      <div className="fixed inset-0 pointer-events-none z-[50]">
        {spellScrolls.map((s) => (
          <div
            key={s.id}
            style={{
              '--sx': `${s.startX}px`,
              '--sy': `${s.startY}px`,
              '--tx': `${s.targetX}px`,
              '--ty': `${s.targetY}px`,
              animation: 'flyScroll 0.65s cubic-bezier(0.25, 1, 0.5, 1) forwards',
              position: 'absolute',
              left: 0,
              top: 0,
            } as React.CSSProperties}
            className="flex items-center justify-center text-xl drop-shadow-[0_0_15px_rgba(78,230,216,1)]"
          >
            📜
          </div>
        ))}
      </div>

      {/* ===== MOVABLE MAGE CHARACTER ===== */}
      <div
        ref={playerRef}
        style={{ left: `${playerX}%`, bottom: '-2%' }}
        className="flex absolute transform -translate-x-1/2 z-[5] pointer-events-none flex-col items-center opacity-60 sm:opacity-100 transition-opacity"
      >
        <img
          src="/assets/game/Desain tanpa judul.svg"
          alt="Mage Character"
          loading="lazy"
          className={`w-36 h-[16rem] sm:w-64 sm:h-[28rem] lg:w-80 lg:h-[36rem] object-contain ${isWalking ? 'walking' : ''} ${isCasting ? 'animate-bounce' : ''} ${facingLeft ? 'scale-x-[-1]' : ''} filter drop-shadow-[0_4px_20px_rgba(78,230,216,0.6)]`}
        />
      </div>

      {/* ===== TOP LABEL BAR ===== */}
      <div className="relative z-10 flex items-center justify-between px-4 sm:px-6 pt-16 sm:pt-20 pb-2 pointer-events-none">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#4ee6d8] animate-pulse" />
          <span className="text-xs sm:text-sm text-[#4ee6d8] font-bold tracking-widest uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            4. CONTACT
          </span>
        </div>
        <div className="text-[10px] sm:text-xs text-[#94A3B8] font-mono drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          PORTAL GATE
        </div>
      </div>

      {/* ===== CONTACT PANEL — RIGHT SIDE ===== */}
      <div className="z-10 flex-1 flex items-center justify-center sm:justify-end px-4 sm:px-8 lg:px-16 pointer-events-none">
        <div className="w-full max-w-md lg:max-w-lg space-y-3 sm:space-y-5 pointer-events-auto mt-4 sm:mt-0">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 text-[9px] font-bold uppercase tracking-widest mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              AVAILABLE FOR HIRE
            </div>
            <h2 className="font-pixel text-xl sm:text-2xl lg:text-3xl text-[#4ee6d8] drop-shadow-[0_0_20px_rgba(78,230,216,0.4)]">
              INTERESTED IN<br />HIRING ME?
            </h2>
            <p className="text-[10px] sm:text-xs text-[#94A3B8] font-sans leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Saya terbuka untuk posisi Fulltime, Remote, maupun Freelance.<br />Hubungi saya melalui channel di bawah ini.
            </p>
          </div>

          <div className="space-y-2.5 bg-[#0a0e17]/70 border border-[#4ee6d8]/30 p-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
            <div className="flex items-center justify-between gap-3 p-3 bg-[#0a0e17]/50 border border-[#4ee6d8]/20 hover:border-[#4ee6d8]/60 transition-colors">
              <div className="flex items-center gap-3 overflow-hidden">
                <Mail className="w-4 h-4 text-[#4ee6d8] shrink-0" />
                <div>
                  <div className="text-[9px] text-[#4ee6d8] uppercase font-bold">EMAIL</div>
                  <div className="text-[10px] sm:text-xs font-mono text-[#F8FAFC] truncate">{DEVELOPER_DATA.contact.email}</div>
                </div>
              </div>
              <button onClick={handleCopyEmail} className="text-[#4ee6d8] hover:text-white transition-colors shrink-0 cursor-pointer">
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <a href={DEVELOPER_DATA.contact.whatsapp} target="_blank" rel="noopener noreferrer" onClick={castPaperSpell}
              className="flex items-center justify-between gap-3 p-3 bg-[#0a0e17]/50 border border-emerald-500/20 hover:border-emerald-400/60 transition-colors group">
              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-[9px] text-emerald-400 uppercase font-bold">WHATSAPP</div>
                  <div className="text-[10px] sm:text-xs font-mono text-[#F8FAFC]">+62 851-5522-7735</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
            </a>

            <a href="https://github.com/bagussupriyanto" target="_blank" rel="noopener noreferrer" onClick={castPaperSpell}
              className="flex items-center justify-between gap-3 p-3 bg-[#0a0e17]/50 border border-[#4ee6d8]/20 hover:border-[#4ee6d8]/60 transition-colors group">
              <div className="flex items-center gap-3">
                <Github className="w-4 h-4 text-[#4ee6d8] shrink-0" />
                <div>
                  <div className="text-[9px] text-[#4ee6d8] uppercase font-bold">GITHUB</div>
                  <div className="text-[10px] sm:text-xs font-mono text-[#F8FAFC]">github.com/bagussupriyanto</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#4ee6d8] group-hover:translate-x-1 transition-transform" />
            </a>

            <a href="https://www.linkedin.com/in/bagus-supriyanto-18b32819b" target="_blank" rel="noopener noreferrer" onClick={castPaperSpell}
              className="flex items-center justify-between gap-3 p-3 bg-[#0a0e17]/50 border border-sky-400/20 hover:border-sky-400/60 transition-colors group">
              <div className="flex items-center gap-3">
                <Linkedin className="w-4 h-4 text-sky-400 shrink-0" />
                <div>
                  <div className="text-[9px] text-sky-400 uppercase font-bold">LINKEDIN</div>
                  <div className="text-[10px] sm:text-xs font-mono text-[#F8FAFC]">linkedin.com/in/bagus-supriyanto</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition-transform" />
            </a>

            {DEVELOPER_DATA.contact.tiktok && (
              <a href={DEVELOPER_DATA.contact.tiktok} target="_blank" rel="noopener noreferrer" onClick={castPaperSpell}
                className="flex items-center justify-between gap-3 p-3 bg-[#0a0e17]/50 border border-purple-400/30 hover:border-purple-400/80 transition-colors group">
                <div className="flex items-center gap-3">
                  <Video className="w-4 h-4 text-purple-400 shrink-0" />
                  <div>
                    <div className="text-[9px] text-purple-400 uppercase font-bold">TIKTOK AI CONTENT LAB</div>
                    <div className="text-[10px] sm:text-xs font-mono text-[#F8FAFC]">@editorrramatir1106</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
              </a>
            )}
          </div>

          {/* ===== PORTAL ENTER BUTTON ===== */}
          <div className="flex justify-center sm:absolute sm:left-[40%] sm:translate-x-0 sm:top-[38%] z-[6] pointer-events-auto pt-2 sm:pt-0">
            <button
              onClick={(e) => {
                castPaperSpell(e);
                setTimeout(() => setGameOpen(true), 400);
              }}
              style={{ animation: 'portal-btn-anim 2s ease-in-out infinite', willChange: 'transform, box-shadow' }}
              className="w-full sm:w-auto px-4 py-3 sm:px-5 sm:py-2.5 bg-[#4ee6d8]/20 border-2 border-[#4ee6d8] text-[#4ee6d8] font-pixel text-[10px] sm:text-[11px] font-bold cursor-pointer hover:bg-[#4ee6d8] hover:text-[#0a0e17] transition-colors text-center"
            >
              ⚔️ MASUK UNTUK BERMAIN
            </button>
          </div>
        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <div className="relative z-10 flex flex-row items-center justify-center sm:justify-between px-4 sm:px-6 py-3 text-[10px] text-[#94A3B8]/80 gap-2 pointer-events-none">
        <div className="hidden sm:flex items-center gap-1.5 text-red-400 font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          <Heart className="w-3.5 h-3.5 fill-red-400" />
          <span>THANK YOU FOR VISITING!</span>
        </div>
        <div className="text-[#F8FAFC] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-center">© 2025 BAGUS SUPRIYANTO<span className="hidden sm:inline"> • ALL RIGHTS RESERVED</span></div>
        <div className="hidden sm:flex items-center gap-2 text-emerald-400 font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>READY TO WORK</span>
        </div>
      </div>

      {/* ===== PAPER BATTLE GAME MODAL ===== */}
      <PaperBattleGame isOpen={gameOpen} onClose={() => setGameOpen(false)} />

    </section>
  );
});
