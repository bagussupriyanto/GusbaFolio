"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Command, Search, ArrowRight, User, FolderGit2, Wrench, Compass, Mail, X } from 'lucide-react';
import { useLenis } from '@/components/providers/lenis-provider';

export const CommandPalette: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const lenis = useLenis();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      lenis?.stop();
    } else {
      document.body.style.overflow = 'unset';
      lenis?.start();
    }
    return () => {
      document.body.style.overflow = 'unset';
      lenis?.start();
    };
  }, [isOpen, lenis]);

  const commands = [
    { label: "Go to Hero Section", sectionId: "hero", icon: <ArrowRight className="w-4 h-4 text-orange-400" /> },
    { label: "Go to Philosophy & Capabilities", sectionId: "value", icon: <Wrench className="w-4 h-4 text-orange-400" /> },
    { label: "Go to About Bagus", sectionId: "about", icon: <User className="w-4 h-4 text-orange-400" /> },
    { label: "Go to Selected Works", sectionId: "projects", icon: <FolderGit2 className="w-4 h-4 text-orange-400" /> },
    { label: "Go to Engineering Workflow", sectionId: "stack", icon: <Wrench className="w-4 h-4 text-orange-400" /> },
    { label: "Go to Career Milestones", sectionId: "journey", icon: <Compass className="w-4 h-4 text-orange-400" /> },
    { label: "Go to Contact Section", sectionId: "contact", icon: <Mail className="w-4 h-4 text-orange-400" /> },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelectCommand = (sectionId: string) => {
    setIsOpen(false);
    setQuery('');
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dark Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md"
          />

          {/* Raycast Command Palette Dialog */}
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 pointer-events-none">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: -10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-xl bg-white dark:bg-[#141414] border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden pointer-events-auto transition-colors duration-300"
            >
              {/* Command Palette Search Input Bar */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-200 dark:border-white/[0.08] bg-slate-100 dark:bg-[#111111]">
                <Search className="w-4 h-4 text-slate-500 dark:text-slate-400 shrink-0" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Type a command or search section..."
                  className="w-full bg-transparent text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none font-mono"
                  autoFocus
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  aria-label="Close Command Palette"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Command Items List */}
              <div
                data-lenis-prevent
                style={{ overscrollBehavior: 'contain' }}
                className="p-2 max-h-72 overflow-y-auto space-y-1"
              >
                {filteredCommands.length > 0 ? (
                  filteredCommands.map((cmd) => (
                    <button
                      key={cmd.sectionId}
                      onClick={() => handleSelectCommand(cmd.sectionId)}
                      className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-white/[0.05] text-left text-xs font-medium text-slate-800 dark:text-slate-200 transition-colors group"
                    >
                      <div className="flex items-center gap-2.5">
                        {cmd.icon}
                        <span>{cmd.label}</span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 group-hover:text-orange-500">
                        Jump to section →
                      </span>
                    </button>
                  ))
                ) : (
                  <div className="p-4 text-center text-xs font-mono text-slate-500 dark:text-slate-400">
                    No matching commands found for "{query}"
                  </div>
                )}
              </div>

              {/* Footer Bar */}
              <div className="px-4 py-2 border-t border-slate-200 dark:border-white/[0.08] bg-slate-100 dark:bg-[#111111] flex items-center justify-between text-[11px] font-mono text-slate-600 dark:text-slate-500">
                <div className="flex items-center gap-1.5">
                  <Command className="w-3 h-3 text-orange-500" />
                  <span>Raycast Navigation Menu</span>
                </div>
                <span>ESC to close</span>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
