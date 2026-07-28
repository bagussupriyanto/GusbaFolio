"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface StatusBadgeProps {
  statusText: string;
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ statusText, className }) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium",
        "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 backdrop-blur-md",
        "transition-all duration-300 hover:border-emerald-500/40",
        className
      )}
      aria-label={`Status: ${statusText}`}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      <span>{statusText}</span>
    </div>
  );
};
