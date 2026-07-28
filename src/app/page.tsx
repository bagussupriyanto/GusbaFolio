"use client";

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { WorldMapSection } from '@/components/sections/world-map-section';
import { TechSection } from '@/components/sections/tech-section';
import { ContactSection } from '@/components/sections/contact-section';
import { HeaderNav } from '@/components/layout/header-nav';
import { PreloaderScreen } from '@/components/ui/preloader-screen';
import { ProjectDrawer } from '@/components/ui/project-drawer';
import { FEATURED_PROJECTS } from '@/lib/constants';
import { Project } from '@/types';

const TOTAL_SECTIONS = 5;
const SECTION_LABELS = ['OPENING', 'ABOUT ME', 'WORLD MAP', 'TECH STACK', 'CONTACT'] as const;

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  // Use refs to avoid event listener re-attachment
  const currentSectionRef = useRef(currentSection);
  const isScrollingRef = useRef(false);
  const isDrawerOpenRef = useRef(isDrawerOpen);

  currentSectionRef.current = currentSection;
  isDrawerOpenRef.current = isDrawerOpen;
  const SECTION_HASHES = ['', 'about', 'world-map-section', 'stack', 'contact'];

  const goToSection = useCallback((index: number) => {
    if (index < 0 || index >= TOTAL_SECTIONS || isScrollingRef.current) return;
    isScrollingRef.current = true;
    setCurrentSection(index);
    window.dispatchEvent(new CustomEvent('sectionchange', { detail: index }));
    // Update URL hash without triggering scroll
    const hash = SECTION_HASHES[index];
    window.history.replaceState(null, '', hash ? `#${hash}` : window.location.pathname);
    // Lock scrolling during transition
    setTimeout(() => { isScrollingRef.current = false; }, 900);
  }, []);

  // Read URL hash on initial load
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const idx = SECTION_HASHES.indexOf(hash);
      if (idx > 0) {
        setCurrentSection(idx);
        window.dispatchEvent(new CustomEvent('sectionchange', { detail: idx }));
      }
    }
  }, []);

  // Listen for navigation events from HeaderNav menu
  useEffect(() => {
    const handleNavigateTo = (e: Event) => {
      goToSection((e as CustomEvent).detail as number);
    };
    window.addEventListener('navigateTo', handleNavigateTo);
    return () => window.removeEventListener('navigateTo', handleNavigateTo);
  }, [goToSection]);

  // Attach scroll/touch/key listeners ONCE
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isDrawerOpenRef.current) return;

      // Smart boundary check for wheel
      let scrollEl: HTMLElement | null = e.target as HTMLElement;
      while (scrollEl && scrollEl !== document.body) {
        const style = window.getComputedStyle(scrollEl);
        const overflowY = style.overflowY;
        if ((overflowY === 'auto' || overflowY === 'scroll') && scrollEl.scrollHeight > scrollEl.clientHeight) {
          const atBottom = Math.ceil(scrollEl.scrollTop + scrollEl.clientHeight) >= scrollEl.scrollHeight - 4;
          const atTop = scrollEl.scrollTop <= 4;
          if (e.deltaY > 0 && !atBottom) return; // Scrolling down inside
          if (e.deltaY < 0 && !atTop) return; // Scrolling up inside
          break;
        }
        scrollEl = scrollEl.parentElement;
      }

      e.preventDefault();
      if (isScrollingRef.current) return;
      if (e.deltaY > 0) goToSection(currentSectionRef.current + 1);
      else if (e.deltaY < 0) goToSection(currentSectionRef.current - 1);
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => { touchStartY = e.touches[0].clientY; };
    const handleTouchEnd = (e: TouchEvent) => {
      if (isDrawerOpenRef.current || isScrollingRef.current) return;
      const delta = touchStartY - e.changedTouches[0].clientY;

      if (Math.abs(delta) > 60) {
        // Smart inner scroll boundary check for touch swipe
        let scrollEl: HTMLElement | null = e.target as HTMLElement;
        while (scrollEl && scrollEl !== document.body) {
          const style = window.getComputedStyle(scrollEl);
          const overflowY = style.overflowY;
          if ((overflowY === 'auto' || overflowY === 'scroll') && scrollEl.scrollHeight > scrollEl.clientHeight) {
            const isSwipingDown = delta > 0;
            const isSwipingUp = delta < 0;
            const atBottom = Math.ceil(scrollEl.scrollTop + scrollEl.clientHeight) >= scrollEl.scrollHeight - 4;
            const atTop = scrollEl.scrollTop <= 4;

            if (isSwipingDown && !atBottom) return; // Scrolling down inside container
            if (isSwipingUp && !atTop) return; // Scrolling up inside container
            break;
          }
          scrollEl = scrollEl.parentElement;
        }

        if (delta > 0) goToSection(currentSectionRef.current + 1);
        else goToSection(currentSectionRef.current - 1);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isDrawerOpenRef.current || isScrollingRef.current) return;
      if (e.key === 'ArrowDown' || e.key === 'PageDown') { e.preventDefault(); goToSection(currentSectionRef.current + 1); }
      else if (e.key === 'ArrowUp' || e.key === 'PageUp') { e.preventDefault(); goToSection(currentSectionRef.current - 1); }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [goToSection]);

  const handleExploreWork = useCallback(() => goToSection(1), [goToSection]);

  const handleSelectProject = useCallback((project: Project) => {
    setSelectedProject(project);
    setIsDrawerOpen(true);
  }, []);

  const handleCloseDrawer = useCallback(() => setIsDrawerOpen(false), []);

  return (
    <main className="w-full bg-[#0a0e17] text-[#F8FAFC] font-silkscreen relative overflow-hidden h-screen">
      <div className="fixed inset-0 bg-[radial-gradient(#4ee6d8_1.2px,transparent_1.2px)] [background-size:28px_28px] opacity-20 pointer-events-none z-0" />
      <PreloaderScreen />
      <HeaderNav />

      <ProjectDrawer
        project={selectedProject}
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
      />

      {/* Section Dot Indicators */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-30 hidden sm:flex flex-col gap-3">
        {SECTION_LABELS.map((label, i) => (
          <button
            key={label}
            onClick={() => goToSection(i)}
            className={`group flex items-center gap-2 cursor-pointer transition-all duration-300 ${currentSection === i ? '' : 'opacity-50 hover:opacity-80'}`}
            title={label}
          >
            <span className="hidden group-hover:block text-[8px] text-[#4ee6d8] font-bold whitespace-nowrap">{label}</span>
            <div className={`rounded-full border transition-all duration-300 ${
              currentSection === i
                ? 'w-3 h-3 bg-[#4ee6d8] border-[#4ee6d8] shadow-[0_0_8px_rgba(78,230,216,0.6)]'
                : 'w-2 h-2 bg-transparent border-[#4ee6d8]/50'
            }`} />
          </button>
        ))}
      </div>

      {/* GPU-ACCELERATED SECTION CONTAINER */}
      <div
        className="will-change-transform"
        style={{
          transform: `translateY(-${currentSection * 100}vh)`,
          transition: 'transform 0.8s cubic-bezier(0.76, 0, 0.24, 1)',
        }}
      >
        <div className="h-screen w-full" style={{ contain: 'content' }}><HeroSection onExploreWork={handleExploreWork} /></div>
        <div className="h-screen w-full" style={{ contain: 'content' }}><AboutSection /></div>
        <div className="h-screen w-full" style={{ contain: 'content' }}><WorldMapSection onSelectProject={handleSelectProject} /></div>
        <div className="h-screen w-full" style={{ contain: 'content' }}><TechSection /></div>
        <div className="h-screen w-full" style={{ contain: 'content' }}><ContactSection /></div>
      </div>

    </main>
  );
}
