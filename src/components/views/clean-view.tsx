"use client";

import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Video,
  CheckCircle2,
  Lock,
  ExternalLink,
  Gamepad2,
  Layers,
  Code2,
  Terminal,
  Cpu,
  Coffee,
  Sparkles,
  ChevronRight,
  Menu,
  X,
  Copy,
  Check,
  Zap,
  Globe,
  Sliders,
  Shield,
  Search,
  PenTool,
  Wrench,
  Rocket,
  RefreshCw,
  Award,
  TrendingUp,
  Target,
  ShieldCheck
} from 'lucide-react';
import { DEVELOPER_DATA, FEATURED_PROJECTS, CV_WORK_EXPERIENCES } from '@/lib/constants';
import { Project } from '@/types';

interface CleanViewProps {
  onSelectProject: (project: Project) => void;
  onSwitchToGameMode: () => void;
}

// Structured Case Studies for Apple-Style Full Viewport Presentations
const CASE_STUDIES = [
  {
    project: FEATURED_PROJECTS[0], // SmartCafe
    tagline: "SAAS POS & KITCHEN DISPATCH SYSTEM",
    badge: "45% FASTER ORDER DISPATCH",
    challenge: "Manual pen-and-paper cafe ordering led to long checkout queues, order miscommunications, and a 15% revenue leak from untracked inventory.",
    solution: "Architected a real-time web POS and kitchen display system using Next.js 16 and Supabase BaaS with instant state synchronization and Row Level Security.",
    result: "Reduced table order latency by 45%, completely eliminated stock discrepancies, and enabled real-time multi-branch revenue analytics.",
    metrics: [
      { label: "Order Latency", val: "-45%" },
      { label: "Inventory Accuracy", val: "100%" },
      { label: "Multi-Branch Sync", val: "Real-time" }
    ],
    photo: "/assets/developer-workstation.jpg"
  },
  {
    project: FEATURED_PROJECTS[1], // PT SMS
    tagline: "INDUSTRIAL SUPPLIER ENTERPRISE PLATFORM",
    badge: "65% INCREASE IN B2B INQUIRIES",
    challenge: "An outdated web presence failed to communicate technical capability to international corporate clients and procurement managers in Bintan.",
    solution: "Designed and engineered an editorial, high-performance web platform featuring crisp industrial showcases, product catalogs, and automated inquiry routing.",
    result: "Increased corporate client inquiry conversions by 65% and secured new supply partnerships with regional manufacturing leaders.",
    metrics: [
      { label: "Inquiry Rate", val: "+65%" },
      { label: "Page Load Time", val: "< 0.8s" },
      { label: "Mobile Bounce Rate", val: "-38%" }
    ],
    photo: "/assets/projects/ptsms-mockup.png"
  },
  {
    project: FEATURED_PROJECTS[2], // Invoice Application
    tagline: "AUTOMATED BILLING & PDF ENGINE",
    badge: "SAVED 8+ HOURS WEEKLY PER CLIENT",
    challenge: "Small business owners and freelancers lost 10+ hours weekly manually formatting billing spreadsheets and tracking overdue client payments.",
    solution: "Engineered a streamlined invoicing application featuring client management, itemized tax calculations, instant PDF export, and payment status tracking.",
    result: "Eliminated billing admin overhead by 80%, accelerated client payment cycles by 40%, and provided instantaneous PDF generation.",
    metrics: [
      { label: "Time Saved", val: "8+ hrs/wk" },
      { label: "Payment Cycles", val: "40% Faster" },
      { label: "PDF Render", val: "Instant" }
    ],
    photo: "/assets/projects/invoice-mockup.png"
  }
];

// Why Hire Bagus (3 Business Value Pillars)
const VALUE_PILLARS = [
  {
    title: "Commercial & Business Mindset",
    icon: TrendingUp,
    subtitle: "Code That Drives Revenue",
    description: "I write software with business metrics in mind — optimizing conversion rates, user retention, and operational efficiency rather than just writing isolated features."
  },
  {
    title: "Full-Stack & AI Mastery",
    icon: Cpu,
    subtitle: "End-to-End Ownership",
    description: "From Next.js 16 frontend interfaces and PostgreSQL schema design to AI LLM prompt orchestration, I own the entire product pipeline from concept to deployment."
  },
  {
    title: "Industrial Rigor & Speed",
    icon: ShieldCheck,
    subtitle: "Precision Engineering",
    description: "My background in precision manufacturing instills a strict discipline for error handling, database RLS security, and building software that performs reliably under load."
  }
];

// Linear-Style 7-Stage Process
const PROCESS_STAGES = [
  { step: "01", name: "Understand", desc: "Diagnosing business bottlenecks and user needs." },
  { step: "02", name: "Research", desc: "Evaluating system architecture & AI capabilities." },
  { step: "03", name: "Design", desc: "Crafting clean, accessible UX & database schemas." },
  { step: "04", name: "Build", desc: "Developing modular, type-safe Next.js codebases." },
  { step: "05", name: "Test", desc: "Auditing security, RLS rules & viewport responsiveness." },
  { step: "06", name: "Deploy", desc: "Launching to Vercel Edge networks with high lighthouse scores." },
  { step: "07", name: "Improve", desc: "Iterating based on analytics & real user feedback." }
];

export const CleanView: React.FC<CleanViewProps> = ({ onSelectProject, onSwitchToGameMode }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DEVELOPER_DATA.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="w-full bg-[#FAF9F5] text-[#1C1B18] min-h-screen font-sans antialiased selection:bg-[#E8DFCE] selection:text-[#1C1B18]">
      
      {/* ===== 1. EDITORIAL HEADER NAVBAR ===== */}
      <header className="sticky top-0 inset-x-0 z-50 bg-[#FAF9F5]/90 backdrop-blur-md border-b border-[#E6E4DD]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 py-4 flex items-center justify-between">
          
          {/* Brand Signature */}
          <a href="#" className="flex items-center gap-3 group">
            <span className="font-serif-editorial text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1B18] group-hover:text-[#B89355] transition-colors">
              Bagus Supriyanto
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            <span className="hidden sm:inline-block text-[11px] font-mono tracking-widest text-[#85827A] uppercase">
              STUDIO
            </span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-[11px] font-mono tracking-[0.18em] text-[#66645E] uppercase font-semibold">
            <a href="#work" className="hover:text-[#1C1B18] transition-colors">Featured Case Studies</a>
            <a href="#why-hire" className="hover:text-[#1C1B18] transition-colors">Why Hire Me</a>
            <a href="#about" className="hover:text-[#1C1B18] transition-colors">About</a>
            <a href="#process" className="hover:text-[#1C1B18] transition-colors">Process</a>
            <a href="#contact" className="hover:text-[#1C1B18] transition-colors">Contact</a>
          </nav>

          {/* Right Action Items */}
          <div className="flex items-center gap-3">
            <button
              onClick={onSwitchToGameMode}
              className="px-3.5 py-1.5 rounded-full bg-[#F0EEE6] border border-[#E6E4DD] text-[#55524C] text-[11px] font-mono font-semibold flex items-center gap-1.5 hover:bg-[#E5E2D8] hover:text-[#1C1B18] transition-all cursor-pointer"
              title="Switch to 16-Bit RPG World"
            >
              <Gamepad2 className="w-3.5 h-3.5 text-[#B89355]" />
              <span className="hidden sm:inline">16-Bit RPG</span>
            </button>

            <a
              href="#contact"
              className="hidden sm:flex px-5 py-2.5 rounded-full bg-[#1C1B18] text-[#FAF9F5] text-xs font-semibold tracking-wider items-center gap-2 hover:bg-[#33312D] transition-all cursor-pointer shadow-xs"
            >
              HIRE BAGUS
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-[#F0EEE6] text-[#1C1B18] hover:bg-[#E6E4DD]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAF9F5] border-b border-[#E6E4DD] px-6 py-6 space-y-4 text-xs font-mono font-bold tracking-widest text-[#1C1B18] uppercase">
            <a href="#work" onClick={() => setMobileMenuOpen(false)} className="block py-1">Featured Case Studies</a>
            <a href="#why-hire" onClick={() => setMobileMenuOpen(false)} className="block py-1">Why Hire Me</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-1">About</a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)} className="block py-1">Process</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-1">Contact</a>
            <a
              href="/assets/cv-bagus-supriyanto.pdf.pdf"
              download
              className="w-full py-3 rounded-full bg-[#1C1B18] text-[#FAF9F5] font-sans font-semibold flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" /> Download CV (PDF)
            </a>
          </div>
        )}
      </header>

      {/* ===== 2. HERO SECTION (IMMEDIATE BUSINESS VALUE PROPOSITION) ===== */}
      <section className="relative pt-16 pb-24 sm:pt-24 sm:pb-36 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Hero Left Content (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Category Tag */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#F0EEE6] border border-[#E6E4DD] text-[11px] font-mono tracking-[0.18em] text-[#78756C] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B89355]" />
              <span>SENIOR PRODUCT DEVELOPER & AI ARCHITECT</span>
            </div>

            {/* Business Value Headline */}
            <div className="space-y-4">
              <h1 className="font-serif-editorial text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1C1B18] leading-[1.06]">
                Building high-impact digital products <span className="italic font-normal text-[#B89355]">that scale revenue</span> and solve real problems.
              </h1>
            </div>

            {/* Core Value Statement */}
            <p className="text-base sm:text-xl text-[#55524C] font-normal leading-relaxed max-w-2xl">
              I don't just use AI or write isolated code. I engineer resilient full-stack web applications and AI-driven platforms that deliver measurable commercial outcomes for founders, companies, and international clients.
            </p>

            {/* 3 Business Value Metric Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-[#E6E4DD] shadow-xs space-y-1">
                <div className="text-xs font-mono font-bold text-[#B89355] uppercase tracking-wider">SPEED & PERFORMANCE</div>
                <div className="text-lg font-bold text-[#1C1B18]">4x Faster Delivery</div>
                <div className="text-[11px] text-[#66645E]">Concept to production launch</div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E6E4DD] shadow-xs space-y-1">
                <div className="text-xs font-mono font-bold text-[#B89355] uppercase tracking-wider">ENGINEERING RIGOR</div>
                <div className="text-lg font-bold text-[#1C1B18]">Industrial Security</div>
                <div className="text-[11px] text-[#66645E]">Battle-tested & RLS privacy</div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E6E4DD] shadow-xs space-y-1">
                <div className="text-xs font-mono font-bold text-[#B89355] uppercase tracking-wider">BUSINESS RESULTS</div>
                <div className="text-lg font-bold text-[#1C1B18]">Measurable ROI</div>
                <div className="text-[11px] text-[#66645E]">POS, Billing & SaaS platforms</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-5 pt-2">
              <a
                href="#work"
                className="px-8 py-4 rounded-full bg-[#1C1B18] text-[#FAF9F5] font-semibold text-xs tracking-widest uppercase hover:bg-[#33312D] transition-all shadow-md flex items-center gap-2.5 group cursor-pointer"
              >
                <span>EXPLORE CASE STUDIES</span>
                <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-7 py-4 rounded-full bg-transparent border border-[#D8D5CC] text-[#1C1B18] hover:border-[#1C1B18] font-semibold text-xs tracking-widest uppercase transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>INQUIRE FOR HIRE</span>
                <Mail className="w-4 h-4 text-[#85827A]" />
              </a>
            </div>

          </div>

          {/* Hero Right Real Developer Workspace Photography (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-3.5 bg-white border border-[#E6E4DD] shadow-2xl shadow-black/5 group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#1A1917]">
                <img
                  src="/assets/developer-workstation.jpg"
                  alt="Real Developer Workspace Photography"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                
                {/* Photographer Badge Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#FAF9F5]/95 backdrop-blur-md border border-[#E6E4DD] flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-[#D8D5CC] shrink-0">
                      <img src="/assets/bagus-profile.jpg" alt="Bagus Supriyanto" className="w-full h-full object-cover object-top" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#1C1B18]">Bagus Supriyanto</div>
                      <div className="text-[11px] font-mono text-[#66645E]">Product Architect • S1 UTY (2024)</div>
                    </div>
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-mono font-bold">
                    🟢 OPEN TO HIRE
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ===== 3. FEATURED CASE STUDIES (PRIMARY FOCUS - APPLE PRODUCT PAGE STYLE) ===== */}
      <section id="work" className="py-28 bg-[#111111] text-[#FAF9F5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-24">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#2B2B2B] pb-10 gap-6">
            <div className="space-y-3">
              <div className="text-xs font-mono font-bold tracking-[0.2em] text-[#C5A059] uppercase">
                PRIMARY CASE STUDIES
              </div>
              <h2 className="font-serif-editorial text-4xl sm:text-6xl font-bold text-[#FAF9F5]">
                Proof of Impact: Selected Projects
              </h2>
            </div>
            <p className="text-xs font-mono tracking-widest text-[#888888] max-w-sm uppercase">
              Full-Viewport Case Studies Demonstrating Challenge, Solution & Measurable Business ROI.
            </p>
          </div>

          {/* Expansive Full-Viewport Style Case Study Cards */}
          {CASE_STUDIES.map((cs, idx) => (
            <div
              key={cs.project.id}
              onClick={() => onSelectProject(cs.project)}
              className="group bg-[#181818] border border-[#2B2B2B] hover:border-[#555555] rounded-3xl overflow-hidden transition-all duration-500 p-6 sm:p-12 cursor-pointer shadow-2xl space-y-10"
            >
              {/* Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#2A2A2A] pb-6">
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-3">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#C5A059] uppercase">
                      CASE STUDY 0{idx + 1}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-[#555555]" />
                    <span className="text-xs font-mono text-[#888888] uppercase tracking-wider">
                      {cs.tagline}
                    </span>
                  </div>
                  <h3 className="font-serif-editorial text-3xl sm:text-5xl font-bold text-white group-hover:text-[#C5A059] transition-colors flex items-center gap-4">
                    <span>{cs.project.title}</span>
                    <ArrowUpRight className="w-7 h-7 opacity-0 group-hover:opacity-100 transition-opacity text-[#C5A059]" />
                  </h3>
                </div>

                {/* Key Result Badge */}
                <div className="px-4 py-2 rounded-full bg-[#262626] border border-[#3A3A3A] text-amber-300 font-mono text-xs font-bold tracking-wider shrink-0 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#C5A059]" />
                  <span>{cs.badge}</span>
                </div>
              </div>

              {/* Large Photography Showcase */}
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#0D0D0D] border border-[#2A2A2A]">
                <img
                  src={cs.project.mockupPath}
                  alt={cs.project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent opacity-50" />
              </div>

              {/* 4 Structured Case Study Blocks (Challenge vs Solution vs Results vs Stack) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
                
                {/* 1. Challenge */}
                <div className="p-6 rounded-2xl bg-[#212121] border border-[#333333] space-y-3">
                  <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                    <Target className="w-4 h-4" /> THE CHALLENGE
                  </div>
                  <p className="text-xs sm:text-sm text-[#CCCCCC] leading-relaxed">
                    {cs.challenge}
                  </p>
                </div>

                {/* 2. Solution */}
                <div className="p-6 rounded-2xl bg-[#212121] border border-[#333333] space-y-3">
                  <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-2">
                    <Code2 className="w-4 h-4" /> THE SOLUTION
                  </div>
                  <p className="text-xs sm:text-sm text-[#CCCCCC] leading-relaxed">
                    {cs.solution}
                  </p>
                </div>

                {/* 3. Results */}
                <div className="p-6 rounded-2xl bg-[#212121] border border-[#333333] space-y-3">
                  <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" /> BUSINESS IMPACT
                  </div>
                  <p className="text-xs sm:text-sm text-[#CCCCCC] leading-relaxed">
                    {cs.result}
                  </p>
                </div>

                {/* 4. Architecture & Metrics */}
                <div className="p-6 rounded-2xl bg-[#212121] border border-[#333333] space-y-4 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider flex items-center gap-2">
                      <Layers className="w-4 h-4" /> ARCHITECTURE
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {cs.project.techStack.map((tech) => (
                        <span key={tech} className="px-2.5 py-1 rounded bg-[#2D2D2D] text-[#DDDDDD] text-xs font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#333333] flex items-center justify-between text-xs font-mono text-[#AAAAAA]">
                    <span>EXPLORE DRAWER</span>
                    <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

              </div>

            </div>
          ))}

        </div>
      </section>

      {/* ===== 4. WHY HIRE BAGUS? (VALUE PILLARS FOR FOUNDERS & RECRUITERS) ===== */}
      <section id="why-hire" className="py-28 px-6 sm:px-12 max-w-7xl mx-auto border-t border-[#E6E4DD]">
        <div className="space-y-16">
          
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-mono font-bold tracking-[0.2em] text-[#85827A] uppercase">
              WHY HIRE BAGUS SUPRIYANTO?
            </div>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold text-[#1C1B18] leading-tight">
              A Product Engineer Who Owns Outcomes, Not Just Code.
            </h2>
            <p className="text-base text-[#66645E] leading-relaxed">
              Companies and startup founders hire me because I combine software craftsmanship, rapid execution with AI, and a relentless focus on business ROI.
            </p>
          </div>

          {/* 3 Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUE_PILLARS.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-8 rounded-3xl bg-white border border-[#E6E4DD] shadow-xs space-y-5 hover:border-[#1C1B18] transition-all"
                >
                  <div className="p-3.5 rounded-2xl bg-[#FAF9F5] border border-[#E6E4DD] w-fit text-[#B89355]">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <div className="space-y-1">
                    <div className="text-xs font-mono font-bold text-[#85827A] uppercase tracking-wider">{pillar.subtitle}</div>
                    <h3 className="text-xl font-bold text-[#1C1B18]">{pillar.title}</h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#55524C] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ===== 5. ABOUT & STORYTELLING ===== */}
      <section id="about" className="py-28 px-6 sm:px-12 max-w-7xl mx-auto border-t border-[#E6E4DD]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Photo Left (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl overflow-hidden border border-[#E6E4DD] bg-white p-3.5 shadow-xl">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#1C1B18]">
                <img
                  src="/assets/profile-photo.jpg"
                  alt="Bagus Supriyanto Editorial Portrait"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <div className="text-center font-signature text-4xl text-[#1C1B18] font-bold">
              Bagus Supriyanto
            </div>
          </div>

          {/* Narrative Right (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="text-xs font-mono font-bold tracking-[0.2em] text-[#85827A] uppercase">
              EDITORIAL STORYTELLING
            </div>

            <h2 className="font-serif-editorial text-3xl sm:text-5xl font-bold text-[#1C1B18] leading-tight">
              From Industrial Precision to High-Impact Web Engineering.
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[#55524C] leading-relaxed font-normal">
              <p>
                Sebagai lulusan Sarjana Komputer dari <strong className="text-[#1C1B18]">Universitas Teknologi Yogyakarta (S1 Teknologi Informasi, 2024)</strong>, saya membawa perspektif unik: disiplin kedisiplinan kerja industri manufaktur presisi digabungkan dengan kecepatan pemrograman web modern.
              </p>
              <p>
                Saya tidak hanya membuat antarmuka menarik — saya merancang arsitektur data PostgreSQL, mengamankan akses dengan Supabase RLS, dan mengintegrasikan AI LLM untuk mengotomatisasi pekerjaan berulang.
              </p>
            </div>

            {/* Quick Qualifications */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E6E4DD]">
              <div className="space-y-1">
                <div className="text-xs font-mono text-[#85827A] uppercase tracking-wider">ACADEMIC</div>
                <div className="text-sm font-bold text-[#1C1B18]">S1 UTY (2024)</div>
                <div className="text-xs text-[#66645E]">Teknologi Informasi</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs font-mono text-[#85827A] uppercase tracking-wider">CERTIFICATION</div>
                <div className="text-sm font-bold text-[#1C1B18]">Microsoft Certified</div>
                <div className="text-xs text-[#66645E]">Certiport Specialist</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs font-mono text-[#85827A] uppercase tracking-wider">AI CONTENT LAB</div>
                <div className="text-sm font-bold text-[#1C1B18]">TikTok Content Lab</div>
                <div className="text-xs text-[#66645E]">Generative Video Lab</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ===== 6. PROCESS (7-STAGE LINEAR TIMELINE) ===== */}
      <section id="process" className="py-28 px-6 sm:px-12 max-w-7xl mx-auto border-t border-[#E6E4DD]">
        <div className="space-y-16">
          
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono font-bold tracking-[0.2em] text-[#85827A] uppercase">
              THE DEVELOPMENT PROCESS
            </div>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold text-[#1C1B18]">
              Disciplined Execution Pipeline
            </h2>
            <p className="text-sm text-[#66645E]">
              How I move projects from initial problem discovery to production deployment.
            </p>
          </div>

          {/* Horizontal Stepper Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
            {PROCESS_STAGES.map((st) => (
              <div
                key={st.step}
                className="p-5 rounded-2xl bg-white border border-[#E6E4DD] shadow-xs hover:border-[#1C1B18] transition-all space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="text-xs font-mono font-bold text-[#B89355]">{st.step}</div>
                  <h3 className="text-base font-bold text-[#1C1B18]">{st.name}</h3>
                  <p className="text-xs text-[#66645E] leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===== 7. SUBTLE ARTISAN TOOLKIT (CONDENSED MINIMALIST BAR) ===== */}
      <section className="py-16 px-6 sm:px-12 max-w-7xl mx-auto border-t border-[#E6E4DD]">
        <div className="p-8 rounded-3xl bg-white border border-[#E6E4DD] shadow-xs flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-1 text-center lg:text-left">
            <div className="text-xs font-mono font-bold text-[#85827A] uppercase tracking-wider">CURATED INSTRUMENTS</div>
            <div className="text-lg font-bold text-[#1C1B18]">Engineering Stack & Tools</div>
          </div>

          {/* Minimal 1-line tool pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="px-3 py-1.5 rounded-full bg-[#FAF9F5] border border-[#E6E4DD] text-xs font-mono text-[#1C1B18]">⚡ Next.js 16</span>
            <span className="px-3 py-1.5 rounded-full bg-[#FAF9F5] border border-[#E6E4DD] text-xs font-mono text-[#1C1B18]">📘 TypeScript</span>
            <span className="px-3 py-1.5 rounded-full bg-[#FAF9F5] border border-[#E6E4DD] text-xs font-mono text-[#1C1B18]">⚡ Supabase BaaS</span>
            <span className="px-3 py-1.5 rounded-full bg-[#FAF9F5] border border-[#E6E4DD] text-xs font-mono text-[#1C1B18]">🐘 PostgreSQL</span>
            <span className="px-3 py-1.5 rounded-full bg-[#FAF9F5] border border-[#E6E4DD] text-xs font-mono text-[#1C1B18]">💎 Prisma ORM</span>
            <span className="px-3 py-1.5 rounded-full bg-[#FAF9F5] border border-[#E6E4DD] text-xs font-mono text-[#1C1B18]">🎨 Tailwind CSS</span>
            <span className="px-3 py-1.5 rounded-full bg-[#FAF9F5] border border-[#E6E4DD] text-xs font-mono text-[#1C1B18]">🧠 OpenAI & Gemini</span>
            <span className="px-3 py-1.5 rounded-full bg-[#FAF9F5] border border-[#E6E4DD] text-xs font-mono text-[#1C1B18]">▲ Vercel Edge</span>
          </div>

        </div>
      </section>

      {/* ===== 8. CAREER EXPERIENCE ===== */}
      <section id="experience" className="py-28 px-6 sm:px-12 max-w-7xl mx-auto border-t border-[#E6E4DD]">
        <div className="space-y-16">
          
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono font-bold tracking-[0.2em] text-[#85827A] uppercase">
              CAREER TIMELINE
            </div>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold text-[#1C1B18]">
              Experience & Professional History
            </h2>
          </div>

          <div className="space-y-6">
            {CV_WORK_EXPERIENCES.map((exp) => (
              <div
                key={exp.step}
                className="p-8 rounded-3xl bg-white border border-[#E6E4DD] shadow-xs flex flex-col lg:flex-row lg:items-start gap-8"
              >
                <div className="lg:w-1/3 shrink-0 space-y-2">
                  <div className="text-xs font-mono font-bold text-[#B89355] uppercase">
                    FASE {exp.step} • {exp.period}
                  </div>
                  <h3 className="text-xl font-bold text-[#1C1B18]">{exp.company}</h3>
                  <div className="text-xs font-semibold text-[#85827A]">{exp.role}</div>
                </div>

                <div className="lg:w-2/3 space-y-3 pt-2 lg:pt-0 border-t lg:border-t-0 lg:border-l border-[#E6E4DD] lg:pl-8">
                  <ul className="space-y-3">
                    {exp.points.map((pt, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-[#55524C] flex items-start gap-3 leading-relaxed">
                        <span className="text-[#B89355] font-bold shrink-0 mt-0.5">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===== 9. CONTACT & FOOTER (MINIMAL LUXURY ENDING) ===== */}
      <section id="contact" className="py-28 bg-[#111111] text-[#FAF9F5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-20">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="text-xs font-mono font-bold tracking-[0.2em] text-[#C5A059] uppercase">
                INQUIRE FOR FULLTIME & CONTRACTS
              </div>
              <h2 className="font-serif-editorial text-4xl sm:text-6xl font-bold text-[#FAF9F5] leading-tight">
                Ready to build something impactful? Let's talk.
              </h2>
              <p className="text-sm sm:text-base text-[#AAAAAA] leading-relaxed max-w-xl">
                Open for Senior Frontend / Full-Stack Engineering roles, AI Product Consulting, and Remote Contracts.
              </p>
            </div>

            <div className="lg:col-span-4 space-y-4 flex flex-col justify-center">
              <a
                href={DEVELOPER_DATA.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-full bg-[#FAF9F5] text-[#111111] font-semibold text-xs tracking-widest uppercase hover:bg-[#EAE8E1] transition-all text-center block shadow-md cursor-pointer"
              >
                START A CONVERSATION →
              </a>

              <div className="p-4 rounded-2xl bg-[#1D1D1D] border border-[#333333] text-xs text-[#CCCCCC] space-y-2 font-mono">
                <div className="flex items-center justify-between">
                  <span>EMAIL:</span>
                  <span className="text-white font-bold">{DEVELOPER_DATA.contact.email}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>LOCATION:</span>
                  <span className="text-white font-bold">Bintan, Indonesia</span>
                </div>
              </div>
            </div>

          </div>

          <div className="flex flex-wrap items-center justify-between gap-6 pt-12 border-t border-[#2A2A2A] text-xs font-mono text-[#888888]">
            <div className="flex items-center gap-6">
              <a href="https://github.com/bagussupriyanto" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GITHUB</a>
              <a href="https://www.linkedin.com/in/bagus-supriyanto-18b32819b" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LINKEDIN</a>
              {DEVELOPER_DATA.contact.tiktok && (
                <a href={DEVELOPER_DATA.contact.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">TIKTOK AI LAB</a>
              )}
            </div>

            <div>
              © 2026 Bagus Supriyanto. Designed for high business impact.
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
