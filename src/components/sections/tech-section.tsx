"use client";

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Workflow,
  ShieldCheck,
  Wrench,
  Lock,
  Boxes,
  Cpu,
  CheckCircle2
} from 'lucide-react';

interface TechItem {
  name: string;
  desc: string;
  logo?: string;
  fallbackIcon?: React.ReactNode;
}

interface TechCategory {
  label: string;
  color: string;
  borderColor: string;
  items: TechItem[];
}

const si = (slug: string, color: string) => `https://cdn.simpleicons.org/${slug}/${color}`;

const categories: TechCategory[] = [
  {
    label: "FRONTEND",
    color: "text-[#4ee6d8]",
    borderColor: "border-[#4ee6d8]/30",
    items: [
      { name: 'Next.js', desc: 'React framework fullstack — SSR, routing, API routes. Ini framework utama yang aku pakai di semua project.', logo: si('nextdotjs', '4ee6d8') },
      { name: 'TypeScript', desc: 'JavaScript + type-safety. Bikin kode lebih aman dan gampang di-maintain dalam jangka panjang.', logo: si('typescript', '3178C6') },
      { name: 'React', desc: 'Library UI berbasis komponen. Semua antarmuka web yang aku buat pakai React sebagai fondasi.', logo: si('react', '61DAFB') },
      { name: 'JavaScript', desc: 'Bahasa utama untuk logika interaktif di browser. Dasar dari semua web development.', logo: si('javascript', 'F7DF1E') },
      { name: 'Tailwind CSS', desc: 'Utility-first CSS — styling cepat tanpa ribet bikin class manual satu-satu.', logo: si('tailwindcss', '06B6D4') },
      { name: 'HTML5', desc: 'Markup standar web. Struktur dan semantik halaman dimulai dari sini.', logo: si('html5', 'E34F26') },
      { name: 'CSS3', desc: 'Bahasa styling buat layout, animasi, dan visual web. Dukung responsive design.', logo: si('css', '1572B6') },
    ]
  },
  {
    label: "BACKEND",
    color: "text-emerald-400",
    borderColor: "border-emerald-400/30",
    items: [
      { name: 'Supabase', desc: 'Backend-as-a-Service dengan Row Level Security — auth, database, storage dalam satu platform.', logo: si('supabase', '3FCF8E') },
      { name: 'PostgreSQL', desc: 'Database relasional open-source. Powerful, reliable, jadi pilihan utama untuk data production.', logo: si('postgresql', '4169E1') },
      { name: 'Prisma', desc: 'Type-safe ORM — query database dengan auto-completion. Developer experience-nya top.', logo: si('prisma', '4ee6d8') },
      { name: 'Node.js', desc: 'JavaScript runtime di server. Backend API dan server-side logic semua jalan di sini.', logo: si('nodedotjs', '5FA04E') },
      { name: 'REST APIs', desc: 'Arsitektur standar komunikasi client-server. Semua integrasi data lewat sini.', fallbackIcon: <Workflow className="w-5 h-5 text-emerald-400" /> },
    ]
  },
  {
    label: "DEVOPS",
    color: "text-sky-400",
    borderColor: "border-sky-400/30",
    items: [
      { name: 'Git', desc: 'Version control — tracking setiap perubahan kode. Wajib di setiap project.', logo: si('git', 'F05032') },
      { name: 'GitHub', desc: 'Platform kolaborasi kode, CI/CD, dan code hosting. Semua repo project ada di sini.', logo: si('github', '4ee6d8') },
      { name: 'Vercel', desc: 'Deployment otomatis untuk Next.js — push ke Git, langsung live. Zero config.', logo: si('vercel', '4ee6d8') },
      { name: 'VS Code', desc: 'Code editor utama sehari-hari. Ekstensi lengkap, produktivitas tinggi.', logo: si('vscodium', '007ACC') },
      { name: 'Postman', desc: 'Testing & dokumentasi REST API. Debug endpoint jadi gampang.', logo: si('postman', 'FF6C37') },
      { name: 'Linux', desc: 'OS open-source untuk server & development. Familiar dengan terminal.', logo: si('linux', 'FCC624') },
    ]
  },
  {
    label: "AI & MORE",
    color: "text-purple-400",
    borderColor: "border-purple-400/30",
    items: [
      { name: 'Gemini API', desc: 'Google AI API — integrasi kecerdasan buatan ke dalam aplikasi web.', logo: si('googlegemini', '886FBF') },
      { name: 'Cursor AI', desc: 'AI-powered code editor. Akselerasi development dengan bantuan AI real-time.', fallbackIcon: <Cpu className="w-5 h-5 text-purple-400" /> },
      { name: 'DES Encryption', desc: 'Topik skripsi — implementasi enkripsi data untuk keamanan informasi.', fallbackIcon: <Lock className="w-5 h-5 text-purple-400" /> },
      { name: 'C++', desc: 'Bahasa performa tinggi. Dipelajari di kuliah untuk pemahaman dasar sistem.', logo: si('cplusplus', '00599C') },
      { name: 'Python', desc: 'Bahasa serbaguna untuk scripting, data processing, dan automasi.', logo: si('python', '3776AB') },
    ]
  },
  {
    label: "INDUSTRIAL",
    color: "text-amber-400",
    borderColor: "border-amber-400/30",
    items: [
      { name: 'Instrument Control', desc: 'Pengalaman langsung mengendalikan sensor, valve, transmitter di plant industri.', fallbackIcon: <Wrench className="w-5 h-5 text-amber-400" /> },
      { name: 'Calibration', desc: 'Kalibrasi instrumen pressure, level, flow, temperature sesuai prosedur standar.', fallbackIcon: <Wrench className="w-5 h-5 text-amber-400" /> },
      { name: 'Wiring & P&ID', desc: 'Membaca dan memahami gambar teknik, wiring diagram, dan P&ID di lapangan.', fallbackIcon: <Workflow className="w-5 h-5 text-amber-400" /> },
      { name: 'SOP & K3', desc: 'Standar prosedur operasional dan keselamatan kerja — sudah terbiasa di lingkungan industri.', fallbackIcon: <ShieldCheck className="w-5 h-5 text-amber-400" /> },
      { name: 'Precision Wiring', desc: 'Perakitan dan crimping wiring presisi untuk konektor & sistem kontrol elektronik.', fallbackIcon: <Boxes className="w-5 h-5 text-amber-400" /> },
      { name: 'Certiport', desc: 'Sertifikasi Microsoft Office Specialist — terverifikasi global lewat Certiport.', fallbackIcon: <CheckCircle2 className="w-5 h-5 text-amber-400" /> },
    ]
  },
];

const IDLE_MSG = "Hover salah satu skill untuk lihat penjelasannya!";

const TechItemButton = React.memo(({ item, isActive, onEnter, onLeave, onClick }: { item: TechItem, isActive: boolean, onEnter: (i: TechItem) => void, onLeave: () => void, onClick: (i: TechItem) => void }) => (
  <button
    onMouseEnter={() => onEnter(item)}
    onMouseLeave={onLeave}
    onClick={() => onClick(item)}
    className={`group flex items-center gap-2 px-3 py-2 sm:px-2.5 sm:py-1.5 border transition-all duration-200 cursor-pointer sm:cursor-default ${
      isActive
        ? 'bg-[#4ee6d8]/10 border-[#4ee6d8] shadow-[0_0_12px_rgba(78,230,216,0.2)]'
        : 'bg-[#0a0e17]/70 border-[#4ee6d8]/15 hover:border-[#4ee6d8]/50 hover:bg-[#12182a]/80'
    }`}
  >
    <div className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center shrink-0">
      {item.logo ? (
        <img src={item.logo} alt={item.name} width={16} height={16} loading="lazy" className="w-4 h-4 sm:w-5 sm:h-5 object-contain" />
      ) : (
        <div className="scale-[0.65]">{item.fallbackIcon}</div>
      )}
    </div>
    <span className={`text-[8px] sm:text-[9px] font-pixel whitespace-nowrap transition-colors duration-200 ${
      isActive ? 'text-[#4ee6d8]' : 'text-[#CBD5E1] group-hover:text-[#F8FAFC]'
    }`}>
      {item.name}
    </span>
  </button>
));
TechItemButton.displayName = "TechItemButton";

export const TechSection: React.FC = React.memo(() => {
  const totalItems = categories.reduce((sum, cat) => sum + cat.items.length, 0);
  const [activeItem, setActiveItem] = useState<TechItem | null>(null);
  const [selectedCat, setSelectedCat] = useState<string>("ALL");

  const filteredCategories = React.useMemo(() => {
    if (selectedCat === "ALL") return categories;
    return categories.filter(c => 
      c.label.toUpperCase().includes(selectedCat.toUpperCase()) || 
      selectedCat.toUpperCase().includes(c.label.split(' ')[0].toUpperCase())
    );
  }, [selectedCat]);

  const handleEnter = useCallback((item: TechItem) => setActiveItem(item), []);
  const handleLeave = useCallback(() => setActiveItem(null), []);
  const handleClick = useCallback((item: TechItem) => setActiveItem(prev => prev?.name === item.name ? null : item), []);

  const isTalking = activeItem !== null;
  const robotMessage = activeItem ? activeItem.desc : IDLE_MSG;
  const robotLabel = activeItem ? activeItem.name : "B-07 GUIDE";

  return (
    <section
      id="stack"
      className="relative h-screen w-full flex flex-col bg-[#0a0e17] font-silkscreen overflow-hidden text-[#F8FAFC] z-10"
    >
      {/* Background Image */}
      <style>{`
        @keyframes robot-patrol {
          0%, 100% { transform: translate3d(0, 0, 0); }
          25% { transform: translate3d(20px, -2px, 0); }
          50% { transform: translate3d(0, 0, 0); }
          75% { transform: translate3d(-20px, -2px, 0); }
        }
        @keyframes robot-talk {
          0%, 100% { transform: scaleY(0.3); opacity: 0.8; }
          50% { transform: scaleY(1.2); opacity: 1; }
        }
      `}</style>
      <div className="absolute inset-0">
        <img src="/assets/game/tech-workshop-bg.jpg" alt="" loading="lazy" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0a0e17]/70 pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#0a0e17] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#0a0e17] to-transparent pointer-events-none" />
      </div>

      {/* ===== TOP LABEL BAR ===== */}
      <div className="relative z-10 flex items-center justify-between px-4 sm:px-6 pt-12 sm:pt-20 pb-1">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#4ee6d8] animate-pulse" />
          <span className="text-xs sm:text-sm text-[#4ee6d8] font-bold tracking-widest uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            4. TECH STACK
          </span>
        </div>
        <div className="text-[10px] sm:text-xs text-[#94A3B8] font-mono drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          {totalItems} SKILLS UNLOCKED
        </div>
      </div>

      {/* ===== CATEGORY FILTER TABS ===== */}
      <div className="relative z-10 flex items-center gap-1 sm:gap-1.5 px-4 sm:px-6 overflow-x-auto py-1 scrollbar-hide">
        {["ALL", "FRONTEND", "BACKEND", "DEVOPS", "AI & MORE", "INDUSTRIAL"].map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCat(cat)}
            className={`px-2.5 py-1 text-[8px] sm:text-[9px] font-pixel font-bold border transition-all shrink-0 cursor-pointer ${
              selectedCat === cat
                ? 'bg-[#4ee6d8] text-[#0a0e17] border-white shadow-[0_0_8px_rgba(78,230,216,0.5)]'
                : 'bg-[#0a0e17]/80 text-[#94A3B8] border-[#4ee6d8]/20 hover:border-[#4ee6d8]/60 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ===== TECH GRID ===== */}
      <div className="relative z-10 flex-1 px-4 sm:px-6 lg:px-10 overflow-y-auto py-2 pb-24 sm:pb-2 scrollbar-hide">
        <div className="max-w-5xl mx-auto space-y-2 sm:space-y-3">
          {filteredCategories.map((cat) => (
            <div key={cat.label}>
              <div className="flex items-center gap-2 mb-1.5">
                <span className={`text-[8px] sm:text-[9px] font-bold tracking-widest ${cat.color} drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]`}>
                  ▸ {cat.label}
                </span>
                <div className={`flex-1 h-px ${cat.borderColor} border-t border-dashed`} />
                <span className="text-[7px] text-[#94A3B8] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{cat.items.length}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item, idx) => (
                  <TechItemButton
                    key={idx}
                    item={item}
                    isActive={activeItem?.name === item.name}
                    onEnter={handleEnter}
                    onLeave={handleLeave}
                    onClick={handleClick}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== BOTTOM: ROBOT + SPEECH BUBBLE ===== */}
      <div className="fixed sm:relative bottom-0 left-0 right-0 z-20 px-0 sm:px-6 lg:px-10 pb-0 sm:pb-2">
        <div className="max-w-5xl mx-auto flex flex-row items-center gap-4">

          {/* Robot Character — walks when idle, stops when talking */}
          <div
            style={{
              animation: isTalking ? 'none' : 'robot-patrol 4s linear infinite',
              willChange: 'transform',
              transform: 'translateZ(0)'
            }}
            className="shrink-0 relative hidden sm:block"
          >
            <img
              src="/assets/game/robotnpc.svg"
              alt="Robot NPC Guide"
              loading="lazy"
              className="w-24 sm:w-32 h-auto object-contain drop-shadow-[0_0_20px_rgba(78,230,216,0.4)]"
            />

            {/* Mouth overlay — on the face area below eyes */}
            <div className="absolute left-1/2 -translate-x-1/2" style={{ top: '47%', width: '10%', marginLeft: 7 }}>
              {isTalking ? (
                <div
                  style={{
                    animation: 'robot-talk 0.35s infinite',
                    willChange: 'transform, opacity',
                    borderRadius: '1px'
                  }}
                  className="w-full h-1 sm:h-1.5 bg-[#4ee6d8] shadow-[0_0_6px_rgba(78,230,216,0.8)] origin-bottom"
                />
              ) : (
                <div className="w-full h-[2px] bg-[#4ee6d8]/50" style={{ borderRadius: '1px' }} />
              )}
            </div>

            {/* Glow under robot */}
            <div className="w-24 sm:w-32 h-2 mx-auto bg-[#4ee6d8]/20 blur-lg rounded-full" />
          </div>

          {/* Speech Bubble — aligned center with robot */}
          <div className="flex-1 relative w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={robotMessage}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="bg-[#12182a]/95 sm:bg-[#12182a]/90 border-t-2 sm:border-2 border-[#4ee6d8] px-4 py-2.5 shadow-[0_-4px_10px_rgba(0,0,0,0.3)] sm:shadow-[3px_3px_0px_#000]"
              >
                {/* Arrow pointing left to robot */}
                <div className="absolute top-1/2 left-0 -translate-x-[7px] -translate-y-1/2 w-3 h-3 bg-[#12182a] border-b-2 border-l-2 border-[#4ee6d8] rotate-45" />

                <div className="flex items-center gap-1.5 mb-1">
                  <span className={`w-1.5 h-1.5 rounded-full ${isTalking ? 'bg-[#4ee6d8]' : 'bg-amber-400'} animate-pulse`} />
                  <span className={`text-[9px] sm:text-[10px] font-pixel font-bold ${isTalking ? 'text-[#4ee6d8]' : 'text-amber-400'}`}>
                    {robotLabel}
                  </span>
                </div>
                <p className="text-[10px] sm:text-[11px] text-[#CBD5E1] font-sans leading-relaxed">
                  {robotMessage}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* ===== BOTTOM STATUS BAR ===== */}
      <div className="relative z-10 hidden sm:flex items-center justify-between px-4 sm:px-6 py-1.5 text-[10px] text-[#94A3B8]/70 border-t border-[#4ee6d8]/10">
        <span className="text-[#4ee6d8] font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">SKILL INVENTORY</span>
        <span className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">BAGUS SUPRIYANTO • PORTFOLIO</span>
      </div>
    </section>
  );
});

TechSection.displayName = "TechSection";
