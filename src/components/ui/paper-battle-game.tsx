"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PaperBattleGameProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Paper {
  id: number;
  x: number;
  y: number;
  dx: number;
  dy: number;
  fromPlayer: boolean;
}

// === DAILY LIVES SYSTEM (localStorage) ===
const LIVES_KEY = 'paper_battle_lives';
const getToday = () => new Date().toISOString().split('T')[0];

const loadLives = (): number => {
  try {
    const raw = localStorage.getItem(LIVES_KEY);
    if (!raw) return 3;
    const data = JSON.parse(raw);
    if (data.date !== getToday()) return 3; // Reset daily
    return Math.max(0, data.lives);
  } catch { return 3; }
};

const saveLives = (lives: number) => {
  localStorage.setItem(LIVES_KEY, JSON.stringify({ date: getToday(), lives }));
};

// === SFX ===
const createSFX = () => {
  let ctx: AudioContext | null = null;
  const getCtx = () => { if (!ctx) ctx = new AudioContext(); return ctx; };
  const playTone = (freq: number, dur: number, type: OscillatorType = 'square', vol = 0.15) => {
    try {
      const c = getCtx();
      const osc = c.createOscillator();
      const gain = c.createGain();
      osc.type = type; osc.frequency.value = freq;
      gain.gain.setValueAtTime(vol, c.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + dur);
      osc.connect(gain); gain.connect(c.destination);
      osc.start(); osc.stop(c.currentTime + dur);
    } catch {}
  };
  return {
    shoot: () => playTone(600, 0.08, 'square', 0.1),
    hit: () => playTone(200, 0.15, 'sawtooth', 0.12),
    playerHit: () => { playTone(150, 0.3, 'sawtooth', 0.15); setTimeout(() => playTone(100, 0.2, 'square', 0.1), 100); },
    bossPower: () => { playTone(80, 0.4, 'sawtooth', 0.2); setTimeout(() => playTone(60, 0.5, 'square', 0.2), 200); setTimeout(() => playTone(100, 0.3, 'sawtooth', 0.15), 500); },
    win: () => { [523, 659, 784, 1047].forEach((f, i) => setTimeout(() => playTone(f, 0.2, 'square', 0.12), i * 150)); },
    lose: () => { [400, 350, 300, 200].forEach((f, i) => setTimeout(() => playTone(f, 0.3, 'sawtooth', 0.12), i * 200)); },
  };
};

export const PaperBattleGame: React.FC<PaperBattleGameProps> = ({ isOpen, onClose }) => {
  // === LOBBY vs IN-GAME state ===
  const [screen, setScreen] = useState<'lobby' | 'playing' | 'result'>('lobby');
  const [dailyLives, setDailyLives] = useState(3);
  const [resultType, setResultType] = useState<'win' | 'lose' | null>(null);

  // === IN-GAME state ===
  const canvasRef = useRef<HTMLDivElement>(null);
  const sfxRef = useRef<ReturnType<typeof createSFX> | null>(null);
  const [playerHP, setPlayerHP] = useState(100);
  const [bossHP, setBossHP] = useState(150);
  const playerMaxHP = 100;
  const bossMaxHP = 150;
  const [papers, setPapers] = useState<Paper[]>([]);
  const [playerY, setPlayerY] = useState(50);
  const [bossY, setBossY] = useState(50);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [hitFlash, setHitFlash] = useState<'player' | 'boss' | null>(null);
  const [bossPhase, setBossPhase] = useState(1);
  const [bossSpecialActive, setBossSpecialActive] = useState(false);
  const [showPowerWarning, setShowPowerWarning] = useState(false);
  const [playerInvincible, setPlayerInvincible] = useState(false);

  const bossSpecialUsed = useRef(false);
  const playerInvincibleRef = useRef(false);
  const bossSpecialActiveRef = useRef(false);
  const paperId = useRef(0);
  const gameLoop = useRef<number | null>(null);
  const lastFrameTime = useRef(0);
  const playerYRef = useRef(50);
  const bossYRef = useRef(50);

  // Load lives on open
  useEffect(() => {
    if (isOpen) {
      const lives = loadLives();
      setDailyLives(lives);
      setScreen('lobby');
      if (!sfxRef.current) sfxRef.current = createSFX();
    }
  }, [isOpen]);

  useEffect(() => { playerYRef.current = playerY; }, [playerY]);
  useEffect(() => { bossYRef.current = bossY; }, [bossY]);
  useEffect(() => { playerInvincibleRef.current = playerInvincible; }, [playerInvincible]);
  useEffect(() => { bossSpecialActiveRef.current = bossSpecialActive; }, [bossSpecialActive]);

  // Start a game round (costs 1 life)
  const startGame = useCallback(() => {
    if (dailyLives <= 0) return;
    setPlayerHP(100);
    setBossHP(150);
    setPapers([]);
    setPlayerY(50);
    setBossY(50);
    setScore(0);
    setGameOver(false);
    setResultType(null);
    setHitFlash(null);
    setBossPhase(1);
    setBossSpecialActive(false);
    setShowPowerWarning(false);
    setPlayerInvincible(false);
    bossSpecialUsed.current = false;
    playerInvincibleRef.current = false;
    bossSpecialActiveRef.current = false;
    paperId.current = 0;
    playerYRef.current = 50;
    bossYRef.current = 50;
    lastFrameTime.current = 0;
    setScreen('playing');
  }, [dailyLives]);

  // End round
  const endRound = useCallback((won: boolean) => {
    setGameOver(true);
    setResultType(won ? 'win' : 'lose');
    if (!won) {
      const newLives = Math.max(0, dailyLives - 1);
      setDailyLives(newLives);
      saveLives(newLives);
      sfxRef.current?.lose();
    } else {
      sfxRef.current?.win();
    }
    setTimeout(() => setScreen('result'), 500);
  }, [dailyLives]);

  // Pointer movement
  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (gameOver || !canvasRef.current) return;
    e.preventDefault();
    const rect = canvasRef.current.getBoundingClientRect();
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPlayerY(Math.max(8, Math.min(88, y)));
  }, [gameOver]);

  // Shoot
  const handleShoot = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (gameOver) return;
    if (e.type === 'pointerdown') {
      sfxRef.current?.shoot();
      const id = paperId.current++;
      setPapers(prev => [...prev, { id, x: 22, y: playerYRef.current, dx: 1.4, dy: (Math.random() - 0.5) * 0.3, fromPlayer: true }]);
    }
  }, [gameOver]);

  // Boss phase
  useEffect(() => {
    if (screen !== 'playing') return;
    if (bossHP <= 50) setBossPhase(3);
    else if (bossHP <= 100) setBossPhase(2);
    else setBossPhase(1);
  }, [bossHP, screen]);

  // Boss special at half HP
  useEffect(() => {
    if (screen !== 'playing') return;
    if (bossHP <= 75 && bossHP > 0 && !bossSpecialUsed.current && !gameOver) {
      bossSpecialUsed.current = true;
      setBossSpecialActive(true);
      bossSpecialActiveRef.current = true;
      setShowPowerWarning(true);
      sfxRef.current?.bossPower();
      const t = setTimeout(() => {
        setShowPowerWarning(false);
        for (let i = 0; i < 12; i++) {
          setTimeout(() => {
            const id = paperId.current++;
            setPapers(prev => [...prev, { id, x: 78, y: 10 + (i % 6) * 15, dx: -1.2 - Math.random() * 0.5, dy: (Math.random() - 0.5) * 1.5, fromPlayer: false }]);
          }, i * 100);
        }
        setTimeout(() => { setBossSpecialActive(false); bossSpecialActiveRef.current = false; }, 1500);
      }, 1500);
      return () => clearTimeout(t);
    }
  }, [bossHP, gameOver, screen]);

  // Boss AI shooting
  useEffect(() => {
    if (screen !== 'playing' || gameOver) return;
    const baseInterval = bossPhase === 3 ? 400 : bossPhase === 2 ? 650 : 900;
    const si = setInterval(() => {
      const shots = bossPhase >= 3 ? 3 : bossPhase >= 2 ? 2 : 1;
      for (let i = 0; i < shots; i++) {
        setTimeout(() => {
          const id = paperId.current++;
          setPapers(prev => [...prev, { id, x: 78, y: bossYRef.current + (Math.random() - 0.5) * 15, dx: -(0.8 + bossPhase * 0.2), dy: (Math.random() - 0.5) * (bossPhase >= 2 ? 1.2 : 0.6), fromPlayer: false }]);
        }, i * 150);
      }
    }, baseInterval + Math.random() * 300);
    return () => clearInterval(si);
  }, [screen, gameOver, bossPhase]);

  // Boss AI movement
  useEffect(() => {
    if (screen !== 'playing' || gameOver) return;
    const mi = setInterval(() => {
      setBossY(prev => {
        const speed = 0.08 + bossPhase * 0.04;
        const target = playerYRef.current + (Math.random() - 0.5) * (30 - bossPhase * 5);
        const next = prev + (Math.max(10, Math.min(85, target)) - prev) * speed;
        bossYRef.current = next;
        return next;
      });
    }, 50);
    return () => clearInterval(mi);
  }, [screen, gameOver, bossPhase]);

  // Game loop
  useEffect(() => {
    if (screen !== 'playing' || gameOver) return;
    const tick = (time: number) => {
      if (lastFrameTime.current === 0) lastFrameTime.current = time;
      const delta = Math.min((time - lastFrameTime.current) / 16, 3);
      lastFrameTime.current = time;

      setPapers(prev => {
        const remaining: Paper[] = [];
        let bDmg = 0;
        let gotHit = false;
        for (const p of prev) {
          const nx = p.x + p.dx * delta;
          const ny = p.y + p.dy * delta;
          if (nx < -5 || nx > 105 || ny < -5 || ny > 105) continue;
          if (p.fromPlayer && !bossSpecialActiveRef.current && nx > 72 && nx < 88 && Math.abs(ny - bossYRef.current) < 12) { bDmg += 6; continue; }
          if (!p.fromPlayer && !playerInvincibleRef.current && !gotHit && nx < 28 && nx > 8 && Math.abs(ny - playerYRef.current) < 12) { gotHit = true; continue; }
          remaining.push({ ...p, x: nx, y: ny });
        }
        if (bDmg > 0) { setBossHP(h => Math.max(0, h - bDmg)); setScore(s => s + bDmg * 10); setHitFlash('boss'); sfxRef.current?.hit(); setTimeout(() => setHitFlash(null), 200); }
        if (gotHit) {
          setPlayerHP(h => Math.max(0, h - 15));
          setHitFlash('player');
          setPlayerInvincible(true); playerInvincibleRef.current = true;
          sfxRef.current?.playerHit();
          setTimeout(() => setHitFlash(null), 300);
          setTimeout(() => { setPlayerInvincible(false); playerInvincibleRef.current = false; }, 1000);
        }
        return remaining;
      });
      gameLoop.current = requestAnimationFrame(tick);
    };
    gameLoop.current = requestAnimationFrame(tick);
    return () => { if (gameLoop.current) cancelAnimationFrame(gameLoop.current); lastFrameTime.current = 0; };
  }, [screen, gameOver]);

  // Check win/lose
  useEffect(() => {
    if (screen !== 'playing' || gameOver) return;
    if (playerHP <= 0) endRound(false);
    if (bossHP <= 0) endRound(true);
  }, [playerHP, bossHP, screen, gameOver, endRound]);

  // Cleanup
  useEffect(() => {
    if (!isOpen) { if (gameLoop.current) cancelAnimationFrame(gameLoop.current); lastFrameTime.current = 0; }
  }, [isOpen]);

  if (!isOpen) return null;

  // === LOBBY SCREEN ===
  if (screen === 'lobby') {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
        onClick={(e) => e.target === e.currentTarget && onClose()}>
        <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }}
          className="relative w-full max-w-md bg-[#0a0e17] border-2 border-[#4ee6d8] shadow-[0_0_40px_rgba(78,230,216,0.3)] p-6 sm:p-8 font-silkscreen text-center">

          <div className="text-lg sm:text-xl font-pixel text-[#4ee6d8] mb-2">⚔️ PAPER BATTLE</div>
          <div className="text-[10px] text-[#94A3B8] font-sans mb-6">Kalahkan Boss Bagus dengan melempar kertas!</div>

          {/* Daily Lives */}
          <div className="mb-6">
            <div className="text-[9px] text-[#94A3B8] uppercase tracking-widest mb-2">NYAWA HARI INI</div>
            <div className="flex justify-center gap-3">
              {[1, 2, 3].map(i => (
                <motion.div key={i}
                  animate={i <= dailyLives ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                  className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg border-2 transition-all ${
                    i <= dailyLives
                      ? 'bg-red-500/20 border-red-500 shadow-[0_0_12px_rgba(239,68,68,0.5)]'
                      : 'bg-gray-900 border-gray-700 opacity-30'
                  }`}>
                  <span className="text-xl sm:text-2xl">{i <= dailyLives ? '❤️' : '🖤'}</span>
                </motion.div>
              ))}
            </div>
            <div className="text-[9px] text-[#94A3B8] mt-2 font-sans">
              {dailyLives > 0 ? `${dailyLives} percobaan tersisa` : 'Habis! Reset besok pagi'}
            </div>
          </div>

          {/* Rules */}
          <div className="text-left bg-[#0a0e17]/50 border border-[#4ee6d8]/20 p-3 mb-5 text-[9px] text-[#94A3B8] font-sans space-y-1">
            <div>🖱️ Gerakkan mouse/jari untuk menghindar</div>
            <div>🖱️ Klik/tap untuk melempar kertas</div>
            <div>💀 Boss punya special power saat HP setengah</div>
            <div>❤️ Kalah = -1 nyawa. Menang = nyawa tetap!</div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-2">
            {dailyLives > 0 ? (
              <button onClick={startGame}
                className="w-full py-3 bg-[#4ee6d8] text-[#0a0e17] font-pixel text-sm font-bold border-2 border-white shadow-[4px_4px_0px_#000] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000] transition-all cursor-pointer">
                ⚔️ MULAI BERTARUNG
              </button>
            ) : (
              <div className="w-full py-3 bg-gray-800 text-gray-500 font-pixel text-sm font-bold border-2 border-gray-700 cursor-not-allowed">
                🔒 NYAWA HABIS — KEMBALI BESOK
              </div>
            )}
            <button onClick={onClose}
              className="w-full py-2 bg-transparent text-[#94A3B8] font-pixel text-[10px] border border-[#94A3B8]/30 hover:border-[#94A3B8] transition-colors cursor-pointer">
              KEMBALI
            </button>
          </div>

          <button onClick={onClose} className="absolute top-2 right-2 w-6 h-6 text-[#94A3B8] text-xs hover:text-white transition-colors cursor-pointer">✕</button>
        </motion.div>
      </motion.div>
    );
  }

  // === RESULT SCREEN ===
  if (screen === 'result') {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4">
        <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }}
          className="relative w-full max-w-md bg-[#0a0e17] border-2 border-[#4ee6d8] shadow-[0_0_40px_rgba(78,230,216,0.3)] p-6 sm:p-8 font-silkscreen text-center">

          <div className={`text-3xl sm:text-4xl font-pixel font-bold mb-2 ${resultType === 'win' ? 'text-emerald-400' : 'text-red-400'}`}>
            {resultType === 'win' ? '🎉 YOU WIN!' : '💀 GAME OVER'}
          </div>
          {resultType === 'win'
            ? <div className="text-xs text-emerald-300 font-sans mb-1">Boss Bagus telah dikalahkan!</div>
            : <div className="text-xs text-red-300 font-sans mb-1">Kamu kalah... nyawa berkurang 1</div>
          }
          <div className="text-amber-400 text-sm font-bold mb-4">SCORE: {score}</div>

          {/* Remaining Lives */}
          <div className="flex justify-center gap-2 mb-5">
            {[1, 2, 3].map(i => (
              <div key={i} className={`w-8 h-8 flex items-center justify-center rounded border ${i <= dailyLives ? 'bg-red-500/20 border-red-500' : 'bg-gray-900 border-gray-700 opacity-30'}`}>
                <span className="text-lg">{i <= dailyLives ? '❤️' : '🖤'}</span>
              </div>
            ))}
            <span className="text-[9px] text-[#94A3B8] self-center ml-2">{dailyLives} tersisa</span>
          </div>

          <div className="flex gap-3 justify-center">
            {dailyLives > 0 ? (
              <button onClick={startGame}
                className="px-5 py-2 bg-[#4ee6d8] text-[#0a0e17] font-pixel text-xs font-bold border-2 border-white shadow-[3px_3px_0px_#000] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#000] transition-all cursor-pointer">
                MAIN LAGI
              </button>
            ) : (
              <div className="px-5 py-2 bg-gray-800 text-gray-500 font-pixel text-xs font-bold border-2 border-gray-700 cursor-not-allowed">
                🔒 BESOK LAGI
              </div>
            )}
            <button onClick={onClose}
              className="px-5 py-2 bg-[#0a0e17] text-[#4ee6d8] font-pixel text-xs font-bold border-2 border-[#4ee6d8] shadow-[3px_3px_0px_#000] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#000] transition-all cursor-pointer">
              KELUAR
            </button>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  // === PLAYING SCREEN ===
  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4">
        <motion.div initial={{ scale: 0.8, y: 30 }} animate={{ scale: 1, y: 0 }}
          className="relative w-full max-w-4xl aspect-[16/9] bg-[#0a0e17] border-2 border-[#4ee6d8] shadow-[0_0_40px_rgba(78,230,216,0.3)] overflow-hidden font-silkscreen">

          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b2a] via-[#1b263b] to-[#0a0e17]" />
          <div className="absolute inset-0 bg-[radial-gradient(#4ee6d8_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />

          {/* HUD */}
          <div className="relative z-20 flex items-center justify-between px-3 sm:px-4 py-2">
            {/* Player HP */}
            <div className="flex items-center gap-2">
              <span className="text-[9px] sm:text-[10px] text-emerald-400 font-bold">MAGE</span>
              <div className="w-24 sm:w-28 h-3 bg-[#0a0e17] border border-emerald-400 overflow-hidden">
                <motion.div className="h-full bg-emerald-400" animate={{ width: `${(playerHP / playerMaxHP) * 100}%` }} transition={{ duration: 0.2 }} />
              </div>
              <span className="text-[8px] text-emerald-400">{playerHP}HP</span>
            </div>

            {/* Daily lives + Score */}
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {[1, 2, 3].map(i => (
                  <span key={i} className={`text-xs ${i <= dailyLives ? '' : 'opacity-20 grayscale'}`}>{i <= dailyLives ? '❤️' : '🖤'}</span>
                ))}
              </div>
              <span className="text-[9px] text-amber-400 font-bold">SCORE: {score}</span>
            </div>

            {/* Boss HP */}
            <div className="flex items-center gap-2">
              <div className="flex flex-col items-end gap-0.5">
                <span className="text-[7px] text-[#94A3B8]">{bossPhase === 3 ? '💀 RAGE' : bossPhase === 2 ? '⚡ PH.2' : 'PH.1'}</span>
                <div className="w-24 sm:w-28 h-3 bg-[#0a0e17] border border-red-400 overflow-hidden">
                  <motion.div className={`h-full ${bossPhase === 3 ? 'bg-red-600 animate-pulse' : bossPhase === 2 ? 'bg-orange-500' : 'bg-red-400'}`}
                    animate={{ width: `${(bossHP / bossMaxHP) * 100}%` }} transition={{ duration: 0.3 }} />
                </div>
              </div>
              <span className="text-[9px] text-red-400 font-bold">👑 BOSS</span>
            </div>
          </div>

          {/* Game Area */}
          <div ref={canvasRef} onPointerMove={handlePointerMove} onPointerDown={handleShoot}
            className="relative flex-1 w-full cursor-crosshair select-none touch-none" style={{ height: 'calc(100% - 56px)' }}>
            <div className="absolute bottom-0 inset-x-0 h-[2px] bg-[#4ee6d8]/30" />
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#4ee6d8]/15 -translate-x-1/2" />

            {/* Player */}
            <motion.div className="absolute z-10" style={{ left: '10%', top: `${playerY}%`, transform: 'translate(-50%, -50%)' }}
              animate={hitFlash === 'player' ? { x: [0, -10, 10, -5, 0], opacity: [1, 0.2, 1] } : playerInvincible ? { opacity: [0.3, 1, 0.3] } : { opacity: 1 }}
              transition={playerInvincible && hitFlash !== 'player' ? { duration: 0.2, repeat: Infinity } : { duration: 0.3 }}>
              <img src="/assets/game/Desain tanpa judul.svg" alt="Mage" className="w-14 h-20 sm:w-16 sm:h-24 object-contain drop-shadow-[0_0_12px_rgba(78,230,216,0.8)]" />
            </motion.div>

            {/* Boss */}
            <motion.div className="absolute z-10" style={{ left: '82%', top: `${bossY}%`, transform: 'translate(-50%, -50%) scaleX(-1)' }}
              animate={hitFlash === 'boss' ? { x: [0, 6, -6, 3, 0], opacity: [1, 0.5, 1] }
                : bossSpecialActive ? { scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }
                : bossPhase === 3 ? { scale: [1, 1.08, 1] } : {}}
              transition={{ duration: bossSpecialActive ? 0.3 : bossPhase === 3 ? 0.5 : 0.2, repeat: (bossSpecialActive || bossPhase === 3) ? Infinity : 0 }}>
              <img src="/assets/game/player.svg" alt="Boss" className={`w-14 h-20 sm:w-16 sm:h-24 pixelated ${bossSpecialActive ? 'drop-shadow-[0_0_30px_rgba(239,68,68,1)]' : bossPhase === 3 ? 'drop-shadow-[0_0_20px_rgba(239,68,68,1)]' : 'drop-shadow-[0_0_12px_rgba(239,68,68,0.6)]'}`} />
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-base">👑</div>
            </motion.div>

            {/* Papers */}
            {papers.map(p => (
              <motion.div key={p.id} className={`absolute z-10 ${p.fromPlayer ? 'text-emerald-400' : 'text-red-400'}`}
                style={{ left: `${p.x}%`, top: `${p.y}%`, transform: 'translate(-50%, -50%)', width: p.fromPlayer ? 16 : 14 + bossPhase * 2, height: p.fromPlayer ? 12 : 10 + bossPhase * 2 }}
                animate={{ rotate: p.fromPlayer ? [0, 360] : [360, 0] }} transition={{ duration: 0.4, repeat: Infinity, ease: 'linear' }}>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-[0_0_4px_currentColor]">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM6 20V4h7v5h5v11H6z" />
                </svg>
              </motion.div>
            ))}

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[7px] text-[#94A3B8]/50">GERAKKAN MOUSE/JARI • TAP UNTUK LEMPAR</div>
          </div>

          {/* Boss Power Warning */}
          <AnimatePresence>
            {showPowerWarning && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0.7, 1] }} exit={{ opacity: 0 }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="absolute inset-0 bg-red-900/50 z-[25] flex flex-col items-center justify-center pointer-events-none">
                <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 0.4, repeat: Infinity }} className="text-4xl sm:text-6xl">💀</motion.div>
                <div className="font-pixel text-xl sm:text-2xl text-red-400 font-bold mt-2 animate-pulse">⚠️ BOSS POWER!</div>
                <div className="text-xs text-red-300 mt-1 font-sans">PAPER STORM INCOMING!</div>
              </motion.div>
            )}
          </AnimatePresence>

          {bossSpecialActive && !showPowerWarning && (
            <div className="absolute top-12 left-1/2 -translate-x-1/2 z-[25] px-3 py-1 bg-red-900/80 border border-red-400 text-[9px] text-red-400 font-bold animate-pulse">
              🔥 PAPER STORM! — BOSS KEBAL
            </div>
          )}

          <button onClick={onClose} className="absolute top-2 right-2 z-30 w-7 h-7 bg-[#0a0e17] border border-red-400 text-red-400 text-xs font-bold flex items-center justify-center hover:bg-red-400 hover:text-[#0a0e17] transition-colors cursor-pointer">✕</button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
