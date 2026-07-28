"use client";

import React from 'react';
import { Globe, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MacOSFrameProps {
  url?: string;
  children: React.ReactNode;
  className?: string;
}

export const MacOSFrame: React.FC<MacOSFrameProps> = ({
  url = "https://bagus.dev/project",
  children,
  className,
}) => {
  return (
    <div className={cn("rounded-xl overflow-hidden border border-white/10 bg-[#131924] shadow-2xl", className)}>
      {/* Top Chrome Bar */}
      <div className="flex items-center justify-between px-2.5 sm:px-4 py-1.5 sm:py-2.5 bg-[#0F141F] border-b border-white/[0.08]">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5F56] inline-block" />
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FFBD2E] inline-block" />
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27C93F] inline-block" />
        </div>

        <div className="flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-0.5 sm:py-1 rounded bg-white/[0.04] border border-white/[0.06] text-[9px] sm:text-[11px] font-mono text-slate-300 max-w-[160px] sm:max-w-xs truncate">
          <Lock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-400 shrink-0" />
          <span className="truncate">{url}</span>
        </div>

        <div className="w-8 sm:w-12 flex justify-end">
          <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-500" />
        </div>
      </div>

      {/* Frame Body Content */}
      <div className="relative">
        {children}
      </div>
    </div>
  );
};
