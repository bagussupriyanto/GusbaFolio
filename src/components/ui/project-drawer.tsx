"use client";

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Puzzle, Wrench, TrendingUp, Lock } from 'lucide-react';
import { Project } from '@/types';
import { MacOSFrame } from '@/components/ui/macos-frame';

interface ProjectDrawerProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  isCleanMode?: boolean;
}

export const ProjectDrawer: React.FC<ProjectDrawerProps> = ({
  project,
  isOpen,
  onClose,
  isCleanMode = false,
}) => {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const [isZoomed, setIsZoomed] = React.useState(false);

  useEffect(() => {
    if (project) {
      setSelectedImage(project.mockupPath || null);
      setIsZoomed(false);
    }
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isZoomed) setIsZoomed(false);
        else onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, isZoomed, onClose]);

  if (!project) return null;

  const currentImage = selectedImage || project.mockupPath;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className={`fixed inset-0 z-[999] flex items-center justify-center p-3 sm:p-6 ${isCleanMode ? 'font-sans' : 'font-silkscreen'}`}>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className={`fixed inset-0 backdrop-blur-md ${isCleanMode ? 'bg-[#161616]/70' : 'bg-[#0a0e17]/90'}`}
          />

          {/* ===== MAIN MODAL ===== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className={`relative w-full max-w-[1100px] max-h-[94vh] overflow-hidden z-10 my-auto flex flex-col ${
              isCleanMode
                ? 'bg-[#FAF9F6] text-[#161616] rounded-3xl border border-[#E6E4DD] shadow-2xl'
                : 'bg-[#12182a] text-[#F8FAFC] border-2 sm:border-4 border-[#4ee6d8] shadow-[4px_4px_0px_#000] sm:shadow-[8px_8px_0px_#000]'
            }`}
          >

            {/* ── Row 1: Header Bar ── */}
            <div className={`flex items-center justify-between px-5 sm:px-7 py-3.5 border-b ${
              isCleanMode ? 'bg-[#F0EEE6] border-[#E6E4DD]' : 'bg-[#0a0e17] border-b-2 border-[#4ee6d8]'
            }`}>
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <span className={`px-3 py-0.5 text-[10px] font-mono font-bold tracking-widest uppercase shrink-0 ${
                  isCleanMode
                    ? 'rounded-full bg-[#161616] text-white'
                    : 'bg-[#4ee6d8] text-[#0a0e17]'
                }`}>
                  CASE STUDY DETAIL
                </span>
                <span className={`w-2 h-2 rounded-full animate-pulse shrink-0 ${isCleanMode ? 'bg-[#B89355]' : 'bg-[#4ee6d8]'}`} />
                <span className={`text-xs font-mono font-semibold uppercase tracking-wider truncate max-w-[180px] sm:max-w-none ${
                  isCleanMode ? 'text-[#66645E]' : 'text-[#4ee6d8]'
                }`}>
                  {project.category}
                </span>
              </div>
              <button
                onClick={onClose}
                className={`px-3.5 py-1.5 text-xs font-mono font-bold flex items-center gap-1 cursor-pointer shrink-0 transition-all ${
                  isCleanMode
                    ? 'rounded-full bg-[#161616] text-white hover:bg-[#33312D]'
                    : 'pixel-btn bg-red-600 border-red-400 text-white hover:bg-red-700 font-mono'
                }`}
              >
                <X className="w-4 h-4" />
                CLOSE
              </button>
            </div>

            {/* ── Row 2: Title + Visit Button ── */}
            <div className={`flex items-center justify-between gap-2 sm:gap-4 px-5 sm:px-7 py-4 border-b ${
              isCleanMode ? 'bg-[#FAF9F6] border-[#E6E4DD]' : 'bg-[#0d1220] border-[#4ee6d8]/20'
            }`}>
              <h2 className={`text-lg sm:text-2xl tracking-tight truncate ${
                isCleanMode ? 'font-serif-editorial font-bold text-[#161616]' : 'font-pixel text-xs sm:text-base text-[#F8FAFC]'
              }`}>
                {project.title}
              </h2>
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-5 py-2 text-xs font-mono flex items-center gap-2 shrink-0 cursor-pointer font-bold transition-all ${
                    isCleanMode
                      ? 'rounded-full bg-[#161616] text-white hover:bg-[#33312D] shadow-xs'
                      : 'pixel-btn'
                  }`}
                >
                  VISIT LIVE WEBSITE
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <div className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold flex items-center gap-1.5 shrink-0 ${
                  isCleanMode
                    ? 'bg-[#F0EEE6] border border-[#E6E4DD] text-[#55524C]'
                    : 'bg-[#2A2A2A] border border-[#3D3D3D] text-[#AAAAAA]'
                }`}>
                  <Lock className="w-3.5 h-3.5 text-[#B89355]" />
                  <span>INTERNAL SYSTEM (NDA)</span>
                </div>
              )}
            </div>

            {/* ── Row 3: Main Content Area ── */}
            <div className="flex flex-col lg:flex-row gap-4 p-4 sm:p-6 overflow-y-auto max-h-[75vh] sm:max-h-none scrollbar-hide">

              {/* Left: Browser Frame + Thumbnails */}
              <div className="lg:w-[58%] flex flex-col gap-3 shrink-0">
                {/* MacOS Browser Frame */}
                <MacOSFrame url={project.liveUrl || `https://bagus.dev/${project.id}`}>
                  <div
                    onClick={() => currentImage && setIsZoomed(true)}
                    className="relative aspect-[16/9] bg-[#161616] overflow-hidden cursor-pointer group/preview rounded-b-xl"
                  >
                    {currentImage ? (
                      <>
                        <img
                          key={currentImage}
                          src={currentImage}
                          alt={project.title}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/preview:scale-[1.02]"
                        />
                        <div className="absolute inset-0 bg-[#161616]/40 opacity-0 group-hover/preview:opacity-100 flex items-center justify-center transition-opacity duration-200">
                          <span className={`px-3 py-1.5 text-xs font-mono font-bold ${
                            isCleanMode ? 'bg-[#FAF9F6] text-[#161616] rounded-full shadow-md' : 'bg-[#4ee6d8] text-[#0a0e17] font-pixel text-[9px] border-2 border-white'
                          }`}>
                            🔍 CLICK TO ENLARGE MOCKUP
                          </span>
                        </div>
                      </>
                    ) : (
                      <div className="absolute inset-0 bg-[#161616] p-4 flex flex-col justify-center items-center text-center">
                        <div className="font-serif-editorial text-lg text-white">{project.title}</div>
                        <p className="text-xs text-[#AAAAAA] mt-1">{project.category}</p>
                      </div>
                    )}
                  </div>
                </MacOSFrame>

                {/* 4-Shot Thumbnail Strip */}
                <div className="grid grid-cols-4 gap-2">
                  {(project.galleryImages && project.galleryImages.length > 0
                    ? project.galleryImages
                    : [
                        { url: project.mockupPath, label: "HERO" },
                        { url: project.mockupPath, label: "CMS" },
                        { url: project.mockupPath, label: "KATALOG" },
                        { url: project.mockupPath, label: "PROMO" },
                      ]
                  ).map((item, i) => {
                    const isActive = currentImage === item.url;
                    return (
                      <button
                        key={i}
                        onClick={() => setSelectedImage(item.url)}
                        className={`relative aspect-[16/9] overflow-hidden rounded-xl border-2 transition-all cursor-pointer ${
                          isActive
                            ? isCleanMode
                              ? 'border-[#161616] shadow-md scale-[1.02]'
                              : 'border-[#4ee6d8] shadow-[0_0_10px_rgba(78,230,216,0.5)]'
                            : isCleanMode
                              ? 'border-[#E6E4DD] opacity-60 hover:opacity-100 hover:border-[#161616]'
                              : 'border-[#4ee6d8]/20 opacity-60 hover:opacity-100'
                        }`}
                      >
                        {item.url && (
                          <img
                            src={item.url}
                            alt={`Shot ${i + 1}`}
                            className="w-full h-full object-cover object-top"
                          />
                        )}
                        <div className={`absolute top-0 left-0 px-1.5 py-0.5 text-[8px] font-mono font-bold ${
                          isActive
                            ? isCleanMode ? 'bg-[#161616] text-white' : 'bg-[#4ee6d8] text-[#0a0e17]'
                            : 'bg-black/70 text-white'
                        }`}>
                          {String(i + 1).padStart(2, '0')}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right: Case Study Narrative Cards */}
              <div className="lg:w-[42%] flex flex-col gap-3 lg:h-full">

                {/* Problem */}
                <div className={`flex-1 p-4 rounded-2xl border flex flex-col ${
                  isCleanMode
                    ? 'bg-white border-[#E6E4DD] shadow-2xs'
                    : 'bg-[#0a0e17] border-l-3 border-l-amber-400 border-amber-400/20'
                }`}>
                  <div className={`text-xs font-mono font-bold flex items-center gap-1.5 mb-1.5 uppercase ${
                    isCleanMode ? 'text-[#161616]' : 'text-amber-400'
                  }`}>
                    <Puzzle className="w-3.5 h-3.5 text-[#B89355] shrink-0" />
                    <span>THE PROBLEM</span>
                  </div>
                  <p className={`text-xs leading-relaxed font-sans ${
                    isCleanMode ? 'text-[#55524C]' : 'text-[#CBD5E1]'
                  }`}>
                    {project.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className={`flex-1 p-4 rounded-2xl border flex flex-col ${
                  isCleanMode
                    ? 'bg-white border-[#E6E4DD] shadow-2xs'
                    : 'bg-[#0a0e17] border-l-3 border-l-[#4ee6d8] border-[#4ee6d8]/20'
                }`}>
                  <div className={`text-xs font-mono font-bold flex items-center gap-1.5 mb-1.5 uppercase ${
                    isCleanMode ? 'text-[#161616]' : 'text-[#4ee6d8]'
                  }`}>
                    <Wrench className="w-3.5 h-3.5 text-[#B89355] shrink-0" />
                    <span>THE SOLUTION</span>
                  </div>
                  <p className={`text-xs leading-relaxed font-sans ${
                    isCleanMode ? 'text-[#55524C]' : 'text-[#CBD5E1]'
                  }`}>
                    {project.solution}
                  </p>
                </div>

                {/* Result */}
                <div className={`flex-1 p-4 rounded-2xl border flex flex-col ${
                  isCleanMode
                    ? 'bg-white border-[#E6E4DD] shadow-2xs'
                    : 'bg-[#0a0e17] border-l-3 border-l-emerald-400 border-emerald-400/20'
                }`}>
                  <div className={`text-xs font-mono font-bold flex items-center gap-1.5 mb-1.5 uppercase ${
                    isCleanMode ? 'text-[#161616]' : 'text-emerald-400'
                  }`}>
                    <TrendingUp className="w-3.5 h-3.5 text-[#B89355] shrink-0" />
                    <span>BUSINESS OUTCOME</span>
                  </div>
                  <p className={`text-xs leading-relaxed font-sans ${
                    isCleanMode ? 'text-[#55524C]' : 'text-[#CBD5E1]'
                  }`}>
                    {project.outcome}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.map((tech) => (
                    <span key={tech} className={`px-2.5 py-1 text-[10px] font-mono font-semibold rounded-md ${
                      isCleanMode
                        ? 'bg-[#F0EEE6] border border-[#E6E4DD] text-[#161616]'
                        : 'bg-[#0a0e17] border border-[#4ee6d8]/30 text-[#4ee6d8] font-pixel text-[8px]'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>

          </motion.div>

          {/* ===== FULLSCREEN LIGHTBOX ZOOM ===== */}
          <AnimatePresence>
            {isZoomed && currentImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsZoomed(false)}
                className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center p-4 cursor-zoom-out"
              >
                <motion.div
                  initial={{ scale: 0.9, y: 15 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 15 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative max-w-6xl w-full max-h-[90vh] flex flex-col bg-[#161616] border border-[#333333] shadow-2xl rounded-2xl overflow-hidden"
                >
                  {/* Lightbox Header */}
                  <div className="flex items-center justify-between px-5 py-3 bg-[#222222] border-b border-[#333333] text-white">
                    <div className="text-xs font-mono font-bold uppercase tracking-wider">
                      🔍 {project.title} — HIGH RES PREVIEW
                    </div>
                    <button
                      onClick={() => setIsZoomed(false)}
                      className="px-3.5 py-1.5 rounded-full bg-white text-[#161616] font-mono text-xs font-bold hover:bg-[#EAE8E1] cursor-pointer"
                    >
                      ✕ CLOSE PREVIEW
                    </button>
                  </div>

                  {/* Lightbox Image */}
                  <div className="flex-1 overflow-auto bg-black p-4 flex items-center justify-center">
                    <img
                      src={currentImage}
                      alt={project.title}
                      className="max-w-full max-h-[80vh] object-contain rounded-lg"
                    />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      )}
    </AnimatePresence>
  );
};
