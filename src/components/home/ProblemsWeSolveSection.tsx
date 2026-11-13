'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, ShieldAlert, Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react';

interface ProblemItem {
  id: string;
  tag: string;
  painPoint: string;
  symptoms: string[];
  solutionTitle: string;
  solutionDesc: string;
  concreteResult: string;
  serviceLink: string;
  serviceName: string;
}

const PROBLEMS: ProblemItem[] = [
  {
    id: 'manual-admin',
    tag: 'ADMINISTRATIVE OVERHEAD',
    painPoint: 'Drowning in repetitive manual tasks, spreadsheets & copy-pasting',
    symptoms: [
      'Staff spend 15+ hours weekly copying data between spreadsheets and CRM',
      'Human errors in lead capture, client onboarding, or invoice dispatch',
      'Operations slow down whenever team members are away or overloaded',
    ],
    solutionTitle: 'Autonomous Workflow & AI Process Automation',
    solutionDesc:
      'We engineer custom event-driven pipelines connecting your forms, WhatsApp, emails, CRM, and accounting software. Data flows instantaneously without manual intervention.',
    concreteResult: 'Reclaim 20 to 40 hours per week per employee with 100% data capture precision.',
    serviceLink: '/services/ai-automation',
    serviceName: 'Explore Workflow Automation',
  },
  {
    id: 'outdated-site',
    tag: 'BRAND & CONVERSION',
    painPoint: 'An outdated, sluggish website that fails to convert high-value clients',
    symptoms: [
      'Page load times exceed 3 to 5 seconds, causing prospective clients to bounce',
      'Design looks like a generic template and fails to convey modern tech authority',
      'Low form completion rates and poor mobile responsiveness',
    ],
    solutionTitle: 'Bespoke Next.js Corporate Web & Application Development',
    solutionDesc:
      'We design and build clean, custom, ultra-fast web architectures tailored to your business. Every page is crafted with sub-second performance, responsive elegance, and clear conversion paths.',
    concreteResult: 'Instant sub-second loading, elevated institutional trust, and significantly higher inquiry rates.',
    serviceLink: '/services/web-app-development',
    serviceName: 'Explore Web Development',
  },
  {
    id: 'missed-leads',
    tag: 'LEAD RETENTION',
    painPoint: 'Inquiries outside business hours go unanswered, losing deals to competitors',
    symptoms: [
      'Customers messaging on WhatsApp in the evening wait 12+ hours for a reply',
      'Sales reps waste hours answering basic repetitive qualification questions',
      'Hot prospects lose interest and reach out to competitors who reply faster',
    ],
    solutionTitle: 'Best AI Agents Development & 24/7 WhatsApp Conversational Assistants',
    solutionDesc:
      'We deploy the best AI agents development frameworks: intelligent, zero-hallucination agents that greet prospects, answer complex pricing and catalog questions in seconds, and sync qualified leads directly to your CRM.',
    concreteResult: 'Average first-response time drops from 4 hours to under 12 seconds with 24/7 autonomous lead capture.',
    serviceLink: '/services/ai-automation',
    serviceName: 'Explore Best AI Agents & WhatsApp Automation',
  },
  {
    id: 'zero-seo',
    tag: 'SEARCH VISIBILITY',
    painPoint: 'Invisible on Google search results; trapped relying only on paid ads',
    symptoms: [
      'Acquisition costs keep rising on paid Google/Meta ads with no organic equity',
      'Competitors rank above you for high-intent, high-value commercial searches',
      'Technical site errors, slow Core Web Vitals, and missing structured schemas',
    ],
    solutionTitle: 'Technical SEO, Core Web Vitals & Organic Growth Strategy',
    solutionDesc:
      'We audit and restructure your website for Google search crawlers, optimizing technical hygiene, high-intent commercial keywords, and semantic schemas to capture qualified buyers.',
    concreteResult: 'Sustainable, high-intent organic rankings that continuously generate inbound client leads.',
    serviceLink: '/services/seo-digital-growth',
    serviceName: 'Explore Technical SEO',
  },
];

export const ProblemsWeSolveSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(PROBLEMS[0].id);
  const activeProblem = PROBLEMS.find((p) => p.id === activeId) || PROBLEMS[0];

  return (
    <section className="py-24 lg:py-36 bg-white border-b border-motive-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-16 border-b border-motive-border">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-motive-red" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-motive-grey">
                CLIENT SOLUTIONS // REAL BUSINESS PROBLEMS SOLVED
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-motive-black leading-tight">
              We eliminate the friction<br />
              <span className="text-motive-red">holding your business back.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pl-6">
            <p className="text-sm sm:text-base text-motive-grey leading-relaxed">
              Every system we engineer is built to eliminate a tangible business pain point—freeing your team from admin, elevating your brand, and accelerating revenue.
            </p>
          </div>
        </div>

        {/* Problem Selector Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-12 pb-8">
          {PROBLEMS.map((prob) => {
            const isSelected = prob.id === activeId;
            return (
              <button
                key={prob.id}
                type="button"
                onClick={() => setActiveId(prob.id)}
                aria-label={`Select business challenge: ${prob.tag}`}
                className={`group text-left p-6 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-motive-black text-white border-motive-black shadow-xl ring-2 ring-motive-black/10 scale-[1.01]'
                    : 'bg-white text-motive-black border-motive-border hover:bg-zinc-100 hover:border-zinc-300 hover:shadow-md hover:-translate-y-0.5'
                }`}
              >
                <div className="space-y-2.5">
                  <span
                    className={`font-mono text-[10px] uppercase tracking-widest block font-bold transition-colors duration-150 ${
                      isSelected
                        ? 'text-motive-red'
                        : 'text-zinc-600 group-hover:text-motive-red'
                    }`}
                  >
                    {prob.tag}
                  </span>
                  <span
                    className={`block text-sm sm:text-base font-bold tracking-tight leading-snug line-clamp-2 transition-colors duration-150 ${
                      isSelected
                        ? 'text-white'
                        : 'text-motive-black group-hover:text-black'
                    }`}
                  >
                    {prob.painPoint}
                  </span>
                </div>
                
                <div className="pt-6 flex items-center justify-between text-xs font-mono font-semibold">
                  <span
                    className={`transition-colors duration-150 ${
                      isSelected
                        ? 'text-zinc-300'
                        : 'text-zinc-600 group-hover:text-motive-black'
                    }`}
                  >
                    {isSelected ? 'Viewing Solution' : 'View Fix'}
                  </span>
                  <span
                    className={`transition-all duration-150 ${
                      isSelected
                        ? 'text-motive-red font-bold translate-x-0.5'
                        : 'text-zinc-600 group-hover:text-motive-red group-hover:translate-x-1'
                    }`}
                  >
                    &rarr;
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Problem / Solution Deep-Dive Display */}
        <div className="bg-motive-offwhite/70 border border-motive-border rounded-xl p-8 lg:p-12 shadow-subtle mt-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left: The Real Challenge */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-motive-border rounded text-xs font-mono text-zinc-600">
                <AlertCircle className="w-3.5 h-3.5 text-motive-red" />
                <span className="uppercase font-semibold tracking-wider">The Business Problem</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-motive-black tracking-tight leading-snug">
                {activeProblem.painPoint}
              </h3>

              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-motive-grey font-bold block">
                  Typical Bottlenecks You Experience:
                </span>
                <ul className="space-y-2.5">
                  {activeProblem.symptoms.map((symptom, sIdx) => (
                    <li key={sIdx} className="text-xs sm:text-sm text-zinc-700 flex items-start gap-2.5 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0 mt-2" />
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: The Motive Engineering Solution */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-lg border border-motive-border shadow-subtle space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200 rounded text-xs font-mono text-emerald-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span className="uppercase font-semibold tracking-wider">The Motive Solution</span>
              </div>

              <h4 className="text-xl sm:text-2xl font-extrabold text-motive-black tracking-tight">
                {activeProblem.solutionTitle}
              </h4>

              <p className="text-sm sm:text-base text-motive-grey leading-relaxed">
                {activeProblem.solutionDesc}
              </p>

              {/* Concrete Business Result Highlight */}
              <div className="p-4 bg-motive-offwhite rounded border-l-4 border-motive-red space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-motive-black font-bold block">
                  Measurable Client ROI
                </span>
                <p className="text-sm font-bold text-motive-black">
                  {activeProblem.concreteResult}
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-motive-border">
                <Link
                  href={activeProblem.serviceLink}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-motive-black hover:text-motive-red transition-colors group"
                >
                  <span>{activeProblem.serviceName}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-motive-red" />
                </Link>

                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-motive-black text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-motive-red transition-colors shadow-sm"
                >
                  <span>Discuss This Problem With Us</span>
                </Link>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
