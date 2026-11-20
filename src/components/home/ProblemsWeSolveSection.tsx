'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, ShieldAlert, Sparkles, AlertCircle, CheckCircle2, Zap } from 'lucide-react';

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
    tag: 'ADMIN OVERHEAD',
    painPoint: 'Drowning in repetitive manual tasks, spreadsheets & copy-pasting',
    symptoms: [
      'Staff lose 15+ hours weekly copying data between sheets and CRM',
      'Costly human errors in lead capture, client onboarding, and invoices',
      'Operations grind to a halt whenever key team members take time off',
    ],
    solutionTitle: 'Automated Workflows & Smart Business Tools',
    solutionDesc:
      'We link your forms, WhatsApp, email, CRM, and billing software together. Information moves automatically between your apps with zero copy-pasting.',
    concreteResult: 'Reclaim 20 to 40 hours per week per employee with 100% data capture precision.',
    serviceLink: '/services/ai-automation',
    serviceName: 'Explore Workflow Automation',
  },
  {
    id: 'outdated-site',
    tag: 'BRAND & CONVERSION',
    painPoint: 'An outdated, slow website that fails to turn visitors into clients',
    symptoms: [
      'Pages take over 4 seconds to load, making impatient visitors leave',
      'Old-fashioned design fails to reflect the true quality of your business',
      'Frustrating mobile experience with forms that are difficult to complete',
    ],
    solutionTitle: 'Modern, Fast Corporate Websites & Custom Applications',
    solutionDesc:
      'We design and build clean, modern, and super-fast websites tailored to your company. Every page loads in under a second, looks stunning on phones, and makes it easy for visitors to reach out.',
    concreteResult: 'Instant sub-second loading, elevated credibility, and 2.4x higher inquiry rates.',
    serviceLink: '/services/web-app-development',
    serviceName: 'Explore Web Development',
  },
  {
    id: 'missed-leads',
    tag: 'LEAD RETENTION',
    painPoint: 'Inquiries outside business hours go unanswered, losing deals to competitors',
    symptoms: [
      'Customers messaging on WhatsApp in the evening wait 12+ hours for a reply',
      'Sales reps waste hours answering the exact same basic pricing questions',
      'Hot prospects lose interest and reach out to competitors who reply faster',
    ],
    solutionTitle: 'Smart AI Assistants & 24/7 WhatsApp Chatbots',
    solutionDesc:
      'We build helpful AI assistants that greet potential clients on WhatsApp 24/7, answer their questions accurately in seconds, and save qualified leads right into your CRM.',
    concreteResult: 'Average first-response time drops from 4 hours to under 12 seconds with 24/7 autonomous capture.',
    serviceLink: '/services/ai-automation',
    serviceName: 'Explore Best AI Agents & WhatsApp Automation',
  },
  {
    id: 'zero-seo',
    tag: 'SEARCH VISIBILITY',
    painPoint: 'Invisible on Google search results; trapped relying only on paid ads',
    symptoms: [
      'Ad costs keep rising every month with zero permanent search presence',
      'Competitors rank above you when customers search for your services',
      'Hidden website errors and slow loading speeds hurt your Google rankings',
    ],
    solutionTitle: 'Technical SEO, Fast Speed & Search Growth Strategy',
    solutionDesc:
      'We fix hidden website errors, speed up your pages, and optimize your content so your business ranks high when customers search for your services on Google and AI tools.',
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

        {/* Visual Transformation Showcase Graphic */}
        <div className="my-14 rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-950 shadow-xl relative group">
          <div className="relative aspect-[21/9] sm:aspect-[21/8] w-full overflow-hidden">
            <Image
              src="/images/manual-chaos-vs-ai-pipeline.jpg"
              alt="Motive Technologies Transformation: Manual Operational Chaos vs. Autonomous AI Pipeline"
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40 pointer-events-none" />

            {/* Overlaid Transformation Banner */}
            <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-between z-10 pointer-events-none">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest bg-black/70 text-emerald-400 border border-white/10 backdrop-blur">
                  THE OPERATIONAL SHIFT // VISUAL ARCHITECTURE
                </span>
                <span className="px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest bg-motive-red text-white shadow-sm">
                  10X OPERATIONAL LEVERAGE
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div className="bg-black/60 backdrop-blur-md p-4 rounded-xl border border-red-500/30 space-y-1">
                  <div className="flex items-center gap-2 text-red-400 text-xs font-mono font-bold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    <span>Traditional Manual Friction</span>
                  </div>
                  <p className="text-xs text-zinc-300">
                    4.2h response latency &bull; Human spreadsheet errors &bull; Lost revenue &bull; 35% bounce
                  </p>
                </div>

                <div className="bg-black/60 backdrop-blur-md p-4 rounded-xl border border-emerald-500/30 space-y-1">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Motive Autonomous Engine</span>
                  </div>
                  <p className="text-xs text-zinc-300">
                    &lt; 12s AI response &bull; 100% CRM precision &bull; 24/7 lead capture &bull; Sub-second speed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Problem Selector Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-8">
          {PROBLEMS.map((prob) => {
            const isSelected = prob.id === activeId;
            return (
              <button
                key={prob.id}
                type="button"
                onClick={() => setActiveId(prob.id)}
                aria-label={`Select business challenge: ${prob.tag}`}
                className={`group text-left p-5 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-motive-black text-white border-motive-black shadow-lg ring-2 ring-motive-black/10 scale-[1.01]'
                    : 'bg-white text-motive-black border-motive-border hover:bg-zinc-100 hover:border-zinc-300 hover:shadow-sm'
                }`}
              >
                <div className="space-y-2">
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
                    className={`block text-xs sm:text-sm font-bold tracking-tight leading-snug line-clamp-2 transition-colors duration-150 ${
                      isSelected
                        ? 'text-white'
                        : 'text-motive-black group-hover:text-black'
                    }`}
                  >
                    {prob.painPoint}
                  </span>
                </div>
                
                <div className="pt-4 flex items-center justify-between text-xs font-mono font-semibold">
                  <span
                    className={`transition-colors duration-150 text-[11px] ${
                      isSelected
                        ? 'text-zinc-300'
                        : 'text-zinc-500 group-hover:text-motive-black'
                    }`}
                  >
                    {isSelected ? 'Viewing Fix' : 'Inspect'}
                  </span>
                  <span
                    className={`transition-all duration-150 ${
                      isSelected
                        ? 'text-motive-red font-bold translate-x-0.5'
                        : 'text-zinc-400 group-hover:text-motive-red group-hover:translate-x-1'
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
        <div className="bg-zinc-50 border border-motive-border rounded-2xl p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left: The Real Challenge */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-red-200 rounded-lg text-xs font-mono text-red-700 shadow-2xs">
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
                    <li key={sIdx} className="text-xs sm:text-sm text-zinc-700 flex items-start gap-2.5 leading-relaxed bg-white p-3 rounded-lg border border-zinc-200/60 shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-motive-red shrink-0 mt-2" />
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: The Motive Engineering Solution */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-motive-border shadow-md space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-lg text-xs font-mono text-emerald-800 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span className="uppercase font-semibold tracking-wider">The Motive Solution</span>
              </div>

              <h4 className="text-xl sm:text-2xl font-extrabold text-motive-black tracking-tight">
                {activeProblem.solutionTitle}
              </h4>

              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                {activeProblem.solutionDesc}
              </p>

              {/* Concrete Business Result Highlight */}
              <div className="p-4 bg-zinc-50 rounded-xl border-l-4 border-motive-red space-y-1">
                <div className="flex items-center gap-1.5 text-motive-red">
                  <Zap className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-mono uppercase tracking-widest font-bold">
                    Measurable Client ROI
                  </span>
                </div>
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
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-motive-black text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-motive-red transition-colors shadow-sm"
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
