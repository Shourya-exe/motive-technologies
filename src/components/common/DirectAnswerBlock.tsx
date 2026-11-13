import React from 'react';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface DirectAnswerBlockProps {
  question: string;
  directAnswer: string;
  keyTakeaways: string[];
  ctaUrl?: string;
  ctaText?: string;
}

export const DirectAnswerBlock: React.FC<DirectAnswerBlockProps> = ({
  question,
  directAnswer,
  keyTakeaways,
  ctaUrl,
  ctaText,
}) => {
  return (
    <article className="my-8 p-6 sm:p-8 bg-zinc-950 text-white rounded-2xl border border-zinc-800 shadow-xl relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-dark opacity-30 pointer-events-none" />

      <div className="relative z-10 space-y-4">
        {/* Eyebrow */}
        <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
          <span className="flex items-center gap-1.5 text-motive-red font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            DIRECT ANSWER // EXECUTIVE SUMMARY (AEO &amp; GEO VERIFIED)
          </span>
          <span className="hidden sm:inline px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] text-emerald-400 font-mono">
            &check; AI ENGINE CITABLE
          </span>
        </div>

        {/* Question Heading */}
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          {question}
        </h3>

        {/* Concise Direct Answer */}
        <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
          {directAnswer}
        </p>

        {/* Structured Key Takeaways */}
        <div className="pt-2">
          <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-2 font-semibold">
            Key Architecture Takeaways:
          </span>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
            {keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start gap-2 bg-zinc-900/60 p-2.5 rounded-lg border border-zinc-800/80">
                <CheckCircle2 className="w-3.5 h-3.5 text-motive-red shrink-0 mt-0.5" />
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {ctaUrl && ctaText && (
          <div className="pt-3 border-t border-zinc-800/80 flex justify-end">
            <Link
              href={ctaUrl}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-motive-red hover:text-white transition-colors"
            >
              <span>{ctaText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
      </div>
    </article>
  );
};
