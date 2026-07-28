"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Building2, Coffee, Layers, Sparkles, UserCheck, ArrowLeft, ArrowRight, ArrowUp, Info } from 'lucide-react';
import { audioManager } from '@/lib/audio-manager';
import { SkillsTreeModal } from '@/components/game/skills-tree-modal';
import { NpcRecruiterModal } from '@/components/game/npc-recruiter-modal';

interface GulfGameCanvasProps {
  onOpenProject: (projectId: string) => void;
}

export const GulfGameCanvas: React.FC<GulfGameCanvasProps> = ({ onOpenProject }) => {
  // Player Position state (0 to 100%)
  const [playerX, setPlayerX] = useState(10);
  const [isJumping, setIsJumping] = useState(false);
  const [facing, setFacing] = useState<'right' | 'left'>('right');
  const [showWorld1Popup, setShowWorld1Popup] = useState(false);
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const [isNpcOpen, setIsNpcOpen] = useState(false);

  // Keyboard Movement Event Listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        setFacing('right');
        setPlayerX((prev) => Math.min(prev + 3, 95));
        audioManager.playClickSound();
      } else if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        setFacing('left');
        setPlayerX((prev) => Math.max(prev - 3, 5));
        audioManager.playClickSound();
      } else if (e.key === ' ' || e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') {
        if (!isJumping) {
          setIsJumping(true);
          audioManager.playJumpSound();
          setTimeout(() => setIsJumping(false), 400);
        }
      } else if (e.key === 'e' || e.key === 'E') {
        handleInteractAtCurrentX();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [playerX, isJumping]);

  const handleInteractAtCurrentX = () => {
    audioManager.playClickSound();
    if (playerX >= 5 && playerX <= 25) {
      setShowWorld1Popup(true);
    } else if (playerX >= 30 && playerX <= 42) {
      onOpenProject('pt-surya-mitra-service');
    } else if (playerX >= 43 && playerX <= 55) {
      onOpenProject('smartcafe-pos');
    } else if (playerX >= 56 && playerX <= 68) {
      onOpenProject('invoice-management-system');
    } else if (playerX >= 70 && playerX <= 82) {
      setIsSkillsOpen(true);
    } else if (playerX >= 83) {
      setIsNpcOpen(true);
    }
  };

  const moveRight = () => {
    setFacing('right');
    setPlayerX((prev) => Math.min(prev + 5, 95));
    audioManager.playClickSound();
  };

  const moveLeft = () => {
    setFacing('left');
    setPlayerX((prev) => Math.max(prev - 5, 5));
    audioManager.playClickSound();
  };

  const doJump = () => {
    if (!isJumping) {
      setIsJumping(true);
      audioManager.playJumpSound();
      setTimeout(() => setIsJumping(false), 400);
    }
  };

  return (
    <div className="relative w-full overflow-x-auto font-silkscreen select-none pt-4 pb-12">
      
      {/* Skills Tree & NPC Modals */}
      <SkillsTreeModal isOpen={isSkillsOpen} onClose={() => setIsSkillsOpen(false)} />
      <NpcRecruiterModal isOpen={isNpcOpen} onClose={() => setIsNpcOpen(false)} />

      {/* World 1 Interactive Popup Modal */}
      <AnimatePresence>
        {showWorld1Popup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowWorld1Popup(false)}
              className="fixed inset-0 bg-[#05131A]/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative pixel-panel p-6 max-w-md w-full space-y-4 z-10 text-[#F8FAFC]"
            >
              <div className="flex items-center justify-between border-b border-[#1B4557] pb-3">
                <div className="text-xs text-[#45D3B2] font-bold">WORLD 1 // START SIGNBOARD</div>
                <button
                  onClick={() => setShowWorld1Popup(false)}
                  className="px-2 py-1 bg-red-600 text-white text-xs rounded"
                >
                  X
                </button>
              </div>

              <div className="space-y-2">
                <div className="font-pixel text-lg text-white">BAGUS SUPRIYANTO</div>
                <div className="text-xs text-[#45D3B2]">Product-Focused Frontend Engineer</div>
                <p className="text-xs text-[#94A3B8] font-sans font-medium leading-relaxed pt-2">
                  "I build digital products that solve real business problems. Welcome to GULF QUEST! Move right to explore production projects, skill upgrade tree, and contact portal."
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Playable 2D World Map Canvas Box */}
      <div className="min-w-[1000px] w-full min-h-[500px] bg-[#0A1E29] border-4 border-[#1B4557] shadow-[6px_6px_0px_#000] rounded-2xl relative overflow-hidden p-6 flex flex-col justify-between">
        
        {/* Background Grid & Sky */}
        <div className="absolute inset-0 bg-[radial-gradient(#112E3B_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

        {/* Top Instructions Banner */}
        <div className="flex items-center justify-between text-xs text-[#45D3B2] border-b border-[#1B4557] pb-3 relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#45D3B2] animate-pulse" />
            <span>PLAYABLE OVERWORLD MAP</span>
          </div>
          <div>USE ARROWS / A-D TO MOVE • SPACE TO JUMP • PRESS INTERACT</div>
        </div>

        {/* 2D WORLD OBJECTS & LOCATIONS STAGE */}
        <div className="relative h-[280px] w-full my-auto flex items-end">
          
          {/* Ground Line */}
          <div className="absolute bottom-0 inset-x-0 h-4 bg-[#1B4557] border-t-2 border-[#45D3B2]" />

          {/* PLAYER AVATAR SPRITE */}
          <motion.div
            animate={{
              left: `${playerX}%`,
              y: isJumping ? -70 : 0,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="absolute bottom-4 z-30 transform -translate-x-1/2 flex flex-col items-center gap-1"
          >
            <div className="px-2 py-0.5 bg-[#45D3B2] text-[#05131A] text-[9px] font-bold rounded shadow-[2px_2px_0px_#000]">
              BAGUS
            </div>
            <div className={`w-10 h-12 rounded-lg bg-[#0A1E29] border-2 border-[#45D3B2] shadow-[3px_3px_0px_#000] flex items-center justify-center p-0.5 overflow-hidden ${facing === 'left' ? 'scale-x-[-1]' : ''}`}>
              <img
                src="/assets/game/player.svg"
                alt="Bagus Suit Avatar"
                className="w-full h-full object-contain pixelated"
              />
            </div>
          </motion.div>

          {/* WORLD 1 — START AREA SIGNBOARD */}
          <div
            onClick={() => {
              setPlayerX(15);
              setShowWorld1Popup(true);
            }}
            className="absolute left-[15%] bottom-4 transform -translate-x-1/2 cursor-pointer group flex flex-col items-center"
          >
            <div className="p-3 bg-[#05131A] border-2 border-[#45D3B2] group-hover:border-white rounded-lg shadow-[3px_3px_0px_#000] text-center space-y-1">
              <div className="text-[10px] text-[#45D3B2] font-bold">WORLD 1 // START</div>
              <div className="font-pixel text-xs text-white">SIGNBOARD</div>
              <div className="text-[9px] text-[#94A3B8]">BAGUS SUPRIYANTO</div>
            </div>
            <div className="w-1.5 h-6 bg-[#1B4557]" />
          </div>

          {/* WORLD 2 — PROJECT LAND BUILDINGS */}
          
          {/* Building 1: PT Surya Mitra Service */}
          <div
            onClick={() => {
              setPlayerX(36);
              onOpenProject('pt-surya-mitra-service');
            }}
            className="absolute left-[36%] bottom-4 transform -translate-x-1/2 cursor-pointer group flex flex-col items-center"
          >
            <div className="p-4 bg-[#05131A] border-2 border-[#45D3B2] group-hover:border-white rounded-xl shadow-[4px_4px_0px_#000] text-center space-y-2">
              <Building2 className="w-6 h-6 text-[#45D3B2] mx-auto group-hover:scale-110 transition-transform" />
              <div className="text-[10px] text-[#45D3B2] font-bold">WORLD 2 // BUILDING 1</div>
              <div className="font-bold text-xs text-white">PT SURYA MITRA</div>
              <button className="pixel-btn px-2 py-1 text-[9px]">ENTER BUILD ▶</button>
            </div>
          </div>

          {/* Building 2: SmartCafe POS */}
          <div
            onClick={() => {
              setPlayerX(49);
              onOpenProject('smartcafe-pos');
            }}
            className="absolute left-[49%] bottom-4 transform -translate-x-1/2 cursor-pointer group flex flex-col items-center"
          >
            <div className="p-4 bg-[#05131A] border-2 border-[#45D3B2] group-hover:border-white rounded-xl shadow-[4px_4px_0px_#000] text-center space-y-2">
              <Coffee className="w-6 h-6 text-amber-400 mx-auto group-hover:scale-110 transition-transform" />
              <div className="text-[10px] text-amber-400 font-bold">WORLD 2 // BUILDING 2</div>
              <div className="font-bold text-xs text-white">SMARTCAFE POS</div>
              <button className="pixel-btn px-2 py-1 text-[9px]">ENTER BUILD ▶</button>
            </div>
          </div>

          {/* Building 3: Invoice System */}
          <div
            onClick={() => {
              setPlayerX(62);
              onOpenProject('invoice-management-system');
            }}
            className="absolute left-[62%] bottom-4 transform -translate-x-1/2 cursor-pointer group flex flex-col items-center"
          >
            <div className="p-4 bg-[#05131A] border-2 border-[#45D3B2] group-hover:border-white rounded-xl shadow-[4px_4px_0px_#000] text-center space-y-2">
              <Layers className="w-6 h-6 text-sky-400 mx-auto group-hover:scale-110 transition-transform" />
              <div className="text-[10px] text-sky-400 font-bold">WORLD 2 // BUILDING 3</div>
              <div className="font-bold text-xs text-white">INVOICE SYSTEM</div>
              <button className="pixel-btn px-2 py-1 text-[9px]">ENTER BUILD ▶</button>
            </div>
          </div>

          {/* WORLD 3 — SKILLS AREA UPGRADE TREE */}
          <div
            onClick={() => {
              setPlayerX(76);
              setIsSkillsOpen(true);
            }}
            className="absolute left-[76%] bottom-4 transform -translate-x-1/2 cursor-pointer group flex flex-col items-center"
          >
            <div className="p-4 bg-[#05131A] border-2 border-emerald-400 group-hover:border-white rounded-xl shadow-[4px_4px_0px_#000] text-center space-y-2">
              <Sparkles className="w-6 h-6 text-emerald-400 mx-auto group-hover:scale-110 transition-transform" />
              <div className="text-[10px] text-emerald-400 font-bold">WORLD 3</div>
              <div className="font-bold text-xs text-white">SKILLS TREE</div>
              <button className="pixel-btn px-2 py-1 text-[9px]">OPEN TREE ⚡</button>
            </div>
          </div>

          {/* WORLD 4 — CONTACT AREA NPC RECRUITER */}
          <div
            onClick={() => {
              setPlayerX(90);
              setIsNpcOpen(true);
            }}
            className="absolute left-[90%] bottom-4 transform -translate-x-1/2 cursor-pointer group flex flex-col items-center"
          >
            <div className="p-4 bg-[#05131A] border-2 border-purple-400 group-hover:border-white rounded-xl shadow-[4px_4px_0px_#000] text-center space-y-2">
              <UserCheck className="w-6 h-6 text-purple-400 mx-auto group-hover:scale-110 transition-transform" />
              <div className="text-[10px] text-purple-400 font-bold">WORLD 4</div>
              <div className="font-bold text-xs text-white">NPC RECRUITER</div>
              <button className="pixel-btn px-2 py-1 text-[9px]">TALK TO NPC 💬</button>
            </div>
          </div>

        </div>

        {/* BOTTOM ON-SCREEN CONTROLS FOR MOBILE / TOUCH */}
        <div className="flex items-center justify-between pt-3 border-t border-[#1B4557] relative z-10">
          
          <div className="flex items-center gap-2">
            <button
              onClick={moveLeft}
              className="pixel-btn px-4 py-2 text-xs flex items-center gap-1"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>LEFT (A)</span>
            </button>
            
            <button
              onClick={doJump}
              className="pixel-btn px-4 py-2 text-xs flex items-center gap-1"
            >
              <ArrowUp className="w-4 h-4" />
              <span>JUMP (SPACE)</span>
            </button>

            <button
              onClick={moveRight}
              className="pixel-btn px-4 py-2 text-xs flex items-center gap-1"
            >
              <span>RIGHT (D)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={handleInteractAtCurrentX}
            className="pixel-btn px-5 py-2 text-xs flex items-center gap-2 bg-[#45D3B2] text-[#05131A] font-bold"
          >
            <Info className="w-4 h-4" />
            <span>INTERACT AT ZONE (E)</span>
          </button>

        </div>

      </div>

    </div>
  );
};
