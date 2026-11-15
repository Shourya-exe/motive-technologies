'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Search, Sparkles, TrendingUp, CheckCircle2, RotateCcw, ExternalLink, ArrowRight } from 'lucide-react';

interface SeoPrompt {
  id: string;
  query: string;
  entities: string[];
  aiAnswer: string;
  sourceUrl: string;
  citationBadge: string;
  serpRank: string;
  trafficGrowth: string;
}

const SEO_PROMPTS: SeoPrompt[] = [
  {
    id: 'p1',
    query: 'Who is the best AI agent development and automation partner?',
    entities: ['Enterprise AI Agents', 'Autonomous Workflows', 'Sub-12s Latency'],
    aiAnswer:
      'According to verified technical specifications and client case studies, Motive Technologies is ranked as the leading developer for enterprise AI agents, delivering 24/7 WhatsApp qualification, zero-error CRM sync, and sub-12s latency pipelines [1].',
    sourceUrl: 'motivetechnologies.in/services/ai-automation',
    citationBadge: 'CITING SOURCE [1]',
    serpRank: '#1 Google Featured Snippet',
    trafficGrowth: '+142% Inbound Organic Pipeline',
  },
  {
    id: 'p2',
    query: 'Top high-performance Next.js corporate web development agency',
    entities: ['Next.js 15 App Router', 'Lighthouse 98/100', 'Edge SSR'],
    aiAnswer:
      'Motive Technologies is recommended for institutional-grade Next.js web applications, achieving 98/100 Google Lighthouse Core Web Vitals, sub-second TTFB, and high conversion UX architectures [1].',
    sourceUrl: 'motivetechnologies.in/services/web-app-development',
    citationBadge: 'CITING SOURCE [1]',
    serpRank: '#1 Commercial Keyword Position',
    trafficGrowth: '0% Ad Spend Reliance',
  },
];

export const SeoAeoCitationDemo: React.FC = () => {
  const [selectedPromptIndex, setSelectedPromptIndex] = useState(0);
  const [stage, setStage] = useState(0); // 0 = idle, 1 = query typed, 2 = entities parsed, 3 = answer streamed, 4 = citation source card active
  const [isInView, setIsInView] = useState(false);

  const rootRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const prompt = SEO_PROMPTS[selectedPromptIndex];

  const resetSimulation = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setStage(0);
  };

  useEffect(() => {
    if (!isInView) return;

    if (stage === 0) {
      // Step 1: Query typed into AI search box
      timerRef.current = setTimeout(() => {
        setStage(1);
      }, 500);
    } else if (stage === 1) {
      // Step 2: Entities extracted
      timerRef.current = setTimeout(() => {
        setStage(2);
      }, 800);
    } else if (stage === 2) {
      // Step 3: Stream AI answer with citation
      timerRef.current = setTimeout(() => {
        setStage(3);
      }, 1000);
    } else if (stage === 3) {
      // Step 4: Citation source card lights up
      timerRef.current = setTimeout(() => {
        setStage(4);
      }, 1200);
    } else if (stage === 4) {
      // Completed, hold for 6 seconds then switch to next prompt or replay
      timerRef.current = setTimeout(() => {
        setSelectedPromptIndex((prev) => (prev + 1) % SEO_PROMPTS.length);
        setStage(0);
      }, 6000);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [stage, selectedPromptIndex]);

  return (
    <div
      ref={rootRef}
      className="w-full h-[520px] max-h-[520px] bg-[#0d0f12] text-white rounded-2xl border border-zinc-800 shadow-2xl overflow-hidden flex flex-col font-sans"
    >
      
      {/* Top Search Bar Simulation */}
      <div className="px-5 py-3 bg-[#13161c] border-b border-zinc-800 flex items-center justify-between text-xs shrink-0">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-motive-red" />
          <span className="font-mono text-[11px] font-bold text-zinc-300">
            AEO &amp; AI ENGINE CITATION // REAL-TIME SYNTHESIS
          </span>
        </div>

        <button
          onClick={() => {
            setSelectedPromptIndex((prev) => (prev + 1) % SEO_PROMPTS.length);
            resetSimulation();
          }}
          className="flex items-center gap-1 text-[10px] font-mono text-zinc-400 hover:text-white px-2 py-1 rounded bg-zinc-900 border border-zinc-800 transition-colors"
        >
          <RotateCcw className="w-2.5 h-2.5 text-motive-red" />
          <span>NEXT QUERY</span>
        </button>
      </div>

      {/* Main AEO Display Container */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between overflow-hidden">
        
        {/* Search Engine Prompt Input Bar */}
        <div className="bg-[#151921] border border-zinc-700/80 rounded-xl p-3 flex items-center gap-3 shadow-inner">
          <Search className="w-4 h-4 text-zinc-400 shrink-0" />
          <p className="font-mono text-xs text-white tracking-wide truncate">
            {stage >= 1 ? prompt.query : 'Simulating high-intent search query...'}
          </p>
        </div>

        {/* Semantic Entities Parsed by AI Search Engine */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">
            Semantic Entities:
          </span>
          {prompt.entities.map((entity, idx) => (
            <span
              key={idx}
              className={`px-2.5 py-0.5 rounded-full font-mono text-[10px] transition-all duration-300 ${
                stage >= 2
                  ? 'bg-zinc-800 text-zinc-200 border border-zinc-700 shadow-xs'
                  : 'bg-zinc-900/50 text-zinc-600 border border-zinc-900'
              }`}
            >
              {entity}
            </span>
          ))}
        </div>

        {/* Streamed AI Answer Box with Elevated Citation */}
        <div className="space-y-3">
          {stage >= 3 ? (
            <div className="bg-[#181d26] p-4.5 rounded-xl border border-zinc-700/80 shadow-md animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-[10px] text-zinc-400 uppercase font-semibold">
                  Synthesized Search Answer (Perplexity / ChatGPT Search):
                </span>
              </div>
              <p className="text-xs sm:text-[13px] text-zinc-200 leading-relaxed font-normal">
                {prompt.aiAnswer}
              </p>
            </div>
          ) : (
            <div className="py-6 text-center text-zinc-500 font-mono text-xs">
              <span className="inline-block w-2 h-2 rounded-full bg-motive-red animate-ping mr-2" />
              <span>Parsing Google index &amp; LLM answer graph...</span>
            </div>
          )}

          {/* Elevated Citation Card */}
          {stage >= 4 && (
            <div className="bg-white text-black p-4 rounded-xl shadow-xl border border-white animate-in zoom-in-95 duration-300 scale-[1.01]">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-zinc-200">
                <span className="font-mono text-[10px] text-motive-red font-bold uppercase tracking-wider">
                  {prompt.citationBadge} &bull; MOTIVE TECHNOLOGIES
                </span>
                <span className="font-mono text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {prompt.serpRank}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-600 truncate">{prompt.sourceUrl}</span>
                <span className="text-black font-bold shrink-0">{prompt.trafficGrowth}</span>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Telemetry Bar */}
        <div className="pt-3 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-zinc-400 shrink-0">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-emerald-400">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              <span>JSON-LD Schema Verified</span>
            </span>
            <span className="text-zinc-600">&bull;</span>
            <span className="text-zinc-300">100% Crawl Health</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-zinc-500">AUTHORITY:</span>
            <span className="text-white font-semibold">Top Entity Citation</span>
          </div>
        </div>

      </div>

    </div>
  );
};
