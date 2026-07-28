"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Briefcase, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from '@/components/ui/theme-toggle';

const SECTIONS = [
  { id: "hero", label: "HOME", icon: "🏠" },
  { id: "about", label: "ABOUT ME", icon: "👤" },
  { id: "world-map-section", label: "PROJECTS", icon: "🗺️" },
  { id: "stack", label: "TECH STACK", icon: "⚙️" },
  { id: "contact", label: "CONTACT", icon: "📬" },
];

const NAV_LINKS = [
  { label: "1. ABOUT ME", sectionIndex: 1 },
  { label: "2. PT SURYA MITRA SERVICE", sectionIndex: 2 },
  { label: "3. SMARTCAFE POS", sectionIndex: 2 },
  { label: "4. INVOICE SYSTEM", sectionIndex: 2 },
  { label: "5. TECH STACK", sectionIndex: 3 },
  { label: "6. CONTACT", sectionIndex: 4 },
];

export const HeaderNav: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Show/hide navbar: visible when not on hero (section 0)
  // Track active section via custom event from page.tsx
  useEffect(() => {
    const handleSectionChange = (e: Event) => {
      const idx = (e as CustomEvent).detail as number;
      setActiveSection(SECTIONS[idx]?.id || 'hero');
      setVisible(idx > 0);
    };

    window.addEventListener('sectionchange', handleSectionChange);
    return () => window.removeEventListener('sectionchange', handleSectionChange);
  }, []);

  const currentSection = SECTIONS.find(s => s.id === activeSection) || SECTIONS[0];
  const currentIndex = SECTIONS.findIndex(s => s.id === activeSection);

  return (
    <header className={`fixed top-3 inset-x-0 z-40 flex justify-center px-3 pointer-events-none font-silkscreen transition-all duration-500 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
      <div className="w-full max-w-6xl bg-[#0a0e17]/75 backdrop-blur-md border border-[#4ee6d8]/40 shadow-[0_4px_20px_rgba(0,0,0,0.5)] rounded-xl pointer-events-auto flex items-center justify-between px-4 py-2.5 transition-colors duration-300">
        
        {/* Left: Avatar + Name */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-8 h-8 rounded bg-[#0A1E29] border border-[#45D3B2] flex items-center justify-center p-0.5 overflow-hidden shrink-0">
            <img
              src="/assets/game/player.svg"
              alt="Bagus Avatar"
              className="w-full h-full object-contain pixelated"
            />
          </div>
          <div className="flex flex-col">
            <div className="text-[10px] sm:text-[11px] text-[#F8FAFC] font-bold tracking-wide">
              <span className="sm:hidden">BAGUS S.</span>
              <span className="hidden sm:inline">BAGUS SUPRIYANTO</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-[9px] text-[#4ee6d8]">
              <Briefcase className="w-3 h-3" />
              <span>FRONTEND ENGINEER</span>
            </div>
          </div>
        </div>

        {/* Center: Dynamic Section Indicator & Dots (Visible on mobile too!) */}
        <div className="flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col items-center"
            >
              <div className="flex items-center gap-1.5 text-[10px] sm:text-sm font-pixel tracking-widest text-[#F8FAFC]">
                <span>{currentSection.icon}</span>
                <span className="hidden xs:inline sm:inline">{currentSection.label}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Section Progress Dots */}
          <div className="flex items-center gap-1 sm:gap-1.5 mt-0.5 sm:mt-1">
            {SECTIONS.map((section, i) => (
              <div
                key={section.id}
                className={`h-1 sm:h-1.5 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? 'w-3 sm:w-5 bg-[#4ee6d8]'
                    : i < currentIndex
                      ? 'w-1 sm:w-1.5 bg-[#4ee6d8]/50'
                      : 'w-1 sm:w-1.5 bg-[#94A3B8]/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right: Status Badge + Menu */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Available Badge */}
          <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] font-bold text-emerald-400 bg-[#07131A] px-2 sm:px-2.5 py-1 sm:py-1.5 rounded border border-emerald-500/40">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="hidden sm:inline">OPEN TO WORK</span>
            <span className="sm:hidden text-[8px]">HIRE</span>
          </div>

          {/* Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 sm:p-1 rounded bg-[#0EA5A4] text-white border border-[#2DD4BF] hover:bg-[#0c9695] focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>

        </div>

      </div>

      {/* Navigation Menu Modal */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 inset-x-4 max-w-xl mx-auto pixel-panel p-6 z-40 pointer-events-auto font-silkscreen max-h-[80vh] overflow-y-auto"
          >
            <div className="text-xs font-bold text-[#2DD4BF] border-b border-[#0EA5A4] pb-2 mb-4 uppercase">
              NAVIGATION
            </div>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((loc) => (
                <button
                  key={loc.label}
                  onClick={() => {
                    window.dispatchEvent(new CustomEvent('navigateTo', { detail: loc.sectionIndex }));
                    setMobileMenuOpen(false);
                  }}
                  className="text-xs font-bold text-[#F8FAFC] hover:text-[#2DD4BF] transition-colors p-2 bg-[#07131A] rounded border border-[#0EA5A4]/50 flex items-center justify-between cursor-pointer"
                >
                  <span>{loc.label}</span>
                  <span className="text-[#0EA5A4]">GOTO ▶</span>
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
