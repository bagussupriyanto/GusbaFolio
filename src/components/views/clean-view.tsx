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
  Award
} from 'lucide-react';
import { DEVELOPER_DATA, FEATURED_PROJECTS, CV_WORK_EXPERIENCES } from '@/lib/constants';
import { Project } from '@/types';

interface CleanViewProps {
  onSelectProject: (project: Project) => void;
  onSwitchToGameMode: () => void;
}

// Curated Toolkit (No cheap logo clouds, presented like an artisan studio toolkit)
const CURATED_TOOLKIT = [
  {
    category: "Core Engineering",
    description: "Production web applications, component architecture & type safety.",
    items: [
      { name: "Next.js 16", role: "App Router, SSR, Server Actions", icon: "⚡" },
      { name: "TypeScript", role: "Strict Static Typing & Interfaces", icon: "📘" },
      { name: "Tailwind CSS", role: "Utility-First Design System", icon: "🎨" }
    ]
  },
  {
    category: "Data & Infrastructure",
    description: "Relational data modeling, authentication & real-time synchronization.",
    items: [
      { name: "Supabase", role: "BaaS, Auth & Realtime Subscriptions", icon: "⚡" },
      { name: "PostgreSQL", role: "Relational Database Engine", icon: "🐘" },
      { name: "Prisma ORM", role: "Type-Safe Database Client", icon: "💎" }
    ]
  },
  {
    category: "Artificial Intelligence",
    description: "LLM integration, generative workflows & prompt orchestration.",
    items: [
      { name: "OpenAI API", role: "GPT-4o & Function Calling", icon: "🧠" },
      { name: "Google Gemini", role: "Multimodal AI & Veo Video Lab", icon: "✨" },
      { name: "Anthropic Claude", role: "Complex Reasoning & Content Engine", icon: "💡" }
    ]
  },
  {
    category: "Craft & Tooling",
    description: "DevOps, continuous integration & interface prototyping.",
    items: [
      { name: "Cursor IDE", role: "AI-Augmented Code Engineering", icon: "💻" },
      { name: "GitHub & CI/CD", role: "Version Control & Automations", icon: "🐙" },
      { name: "Vercel", role: "Edge Network & Global Deployment", icon: "▲" }
    ]
  }
];

// Linear/Apple-Style Process Pipeline Steps
const PROCESS_PIPELINE = [
  {
    step: "01",
    name: "Understand",
    sub: "Problem Discovery",
    icon: Search,
    detail: "I begin by diagnosing the underlying business constraint or user bottleneck before writing a single line of code."
  },
  {
    step: "02",
    name: "Research",
    sub: "Market & AI Synthesis",
    icon: Sliders,
    detail: "I evaluate architectural tradeoffs, existing software patterns, and AI capabilities to map the optimal technical path."
  },
  {
    step: "03",
    name: "Design",
    sub: "UX & System Architecture",
    icon: PenTool,
    detail: "I craft minimalist user interfaces and schema structures focused on clarity, accessibility, and high conversion."
  },
  {
    step: "04",
    name: "Build",
    sub: "Full-Stack Development",
    icon: Wrench,
    detail: "I develop modular, type-safe Next.js codebases backed by solid PostgreSQL schemas and resilient API integrations."
  },
  {
    step: "05",
    name: "Test",
    sub: "Quality Assurance",
    icon: Shield,
    detail: "I stress-test security rules, database RLS policies, mobile viewports, and edge cases to ensure zero runtime flaws."
  },
  {
    step: "06",
    name: "Deploy",
    sub: "Production Launch",
    icon: Rocket,
    detail: "I deploy to Vercel edge networks, set up SSL certificates, optimize asset delivery, and audit lighthouse scores."
  },
  {
    step: "07",
    name: "Improve",
    sub: "Iteration & Analytics",
    icon: RefreshCw,
    detail: "I monitor user behavior, gather qualitative feedback, and continuously refine performance and features over time."
  }
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
      
      {/* ===== 1. HIGH-END EDITORIAL HEADER NAVBAR ===== */}
      <header className="sticky top-0 inset-x-0 z-50 bg-[#FAF9F5]/90 backdrop-blur-md border-b border-[#E6E4DD]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 py-4 flex items-center justify-between">
          
          {/* Brand Signature */}
          <a href="#" className="flex items-center gap-3 group">
            <span className="font-serif-editorial text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1B18] group-hover:text-[#B89355] transition-colors">
              Bagus Supriyanto
            </span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            <span className="hidden sm:inline-block text-[11px] font-mono tracking-widest text-[#85827A] uppercase">
              STUDIO
            </span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-9 text-[11px] font-mono tracking-[0.18em] text-[#66645E] uppercase font-semibold">
            <a href="#about" className="hover:text-[#1C1B18] transition-colors">About</a>
            <a href="#work" className="hover:text-[#1C1B18] transition-colors">Selected Work</a>
            <a href="#process" className="hover:text-[#1C1B18] transition-colors">Process</a>
            <a href="#tools" className="hover:text-[#1C1B18] transition-colors">Toolkit</a>
            <a href="#experience" className="hover:text-[#1C1B18] transition-colors">Experience</a>
            <a href="#contact" className="hover:text-[#1C1B18] transition-colors">Contact</a>
          </nav>

          {/* Right Action Items */}
          <div className="flex items-center gap-3">
            <button
              onClick={onSwitchToGameMode}
              className="px-3.5 py-1.5 rounded-full bg-[#F0EEE6] border border-[#E6E4DD] text-[#55524C] text-[11px] font-mono font-semibold flex items-center gap-1.5 hover:bg-[#E5E2D8] hover:text-[#1C1B18] transition-all cursor-pointer"
              title="Switch to 16-Bit RPG Game World"
            >
              <Gamepad2 className="w-3.5 h-3.5 text-[#B89355]" />
              <span className="hidden sm:inline">16-Bit RPG</span>
            </button>

            <a
              href="#contact"
              className="hidden sm:flex px-5 py-2.5 rounded-full bg-[#1C1B18] text-[#FAF9F5] text-xs font-semibold tracking-wider items-center gap-2 hover:bg-[#33312D] transition-all cursor-pointer shadow-xs"
            >
              INQUIRE
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Nav Button */}
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
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-1">About</a>
            <a href="#work" onClick={() => setMobileMenuOpen(false)} className="block py-1">Selected Work</a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)} className="block py-1">Process</a>
            <a href="#tools" onClick={() => setMobileMenuOpen(false)} className="block py-1">Toolkit</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="block py-1">Experience</a>
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

      {/* ===== 2. HERO SECTION (EDITORIAL LUXURY) ===== */}
      <section className="relative pt-16 pb-24 sm:pt-24 sm:pb-36 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Hero Left Content (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Role Category Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#F0EEE6] border border-[#E6E4DD] text-[11px] font-mono tracking-[0.18em] text-[#78756C] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B89355]" />
              <span>AI Assistant Developer & Product Architect</span>
            </div>

            {/* Editorial Headline */}
            <div className="space-y-4">
              <h1 className="font-serif-editorial text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1C1B18] leading-[1.05]">
                I build digital products <span className="italic font-normal text-[#B89355]">with AI</span> and purpose.
              </h1>
            </div>

            {/* Philosophy Statement */}
            <p className="text-base sm:text-xl text-[#55524C] font-normal leading-relaxed max-w-2xl">
              I don't just use AI. I build real digital products using artificial intelligence as one of my core tools — turning complex business constraints into clean, intuitive, and performant web software.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-5 pt-4">
              <a
                href="#work"
                className="px-8 py-4 rounded-full bg-[#1C1B18] text-[#FAF9F5] font-semibold text-xs tracking-widest uppercase hover:bg-[#33312D] transition-all shadow-md flex items-center gap-2.5 group"
              >
                <span>EXPLORE SELECTED WORK</span>
                <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/assets/cv-bagus-supriyanto.pdf.pdf"
                download
                className="px-6 py-4 rounded-full bg-transparent border border-[#D8D5CC] text-[#1C1B18] hover:border-[#1C1B18] font-semibold text-xs tracking-widest uppercase transition-all flex items-center gap-2"
              >
                <span>DOWNLOAD CV</span>
                <Download className="w-4 h-4 text-[#85827A]" />
              </a>
            </div>

            {/* Sub-label */}
            <div className="pt-8 text-[11px] font-mono text-[#85827A] flex items-center gap-4">
              <span className="uppercase tracking-widest">S1 IT GRADUATE (UTY 2024)</span>
              <span className="w-12 h-[1px] bg-[#D8D5CC]" />
              <span className="uppercase tracking-widest">BASED IN BINTAN</span>
            </div>

          </div>

          {/* Hero Right Cinematic Workstation Photo (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl p-3 bg-white border border-[#E6E4DD] shadow-2xl shadow-black/5 group">
              
              {/* Photo */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#1A1917]">
                <img
                  src="/assets/developer-workstation.jpg"
                  alt="Real Developer Workspace Warm Lighting"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                
                {/* Floating Studio Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#FAF9F5]/95 backdrop-blur-md border border-[#E6E4DD] flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-[#D8D5CC] shrink-0">
                      <img src="/assets/bagus-profile.jpg" alt="Bagus Supriyanto" className="w-full h-full object-cover object-top" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#1C1B18]">Bagus Supriyanto</div>
                      <div className="text-[11px] font-mono text-[#66645E]">Product-Focused Engineer</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-mono font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    AVAILABLE
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ===== 3. ABOUT SECTION (MAGAZINE EDITORIAL) ===== */}
      <section id="about" className="py-24 sm:py-32 px-6 sm:px-12 max-w-7xl mx-auto border-t border-[#E6E4DD]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Editorial Photo Left (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-[#E6E4DD] bg-white p-3 shadow-xl">
              <div className="aspect-[4/5] rounded-xl overflow-hidden bg-[#1C1B18]">
                <img
                  src="/assets/profile-photo.jpg"
                  alt="Bagus Supriyanto Editorial Portrait"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <div className="text-center font-signature text-3xl text-[#1C1B18] font-bold">
              Bagus Supriyanto
            </div>
          </div>

          {/* Editorial Narrative Right (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="text-xs font-mono font-bold tracking-[0.2em] text-[#85827A] uppercase">
              ABOUT THE BUILDER
            </div>

            <h2 className="font-serif-editorial text-3xl sm:text-5xl font-bold text-[#1C1B18] leading-tight">
              Crafting software with precision, discipline, and modern intelligence.
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[#55524C] leading-relaxed font-normal">
              <p>
                Lulusan Sarjana Komputer dari <strong className="text-[#1C1B18]">Universitas Teknologi Yogyakarta (S1 Teknologi Informasi, 2024)</strong>. Perjalanan saya menggabungkan disiplin ketat industri manufaktur presisi dengan semangat inovasi perangkat lunak modern.
              </p>
              <p>
                Saya tidak memandang AI sebagai pengganti rekayasa perangkat lunak, melainkan sebagai <strong className="text-[#1C1B18]">katalisator performa</strong> yang memungkinkan ide dikembangkan menjadi aplikasi SaaS skala produksi dalam waktu yang jauh lebih cepat tanpa mengorbankan kualitas arsitektur.
              </p>
            </div>

            {/* Highlighted Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E6E4DD]">
              <div className="space-y-1">
                <div className="text-xs font-mono text-[#85827A] uppercase tracking-wider">EDUCATION</div>
                <div className="text-sm font-bold text-[#1C1B18]">S1 UTY (2024)</div>
                <div className="text-xs text-[#66645E]">Sarjana Komputer</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs font-mono text-[#85827A] uppercase tracking-wider">CERTIFICATION</div>
                <div className="text-sm font-bold text-[#1C1B18]">Microsoft Certified</div>
                <div className="text-xs text-[#66645E]">Certiport Specialist</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs font-mono text-[#85827A] uppercase tracking-wider">CREATIVE LAB</div>
                <div className="text-sm font-bold text-[#1C1B18]">TikTok AI Lab</div>
                <div className="text-xs text-[#66645E]">Generative Video Content</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ===== 4. SELECTED WORK (APPLE PRODUCT PAGE CAROUSEL) ===== */}
      <section id="work" className="py-28 bg-[#111111] text-[#FAF9F5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3">
              <div className="text-xs font-mono font-bold tracking-[0.2em] text-[#B89355] uppercase">
                SELECTED WORK
              </div>
              <h2 className="font-serif-editorial text-4xl sm:text-6xl font-bold text-[#FAF9F5]">
                Things I've Built
              </h2>
            </div>
            <p className="text-xs font-mono tracking-widest text-[#888888] max-w-sm uppercase">
              Full-Viewport Case Studies — Built for Scalability & Business Impact.
            </p>
          </div>

          {/* Stack of Expansive Project Cards */}
          <div className="space-y-20">
            {FEATURED_PROJECTS.map((project, index) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group bg-[#191919] border border-[#2D2D2D] hover:border-[#555555] rounded-3xl overflow-hidden transition-all duration-500 p-6 sm:p-10 cursor-pointer shadow-2xl space-y-8"
              >
                {/* Top Row: Category + Title + Visit Link */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#2D2D2D] pb-6">
                  <div className="space-y-1">
                    <span className="text-xs font-mono font-semibold tracking-widest text-[#C5A059] uppercase">
                      0{index + 1} — {project.category}
                    </span>
                    <h3 className="font-serif-editorial text-3xl sm:text-5xl font-bold text-white group-hover:text-[#C5A059] transition-colors flex items-center gap-3">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity text-[#C5A059]" />
                    </h3>
                  </div>

                  <span className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#A1A1A1] group-hover:text-white transition-colors uppercase">
                    VIEW CASE STUDY <ArrowRight className="w-4 h-4" />
                  </span>
                </div>

                {/* Big Showcase Image */}
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#0A0A0A] border border-[#2A2A2A]">
                  <img
                    src={project.mockupPath}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#191919] via-transparent to-transparent opacity-60" />
                </div>

                {/* Project Breakdown: Business Problem vs Solution vs Results */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  
                  {/* Problem */}
                  <div className="p-5 rounded-2xl bg-[#222222] border border-[#333333] space-y-2">
                    <div className="text-xs font-mono font-bold text-[#E5A84B] uppercase tracking-wider flex items-center gap-2">
                      <Zap className="w-4 h-4" /> BUSINESS PROBLEM
                    </div>
                    <p className="text-xs sm:text-sm text-[#CCCCCC] leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="p-5 rounded-2xl bg-[#222222] border border-[#333333] space-y-2">
                    <div className="text-xs font-mono font-bold text-[#60A5FA] uppercase tracking-wider flex items-center gap-2">
                      <Code2 className="w-4 h-4" /> ENGINEERING SOLUTION
                    </div>
                    <p className="text-xs sm:text-sm text-[#CCCCCC] leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="p-5 rounded-2xl bg-[#222222] border border-[#333333] space-y-3 flex flex-col justify-between">
                    <div className="text-xs font-mono font-bold text-[#34D399] uppercase tracking-wider flex items-center gap-2">
                      <Layers className="w-4 h-4" /> TECH ARCHITECTURE
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="px-2.5 py-1 rounded-md bg-[#2D2D2D] text-[#DDDDDD] text-xs font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===== 5. PROCESS (VISUAL LINEAR TIMELINE) ===== */}
      <section id="process" className="py-28 px-6 sm:px-12 max-w-7xl mx-auto border-t border-[#E6E4DD]">
        <div className="space-y-16">
          
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono font-bold tracking-[0.2em] text-[#85827A] uppercase">
              ENGINEERING METHODOLOGY
            </div>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold text-[#1C1B18]">
              How I Turn Ideas into Impact
            </h2>
            <p className="text-sm text-[#66645E]">
              A disciplined 7-stage workflow designed for speed, stability, and measurable business outcomes.
            </p>
          </div>

          {/* Visual Pipeline Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
            {PROCESS_PIPELINE.map((p, idx) => {
              const IconComponent = p.icon;
              return (
                <div
                  key={p.step}
                  className="p-5 rounded-2xl bg-white border border-[#E6E4DD] shadow-xs hover:border-[#1C1B18] transition-all space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-[#85827A]">
                      <span className="text-xs font-mono font-bold text-[#B89355]">{p.step}</span>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#1C1B18]">{p.name}</h3>
                      <div className="text-[10px] font-mono text-[#85827A] uppercase">{p.sub}</div>
                    </div>
                    <p className="text-xs text-[#66645E] leading-relaxed">
                      {p.detail}
                    </p>
                  </div>

                  {idx < PROCESS_PIPELINE.length - 1 && (
                    <div className="hidden lg:block text-center text-[#D8D5CC] font-mono text-xs pt-2">
                      ↓
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ===== 6. TOOLS (CURATED ARTISAN TOOLKIT) ===== */}
      <section id="tools" className="py-28 px-6 sm:px-12 max-w-7xl mx-auto border-t border-[#E6E4DD]">
        <div className="space-y-16">
          
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono font-bold tracking-[0.2em] text-[#85827A] uppercase">
              TECHNICAL TOOLKIT
            </div>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold text-[#1C1B18]">
              Curated Stack & Instruments
            </h2>
            <p className="text-sm text-[#66645E]">
              Handpicked tools and infrastructure selected for reliability, type safety, and rapid deployment.
            </p>
          </div>

          {/* 4 Category Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CURATED_TOOLKIT.map((group) => (
              <div
                key={group.category}
                className="p-8 rounded-3xl bg-white border border-[#E6E4DD] shadow-xs space-y-6"
              >
                <div>
                  <h3 className="text-lg font-bold text-[#1C1B18]">{group.category}</h3>
                  <p className="text-xs text-[#85827A] mt-1">{group.description}</p>
                </div>

                <div className="space-y-3">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E6E4DD] flex items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{item.icon}</span>
                        <div>
                          <div className="text-xs font-bold text-[#1C1B18]">{item.name}</div>
                          <div className="text-[11px] font-mono text-[#66645E]">{item.role}</div>
                        </div>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-[#B89355]" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===== 7. WORK EXPERIENCE (EDITORIAL TIMELINE) ===== */}
      <section id="experience" className="py-28 px-6 sm:px-12 max-w-7xl mx-auto border-t border-[#E6E4DD]">
        <div className="space-y-16">
          
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono font-bold tracking-[0.2em] text-[#85827A] uppercase">
              CAREER & ACADEMIC RECREATION
            </div>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold text-[#1C1B18]">
              Experience & Qualifications
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

      {/* ===== 8. CONTACT & FOOTER (MINIMAL LUXURY ENDING) ===== */}
      <section id="contact" className="py-28 bg-[#111111] text-[#FAF9F5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-20">
          
          {/* Big Editorial Contact Title */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="text-xs font-mono font-bold tracking-[0.2em] text-[#C5A059] uppercase">
                INQUIRE FOR PROJECTS & FULLTIME
              </div>
              <h2 className="font-serif-editorial text-4xl sm:text-6xl font-bold text-[#FAF9F5] leading-tight">
                Let's build something exceptional together.
              </h2>
              <p className="text-sm sm:text-base text-[#AAAAAA] leading-relaxed max-w-xl">
                Open for Fulltime Software Engineering roles, AI Product Consulting, and Remote Contracts.
              </p>
            </div>

            <div className="lg:col-span-4 space-y-4 flex flex-col justify-center">
              <a
                href={DEVELOPER_DATA.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-full bg-[#FAF9F5] text-[#111111] font-semibold text-xs tracking-widest uppercase hover:bg-[#EAE8E1] transition-all text-center block"
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

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-between gap-6 pt-12 border-t border-[#2A2A2A] text-xs font-mono text-[#888888]">
            <div className="flex items-center gap-6">
              <a href="https://github.com/bagussupriyanto" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GITHUB</a>
              <a href="https://www.linkedin.com/in/bagus-supriyanto-18b32819b" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LINKEDIN</a>
              {DEVELOPER_DATA.contact.tiktok && (
                <a href={DEVELOPER_DATA.contact.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">TIKTOK AI LAB</a>
              )}
            </div>

            <div>
              © 2026 Bagus Supriyanto. Designed with minimal luxury.
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
