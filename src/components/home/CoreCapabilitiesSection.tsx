'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Bot, Code2, TrendingUp, CheckCircle, ArrowUpRight, Terminal, Smartphone, Search, Database } from 'lucide-react';
import { SERVICES } from '@/data/siteData';

export const CoreCapabilitiesSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-motive-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-motive-red" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-motive-grey">
              WHAT WE DO
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-motive-black leading-tight">
            Three capabilities. One intelligent direction.
          </h2>
          <p className="text-base sm:text-lg text-motive-grey leading-relaxed">
            We operate at the intersection of operational automation, robust digital engineering, and organic search mechanics. Rather than piecemeal fixes, we deliver coordinated technology systems.
          </p>
        </div>

        {/* 3 Visually Distinct Editorial Capabilities */}
        <div className="space-y-12">
          
          {/* 01 — AI Automation & Intelligent Systems (Dark Architectural Theme) */}
          <div className="bg-motive-dark text-white rounded-xl border border-motive-darkborder p-8 lg:p-12 shadow-darkcard">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-motive-red font-bold px-2.5 py-1 bg-red-950/40 rounded border border-motive-red/30">
                    CAPABILITY // 01
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                    INTELLIGENT SYSTEMS
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                  AI Automation &amp; Intelligent Systems
                </h3>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl">
                  Transform repetitive processes into intelligent workflows. We design AI-powered systems and automation solutions that help businesses operate more efficiently.
                </p>

                {/* Sub-capabilities list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    'AI Agent Development',
                    'Business Process Automation',
                    'Custom Workflow Automation',
                    'WhatsApp Automation',
                    'AI-Powered Business Solutions',
                    'API & Third-Party Integrations',
                    'Intelligent Customer Support',
                    'Custom AI Integrations',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-motive-red shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    href="/services/ai-automation"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-white text-motive-black text-xs font-bold uppercase tracking-wider rounded hover:bg-motive-red hover:text-white transition-all duration-200 group"
                  >
                    <span>Explore AI Solutions</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Visual Preview / Code & Workflow Mockup */}
              <div className="lg:col-span-5">
                <div className="bg-black/90 border border-zinc-800 rounded-lg p-5 font-mono text-xs text-zinc-300 shadow-inner">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800 text-[10px] text-zinc-500">
                    <span className="flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-motive-red" />
                      <span>agent_pipeline_executor.ts</span>
                    </span>
                    <span className="text-emerald-500 font-semibold">● LIVE DISPATCH</span>
                  </div>
                  <pre className="text-[11px] leading-relaxed text-zinc-400 overflow-x-auto">
{`// Motive AI Orchestrator
async function dispatchInquiry(lead: InboundLead) {
  const context = await retrieveDocs(lead.intent);
  const decision = await reasoningEngine.evaluate({
    leadProfile: lead,
    retrievedKnowledge: context,
    guardrails: strictEnterprisePolicy
  });

  await triggerMultiSystemActions({
    crmSync: true,
    whatsAppAck: decision.autoReply,
    salesEscalation: decision.confidenceScore > 0.95
  });
  return { status: "EXECUTED", latencyMs: 14.2 };
}`}
                  </pre>
                  <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[10px] text-zinc-500">
                    <span>Model: Verified Enterprise LLM</span>
                    <span className="text-motive-red">Verification: 100% Deterministic</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* 02 — Website & Application Development (Clean Architectural White & Grid Theme) */}
          <div className="bg-motive-offwhite rounded-xl border border-motive-border p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-motive-black font-bold px-2.5 py-1 bg-white rounded border border-motive-border">
                    CAPABILITY // 02
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-motive-grey">
                    FULL-STACK ENGINEERING
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-motive-black">
                  Website &amp; Application Development
                </h3>

                <p className="text-sm sm:text-base text-motive-grey leading-relaxed max-w-xl">
                  From business websites to custom digital platforms, we create functional, scalable and carefully engineered digital experiences.
                </p>

                {/* Sub-capabilities list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    'Custom Website Development',
                    'Corporate & Business Websites',
                    'Web Application Development',
                    'Android & Mobile App Development',
                    'UI/UX Design Systems',
                    'Backend & API Development',
                    'Database Architecture',
                    'Custom Digital Platforms',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-motive-black font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-motive-red shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    href="/services/web-app-development"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-motive-black text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-motive-red transition-all duration-200 group"
                  >
                    <span>Explore Development</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Visual Preview / Architectural Device Wireframe */}
              <div className="lg:col-span-5">
                <div className="bg-white border border-motive-border rounded-lg p-5 shadow-premium">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-motive-border">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                    </div>
                    <span className="text-[10px] font-mono text-motive-grey">
                      FRAMEWORK // NEXT.JS 15 + REACT
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="h-6 w-2/3 bg-zinc-100 rounded flex items-center px-2 text-[10px] font-mono text-motive-grey">
                      HTTP/3 TLS 1.3 200 OK — 0.28s LCP
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="p-3 bg-motive-offwhite rounded border border-motive-border text-center">
                        <span className="text-[10px] font-mono text-motive-grey block">PERF</span>
                        <span className="text-sm font-bold text-emerald-600 font-mono">99</span>
                      </div>
                      <div className="p-3 bg-motive-offwhite rounded border border-motive-border text-center">
                        <span className="text-[10px] font-mono text-motive-grey block">A11Y</span>
                        <span className="text-sm font-bold text-emerald-600 font-mono">100</span>
                      </div>
                      <div className="p-3 bg-motive-offwhite rounded border border-motive-border text-center">
                        <span className="text-[10px] font-mono text-motive-grey block">SEO</span>
                        <span className="text-sm font-bold text-emerald-600 font-mono">100</span>
                      </div>
                    </div>
                    <div className="p-3 bg-motive-offwhite rounded border border-motive-border flex items-center justify-between text-xs">
                      <span className="font-semibold text-motive-black">Mobile + Android Ready</span>
                      <Smartphone className="w-4 h-4 text-motive-red" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* 03 — SEO & Digital Growth (Analytical Clean Slate Theme) */}
          <div className="bg-white rounded-xl border border-motive-border p-8 lg:p-12 shadow-subtle">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-motive-red font-bold px-2.5 py-1 bg-red-50 rounded border border-red-200">
                    CAPABILITY // 03
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-motive-grey">
                    SEARCH &amp; VISIBILITY
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-motive-black">
                  SEO &amp; Digital Growth
                </h3>

                <p className="text-sm sm:text-base text-motive-grey leading-relaxed max-w-xl">
                  Build stronger search visibility and establish a sustainable organic presence through strategic and technically sound SEO.
                </p>

                {/* Sub-capabilities list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    'Technical SEO & Core Vitals',
                    'On-Page & Semantic Architecture',
                    'Off-Page & Domain Authority',
                    'Keyword & Intent Research',
                    'Comprehensive Website Audits',
                    'Search Engine Visibility',
                    'Content Optimization Clusters',
                    'Organic Growth Strategy',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-motive-black font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-motive-red shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    href="/services/seo-digital-growth"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-motive-black text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-motive-red transition-all duration-200 group"
                  >
                    <span>Explore SEO</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Visual Preview / Search Analytics Mockup */}
              <div className="lg:col-span-5">
                <div className="bg-motive-offwhite border border-motive-border rounded-lg p-5">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-motive-border">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-motive-black font-bold flex items-center gap-1.5">
                      <Search className="w-3.5 h-3.5 text-motive-red" />
                      ORGANIC TRACTION METRICS
                    </span>
                    <span className="text-[10px] font-mono text-motive-grey">
                      VERIFIABLE DATA
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded border border-motive-border flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-mono uppercase text-motive-grey block">
                          Crawl Efficiency
                        </span>
                        <span className="text-sm font-bold text-motive-black font-mono">
                          Zero Orphan Traps
                        </span>
                      </div>
                      <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-mono font-semibold rounded">
                        100% INDEXED
                      </span>
                    </div>

                    <div className="bg-white p-3 rounded border border-motive-border flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-mono uppercase text-motive-grey block">
                          Entity Graph
                        </span>
                        <span className="text-sm font-bold text-motive-black font-mono">
                          JSON-LD Schema
                        </span>
                      </div>
                      <span className="px-2 py-0.5 bg-zinc-100 text-motive-black text-[10px] font-mono font-semibold rounded">
                        ACTIVE ENTITIES
                      </span>
                    </div>

                    <div className="bg-white p-3 rounded border border-motive-border flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-mono uppercase text-motive-grey block">
                          Core Web Vitals
                        </span>
                        <span className="text-sm font-bold text-motive-black font-mono">
                          INP &lt; 50ms | LCP &lt; 0.9s
                        </span>
                      </div>
                      <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-mono font-semibold rounded">
                        PASSING
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
