"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FileText, Monitor, CheckCircle2, Sparkles } from 'lucide-react';
import { FEATURED_PROJECTS } from '@/lib/constants';
import { Project } from '@/types';
import { ProjectDrawer } from '@/components/ui/project-drawer';
import { GameFrame } from '@/components/ui/game-frame';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpenCaseStudy = (project: Project) => {
    setSelectedProject(project);
    setIsDrawerOpen(true);
  };

  return (
    <GameFrame
      id="projects"
      sectionNumber="3. PROJECT PREVIEW"
      title="PROJECT PREVIEW"
      subtitle="FEATURED PRODUCTION BUILDS"
    >
      {/* Section 4 Project Detail Modal */}
      <ProjectDrawer
        project={selectedProject}
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />

      <div className="space-y-10">
        {FEATURED_PROJECTS.map((project, idx) => {
          const isEven = idx % 2 === 1;

          return (
            <motion.div
              key={project.id}
              id={`location-${project.id === 'pt-surya-mitra-service' ? 'surya-mitra' : project.id === 'smartcafe-pos' ? 'smartcafe' : 'invoice'}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="p-6 bg-[#0a0e17] border-3 border-[#4ee6d8] space-y-6 shadow-[5px_5px_0px_#000] hover:shadow-[0_0_25px_rgba(78,230,216,0.4)] transition-all scroll-mt-24 min-h-[380px] flex flex-col justify-between"
            >
              {/* Top Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-[#4ee6d8]/40 pb-3">
                <div className="space-y-1">
                  <span className="text-xs text-[#4ee6d8] uppercase font-bold tracking-wider">
                    PROJECT 0{idx + 1} // {project.category}
                  </span>
                  <h3 className="font-pixel text-xl sm:text-2xl text-[#F8FAFC]">
                    {project.title}
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleOpenCaseStudy(project)}
                    className="pixel-btn px-4 py-2.5 text-xs font-bold flex items-center gap-2"
                  >
                    <FileText className="w-4 h-4" />
                    <span>ENTER DETAILS ▶</span>
                  </button>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-[#12182a] text-[#4ee6d8] border border-[#4ee6d8] hover:bg-[#4ee6d8] hover:text-[#0a0e17] transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* ALTERNATING VISUAL Z-PATTERN LAYOUT (Even: Image Left, Odd: Image Right) matching Brief */}
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Image Monitor Showcase Column */}
                <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="p-2.5 bg-[#12182a] border-2 border-[#4ee6d8] shadow-[4px_4px_0px_#000] relative group">
                    
                    {/* Monitor Top Bar */}
                    <div className="flex items-center justify-between bg-[#0a0e17] px-3 py-1.5 border-b border-[#4ee6d8] text-[10px] text-[#4ee6d8]">
                      <div className="flex items-center gap-2">
                        <Monitor className="w-3.5 h-3.5 text-[#4ee6d8]" />
                        <span>REAL APPLICATION UI PREVIEW</span>
                      </div>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    </div>

                    {/* Image Container with Skeleton Fallback */}
                    <div className="relative aspect-[16/10] bg-[#0a0e17] overflow-hidden border border-[#4ee6d8]/50 mt-1.5">
                      
                      {/* Real Image */}
                      <img
                        src={project.mockupPath || `/assets/projects/${project.id}-preview.jpg`}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />

                      {/* Crisp Structured Skeleton & Fallback State */}
                      <div className="absolute inset-0 bg-[#0a0e17] p-6 flex flex-col justify-between text-[#F8FAFC]">
                        <div className="flex items-center justify-between border-b border-[#4ee6d8] pb-3">
                          <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-[#4ee6d8]" />
                            <span className="font-pixel text-base text-[#F8FAFC]">{project.title}</span>
                          </div>
                          <span className="text-xs text-[#4ee6d8] bg-[#12182a] px-2 py-0.5 border border-[#4ee6d8]">
                            {project.category}
                          </span>
                        </div>

                        <div className="space-y-2">
                          <div className="text-xs text-[#CBD5E1] font-sans font-medium leading-relaxed">
                            "{project.outcome}"
                          </div>
                          <div className="flex items-center gap-2 text-[10px] text-emerald-400">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>PRODUCTION SYSTEM VERIFIED</span>
                          </div>
                        </div>

                        <div className="text-[10px] text-[#4ee6d8] pt-2 border-t border-[#4ee6d8]/30">
                          CLICK ENTER DETAILS TO READ COMPLETE CASE STUDY
                        </div>
                      </div>

                    </div>

                  </div>
                </div>

                {/* Text Info Column */}
                <div className={`lg:col-span-5 space-y-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  
                  {/* Summary with Elevated WCAG AA Contrast (#CBD5E1) */}
                  <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed font-sans font-medium">
                    {project.summary}
                  </p>

                  {/* Impact Highlight */}
                  <div className="p-3 bg-[#12182a] border border-[#4ee6d8] text-xs text-[#4ee6d8] font-bold">
                    <span>IMPACT: {project.outcome}</span>
                  </div>

                  {/* Tech Badges */}
                  <div className="space-y-2">
                    <div className="text-[10px] text-[#4ee6d8] uppercase font-bold">TECH STACK ENGINE</div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="px-2.5 py-1 bg-[#12182a] text-[#4ee6d8] border border-[#4ee6d8] text-[11px] font-mono font-bold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

            </motion.div>
          );
        })}
      </div>
    </GameFrame>
  );
};
