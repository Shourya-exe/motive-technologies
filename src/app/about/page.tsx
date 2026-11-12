import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Target, Eye, Lightbulb, Compass, Code, Terminal, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO, WHY_MOTIVE_PRINCIPLES } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'About Us | Motive Technologies',
  description:
    'Driven by Innovation. Designed for Progress. Discover Motive Technologies—our mission, engineering philosophy, and commitment to building intelligent digital solutions.',
  alternates: {
    canonical: `${COMPANY_INFO.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="pt-16 pb-20 bg-motive-offwhite/50 border-b border-motive-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-motive-red" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-motive-grey">
                ABOUT MOTIVE TECHNOLOGIES
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-motive-black leading-tight">
              Driven by Innovation.{' '}
              <span className="text-motive-red">Designed for Progress.</span>
            </h1>
            <p className="text-base sm:text-lg text-motive-grey leading-relaxed">
              Motive Technologies exists to eliminate friction and empower forward-looking businesses with intelligent automation, robust software engineering, and enduring digital visibility.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Philosophy Editorial Block */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-motive-border">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-motive-red font-bold">
              OUR CORE PHILOSOPHY
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-motive-black leading-snug">
              &ldquo;We believe the future belongs to businesses that use technology intelligently.&rdquo;
            </h2>
            <p className="text-xs font-mono uppercase text-motive-grey tracking-wider">
              {COMPANY_INFO.tagline}
            </p>
          </div>

          <div className="lg:col-span-7 bg-motive-offwhite p-8 lg:p-10 rounded-xl border border-motive-border space-y-6">
            <p className="text-base sm:text-lg text-motive-black font-medium leading-relaxed">
              &ldquo;{COMPANY_INFO.statement}&rdquo; Our purpose is to make that future more accessible through thoughtful engineering, intelligent automation and digital innovation.
            </p>
            <p className="text-sm text-motive-grey leading-relaxed">
              Modern enterprises do not need more disconnected tools, fragile scripts, or superficial website templates. They need dependable, unified digital systems that quietly solve difficult operational bottlenecks, improve responsiveness, and compound commercial value over years of operation.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-zinc-500">
              <span className="flex items-center gap-1.5 text-motive-black font-bold">
                <ShieldCheck className="w-4 h-4 text-motive-red" />
                <span>Zero Compromise on Code Quality</span>
              </span>
              <span>&bull;</span>
              <span>Business Outcome Driven</span>
            </div>
          </div>

        </div>
      </section>

      {/* Vision & Mission Grid */}
      <section className="py-20 bg-motive-offwhite/40 border-b border-motive-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Vision */}
            <div className="bg-white border border-motive-border rounded-xl p-8 lg:p-10 shadow-subtle flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded bg-motive-offwhite flex items-center justify-center text-motive-red">
                  <Eye className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-motive-grey block">
                  STRATEGIC HORIZON
                </span>
                <h3 className="text-2xl font-bold text-motive-black">
                  Our Vision
                </h3>
                <p className="text-sm text-motive-grey leading-relaxed">
                  To be recognized as a premier international technology and digital transformation partner that empowers businesses to transition effortlessly into an automated, AI-augmented operational reality.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-motive-border flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>LONG-TERM DIRECTION</span>
                <span className="text-motive-black font-semibold">AMBITIOUS</span>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white border border-motive-border rounded-xl p-8 lg:p-10 shadow-subtle flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded bg-motive-offwhite flex items-center justify-center text-motive-red">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-motive-grey block">
                  OPERATIONAL MANDATE
                </span>
                <h3 className="text-2xl font-bold text-motive-black">
                  Our Mission
                </h3>
                <p className="text-sm text-motive-grey leading-relaxed">
                  To architect, build, and support high-caliber digital experiences, custom automation systems, and organic search engines that directly resolve operational bottlenecks, empower human teams, and generate measurable commercial progress.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-motive-border flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>EXECUTION DISCIPLINE</span>
                <span className="text-motive-black font-semibold">PURPOSEFUL</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What We Believe / Architectural Commitments */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-motive-border">
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-motive-grey">
            OUR BELIEFS &amp; STANDARDS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-motive-black">
            The Principles That Govern Our Craft
          </h2>
          <p className="text-motive-grey text-base">
            Every technical decision, pull request, and client conversation is evaluated against these non-negotiable benchmarks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white border border-motive-border rounded-lg shadow-subtle space-y-3">
            <span className="font-mono text-xs text-motive-red font-bold">01 // CLARITY OVER COMPLEXITY</span>
            <h4 className="text-base font-bold text-motive-black">Simplicity Is The Ultimate Sophistication</h4>
            <p className="text-xs text-motive-grey leading-relaxed">
              We write clean, readable code and design intuitive layouts. We never introduce unnecessary complexity to appear sophisticated.
            </p>
          </div>

          <div className="p-6 bg-white border border-motive-border rounded-lg shadow-subtle space-y-3">
            <span className="font-mono text-xs text-motive-red font-bold">02 // DETERMINISM &amp; VERIFICATION</span>
            <h4 className="text-base font-bold text-motive-black">Safe AI with Guardrails</h4>
            <p className="text-xs text-motive-grey leading-relaxed">
              AI models are powerful but must be strictly bounded. We enforce deterministic business rules, data verification, and human oversight.
            </p>
          </div>

          <div className="p-6 bg-white border border-motive-border rounded-lg shadow-subtle space-y-3">
            <span className="font-mono text-xs text-motive-red font-bold">03 // TRANSPARENCY &amp; ETHICS</span>
            <h4 className="text-base font-bold text-motive-black">Honest Engineering Partnerships</h4>
            <p className="text-xs text-motive-grey leading-relaxed">
              We communicate constraints directly, establish realistic milestones, and maintain complete transparency regarding technical scope and deliverables.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-motive-dark text-white py-20 border-t border-motive-darkborder">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="font-mono text-xs text-motive-red font-bold uppercase tracking-widest">
            JOIN US ON THE JOURNEY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Work with a partner that values your business outcomes.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Let us explore how Motive Technologies can engineer the digital and automated systems your company needs to compete and grow.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-motive-red text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-motive-red-hover transition-colors"
            >
              Start A Conversation
            </Link>
            <Link
              href="/work"
              className="px-6 py-4 bg-zinc-900 border border-zinc-700 text-white text-xs font-mono rounded hover:bg-zinc-800 transition-colors"
            >
              Explore Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
