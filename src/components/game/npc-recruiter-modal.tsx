"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, MessageCircle, Github, Linkedin, Copy, Check, UserCheck, MessageSquare } from 'lucide-react';
import { DEVELOPER_DATA } from '@/lib/constants';
import { audioManager } from '@/lib/audio-manager';

interface NpcRecruiterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NpcRecruiterModal: React.FC<NpcRecruiterModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    audioManager.playCoinSound();
    navigator.clipboard.writeText(DEVELOPER_DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto font-silkscreen">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#05131A]/90 backdrop-blur-md"
        />

        {/* NPC Dialogue Box Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-2xl bg-[#0A1E29] border-4 border-[#1B4557] shadow-[6px_6px_0px_#000] rounded-2xl p-6 sm:p-8 space-y-6 z-10 my-auto text-[#F8FAFC]"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b-2 border-[#1B4557] pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-[#45D3B2] border-2 border-white flex items-center justify-center text-[#05131A]">
                <UserCheck className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <div className="text-[10px] text-[#45D3B2] font-bold">WORLD 4 // NPC DIALOGUE</div>
                <div className="font-pixel text-sm sm:text-base text-white">RECRUITER & HIRING MANAGER</div>
              </div>
            </div>

            <button
              onClick={() => {
                audioManager.playClickSound();
                onClose();
              }}
              className="pixel-btn px-3 py-1.5 text-xs flex items-center gap-1 bg-red-600 border-red-400 text-white"
            >
              <X className="w-4 h-4" />
              <span>CLOSE</span>
            </button>
          </div>

          {/* Dialogue Text Bubble */}
          <div className="p-4 bg-[#05131A] border-2 border-[#45D3B2] rounded-xl space-y-2 relative shadow-[3px_3px_0px_#000]">
            <div className="flex items-center gap-2 text-xs text-[#45D3B2] font-bold">
              <MessageSquare className="w-4 h-4" />
              <span>RECRUITER SPEAKS:</span>
            </div>
            <p className="text-xs sm:text-sm text-[#F8FAFC] font-sans font-medium leading-relaxed">
              "Hello Bagus! We reviewed your portfolio and production systems. We're very impressed with your quality of work. How would you like to connect?"
            </p>
          </div>

          {/* Dialogue Choices List matching prompt */}
          <div className="space-y-3 pt-2">
            <div className="text-xs text-[#45D3B2] font-bold">CHOOSE ACTION:</div>
            
            {/* Email Choice */}
            <div className="p-3 bg-[#05131A] border-2 border-[#1B4557] hover:border-[#45D3B2] rounded-xl flex items-center justify-between gap-3 shadow-[2px_2px_0px_#000]">
              <div className="flex items-center gap-3 overflow-hidden">
                <Mail className="w-5 h-5 text-[#45D3B2] shrink-0" />
                <div>
                  <div className="text-[10px] text-[#45D3B2] font-bold">DIRECT EMAIL</div>
                  <div className="text-xs font-mono text-[#F8FAFC] truncate">
                    {DEVELOPER_DATA.contact.email}
                  </div>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="pixel-btn px-4 py-2 text-xs flex items-center gap-1 shrink-0"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>COPIED!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>COPY</span>
                  </>
                )}
              </button>
            </div>

            {/* WhatsApp Choice */}
            <a
              href={DEVELOPER_DATA.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => audioManager.playClickSound()}
              className="p-3 bg-[#05131A] border-2 border-emerald-500/60 hover:border-emerald-400 rounded-xl flex items-center justify-between gap-3 shadow-[2px_2px_0px_#000] transition-colors group"
            >
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-[10px] text-emerald-400 font-bold">WHATSAPP DIRECT</div>
                  <div className="text-xs font-mono text-[#F8FAFC]">
                    +62 851-5522-7735
                  </div>
                </div>
              </div>
              <span className="text-xs text-emerald-400 group-hover:translate-x-1 transition-transform">CONNECT →</span>
            </a>

            {/* GitHub Choice */}
            <a
              href="https://github.com/bagussupriyanto"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => audioManager.playClickSound()}
              className="p-3 bg-[#05131A] border-2 border-[#1B4557] hover:border-[#45D3B2] rounded-xl flex items-center justify-between gap-3 shadow-[2px_2px_0px_#000] transition-colors group"
            >
              <div className="flex items-center gap-3">
                <Github className="w-5 h-5 text-[#45D3B2] shrink-0" />
                <div>
                  <div className="text-[10px] text-[#45D3B2] font-bold">GITHUB PROFILE</div>
                  <div className="text-xs font-mono text-[#F8FAFC]">
                    github.com/bagussupriyanto
                  </div>
                </div>
              </div>
              <span className="text-xs text-[#45D3B2] group-hover:translate-x-1 transition-transform">OPEN →</span>
            </a>

            {/* LinkedIn Choice */}
            <a
              href="https://www.linkedin.com/in/bagus-supriyanto-18b32819b"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => audioManager.playClickSound()}
              className="p-3 bg-[#05131A] border-2 border-[#1B4557] hover:border-[#45D3B2] rounded-xl flex items-center justify-between gap-3 shadow-[2px_2px_0px_#000] transition-colors group"
            >
              <div className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-sky-400 shrink-0" />
                <div>
                  <div className="text-[10px] text-sky-400 font-bold">LINKEDIN PROFILE</div>
                  <div className="text-xs font-mono text-[#F8FAFC]">
                    linkedin.com/in/bagus-supriyanto
                  </div>
                </div>
              </div>
              <span className="text-xs text-sky-400 group-hover:translate-x-1 transition-transform">OPEN →</span>
            </a>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
