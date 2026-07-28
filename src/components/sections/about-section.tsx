"use client";

import React, { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, GraduationCap, Laptop, Award, Mail, Code, Download } from 'lucide-react';

export const AboutSection: React.FC = memo(() => {
  const [photoZoomOpen, setPhotoZoomOpen] = useState(false);

  return (
    <section
      id="about"
      className="relative h-screen h-[100dvh] w-full flex flex-col bg-[#0a0e17] font-silkscreen overflow-hidden text-[#F8FAFC] z-10"
    >
      {/* ===== FULL-BLEED CABIN BACKGROUND ===== */}
      <div className="absolute inset-0">
        <img src="/assets/game/about-cabin-bg.jpg" alt="Pixel Art Wooden Cabin Studio" loading="lazy" className="w-full h-full object-cover" />
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#0a0e17] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0a0e17] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#0a0e17]/40 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#0a0e17]/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-l from-[#0a0e17]/85 via-[#0a0e17]/40 to-transparent pointer-events-none" />
      </div>

      {/* ===== ANIMATED FIREFLIES ===== */}
      <style>{`
        @keyframes firefly-anim {
          0%, 100% { opacity: 0; transform: translate3d(0, 0, 0); }
          33% { opacity: 0.8; transform: translate3d(4px, -8px, 0); }
          66% { opacity: 0.8; transform: translate3d(-4px, -4px, 0); }
        }
      `}</style>
      <div className="absolute inset-0 pointer-events-none z-[3]">
        {[
          { x: '15%', y: '30%', d: 0 }, { x: '25%', y: '50%', d: 1.5 },
          { x: '35%', y: '25%', d: 0.8 }, { x: '10%', y: '60%', d: 2 },
          { x: '40%', y: '40%', d: 1 }, { x: '20%', y: '70%', d: 2.5 },
        ].map((f, i) => (
          <div
            key={`firefly-${i}`}
            style={{ 
              left: f.x, 
              top: f.y,
              animation: `firefly-anim ${3 + i * 0.3}s ease-in-out ${f.d}s infinite`,
              willChange: 'transform, opacity'
            }}
            className="absolute w-1.5 h-1.5 rounded-full bg-amber-300 shadow-[0_0_6px_rgba(251,191,36,0.8)]"
          />
        ))}
      </div>

      {/* ===== TOP LABEL BAR ===== */}
      <div className="relative z-10 flex items-center justify-between px-4 sm:px-6 pt-16 sm:pt-20 pb-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#4ee6d8] animate-pulse" />
          <span className="text-xs sm:text-sm text-[#4ee6d8] font-bold tracking-widest uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            2. ABOUT ME
          </span>
        </div>
        <div className="text-[10px] sm:text-xs text-[#94A3B8] font-mono drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          KEPULAUAN RIAU
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="relative z-10 flex-1 flex items-center justify-end px-4 sm:px-8 lg:px-16 overflow-y-auto scrollbar-hide">
        <div className="w-full max-w-lg lg:max-w-2xl space-y-3">

          {/* Profile Header — Photo + Name */}
          <div className="flex items-center gap-4">
            <div className="shrink-0">
              <div
                onClick={() => setPhotoZoomOpen(true)}
                className="w-20 h-20 sm:w-24 sm:h-24 border-2 border-[#4ee6d8] shadow-[0_0_20px_rgba(78,230,216,0.3)] overflow-hidden bg-[#0a0e17] cursor-pointer hover:scale-105 hover:border-white transition-all group relative"
                title="Klik untuk memperbesar foto"
              >
                <img
                  src="/assets/profile-photo.jpg"
                  alt="Bagus Supriyanto"
                  loading="lazy"
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                  className="w-full h-full object-cover select-none pointer-events-none"
                />
                <div className="absolute inset-0 bg-[#0a0e17]/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-[9px] text-[#4ee6d8] font-bold font-pixel transition-opacity">
                  <span className="text-base">🔍</span>
                  <span>ZOOM</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-pixel text-xl sm:text-2xl lg:text-3xl text-[#4ee6d8] drop-shadow-[0_0_20px_rgba(78,230,216,0.4)]">
                BAGUS SUPRIYANTO
              </h2>
              <div className="text-[10px] sm:text-xs text-amber-400 font-bold mt-1">
                Product-Focused Frontend Engineer
              </div>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[9px] text-emerald-400 font-sans">Available for Fulltime & Remote Roles</span>
              </div>
            </div>
          </div>

          {/* Profile Summary */}
          <div className="p-3.5 bg-[#0a0e17]/75 border border-[#4ee6d8]/20 space-y-2">
            <div className="flex items-center gap-2 mb-1">
              <Code className="w-3.5 h-3.5 text-[#4ee6d8]" />
              <span className="text-[9px] text-[#4ee6d8] font-bold uppercase tracking-wider">PROFIL</span>
            </div>
            <p className="text-[10px] sm:text-[11px] text-[#CBD5E1] font-sans leading-relaxed">
              Lulusan <span className="text-sky-400 font-semibold">Universitas Teknologi Yogyakarta</span> jurusan Teknologi Informatika 
              dengan pengalaman kerja di bidang <span className="text-amber-400 font-semibold">Instrument Control</span>, 
              <span className="text-amber-400 font-semibold"> Operator Produksi WVC</span>, dan 
              <span className="text-amber-400 font-semibold"> Washing Boats & Yacht</span>. 
              Terbiasa bekerja sesuai SOP dan K3, mudah beradaptasi, dan sekarang fokus penuh 
              mengembangkan kompetensi di bidang IT sebagai frontend engineer.
            </p>
          </div>

          {/* Info Cards 2x2 */}
          <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
            <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2.5 bg-[#0a0e17]/70 border border-[#4ee6d8]/30">
              <div className="p-1.5 bg-[#4ee6d8]/20 border border-[#4ee6d8] text-[#4ee6d8] shrink-0">
                <MapPin className="w-3 h-3" />
              </div>
              <div className="min-w-0">
                <div className="text-[8px] text-[#4ee6d8] font-bold uppercase">LOKASI</div>
                <div className="text-[9px] sm:text-[10px] text-[#CBD5E1] font-sans truncate">Tanjung Uban, Kepulauan Riau</div>
              </div>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2.5 bg-[#0a0e17]/70 border border-sky-400/30">
              <div className="p-1.5 bg-sky-500/20 border border-sky-400 text-sky-400 shrink-0">
                <GraduationCap className="w-3 h-3" />
              </div>
              <div className="min-w-0">
                <div className="text-[8px] text-sky-400 font-bold uppercase">PENDIDIKAN</div>
                <div className="text-[9px] sm:text-[10px] text-[#CBD5E1] font-sans truncate">S1 Technology Information — UTY 2024</div>
              </div>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2.5 bg-[#0a0e17]/70 border border-amber-400/30">
              <div className="p-1.5 bg-amber-500/20 border border-amber-400 text-amber-400 shrink-0">
                <Award className="w-3 h-3" />
              </div>
              <div className="min-w-0">
                <div className="text-[8px] text-amber-400 font-bold uppercase">SERTIFIKASI</div>
                <div className="text-[9px] sm:text-[10px] text-[#CBD5E1] font-sans truncate">Microsoft Specialist — Certiport</div>
              </div>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2.5 bg-[#0a0e17]/70 border border-purple-400/30">
              <div className="p-1.5 bg-purple-500/20 border border-purple-400 text-purple-400 shrink-0">
                <Laptop className="w-3 h-3" />
              </div>
              <div className="min-w-0">
                <div className="text-[8px] text-purple-400 font-bold uppercase">SKRIPSI</div>
                <div className="text-[9px] sm:text-[10px] text-[#CBD5E1] font-sans truncate">Enkripsi dan Deskripsi Data Metode DES</div>
              </div>
            </div>
          </div>

          {/* Download CV + Contact */}
          <div className="flex items-center gap-2">
            <a
              href="/assets/cv-bagus-supriyanto.pdf.pdf"
              download
              className="pixel-btn flex-1 px-3 py-2.5 text-[10px] sm:text-[11px] flex items-center justify-center gap-2 cursor-pointer"
            >
              📄 DOWNLOAD CV
              <Download className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('navigateTo', { detail: 4 }))}
              className="pixel-btn px-4 py-2.5 text-[10px] sm:text-[11px] flex items-center gap-1.5 cursor-pointer bg-[#0a0e17] border-[#4ee6d8] text-[#4ee6d8]"
            >
              <Mail className="w-3.5 h-3.5" />
              CONTACT
            </button>
          </div>

          {/* Key Highlights */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 p-2 bg-[#0a0e17]/50 border border-[#4ee6d8]/10 text-[9px] text-[#94A3B8] font-mono">
            <span className="text-[#4ee6d8]">📍</span>
            <span>KEPULAUAN RIAU, ID</span>
            <span>•</span>
            <span className="text-emerald-400">🟢</span>
            <span>OPEN TO WORK</span>
            <span>•</span>
            <span className="text-purple-400">🎬</span>
            <span className="text-purple-300 font-bold">AI VIDEO CREATOR</span>
            <span>•</span>
            <span>FULLTIME / REMOTE / FREELANCE</span>
          </div>

        </div>
      </div>



      {/* ===== BOTTOM STATUS BAR ===== */}
      <div className="relative z-10 flex items-center justify-between px-4 sm:px-6 py-2 text-[10px] text-[#94A3B8]/70">
        <span className="text-[#4ee6d8] font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">ABOUT ME</span>
        <span className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">BAGUS SUPRIYANTO • PORTFOLIO</span>
      </div>

      {/* ===== ENLARGED PHOTO MODAL ===== */}
      <AnimatePresence>
        {photoZoomOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 cursor-pointer"
            onClick={() => setPhotoZoomOpen(false)}
            onContextMenu={(e) => e.preventDefault()}
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              className="relative p-3 bg-[#0a0e17] border-2 border-[#4ee6d8] shadow-[0_0_50px_rgba(78,230,216,0.4)] max-w-sm sm:max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Photo Frame with Shield Overlay against Right-Click / Save / Drag */}
              <div className="relative aspect-square w-full bg-[#0a0e17] border border-[#4ee6d8]/40 overflow-hidden select-none">
                <img
                  src="/assets/profile-photo.jpg"
                  alt="Bagus Supriyanto Profile Photo"
                  loading="lazy"
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                  className="w-full h-full object-cover select-none pointer-events-none"
                />
                {/* Transparent overlay blocking touch hold / right click / dragging */}
                <div
                  className="absolute inset-0 bg-transparent cursor-default"
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                />
              </div>

              {/* Modal Footer */}
              <div className="mt-3 flex items-center justify-between px-1">
                <div>
                  <div className="font-pixel text-xs text-[#4ee6d8]">BAGUS SUPRIYANTO</div>
                  <div className="text-[9px] text-[#94A3B8] font-sans">🔒 Photo Protected • View Only</div>
                </div>
                <button
                  onClick={() => setPhotoZoomOpen(false)}
                  className="px-3 py-1.5 bg-[#4ee6d8]/20 border border-[#4ee6d8] text-[#4ee6d8] font-pixel text-[9px] font-bold hover:bg-[#4ee6d8] hover:text-[#0a0e17] transition-colors cursor-pointer"
                >
                  TUTUP ✕
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
});
