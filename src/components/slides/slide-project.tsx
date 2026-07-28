"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FileText } from 'lucide-react';
import { Project } from '@/types';
import { MacOSFrame } from '@/components/ui/macos-frame';

interface SlideProjectProps {
  slideNumber: string;
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export const SlideProject: React.FC<SlideProjectProps> = ({
  slideNumber,
  project,
  onOpenCaseStudy,
}) => {
  return (
    <section
      id={`project-${project.id}`}
      className="relative w-full min-h-screen lg:h-screen snap-start snap-always flex flex-col justify-between px-6 sm:px-12 lg:px-20 py-20 sm:py-24 bg-slate-50 dark:bg-[#0A0A0A] text-slate-900 dark:text-slate-100 transition-colors duration-300 overflow-hidden"
    >
      {/* Top Slide Header */}
      <div className="flex items-center justify-between text-xs font-mono font-bold tracking-widest text-slate-700 dark:text-slate-400 uppercase z-10">
        <span>{slideNumber} / FEATURED PRODUCT SHOWCASE</span>
        <span className="text-orange-500">{project.category}</span>
      </div>

      {/* Main Fullscreen Presentation Body */}
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-6xl mx-auto my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center z-10"
      >
        
        {/* Left Column: Minimal Storytelling */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 font-bold inline-block">
              PRODUCTION SYSTEM
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-slate-900 dark:text-slate-100 tracking-tight leading-[1.1]">
              {project.title}
            </h2>
          </div>

          <p className="font-sans text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            {project.summary}
          </p>

          {/* Minimal Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onOpenCaseStudy(project)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-display font-bold text-xs sm:text-sm tracking-wide shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none"
            >
              <FileText className="w-4 h-4" />
              <span>View Case Study</span>
            </button>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-200/80 hover:bg-slate-300 dark:bg-white/10 dark:hover:bg-white/20 text-slate-900 dark:text-slate-100 font-display font-bold text-xs sm:text-sm transition-all focus:outline-none border border-slate-300 dark:border-white/10"
              >
                <span>Live App</span>
                <ExternalLink className="w-4 h-4 text-orange-500" />
              </a>
            )}
          </div>
        </div>

        {/* Right Column: Dominant Full Visual Screenshot Frame */}
        <div className="lg:col-span-7">
          <MacOSFrame url={project.liveUrl || `https://bagus.dev/showcase/${project.id}`}>
            <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden group">
              <img
                src={project.mockupPath || `/assets/projects/${project.id}-preview.jpg`}
                alt={project.title}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              
              {/* Fallback Graphic UI Render when image is missing */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950 p-6 flex flex-col justify-between text-slate-100">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <div className="font-display font-extrabold text-xl text-white">{project.title}</div>
                    <div className="font-mono text-xs text-orange-400 mt-1">{project.category}</div>
                  </div>
                  <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 space-y-2">
                  <div className="font-mono text-xs text-slate-400 uppercase tracking-wider">Key Impact</div>
                  <p className="font-sans text-sm text-slate-200 font-medium">"{project.outcome}"</p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded text-xs font-mono bg-white/10 text-slate-200 border border-white/10 font-bold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </MacOSFrame>
        </div>

      </motion.div>

      {/* Bottom Footer Indicator */}
      <div className="flex items-center justify-between text-xs font-mono text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-white/10 pt-4 z-10">
        <span>NEXT SLIDE ↓</span>
        <span>BAGUS SUPRIYANTO SHOWCASE</span>
      </div>
    </section>
  );
};
