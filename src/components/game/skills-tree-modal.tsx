"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Cpu, Database, Layout, Bot, CheckCircle2, ShieldAlert } from 'lucide-react';
import { audioManager } from '@/lib/audio-manager';

interface SkillsTreeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SkillNode {
  id: string;
  category: string;
  level: string;
  icon: React.ReactNode;
  skills: string[];
  description: string;
}

export const SkillsTreeModal: React.FC<SkillsTreeModalProps> = ({ isOpen, onClose }) => {
  const [selectedNode, setSelectedNode] = useState<string>('frontend');

  const nodes: SkillNode[] = [
    {
      id: 'frontend',
      category: 'WORLD 3 // FRONTEND NODE',
      level: 'LV.MAX • MASTERED',
      icon: <Layout className="w-6 h-6 text-[#45D3B2]" />,
      skills: ['Next.js 16 (App Router)', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion & GSAP'],
      description: 'Mastered production frontend architectures, high-performance UI components, smooth motion design, and responsive design systems.'
    },
    {
      id: 'backend',
      category: 'WORLD 3 // BACKEND NODE',
      level: 'LV.85 • ADVANCED',
      icon: <Cpu className="w-6 h-6 text-[#45D3B2]" />,
      skills: ['Node.js & Express', 'Supabase BaaS', 'RESTful API Architecture', 'Authentication & JWT', 'Server Actions'],
      description: 'Building secure server infrastructure, serverless functions, authentication pipelines, and fast API integration.'
    },
    {
      id: 'database',
      category: 'WORLD 3 // DATABASE NODE',
      level: 'LV.80 • ADVANCED',
      icon: <Database className="w-6 h-6 text-[#45D3B2]" />,
      skills: ['PostgreSQL', 'Supabase DB', 'Prisma ORM', 'Relational Schema Design', 'Query Optimization'],
      description: 'Designing structured relational database schemas, index optimization, real-time subscriptions, and data integrity.'
    },
    {
      id: 'ai-workflow',
      category: 'WORLD 3 // AI WORKFLOW NODE',
      level: 'LV.90 • EXPERT',
      icon: <Bot className="w-6 h-6 text-[#45D3B2]" />,
      skills: ['AI-Assisted Coding (Gemini / Antigravity)', 'LLM API Integration', 'Prompt Engineering', 'AI Automation Pipelines'],
      description: 'Leveraging cutting-edge AI coding agents and LLM APIs to accelerate development velocity by 3x with maximum accuracy.'
    }
  ];

  const handleSelect = (id: string) => {
    audioManager.playClickSound();
    setSelectedNode(id);
  };

  if (!isOpen) return null;

  const activeNode = nodes.find((n) => n.id === selectedNode) || nodes[0];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto font-silkscreen">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#05131A]/90 backdrop-blur-md"
        />

        {/* Upgrade Tree RPG Dialog Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-[#0A1E29] border-4 border-[#1B4557] shadow-[6px_6px_0px_#000] rounded-2xl p-6 sm:p-8 space-y-6 z-10 my-auto text-[#F8FAFC]"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b-2 border-[#1B4557] pb-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#45D3B2]" />
              <span className="font-pixel text-sm sm:text-base text-[#45D3B2]">
                WORLD 3 — SKILLS UPGRADE TREE
              </span>
            </div>

            <button
              onClick={() => {
                audioManager.playClickSound();
                onClose();
              }}
              className="pixel-btn px-3 py-1.5 text-xs flex items-center gap-1 bg-red-600 border-red-400 text-white"
            >
              <X className="w-4 h-4" />
              <span>CLOSE</span>
            </button>
          </div>

          {/* Upgrade Tree Nodes Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {nodes.map((node) => {
              const isSelected = node.id === selectedNode;

              return (
                <button
                  key={node.id}
                  onClick={() => handleSelect(node.id)}
                  className={`p-4 rounded-xl border-2 text-left transition-all space-y-2 focus:outline-none shadow-[3px_3px_0px_#000] ${
                    isSelected
                      ? 'bg-[#45D3B2] text-[#05131A] border-white scale-105'
                      : 'bg-[#05131A] text-[#F8FAFC] border-[#1B4557] hover:border-[#45D3B2]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className={isSelected ? 'text-[#05131A]' : 'text-[#45D3B2]'}>
                      {node.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase">{node.id}</span>
                  </div>
                  <div className="font-bold text-xs capitalize truncate">
                    {node.id.replace('-', ' ')}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Node Attribute Detail Panel */}
          <div className="p-6 bg-[#05131A] border-2 border-[#45D3B2] rounded-xl space-y-4 shadow-[4px_4px_0px_#000]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#1B4557] pb-3">
              <div>
                <div className="text-[10px] text-[#45D3B2] font-bold">{activeNode.category}</div>
                <div className="font-pixel text-lg text-white">{activeNode.id.toUpperCase()} MASTERY</div>
              </div>
              <span className="px-3 py-1 bg-[#45D3B2] text-[#05131A] text-xs font-bold rounded">
                {activeNode.level}
              </span>
            </div>

            <p className="text-xs text-[#94A3B8] font-sans font-medium leading-relaxed">
              {activeNode.description}
            </p>

            <div className="space-y-2">
              <div className="text-xs text-[#45D3B2] font-bold">UNLOCKED ABILITIES & TECH STACK:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeNode.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2 p-2 rounded bg-[#0A1E29] border border-[#1B4557] text-xs text-[#F8FAFC]">
                    <CheckCircle2 className="w-4 h-4 text-[#45D3B2] shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
