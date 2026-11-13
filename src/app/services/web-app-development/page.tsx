'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Code2, Smartphone, Database, Layout, ShieldCheck, CheckCircle2, Layers, Cpu, Server, Terminal, Sparkles } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '@/data/siteData';
import { DirectAnswerBlock } from '@/components/common/DirectAnswerBlock';

export default function WebAppDevelopmentPage() {
  const serviceData = SERVICES.find(s => s.id === 'web-app-development')!;

  const technicalCapabilities = [
    {
      category: 'Frontend Architecture',
      items: ['Next.js 15 (App Router)', 'React 19 Server Components', 'TypeScript 5.x', 'Tailwind CSS', 'Framer Motion'],
      desc: 'Blazing-fast, accessible web frontends optimized for sub-second Core Web Vitals and zero cumulative layout shifts.',
    },
    {
      category: 'Backend & APIs',
      items: ['Node.js & Express', 'Python / FastAPI & Django', 'PostgreSQL / Prisma', 'Redis Queues', 'REST & GraphQL'],
      desc: 'Robust, type-safe API layers built with horizontal scalability, token security, and comprehensive automated testing.',
    },
    {
      category: 'Mobile Application Engineering',
      items: ['Flutter & Dart SDK', 'Native Android Architecture', 'Offline SQLite Sync', 'FCM Push Messaging', 'Responsive PWA'],
      desc: 'Fluid 60fps mobile interfaces with offline-first data persistence and seamless background sync.',
    },
    {
      category: 'Cloud & DevOps Infrastructure',
      items: ['Docker Containerization', 'AWS & Vercel Edge Hosting', 'CI/CD Automated Deployments', 'SSL/TLS & DDOS Mitigation'],
      desc: 'Resilient cloud infrastructure with automated zero-downtime deployment pipelines and strict access control.',
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
                CAPABILITY // 02 &bull; WEB &amp; MOBILE ENGINEERING
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Digital Experiences{' '}
              <span className="text-motive-red">Engineered to Perform.</span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
              {serviceData.subheadline}
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-motive-red text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-motive-red-hover transition-colors"
              >
                <span>Initiate Digital Build</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-zinc-900 border border-zinc-800 text-white text-xs font-mono rounded hover:bg-zinc-800 transition-colors"
              >
                <span>Review Built Platforms</span>
              </Link>
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
            Web &amp; Mobile Development Services
          </h2>
          <p className="text-motive-grey text-base">
            From high-conversion institutional portals to multi-tenant web platforms and native Android mobile apps, our engineering practices follow strict Swiss typographic discipline and modular code architecture.
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
                <span>PRODUCTION SPEC</span>
                <span className="text-motive-black font-semibold">VERIFIED</span>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Answer Block (AEO / GEO Optimization) */}
        <div className="mt-16">
          <DirectAnswerBlock
            question="Why build custom web and mobile applications with Motive Technologies?"
            directAnswer="Motive Technologies designs and engineers high-speed Next.js 15 web applications and Flutter cross-platform mobile apps that achieve perfect 100/100 Google Lighthouse scores. We write clean, type-safe codebases without bloated generic templates or third-party page builders, delivering sub-second loading speeds, military-grade security, and 100% intellectual property transfer to your organization."
            keyTakeaways={[
              'Sub-second first contentful paint (FCP) and optimal Core Web Vitals',
              'Next.js 15 App Router with streaming server-side rendering (SSR)',
              'Cross-platform Flutter mobile apps with offline-first synchronization',
              'Strict enterprise-grade NDAs with zero proprietary vendor lock-in',
            ]}
            ctaUrl="/contact"
            ctaText="Schedule Digital Engineering Consultation"
          />
        </div>
      </section>

      {/* Responsive Interface & Architectural UI Mockups Section */}
      <section className="py-20 bg-motive-offwhite/50 border-b border-motive-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-motive-red font-bold">
              INTERFACE DISCIPLINE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-motive-black">
              Responsive Architectural UI Engineering
            </h2>
            <p className="text-motive-grey text-base">
              Every digital interface we engineer balances cognitive ease, typographic harmony, and sub-second interaction feedback across desktop, tablet, and mobile devices.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Desktop Mockup Frame (8 cols on lg) */}
            <div className="lg:col-span-8 bg-white border border-motive-border rounded-xl shadow-premium overflow-hidden">
              <div className="bg-zinc-100 border-b border-motive-border px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-amber-400" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="bg-white border border-zinc-200 rounded px-4 py-1 text-[11px] font-mono text-zinc-600 max-w-sm truncate text-center">
                  https://app.enterprise-client.io/portal/telemetry
                </div>
                <div className="text-[10px] font-mono text-zinc-400">
                  DESKTOP ENGINE
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between border-b border-motive-border pb-4">
                  <div>
                    <h3 className="text-lg font-bold text-motive-black">
                      Enterprise Operations Console
                    </h3>
                    <p className="text-xs text-motive-grey">
                      Real-time synchronized data model &bull; Role-based access control
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-mono font-semibold rounded">
                    HTTP/3 200 OK
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 bg-motive-offwhite rounded border border-motive-border">
                    <span className="text-[10px] font-mono uppercase text-motive-grey block">Render Latency</span>
                    <span className="text-lg font-mono font-bold text-motive-black">0.24s</span>
                  </div>
                  <div className="p-4 bg-motive-offwhite rounded border border-motive-border">
                    <span className="text-[10px] font-mono uppercase text-motive-grey block">Lighthouse Score</span>
                    <span className="text-lg font-mono font-bold text-emerald-600">99 / 100</span>
                  </div>
                  <div className="p-4 bg-motive-offwhite rounded border border-motive-border">
                    <span className="text-[10px] font-mono uppercase text-motive-grey block">Payload Bundle</span>
                    <span className="text-lg font-mono font-bold text-motive-black">48 KB Gzip</span>
                  </div>
                </div>

                <div className="p-4 bg-zinc-950 text-white rounded font-mono text-xs space-y-2">
                  <div className="text-zinc-500 text-[10px] flex items-center justify-between">
                    <span>COMPONENT ARCHITECTURE SPECIFICATION</span>
                    <span className="text-motive-red font-bold">TYPE-SAFE</span>
                  </div>
                  <p className="text-zinc-300">
                    &bull; Zero runtime CSS-in-JS overhead via Tailwind compiler<br />
                    &bull; Strict WCAG AA contrast compliance verified<br />
                    &bull; Native keyboard accessibility (Tab, Shift+Tab, Enter, Escape)
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile Device Mockup Frame (4 cols on lg) */}
            <div className="lg:col-span-4 bg-zinc-950 text-white border border-zinc-800 rounded-3xl p-5 shadow-premium max-w-xs mx-auto">
              <div className="w-20 h-4 bg-zinc-800 rounded-full mx-auto mb-4" />
              
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                  <span className="font-mono text-xs font-bold text-white">MOBILE APP // FLUTTER</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>

                <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800 space-y-2">
                  <span className="text-[10px] font-mono text-zinc-400 block">OFFLINE SYNC STATUS</span>
                  <div className="text-xs font-bold text-white flex items-center justify-between">
                    <span>SQLite Cache</span>
                    <span className="text-motive-red font-mono">100% PERSISTED</span>
                  </div>
                </div>

                <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800 space-y-2">
                  <span className="text-[10px] font-mono text-zinc-400 block">TOUCH INTERACTION</span>
                  <p className="text-xs text-zinc-300">
                    Custom gesture handlers tuned for zero jitter with native Android ergonomics.
                  </p>
                </div>

                <div className="pt-2 text-center">
                  <span className="text-[10px] font-mono text-zinc-500">
                    ANDROID &bull; IOS &bull; PWA
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Technical Capabilities Matrix */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-motive-border">
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-motive-grey">
            ENGINEERING STACK
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-motive-black">
            Technical Stack &amp; Architecture Matrix
          </h2>
          <p className="text-motive-grey text-base">
            Detailed breakdown of our core runtime technologies, databases, and DevOps methodologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technicalCapabilities.map((cat, idx) => (
            <div key={idx} className="bg-white border border-motive-border rounded-xl p-8 shadow-subtle hover:border-zinc-400 transition-colors">
              <span className="font-mono text-xs text-motive-red font-bold block mb-2">
                LAYER 0{idx + 1}
              </span>
              <h3 className="text-xl font-bold text-motive-black mb-2">
                {cat.category}
              </h3>
              <p className="text-xs text-motive-grey leading-relaxed mb-6">
                {cat.desc}
              </p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-motive-border">
                {cat.items.map((item, iIdx) => (
                  <span
                    key={iIdx}
                    className="px-2.5 py-1 bg-motive-offwhite text-xs font-mono text-motive-black rounded border border-motive-border font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Enquiry CTA Section */}
      <section className="bg-motive-black text-white py-20 border-t border-motive-darkborder">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="font-mono text-xs text-motive-red font-bold uppercase tracking-widest">
            ENGINEERING EXCELLENCE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Have a custom web or mobile platform in mind?
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            From technical scoping and wireframe architecture to full production release, we deliver on time and to specification.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?service=web-app-development"
              className="px-8 py-4 bg-motive-red text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-motive-red-hover transition-colors"
            >
              Discuss Your Development Project
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
