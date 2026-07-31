"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
  FileText,
  CheckCircle2,
  Building2,
  Layers,
  Terminal,
  Cpu,
  Globe2,
  Calendar
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
    title: "DevOps & Infrastructure",
    icon: Layers,
    skills: ["Git & GitHub", "Vercel Deployment", "VS Code", "Postman API", "Linux Bash", "CI/CD Pipelines"]
  },
  {
    title: "AI & Creative Technology",
    icon: Cpu,
    skills: ["Google Veo (AI Video)", "Seedance AI", "Gemini AI API", "Cursor AI Editor", "DES Data Encryption", "TikTok Content Lab"]
  },
  {
    title: "Industrial Instrumentation",
    icon: Building2,
    skills: ["Instrument Control", "Calibration & Testing", "P&ID & Wiring Diagrams", "SOP & Industrial K3", "Precision Wiring", "Certiport Microsoft Specialist"]
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
    <div className="w-full bg-[#090d16] text-[#F8FAFC] min-h-screen font-sans selection:bg-blue-500/30 selection:text-blue-400">
      
      {/* ===== CORPORATE HEADER NAVBAR ===== */}
      <header className="fixed top-0 inset-x-0 z-40 bg-[#090d16]/90 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold font-sans flex items-center justify-center text-sm shadow-md">
              BS
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold text-white tracking-tight">
                Bagus Supriyanto
              </span>
              <span className="text-xs text-slate-400 font-normal">
                Frontend Engineer
              </span>
            </div>
          </a>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-300">
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Capabilities</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onSwitchToGameMode}
              className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-medium flex items-center gap-1.5 hover:bg-slate-800 hover:text-white transition-all cursor-pointer"
              title="Switch to 16-Bit RPG Interactive View"
            >
              <Gamepad2 className="w-3.5 h-3.5 text-purple-400" />
              <span className="hidden sm:inline">16-Bit RPG Mode</span>
              <span className="sm:hidden">RPG</span>
            </button>

            <a
              href="/assets/cv-bagus-supriyanto.pdf.pdf"
              download
              className="hidden sm:flex px-4 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-medium items-center gap-1.5 hover:bg-blue-500 transition-all cursor-pointer shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Nav Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0d1322] border-b border-slate-800 px-4 py-4 space-y-3 text-sm font-medium">
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-slate-300 hover:text-blue-400"
            >
              Projects
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-slate-300 hover:text-blue-400"
            >
              Work Experience
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-slate-300 hover:text-blue-400"
            >
              Technical Capabilities
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-slate-300 hover:text-blue-400"
            >
              Contact
            </a>
            <a
              href="/assets/cv-bagus-supriyanto.pdf.pdf"
              download
              className="w-full py-2.5 rounded-lg bg-blue-600 text-white font-medium flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" /> Download Resume
            </a>
          </div>
        )}
      </header>

      {/* ===== EXECUTIVE HERO SECTION ===== */}
      <section className="relative pt-32 pb-16 sm:pt-44 sm:pb-24 px-4 sm:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
          
          {/* Main Hero Content */}
          <div className="space-y-6 max-w-2xl">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Fulltime & Remote Opportunities</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
                Bagus Supriyanto
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-slate-300">
                Frontend Engineer & Web Applications Developer
              </p>
            </div>

            {/* Professional Summary */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Bachelor of Computer Science graduate from <span className="text-white font-medium">Universitas Teknologi Yogyakarta (S1 Technology Information, 2024)</span>. Specialized in building production-ready web applications, POS cashier platforms, and enterprise dashboards with clean architecture and responsive user experiences.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="/assets/cv-bagus-supriyanto.pdf.pdf"
                download
                className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-blue-500 transition-all shadow-md cursor-pointer"
              >
                <Download className="w-4 h-4" />
                Download Resume (PDF)
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-200 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-slate-800 hover:text-white transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                Get in Touch
              </a>

              <a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-slate-900 text-slate-400 hover:text-slate-200 font-medium text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                View Case Studies <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Highlight Card */}
          <div className="w-full lg:w-[380px] shrink-0 p-6 rounded-2xl bg-[#0f172a]/60 border border-slate-800/80 space-y-5">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center font-bold text-lg">
                BS
              </div>
              <div>
                <div className="text-sm font-bold text-white">Bagus Supriyanto, S.Kom</div>
                <div className="text-xs text-slate-400">UTY Graduate • 2024</div>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between text-slate-300">
                <span className="text-slate-400">Degree</span>
                <span className="font-semibold text-white">S1 Information Technology</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span className="text-slate-400">Certification</span>
                <span className="font-semibold text-blue-400">Microsoft Specialist</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span className="text-slate-400">Location</span>
                <span className="font-semibold text-white">Kepulauan Riau, Indonesia</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span className="text-slate-400">Work Preferences</span>
                <span className="font-semibold text-emerald-400">Fulltime / Remote</span>
              </div>
            </div>

            <div className="pt-2">
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400 leading-relaxed">
                <span className="text-white font-medium">Domain Experience:</span> Web Development (Next.js/React), Instrument Control Systems, Industrial Operations, Generative AI Video Lab.
              </div>
            </div>
          </div>

        </div>

        {/* Quick Metrics Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-12 border-t border-slate-800/80 mt-12">
          <div className="p-4 rounded-xl bg-[#0d1322] border border-slate-800/80 space-y-1">
            <div className="text-2xl font-bold text-blue-400">S1 UTY</div>
            <div className="text-xs text-slate-400">IT Graduate (2024)</div>
          </div>
          <div className="p-4 rounded-xl bg-[#0d1322] border border-slate-800/80 space-y-1">
            <div className="text-2xl font-bold text-emerald-400">3+ Platforms</div>
            <div className="text-xs text-slate-400">Production Systems Built</div>
          </div>
          <div className="p-4 rounded-xl bg-[#0d1322] border border-slate-800/80 space-y-1">
            <div className="text-2xl font-bold text-indigo-400">Certiport</div>
            <div className="text-xs text-slate-400">Microsoft Certified</div>
          </div>
          <div className="p-4 rounded-xl bg-[#0d1322] border border-slate-800/80 space-y-1">
            <div className="text-2xl font-bold text-purple-400">AI Video</div>
            <div className="text-xs text-slate-400">Google Veo & Content Lab</div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED PROJECTS SECTION ===== */}
      <section id="projects" className="py-16 px-4 sm:px-8 max-w-6xl mx-auto border-t border-slate-800/80">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-semibold text-blue-400 tracking-wider uppercase mb-2">
              Case Studies & Software Systems
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white">
              Featured Web Projects
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            Click on any project to open detailed architecture highlights, technical problem-solving, and live screenshots.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {FEATURED_PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group bg-[#0d1322] border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden transition-all duration-300 shadow-md hover:shadow-xl flex flex-col cursor-pointer"
            >
              {/* MacOS Window Frame */}
              <MacOSFrame url={project.liveUrl || `https://bagus.dev/${project.id}`} className="rounded-b-none border-x-0 border-t-0">
                <div className="relative aspect-[16/9] bg-[#090d16] overflow-hidden">
                  <img
                    src={project.mockupPath}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1322] via-transparent to-transparent opacity-70" />
                  
                  {/* Status Overlay */}
                  <div className="absolute top-3 right-3">
                    {project.liveUrl ? (
                      <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-medium flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Live Demo
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-md bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-medium flex items-center gap-1.5">
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
                  <div className="text-xs font-medium text-blue-400 uppercase tracking-wider mb-1">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Problem & Solution Card */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2 border-t border-slate-800">
                  <div className="p-3 rounded-lg bg-[#080c16] border border-slate-800/80 space-y-1">
                    <div className="text-amber-400 font-semibold flex items-center gap-1">
                      <Puzzle className="w-3.5 h-3.5" /> Core Challenge
                    </div>
                    <p className="text-slate-400 line-clamp-2 leading-normal">{project.problem}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-[#080c16] border border-slate-800/80 space-y-1">
                    <div className="text-blue-400 font-semibold flex items-center gap-1">
                      <Wrench className="w-3.5 h-3.5" /> Technical Solution
                    </div>
                    <p className="text-slate-400 line-clamp-2 leading-normal">{project.solution}</p>
                  </div>
                </div>

                {/* Tech Badges & CTA */}
                <div className="flex items-center justify-between gap-2 pt-1">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded bg-slate-800/80 text-slate-300 text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-1 rounded bg-slate-800/80 text-slate-400 text-xs font-medium">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-semibold text-blue-400 group-hover:translate-x-1 transition-transform flex items-center gap-1 shrink-0">
                    View Case Details <ChevronRight className="w-4 h-4" />
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== WORK EXPERIENCE & EDUCATION TIMELINE ===== */}
      <section id="experience" className="py-16 px-4 sm:px-8 max-w-6xl mx-auto border-t border-slate-800/80">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-semibold text-blue-400 tracking-wider uppercase mb-2">
              Career Timeline & Qualification
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white">
              Work Experience & Academic Background
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            Career record across precision manufacturing, higher education in IT, and software development.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-6">
          {CV_WORK_EXPERIENCES.map((exp) => (
            <div
              key={exp.step}
              className="p-6 rounded-2xl bg-[#0d1322] border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col md:flex-row md:items-start gap-4 md:gap-8"
            >
              {/* Left Column: Company & Period */}
              <div className="md:w-1/3 shrink-0 space-y-1.5">
                <div className="inline-flex items-center gap-2 text-xs font-medium text-blue-400">
                  <span className="px-2.5 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/20">Phase {exp.step}</span>
                  <span className="text-slate-400">{exp.period}</span>
                </div>
                <h3 className="text-lg font-bold text-white">{exp.company}</h3>
                <div className="text-xs font-medium text-amber-400">{exp.role}</div>
              </div>

              {/* Right Column: Responsibilities */}
              <div className="md:w-2/3 space-y-2.5 pt-2 md:pt-0 border-t md:border-t-0 md:border-l border-slate-800 md:pl-8">
                <ul className="space-y-2.5">
                  {exp.points.map((pt, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5 leading-relaxed">
                      <span className="text-blue-400 shrink-0 mt-1">✓</span>
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
      <section id="skills" className="py-16 px-4 sm:px-8 max-w-6xl mx-auto border-t border-slate-800/80">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-semibold text-blue-400 tracking-wider uppercase mb-2">
              Technology Stack
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white">
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
                className="p-6 rounded-2xl bg-[#0d1322] border border-slate-800/80 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-[#080c16] border border-slate-800 text-xs text-slate-300 font-medium flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
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
      <section id="contact" className="py-16 px-4 sm:px-8 max-w-6xl mx-auto border-t border-slate-800/80">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Let's Connect
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white">
            Get In Touch Today
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Open for <span className="text-white font-medium">Fulltime Positions, Remote Engineering Contracts, or Freelance Systems</span>.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {/* Email Card */}
          <div className="p-5 rounded-2xl bg-[#0d1322] border border-slate-800 hover:border-blue-500/50 transition-all flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] text-blue-400 uppercase font-bold tracking-wider">EMAIL</div>
                <div className="text-xs text-white truncate font-mono">{DEVELOPER_DATA.contact.email}</div>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-blue-400 font-medium cursor-pointer shrink-0"
            >
              {copiedEmail ? 'Copied' : 'Copy'}
            </button>
          </div>

          {/* WhatsApp Card */}
          <a
            href={DEVELOPER_DATA.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-[#0d1322] border border-slate-800 hover:border-emerald-500/50 transition-all flex items-center justify-between gap-3 group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] text-emerald-400 uppercase font-bold tracking-wider">WHATSAPP</div>
                <div className="text-xs text-white font-mono">+62 851-5522-7735</div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/bagus-supriyanto-18b32819b"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-[#0d1322] border border-slate-800 hover:border-blue-400/50 transition-all flex items-center justify-between gap-3 group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] text-blue-400 uppercase font-bold tracking-wider">LINKEDIN</div>
                <div className="text-xs text-white">bagus-supriyanto</div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* GitHub Card */}
          <a
            href="https://github.com/bagussupriyanto"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-[#0d1322] border border-slate-800 hover:border-slate-600 transition-all flex items-center justify-between gap-3 group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-slate-800 text-slate-200 border border-slate-700 shrink-0">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">GITHUB</div>
                <div className="text-xs text-white font-mono">bagussupriyanto</div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* TikTok AI Lab Card */}
          {DEVELOPER_DATA.contact.tiktok && (
            <a
              href={DEVELOPER_DATA.contact.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#0d1322] border border-slate-800 hover:border-purple-500/50 transition-all flex items-center justify-between gap-3 group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-purple-400 uppercase font-bold tracking-wider">AI CONTENT LAB</div>
                  <div className="text-xs text-white font-mono">@editorrramatir1106</div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          )}
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-12 border-t border-slate-800/80 text-center text-xs text-slate-500 space-y-3">
        <div>© 2026 {DEVELOPER_DATA.name}. All rights reserved.</div>
        <div>
          <button
            onClick={onSwitchToGameMode}
            className="text-purple-400 hover:underline inline-flex items-center gap-1.5 font-medium cursor-pointer"
          >
            <Gamepad2 className="w-4 h-4" /> Switch to 16-Bit RPG Interactive Mode
          </button>
        </div>
      </footer>

    </div>
  );
};
