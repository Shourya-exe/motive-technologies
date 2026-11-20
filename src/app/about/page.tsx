import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Target, Eye, Lightbulb, Compass, Code, Terminal, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO, WHY_MOTIVE_PRINCIPLES } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'About Us — Engineering & Philosophy',
  description:
    'Driven by Innovation. Designed for Progress. Discover Motive Technologies—our mission, engineering philosophy, founding principles, and leadership in autonomous AI systems and digital engineering.',
  keywords: [
    'about motive technologies',
    'ai engineering company kolkata',
    'best ai agent developers india',
    'autonomous systems agency',
    'motive technologies founders',
    'software engineering philosophy',
  ],
  alternates: {
    canonical: `${COMPANY_INFO.url}/about`,
  },
  openGraph: {
    title: 'About Us — Motive Technologies',
    description: 'Driven by Innovation. Designed for Progress. Discover our mission, engineering philosophy, and values.',
    url: `${COMPANY_INFO.url}/about`,
    type: 'website',
  },
};

export default function AboutPage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${COMPANY_INFO.url}/about#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: COMPANY_INFO.url,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'About Us',
            item: `${COMPANY_INFO.url}/about`,
          },
        ],
      },
      {
        '@type': 'AboutPage',
        '@id': `${COMPANY_INFO.url}/about#webpage`,
        url: `${COMPANY_INFO.url}/about`,
        name: 'About Motive Technologies',
        description: 'Motive Technologies is an enterprise technology consultancy engineering autonomous AI agents, web/mobile systems, and organic search growth.',
        mainEntity: {
          '@id': `${COMPANY_INFO.url}/#organization`,
        },
      },
    ],
  };

  return (
    <div className="bg-white">
      {/* Schema.org Graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />

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
              Motive Technologies helps forward-thinking businesses work smarter. We build easy-to-use AI automation, fast modern websites, and search strategies that help you get noticed and grow.
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
            <p className="text-sm text-motive-grey leading-relaxed">
              Technology shouldn&apos;t make things complicated—it should make things easier. We build smart tools that quietly handle daily repetitive work so you and your team can focus on what matters most: serving customers and growing your business.
            </p>
          </div>

          <div className="lg:col-span-7 bg-motive-offwhite border border-motive-border rounded-xl p-8 lg:p-10 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-motive-border">
              <span className="text-xs font-mono uppercase tracking-widest text-motive-black font-bold">
                Operating Formula
              </span>
              <span className="text-xs font-mono text-motive-red font-semibold">
                EST. {COMPANY_INFO.foundedYear}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="space-y-2">
                <span className="font-mono text-xs font-bold text-motive-red block">01 / DISCIPLINE</span>
                <p className="text-xs text-motive-grey leading-relaxed">
                  Carefully crafted, thoroughly tested software built to work reliably from day one.
                </p>
              </div>

              <div className="space-y-2">
                <span className="font-mono text-xs font-bold text-motive-red block">02 / VELOCITY</span>
                <p className="text-xs text-motive-grey leading-relaxed">
                  Fast delivery sprints that take your ideas and turn them into working software in weeks, not months.
                </p>
              </div>

              <div className="space-y-2">
                <span className="font-mono text-xs font-bold text-motive-red block">03 / OWNERSHIP</span>
                <p className="text-xs text-motive-grey leading-relaxed">
                  You own 100% of your code, designs, and data. No ongoing lock-ins, ever.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Mission & Vision Split Cards */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-motive-border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <div className="bg-white border border-motive-border rounded-xl p-8 lg:p-10 shadow-subtle space-y-4">
            <div className="w-10 h-10 rounded bg-motive-offwhite flex items-center justify-center text-motive-red border border-motive-border">
              <Target className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-motive-grey block font-bold">
              OUR MISSION
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-motive-black">
              Practical technology for ambitious businesses.
            </h3>
            <p className="text-sm text-motive-grey leading-relaxed">
              To design and deliver practical, high-performing AI tools and modern websites that help businesses eliminate busywork, reply to customers instantly, and grow with confidence.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white border border-motive-border rounded-xl p-8 lg:p-10 shadow-subtle space-y-4">
            <div className="w-10 h-10 rounded bg-motive-offwhite flex items-center justify-center text-motive-red border border-motive-border">
              <Eye className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-motive-grey block font-bold">
              OUR VISION
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-motive-black">
              Smarter automation for a brighter tomorrow.
            </h3>
            <p className="text-sm text-motive-grey leading-relaxed">
              We envision a future where repetitive tasks are handled automatically by dependable AI, giving business owners more freedom, fewer headaches, and more time to focus on their real passion.
            </p>
          </div>

        </div>
      </section>

      {/* Engineering Principles (Indexed from Why Motive) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-motive-border">
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-motive-grey">
            FOUNDATIONAL COMMITMENTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-motive-black">
            The Principles That Govern Our Code
          </h2>
          <p className="text-motive-grey text-base">
            We hold ourselves to high quality standards on every single project, from a quick WhatsApp automation setup to a complete business web platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_MOTIVE_PRINCIPLES.map((principle, idx) => (
            <div
              key={idx}
              className="bg-white border border-motive-border rounded-lg p-6 shadow-subtle hover:border-zinc-400 transition-colors space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-motive-red">
                  {principle.number} // COMMITMENT
                </span>
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              </div>
              <h3 className="text-base font-bold text-motive-black">
                {principle.title}
              </h3>
              <p className="text-xs text-motive-grey leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-motive-black text-white py-20 border-t border-motive-darkborder">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="font-mono text-xs text-motive-red font-bold uppercase tracking-widest">
            COLLABORATION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Partner with engineering specialists who care about outcomes.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Reach out to our leadership team to discuss your operational challenges and explore how we can engineer a tailored technological solution.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-motive-red text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-motive-red-hover transition-colors"
            >
              Schedule an Introduction
            </Link>
            <Link
              href="/work"
              className="px-8 py-4 bg-zinc-900 border border-zinc-800 text-white text-xs font-mono rounded hover:bg-zinc-800 transition-colors"
            >
              Explore Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
