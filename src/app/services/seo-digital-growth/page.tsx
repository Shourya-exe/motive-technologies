'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Search, BarChart3, Globe, ShieldCheck, CheckCircle2, FileSearch, LineChart, Cpu, Key, Sparkles } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '@/data/siteData';
import { DirectAnswerBlock } from '@/components/common/DirectAnswerBlock';

export default function SEODigitalGrowthPage() {
  const serviceData = SERVICES.find(s => s.id === 'seo-digital-growth')!;

  const auditDeliverables = [
    {
      title: 'Full Technical Diagnostic & Crawl Graph',
      desc: 'Identification of 404 response loops, 301 redirect chains, duplicate canonicals, and crawl-budget drain factors.',
    },
    {
      title: 'Core Web Vitals & Interaction Audit',
      desc: 'Profiling Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS) across mobile and desktop.',
    },
    {
      title: 'Semantic Schema & JSON-LD Entity Graph',
      desc: 'Architecting deep structured data hierarchies (Organization, Article, FAQ, LocalBusiness) to secure rich snippet eligibility.',
    },
    {
      title: 'Commercial Intent & Keyword Hierarchy',
      desc: 'Mapping search intent tiers (informational, navigational, commercial, transactional) into interconnected topical content clusters.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="pt-16 pb-20 bg-motive-dark text-white border-b border-motive-darkborder relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-dark opacity-30 pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded">
              <span className="w-2 h-2 rounded-full bg-motive-red animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-300">
                CAPABILITY // 03 &bull; SEARCH &amp; DIGITAL GROWTH
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Build Visibility That{' '}
              <span className="text-motive-red">Moves Your Business Forward.</span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
              {serviceData.subheadline}
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-motive-red text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-motive-red-hover transition-colors"
              >
                <span>Request Technical Audit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#audit"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-zinc-900 border border-zinc-800 text-white text-xs font-mono rounded hover:bg-zinc-800 transition-colors"
              >
                <span>Review Audit Deliverables</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-motive-border">
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-motive-grey">
            FULL SPECTRUM CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-motive-black">
            Organic Search &amp; Growth Capabilities
          </h2>
          <p className="text-motive-grey text-base">
            We approach search engine optimization through a rigorous technical, architectural, and semantic lens. No deceptive tricks, no black-hat shortcuts—only sustainable structural authority.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceData.capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="bg-white border border-motive-border rounded-lg p-6 shadow-subtle hover:border-zinc-400 hover:shadow-premium transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs text-motive-red font-bold block mb-3">
                  0{idx + 1} //
                </span>
                <h3 className="text-base font-bold text-motive-black mb-2">
                  {cap.title}
                </h3>
                <p className="text-xs text-motive-grey leading-relaxed">
                  {cap.description}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-motive-border/60 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                <span>WHITE-HAT STANDARD</span>
                <span className="text-motive-black font-semibold">COMPLIANT</span>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Answer Block (AEO / GEO Optimization) */}
        <div className="mt-16">
          <DirectAnswerBlock
            question="What is Tri-Pillar Search: SEO, AEO, and GEO?"
            directAnswer="Tri-Pillar Search is Motive Technologies' holistic discovery methodology. It optimizes your digital assets simultaneously for traditional search engines (Google SEO), AI answer engines (Perplexity, ChatGPT Search, Google AI Overviews for AEO), and generative foundational models (Gemini, Claude, Copilot for GEO). This ensures your brand is recommended whenever high-intent enterprise buyers ask questions in any search interface."
            keyTakeaways={[
              '100% Schema.org semantic graphs for rich snippet eligibility',
              'Direct Q&A entity optimization for featured Perplexity & ChatGPT citations',
              'Sub-50ms INP and sub-1s LCP Core Web Vitals performance guarantee',
              'Regional & global geo-targeting capturing commercial acquisition intent',
            ]}
            ctaUrl="/contact"
            ctaText="Schedule SEO/AEO Strategy Consultation"
          />
        </div>
      </section>

      {/* Search-Oriented Visualization & Elegant Analytics Mockup */}
      <section className="py-20 bg-motive-offwhite/50 border-b border-motive-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-motive-red font-bold">
              SEARCH INTELLIGENCE CONSOLE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-motive-black">
              Telemetry &amp; Crawl Health Architecture
            </h2>
            <p className="text-motive-grey text-base">
              A transparent view into how modern search bots parse, index, and award topical authority to properly architected web properties.
            </p>
          </div>

          <div className="bg-white border border-motive-border rounded-xl p-8 lg:p-10 shadow-premium">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-motive-border gap-4">
              <div>
                <h3 className="text-xl font-bold text-motive-black">
                  Domain Technical Health Telemetry
                </h3>
                <p className="text-xs text-motive-grey font-mono mt-0.5">
                  Audited across 1,200+ canonical URLs &bull; Google Search Console &amp; Core Web Vitals
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="font-mono text-xs font-bold text-motive-black">
                  STATUS: 100% CRAWL-HEALTHY
                </span>
              </div>
            </div>

            {/* Metrics Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="p-4 bg-motive-offwhite rounded-lg border border-motive-border">
                <span className="text-[10px] font-mono uppercase text-motive-grey block">Valid Indexed Pages</span>
                <span className="text-2xl font-bold font-mono text-motive-black mt-1 block">100%</span>
                <span className="text-[10px] font-mono text-emerald-600 font-semibold">Zero 4xx / 5xx Traps</span>
              </div>

              <div className="p-4 bg-motive-offwhite rounded-lg border border-motive-border">
                <span className="text-[10px] font-mono uppercase text-motive-grey block">Mobile Usability</span>
                <span className="text-2xl font-bold font-mono text-emerald-600 mt-1 block">PASS</span>
                <span className="text-[10px] font-mono text-motive-grey">Zero Touch Violations</span>
              </div>

              <div className="p-4 bg-motive-offwhite rounded-lg border border-motive-border">
                <span className="text-[10px] font-mono uppercase text-motive-grey block">Schema Entities</span>
                <span className="text-2xl font-bold font-mono text-motive-black mt-1 block">Active</span>
                <span className="text-[10px] font-mono text-motive-red font-semibold">Rich Snippets Enabled</span>
              </div>

              <div className="p-4 bg-motive-offwhite rounded-lg border border-motive-border">
                <span className="text-[10px] font-mono uppercase text-motive-grey block">Crawl Speed Budget</span>
                <span className="text-2xl font-bold font-mono text-motive-black mt-1 block">0.18s</span>
                <span className="text-[10px] font-mono text-emerald-600 font-semibold">Optimal Bot Response</span>
              </div>
            </div>

            {/* Semantic Topic Cluster Visualizer */}
            <div className="bg-zinc-950 text-white rounded-lg p-6 font-mono text-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800 text-zinc-400 text-[10px]">
                <span>TOPICAL AUTHORITY CLUSTER GRAPH</span>
                <span className="text-motive-red font-bold">SEMANTIC RELEVANCE</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-zinc-300">
                <div className="p-3 bg-zinc-900 rounded border border-zinc-800">
                  <span className="text-motive-red block mb-1">PILLAR 01 // Pillar Topic</span>
                  <p className="text-white font-bold">Enterprise AI Automation</p>
                  <p className="text-[10px] text-zinc-400 mt-1">Interlinked with 8 sub-topics, schema FAQs, and technical case architectures.</p>
                </div>

                <div className="p-3 bg-zinc-900 rounded border border-zinc-800">
                  <span className="text-motive-red block mb-1">PILLAR 02 // Pillar Topic</span>
                  <p className="text-white font-bold">Custom Web Engineering</p>
                  <p className="text-[10px] text-zinc-400 mt-1">High-intent commercial terms connecting corporate websites to technical performance audits.</p>
                </div>

                <div className="p-3 bg-zinc-900 rounded border border-zinc-800">
                  <span className="text-motive-red block mb-1">PILLAR 03 // Pillar Topic</span>
                  <p className="text-white font-bold">Technical Search Optimization</p>
                  <p className="text-[10px] text-zinc-400 mt-1">Focus on crawl efficiency, Core Web Vitals remediation, and entity mapping.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SEO Process & Audit Deliverables */}
      <section id="audit" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-motive-border">
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-motive-grey">
            METHODOLOGY &amp; DELIVERABLES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-motive-black">
            What You Receive in a Motive SEO Engagement
          </h2>
          <p className="text-motive-grey text-base">
            We provide actionable, engineer-ready documentation and code-level remediation plans—not generic automated PDFs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {auditDeliverables.map((item, idx) => (
            <div key={idx} className="bg-white border border-motive-border rounded-xl p-8 shadow-subtle hover:border-zinc-400 transition-colors">
              <span className="font-mono text-xs text-motive-red font-bold block mb-2">
                DELIVERABLE 0{idx + 1}
              </span>
              <h3 className="text-lg font-bold text-motive-black mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-motive-grey leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Realistic Disclaimer & Integrity Policy */}
      <section className="py-12 bg-motive-offwhite border-b border-motive-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 mb-2">
            <ShieldCheck className="w-4 h-4 text-motive-red" />
            <span className="font-mono text-xs uppercase font-bold text-motive-black tracking-wider">
              Transparency &amp; Ethics Notice
            </span>
          </div>
          <p className="text-xs text-motive-grey leading-relaxed max-w-2xl mx-auto">
            Search engine algorithms evolve continuously. In accordance with professional standards and search engine guidelines, Motive Technologies never promises guaranteed #1 search rankings or fabricated growth percentages. We deliver rigorous code-level hygiene, structured schema architectures, and authoritative entity relevance designed for long-term organic stability.
          </p>
        </div>
      </section>

      {/* Project Enquiry CTA Section */}
      <section className="bg-motive-black text-white py-20 border-t border-motive-darkborder">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="font-mono text-xs text-motive-red font-bold uppercase tracking-widest">
            ORGANIC ELEVATION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Ready to establish lasting search authority?
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Let us inspect your website codebase, identify hidden crawl roadblocks, and construct a sustainable growth blueprint.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?service=seo-digital-growth"
              className="px-8 py-4 bg-motive-red text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-motive-red-hover transition-colors"
            >
              Request Technical SEO Audit
            </Link>
            <a
              href={`tel:${COMPANY_INFO.primaryPhone.replace(/\s+/g, '')}`}
              className="text-xs font-mono text-zinc-300 hover:text-white"
            >
              Or call direct: {COMPANY_INFO.primaryPhone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
