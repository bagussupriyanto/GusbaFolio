"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Download,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Lock,
  ExternalLink,
  Gamepad2,
  Menu,
  X,
  Copy,
  Check,
  Zap,
  Globe,
  TrendingUp,
  Target,
  ShieldCheck,
  UserCheck
} from 'lucide-react';
import { DEVELOPER_DATA, FEATURED_PROJECTS } from '@/lib/constants';
import { Project } from '@/types';

interface CleanViewProps {
  onSelectProject: (project: Project) => void;
  onSwitchToGameMode: () => void;
}

// 3 Core Projects matching the exact editorial layout
const PROJECTS_LIST = [
  {
    project: FEATURED_PROJECTS[0], // SmartCafe
    year: "2026",
    title: "SmartCafe",
    desc: "Cafe management platform to handle POS, inventory, menu, kitchen orders, and analytics in one place.",
    mockup: "/assets/developer-workstation.jpg"
  },
  {
    project: FEATURED_PROJECTS[1], // PT SMS
    year: "2025",
    title: "PT Surya Mitra Service",
    desc: "Company profile and product catalog website for an industrial supplier in Bintan.",
    mockup: "/assets/projects/ptsms-mockup.png"
  },
  {
    project: FEATURED_PROJECTS[2], // Invoice Application
    year: "2024",
    title: "Invoice Application",
    desc: "Invoice and inventory system built to simplify billing, stock management, and reporting.",
    mockup: "/assets/projects/invoice-mockup.png"
  }
];

// Clean Typographic Journey (NO Cards, NO Icons, Pure Editorial Timeline)
const JOURNEY_TIMELINE = [
  { year: "2021", text: "Started learning programming and web development." },
  { year: "2022", text: "Freelance projects and small business solutions." },
  { year: "2023", text: "Focused on building real products and solving real problems." },
  { year: "2024", text: "Exploring AI integration and automation." },
  { year: "2025", text: "Building products that create real business impact." },
  { year: "2026", text: "Continuing to learn, build, and improve every day." }
];

export const CleanView: React.FC<CleanViewProps> = ({ onSelectProject, onSwitchToGameMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full bg-[#FAF9F5] text-[#1A1917] min-h-screen font-sans antialiased selection:bg-[#E8DFCE] selection:text-[#1A1917]">
      
      {/* ===== 1. HEADER / NAVIGATION (ULTRA-MINIMAL) ===== */}
      <header className="sticky top-0 inset-x-0 z-50 bg-[#FAF9F5]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 py-6 flex items-center justify-between">
          
          {/* Logo BS */}
          <a href="#" className="font-serif-editorial text-2xl font-bold tracking-tight text-[#1A1917] hover:text-[#B89355] transition-colors">
            BS
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-10 text-xs font-sans tracking-wide text-[#66645E]">
            <a href="#work" className="relative font-medium text-[#1A1917] hover:text-[#B89355] transition-colors flex flex-col items-center">
              <span>Work</span>
              <span className="w-1 h-1 rounded-full bg-[#1A1917] mt-1" />
            </a>
            <a href="#thinking" className="hover:text-[#1A1917] transition-colors">Thinking</a>
            <a href="#journey" className="hover:text-[#1A1917] transition-colors">Journey</a>
            <a href="#contact" className="hover:text-[#1A1917] transition-colors">Contact</a>
            <a href="/assets/cv-bagus-supriyanto.pdf.pdf" download className="hover:text-[#1A1917] transition-colors flex items-center gap-1">
              <span>Resume</span>
              <span className="text-[10px]">↓</span>
            </a>
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={onSwitchToGameMode}
              className="px-3.5 py-1.5 rounded-full bg-[#F0EEE6] border border-[#E6E4DD] text-[#55524C] text-[11px] font-mono font-semibold flex items-center gap-1.5 hover:bg-[#E5E2D8] hover:text-[#1A1917] transition-all cursor-pointer"
              title="Switch to 16-Bit RPG Mode"
            >
              <Gamepad2 className="w-3.5 h-3.5 text-[#B89355]" />
              <span className="hidden sm:inline">16-Bit RPG</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-[#F0EEE6] text-[#1A1917] hover:bg-[#E6E4DD]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAF9F5] border-b border-[#E6E4DD] px-6 py-6 space-y-4 text-xs font-sans tracking-wider text-[#1A1917] uppercase font-semibold">
            <a href="#work" onClick={() => setMobileMenuOpen(false)} className="block py-1">Work</a>
            <a href="#thinking" onClick={() => setMobileMenuOpen(false)} className="block py-1">Thinking</a>
            <a href="#journey" onClick={() => setMobileMenuOpen(false)} className="block py-1">Journey</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-1">Contact</a>
            <a href="/assets/cv-bagus-supriyanto.pdf.pdf" download className="block py-1 text-[#B89355]">Resume ↓</a>
          </div>
        )}
      </header>

      {/* ===== 2. HERO SECTION (EDITORIAL 2-COLUMN COMPOSITION) ===== */}
      <section className="pt-12 pb-24 sm:pt-20 sm:pb-32 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Hero Left Content (6 Cols) */}
          <div className="lg:col-span-6 space-y-8">
            
            <div className="text-[10px] font-mono tracking-[0.2em] text-[#85827A] uppercase">
              AI PRODUCT ENGINEER
            </div>

            {/* Editorial Headline */}
            <div className="space-y-2">
              <h1 className="font-serif-editorial text-4xl sm:text-6xl lg:text-6xl font-normal tracking-tight text-[#1A1917] leading-[1.08]">
                Building products <br />
                that make work <br />
                <span className="italic text-[#B89355]">simpler.</span>
              </h1>
            </div>

            {/* Sub-paragraph */}
            <p className="text-sm sm:text-base text-[#66645E] font-normal leading-relaxed max-w-md">
              I build modern web applications and AI-powered systems that solve real business problems and create measurable impact.
            </p>

            {/* Single Text CTA */}
            <div className="pt-2">
              <a
                href="#work"
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-[#1A1917] hover:text-[#B89355] transition-colors uppercase group"
              >
                <span>View selected work</span>
                <ArrowRight className="w-4 h-4 text-[#B89355] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

          {/* Hero Right Developer Workspace Photography (6 Cols) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E6E4DD] bg-[#1A1917]">
              <img
                src="/assets/developer-workstation.jpg"
                alt="Developer Workspace Warm Lamp & Coffee"
                className="w-full h-[420px] sm:h-[480px] object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ===== 3. SECTION 01: SELECTED WORK (EDITORIAL 3-COLUMN MOCKUP GRID) ===== */}
      <section id="work" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-[#E6E4DD]">
        <div className="space-y-12">
          
          {/* Section Sub-label & Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-2 text-xs font-mono text-[#85827A] flex items-center gap-3">
              <span>01</span>
              <span className="w-6 h-[1px] bg-[#D8D5CC]" />
              <span className="uppercase tracking-widest">SELECTED WORK</span>
            </div>

            <div className="lg:col-span-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <h2 className="font-serif-editorial text-2xl sm:text-3xl font-normal text-[#1A1917] max-w-md leading-tight">
                A selection of recent products I've designed and built.
              </h2>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-[#1A1917] hover:text-[#B89355] transition-colors uppercase shrink-0 group"
              >
                <span>See all projects</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B89355] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

          {/* 3-Column Editorial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            {PROJECTS_LIST.map((item) => (
              <div
                key={item.project.id}
                onClick={() => onSelectProject(item.project)}
                className="group space-y-4 cursor-pointer"
              >
                {/* Mockup Container */}
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#EFECE6] border border-[#E6E4DD] shadow-xs transition-transform duration-500 group-hover:-translate-y-1">
                  <img
                    src={item.mockup}
                    alt={item.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Metadata */}
                <div className="space-y-1.5 pt-1">
                  <div className="text-[10px] font-mono text-[#85827A]">{item.year}</div>
                  <h3 className="font-serif-editorial text-2xl font-bold text-[#1A1917] group-hover:text-[#B89355] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#66645E] leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>
                </div>

                {/* Action Link */}
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#1A1917] font-semibold group-hover:text-[#B89355] transition-colors pt-1">
                  <span>View case study</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B89355] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===== 4. SECTION 02: THINKING (REPLACING ABOUT) ===== */}
      <section id="thinking" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-[#E6E4DD]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sub-label Left */}
          <div className="lg:col-span-2 text-xs font-mono text-[#85827A] flex items-center gap-3">
            <span>02</span>
            <span className="w-6 h-[1px] bg-[#D8D5CC]" />
            <span className="uppercase tracking-widest">THINKING</span>
          </div>

          {/* Headline & Narrative Right */}
          <div className="lg:col-span-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            <h2 className="font-serif-editorial text-2xl sm:text-4xl font-normal text-[#1A1917] leading-snug">
              Good software should disappear. The experience should remain.
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-[#66645E] leading-relaxed font-normal">
              <p>
                I believe technology should remove friction, not create it. My goal is to build products that are intuitive, reliable, and truly helpful for the people who use them.
              </p>
              <p>
                Combining precision engineering discipline with modern AI development workflows allows me to turn business constraints into seamless digital software.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ===== 5. SECTION 03: JOURNEY (PURE TYPOGRAPHIC TIMELINE - NO CARDS, NO ICONS) ===== */}
      <section id="journey" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-[#E6E4DD]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sub-label Left */}
          <div className="lg:col-span-2 text-xs font-mono text-[#85827A] flex items-center gap-3">
            <span>03</span>
            <span className="w-6 h-[1px] bg-[#D8D5CC]" />
            <span className="uppercase tracking-widest">JOURNEY</span>
          </div>

          {/* Horizontal Pure Typographic Timeline (6 Milestones) */}
          <div className="lg:col-span-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 pt-2">
            {JOURNEY_TIMELINE.map((item) => (
              <div key={item.year} className="space-y-2 border-t border-[#D8D5CC] pt-4">
                <div className="text-xs font-mono font-bold text-[#1A1917]">{item.year}</div>
                <p className="text-xs text-[#66645E] leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===== 6. SECTION 04: LET'S CONNECT & FOOTER ===== */}
      <section id="contact" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-[#E6E4DD]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sub-label Left */}
          <div className="lg:col-span-2 text-xs font-mono text-[#85827A] flex items-center gap-3">
            <span>04</span>
            <span className="w-6 h-[1px] bg-[#D8D5CC]" />
            <span className="uppercase tracking-widest">LET'S CONNECT</span>
          </div>

          {/* Content & Photo Grid */}
          <div className="lg:col-span-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Contact Details (7 Cols) */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <h2 className="font-serif-editorial text-3xl sm:text-4xl font-normal text-[#1A1917]">
                  Have a project in mind?
                </h2>
                <p className="text-xs sm:text-sm text-[#66645E]">
                  I'm open to interesting projects and collaboration opportunities.
                </p>
              </div>

              <div className="space-y-2 text-xs font-mono text-[#1A1917]">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#85827A]" />
                  <a href={`mailto:${DEVELOPER_DATA.contact.email}`} className="hover:text-[#B89355] transition-colors">
                    {DEVELOPER_DATA.contact.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#85827A]" />
                  <span>Bintan, Indonesia</span>
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <Linkedin className="w-4 h-4 text-[#85827A]" />
                  <a href="https://linkedin.com/in/bagussupriyanto" target="_blank" rel="noopener noreferrer" className="hover:text-[#B89355] transition-colors">
                    linkedin.com/in/bagussupriyanto
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-[#85827A]" />
                  <a href="https://github.com/bagussupriyanto" target="_blank" rel="noopener noreferrer" className="hover:text-[#B89355] transition-colors">
                    github.com/bagussupriyanto
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`mailto:${DEVELOPER_DATA.contact.email}`}
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-[#1A1917] hover:text-[#B89355] transition-colors uppercase group"
                >
                  <span>Get in touch</span>
                  <ArrowRight className="w-4 h-4 text-[#B89355] group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Portrait Photography Far Right (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#E6E4DD] shadow-md aspect-[4/3] bg-[#1A1917]">
                <img
                  src="/assets/profile-photo.jpg"
                  alt="Bagus Supriyanto at Workstation"
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ===== 7. FOOTER BAR ===== */}
      <footer className="py-8 px-6 sm:px-12 max-w-7xl mx-auto border-t border-[#E6E4DD] text-xs font-mono text-[#85827A] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          © 2026 Bagus Supriyanto. All rights reserved.
        </div>
        <div>
          Designed with editorial confidence & zero friction.
        </div>
      </footer>

    </div>
  );
};
