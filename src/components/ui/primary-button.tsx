"use client";

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PrimaryButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
  className?: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  icon,
  href,
  className,
  ...props
}) => {
  const content = (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white",
        "bg-orange-600 hover:bg-orange-500 border-2 border-orange-400/40",
        "shadow-[3px_3px_0px_rgba(234,88,12,0.4)] hover:shadow-[4px_4px_0px_rgba(234,88,12,0.6)]",
        "transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-[#0A0A0A]",
        className
      )}
      {...props}
    >
      <span>{children}</span>
      {icon && <span className="transition-transform duration-200 group-hover:translate-x-1">{icon}</span>}
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} className="inline-block group focus:outline-none">
        {content}
      </a>
    );
  }

  return content;
};
