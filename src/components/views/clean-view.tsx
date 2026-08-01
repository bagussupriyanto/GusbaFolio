"use client";

import React, { useState } from 'react';
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
  Code,
  Award,
  Puzzle,
  Wrench,
  Lock,
  Gamepad2,
  ArrowUpRight,
  ChevronRight,
  Menu,
  X,
  CheckCircle2,
  Building2,
  Layers,
  Terminal,
  Cpu,
  ShieldCheck,
  Check,
  Copy
} from 'lucide-react';
import { DEVELOPER_DATA, FEATURED_PROJECTS, CV_WORK_EXPERIENCES } from '@/lib/constants';
import { Project } from '@/types';
import { MacOSFrame } from '@/components/ui/macos-frame';

interface CleanViewProps {
  onSelectProject: (project: Project) => void;
  onSwitchToGameMode: () => void;
}

const TECH_CATEGORIES = [
  {
    title: "Frontend Engineering",
    icon: Code,
    skills: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "HTML5 / CSS3", "Framer Motion", "Turbopack"]
  },
  {
    title: "Backend & Database",
    icon: Terminal,
    skills: ["Supabase (BaaS)", "PostgreSQL", "Prisma ORM", "Node.js", "RESTful APIs", "Row Level Security"]
  },
  {
    title: "DevOps & Tooling",
    icon: Layers,
    skills: ["Git & GitHub", "Vercel Deployment", "VS Code", "Postman API", "Linux Bash", "CI/CD Automation"]
  },
  {
    title: "AI & Creative Technology",
    icon: Cpu,
    skills: ["Google Veo (AI Video)", "Seedance AI", "Gemini AI API", "Cursor AI Editor", "DES Data Encryption", "TikTok Content Lab"]
  },
  {
    title: "Industrial Instrumentation",
    icon: Building2,
    skills: ["Instrument Control", "Calibration & Testing", "Wiring & P&ID Diagrams", "SOP & K3 Safety", "Precision Wiring", "Certiport Microsoft Specialist"]
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
    <div className="w-full bg-[#F8FAFC] text-slate-800 min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* ===== EXECUTIVE HEADER NAVBAR (SOFT WHITE) ===== */}
      <header className="fixed top-0 inset-x-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
          
          {/* Brand Avatar + Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-slate-200 group-hover:border-blue-600 transition-colors shadow-sm shrink-0">
              <img
                src="/assets/bagus-profile.jpg"
                alt="Bagus Supriyanto Profile Photo"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                Bagus Supriyanto
              </span>
              <span className="text-xs text-slate-500 font-normal">
                Frontend Engineer
              </span>
            </div>
          </a>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Capabilities</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onSwitchToGameMode}
              className="px-3.5 py-1.5 rounded-lg bg-purple-50 border border-purple-200 text-purple-700 text-xs font-semibold flex items-center gap-1.5 hover:bg-purple-100 transition-all cursor-pointer shadow-xs"
              title="Beralih ke tampilan 16-Bit RPG Interactive"
            >
              <Gamepad2 className="w-4 h-4 text-purple-600" />
              <span className="hidden sm:inline">16-Bit RPG Mode</span>
              <span className="sm:hidden">RPG</span>
            </button>

            <a
              href="/assets/cv-bagus-supriyanto.pdf.pdf"
              download
              className="hidden sm:flex px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-semibold items-center gap-1.5 hover:bg-blue-700 transition-all cursor-pointer shadow-sm shadow-blue-500/20"
            >
              <Download className="w-3.5 h-3.5" />
              Download Resume
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-slate-100 text-slate-700 hover:text-slate-900 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 text-sm font-semibold text-slate-700">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 hover:text-blue-600"
            >
              About Me
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 hover:text-blue-600"
            >
              Projects & Case Studies
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 hover:text-blue-600"
            >
              Work Experience
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 hover:text-blue-600"
            >
              Technical Capabilities
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 hover:text-blue-600"
            >
              Contact
            </a>
            <a
              href="/assets/cv-bagus-supriyanto.pdf.pdf"
              download
              className="w-full py-2.5 rounded-lg bg-blue-600 text-white font-semibold flex items-center justify-center gap-2 shadow-sm"
            >
              <Download className="w-4 h-4" /> Download Resume (PDF)
            </a>
          </div>
        )}
      </header>

      {/* ===== HERO SECTION (SOFT WHITE EXECUTIVE) ===== */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 px-4 sm:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Hero Left Content */}
          <div className="space-y-6 max-w-2xl text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Fulltime & Remote Opportunities</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                Bagus Supriyanto
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-blue-600">
                Frontend Engineer & Web Applications Developer
              </p>
            </div>

            {/* Professional Bio */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Lulusan Sarjana Komputer <span className="text-slate-900 font-semibold">Universitas Teknologi Yogyakarta (S1 Teknologi Informasi, 2024)</span>. Berpengalaman membangun aplikasi web modern, sistem POS kasir, dan dashboard bisnis berskala produksi yang responsif & performan. Memiliki latar belakang kedisiplinan kerja industri manufaktur presisi & instrumen kontrol plant.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="/assets/cv-bagus-supriyanto.pdf.pdf"
                download
                className="px-6 py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-md shadow-blue-600/20 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                Download Resume (PDF)
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-800 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-slate-50 hover:border-slate-400 transition-all shadow-xs cursor-pointer"
              >
                <Mail className="w-4 h-4 text-blue-600" />
                Get in Touch
              </a>

              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-slate-100 text-slate-700 hover:text-slate-900 font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                Explore Work <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Hero Right Profile Photo Showcase */}
          <div className="w-full sm:w-[340px] shrink-0 p-4 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-200/60 space-y-4">
            
            {/* Photo Container */}
            <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden border border-slate-200 shadow-inner group">
              <img
                src="/assets/bagus-profile.jpg"
                alt="Bagus Supriyanto Official Photo"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-70" />
              
              {/* Photo Caption Badge */}
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200 flex items-center justify-between shadow-sm">
                <div>
                  <div className="text-xs font-bold text-slate-900">Bagus Supriyanto, S.Kom</div>
                  <div className="text-[11px] font-semibold text-blue-600">UTY IT Graduate • 2024</div>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" title="Open to hire" />
              </div>
            </div>

            {/* Profile Fast Facts */}
            <div className="space-y-2.5 text-xs pt-1">
              <div className="flex items-center justify-between text-slate-600">
                <span className="text-slate-500 font-medium">Pendidikan</span>
                <span className="font-semibold text-slate-900">S1 Teknologi Informasi</span>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span className="text-slate-500 font-medium">Sertifikasi</span>
                <span className="font-semibold text-blue-600">Microsoft Specialist</span>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span className="text-slate-500 font-medium">Lokasi</span>
                <span className="font-semibold text-slate-900">Kepulauan Riau, Indonesia</span>
              </div>
            </div>

          </div>

        </div>

        {/* Quick Metrics Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-12 border-t border-slate-200/80 mt-12">
          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
            <div className="text-2xl font-bold text-blue-600">S1 UTY</div>
            <div className="text-xs text-slate-500">Lulusan TI (2024)</div>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
            <div className="text-2xl font-bold text-emerald-600">3+ Aplikasi</div>
            <div className="text-xs text-slate-500">Proyek Web Production</div>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
            <div className="text-2xl font-bold text-indigo-600">Certiport</div>
            <div className="text-xs text-slate-500">Microsoft Certified</div>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
            <div className="text-2xl font-bold text-purple-600">AI Video</div>
            <div className="text-xs text-slate-500">Google Veo & TikTok Lab</div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ME SECTION ===== */}
      <section id="about" className="py-16 px-4 sm:px-8 max-w-6xl mx-auto border-t border-slate-200/80">
        <div className="p-6 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-md flex flex-col md:flex-row items-center gap-8">
          
          {/* Photo */}
          <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-2 border-slate-200 shadow-md shrink-0">
            <img
              src="/assets/profile-photo.jpg"
              alt="Bagus Supriyanto Portrait"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Details */}
          <div className="space-y-4 flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
              <GraduationCap className="w-4 h-4" /> S1 Teknologi Informasi — Universitas Teknologi Yogyakarta (2024)
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Tentang Bagus Supriyanto
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Saya adalah lulusan Sarjana Komputer dari Universitas Teknologi Yogyakarta yang berfokus pada pengembangan aplikasi web modern. Memiliki kombinasi keahlian pemrograman frontend/backend, pengalaman kerja disiplin industri manufaktur & instrumen kontrol, serta aktif bereksperimen dengan teknologi Generative AI Video terbaru.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-slate-600 font-medium pt-2">
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-blue-600" /> Tanjung Uban, Kepulauan Riau</span>
              <span className="flex items-center gap-1.5"><Award className="w-4 h-4 text-amber-600" /> Microsoft Specialist — Certiport</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED PROJECTS SECTION ===== */}
      <section id="projects" className="py-16 px-4 sm:px-8 max-w-6xl mx-auto border-t border-slate-200/80">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-bold text-blue-600 tracking-wider uppercase mb-2">
              Selected Case Studies & Systems
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900">
              Featured Web Projects
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md">
            Klik kartu proyek untuk melihat gambaran teknis, penyelesaian masalah, serta galeri screenshot interaktif.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {FEATURED_PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group bg-white border border-slate-200 hover:border-blue-400 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col cursor-pointer"
            >
              {/* MacOS Window Frame */}
              <MacOSFrame url={project.liveUrl || `https://bagus.dev/${project.id}`} className="rounded-b-none border-x-0 border-t-0 bg-slate-100">
                <div className="relative aspect-[16/9] bg-slate-900 overflow-hidden">
                  <img
                    src={project.mockupPath}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60" />
                  
                  {/* Status Overlay */}
                  <div className="absolute top-3 right-3">
                    {project.liveUrl ? (
                      <span className="px-2.5 py-1 rounded-md bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        Live Demo
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-md bg-amber-100 border border-amber-300 text-amber-800 text-xs font-semibold flex items-center gap-1.5 shadow-xs">
                        <Lock className="w-3.5 h-3.5" />
                        Internal System (NDA)
                      </span>
                    )}
                  </div>
                </div>
              </MacOSFrame>

              {/* Content Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" />
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Problem & Solution Card */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2 border-t border-slate-100">
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 space-y-1">
                    <div className="text-amber-700 font-bold flex items-center gap-1">
                      <Puzzle className="w-3.5 h-3.5" /> Tantangan Utama
                    </div>
                    <p className="text-slate-600 line-clamp-2 leading-normal">{project.problem}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 space-y-1">
                    <div className="text-blue-700 font-bold flex items-center gap-1">
                      <Wrench className="w-3.5 h-3.5" /> Solusi Teknis
                    </div>
                    <p className="text-slate-600 line-clamp-2 leading-normal">{project.solution}</p>
                  </div>
                </div>

                {/* Tech Badges & CTA */}
                <div className="flex items-center justify-between gap-2 pt-1">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-1 rounded bg-slate-100 border border-slate-200 text-slate-500 text-xs font-semibold">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-bold text-blue-600 group-hover:translate-x-1 transition-transform flex items-center gap-1 shrink-0">
                    Lihat Detail <ChevronRight className="w-4 h-4" />
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== WORK EXPERIENCE & EDUCATION TIMELINE ===== */}
      <section id="experience" className="py-16 px-4 sm:px-8 max-w-6xl mx-auto border-t border-slate-200/80">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-bold text-blue-600 tracking-wider uppercase mb-2">
              Career Timeline & Qualification
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900">
              Work Experience & Academic Background
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md">
            Rekam karir profesional dari manufaktur presisi, pendidikan tinggi IT, hingga pengembangan sistem aplikasi web.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-6">
          {CV_WORK_EXPERIENCES.map((exp) => (
            <div
              key={exp.step}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col md:flex-row md:items-start gap-4 md:gap-8"
            >
              {/* Left Column: Company & Period */}
              <div className="md:w-1/3 shrink-0 space-y-1.5">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600">
                  <span className="px-2.5 py-0.5 rounded-md bg-blue-50 border border-blue-200">Fase {exp.step}</span>
                  <span className="text-slate-500">{exp.period}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{exp.company}</h3>
                <div className="text-xs font-semibold text-amber-700">{exp.role}</div>
              </div>

              {/* Right Column: Responsibilities */}
              <div className="md:w-2/3 space-y-2.5 pt-2 md:pt-0 border-t md:border-t-0 md:border-l border-slate-200 md:pl-8">
                <ul className="space-y-2.5">
                  {exp.points.map((pt, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2.5 leading-relaxed">
                      <span className="text-blue-600 font-bold shrink-0 mt-0.5">✓</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TECHNICAL CAPABILITIES MATRIX ===== */}
      <section id="skills" className="py-16 px-4 sm:px-8 max-w-6xl mx-auto border-t border-slate-200/80">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-bold text-blue-600 tracking-wider uppercase mb-2">
              Technology Stack
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900">
              Technical Capabilities & Domain Expertise
            </h2>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_CATEGORIES.map((cat) => {
            const IconComp = cat.icon;
            return (
              <div
                key={cat.title}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-600">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 font-semibold flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section id="contact" className="py-16 px-4 sm:px-8 max-w-6xl mx-auto border-t border-slate-200/80">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Let's Connect
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-slate-900">
            Hubungi Saya Hari Ini
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Terbuka untuk posisi <span className="text-slate-900 font-semibold">Fulltime, Kontrak Remote Engineering, maupun Pembuatan Sistem Aplikasi</span>.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {/* Email Card */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-400 transition-all flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] text-blue-600 uppercase font-bold tracking-wider">EMAIL</div>
                <div className="text-xs text-slate-900 font-medium truncate">{DEVELOPER_DATA.contact.email}</div>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs text-slate-800 font-semibold cursor-pointer shrink-0"
            >
              {copiedEmail ? 'Copied' : 'Copy'}
            </button>
          </div>

          {/* WhatsApp Card */}
          <a
            href={DEVELOPER_DATA.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-emerald-500 transition-all flex items-center justify-between gap-3 group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] text-emerald-600 uppercase font-bold tracking-wider">WHATSAPP</div>
                <div className="text-xs text-slate-900 font-semibold">+62 851-5522-7735</div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/bagus-supriyanto-18b32819b"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-600 transition-all flex items-center justify-between gap-3 group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 shrink-0">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] text-blue-600 uppercase font-bold tracking-wider">LINKEDIN</div>
                <div className="text-xs text-slate-900 font-semibold">bagus-supriyanto</div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* GitHub Card */}
          <a
            href="https://github.com/bagussupriyanto"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-slate-800 transition-all flex items-center justify-between gap-3 group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-slate-100 text-slate-800 border border-slate-200 shrink-0">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] text-slate-600 uppercase font-bold tracking-wider">GITHUB</div>
                <div className="text-xs text-slate-900 font-semibold">bagussupriyanto</div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* TikTok AI Lab Card */}
          {DEVELOPER_DATA.contact.tiktok && (
            <a
              href={DEVELOPER_DATA.contact.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-purple-500 transition-all flex items-center justify-between gap-3 group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-50 text-purple-600 border border-purple-200 shrink-0">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-purple-600 uppercase font-bold tracking-wider">AI CONTENT LAB</div>
                  <div className="text-xs text-slate-900 font-semibold">@editorrramatir1106</div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-purple-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          )}
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-12 border-t border-slate-200/80 text-center text-xs text-slate-500 space-y-3 bg-white">
        <div>© 2026 {DEVELOPER_DATA.name}. All rights reserved.</div>
        <div>
          <button
            onClick={onSwitchToGameMode}
            className="text-purple-600 hover:underline inline-flex items-center gap-1.5 font-semibold cursor-pointer"
          >
            <Gamepad2 className="w-4 h-4" /> Beralih ke 16-Bit RPG Game Mode
          </button>
        </div>
      </footer>

    </div>
  );
};
