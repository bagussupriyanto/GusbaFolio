"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Github, Linkedin, Copy, Check } from 'lucide-react';
import { DEVELOPER_DATA } from '@/lib/constants';

export const SlideContact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DEVELOPER_DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen lg:h-screen snap-start snap-always flex flex-col justify-between px-6 sm:px-12 lg:px-20 py-20 sm:py-24 bg-slate-50 dark:bg-[#0A0A0A] text-slate-900 dark:text-slate-100 transition-colors duration-300 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-orange-500/15 rounded-full blur-[160px] pointer-events-none" />

      {/* Slide Index Header */}
      <div className="text-xs font-mono font-bold tracking-widest text-slate-700 dark:text-slate-400 uppercase z-10">
        06 / GET IN TOUCH
      </div>

      {/* Presentation Content */}
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.35 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-4xl mx-auto my-auto text-center space-y-10 z-10"
      >
        
        <div className="space-y-4">
          <span className="px-4 py-1.5 rounded-full text-xs font-mono bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 font-bold inline-block">
            AVAILABLE FOR OPPORTUNITIES
          </span>
          <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
            Let's build something together.
          </h2>
        </div>

        {/* 1-Click Copy Email Action Box */}
        <div className="max-w-md mx-auto p-4 rounded-2xl bg-white dark:bg-[#141414] border-2 border-slate-200 dark:border-white/10 shadow-lg flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 overflow-hidden">
            <Mail className="w-5 h-5 text-orange-500 shrink-0" />
            <span className="font-mono text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 truncate">
              {DEVELOPER_DATA.contact.email}
            </span>
          </div>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-display font-bold text-xs transition-all shadow-md shrink-0 focus:outline-none"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Direct Channel Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href={DEVELOPER_DATA.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border-2 border-emerald-500/30 text-emerald-700 dark:text-emerald-300 font-display font-bold text-sm transition-all shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-emerald-500" />
            <span>WhatsApp</span>
          </a>

          <a
            href="https://github.com/bagussupriyanto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white dark:bg-white/10 hover:bg-slate-100 dark:hover:bg-white/20 border-2 border-slate-200 dark:border-white/10 text-slate-900 dark:text-slate-100 font-display font-bold text-sm transition-all shadow-sm"
          >
            <Github className="w-4 h-4 text-slate-700 dark:text-slate-300" />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/bagus-supriyanto-18b32819b"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white dark:bg-white/10 hover:bg-slate-100 dark:hover:bg-white/20 border-2 border-slate-200 dark:border-white/10 text-slate-900 dark:text-slate-100 font-display font-bold text-sm transition-all shadow-sm"
          >
            <Linkedin className="w-4 h-4 text-orange-500" />
            <span>LinkedIn</span>
          </a>
        </div>

      </motion.div>

      {/* Bottom Footer */}
      <div className="flex items-center justify-between text-xs font-mono text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-white/10 pt-4 z-10">
        <span>© 2026 BAGUS SUPRIYANTO</span>
        <span>PRODUCT-FOCUSED FRONTEND ENGINEER</span>
      </div>
    </section>
  );
};
