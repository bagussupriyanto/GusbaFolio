"use client";

import React from 'react';
import { Heart, Coins, User } from 'lucide-react';

export const FixedHud: React.FC = () => {
  return (
    <div className="fixed top-4 right-4 z-40 flex items-center gap-3 bg-[#0a0e17]/90 backdrop-blur-md px-3.5 py-2 border-2 border-[#4ee6d8] shadow-[3px_3px_0px_#000] text-xs font-silkscreen text-[#F8FAFC]">
      {/* Hearts */}
      <div className="flex items-center gap-1 text-red-500">
        <Heart className="w-4 h-4 fill-red-500" />
        <Heart className="w-4 h-4 fill-red-500" />
        <Heart className="w-4 h-4 fill-red-500" />
      </div>

      <span className="text-slate-600 font-bold">|</span>

      {/* Gold Coins Counter */}
      <div className="flex items-center gap-1.5 text-amber-400 font-bold">
        <Coins className="w-4 h-4 text-amber-400" />
        <span>x 128</span>
      </div>

      <span className="text-slate-600 font-bold hidden sm:inline">|</span>

      {/* Level Indicator */}
      <div className="hidden sm:flex items-center gap-2">
        <span className="text-[#4ee6d8] font-bold">LV.01</span>
        <div className="w-16 h-2 bg-[#0a0e17] border border-[#4ee6d8] overflow-hidden">
          <div className="h-full bg-[#4ee6d8] w-[25%]" />
        </div>
      </div>
    </div>
  );
};
