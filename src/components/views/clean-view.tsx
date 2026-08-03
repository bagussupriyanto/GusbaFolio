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
    tags: ["Next.js 16", "Supabase BaaS", "PostgreSQL", "Prisma ORM", "Tailwind CSS"]
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

// Individual Notion-Style Tech Instrument Cards (1 per tool)
const INDIVIDUAL_INSTRUMENTS = [
  { name: "Next.js 16", category: "Framework", icon: "⚡", role: "App Router, SSR & Server Actions" },
  { name: "TypeScript", category: "Language", icon: "📘", role: "Strict Type Safety & Interfaces" },
  { name: "Tailwind CSS", category: "Styling", icon: "🎨", role: "Utility Design System" },
  { name: "Supabase", category: "Database", icon: "🟩", role: "BaaS, Auth & Realtime RLS" },
  { name: "PostgreSQL", category: "Database", icon: "🐘", role: "Relational Database Engine" },
  { name: "Prisma ORM", category: "Database", icon: "💎", role: "Type-Safe Client & Migrations" },
  { name: "OpenAI API", category: "AI Intelligence", icon: "🤖", role: "GPT-4o & Function Calling" },
  { name: "Google Gemini", category: "AI Intelligence", icon: "✨", role: "Multimodal AI & Veo Video Lab" },
  { name: "Anthropic Claude", category: "AI Intelligence", icon: "🧠", role: "Reasoning & Content Automation" },
  { name: "Cursor IDE", category: "Developer Tool", icon: "💻", role: "AI-Augmented Software Studio" },
  { name: "GitHub & CI/CD", category: "DevOps", icon: "🐙", role: "Version Control & Automations" },
  { name: "Vercel", category: "DevOps", icon: "▲", role: "Global Edge Network Deployment" }
];

export const CleanView: React.FC<CleanViewProps> = ({ onSelectProject, onSwitchToGameMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full bg-[#FAF9F6] text-[#161616] min-h-screen font-sans antialiased selection:bg-[#E8DFCE] selection:text-[#161616]">
      
      {/* ===== 1. HEADER NAVBAR (NOTION / LINEAR AESTHETIC) ===== */}
      <header className="sticky top-0 inset-x-0 z-40 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#E6E4DD]">
        <div className="max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between">
          
          {/* Logo & Availability Status */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-[#161616] text-white flex items-center justify-center text-xs font-mono font-bold tracking-wider group-hover:bg-[#B89355] transition-colors">
                BS
              </div>
              <span className="font-serif-editorial font-bold text-lg text-[#161616] group-hover:text-[#B89355] transition-colors">
                Bagus Supriyanto
              </span>
            </a>

            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F0EEE6] border border-[#E6E4DD] text-[10px] font-mono font-semibold text-[#55524C]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>AVAILABLE FOR ROLES</span>
            </div>
          </div>

          {/* Notion-Style Floating Pill Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#F0EEE6]/80 p-1 rounded-full border border-[#E6E4DD]">
            <a href="#about" className="px-3.5 py-1 rounded-full text-xs font-medium text-[#55524C] hover:text-[#161616] hover:bg-white hover:shadow-xs transition-all">About</a>
            <a href="#work" className="px-3.5 py-1 rounded-full text-xs font-medium text-[#55524C] hover:text-[#161616] hover:bg-white hover:shadow-xs transition-all">Selected Work</a>
            <a href="#experience" className="px-3.5 py-1 rounded-full text-xs font-medium text-[#55524C] hover:text-[#161616] hover:bg-white hover:shadow-xs transition-all">Experience</a>
            <a href="#instruments" className="px-3.5 py-1 rounded-full text-xs font-medium text-[#55524C] hover:text-[#161616] hover:bg-white hover:shadow-xs transition-all">Instruments</a>
            <a href="#contact" className="px-3.5 py-1 rounded-full text-xs font-medium text-[#55524C] hover:text-[#161616] hover:bg-white hover:shadow-xs transition-all">Contact</a>
          </nav>

          {/* Right Action Items */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={onSwitchToGameMode}
              className="px-3.5 py-1.5 rounded-full bg-[#F0EEE6] border border-[#E6E4DD] text-[#55524C] text-[11px] font-mono font-semibold flex items-center gap-1.5 hover:bg-[#E5E2D8] hover:text-[#161616] transition-all cursor-pointer"
              title="Switch to 16-Bit RPG World"
            >
              <Gamepad2 className="w-3.5 h-3.5 text-[#B89355]" />
              <span className="hidden sm:inline">16-Bit RPG</span>
            </button>

            <a
              href="/assets/cv-bagus-supriyanto.pdf.pdf"
              download
              className="px-4 py-2 rounded-full bg-[#161616] text-[#FAF9F6] text-xs font-mono font-semibold flex items-center gap-1.5 hover:bg-[#33312D] transition-all cursor-pointer shadow-xs"
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
          <div className="md:hidden bg-[#FAF9F6] border-b border-[#E6E4DD] px-6 py-6 space-y-3 text-xs font-mono font-bold tracking-widest text-[#161616] uppercase">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-1">About Me</a>
            <a href="#work" onClick={() => setMobileMenuOpen(false)} className="block py-1">Selected Work</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="block py-1">Career Experience</a>
            <a href="#instruments" onClick={() => setMobileMenuOpen(false)} className="block py-1">Instruments</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-1">Contact</a>
          </div>
        )}
      </header>

      {/* ===== 2. HERO SECTION ===== */}
      <section className="pt-10 pb-16 sm:pt-14 sm:pb-20 px-6 max-w-6xl mx-auto">
        
        {/* Workstation Frame Container */}
        <div className="rounded-3xl border border-[#E6E4DD] bg-[#161616] text-white overflow-hidden shadow-2xl relative">
          
          {/* Top Bar */}
          <div className="flex items-center justify-between px-5 py-3 bg-[#222222] border-b border-[#333333] text-xs font-mono text-[#AAAAAA] relative z-10">
            <div className="flex items-center gap-2.5">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>
              <span className="ml-2 font-medium text-white">bagus-workspace / studio-hero</span>
            </div>
            <div className="hidden sm:flex items-center gap-4 text-[11px]">
              <span>BINTAN, INDONESIA</span>
              <span>•</span>
              <a href="/assets/cv-bagus-supriyanto.pdf.pdf" download className="hover:text-white transition-colors">PDF RESUME ↓</a>
            </div>
          </div>

          {/* Background Workstation Image with Dark Overlay */}
          <div className="relative p-6 sm:p-12 lg:p-14 min-h-[500px] flex flex-col justify-between">
            <img
              src="/assets/developer-workstation.jpg"
              alt="Developer Workstation Studio Background"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#161616] via-[#161616]/90 to-[#161616]/40" />

            {/* Content Layer Inside Window */}
            <div className="relative z-10 space-y-6 max-w-3xl">
              
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2B2B2B]/80 backdrop-blur-md border border-[#444444] text-[11px] font-mono tracking-widest text-[#DDDDDD] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>AI PRODUCT ENGINEER • S1 IT GRADUATE</span>
              </div>

              <h1 className="font-serif-editorial text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
                Building digital products <br />
                <span className="italic font-normal text-[#C5A059]">that solve real problems.</span>
              </h1>

              <p className="text-xs sm:text-base text-[#DDDDDD] font-normal leading-relaxed max-w-xl">
                I engineer modern full-stack web applications and AI-powered platforms that simplify complex business operations, boost conversions, and deliver measurable ROI.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#work"
                  className="px-6 py-3 rounded-full bg-white text-[#161616] text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#EAE8E1] transition-all cursor-pointer flex items-center gap-2 shadow-lg hover:scale-105"
                >
                  <span>EXPLORE SELECTED WORK</span>
                  <ArrowRight className="w-4 h-4 text-[#161616]" />
                </a>

                <a
                  href="#about"
                  className="px-6 py-3 rounded-full bg-black/40 border border-white/20 text-white text-xs font-mono font-semibold uppercase tracking-wider hover:bg-black/60 transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>ABOUT ME</span>
                  <ArrowRight className="w-4 h-4 text-[#CCCCCC]" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ===== 3. ABOUT ME SECTION ===== */}
      <section
        id="about"
        className="py-20 px-6 max-w-6xl mx-auto border-t border-[#E6E4DD]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Portrait Photo Left (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl overflow-hidden border border-[#E6E4DD] bg-white p-3.5 shadow-xl group hover:shadow-2xl transition-all duration-500">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#161616]">
                <img
                  src="/assets/profile-photo.jpg"
                  alt="Bagus Supriyanto Portrait"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="text-center font-signature text-3xl text-[#161616] font-bold">
              Bagus Supriyanto
            </div>
          </div>

          {/* Narrative Bio Right (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#85827A] uppercase">
              ABOUT THE BUILDER
            </div>

            <h2 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#161616] leading-tight">
              Combining Industrial Precision with Modern Full-Stack Software Engineering.
            </h2>

            <div className="space-y-4 text-xs sm:text-base text-[#55524C] leading-relaxed font-normal">
              <p>
                Saya adalah lulusan Sarjana Komputer dari <strong className="text-[#161616]">Universitas Teknologi Yogyakarta (S1 Teknologi Informasi, 2024)</strong>. Latar belakang saya menggabungkan disiplin kerja industri manufaktur presisi (<strong className="text-[#161616]">PT Pertama Precision Indonesia</strong>) dengan kecepatan rekayasa perangkat lunak modern.
              </p>
              <p>
                Saya tidak memandang AI sebagai pengganti rekayasa perangkat lunak, melainkan sebagai <strong className="text-[#161616]">katalisator produktivitas</strong> yang memungkinkan ide dikembangkan menjadi aplikasi SaaS skala produksi dalam waktu yang jauh lebih cepat, tanpa mengorbankan kualitas arsitektur data.
              </p>
            </div>

            {/* 3 Academic & Certification Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E6E4DD]">
              <div className="space-y-1">
                <div className="text-[10px] font-mono text-[#85827A] uppercase tracking-wider">ACADEMIC DEGREE</div>
                <div className="text-xs font-bold text-[#161616]">S1 IT UTY (2024)</div>
                <div className="text-[11px] text-[#66645E]">Sarjana Komputer</div>
              </div>
              <div className="space-y-1">
                <div className="text-[10px] font-mono text-[#85827A] uppercase tracking-wider">CERTIFICATION</div>
                <div className="text-xs font-bold text-[#161616]">Microsoft Certified</div>
                <div className="text-[11px] text-[#66645E]">Certiport Specialist</div>
              </div>
              <div className="space-y-1">
                <div className="text-[10px] font-mono text-[#85827A] uppercase tracking-wider">AI RESEARCH LAB</div>
                <div className="text-xs font-bold text-[#161616]">TikTok AI Content Lab</div>
                <div className="text-[11px] text-[#66645E]">Generative Video Lab</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ===== 4. SELECTED WORK ===== */}
      <section
        id="work"
        className="py-20 px-6 max-w-6xl mx-auto border-t border-[#E6E4DD]"
      >
        <div className="space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#E6E4DD] pb-6 gap-4">
            <div className="space-y-2">
              <div className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#85827A] uppercase">
                SELECTED WORK
              </div>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#161616]">
                Case Studies & Delivered Products
              </h2>
            </div>
            <p className="text-xs font-mono text-[#85827A] uppercase tracking-wider">
              Click any project card to view full drawer breakdown
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SELECTED_PROJECTS.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectProject(item.project)}
                className="group bg-white border border-[#E6E4DD] hover:border-[#161616] rounded-2xl overflow-hidden transition-all duration-300 p-5 cursor-pointer shadow-xs hover:shadow-xl hover:-translate-y-1.5 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#F0EEE6] border border-[#E6E4DD]">
                    <img
                      src={item.mockup}
                      alt={item.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-[#161616] text-white font-mono text-[9px] font-bold">
                      {item.impact}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-[10px] font-mono text-[#85827A]">
                      {item.category} • {item.year}
                    </div>
                    <h3 className="font-serif-editorial text-lg font-bold text-[#161616] group-hover:text-[#B89355] transition-colors flex items-center justify-between">
                      <span>{item.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-[#85827A] group-hover:text-[#B89355]" />
                    </h3>
                  </div>

                  <p className="text-xs text-[#66645E] leading-relaxed line-clamp-3">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E6E4DD] flex items-center justify-between text-xs font-mono font-bold text-[#161616]">
                  <div className="flex flex-wrap gap-1">
                    {item.tags.slice(0, 2).map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-[#F0EEE6] text-[#55524C] text-[10px]">
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    VIEW <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===== 5. CAREER EXPERIENCE ===== */}
      <section
        id="experience"
        className="py-20 px-6 max-w-6xl mx-auto border-t border-[#E6E4DD]"
      >
        <div className="space-y-10">
          
          <div className="space-y-2 border-b border-[#E6E4DD] pb-6">
            <div className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#85827A] uppercase">
              CAREER TIMELINE
            </div>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#161616]">
              Professional Experience & History
            </h2>
          </div>

          <div className="space-y-4">
            {CV_WORK_EXPERIENCES.map((exp) => (
              <div
                key={exp.step}
                className="p-6 rounded-2xl bg-white border border-[#E6E4DD] shadow-xs space-y-4 hover:border-[#161616] hover:shadow-md transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E6E4DD] pb-3">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#F0EEE6] border border-[#E6E4DD] text-[10px] font-mono font-bold text-[#161616]">
                      FASE 0{exp.step}
                    </span>
                    <h3 className="text-base font-bold text-[#161616]">{exp.company}</h3>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-[#66645E]">
                    <span className="font-semibold text-[#161616]">{exp.role}</span>
                    <span>•</span>
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-2 text-xs text-[#55524C] leading-relaxed">
                  {exp.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-[#B89355] font-bold shrink-0 mt-0.5">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===== 6. TECHNICAL INSTRUMENTS INDIVIDUAL GRID (1 PER TOOL) ===== */}
      <section
        id="instruments"
        className="py-20 px-6 max-w-6xl mx-auto border-t border-[#E6E4DD]"
      >
        <div className="space-y-10">
          
          <div className="space-y-2 border-b border-[#E6E4DD] pb-6">
            <div className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#85827A] uppercase">
              TECHNICAL INSTRUMENTS
            </div>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#161616]">
              Curated Stack & Software Tools
            </h2>
          </div>

          {/* Individual Tools Grid (1 Tool per Card - Notion Aesthetic) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {INDIVIDUAL_INSTRUMENTS.map((tool) => (
              <div
                key={tool.name}
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-[#E6E4DD] hover:border-[#161616] hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F0EEE6] border border-[#E6E4DD] flex items-center justify-center text-lg shrink-0 group-hover:bg-[#161616] group-hover:text-white transition-colors">
                  {tool.icon}
                </div>

                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xs font-bold text-[#161616] group-hover:text-[#B89355] transition-colors">
                      {tool.name}
                    </h3>
                    <span className="px-1.5 py-0.2 rounded bg-[#F0EEE6] text-[#66645E] text-[9px] font-mono">
                      {tool.category}
                    </span>
                  </div>
                  <p className="text-[11px] font-mono text-[#66645E] leading-tight">
                    {tool.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===== 7. CONTACT SECTION ===== */}
      <section
        id="contact"
        className="py-20 px-6 max-w-6xl mx-auto border-t border-[#E6E4DD]"
      >
        <div className="p-8 sm:p-12 rounded-3xl bg-[#161616] text-[#FAF9F6] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2A2A2A] text-xs font-mono text-[#C5A059] uppercase">
              <span>GET IN TOUCH</span>
            </div>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl font-bold text-white">
              Let's build something exceptional.
            </h2>
            <p className="text-xs sm:text-sm text-[#AAAAAA] max-w-md">
              Available for Full-time Software Engineering roles, AI Product Consulting, and Remote Contracts.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href={`mailto:${DEVELOPER_DATA.contact.email}`}
              className="px-6 py-3.5 rounded-full bg-[#FAF9F6] text-[#161616] text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#EAE8E1] transition-all cursor-pointer block text-center shadow-md hover:scale-105"
            >
              SEND AN EMAIL →
            </a>
            <a
              href={DEVELOPER_DATA.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-[#262626] border border-[#3A3A3A] text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#333333] transition-all cursor-pointer block text-center"
            >
              WHATSAPP
            </a>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 max-w-6xl mx-auto border-t border-[#E6E4DD] text-xs font-mono text-[#85827A] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          © 2026 Bagus Supriyanto. Designed with precision & craftsmanship.
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/bagussupriyanto" target="_blank" rel="noopener noreferrer" className="hover:text-[#161616]">GitHub</a>
          <a href="https://linkedin.com/in/bagussupriyanto" target="_blank" rel="noopener noreferrer" className="hover:text-[#161616]">LinkedIn</a>
        </div>
      </footer>

    </div>
  );
};
