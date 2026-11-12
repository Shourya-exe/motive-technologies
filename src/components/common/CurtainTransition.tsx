'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export const CurtainTransition: React.FC = () => {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [prevPath, setPrevPath] = useState(pathname);
  const [curtainStage, setCurtainStage] = useState<'idle' | 'down' | 'exit'>('idle');

  useEffect(() => {
    if (pathname !== prevPath) {
      setPrevPath(pathname);
      // Trigger Curtain Down
      setCurtainStage('down');
      setIsTransitioning(true);

      // Brief hold in the center, then drop away / slide up
      const holdTimer = setTimeout(() => {
        setCurtainStage('exit');
      }, 420);

      const finishTimer = setTimeout(() => {
        setCurtainStage('idle');
        setIsTransitioning(false);
      }, 850);

      return () => {
        clearTimeout(holdTimer);
        clearTimeout(finishTimer);
      };
    }
  }, [pathname, prevPath]);

  if (!isTransitioning && curtainStage === 'idle') return null;

  return (
    <div
      className="fixed inset-0 z-[100] pointer-events-none flex flex-col"
      aria-hidden="true"
    >
      {/* Upper Architectural Curtain Layer */}
      <div
        className={`w-full h-full bg-motive-dark flex flex-col items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          curtainStage === 'down'
            ? 'translate-y-0 opacity-100'
            : curtainStage === 'exit'
            ? 'translate-y-full opacity-90'
            : '-translate-y-full opacity-0'
        }`}
      >
        {/* Subtle grid on curtain */}
        <div className="absolute inset-0 grid-bg-dark opacity-30" />

        {/* Central Monogram and Telemetry */}
        <div className="relative z-10 flex flex-col items-center space-y-4">
          <div className="relative w-12 h-12 bg-white text-black font-mono font-bold text-xl flex items-center justify-center rounded">
            <span>M</span>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-motive-red animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-motive-red" />
          </div>

          <div className="text-center space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 font-semibold block">
              MOTIVE TECHNOLOGIES
            </span>
            <span className="font-mono text-[10px] text-motive-red tracking-wider block">
              INNOVATE &bull; AUTOMATE &bull; TRANSFORM
            </span>
          </div>

          <div className="w-24 h-0.5 bg-zinc-800 overflow-hidden rounded-full">
            <div className="w-full h-full bg-motive-red animate-pulse" />
          </div>
        </div>

        {/* Bottom edge red laser line */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-motive-red shadow-[0_0_12px_#ED1C2E]" />
      </div>
    </div>
  );
};
