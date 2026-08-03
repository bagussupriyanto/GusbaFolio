"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Gamepad2,
  Menu,
  X
} from 'lucide-react';
import { DEVELOPER_DATA, FEATURED_PROJECTS, CV_WORK_EXPERIENCES } from '@/lib/constants';
import { Project } from '@/types';
import { CodeVideoBackdrop } from '@/components/ui/code-video-backdrop';

interface CleanViewProps {
  onSelectProject: (project: Project) => void;
  onSwitchToGameMode: () => void;
}

// 4 Real Projects Data
const SELECTED_PROJECTS = [
  {
    project: FEATURED_PROJECTS[0], // SmartCafe
    id: "proj-1",
    title: "SmartCafe POS & Kitchen Dispatch SaaS",
    category: "SaaS Platform",
    year: "2026",
    impact: "45% Faster Order Dispatch",
    summary: "All-in-one cafe management platform for real-time POS checkout, kitchen display dispatch, inventory tracking, and multi-branch revenue analytics.",
    mockup: "/assets/projects/smartcafe/landing.png",
    tags: ["Next.js 16", "Supabase", "PostgreSQL", "Prisma ORM", "Tailwind CSS"]
  },
  {
    project: FEATURED_PROJECTS[1], // PT SMS
    id: "proj-2",
    title: "PT Surya Mitra Service Industrial Portal",
    category: "Enterprise Web",
    year: "2025",
    impact: "+65% B2B Inquiry Conversions",
    summary: "High-performance enterprise portal and product catalog for an industrial equipment, marine logistics & supply partner in Bintan.",
    mockup: "/assets/projects/sms-hero.png",
    tags: ["Next.js", "Prisma ORM", "PostgreSQL", "Tailwind CSS"]
  },
  {
    project: FEATURED_PROJECTS[2], // Invoice Application
    id: "proj-3",
    title: "Automated Billing & PDF Invoicing System",
    category: "Automation System",
    year: "2024",
    impact: "8+ Hours Saved Weekly",
    summary: "Streamlined billing software featuring instant client management, itemized tax calculations, instant PDF export, and payment tracking.",
    mockup: "/assets/projects/invoice/login.png",
    tags: ["Next.js", "PostgreSQL", "Prisma ORM", "PDF Engine"]
  },
  {
    project: FEATURED_PROJECTS[3], // AI Automation Lab
    id: "proj-4",
    title: "Generative AI Video & Content Automation Lab",
    category: "AI Automation",
    year: "2025",
    impact: "10x Video Production Speed",
    summary: "Automated video script generation and AI video processing pipeline for TikTok & social content channels.",
    mockup: "/assets/developer-workstation.jpg",
    tags: ["OpenAI API", "Google Gemini", "Python", "Automation"]
  }
];

// Individual Notion-Style Tech Instrument Cards (Comprehensive 18-Tool Array)
const INDIVIDUAL_INSTRUMENTS = [
  // Frontend
  { name: "Next.js 16", category: "Frontend", icon: "⚡", role: "App Router, SSR, Turbopack & Server Actions" },
  { name: "TypeScript", category: "Frontend", icon: "📘", role: "Strict Type Safety, Generics & Interfaces" },
  { name: "React 19", category: "Frontend", icon: "⚛️", role: "Component Driven UI & Reactive State Engine" },
  { name: "Tailwind CSS", category: "Frontend", icon: "🎨", role: "Utility Design System & Modern Aesthetics" },
  
  // Backend & DB
  { name: "Supabase", category: "Backend", icon: "🟩", role: "PostgreSQL BaaS, Auth & Realtime RLS" },
  { name: "PostgreSQL", category: "Backend", icon: "🐘", role: "Relational Schema & Query Optimization" },
  { name: "Prisma ORM", category: "Backend", icon: "💎", role: "Type-Safe DB Client & Schema Migrations" },
  { name: "Node.js & REST", category: "Backend", icon: "🟢", role: "Server-side APIs & Asynchronous Processing" },

  // AI & Intelligence
  { name: "OpenAI API", category: "AI & Lab", icon: "🤖", role: "GPT-4o Integration & Function Calling" },
  { name: "Google Gemini", category: "AI & Lab", icon: "✨", role: "Multimodal AI & Veo Video Automation" },
  { name: "Claude API", category: "AI & Lab", icon: "🧠", role: "Advanced Reasoning & Content Pipelines" },
  { name: "Cursor AI IDE", category: "AI & Lab", icon: "💻", role: "AI-Augmented Software Engineering Studio" },
  { name: "Python", category: "AI & Lab", icon: "🐍", role: "AI Automation Scripts & Data Pipelines" },

  // DevOps & Security
  { name: "GitHub & CI/CD", category: "DevOps", icon: "🐙", role: "Version Control, Actions & Automations" },
  { name: "Vercel", category: "DevOps", icon: "▲", role: "Global Edge Network & Serverless Hosting" },
  { name: "DES Cryptography", category: "Security", icon: "🔒", role: "S1 Thesis: Data Encryption Standard" },

  // Industrial & Control
  { name: "Instrument Control", category: "Industrial", icon: "🔧", role: "Process Calibration, Sensors & Transmitters" },
  { name: "Wiring & P&ID", category: "Industrial", icon: "📐", role: "Piping & Instrumentation Diagram Specs" },
];

export const CleanView: React.FC<CleanViewProps> = ({ onSelectProject, onSwitchToGameMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTool, setActiveTool] = useState<string | null>(null);
  const [selectedTechCategory, setSelectedTechCategory] = useState<string>('ALL');

  return (
    <div className="w-full bg-[#FAF9F6] text-[#161616] min-h-screen font-sans antialiased selection:bg-[#E8DFCE] selection:text-[#161616]">
      
      {/* ===== 1. HEADER NAVBAR (NOTION / LINEAR AESTHETIC) ===== */}
      <header className="sticky top-0 inset-x-0 z-40 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#E6E4DD]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-3.5 flex items-center justify-between">
          
          {/* Logo & Availability Status */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <a href="#" className="flex items-center gap-2 sm:gap-2.5 group min-w-0">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#161616] text-white flex items-center justify-center text-[10px] sm:text-xs font-mono font-bold tracking-wider group-hover:bg-[#B89355] transition-colors shrink-0">
                BS
              </div>
              <span className="font-serif-editorial font-bold text-base sm:text-lg text-[#161616] group-hover:text-[#B89355] transition-colors truncate">
                Bagus Supriyanto
              </span>
            </a>

            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F0EEE6] border border-[#E6E4DD] text-[10px] font-mono font-semibold text-[#55524C] shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>AVAILABLE FOR ROLES</span>
            </div>
          </div>

          {/* Notion-Style Floating Pill Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#F0EEE6]/80 p-1 rounded-full border border-[#E6E4DD]">
            <a href="#about" className="px-3.5 py-1 rounded-full text-xs font-medium text-[#55524C] hover:text-[#161616] hover:bg-white hover:shadow-xs transition-all">About</a>
            <a href="#work" className="px-3.5 py-1 rounded-full text-xs font-medium text-[#55524C] hover:text-[#161616] hover:bg-white hover:shadow-xs transition-all">Project</a>
            <a href="#experience" className="px-3.5 py-1 rounded-full text-xs font-medium text-[#55524C] hover:text-[#161616] hover:bg-white hover:shadow-xs transition-all">Experience</a>
            <a href="#contact" className="px-3.5 py-1 rounded-full text-xs font-medium text-[#55524C] hover:text-[#161616] hover:bg-white hover:shadow-xs transition-all">Contact</a>
          </nav>

          {/* Right Action Items */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            <button
              onClick={onSwitchToGameMode}
              className="px-2.5 sm:px-3.5 py-1.5 rounded-full bg-[#F0EEE6] border border-[#E6E4DD] text-[#55524C] text-[11px] font-mono font-semibold flex items-center gap-1.5 hover:bg-[#E5E2D8] hover:text-[#161616] transition-all cursor-pointer"
              title="Switch to 16-Bit RPG World"
            >
              <Gamepad2 className="w-3.5 h-3.5 text-[#B89355]" />
              <span className="hidden sm:inline">16-Bit RPG</span>
            </button>

            <a
              href="/assets/cv-bagus-supriyanto.pdf.pdf"
              download
              className="hidden sm:flex px-4 py-2 rounded-full bg-[#161616] text-[#FAF9F6] text-xs font-mono font-semibold items-center gap-1.5 hover:bg-[#33312D] transition-all cursor-pointer shadow-xs"
            >
              <span>RESUME</span>
              <Download className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Nav Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-[#F0EEE6] text-[#161616] hover:bg-[#E6E4DD]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAF9F6] border-b border-[#E6E4DD] px-4 py-4 space-y-1 text-xs font-mono font-bold tracking-widest text-[#161616] uppercase">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 px-3 rounded-xl hover:bg-[#F0EEE6] transition-colors">About</a>
            <a href="#work" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 px-3 rounded-xl hover:bg-[#F0EEE6] transition-colors">Project</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 px-3 rounded-xl hover:bg-[#F0EEE6] transition-colors">Experience</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 px-3 rounded-xl hover:bg-[#F0EEE6] transition-colors">Contact</a>
            <a href="/assets/cv-bagus-supriyanto.pdf.pdf" download className="block py-2.5 px-3 rounded-xl hover:bg-[#F0EEE6] transition-colors text-[#B89355]">Download Resume ↓</a>
          </div>
        )}
      </header>

      {/* ===== 2. HERO SECTION ===== */}
      <section className="pt-6 pb-10 sm:pt-10 sm:pb-16 lg:pt-14 lg:pb-20 px-4 sm:px-6 max-w-6xl mx-auto">
        
        {/* Workstation Frame Container */}
        <div className="rounded-2xl sm:rounded-3xl border border-[#E6E4DD] bg-[#161616] text-white overflow-hidden shadow-2xl relative">
          
          {/* Top Bar */}
          <div className="flex items-center justify-between px-3 sm:px-5 py-2.5 sm:py-3 bg-[#222222] border-b border-[#333333] text-[10px] sm:text-xs font-mono text-[#AAAAAA] relative z-10">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5F56]" />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FFBD2E]" />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27C93F]" />
              </div>
              <span className="ml-1.5 sm:ml-2 font-medium text-white text-[10px] sm:text-xs">bagus-workspace / studio-hero</span>
            </div>
            <div className="hidden sm:flex items-center gap-4 text-[11px]">
              <span>BINTAN, INDONESIA</span>
              <span>•</span>
              <a href="/assets/cv-bagus-supriyanto.pdf.pdf" download className="hover:text-white transition-colors">PDF RESUME ↓</a>
            </div>
          </div>

          {/* Background Code Video & Matrix Canvas Backdrop */}
          <div className="relative px-4 py-8 sm:p-10 lg:p-14 min-h-[380px] sm:min-h-[440px] lg:min-h-[500px] flex flex-col justify-center overflow-hidden">
            <CodeVideoBackdrop />
            <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-[#161616] via-[#161616]/95 sm:via-[#161616]/90 to-[#161616]/75 sm:to-[#161616]/60 z-[1]" />

            {/* Content & Code Editor Terminal Container */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              
              {/* Left Column: Narrative Headline & CTAs (7 Cols) */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-6 max-w-2xl">
                
                <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#2B2B2B]/80 backdrop-blur-md border border-[#444444] text-[9px] sm:text-[11px] font-mono tracking-widest text-[#DDDDDD] uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>AI PRODUCT ENGINEER • S1 IT GRADUATE</span>
                </div>

                <h1 className="font-serif-editorial text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] sm:leading-[1.08]">
                  Building digital products{' '}
                  <br className="hidden sm:block" />
                  <span className="italic font-normal text-[#C5A059]">that solve real problems.</span>
                </h1>

                <p className="text-[13px] sm:text-sm lg:text-base text-[#DDDDDD] font-normal leading-relaxed max-w-xl">
                  I engineer modern full-stack web applications and AI-powered platforms that simplify complex business operations, boost conversions, and deliver measurable ROI.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
                  <a
                    href="#work"
                    className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white text-[#161616] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#EAE8E1] transition-all cursor-pointer flex items-center gap-2 shadow-lg hover:scale-105"
                  >
                    <span>EXPLORE WORK</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#161616]" />
                  </a>

                  <a
                    href="#about"
                    className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-black/40 border border-white/20 text-white text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider hover:bg-black/60 transition-all cursor-pointer flex items-center gap-2"
                  >
                    <span>ABOUT ME</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#CCCCCC]" />
                  </a>
                </div>

              </div>

              {/* Right Column: Live IDE Code Terminal (hire-bagus.ts) — Desktop */}
              <div className="hidden lg:block lg:col-span-5 relative">
                <div className="rounded-2xl bg-[#0D1117]/95 border border-[#30363D] p-5 shadow-2xl space-y-3 font-mono text-[11px] text-[#C9D1D9] backdrop-blur-md hover:border-[#79C0FF] transition-all group">
                  <div className="flex items-center justify-between border-b border-[#30363D] pb-3 text-[10px] text-[#8B949E]">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                      <span className="ml-1 text-[#79C0FF] font-bold">hire-bagus.ts</span>
                    </div>
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      AVAILABLE FOR HIRE
                    </span>
                  </div>

                  <div className="space-y-1 leading-relaxed">
                    <div><span className="text-[#FF7B72]">import</span> &#123; Candidate &#125; <span className="text-[#FF7B72]">from</span> <span className="text-[#A5D6FF]">'@uty/s1-komputer'</span>;</div>
                    <div><span className="text-[#FF7B72]">import</span> &#123; FullStackEngine &#125; <span className="text-[#FF7B72]">from</span> <span className="text-[#A5D6FF]">'@bagus/tech'</span>;</div>
                    <br />
                    <div><span className="text-[#FF7B72]">export async function</span> <span className="text-[#D2A8FF]">hireBagusSupriyanto</span>() &#123;</div>
                    <div className="pl-4 text-[#8B949E]">// Fetch S1 IT Graduate & AI Product Engineer</div>
                    <div className="pl-4"><span className="text-[#FF7B72]">const</span> engineer = <span className="text-[#FF7B72]">new</span> <span className="text-[#D2A8FF]">Candidate</span>(<span className="text-[#A5D6FF] font-bold">'Bagus Supriyanto'</span>);</div>
                    <br />
                    <div className="pl-4"><span className="text-[#FF7B72]">return await</span> engineer.<span className="text-[#D2A8FF]">hire</span>(&#123;</div>
                    <div className="pl-8 text-[#79C0FF]">degree: <span className="text-[#A5D6FF]">'S1 IT UTY (Sarjana Komputer)'</span>,</div>
                    <div className="pl-8 text-[#79C0FF]">coreStack: [<span className="text-[#A5D6FF]">'Next.js 16'</span>, <span className="text-[#A5D6FF]">'TypeScript'</span>, <span className="text-[#A5D6FF]">'Supabase'</span>],</div>
                    <div className="pl-8 text-[#79C0FF]">impact: [<span className="text-[#A5D6FF]">'+65% B2B Sales'</span>, <span className="text-[#A5D6FF] font-bold">'45s Fast Dispatch'</span>],</div>
                    <div className="pl-8 text-[#79C0FF]">availability: <span className="text-[#7EE787] font-bold">'FULLTIME_OR_REMOTE'</span></div>
                    <div className="pl-4">&#125;);</div>
                    <div>&#125;</div>
                  </div>
                </div>
              </div>

              {/* Mobile/Tablet Compact Code Terminal */}
              <div className="lg:hidden mt-2">
                <div className="rounded-xl bg-[#0D1117]/95 border border-[#30363D] p-3 sm:p-4 shadow-xl font-mono text-[9px] sm:text-[10px] text-[#C9D1D9] backdrop-blur-md overflow-x-auto">
                  <div className="flex items-center justify-between border-b border-[#30363D] pb-2 mb-2 text-[9px] text-[#8B949E]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
                      <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                      <span className="w-2 h-2 rounded-full bg-[#27C93F]" />
                      <span className="ml-1 text-[#79C0FF] font-bold">hire-bagus.ts</span>
                    </div>
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                      HIRING
                    </span>
                  </div>
                  <div className="space-y-0.5 leading-relaxed whitespace-nowrap">
                    <div><span className="text-[#FF7B72]">export async function</span> <span className="text-[#D2A8FF]">hireBagusSupriyanto</span>() &#123;</div>
                    <div className="pl-3"><span className="text-[#FF7B72]">const</span> eng = <span className="text-[#FF7B72]">new</span> <span className="text-[#D2A8FF]">Candidate</span>(<span className="text-[#A5D6FF] font-bold">'Bagus Supriyanto'</span>);</div>
                    <div className="pl-3"><span className="text-[#FF7B72]">return await</span> eng.<span className="text-[#D2A8FF]">hire</span>(&#123; availability: <span className="text-[#7EE787] font-bold">'FULLTIME_OR_REMOTE'</span> &#125;);</div>
                    <div>&#125;</div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ===== 3. ABOUT ME SECTION ===== */}
      <section
        id="about"
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-[#E6E4DD]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Portrait Photo Left (5 Cols) */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E6E4DD] bg-white p-2.5 sm:p-3.5 shadow-xl group hover:shadow-2xl transition-all duration-500 max-w-sm mx-auto lg:max-w-none">
              <div className="aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden bg-[#161616]">
                <img
                  src="/assets/profile-photo.jpg"
                  alt="Bagus Supriyanto Portrait"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="text-center font-signature text-2xl sm:text-3xl text-[#161616] font-bold">
              Bagus Supriyanto
            </div>
          </div>

          {/* Narrative Bio Right (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-[#85827A] uppercase">
              ABOUT THE BUILDER
            </div>

            <h2 className="font-serif-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#161616] leading-tight">
              Combining Industrial Precision with Modern Full-Stack Software Engineering.
            </h2>

            <div className="space-y-3 sm:space-y-4 text-[13px] sm:text-sm lg:text-base text-[#55524C] leading-relaxed font-normal">
              <p>
                Saya adalah lulusan Sarjana Komputer dari <strong className="text-[#161616]">Universitas Teknologi Yogyakarta (S1 Teknologi Informasi, 2024)</strong>. Latar belakang saya menggabungkan disiplin kerja industri manufaktur presisi (<strong className="text-[#161616]">PT Pertama Precision Indonesia</strong>) dengan kecepatan rekayasa perangkat lunak modern.
              </p>
              <p>
                Saya tidak memandang AI sebagai pengganti rekayasa perangkat lunak, melainkan sebagai <strong className="text-[#161616]">katalisator produktivitas</strong> yang memungkinkan ide dikembangkan menjadi aplikasi SaaS skala produksi dalam waktu yang jauh lebih cepat, tanpa mengorbankan kualitas arsitektur data.
              </p>
            </div>

            {/* 3 Academic & Certification Highlights */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-[#E6E4DD]">
              <div className="space-y-0.5 sm:space-y-1">
                <div className="text-[9px] sm:text-[10px] font-mono text-[#85827A] uppercase tracking-wider">ACADEMIC DEGREE</div>
                <div className="text-[11px] sm:text-xs font-bold text-[#161616]">S1 IT UTY (2024)</div>
                <div className="text-[10px] sm:text-[11px] text-[#66645E]">Sarjana Komputer</div>
              </div>
              <div className="space-y-0.5 sm:space-y-1">
                <div className="text-[9px] sm:text-[10px] font-mono text-[#85827A] uppercase tracking-wider">CERTIFICATION</div>
                <div className="text-[11px] sm:text-xs font-bold text-[#161616]">Microsoft Certified</div>
                <div className="text-[10px] sm:text-[11px] text-[#66645E]">Certiport Specialist</div>
              </div>
              <div className="space-y-0.5 sm:space-y-1">
                <div className="text-[9px] sm:text-[10px] font-mono text-[#85827A] uppercase tracking-wider">AI RESEARCH LAB</div>
                <div className="text-[11px] sm:text-xs font-bold text-[#161616]">TikTok AI Content Lab</div>
                <div className="text-[10px] sm:text-[11px] text-[#66645E]">Generative Video Lab</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ===== 4. SELECTED WORK ===== */}
      <section
        id="work"
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-[#E6E4DD]"
      >
        <div className="space-y-6 sm:space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#E6E4DD] pb-4 sm:pb-6 gap-3 sm:gap-4">
            <div className="space-y-1.5 sm:space-y-2">
              <div className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-[#85827A] uppercase">
                SELECTED WORK
              </div>
              <h2 className="font-serif-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#161616]">
                Case Studies & Delivered Products
              </h2>
            </div>
            <p className="text-[10px] sm:text-xs font-mono text-[#85827A] uppercase tracking-wider">
              Tap any card to view full breakdown
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {SELECTED_PROJECTS.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectProject(item.project)}
                className="group bg-white border border-[#E6E4DD] hover:border-[#161616] rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 p-3.5 sm:p-5 cursor-pointer shadow-xs hover:shadow-xl hover:-translate-y-1 sm:hover:-translate-y-1.5 space-y-3 sm:space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-2.5 sm:space-y-3">
                  <div className="relative aspect-[16/10] w-full rounded-lg sm:rounded-xl overflow-hidden bg-[#F0EEE6] border border-[#E6E4DD]">
                    <img
                      src={item.mockup}
                      alt={item.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 px-1.5 sm:px-2 py-0.5 rounded-md bg-[#161616] text-white font-mono text-[8px] sm:text-[9px] font-bold">
                      {item.impact}
                    </div>
                  </div>

                  <div className="space-y-0.5 sm:space-y-1">
                    <div className="text-[9px] sm:text-[10px] font-mono text-[#85827A]">
                      {item.category} • {item.year}
                    </div>
                    <h3 className="font-serif-editorial text-base sm:text-lg font-bold text-[#161616] group-hover:text-[#B89355] transition-colors flex items-center justify-between">
                      <span className="line-clamp-2">{item.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-[#85827A] group-hover:text-[#B89355] shrink-0 ml-1" />
                    </h3>
                  </div>

                  <p className="text-[11px] sm:text-xs text-[#66645E] leading-relaxed line-clamp-2 sm:line-clamp-3">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-2.5 sm:pt-3 border-t border-[#E6E4DD] flex items-center justify-between text-[10px] sm:text-xs font-mono font-bold text-[#161616]">
                  <div className="flex flex-wrap gap-1">
                    {item.tags.slice(0, 2).map((t) => (
                      <span key={t} className="px-1.5 sm:px-2 py-0.5 rounded bg-[#F0EEE6] text-[#55524C] text-[9px] sm:text-[10px]">
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform shrink-0">
                    VIEW <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </span>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===== 5. CAREER EXPERIENCE (GIT COMMIT ARCHITECTURE TIMELINE) ===== */}
      <section
        id="experience"
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-[#E6E4DD]"
      >
        <div className="space-y-6 sm:space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#E6E4DD] pb-4 sm:pb-6 gap-3 sm:gap-4">
            <div className="space-y-1.5 sm:space-y-2">
              <div className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-[#85827A] uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#161616]" />
                <span>VERSION CONTROL // CAREER CHANGELOG</span>
              </div>
              <h2 className="font-serif-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#161616]">
                Engineering Milestones & Career Path
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#161616] text-[#FAF9F6] text-[10px] font-mono font-bold shrink-0 self-start sm:self-auto">
              <span>git log --graph --oneline</span>
            </div>
          </div>

          {/* Interactive Git Commit Tree Container */}
          <div className="relative space-y-6 sm:space-y-8 pl-4 sm:pl-8 border-l-2 border-[#E6E4DD] ml-2 sm:ml-4">
            {CV_WORK_EXPERIENCES.map((exp, idx) => {
              const gitMeta = [
                { hash: "commit v1.0.0-wvc", branch: "origin/manufacturing-core", badge: "HARDWARE ASSEMBLY", isCurrent: false },
                { hash: "commit v2.0.0-s1-it", branch: "origin/academic-degree", badge: "DES CRYPTOGRAPHY • CERTIPORT", isCurrent: false },
                { hash: "commit v3.0.0-singapore", branch: "origin/maritime-ops", badge: "MARITIME LOGISTICS", isCurrent: false },
                { hash: "commit v4.0.0-instrumentation", branch: "origin/industrial-control", badge: "P&ID DIAGRAMS • SENSORS", isCurrent: false },
                { hash: "commit v5.0.0-production", branch: "main [ACTIVE]", badge: "NEXT.JS 16 • SUPABASE RLS", isCurrent: true }
              ][idx] || { hash: `commit v${exp.step}.0`, branch: "main", badge: "ENGINEERING", isCurrent: false };

              return (
                <div key={exp.step} className="relative group">
                  {/* Git Commit Node Circle */}
                  <div className={`absolute -left-[25px] sm:-left-[41px] top-4 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 bg-white flex items-center justify-center transition-all duration-300 group-hover:scale-125 ${
                    gitMeta.isCurrent 
                      ? 'border-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.5)]' 
                      : 'border-[#161616] group-hover:border-[#B89355]'
                  }`}>
                    <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${gitMeta.isCurrent ? 'bg-emerald-500 animate-pulse' : 'bg-[#161616]'}`} />
                  </div>

                  {/* Terminal Card */}
                  <div className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white border transition-all duration-300 space-y-3.5 ${
                    gitMeta.isCurrent 
                      ? 'border-[#161616] shadow-md ring-1 ring-[#161616]/10' 
                      : 'border-[#E6E4DD] shadow-xs hover:border-[#161616] hover:shadow-md'
                  }`}>
                    
                    {/* Terminal Header Bar */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E6E4DD] pb-3 text-xs font-mono">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-[#161616] text-[#FAF9F6] text-[9px] font-bold">
                          {gitMeta.hash}
                        </span>
                        <span className="text-[#85827A] text-[10px]">
                          {gitMeta.branch}
                        </span>
                        <span className="hidden sm:inline px-2 py-0.5 rounded bg-[#F0EEE6] text-[#55524C] text-[9px] font-semibold">
                          {gitMeta.badge}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-[10px] text-[#66645E]">
                        <span className="font-bold text-[#161616]">{exp.period}</span>
                        {gitMeta.isCurrent && (
                          <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[9px] font-bold flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            ACTIVE
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Company & Role Headline */}
                    <div className="space-y-0.5">
                      <div className="text-[10px] font-mono font-bold tracking-widest text-[#B89355] uppercase">
                        FASE 0{exp.step} // {exp.role}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#161616]">
                        {exp.company}
                      </h3>
                    </div>

                    {/* Bullet Points with CLI Shell Prompt > Indicator */}
                    <ul className="space-y-2 text-xs sm:text-sm text-[#44423D] leading-relaxed font-sans">
                      {exp.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="font-mono text-[#B89355] font-bold shrink-0 mt-0.5">❯</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ===== 6. TECHNICAL INSTRUMENTS NOTION ICON GRID WITH POPOVER DETAILS ===== */}
      <section
        id="instruments"
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-[#E6E4DD]"
      >
        <div className="space-y-6 sm:space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#E6E4DD] pb-4 sm:pb-6 gap-2 sm:gap-4">
            <div className="space-y-1.5 sm:space-y-2">
              <div className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-[#85827A] uppercase">
                TECH STACK
              </div>
              <h2 className="font-serif-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#161616]">
                Curated Stack & Software Tools
              </h2>
            </div>
            <p className="text-[10px] sm:text-xs font-mono text-[#85827A] uppercase tracking-wider">
              Hover or tap any icon to reveal tool architecture & role
            </p>
          </div>

          {/* Category Filter Pills Bar */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {['ALL', 'Frontend', 'Backend', 'AI & Lab', 'DevOps', 'Industrial'].map((cat) => {
              const isSelected = selectedTechCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedTechCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono font-bold transition-all cursor-pointer select-none ${
                    isSelected
                      ? 'bg-[#161616] text-white shadow-sm'
                      : 'bg-[#F0EEE6] text-[#55524C] border border-[#E6E4DD] hover:bg-[#E5E2D8] hover:text-[#161616]'
                  }`}
                >
                  {cat.toUpperCase()} {cat === 'ALL' ? `(${INDIVIDUAL_INSTRUMENTS.length})` : ''}
                </button>
              );
            })}
          </div>

          {/* Clean Notion Icon Cards Grid (Filtered Array) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {INDIVIDUAL_INSTRUMENTS
              .filter(t => selectedTechCategory === 'ALL' || t.category === selectedTechCategory)
              .map((tool) => {
                const isActive = activeTool === tool.name;

                return (
                  <div
                    key={tool.name}
                    onClick={() => setActiveTool(isActive ? null : tool.name)}
                    onMouseEnter={() => setActiveTool(tool.name)}
                    onMouseLeave={() => setActiveTool(null)}
                    className={`relative flex items-center gap-2.5 p-3 rounded-xl bg-white border cursor-pointer transition-all duration-200 select-none ${
                      isActive
                        ? 'border-[#161616] shadow-lg scale-105 bg-[#FAF9F6] ring-2 ring-[#161616]/10 z-30'
                        : 'border-[#E6E4DD] hover:border-[#161616] hover:shadow-md'
                    }`}
                  >
                    {/* Notion Emoji Box */}
                    <div className={`w-9 h-9 rounded-lg border flex items-center justify-center text-lg shrink-0 transition-colors ${
                      isActive ? 'bg-[#161616] border-[#161616] text-white' : 'bg-[#F0EEE6] border-[#E6E4DD] text-[#161616]'
                    }`}>
                      {tool.icon}
                    </div>

                    <div className="space-y-0.5 min-w-0">
                      <h3 className="text-xs font-bold text-[#161616] truncate">
                        {tool.name}
                      </h3>
                      <span className="inline-block px-1.5 py-0.2 rounded bg-[#F0EEE6] text-[#66645E] text-[9px] font-mono font-semibold">
                        {tool.category}
                      </span>
                    </div>

                    {/* Notion Hover Popover Tooltip */}
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 w-60 sm:w-64 p-3 rounded-xl bg-[#161616] text-[#FAF9F6] shadow-2xl border border-[#333333] z-50 pointer-events-none space-y-1.5"
                      >
                        <div className="flex items-center justify-between text-[10px] font-mono border-b border-[#333333] pb-1.5 text-[#AAAAAA]">
                          <span className="text-[#C5A059] font-bold flex items-center gap-1.5">
                            <span>{tool.icon}</span>
                            <span>{tool.name}</span>
                          </span>
                          <span className="uppercase">{tool.category}</span>
                        </div>
                        <p className="text-[11px] font-mono text-[#DDDDDD] leading-relaxed">
                          {tool.role}
                        </p>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-[#161616]" />
                      </motion.div>
                    )}
                  </div>
                );
              })}
          </div>

        </div>
      </section>

      {/* ===== 7. CONTACT SECTION ===== */}
      <section
        id="contact"
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-[#E6E4DD]"
      >
        <div className="p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl bg-[#161616] text-[#FAF9F6] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          
          <div className="space-y-2 sm:space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-[#2A2A2A] text-[10px] sm:text-xs font-mono text-[#C5A059] uppercase">
              <span>GET IN TOUCH</span>
            </div>
            <h2 className="font-serif-editorial text-2xl sm:text-3xl lg:text-5xl font-bold text-white">
              Let&apos;s build something exceptional.
            </h2>
            <p className="text-[11px] sm:text-xs lg:text-sm text-[#AAAAAA] max-w-md">
              Available for Full-time Software Engineering roles, AI Product Consulting, and Remote Contracts.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full md:w-auto">
            <a
              href={`mailto:${DEVELOPER_DATA.contact.email}`}
              className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-[#FAF9F6] text-[#161616] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#EAE8E1] transition-all cursor-pointer block text-center shadow-md hover:scale-105"
            >
              SEND AN EMAIL →
            </a>
            <a
              href={DEVELOPER_DATA.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-[#262626] border border-[#3A3A3A] text-white text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#333333] transition-all cursor-pointer block text-center"
            >
              WHATSAPP
            </a>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 max-w-6xl mx-auto border-t border-[#E6E4DD] text-[10px] sm:text-xs font-mono text-[#85827A] flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        <div className="text-center sm:text-left">
          © 2026 Bagus Supriyanto. Designed with precision & craftsmanship.
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/bagussupriyanto" target="_blank" rel="noopener noreferrer" className="hover:text-[#161616] transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/bagussupriyanto" target="_blank" rel="noopener noreferrer" className="hover:text-[#161616] transition-colors">LinkedIn</a>
        </div>
      </footer>

    </div>
  );
};
