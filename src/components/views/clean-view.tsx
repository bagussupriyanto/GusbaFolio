"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase,
  GraduationCap,
  MapPin,
  Mail,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  MessageCircle,
  Video,
  CheckCircle2,
  Code,
  Laptop,
  Award,
  Sparkles,
  Puzzle,
  Wrench,
  TrendingUp,
  Lock,
  Gamepad2,
  Layers,
  Terminal,
  ShieldCheck,
  Workflow,
  Boxes,
  Cpu,
  Film,
  ArrowUpRight,
  ChevronRight
} from 'lucide-react';
import { DEVELOPER_DATA, FEATURED_PROJECTS, CV_WORK_EXPERIENCES } from '@/lib/constants';
import { Project } from '@/types';
import { MacOSFrame } from '@/components/ui/macos-frame';

interface CleanViewProps {
  onSelectProject: (project: Project) => void;
  onSwitchToGameMode: () => void;
}

// Simple Icon renderer helper
const SimpleIcon = ({ name }: { name: string }) => {
  const map: Record<string, string> = {
    'nextdotjs': 'Next.js',
    'typescript': 'TypeScript',
    'react': 'React',
    'tailwindcss': 'Tailwind CSS',
    'supabase': 'Supabase',
    'postgresql': 'PostgreSQL',
    'prisma': 'Prisma',
    'nodedotjs': 'Node.js',
    'git': 'Git',
    'github': 'GitHub',
    'vercel': 'Vercel',
    'python': 'Python',
  };
  return <span>{map[name.toLowerCase()] || name}</span>;
};

const TECH_CATEGORIES = [
  {
    title: "FRONTEND ENGINEERING",
    color: "from-teal-500/20 to-emerald-500/10 border-teal-500/40 text-teal-400",
    skills: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "HTML5/CSS3", "Framer Motion", "Turbopack"]
  },
  {
    title: "BACKEND & DATABASE",
    color: "from-blue-500/20 to-indigo-500/10 border-blue-500/40 text-blue-400",
    skills: ["Supabase (BaaS)", "PostgreSQL", "Prisma ORM", "Node.js", "RESTful APIs", "Row Level Security (RLS)"]
  },
  {
    title: "DEVOPS & TOOLING",
    color: "from-sky-500/20 to-cyan-500/10 border-sky-500/40 text-sky-400",
    skills: ["Git & GitHub", "Vercel Deployment", "VS Code", "Postman API", "Linux Bash", "CI/CD Pipeline"]
  },
  {
    title: "AI & CREATIVE EXPERIMENTATION",
    color: "from-purple-500/20 to-pink-500/10 border-purple-500/40 text-purple-400",
    skills: ["Google Veo (AI Video)", "Seedance AI", "Gemini AI API", "Cursor AI Editor", "DES Data Encryption", "TikTok Content Lab"]
  },
  {
    title: "INDUSTRIAL INSTRUMENTATION & SOP",
    color: "from-amber-500/20 to-orange-500/10 border-amber-500/40 text-amber-400",
    skills: ["Instrument Control (Plant)", "Pressure & Flow Calibration", "Wiring & P&ID Diagrams", "SOP & K3 Safety", "Precision Wiring", "Certiport Microsoft Specialist"]
  }
];

export const CleanView: React.FC<CleanViewProps> = ({ onSelectProject, onSwitchToGameMode }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DEVELOPER_DATA.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="w-full bg-[#0a0e17] text-[#F8FAFC] min-h-screen font-sans selection:bg-[#4ee6d8]/30 selection:text-[#4ee6d8] pb-20">
      
      {/* ===== HERO SECTION ===== */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 px-4 sm:px-8 max-w-6xl mx-auto overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#4ee6d8]/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col items-start gap-6">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0d1527] border border-[#4ee6d8]/40 shadow-[0_0_15px_rgba(78,230,216,0.15)] text-xs font-mono text-[#4ee6d8]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>AVAILABLE FOR FULLTIME & REMOTE ROLES</span>
          </div>

          {/* Name & Role Headline */}
          <div className="space-y-2 max-w-4xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display leading-[1.1]">
              Halo, Saya <span className="bg-gradient-to-r from-[#4ee6d8] via-[#6efff0] to-emerald-400 bg-clip-text text-transparent">{DEVELOPER_DATA.name}</span>
            </h1>
            <p className="text-lg sm:text-2xl font-medium text-slate-300 tracking-wide font-sans">
              {DEVELOPER_DATA.role}
            </p>
          </div>

          {/* Short Bio Summary */}
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
            Lulusan <span className="text-white font-semibold">S1 Technology Information UTY (2024)</span> yang berpengalaman membangun aplikasi web modern, sistem POS kasir, dan dashboard bisnis berskala produksi dengan performa tinggi. Berpengalaman di industri manufaktur & instrumen kontrol.
          </p>

          {/* CTAs & Game Mode Banner */}
          <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
            <a
              href="/assets/cv-bagus-supriyanto.pdf.pdf"
              download
              className="px-5 py-3 rounded-lg bg-[#4ee6d8] text-[#0a0e17] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-[#6efff0] transition-all shadow-[0_0_20px_rgba(78,230,216,0.3)] cursor-pointer"
            >
              <Download className="w-4 h-4" />
              DOWNLOAD CV (PDF)
            </a>

            <a
              href="#contact"
              className="px-5 py-3 rounded-lg bg-[#12182a] border border-[#4ee6d8]/40 text-[#4ee6d8] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:border-[#4ee6d8] hover:bg-[#182035] transition-all cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              HUBUNGI SAYA
            </a>

            <button
              onClick={onSwitchToGameMode}
              className="px-5 py-3 rounded-lg bg-gradient-to-r from-purple-600/30 to-indigo-600/30 border border-purple-400/50 text-purple-300 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:border-purple-300 hover:text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(168,85,247,0.2)]"
            >
              <Gamepad2 className="w-4 h-4 text-purple-400" />
              🎮 COBA 16-BIT RPG GAME MODE
            </button>
          </div>

          {/* Key Metrics / Fast Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-6 border-t border-slate-800/80 mt-4">
            <div className="p-3.5 rounded-lg bg-[#0d1322] border border-slate-800">
              <div className="text-xl sm:text-2xl font-bold text-[#4ee6d8] font-mono">S1 UTY</div>
              <div className="text-[11px] text-slate-400">Teknologi Informatika (2024)</div>
            </div>
            <div className="p-3.5 rounded-lg bg-[#0d1322] border border-slate-800">
              <div className="text-xl sm:text-2xl font-bold text-emerald-400 font-mono">3+ System</div>
              <div className="text-[11px] text-slate-400">Proyek Web Production</div>
            </div>
            <div className="p-3.5 rounded-lg bg-[#0d1322] border border-slate-800">
              <div className="text-xl sm:text-2xl font-bold text-sky-400 font-mono">Certiport</div>
              <div className="text-[11px] text-slate-400">Microsoft Specialist</div>
            </div>
            <div className="p-3.5 rounded-lg bg-[#0d1322] border border-slate-800">
              <div className="text-xl sm:text-2xl font-bold text-purple-400 font-mono">AI Lab</div>
              <div className="text-[11px] text-slate-400">Google Veo & TikTok Content</div>
            </div>
          </div>

        </div>
      </section>

      {/* ===== FEATURED PROJECTS SECTION ===== */}
      <section id="projects" className="py-16 px-4 sm:px-8 max-w-6xl mx-auto border-t border-slate-800/80">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#4ee6d8] uppercase tracking-widest mb-2">
              <span className="w-2 h-2 rounded-full bg-[#4ee6d8]" />
              PROYEK PILIHAN
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white font-display">
              Featured Web Applications & Systems
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            Klik kartu proyek mana saja untuk membuka preview screenshot interaktif, detail tantangan, dan solusi teknisnya.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {FEATURED_PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group bg-[#0d1322] border border-slate-800 hover:border-[#4ee6d8]/60 rounded-xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(78,230,216,0.15)] flex flex-col cursor-pointer"
            >
              {/* MacOS Frame Header Preview */}
              <MacOSFrame url={project.liveUrl || `https://bagus.dev/${project.id}`} className="rounded-b-none border-x-0 border-t-0">
                <div className="relative aspect-[16/9] bg-[#0a0e17] overflow-hidden">
                  <img
                    src={project.mockupPath}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1322] via-transparent to-transparent opacity-80" />
                  
                  {/* Status Overlay Badge */}
                  <div className="absolute top-3 right-3">
                    {project.liveUrl ? (
                      <span className="px-2.5 py-1 rounded bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 text-[10px] font-bold font-mono flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        LIVE DEMO
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded bg-amber-500/20 border border-amber-500/50 text-amber-400 text-[10px] font-bold font-mono flex items-center gap-1">
                        <Lock className="w-3 h-3" />
                        INTERNAL (NDA)
                      </span>
                    )}
                  </div>
                </div>
              </MacOSFrame>

              {/* Content Details */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-xs font-mono text-[#4ee6d8] uppercase tracking-wider mb-1">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#4ee6d8] transition-colors flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Problem & Solution Snippet */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] pt-2 border-t border-slate-800">
                  <div className="p-2.5 rounded bg-[#070b14] border border-amber-400/20">
                    <div className="text-amber-400 font-bold flex items-center gap-1 mb-1">
                      <Puzzle className="w-3 h-3" /> PROBLEM
                    </div>
                    <p className="text-slate-400 line-clamp-2">{project.problem}</p>
                  </div>
                  <div className="p-2.5 rounded bg-[#070b14] border border-[#4ee6d8]/20">
                    <div className="text-[#4ee6d8] font-bold flex items-center gap-1 mb-1">
                      <Wrench className="w-3 h-3" /> SOLUTION
                    </div>
                    <p className="text-slate-400 line-clamp-2">{project.solution}</p>
                  </div>
                </div>

                {/* Tech Stack Pills & Action Button */}
                <div className="flex items-center justify-between gap-2 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded bg-[#070b14] border border-slate-800 text-slate-300 text-[10px] font-mono">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-0.5 rounded bg-[#070b14] border border-slate-800 text-slate-400 text-[10px] font-mono">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-bold text-[#4ee6d8] group-hover:translate-x-1 transition-transform flex items-center gap-1 shrink-0">
                    LIHAT DETAIL <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== WORK & EDUCATION TIMELINE ===== */}
      <section id="experience" className="py-16 px-4 sm:px-8 max-w-6xl mx-auto border-t border-slate-800/80">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-widest mb-2">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              REKAM JEJAK KARIR & PENDIDIKAN
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white font-display">
              Work Experience & Academic Background
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            Perjalanan karir dari manufaktur presisi, pendidikan tinggi S1 Informatika, hingga pengerjaan proyek sistem aplikasi web.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-6">
          {CV_WORK_EXPERIENCES.map((exp) => (
            <div
              key={exp.step}
              className="p-5 sm:p-6 rounded-xl bg-[#0d1322] border border-slate-800 hover:border-slate-700 transition-all flex flex-col md:flex-row md:items-start gap-4 md:gap-8"
            >
              {/* Step & Company Header */}
              <div className="md:w-1/3 shrink-0 space-y-1">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-[#4ee6d8] font-bold">
                  <span className="px-2 py-0.5 rounded bg-[#4ee6d8]/10 border border-[#4ee6d8]/30">FASE {exp.step}</span>
                  <span>{exp.period}</span>
                </div>
                <h3 className="text-lg font-bold text-white">{exp.company}</h3>
                <div className="text-xs font-medium text-amber-400">{exp.role}</div>
              </div>

              {/* Detail Points */}
              <div className="md:w-2/3 space-y-2 pt-2 md:pt-0 border-t md:border-t-0 md:border-l border-slate-800/80 md:pl-6">
                <ul className="space-y-2">
                  {exp.points.map((pt, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2 leading-relaxed">
                      <span className="text-[#4ee6d8] shrink-0 mt-1">▸</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SKILLS MATRIX ===== */}
      <section id="skills" className="py-16 px-4 sm:px-8 max-w-6xl mx-auto border-t border-slate-800/80">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-widest mb-2">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              KOMPETENSI TEKNIS
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white font-display">
              Technical Stack & Domain Expertise
            </h2>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              className={`p-5 rounded-xl bg-gradient-to-br ${cat.color} border bg-[#0d1322] space-y-4`}
            >
              <h3 className="text-xs font-mono font-bold tracking-wider uppercase flex items-center gap-2">
                <span>▸</span> {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded bg-[#070b14] border border-slate-800 text-xs text-slate-200 font-mono flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4ee6d8]" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== ABOUT ME EDITORIAL CARD ===== */}
      <section className="py-16 px-4 sm:px-8 max-w-6xl mx-auto border-t border-slate-800/80">
        <div className="p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-[#0d1322] via-[#0f172a] to-[#070b14] border border-[#4ee6d8]/30 flex flex-col md:flex-row items-center gap-8">
          {/* Photo */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-2 border-[#4ee6d8] shadow-[0_0_30px_rgba(78,230,216,0.2)] shrink-0">
            <img
              src="/assets/game/hero-opening-bg.jpg"
              alt="Bagus Supriyanto"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Text */}
          <div className="space-y-4 flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4ee6d8]/10 border border-[#4ee6d8]/30 text-[#4ee6d8] text-xs font-mono">
              <GraduationCap className="w-3.5 h-3.5" /> S1 Teknologi Informatika — Universitas Teknologi Yogyakarta (2024)
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Tentang Bagus Supriyanto
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Saya adalah lulusan Sarjana Komputer dari Universitas Teknologi Yogyakarta yang berfokus pada pengembangan aplikasi web modern. Memiliki kombinasi keahlian pemrograman frontend/backend, pengalaman kerja disiplin industri manufaktur & instrumen kontrol, serta aktif bereksperimen dengan teknologi Generative AI Video terbaru.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-mono text-slate-400 pt-2">
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#4ee6d8]" /> Tanjung Uban, Kepulauan Riau</span>
              <span className="flex items-center gap-1"><Award className="w-3.5 h-3.5 text-amber-400" /> Microsoft Specialist — Certiport</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section id="contact" className="py-16 px-4 sm:px-8 max-w-6xl mx-auto border-t border-slate-800/80">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            LET'S WORK TOGETHER
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-display">
            Hubungi Saya Hari Ini
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Terbuka untuk kesempatan kerja <span className="text-white font-semibold">Fulltime, Remote, maupun Freelance Contract</span>.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {/* Email */}
          <div className="p-4 rounded-xl bg-[#0d1322] border border-slate-800 hover:border-[#4ee6d8]/60 transition-all flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="p-2.5 rounded-lg bg-[#4ee6d8]/10 text-[#4ee6d8] border border-[#4ee6d8]/30 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] font-mono text-[#4ee6d8] uppercase font-bold">EMAIL</div>
                <div className="text-xs font-mono text-white truncate">{DEVELOPER_DATA.contact.email}</div>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              className="px-2.5 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-xs font-mono text-[#4ee6d8] cursor-pointer shrink-0"
            >
              {copiedEmail ? 'COPIED!' : 'COPY'}
            </button>
          </div>

          {/* WhatsApp */}
          <a
            href={DEVELOPER_DATA.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-[#0d1322] border border-slate-800 hover:border-emerald-400/60 transition-all flex items-center justify-between gap-3 group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-emerald-400 uppercase font-bold">WHATSAPP</div>
                <div className="text-xs font-mono text-white">+62 851-5522-7735</div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/bagus-supriyanto-18b32819b"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-[#0d1322] border border-slate-800 hover:border-sky-400/60 transition-all flex items-center justify-between gap-3 group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/30 shrink-0">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-sky-400 uppercase font-bold">LINKEDIN</div>
                <div className="text-xs font-mono text-white">bagus-supriyanto</div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/bagussupriyanto"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-[#0d1322] border border-slate-800 hover:border-[#4ee6d8]/60 transition-all flex items-center justify-between gap-3 group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#4ee6d8]/10 text-[#4ee6d8] border border-[#4ee6d8]/30 shrink-0">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-[#4ee6d8] uppercase font-bold">GITHUB</div>
                <div className="text-xs font-mono text-white">bagussupriyanto</div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[#4ee6d8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* TikTok AI Lab */}
          {DEVELOPER_DATA.contact.tiktok && (
            <a
              href={DEVELOPER_DATA.contact.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[#0d1322] border border-slate-800 hover:border-purple-400/60 transition-all flex items-center justify-between gap-3 group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/30 shrink-0">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[9px] font-mono text-purple-400 uppercase font-bold">TIKTOK AI LAB</div>
                  <div className="text-xs font-mono text-white">@editorrramatir1106</div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          )}
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="pt-12 pb-8 border-t border-slate-800/80 text-center text-xs font-mono text-slate-500 space-y-3">
        <div>© 2026 {DEVELOPER_DATA.name}. All rights reserved.</div>
        <div>
          <button
            onClick={onSwitchToGameMode}
            className="text-[#4ee6d8] hover:underline font-pixel text-[10px] cursor-pointer"
          >
            🎮 Beralih ke 16-Bit RPG Game Mode
          </button>
        </div>
      </footer>

    </div>
  );
};
