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
        <div className={`fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-5 ${isCleanMode ? 'font-sans' : 'font-silkscreen'}`}>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0a0e17]/90 backdrop-blur-md"
          />

          {/* ===== MAIN MODAL ===== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.3 }}
            className={`relative w-full max-w-[1100px] max-h-[94vh] overflow-hidden z-10 my-auto flex flex-col ${
              isCleanMode
                ? 'bg-[#F6F5F2] text-[#1A1A1A] rounded-2xl border border-[#DCD8CF] shadow-2xl'
                : 'bg-[#12182a] text-[#F8FAFC] border-2 sm:border-4 border-[#4ee6d8] shadow-[4px_4px_0px_#000] sm:shadow-[8px_8px_0px_#000]'
            }`}
          >

            {/* ── Row 1: Header Bar ── */}
            <div className={`flex items-center justify-between px-4 sm:px-6 py-3 border-b ${
              isCleanMode ? 'bg-[#EFECE6] border-[#DCD8CF]' : 'bg-[#0a0e17] border-b-2 border-[#4ee6d8]'
            }`}>
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <span className={`px-2.5 py-0.5 text-[10px] font-bold tracking-wide uppercase shrink-0 ${
                  isCleanMode
                    ? 'rounded-full bg-[#DCD8CF] text-[#1A1A1A] font-mono'
                    : 'bg-[#4ee6d8] text-[#0a0e17]'
                }`}>
                  PROJECT DETAIL
                </span>
                <span className={`w-2 h-2 rounded-full animate-pulse shrink-0 ${isCleanMode ? 'bg-[#8C6D46]' : 'bg-[#4ee6d8]'}`} />
                <span className={`text-xs font-semibold uppercase tracking-wider truncate max-w-[180px] sm:max-w-none ${
                  isCleanMode ? 'text-[#706C64] font-mono' : 'text-[#4ee6d8] font-mono'
                }`}>
                  {project.category}
                </span>
              </div>
              <button
                onClick={onClose}
                className={`px-3 py-1.5 text-xs font-semibold flex items-center gap-1 cursor-pointer shrink-0 transition-all ${
                  isCleanMode
                    ? 'rounded-full bg-[#DCD8CF] hover:bg-[#C5C1B8] text-[#1A1A1A]'
                    : 'pixel-btn bg-red-600 border-red-400 text-white hover:bg-red-700 font-mono'
                }`}
              >
                <X className="w-4 h-4" />
                CLOSE
              </button>
            </div>

            {/* ── Row 2: Title + Visit Button ── */}
            <div className={`flex items-center justify-between gap-2 sm:gap-4 px-4 sm:px-6 py-3.5 border-b ${
              isCleanMode ? 'bg-[#F6F5F2] border-[#DCD8CF]' : 'bg-[#0d1220] border-[#4ee6d8]/20'
            }`}>
              <h2 className={`text-base sm:text-xl tracking-tight truncate ${
                isCleanMode ? 'font-serif-editorial font-bold text-[#1A1A1A]' : 'font-pixel text-xs sm:text-base text-[#F8FAFC]'
              }`}>
                {project.title}
              </h2>
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 text-xs flex items-center gap-1.5 shrink-0 cursor-pointer font-semibold transition-all ${
                    isCleanMode
                      ? 'rounded-full bg-[#1A1A1A] text-white hover:bg-[#333333] shadow-xs'
                      : 'pixel-btn font-mono'
                  }`}
                >
                  VISIT WEBSITE
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <div className="px-3 py-1.5 rounded-full text-xs bg-[#EFECE6] border border-[#DCD8CF] text-[#706C64] font-semibold flex items-center gap-1.5 shrink-0">
                  <Lock className="w-3.5 h-3.5" />
                  <span>INTERNAL SYSTEM (NDA)</span>
                </div>
              )}
            </div>

            {/* ── Row 3: Main Content Area (Scrollable on Mobile) ── */}
            <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 p-3 sm:p-4 overflow-y-auto max-h-[75vh] sm:max-h-none scrollbar-hide">

              {/* Left: Browser Frame + Thumbnails */}
              <div className="lg:w-[58%] flex flex-col gap-2 sm:gap-2.5 shrink-0">
                {/* MacOS Browser Frame */}
                <MacOSFrame url={project.liveUrl || `https://bagus.dev/${project.id}`}>
                  <div
                    onClick={() => currentImage && setIsZoomed(true)}
                    className="relative aspect-[16/9] bg-[#0a0e17] overflow-hidden cursor-pointer group/preview"
                  >
                    {currentImage ? (
                      <>
                        <img
                          key={currentImage}
                          src={currentImage}
                          alt={project.title}
                          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover/preview:scale-[1.02]"
                        />
                        <div className="absolute inset-0 bg-[#0a0e17]/40 opacity-0 group-hover/preview:opacity-100 flex items-center justify-center transition-opacity duration-200">
                          <span className="px-2.5 py-1.5 bg-[#4ee6d8] text-[#0a0e17] font-pixel text-[8px] sm:text-[9px] font-bold border-2 border-white shadow-[2px_2px_0px_#000]">
                            🔍 KLIK UNTUK ZOOM
                          </span>
                        </div>
                      </>
                    ) : (
                      <div className="absolute inset-0 bg-[#0a0e17] p-4 flex flex-col justify-center items-center text-center">
                        <div className="font-pixel text-xs sm:text-sm text-[#4ee6d8]">{project.title}</div>
                        <p className="text-[9px] sm:text-[10px] text-[#94A3B8] mt-1">{project.category}</p>
                      </div>
                    )}
                  </div>
                </MacOSFrame>

                {/* 4-Shot Thumbnail Strip */}
                <div className="grid grid-cols-4 gap-1 sm:gap-1.5">
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
                        className={`relative aspect-[16/9] overflow-hidden border-2 transition-all cursor-pointer ${
                          isActive
                            ? 'border-[#4ee6d8] shadow-[0_0_10px_rgba(78,230,216,0.5)]'
                            : 'border-[#4ee6d8]/20 hover:border-[#4ee6d8]/60 opacity-60 hover:opacity-100'
                        }`}
                      >
                        {item.url && (
                          <img
                            src={item.url}
                            alt={`Shot ${i + 1}`}
                            className="w-full h-full object-cover object-top"
                          />
                        )}
                        {/* Number badge */}
                        <div className={`absolute top-0 left-0 px-1 py-0.5 text-[6px] sm:text-[7px] font-pixel font-bold ${
                          isActive
                            ? 'bg-[#4ee6d8] text-[#0a0e17]'
                            : 'bg-[#0a0e17]/80 text-[#4ee6d8]/80'
                        }`}>
                          {String(i + 1).padStart(2, '0')}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right: Info Cards */}
              <div className="lg:w-[42%] flex flex-col gap-2.5 sm:gap-3 lg:h-full">

                {/* Problem */}
                <div className="flex-1 p-3 sm:p-4 bg-[#0a0e17] border-l-3 border-l-amber-400 border border-amber-400/20 flex flex-col">
                  <div className="text-[10px] sm:text-[11px] text-amber-400 font-bold flex items-center gap-1.5 mb-1 sm:mb-1.5">
                    <Puzzle className="w-3.5 h-3.5 shrink-0" />
                    PROBLEM
                  </div>
                  <p className="text-[10px] sm:text-xs text-[#CBD5E1] leading-relaxed font-sans">
                    {project.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="flex-1 p-3 sm:p-4 bg-[#0a0e17] border-l-3 border-l-[#4ee6d8] border border-[#4ee6d8]/20 flex flex-col">
                  <div className="text-[10px] sm:text-[11px] text-[#4ee6d8] font-bold flex items-center gap-1.5 mb-1 sm:mb-1.5">
                    <Wrench className="w-3.5 h-3.5 shrink-0" />
                    SOLUTION
                  </div>
                  <p className="text-[10px] sm:text-xs text-[#CBD5E1] leading-relaxed font-sans">
                    {project.solution}
                  </p>
                </div>

                {/* Result */}
                <div className="flex-1 p-3 sm:p-4 bg-[#0a0e17] border-l-3 border-l-emerald-400 border border-emerald-400/20 flex flex-col">
                  <div className="text-[10px] sm:text-[11px] text-emerald-400 font-bold flex items-center gap-1.5 mb-1 sm:mb-1.5">
                    <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                    RESULT
                  </div>
                  <p className="text-[10px] sm:text-xs text-[#CBD5E1] leading-relaxed font-sans">
                    {project.outcome}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-0.5 sm:pt-1">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-[#0a0e17] border border-[#4ee6d8]/30 text-[#4ee6d8] text-[8px] sm:text-[9px] font-pixel">
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
                  initial={{ scale: 0.85, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.85, y: 20 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative max-w-6xl w-full max-h-[90vh] flex flex-col bg-[#0a0e17] border-4 border-[#4ee6d8] shadow-[0_0_60px_rgba(78,230,216,0.4)] overflow-hidden"
                >
                  {/* Lightbox Header */}
                  <div className="flex items-center justify-between px-4 py-2 bg-[#12182a] border-b-2 border-[#4ee6d8]">
                    <div className="text-[10px] text-[#4ee6d8] font-bold font-pixel">
                      🔍 {project.title} — PREVIEW
                    </div>
                    <button
                      onClick={() => setIsZoomed(false)}
                      className="pixel-btn px-3 py-1 text-[10px] bg-red-600 border-red-400 text-white hover:bg-red-700 cursor-pointer"
                    >
                      ✕ TUTUP
                    </button>
                  </div>

                  {/* Lightbox Image */}
                  <div className="flex-1 overflow-auto bg-black p-2 flex items-center justify-center">
                    <img
                      src={currentImage}
                      alt={project.title}
                      className="max-w-full max-h-[80vh] object-contain"
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
