'use client';

import React from 'react';

/**
 * Next.js App Router Template component.
 * Unlike layout.tsx which persists between navigations, template.tsx remounts on every
 * client-side route transition, triggering smooth, hardware-accelerated entrance animations
 * with 0 impact on main-thread blocking time or layout stability (CLS = 0).
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full flex-1 flex flex-col">
      {/* Micro accent beam that glides across the top viewport on route transitions */}
      <div
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none overflow-hidden"
      >
        <div className="h-full w-full bg-gradient-to-r from-transparent via-motive-red to-transparent animate-progress-glide" />
      </div>

      {/* GPU-composited page entrance fade and subtle slide */}
      <div className="animate-page-enter flex-1 flex flex-col w-full">
        {children}
      </div>
    </div>
  );
}
