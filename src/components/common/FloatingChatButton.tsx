'use client';

import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '@/data/siteData';

export const FloatingChatButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      aria-label="Direct consultation chat"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 select-none"
    >
      {/* Tooltip on hover / desktop */}
      <div
        className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 text-white text-xs font-medium shadow-lg transition-all duration-200 pointer-events-none ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-motive-red animate-pulse" />
        <span>Chat on WhatsApp</span>
      </div>

      {/* Floating circular button */}
      <a
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Motive Technologies on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-black text-white shadow-2xl hover:bg-zinc-900 hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white focus:outline-none focus:ring-4 focus:ring-zinc-400"
      >
        <MessageCircle className="w-6 h-6 stroke-[2.2] text-white transition-transform group-hover:scale-110" />
        
        {/* Pulse indicator badge - Red */}
        <span className="absolute top-0 right-0 flex h-3.5 w-3.5 -mt-0.5 -mr-0.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-motive-red border-2 border-white" />
        </span>
      </a>
    </aside>
  );
};
