"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
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
  UserCheck,
  FileText,
  Folder,
  Database,
  Sparkles,
  ChevronRight,
  Search,
  Sliders,
  Code2,
  Laptop,
  CheckSquare,
  Award,
  Briefcase,
  GraduationCap
} from 'lucide-react';
import { DEVELOPER_DATA, FEATURED_PROJECTS, CV_WORK_EXPERIENCES } from '@/lib/constants';
import { Project } from '@/types';

interface CleanViewProps {
  onSelectProject: (project: Project) => void;
  onSwitchToGameMode: () => void;
}

// Complete Projects formatted as Notion Database Entries
const NOTION_PROJECTS = [
  {
    project: FEATURED_PROJECTS[0], // SmartCafe
    id: "proj-1",
    title: "SmartCafe POS & Kitchen Dispatch SaaS",
    icon: "☕",
    category: "SaaS Platform",
    status: "Production Live",
    year: "2026",
    impact: "⚡ 45% Faster Dispatch",
    summary: "All-in-one cafe management platform for real-time POS checkout, kitchen display dispatch, inventory tracking, and multi-branch revenue analytics.",
    problem: "Manual pen-and-paper cafe ordering caused long checkout queues, kitchen order miscommunication, and a 15% revenue leak from untracked inventory.",
    solution: "Architected a real-time web POS & kitchen dispatch system with instant Supabase state synchronization and Row Level Security (RLS).",
    mockup: "/assets/developer-workstation.jpg",
    tags: ["Next.js 16", "Supabase BaaS", "PostgreSQL", "Prisma ORM", "Tailwind CSS"]
  },
  {
    project: FEATURED_PROJECTS[1], // PT SMS
    id: "proj-2",
    title: "PT Surya Mitra Service Industrial Portal",
    icon: "🏭",
    category: "Enterprise Web",
    status: "Production Live",
    year: "2025",
    impact: "📈 +65% B2B Inquiries",
    summary: "High-performance enterprise portal and product catalog for an industrial equipment, marine logistics & supply partner in Bintan.",
    problem: "An outdated online presence failed to communicate technical capability to international corporate procurement managers in Bintan.",
    solution: "Engineered an editorial web platform featuring crisp industrial showcases, product catalogs, and automated inquiry routing.",
    mockup: "/assets/projects/ptsms-mockup.png",
    tags: ["Next.js", "Prisma ORM", "PostgreSQL", "Tailwind CSS"]
  },
  {
    project: FEATURED_PROJECTS[2], // Invoice Application
    id: "proj-3",
    title: "Automated Billing & PDF Invoicing System",
    icon: "📄",
    category: "Automation System",
    status: "Production Live",
    year: "2024",
    impact: "⏱️ 8+ Hours Saved/Wk",
    summary: "Streamlined billing software featuring instant client management, itemized tax calculations, instant PDF export, and payment tracking.",
    problem: "Small business owners lost 10+ hours weekly manually formatting billing spreadsheets and tracking overdue payments.",
    solution: "Built a streamlined billing engine with automated client tracking, instant PDF rendering, and overdue payment alerts.",
    mockup: "/assets/projects/invoice-mockup.png",
    tags: ["Next.js", "PostgreSQL", "Prisma ORM", "PDF Kit"]
  },
  {
    project: FEATURED_PROJECTS[3], // AI Automation Lab
    id: "proj-4",
    title: "Generative AI Video & Content Automation Lab",
    icon: "🎬",
    category: "AI Automation",
    status: "Active Research",
    year: "2025",
    impact: "🤖 10x Content Production",
    summary: "Automated video script generation and AI video processing pipeline for TikTok & social content channels.",
    problem: "Manual video scriptwriting and video editing required 5+ hours per short video asset.",
    solution: "Integrated Google Gemini Veo & OpenAI API with automated prompt orchestration and video rendering scripts.",
    mockup: "/assets/profile-photo.jpg",
    tags: ["OpenAI API", "Google Gemini", "Python", "Automation"]
  }
];

// Notion Curated Instruments Matrix
const NOTION_INSTRUMENTS = [
  {
    category: "Core Engineering",
    icon: "⚡",
    items: [
      { name: "Next.js 16", role: "App Router, SSR & Server Actions" },
      { name: "TypeScript", role: "Strict Static Type Safety" },
      { name: "Tailwind CSS", role: "Utility Design System" }
    ]
  },
  {
    category: "Data & Infrastructure",
    icon: "🐘",
    items: [
      { name: "Supabase", role: "BaaS, Auth & Realtime RLS" },
      { name: "PostgreSQL", role: "Relational Database Engine" },
      { name: "Prisma ORM", role: "Type-Safe Client & Migration" }
    ]
  },
  {
    category: "Artificial Intelligence",
    icon: "🧠",
    items: [
      { name: "OpenAI API", role: "GPT-4o & Function Calling" },
      { name: "Google Gemini", role: "Multimodal AI & Veo Video Lab" },
      { name: "Anthropic Claude", role: "Reasoning & Content Automation" }
    ]
  },
  {
    category: "DevOps & Prototyping",
    icon: "▲",
    items: [
      { name: "Cursor IDE", role: "AI-Augmented Software Dev" },
      { name: "GitHub & CI/CD", role: "Version Control & Automations" },
      { name: "Vercel", role: "Global Edge Network & Deployment" }
    ]
  }
];

export const CleanView: React.FC<CleanViewProps> = ({ onSelectProject, onSwitchToGameMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProjects = selectedCategory === "All"
    ? NOTION_PROJECTS
    : NOTION_PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <div className="w-full bg-[#FFFFFF] text-[#050505] min-h-screen font-sans antialiased selection:bg-[#EAE8E1] selection:text-[#050505]">
      
      {/* ===== 1. NOTION BRAND HEADER NAVBAR ===== */}
      <header className="sticky top-0 inset-x-0 z-50 bg-[#FFFFFF]/90 backdrop-blur-md border-b border-[#E6E6E4]">
        <div className="max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between">
          
          {/* Logo Notion Style: Icon + Name */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded-lg bg-[#050505] text-white flex items-center justify-center text-xs font-mono font-bold">
              N
            </div>
            <span className="font-bold text-base tracking-tight text-[#050505] group-hover:text-[#555555] transition-colors">
              Bagus Supriyanto <span className="font-normal text-xs text-[#777777] ml-1">/ AI Product Engineer</span>
            </span>
          </a>

          {/* Navigation Links Notion Style */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-[#444444]">
            <a href="#work" className="hover:text-[#050505] transition-colors flex items-center gap-1.5">
              <span>📁</span> Projects
            </a>
            <a href="#experience" className="hover:text-[#050505] transition-colors flex items-center gap-1.5">
              <span>💼</span> Experience
            </a>
            <a href="#thinking" className="hover:text-[#050505] transition-colors flex items-center gap-1.5">
              <span>💡</span> Approach
            </a>
            <a href="#instruments" className="hover:text-[#050505] transition-colors flex items-center gap-1.5">
              <span>🛠️</span> Instruments
            </a>
            <a href="#contact" className="hover:text-[#050505] transition-colors flex items-center gap-1.5">
              <span>✉️</span> Contact
            </a>
          </nav>

          {/* Right Controls: Pill Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={onSwitchToGameMode}
              className="px-3 py-1.5 rounded-lg bg-[#F7F6F3] border border-[#E6E6E4] text-[#444444] text-xs font-medium flex items-center gap-1.5 hover:bg-[#EAE8E1] hover:text-[#050505] transition-all cursor-pointer"
              title="Switch to 16-Bit RPG Game World"
            >
              <Gamepad2 className="w-3.5 h-3.5 text-[#B89355]" />
              <span className="hidden sm:inline">16-Bit RPG</span>
            </button>

            <a
              href="/assets/cv-bagus-supriyanto.pdf.pdf"
              download
              className="px-3.5 py-1.5 rounded-lg bg-[#050505] text-white text-xs font-medium flex items-center gap-1.5 hover:bg-[#222222] transition-all cursor-pointer shadow-2xs"
            >
              <span>Get Resume</span>
              <Download className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Nav Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-[#F7F6F3] text-[#050505] hover:bg-[#E6E6E4]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FFFFFF] border-b border-[#E6E6E4] px-6 py-5 space-y-3 text-xs font-medium text-[#050505]">
            <a href="#work" onClick={() => setMobileMenuOpen(false)} className="block py-1">📁 Projects Database</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="block py-1">💼 Career Experience</a>
            <a href="#thinking" onClick={() => setMobileMenuOpen(false)} className="block py-1">💡 Engineering Approach</a>
            <a href="#instruments" onClick={() => setMobileMenuOpen(false)} className="block py-1">🛠️ Technical Stack</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-1">✉️ Contact Page</a>
          </div>
        )}
      </header>

      {/* ===== 2. NOTION HERO SECTION ===== */}
      <section className="pt-12 pb-16 sm:pt-16 sm:pb-24 px-6 max-w-6xl mx-auto space-y-8">
        
        {/* Notion Page Cover / Breadcrumb Header */}
        <div className="space-y-4">
          
          {/* Page Icon & Category Badge */}
          <div className="flex items-center gap-3">
            <span className="text-4xl sm:text-5xl">⚡</span>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F6F3] border border-[#E6E6E4] text-xs font-mono text-[#555555]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>bagus-supriyanto / ai-product-engineer</span>
            </div>
          </div>

          {/* Notion Page Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#050505] leading-[1.1]">
            Building software products <br />
            that solve real business problems.
          </h1>

        </div>

        {/* Notion Callout Box (Signature Notion UI Element) */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#F7F6F3] border border-[#E6E6E4] shadow-2xs space-y-4 max-w-3xl">
          <div className="flex items-start gap-3">
            <span className="text-xl shrink-0 mt-0.5">💡</span>
            <div className="space-y-2 text-xs sm:text-sm text-[#333333] leading-relaxed">
              <p className="font-semibold text-[#050505]">
                AI Product Engineer • S1 IT Graduate UTY (2024)
              </p>
              <p>
                Saya membangun aplikasi web skala produksi dan sistem AI yang menyederhanakan operasional bisnis, meningkatkan konversi, dan memberikan dampak ROI terukur. AI adalah salah satu alat rekayasa saya untuk membangun perangkat lunak lebih cepat, bersih, dan andal.
              </p>
            </div>
          </div>

          {/* Quick Academic & Certification Chips */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#E6E6E4] text-xs text-[#555555]">
            <span className="px-2.5 py-1 rounded-md bg-white border border-[#E6E6E4] font-medium flex items-center gap-1.5">
              🎓 S1 Teknologi Informasi UTY (2024)
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white border border-[#E6E6E4] font-medium flex items-center gap-1.5">
              🏆 Microsoft Certified Specialist
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white border border-[#E6E6E4] font-medium flex items-center gap-1.5">
              🎬 TikTok AI Content Lab
            </span>
          </div>
        </div>

        {/* Notion Workspace Desktop Showcase Frame */}
        <div className="rounded-2xl border border-[#E6E6E4] bg-white p-3 shadow-xl space-y-2">
          {/* Notion Window Top Bar */}
          <div className="flex items-center justify-between px-3 py-1.5 bg-[#F7F6F3] rounded-xl border border-[#E6E6E4] text-[11px] font-mono text-[#666666]">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
              </div>
              <span className="ml-2 font-medium text-[#050505]">bagus-workspace / studio-workstation</span>
            </div>
            <div className="hidden sm:flex items-center gap-3">
              <span>Share</span>
              <span>•</span>
              <span>Export PDF</span>
            </div>
          </div>

          {/* Large Real Photography inside Notion Frame */}
          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#111111]">
            <img
              src="/assets/developer-workstation.jpg"
              alt="Developer Workstation Photography"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </section>

      {/* ===== 3. NOTION DATABASE SECTION: SELECTED WORK ===== */}
      <section id="work" className="py-16 px-6 max-w-6xl mx-auto space-y-8 border-t border-[#E6E6E4]">
        
        {/* Notion Database Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E6E6E4] pb-4">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">📁</span>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050505]">
                Projects Database
              </h2>
              <p className="text-xs text-[#666666]">
                Case studies demonstrating business challenge, solution, and measurable ROI.
              </p>
            </div>
          </div>

          {/* Notion Filter Bar */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0">
            {["All", "SaaS Platform", "Enterprise Web", "Automation System", "AI Automation"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-medium cursor-pointer transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#050505] text-white shadow-2xs'
                    : 'bg-[#F7F6F3] text-[#555555] hover:bg-[#EAE8E1] hover:text-[#050505]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Notion Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectProject(item.project)}
              className="group bg-white border border-[#E6E6E4] hover:border-[#A0A0A0] hover:shadow-md rounded-2xl overflow-hidden transition-all duration-300 p-5 cursor-pointer space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Mockup Header */}
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#F7F6F3] border border-[#E6E6E4]">
                  <img
                    src={item.mockup}
                    alt={item.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-md bg-[#050505]/90 text-white font-mono text-[10px] font-semibold">
                    {item.impact}
                  </div>
                </div>

                {/* Card Title & Icon */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#777777]">
                    <span>{item.icon}</span>
                    <span>{item.category}</span>
                    <span>•</span>
                    <span>{item.year}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#050505] group-hover:text-[#0055FF] transition-colors flex items-center justify-between">
                    <span>{item.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#777777] group-hover:text-[#0055FF]" />
                  </h3>
                </div>

                {/* Summary */}
                <p className="text-xs text-[#555555] leading-relaxed line-clamp-3">
                  {item.summary}
                </p>
              </div>

              {/* Tech Stack Pills & Action */}
              <div className="pt-3 border-t border-[#E6E6E4] space-y-2.5">
                <div className="flex flex-wrap gap-1">
                  {item.tags.slice(0, 3).map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-[#F7F6F3] border border-[#E6E6E4] text-[#444444] text-[10px] font-mono">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="text-xs font-semibold text-[#050505] flex items-center justify-between group-hover:translate-x-1 transition-transform">
                  <span>Open Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#555555]" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* ===== 4. WORK EXPERIENCE / CAREER DATABASE ===== */}
      <section id="experience" className="py-16 px-6 max-w-6xl mx-auto space-y-8 border-t border-[#E6E6E4]">
        
        <div className="flex items-center gap-2.5 border-b border-[#E6E6E4] pb-4">
          <span className="text-2xl">💼</span>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050505]">
              Career & Experience Database
            </h2>
            <p className="text-xs text-[#666666]">
              Milestones, technical roles, precision background, and products delivered.
            </p>
          </div>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-4">
          {CV_WORK_EXPERIENCES.map((exp) => (
            <div
              key={exp.step}
              className="p-6 rounded-2xl bg-white border border-[#E6E6E4] shadow-2xs space-y-4 hover:border-[#A0A0A0] transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E6E6E4] pb-3">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-0.5 rounded bg-[#F7F6F3] border border-[#E6E6E4] text-xs font-mono font-bold text-[#050505]">
                    FASE 0{exp.step}
                  </span>
                  <h3 className="text-base font-bold text-[#050505]">{exp.company}</h3>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-[#666666]">
                  <span className="font-semibold text-[#050505]">{exp.role}</span>
                  <span>•</span>
                  <span>{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-2 text-xs text-[#444444] leading-relaxed">
                {exp.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#B89355] font-bold shrink-0 mt-0.5">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </section>

      {/* ===== 5. NOTION CALLOUT PAGE BLOCK: ENGINEERING APPROACH ===== */}
      <section id="thinking" className="py-16 px-6 max-w-6xl mx-auto space-y-6 border-t border-[#E6E6E4]">
        
        <div className="flex items-center gap-2.5 border-b border-[#E6E6E4] pb-4">
          <span className="text-2xl">💡</span>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050505]">
              Engineering Approach
            </h2>
            <p className="text-xs text-[#666666]">
              Core product philosophy & how I solve complex software problems.
            </p>
          </div>
        </div>

        {/* 3 Notion Callout Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-[#F7F6F3] border border-[#E6E6E4] space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-[#050505]">
              <span>🎯</span> Product-First Focus
            </div>
            <p className="text-xs text-[#555555] leading-relaxed">
              Perangkat lunak harus menghilangkan hambatan operasional bisnis. Saya mendiagnosis masalah bisnis sebelum menulis kode untuk memastikan setiap fitur memberikan ROI terukur.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#F7F6F3] border border-[#E6E6E4] space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-[#050505]">
              <span>🛡️</span> Precision & Reliability
            </div>
            <p className="text-xs text-[#555555] leading-relaxed">
              Latar belakang manufaktur presisi menanamkan kedisiplinan ketat untuk keandalan data, tipe data TypeScript, keamanan Supabase Row Level Security (RLS), dan pencegahan error.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#F7F6F3] border border-[#E6E6E4] space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-[#050505]">
              <span>⚡</span> AI Velocity Multiplier
            </div>
            <p className="text-xs text-[#555555] leading-relaxed">
              Saya memanfaatkan AI LLM, otomasi script, dan alat modern sebagai pengganda produktivitas untuk merilis aplikasi web skala produksi dalam siklus yang jauh lebih cepat.
            </p>
          </div>
        </div>

      </section>

      {/* ===== 6. NOTION INSTRUMENTS MATRIX ===== */}
      <section id="instruments" className="py-16 px-6 max-w-6xl mx-auto space-y-6 border-t border-[#E6E6E4]">
        
        <div className="flex items-center gap-2.5 border-b border-[#E6E6E4] pb-4">
          <span className="text-2xl">🛠️</span>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050505]">
              Technical Stack & Instruments
            </h2>
            <p className="text-xs text-[#666666]">
              Handpicked tools and infrastructure selected for reliability and rapid deployment.
            </p>
          </div>
        </div>

        {/* 4 Category Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {NOTION_INSTRUMENTS.map((group) => (
            <div key={group.category} className="p-5 rounded-2xl bg-white border border-[#E6E6E4] space-y-4 shadow-2xs">
              <div className="flex items-center gap-2 border-b border-[#E6E6E4] pb-2.5">
                <span className="text-lg">{group.icon}</span>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#050505]">{group.category}</h3>
              </div>

              <div className="space-y-3">
                {group.items.map((item) => (
                  <div key={item.name} className="space-y-0.5">
                    <div className="text-xs font-bold text-[#050505]">{item.name}</div>
                    <div className="text-[11px] font-mono text-[#666666]">{item.role}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ===== 7. NOTION CONTACT PAGE & FOOTER ===== */}
      <section id="contact" className="py-16 px-6 max-w-6xl mx-auto space-y-8 border-t border-[#E6E6E4]">
        
        <div className="p-6 sm:p-8 rounded-2xl bg-[#050505] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#222222] text-xs font-mono text-[#CCCCCC]">
              <span>✉️</span> Get in Touch
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Let's discuss your next software product.
            </h2>
            <p className="text-xs text-[#AAAAAA] max-w-md">
              Available for Full-time AI Product Engineer roles, Startup Contracts, and Technical Consulting.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href={`mailto:${DEVELOPER_DATA.contact.email}`}
              className="px-5 py-2.5 rounded-lg bg-white text-[#050505] text-xs font-semibold hover:bg-[#EAE8E1] transition-all cursor-pointer block text-center"
            >
              Send Email →
            </a>
            <a
              href={DEVELOPER_DATA.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-[#222222] border border-[#333333] text-white text-xs font-semibold hover:bg-[#333333] transition-all cursor-pointer block text-center"
            >
              WhatsApp
            </a>
          </div>
        </div>

      </section>

      {/* ===== 8. NOTION FOOTER BAR ===== */}
      <footer className="py-8 px-6 max-w-6xl mx-auto border-t border-[#E6E6E4] text-xs font-mono text-[#777777] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-[#050505] text-white flex items-center justify-center text-[10px] font-bold">
            N
          </div>
          <span>Bagus Supriyanto Workspace © 2026. Built with Notion UI Philosophy.</span>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/bagussupriyanto" target="_blank" rel="noopener noreferrer" className="hover:text-[#050505]">GitHub</a>
          <a href="https://linkedin.com/in/bagussupriyanto" target="_blank" rel="noopener noreferrer" className="hover:text-[#050505]">LinkedIn</a>
        </div>
      </footer>

    </div>
  );
};
