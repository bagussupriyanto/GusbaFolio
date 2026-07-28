"use client";

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SecondaryButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
  className?: string;
}

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children,
  icon,
  href,
  className,
  ...props
}) => {
  const content = (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-slate-100",
        "bg-white/[0.05] hover:bg-white/[0.1] border-2 border-white/15 hover:border-white/25",
        "shadow-[3px_3px_0px_rgba(255,255,255,0.06)] hover:shadow-[4px_4px_0px_rgba(255,255,255,0.1)]",
        "backdrop-blur-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-[#0A0A0A]",
        className
      )}
      {...props}
    >
      <span>{children}</span>
      {icon && <span>{icon}</span>}
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} className="inline-block focus:outline-none">
        {content}
      </a>
    );
  }

  return content;
};
