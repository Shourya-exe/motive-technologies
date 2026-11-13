'use client';

import React from 'react';
import { 
  Bot, 
  Smartphone, 
  Infinity as InfinityIcon, 
  Cpu, 
  DollarSign, 
  Code2, 
  Layers, 
  Sparkles, 
  TrendingUp, 
  CheckCircle2, 
  BarChart3, 
  Laptop,
  Terminal,
  ShieldCheck
} from 'lucide-react';

interface BlogThumbnailProps {
  theme: string;
  category?: string;
  badgeOverlay?: boolean;
  className?: string;
  aspectRatio?: 'featured' | 'sidebar' | 'grid';
}

export const BlogThumbnail: React.FC<BlogThumbnailProps> = ({
  theme,
  category,
  badgeOverlay = false,
  className = '',
  aspectRatio = 'grid',
}) => {
  return (
    <div 
      className={`relative w-full overflow-hidden rounded-2xl select-none flex items-center justify-center ${
        aspectRatio === 'featured' 
          ? 'aspect-[16/9] sm:aspect-[16/10]' 
          : aspectRatio === 'sidebar' 
          ? 'aspect-[16/10] w-28 sm:w-36 h-20 sm:h-24 shrink-0 rounded-xl' 
          : 'aspect-[16/10]'
      } ${className}`}
    >
      {/* 1. Theme: AI Robot & Mobile UI (Hero Large Card) */}
      {theme === 'ai-robot' && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#EDE8F5] via-[#E2D9F3] to-[#D5C6F0] flex items-center justify-between px-4 sm:px-8 overflow-hidden">
          {/* Decorative background grid and circles */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#7C3AED_1px,transparent_1px)] [background-size:16px_16px]" />
          
          {/* Left: Two Phone Mockups */}
          <div className="relative z-10 flex items-center -space-x-8 sm:-space-x-12 scale-90 sm:scale-100 origin-left">
            {/* Phone 1: Wallet UI */}
            <div className="w-28 sm:w-36 h-40 sm:h-52 bg-zinc-950 rounded-2xl p-2.5 sm:p-3 text-white shadow-2xl border-2 border-zinc-800 rotate-[-6deg] transform">
              <div className="w-8 h-1 bg-zinc-800 rounded-full mx-auto mb-2" />
              <div className="text-[7px] sm:text-[9px] text-zinc-400 font-mono">Wallet Balance</div>
              <div className="text-[10px] sm:text-xs font-bold text-white">$17,298.92</div>
              <div className="mt-2 grid grid-cols-2 gap-1 text-[7px] font-mono">
                <span className="p-1 rounded bg-purple-900/60 text-purple-200 text-center">Send</span>
                <span className="p-1 rounded bg-zinc-800 text-zinc-300 text-center">Request</span>
              </div>
              <div className="mt-3 space-y-1">
                <div className="h-1.5 w-12 bg-zinc-800 rounded" />
                <div className="h-1.5 w-16 bg-zinc-800 rounded" />
              </div>
            </div>

            {/* Phone 2: Analytics UI */}
            <div className="w-28 sm:w-36 h-40 sm:h-52 bg-zinc-900 rounded-2xl p-2.5 sm:p-3 text-white shadow-2xl border-2 border-zinc-700 rotate-[4deg] transform">
              <div className="w-8 h-1 bg-zinc-800 rounded-full mx-auto mb-2" />
              <div className="text-[7px] sm:text-[9px] text-purple-400 font-mono">Analytics</div>
              <div className="text-[10px] sm:text-xs font-bold text-white">78% Spend</div>
              <div className="mt-2 h-10 flex items-end gap-1 px-1">
                <div className="w-2 bg-purple-500 rounded-t h-4" />
                <div className="w-2 bg-purple-400 rounded-t h-7" />
                <div className="w-2 bg-purple-300 rounded-t h-9" />
                <div className="w-2 bg-purple-600 rounded-t h-6" />
                <div className="w-2 bg-purple-500 rounded-t h-8" />
              </div>
            </div>
          </div>

          {/* Dotted Connection Line */}
          <div className="hidden sm:block absolute top-1/2 left-1/3 right-1/3 -translate-y-1/2 pointer-events-none z-10">
            <svg className="w-full h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 0 24 Q 80 0, 160 24 T 320 24" stroke="#9333EA" strokeWidth="2" strokeDasharray="4 4" />
            </svg>
          </div>

          {/* Right: Modern 3D AI Robot Illustration */}
          <div className="relative z-10 flex flex-col items-center justify-center scale-95 sm:scale-110">
            <div className="relative w-28 sm:w-40 h-28 sm:h-40 bg-gradient-to-tr from-white to-zinc-100 rounded-full shadow-2xl border-4 border-purple-200/80 flex items-center justify-center">
              <div className="w-20 sm:w-28 h-20 sm:h-28 rounded-full bg-gradient-to-b from-zinc-100 to-zinc-200 shadow-inner flex flex-col items-center justify-center relative">
                {/* Robot visor screen */}
                <div className="w-12 sm:w-16 h-7 sm:h-9 bg-zinc-950 rounded-full flex items-center justify-center gap-1.5 shadow-md">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                </div>
                {/* Antenna */}
                <div className="absolute -top-3 w-1.5 h-3 bg-purple-400 rounded-full" />
                <div className="absolute -top-4 w-2.5 h-2.5 bg-purple-600 rounded-full animate-ping" />
              </div>
              {/* Floating tablet held by robot */}
              <div className="absolute -left-2 bottom-2 w-10 sm:w-14 h-14 sm:h-18 bg-zinc-800 rounded-lg border border-purple-400 shadow-lg p-1 text-[6px] text-cyan-300 font-mono">
                <div className="h-1 bg-cyan-400 rounded mb-1" />
                <span>AI SYS</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. Theme: DevOps Infrastructure */}
      {theme === 'devops' && (
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-zinc-900 to-zinc-950 flex items-center justify-center p-3">
          <div className="relative flex items-center justify-center">
            <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400">
              <InfinityIcon className="w-6 sm:w-8 h-6 sm:h-8" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-[8px] text-white font-bold">
              CI
            </div>
            <div className="absolute -bottom-1 -left-1 w-4 h-4 rounded-full bg-cyan-500 flex items-center justify-center text-[8px] text-white font-bold">
              CD
            </div>
          </div>
        </div>
      )}

      {/* 3. Theme: Build vs Buy AI */}
      {theme === 'build-buy' && (
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-purple-950 to-zinc-950 flex items-center justify-center p-3">
          <div className="flex items-center gap-2">
            <div className="p-2 sm:p-2.5 rounded-xl bg-purple-500/20 border border-purple-400 text-purple-300 flex items-center justify-center">
              <Bot className="w-5 sm:w-6 h-5 sm:h-6" />
            </div>
            <span className="font-mono text-xs font-bold text-zinc-400">VS</span>
            <div className="p-2 sm:p-2.5 rounded-xl bg-cyan-500/20 border border-cyan-400 text-cyan-300 flex items-center justify-center">
              <Cpu className="w-5 sm:w-6 h-5 sm:h-6" />
            </div>
          </div>
        </div>
      )}

      {/* 4. Theme: MVP Product */}
      {theme === 'mvp' && (
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-900 to-zinc-950 flex items-center justify-center p-3">
          <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-xl bg-indigo-500/20 border border-indigo-400 flex items-center justify-center text-indigo-300">
            <Laptop className="w-6 sm:w-8 h-6 sm:h-8" />
          </div>
        </div>
      )}

      {/* 5. Theme: AI App Development */}
      {theme === 'ai-app' && (
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-950 via-zinc-900 to-zinc-950 flex items-center justify-center p-3">
          <div className="relative flex items-center justify-center">
            <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-300">
              <Smartphone className="w-6 sm:w-7 h-6 sm:h-7" />
            </div>
            <Sparkles className="w-4 h-4 text-cyan-400 absolute -top-1 -right-1 animate-pulse" />
          </div>
        </div>
      )}

      {/* 6. Theme: SaaS Cost (Grid Card 1) */}
      {theme === 'saas-cost' && (
        <div className="absolute inset-0 bg-gradient-to-br from-teal-950 via-zinc-900 to-zinc-950 flex items-center justify-between p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-teal-500/20 border border-teal-400 flex items-center justify-center text-teal-300">
              <Laptop className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <div className="text-[10px] font-mono text-teal-400 font-bold uppercase">SaaS Architecture</div>
              <div className="text-xs text-zinc-300 font-mono">Estimator 2026</div>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-teal-500/30 border border-teal-400 flex items-center justify-center text-teal-300 font-bold font-mono">
            $
          </div>
        </div>
      )}

      {/* 7. Theme: AI Software Cost (Grid Card 2) */}
      {theme === 'ai-cost' && (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-zinc-900 to-zinc-950 flex items-center justify-between p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-400 flex items-center justify-center text-purple-300">
              <Bot className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <div className="text-[10px] font-mono text-purple-400 font-bold uppercase">Enterprise AI</div>
              <div className="text-xs text-zinc-300 font-mono">TCO &amp; Model ROI</div>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-amber-500/30 border border-amber-400 flex items-center justify-center text-amber-300 font-bold font-mono text-lg shadow-lg shadow-amber-500/20">
            <DollarSign className="w-5 h-5 text-amber-300" />
          </div>
        </div>
      )}

      {/* 8. Theme: MVP Cost (Grid Card 3) */}
      {theme === 'mvp-cost' && (
        <div className="absolute inset-0 bg-gradient-to-br from-sky-950 via-zinc-900 to-zinc-950 flex items-center justify-between p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-sky-500/20 border border-sky-400 flex items-center justify-center text-sky-300">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <div className="text-[10px] font-mono text-sky-400 font-bold uppercase">MVP Roadmap</div>
              <div className="text-xs text-zinc-300 font-mono">4-6 Week Launch</div>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-emerald-500/30 border border-emerald-400 flex items-center justify-center text-emerald-300 font-bold font-mono">
            ROI
          </div>
        </div>
      )}

      {/* 9. Theme: Dedicated Team */}
      {theme === 'dedicated-team' && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-zinc-900 to-zinc-950 flex items-center justify-between p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400 flex items-center justify-center text-blue-300">
              <Code2 className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <div className="text-[10px] font-mono text-blue-400 font-bold uppercase">Dedicated Squad</div>
              <div className="text-xs text-zinc-300 font-mono">Top 3% Talent</div>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-blue-500/30 border border-blue-400 flex items-center justify-center text-blue-300 font-mono text-xs font-bold">
            99.9%
          </div>
        </div>
      )}

      {/* 10. Theme: DevOps Framework */}
      {theme === 'devops-framework' && (
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-zinc-900 to-zinc-950 flex items-center justify-between p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-300">
              <InfinityIcon className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <div className="text-[10px] font-mono text-emerald-400 font-bold uppercase">DevOps Best Practice</div>
              <div className="text-xs text-zinc-300 font-mono">Automated CI/CD</div>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-emerald-500/30 border border-emerald-400 flex items-center justify-center text-emerald-300 font-mono text-xs font-bold">
            0-DT
          </div>
        </div>
      )}

      {/* 11. Theme: Flutter App */}
      {theme === 'flutter-app' && (
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-zinc-900 to-zinc-950 flex items-center justify-between p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-400 flex items-center justify-center text-indigo-300">
              <Smartphone className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <div className="text-[10px] font-mono text-indigo-400 font-bold uppercase">Flutter Cross-Platform</div>
              <div className="text-xs text-zinc-300 font-mono">iOS &bull; Android 60fps</div>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-indigo-500/30 border border-indigo-400 flex items-center justify-center text-indigo-300 font-mono text-xs font-bold">
            Dart
          </div>
        </div>
      )}

      {/* Tag Badge Overlay (Top Left of image, exactly as in user reference) */}
      {badgeOverlay && category && (
        <div className="absolute top-3.5 left-3.5 z-20">
          <span className="inline-block px-3 py-1 bg-black/85 backdrop-blur-md text-white text-[11px] font-semibold rounded-md tracking-wide shadow-md">
            {category}
          </span>
        </div>
      )}
    </div>
  );
};
