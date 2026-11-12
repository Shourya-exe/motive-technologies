'use client';

import React from 'react';

export const KineticTicker: React.FC = () => {
  const tickerItems = [
    'SUB-SECOND FIRST CONTENTFUL PAINT',
    'AUTONOMOUS AI REASONING PIPELINES',
    'WHATSAPP CLOUD API AUTOMATION',
    'TYPE-SAFE NEXT.JS 15 ARCHITECTURE',
    '100% CRAWL-HEALTHY TECHNICAL SEO',
    'DETERMINISTIC BUSINESS LOGIC',
    'OFFLINE-FIRST MOBILE CACHING',
    'INNOVATE. AUTOMATE. TRANSFORM.',
  ];

  return (
    <div className="relative w-full bg-motive-dark text-white py-3.5 border-y border-motive-darkborder overflow-hidden select-none">
      <div className="flex w-max animate-ticker">
        {/* Doubled for seamless infinite looping */}
        {[...tickerItems, ...tickerItems].map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 px-6 font-mono text-xs tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-motive-red shrink-0" />
            <span className="text-zinc-300 font-semibold hover:text-white transition-colors">
              {item}
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-ticker {
          display: flex;
          animation: ticker 35s linear infinite;
        }
        .animate-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};
