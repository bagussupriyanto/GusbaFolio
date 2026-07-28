"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className, hoverEffect = true }) => {
  return (
    <div className={cn(
      "relative overflow-hidden rounded-xl bg-[#141414] border-2 border-white/[0.12]",
      "shadow-[4px_4px_0px_rgba(249,115,22,0.15)] transition-all duration-300 ease-out",
      hoverEffect && "hover:border-white/[0.18] hover:-translate-y-1 hover:translate-x-[-1px] hover:shadow-[6px_6px_0px_rgba(249,115,22,0.25)]",
      className
    )}>
      {children}
    </div>
  );
};
