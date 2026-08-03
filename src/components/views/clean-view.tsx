"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
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
  Layers,
  Code2,
  Terminal,
  Cpu,
  Coffee,
  Sparkles,
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
  ShieldCheck,
  Briefcase,
  CheckCircle2,
  FileText,
  UserCheck
} from 'lucide-react';
import { DEVELOPER_DATA, FEATURED_PROJECTS, CV_WORK_EXPERIENCES } from '@/lib/constants';
import { Project } from '@/types';

interface CleanViewProps {
  onSelectProject: (project: Project) => void;
  onSwitchToGameMode: () => void;
}

// 1 Hero Featured Case Study + 2 Supporting Projects Data
const HERO_CASE_STUDY = {
  project: FEATURED_PROJECTS[0], // SmartCafe
  tagline: "FEATURED SAAS PLATFORM",
  badge: "⚡ 45% FASTER ORDER DISPATCH",
  problem: "Manual pen-and-paper cafe ordering caused long checkout queues, order miscommunication, and a 15% revenue leak from untracked inventory.",
  users: "Cafe managers, kitchen staff, cashiers, and multi-branch business owners.",
  approach: "Architected a real-time web POS and kitchen dispatch system using Next.js 16 and Supabase BaaS with instant state synchronization and Row Level Security (RLS).",
  outcome: "Cut table order latency by 45%, completely eliminated stock discrepancies, and enabled real-time multi-branch revenue analytics.",
  tech: ["Next.js 16", "Supabase BaaS", "PostgreSQL", "Prisma ORM", "Tailwind CSS"],
  photo: "/assets/developer-workstation.jpg"
};

const SUPPORTING_PROJECTS = [
  {
    project: FEATURED_PROJECTS[1], // PT SMS
    tagline: "INDUSTRIAL ENTERPRISE PORTAL",
    badge: "📈 +65% B2B INQUIRY CONVERSION",
    problem: "An outdated online presence failed to communicate technical capability to international corporate clients and procurement managers in Bintan.",
    users: "Procurement heads, industrial partners, and corporate B2B clients.",
    approach: "Designed and engineered an editorial, high-performance web platform featuring crisp industrial showcases, product catalogs, and automated inquiry routing.",
    outcome: "Increased corporate client inquiry conversions by 65% and secured new supply partnerships with regional manufacturing leaders.",
    tech: ["Next.js", "Prisma ORM", "PostgreSQL", "Tailwind CSS"]
  },
  {
    project: FEATURED_PROJECTS[2], // Invoice Application
    tagline: "AUTOMATED BILLING & PDF ENGINE",
    badge: "⏱️ 8+ HOURS SAVED WEEKLY PER CLIENT",
    problem: "Small business owners and freelancers lost 10+ hours weekly manually formatting billing spreadsheets and tracking overdue client payments.",
    users: "Freelancers, agency owners, and SME accounting managers.",
    approach: "Engineered a streamlined invoicing application featuring client management, itemized tax calculations, instant PDF export, and payment tracking.",
    outcome: "Eliminated billing admin overhead by 80%, accelerated client payment cycles by 40%, and provided instantaneous PDF generation.",
    tech: ["Next.js", "PostgreSQL", "Prisma ORM", "PDF Kit"]
  }
];

// My Approach (3 Engineering Principles - Explaining How Bagus Thinks)
const APPROACH_PRINCIPLES = [
  {
    title: "Product-First Problem Solving",
    subtitle: "Code That Generates Commercial Value",
    icon: TrendingUp,
    desc: "I diagnose the underlying business constraint before writing a single line of code. Software should solve real operational bottlenecks and generate measurable ROI — not just technical complexity."
  },
  {
    title: "Industrial Engineering Discipline",
    subtitle: "Precision, Reliability & Data Security",
    icon: ShieldCheck,
    desc: "My background in precision manufacturing instills a strict discipline for type safety, error boundaries, database Row Level Security (RLS), and building web systems that perform reliably under load."
  },
  {
    title: "AI-Augmented Engineering Velocity",
    subtitle: "Shipping Production SaaS 4x Faster",
    icon: Cpu,
    desc: "I leverage AI LLMs, prompt orchestration, and intelligent code generation as productivity multipliers to design and deploy production-grade full-stack web applications in a fraction of traditional dev cycles."
  }
];

// Minimal Artisan Instruments
const INSTRUMENTS_STACK = [
  { name: "Next.js 16", desc: "App Router & SSR" },
  { name: "TypeScript", desc: "Strict Type Safety" },
  { name: "Supabase", desc: "Auth & Realtime BaaS" },
  { name: "PostgreSQL", desc: "Relational Engine" },
  { name: "Prisma ORM", desc: "Type-Safe Client" },
  { name: "Tailwind CSS", desc: "Utility Design System" },
  { name: "OpenAI & Gemini", desc: "LLM & Automation" },
  { name: "Vercel", desc: "Global Edge Network" }
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
    <div className="w-full bg-[#FAF9F6] text-[#161616] min-h-screen font-sans antialiased selection:bg-[#E8DFCE] selection:text-[#161616]">
      
      {/* ===== 1. EDITORIAL HEADER NAVBAR ===== */}
      <header className="sticky top-0 inset-x-0 z-50 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#E6E4DD]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 py-4 flex items-center justify-between">
          
          {/* Brand Signature */}
          <a href="#" className="flex items-center gap-3 group">
            <span className="font-serif-editorial text-2xl sm:text-3xl font-bold tracking-tight text-[#161616] group-hover:text-[#B89355] transition-colors">
              Bagus Supriyanto
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            <span className="hidden sm:inline-block text-[11px] font-mono tracking-widest text-[#85827A] uppercase">
              AI PRODUCT ENGINEER
            </span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-[11px] font-mono tracking-[0.18em] text-[#66645E] uppercase font-semibold">
            <a href="#work" className="hover:text-[#161616] transition-colors">Selected Work</a>
            <a href="#approach" className="hover:text-[#161616] transition-colors">My Approach</a>
            <a href="#journey" className="hover:text-[#161616] transition-colors">Professional Journey</a>
            <a href="#instruments" className="hover:text-[#161616] transition-colors">Instruments</a>
            <a href="#contact" className="hover:text-[#161616] transition-colors">Contact</a>
          </nav>

          {/* Right Action Items */}
          <div className="flex items-center gap-3">
            <button
              onClick={onSwitchToGameMode}
              className="px-3.5 py-1.5 rounded-full bg-[#F0EEE6] border border-[#E6E4DD] text-[#55524C] text-[11px] font-mono font-semibold flex items-center gap-1.5 hover:bg-[#E5E2D8] hover:text-[#161616] transition-all cursor-pointer"
              title="Switch to 16-Bit RPG Mode"
            >
              <Gamepad2 className="w-3.5 h-3.5 text-[#B89355]" />
              <span className="hidden sm:inline">16-Bit RPG</span>
            </button>

            <a
              href="#contact"
              className="hidden sm:flex px-5 py-2.5 rounded-full bg-[#161616] text-[#FAF9F6] text-xs font-semibold tracking-wider items-center gap-2 hover:bg-[#33312D] transition-all cursor-pointer shadow-xs"
            >
              GET IN TOUCH
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Toggle */}
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
          <div className="md:hidden bg-[#FAF9F6] border-b border-[#E6E4DD] px-6 py-6 space-y-4 text-xs font-mono font-bold tracking-widest text-[#161616] uppercase">
            <a href="#work" onClick={() => setMobileMenuOpen(false)} className="block py-1">Selected Work</a>
            <a href="#approach" onClick={() => setMobileMenuOpen(false)} className="block py-1">My Approach</a>
            <a href="#journey" onClick={() => setMobileMenuOpen(false)} className="block py-1">Professional Journey</a>
            <a href="#instruments" onClick={() => setMobileMenuOpen(false)} className="block py-1">Instruments</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-1">Contact</a>
            <a
              href="/assets/cv-bagus-supriyanto.pdf.pdf"
              download
              className="w-full py-3 rounded-full bg-[#161616] text-[#FAF9F6] font-sans font-semibold flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" /> Download Resume (PDF)
            </a>
          </div>
        )}
      </header>

      {/* ===== 2. HERO SECTION (INSTANT VALUE & COGNITIVE LOAD REDUCTION) ===== */}
      <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-32 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Hero Left Content (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Professional Title Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#F0EEE6] border border-[#E6E4DD] text-[11px] font-mono tracking-[0.18em] text-[#78756C] uppercase font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B89355]" />
              <span>AI PRODUCT ENGINEER</span>
            </div>

            {/* Clear Value Headline */}
            <div className="space-y-4">
              <h1 className="font-serif-editorial text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#161616] leading-[1.06]">
                Building modern web applications <span className="italic font-normal text-[#B89355]">that solve real business problems.</span>
              </h1>
            </div>

            {/* Value-Driven Subtitle */}
            <p className="text-base sm:text-xl text-[#55524C] font-normal leading-relaxed max-w-2xl">
              I help companies, founders, and business owners turn ideas into scalable, high-performance digital products. AI is one of my core development tools to engineer software faster, cleaner, and more reliably.
            </p>

            {/* 10-Second Trust Scan Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-[#E6E4DD] shadow-xs space-y-1">
                <div className="text-[10px] font-mono font-bold text-[#B89355] uppercase tracking-wider">WHAT I BUILD</div>
                <div className="text-sm font-bold text-[#161616]">SaaS & Enterprise Apps</div>
                <div className="text-[11px] text-[#66645E]">POS, Billing & Portals</div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E6E4DD] shadow-xs space-y-1">
                <div className="text-[10px] font-mono font-bold text-[#B89355] uppercase tracking-wider">ENGINEERING QUALITY</div>
                <div className="text-sm font-bold text-[#161616]">Full-Stack & RLS Security</div>
                <div className="text-[11px] text-[#66645E]">Next.js 16 & PostgreSQL</div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E6E4DD] shadow-xs space-y-1">
                <div className="text-[10px] font-mono font-bold text-[#B89355] uppercase tracking-wider">COMMERCIAL IMPACT</div>
                <div className="text-sm font-bold text-[#161616]">Measurable Business ROI</div>
                <div className="text-[11px] text-[#66645E]">Efficiency & Conversions</div>
              </div>
            </div>

            {/* Clear Action CTAs */}
            <div className="flex flex-wrap items-center gap-5 pt-2">
              <a
                href="#work"
                className="px-8 py-4 rounded-full bg-[#161616] text-[#FAF9F6] font-semibold text-xs tracking-widest uppercase hover:bg-[#33312D] transition-all shadow-md flex items-center gap-2.5 group cursor-pointer"
              >
                <span>VIEW SELECTED WORK</span>
                <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/assets/cv-bagus-supriyanto.pdf.pdf"
                download
                className="px-7 py-4 rounded-full bg-transparent border border-[#D8D5CC] text-[#161616] hover:border-[#161616] font-semibold text-xs tracking-widest uppercase transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>DOWNLOAD RESUME</span>
                <Download className="w-4 h-4 text-[#85827A]" />
              </a>
            </div>

          </div>

          {/* Hero Right Workspace Photography (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-3 bg-white border border-[#E6E4DD] shadow-2xl shadow-black/5 group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#1A1917]">
                <img
                  src="/assets/developer-workstation.jpg"
                  alt="Real Developer Workspace Warm Studio Lighting"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                
                {/* Status Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#FAF9F6]/95 backdrop-blur-md border border-[#E6E4DD] flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full overflow-hidden border border-[#D8D5CC] shrink-0">
                      <img src="/assets/bagus-profile.jpg" alt="Bagus Supriyanto" className="w-full h-full object-cover object-top" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#161616]">Bagus Supriyanto</div>
                      <div className="text-[10px] font-mono text-[#66645E]">AI Product Engineer • S1 IT UTY</div>
                    </div>
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-mono font-bold">
                    AVAILABLE FOR HIRE
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ===== 3. SELECTED WORK (THE MOST IMPORTANT SECTION: OUTCOMES OVER TECH) ===== */}
      <section id="work" className="py-24 bg-[#111111] text-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-16">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#2B2B2B] pb-8 gap-4">
            <div className="space-y-2">
              <div className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#C5A059] uppercase">
                SELECTED WORK
              </div>
              <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold text-[#FAF9F6]">
                Case Studies & Delivered Products
              </h2>
            </div>
            <p className="text-xs font-mono text-[#888888] uppercase tracking-wider max-w-sm">
              Demonstrating business challenges, user impact, architecture & commercial ROI.
            </p>
          </div>

          {/* 1 HERO FEATURED PROJECT (SmartCafe POS SaaS) */}
          <div
            onClick={() => onSelectProject(HERO_CASE_STUDY.project)}
            className="group bg-[#181818] border border-[#2B2B2B] hover:border-[#555555] rounded-3xl overflow-hidden transition-all duration-500 p-8 sm:p-12 cursor-pointer shadow-2xl space-y-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#2A2A2A] pb-6">
              <div className="space-y-1">
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#C5A059] uppercase">
                  01 / {HERO_CASE_STUDY.tagline}
                </span>
                <h3 className="font-serif-editorial text-3xl sm:text-5xl font-bold text-white group-hover:text-[#C5A059] transition-colors flex items-center gap-3">
                  <span>{HERO_CASE_STUDY.project.title}</span>
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity text-[#C5A059]" />
                </h3>
              </div>
              <div className="px-3.5 py-1.5 rounded-full bg-[#262626] border border-[#3A3A3A] text-amber-300 font-mono text-xs font-bold tracking-wider shrink-0 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#C5A059]" />
                <span>{HERO_CASE_STUDY.badge}</span>
              </div>
            </div>

            {/* Showcase Image */}
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#0D0D0D] border border-[#2A2A2A]">
              <img
                src={HERO_CASE_STUDY.project.mockupPath}
                alt={HERO_CASE_STUDY.project.title}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent opacity-40" />
            </div>

            {/* 4 Structured Case Study Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
              
              {/* Problem */}
              <div className="p-5 rounded-2xl bg-[#212121] border border-[#333333] space-y-2">
                <div className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5" /> PROBLEM EXISTED
                </div>
                <p className="text-xs text-[#CCCCCC] leading-relaxed">
                  {HERO_CASE_STUDY.problem}
                </p>
              </div>

              {/* Who Used It */}
              <div className="p-5 rounded-2xl bg-[#212121] border border-[#333333] space-y-2">
                <div className="text-[10px] font-mono font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
                  <UserCheck className="w-3.5 h-3.5" /> TARGET USERS
                </div>
                <p className="text-xs text-[#CCCCCC] leading-relaxed">
                  {HERO_CASE_STUDY.users}
                </p>
              </div>

              {/* Solution & Approach */}
              <div className="p-5 rounded-2xl bg-[#212121] border border-[#333333] space-y-2">
                <div className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5" /> HOW SOLVED
                </div>
                <p className="text-xs text-[#CCCCCC] leading-relaxed">
                  {HERO_CASE_STUDY.approach}
                </p>
              </div>

              {/* Outcome & Impact */}
              <div className="p-5 rounded-2xl bg-[#212121] border border-[#333333] space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5" /> BUSINESS OUTCOME
                  </div>
                  <p className="text-xs text-[#CCCCCC] leading-relaxed">
                    {HERO_CASE_STUDY.outcome}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#333333] flex items-center justify-between text-xs font-mono text-[#C5A059] font-bold">
                  <span>EXPLORE SYSTEM</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

            </div>

          </div>

          {/* 2 SUPPORTING PROJECTS GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {SUPPORTING_PROJECTS.map((sp, idx) => (
              <div
                key={sp.project.id}
                onClick={() => onSelectProject(sp.project)}
                className="group bg-[#181818] border border-[#2B2B2B] hover:border-[#555555] rounded-3xl p-6 sm:p-8 cursor-pointer shadow-xl transition-all duration-300 space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Header Image */}
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#0A0A0A] border border-[#262626]">
                    <img
                      src={sp.project.mockupPath}
                      alt={sp.project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#141414]/90 backdrop-blur-md border border-[#333333] text-amber-300 font-mono text-[10px] font-bold">
                      {sp.badge}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold text-[#C5A059] uppercase tracking-wider">
                      0{idx + 2} — {sp.tagline}
                    </span>
                    <h3 className="font-serif-editorial text-2xl sm:text-3xl font-bold text-white group-hover:text-[#C5A059] transition-colors flex items-center justify-between">
                      <span>{sp.project.title}</span>
                      <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-[#C5A059]" />
                    </h3>
                  </div>

                  <div className="space-y-3 text-xs text-[#CCCCCC] leading-relaxed">
                    <div>
                      <strong className="text-amber-400 font-mono text-[10px] uppercase block mb-0.5">PROBLEM:</strong>
                      <p>{sp.problem}</p>
                    </div>
                    <div>
                      <strong className="text-emerald-400 font-mono text-[10px] uppercase block mb-0.5">OUTCOME:</strong>
                      <p>{sp.outcome}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#262626] flex items-center justify-between text-[11px] font-mono font-bold text-[#C5A059]">
                  <div className="flex gap-1.5">
                    {sp.tech.slice(0, 3).map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-[#242424] text-[#CCCCCC] text-[10px]">
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    VIEW CASE STUDY <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===== 4. MY APPROACH (EXPLAINING HOW BAGUS THINKS) ===== */}
      <section id="approach" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-[#E6E4DD]">
        <div className="space-y-16">
          
          <div className="max-w-3xl space-y-3">
            <div className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#85827A] uppercase">
              MY APPROACH
            </div>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold text-[#161616] leading-tight">
              How I Think, Solve Problems, and Deliver Digital Products.
            </h2>
            <p className="text-base text-[#66645E] leading-relaxed">
              I don't just write lines of code — I partner with companies and founders to turn complex constraints into reliable commercial products.
            </p>
          </div>

          {/* 3 Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {APPROACH_PRINCIPLES.map((principle) => {
              const IconComp = principle.icon;
              return (
                <div
                  key={principle.title}
                  className="p-8 rounded-3xl bg-white border border-[#E6E4DD] shadow-xs space-y-5 hover:border-[#161616] transition-all"
                >
                  <div className="p-3.5 rounded-2xl bg-[#FAF9F6] border border-[#E6E4DD] w-fit text-[#B89355]">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <div className="space-y-1">
                    <div className="text-[10px] font-mono font-bold text-[#85827A] uppercase tracking-wider">{principle.subtitle}</div>
                    <h3 className="text-xl font-bold text-[#161616]">{principle.title}</h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#55524C] leading-relaxed">
                    {principle.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ===== 5. PROFESSIONAL JOURNEY (CAREER TIMELINE & MILESTONES) ===== */}
      <section id="journey" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-[#E6E4DD]">
        <div className="space-y-16">
          
          <div className="max-w-2xl space-y-3">
            <div className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#85827A] uppercase">
              PROFESSIONAL JOURNEY
            </div>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold text-[#161616]">
              Milestones & Delivered Products
            </h2>
          </div>

          {/* Timeline Cards */}
          <div className="space-y-6">
            {CV_WORK_EXPERIENCES.map((exp) => (
              <div
                key={exp.step}
                className="p-8 rounded-3xl bg-white border border-[#E6E4DD] shadow-xs flex flex-col lg:flex-row lg:items-start gap-8"
              >
                <div className="lg:w-1/3 shrink-0 space-y-2">
                  <div className="text-[10px] font-mono font-bold text-[#B89355] uppercase">
                    FASE {exp.step} • {exp.period}
                  </div>
                  <h3 className="text-xl font-bold text-[#161616]">{exp.company}</h3>
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

      {/* ===== 6. INSTRUMENTS & STACK (MINIMALIST TOOLING STRIP) ===== */}
      <section id="instruments" className="py-16 px-6 sm:px-12 max-w-7xl mx-auto border-t border-[#E6E4DD]">
        <div className="p-8 rounded-3xl bg-white border border-[#E6E4DD] shadow-xs flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-1 text-center lg:text-left">
            <div className="text-[10px] font-mono font-bold text-[#85827A] uppercase tracking-wider">TECHNICAL INSTRUMENTS</div>
            <div className="text-lg font-bold text-[#161616]">Core Stack & Infrastructure</div>
          </div>

          {/* Minimal 1-line tool pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {INSTRUMENTS_STACK.map((item) => (
              <span
                key={item.name}
                className="px-3.5 py-1.5 rounded-full bg-[#FAF9F6] border border-[#E6E4DD] text-xs font-mono text-[#161616] flex items-center gap-2"
              >
                <span className="font-bold">{item.name}</span>
                <span className="text-[10px] text-[#85827A]">({item.desc})</span>
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* ===== 7. CONTACT & FOOTER (SIMPLE, ELEGANT, PROFESSIONAL) ===== */}
      <section id="contact" className="py-24 bg-[#111111] text-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#C5A059] uppercase">
                INQUIRE FOR FULLTIME ROLES & CONTRACTS
              </div>
              <h2 className="font-serif-editorial text-4xl sm:text-6xl font-bold text-[#FAF9F6] leading-tight">
                Let's discuss how I can help build your next digital product.
              </h2>
              <p className="text-sm sm:text-base text-[#AAAAAA] leading-relaxed max-w-xl">
                Open for Full-time AI Product Engineer roles, Startup Contracts, and Technical Consulting.
              </p>
            </div>

            <div className="lg:col-span-4 space-y-4 flex flex-col justify-center">
              <a
                href={`mailto:${DEVELOPER_DATA.contact.email}`}
                className="w-full py-4 rounded-full bg-[#FAF9F6] text-[#111116] font-semibold text-xs tracking-widest uppercase hover:bg-[#EAE8E1] transition-all text-center block shadow-md cursor-pointer"
              >
                SEND AN EMAIL →
              </a>

              <a
                href={DEVELOPER_DATA.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-full bg-[#222222] border border-[#333333] text-white font-semibold text-xs tracking-widest uppercase hover:bg-[#333333] transition-all text-center block cursor-pointer"
              >
                WHATSAPP CONVERSATION
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

          {/* Social Links & Copyright */}
          <div className="flex flex-wrap items-center justify-between gap-6 pt-12 border-t border-[#2A2A2A] text-xs font-mono text-[#888888]">
            <div className="flex items-center gap-6">
              <a href="https://github.com/bagussupriyanto" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GITHUB</a>
              <a href="https://www.linkedin.com/in/bagus-supriyanto-18b32819b" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LINKEDIN</a>
              {DEVELOPER_DATA.contact.tiktok && (
                <a href={DEVELOPER_DATA.contact.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">TIKTOK AI LAB</a>
              )}
            </div>

            <div>
              © 2026 Bagus Supriyanto. Designed for high interview conversion.
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
