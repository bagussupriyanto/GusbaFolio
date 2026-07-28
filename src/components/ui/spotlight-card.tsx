"use client";

import React, { useRef } from 'react';
import { cn } from '@/lib/utils';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({ children, className }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative overflow-hidden rounded-xl bg-white dark:bg-[#141414] border-2 border-slate-200 dark:border-white/[0.1]",
        "p-6 sm:p-8 transition-all duration-300 ease-out group hover:border-slate-300 dark:hover:border-white/[0.22] hover:shadow-[5px_5px_0px_rgba(255,107,0,0.18)] hover:-translate-y-1 hover:translate-x-[-1px]",
        "shadow-[3px_3px_0px_rgba(255,107,0,0.1)]",
        "before:pointer-events-none before:absolute before:-inset-px before:rounded-xl before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
        "before:bg-[radial-gradient(600px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(249,115,22,0.12),transparent_40%)]",
        className
      )}
    >
      {children}
    </div>
  );
};
