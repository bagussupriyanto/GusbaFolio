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
  Instagram,
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
  Check
} from 'lucide-react';
import { DEVELOPER_DATA, FEATURED_PROJECTS } from '@/lib/constants';
import { Project } from '@/types';

interface CleanViewProps {
  onSelectProject: (project: Project) => void;
  onSwitchToGameMode: () => void;
}

const TOOLS_LIST = [
  { name: "Next.js", category: "Framework", icon: "⚡" },
  { name: "TypeScript", category: "Language", icon: "📘" },
  { name: "Tailwind CSS", category: "Styling", icon: "🎨" },
  { name: "Supabase", category: "Database / BaaS", icon: "⚡" },
  { name: "Prisma", category: "ORM", icon: "💎" },
  { name: "PostgreSQL", category: "Database", icon: "🐘" },
  { name: "Gemini AI", category: "AI API", icon: "✨" },
  { name: "Claude AI", category: "AI LLM", icon: "🧠" },
  { name: "Cursor AI", category: "IDE Editor", icon: "💻" },
  { name: "GitHub", category: "Version Control", icon: "🐙" },
  { name: "Figma", category: "UI/UX Design", icon: "🎨" },
  { name: "Vercel", category: "Deployment", icon: "▲" }
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Understand",
    desc: "I listen, research, and understand the real business problem first."
  },
  {
    num: "02",
    title: "Plan with AI",
    desc: "I use AI tools to speed up planning, architecture research, and brainstorming."
  },
  {
    num: "03",
    title: "Build",
    desc: "I write clean, modular code to create solid, performant, and scalable solutions."
  },
  {
    num: "04",
    title: "Test & Refine",
    desc: "I test thoroughly, fix edge cases, and ensure everything works seamlessly."
  },
  {
    num: "05",
    title: "Deliver",
    desc: "I deliver a polished production product that solves the exact problem."
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
    <div className="w-full bg-[#F6F5F2] text-[#1A1A1A] min-h-screen font-sans selection:bg-amber-200 selection:text-amber-900">
      
      {/* ===== 1. EDITORIAL HEADER NAVBAR ===== */}
      <header className="sticky top-0 inset-x-0 z-50 bg-[#F6F5F2]/90 backdrop-blur-md border-b border-[#E5E2DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
          
          {/* Logo & Slogan Badge */}
          <div className="flex items-center gap-4">
            <a href="#" className="font-serif-editorial text-2xl sm:text-3xl font-bold tracking-tight text-[#1A1A1A]">
              Bagus.
            </a>
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full border border-[#DCD8CF] bg-[#EFECE6] text-[10px] font-mono tracking-widest text-[#706C64] uppercase">
              <span>PRIDE</span>
              <span>•</span>
              <span>PROGRESS</span>
              <span>•</span>
              <span>PERFECTION</span>
            </div>
          </div>

          {/* Nav Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-wider text-[#55524C] uppercase">
            <a href="#about" className="hover:text-black transition-colors">ABOUT</a>
            <a href="#work" className="hover:text-black transition-colors">WORK</a>
            <a href="#process" className="hover:text-black transition-colors">PROCESS</a>
            <a href="#tools" className="hover:text-black transition-colors">TOOLS</a>
            <a href="#contact" className="hover:text-black transition-colors">CONTACT</a>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={onSwitchToGameMode}
              className="px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-800 text-xs font-semibold flex items-center gap-1.5 hover:bg-purple-200 transition-all cursor-pointer"
              title="Beralih ke Mode Game 16-Bit RPG"
            >
              <Gamepad2 className="w-3.5 h-3.5 text-purple-700" />
              <span className="hidden sm:inline font-mono">16-Bit RPG Mode</span>
            </button>

            <a
              href="#contact"
              className="hidden sm:flex px-5 py-2 rounded-full bg-[#1A1A1A] text-white text-xs font-semibold items-center gap-2 hover:bg-[#333333] transition-all cursor-pointer"
            >
              LET'S TALK
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-[#EFECE6] text-[#1A1A1A] hover:bg-[#E5E2DC]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#F6F5F2] border-b border-[#E5E2DC] px-6 py-5 space-y-4 text-xs font-bold tracking-wider text-[#1A1A1A] uppercase">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-1">ABOUT</a>
            <a href="#work" onClick={() => setMobileMenuOpen(false)} className="block py-1">WORK</a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)} className="block py-1">PROCESS</a>
            <a href="#tools" onClick={() => setMobileMenuOpen(false)} className="block py-1">TOOLS</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-1">CONTACT</a>
            <a
              href="/assets/cv-bagus-supriyanto.pdf.pdf"
              download
              className="w-full py-3 rounded-full bg-[#1A1A1A] text-white font-semibold flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" /> DOWNLOAD CV (PDF)
            </a>
          </div>
        )}
      </header>

      {/* ===== 2. HERO SECTION ===== */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 px-4 sm:px-8 max-w-7xl mx-auto">
        
        {/* Left Vertical Stamp (Desktop Only) */}
        <div className="hidden xl:block absolute left-0 top-36 origin-top-left -rotate-90 text-[10px] font-mono tracking-[0.25em] text-[#8C887F] uppercase">
          BASED IN BINTAN, INDONESIA •
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Content (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="text-xs font-mono font-bold tracking-[0.2em] text-[#7A766F] uppercase">
              AI ASSISTANT DEVELOPER
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1A1A1A] leading-[1.08]">
              Building digital products <span className="font-serif-editorial italic font-normal text-[#8C6D46]">with AI</span> and purpose.
            </h1>

            <p className="text-base sm:text-lg text-[#55524C] max-w-xl leading-relaxed font-normal">
              I help ideas turn into real products using modern technologies and AI — smarter development, faster execution, better results.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-5 pt-2">
              <a
                href="#work"
                className="px-7 py-3.5 rounded-full bg-[#1A1A1A] text-white font-semibold text-xs tracking-wider uppercase hover:bg-[#333333] transition-all shadow-sm"
              >
                VIEW MY WORK
              </a>

              <a
                href="/assets/cv-bagus-supriyanto.pdf.pdf"
                download
                className="px-4 py-3.5 text-xs font-semibold tracking-wider text-[#1A1A1A] underline underline-offset-8 hover:text-[#8C6D46] transition-colors flex items-center gap-2 uppercase"
              >
                DOWNLOAD CV <Download className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-8 text-xs font-mono text-[#8C887F] flex items-center gap-3">
              <span>SCROLL TO EXPLORE</span>
              <div className="w-16 h-[1px] bg-[#C5C1B8]" />
              <span>→</span>
            </div>

          </div>

          {/* Hero Developer Workstation Photo (Right 5 Cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-[#DCD8CF] bg-white p-2.5 shadow-2xl shadow-black/5 group">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#1A1A1A]">
                <img
                  src="/assets/developer-workstation.jpg"
                  alt="Bagus Supriyanto Workstation Setup"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Photo Badge Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#F6F5F2]/95 backdrop-blur-md border border-[#E5E2DC] flex items-center justify-between shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full overflow-hidden border border-[#DCD8CF] shrink-0">
                      <img src="/assets/bagus-profile.jpg" alt="Bagus" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#1A1A1A]">Bagus Supriyanto</div>
                      <div className="text-[10px] font-mono text-[#706C64]">UTY IT Graduate • 2024</div>
                    </div>
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" title="Available for hire" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ===== 3. INTRO / ABOUT SECTION ===== */}
      <section id="about" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto border-t border-[#E5E2DC]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Intro Text (8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="text-xs font-mono font-bold tracking-[0.2em] text-[#7A766F] uppercase">
              INTRO
            </div>

            <h2 className="font-serif-editorial text-3xl sm:text-5xl font-bold text-[#1A1A1A] leading-tight">
              I build. I learn.<br />I solve real problems.
            </h2>

            <p className="text-sm sm:text-base text-[#55524C] leading-relaxed max-w-2xl">
              I'm <strong className="text-[#1A1A1A]">Bagus Supriyanto</strong>, an AI Assistant Developer who loves building useful web applications, automating workflows, and turning complex problems into simple solutions. I combine clean code, AI tools, and creativity to deliver products that make a real business impact.
            </p>

            {/* Signature */}
            <div className="pt-4">
              <div className="font-signature text-4xl sm:text-5xl text-[#1A1A1A] font-bold tracking-wide">
                Bagus Supriyanto
              </div>
            </div>
          </div>

          {/* Right Highlights Cards (4 Cols) */}
          <div className="lg:col-span-4 space-y-4 flex flex-col justify-center">
            <div className="p-5 rounded-xl bg-white border border-[#E5E2DC] shadow-xs flex items-center gap-4">
              <div className="p-3 rounded-lg bg-[#EFECE6] text-[#1A1A1A]">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg font-bold text-[#1A1A1A]">3+ Years Experience</div>
                <div className="text-xs text-[#706C64]">Tech & Web Engineering</div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E5E2DC] shadow-xs flex items-center gap-4">
              <div className="p-3 rounded-lg bg-[#EFECE6] text-[#1A1A1A]">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg font-bold text-[#1A1A1A]">10+ Completed Projects</div>
                <div className="text-xs text-[#706C64]">Production Web Systems</div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E5E2DC] shadow-xs flex items-center gap-4">
              <div className="p-3 rounded-lg bg-[#EFECE6] text-[#1A1A1A]">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <div className="text-lg font-bold text-[#1A1A1A]">Available for Hire</div>
                <div className="text-xs text-[#706C64]">Fulltime & Contract Remote</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ===== 4. SELECTED WORK SECTION (DARK MATTE CHARCOAL) ===== */}
      <section id="work" className="py-24 bg-[#141416] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs font-mono font-bold tracking-[0.2em] text-[#8C887F] uppercase mb-2">
                SELECTED WORK
              </div>
              <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold text-white">
                Things I've Built
              </h2>
            </div>
            <a
              href="#contact"
              className="text-xs font-mono tracking-wider text-[#A19D94] hover:text-white transition-colors flex items-center gap-2 uppercase"
            >
              SEE ALL PROJECTS →
            </a>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_PROJECTS.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group bg-[#1E1E22] border border-[#2E2E34] hover:border-[#555560] rounded-2xl overflow-hidden transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1"
              >
                {/* Mockup Container */}
                <div className="relative aspect-[16/10] bg-[#121214] overflow-hidden border-b border-[#2E2E34]">
                  <img
                    src={project.mockupPath}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E22] via-transparent to-transparent opacity-80" />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-amber-200 transition-colors flex items-center gap-2">
                        <span>{project.title}</span>
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-amber-200" />
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#2E2E34] text-[#A19D94] text-[10px] font-mono uppercase">
                        {project.category}
                      </span>
                    </div>

                    <p className="text-xs text-[#A19D94] line-clamp-2 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#2E2E34] flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded bg-[#27272C] text-[#8C887F] text-[10px] font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Coming Soon Placeholder Card */}
            <div className="bg-[#1A1A1E] border border-dashed border-[#2E2E34] rounded-2xl p-8 flex flex-col items-center justify-center text-center text-[#706C64] space-y-3 min-h-[320px]">
              <div className="p-4 rounded-full bg-[#24242A]">
                <Cpu className="w-6 h-6 text-[#8C887F]" />
              </div>
              <div className="text-sm font-bold text-white">More Projects...</div>
              <div className="text-xs text-[#8C887F]">New AI & Web systems coming soon</div>
            </div>
          </div>

        </div>
      </section>

      {/* ===== 5. MY PROCESS & MY TOOLS SECTION ===== */}
      <section id="process" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto border-t border-[#E5E2DC]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: MY PROCESS (6 Cols) */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="text-xs font-mono font-bold tracking-[0.2em] text-[#7A766F] uppercase mb-2">
                MY PROCESS
              </div>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
                From idea to impact.
              </h2>
            </div>

            {/* Stepper List */}
            <div className="space-y-6 relative before:absolute before:left-4 before:top-3 before:bottom-3 before:w-[1px] before:bg-[#DCD8CF]">
              {PROCESS_STEPS.map((step) => (
                <div key={step.num} className="relative flex items-start gap-5 pl-2">
                  <div className="w-8 h-8 rounded-full bg-[#EFECE6] border border-[#DCD8CF] text-[#1A1A1A] text-xs font-mono font-bold flex items-center justify-center shrink-0 z-10">
                    {step.num}
                  </div>
                  <div className="space-y-1 pt-0.5">
                    <h3 className="text-sm font-bold text-[#1A1A1A]">{step.title}</h3>
                    <p className="text-xs text-[#55524C] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: MY TOOLS (6 Cols) */}
          <div id="tools" className="lg:col-span-6 space-y-8">
            <div>
              <div className="text-xs font-mono font-bold tracking-[0.2em] text-[#7A766F] uppercase mb-2">
                MY TOOLS
              </div>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
                Tools I use every day.
              </h2>
            </div>

            {/* Tools Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {TOOLS_LIST.map((tool) => (
                <div
                  key={tool.name}
                  className="p-4 rounded-xl bg-white border border-[#E5E2DC] shadow-xs flex items-center gap-3 hover:border-[#1A1A1A] transition-colors"
                >
                  <span className="text-lg">{tool.icon}</span>
                  <div>
                    <div className="text-xs font-bold text-[#1A1A1A]">{tool.name}</div>
                    <div className="text-[10px] text-[#706C64]">{tool.category}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ===== 6. CASE STUDY BANNER (DARK CHARCOAL BANNER) ===== */}
      <section className="py-20 bg-[#161618] text-white border-y border-[#2E2E34] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-4">
            <div className="text-xs font-mono font-bold tracking-[0.2em] text-amber-300 uppercase">
              CASE STUDY
            </div>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold text-white">
              SmartCafe POS System
            </h2>
            <p className="text-sm text-[#A19D94] leading-relaxed max-w-lg">
              A complete cafe management system built to help small businesses run their daily operations, inventory, kitchen displays, and reports more efficiently.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onSelectProject(FEATURED_PROJECTS[0])}
                className="px-6 py-3 rounded-full bg-white text-[#1A1A1A] font-semibold text-xs tracking-wider uppercase hover:bg-amber-100 transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                VIEW CASE STUDY →
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-xl overflow-hidden border border-[#2E2E34] shadow-2xl">
              <img
                src="/assets/developer-workstation.jpg"
                alt="SmartCafe Case Study Preview"
                className="w-full aspect-[16/9] object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ===== 7. LET'S WORK TOGETHER / CONTACT ===== */}
      <section id="contact" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Let's Work Together (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono font-bold tracking-[0.2em] text-[#7A766F] uppercase">
              LET'S WORK TOGETHER
            </div>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl font-bold text-[#1A1A1A] leading-tight">
              Have a project in mind?
            </h2>
            <p className="text-sm text-[#55524C] leading-relaxed">
              Let's build something useful, impactful, and people love to use. Terbuka untuk kesempatan fulltime maupun project remote.
            </p>
          </div>

          {/* Middle Column: Let's Talk CTA & Details (4 Cols) */}
          <div className="lg:col-span-4 space-y-5 flex flex-col justify-center">
            <div className="flex items-center gap-3">
              <a
                href={DEVELOPER_DATA.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full bg-[#1A1A1A] text-white font-semibold text-xs tracking-wider uppercase hover:bg-[#333333] transition-all inline-flex items-center gap-2 cursor-pointer shadow-sm"
              >
                LET'S TALK →
              </a>
            </div>

            <div className="space-y-2 text-xs text-[#55524C]">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#1A1A1A]" />
                <span className="font-semibold text-[#1A1A1A]">{DEVELOPER_DATA.contact.email}</span>
                <button
                  onClick={handleCopyEmail}
                  className="ml-2 px-2 py-0.5 rounded bg-[#EFECE6] text-[10px] font-mono text-[#706C64] hover:text-black cursor-pointer"
                >
                  {copiedEmail ? 'Copied' : 'Copy'}
                </button>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#1A1A1A]" />
                <span>+62 851-5522-7735</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#1A1A1A]" />
                <span>Bintan, Kepulauan Riau, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Right Column: On The Side (3 Cols) */}
          <div className="lg:col-span-3 space-y-4 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-[#E5E2DC] pt-6 lg:pt-0 lg:pl-8">
            <div className="text-xs font-mono font-bold tracking-[0.2em] text-[#7A766F] uppercase">
              ON THE SIDE
            </div>
            <p className="text-xs text-[#55524C] leading-relaxed">
              I share things about coding, AI tools, and my journey as a developer.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/bagussupriyanto"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white border border-[#E5E2DC] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/bagus-supriyanto-18b32819b"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white border border-[#E5E2DC] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              {DEVELOPER_DATA.contact.tiktok && (
                <a
                  href={DEVELOPER_DATA.contact.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white border border-[#E5E2DC] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors"
                  title="TikTok AI Lab"
                >
                  <Video className="w-4 h-4" />
                </a>
              )}

              <a
                href={`mailto:${DEVELOPER_DATA.contact.email}`}
                className="p-2.5 rounded-full bg-white border border-[#E5E2DC] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ===== 8. FOOTER BAR ===== */}
      <footer className="py-8 border-t border-[#E5E2DC] bg-white text-xs text-[#706C64]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © 2026 {DEVELOPER_DATA.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-2">
            <span>Built with passion, code, and lots of coffee.</span>
            <Coffee className="w-4 h-4 text-[#8C6D46]" />
          </div>
        </div>
      </footer>

    </div>
  );
};
