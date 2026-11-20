import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Code2, Smartphone, Database, Layout, ShieldCheck, CheckCircle2, Layers, Cpu, Server, Terminal, Sparkles } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '@/data/siteData';
import { DirectAnswerBlock } from '@/components/common/DirectAnswerBlock';
import { WebPerformanceAuditDemo } from '@/components/common/WebPerformanceAuditDemo';

export const metadata: Metadata = {
  title: 'Custom Web & Mobile Application Development (Next.js & Flutter)',
  description:
    'Engineering high-performance Next.js 15 web applications and native-feel Flutter mobile apps. 100/100 Lighthouse performance, type-safe APIs, sub-second latency, and 100% IP ownership.',
  keywords: [
    'custom web application development',
    'next.js 15 enterprise web agency',
    'react 19 full-stack development',
    'flutter mobile app developers',
    'high performance web engineering 100 lighthouse',
    'corporate website development',
    'custom web engineering kolkata',
    'cross-platform mobile app development',
    'offline-first mobile applications',
    'motive technologies web development',
  ],
  alternates: {
    canonical: `${COMPANY_INFO.url}/services/web-app-development`,
  },
  openGraph: {
    title: 'Custom Web & Mobile Application Development — Motive Technologies',
    description:
      'High-performance Next.js 15 web engineering and Flutter mobile applications built with sub-second speeds, zero CLS, and complete intellectual property transfer.',
    url: `${COMPANY_INFO.url}/services/web-app-development`,
    type: 'website',
    images: [
      {
        url: '/images/web-engineering-platform.jpg',
        width: 1200,
        height: 630,
        alt: 'Motive Technologies Custom Web and Mobile Application Engineering Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Web & Mobile Application Development — Motive Technologies',
    description:
      'Next.js 15 Server Components, Flutter cross-platform mobile apps, sub-second Core Web Vitals, and 100% client code ownership.',
    images: ['/images/web-engineering-platform.jpg'],
  },
};

export default function WebAppDevelopmentPage() {
  const serviceData = SERVICES.find(s => s.id === 'web-app-development')!;

  const technicalCapabilities = [
    {
      category: 'Fast Modern Websites',
      items: ['Next.js 15', 'React Server Components', 'TypeScript', 'Tailwind CSS', 'Smooth Animations'],
      desc: 'Lightning-fast, beautiful web pages that load in under 1 second and look flawless on desktop, tablet, and mobile.',
    },
    {
      category: 'Secure Backends & Databases',
      items: ['Node.js & Express', 'Python & FastAPI', 'PostgreSQL Databases', 'Fast Data Caching', 'Secure APIs'],
      desc: 'Dependable, high-security server systems built to handle millions of requests without slowdowns or crashes.',
    },
    {
      category: 'Mobile Applications',
      items: ['Flutter & Dart SDK', 'Native Android', 'Offline Mode Support', 'Push Notifications', 'Fast Responsive Web Apps'],
      desc: 'Smooth, responsive mobile apps that work even when offline and keep your users engaged with instant notifications.',
    },
    {
      category: 'Cloud Hosting & Security',
      items: ['Cloud Containers', 'AWS & Vercel Hosting', 'Automatic Backups', 'Bank-Grade SSL Security', 'DDoS Protection'],
      desc: 'Rock-solid hosting infrastructure that keeps your site 100% online, secure from hackers, and automatically backed up.',
    },
  ];

  // Structured Data Schema Graph
  const serviceSchemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${COMPANY_INFO.url}/services/web-app-development#breadcrumb`,
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
            name: 'Capabilities & Services',
            item: `${COMPANY_INFO.url}/services`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Custom Web & Mobile Application Development',
            item: `${COMPANY_INFO.url}/services/web-app-development`,
          },
        ],
      },
      {
        '@type': 'Service',
        '@id': `${COMPANY_INFO.url}/services/web-app-development#service`,
        name: 'Custom Web & Mobile Application Development',
        serviceType: 'Full-Stack Web & Mobile Engineering',
        provider: {
          '@type': 'Organization',
          '@id': `${COMPANY_INFO.url}/#organization`,
          name: COMPANY_INFO.name,
        },
        description: serviceData.fullDescription,
        url: `${COMPANY_INFO.url}/services/web-app-development`,
        areaServed: [
          { '@type': 'Country', name: 'India' },
          { '@type': 'Country', name: 'United States' },
          { '@type': 'Country', name: 'United Kingdom' },
          { '@type': 'Country', name: 'United Arab Emirates' },
          { '@type': 'Country', name: 'Canada' },
          { '@type': 'Country', name: 'Australia' },
          { '@type': 'Country', name: 'Singapore' },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Web & Mobile Engineering Capabilities',
          itemListElement: serviceData.capabilities.map((cap) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: cap.title,
              description: cap.description,
            },
          })),
        },
      },
      {
        '@type': 'HowTo',
        '@id': `${COMPANY_INFO.url}/services/web-app-development#howto`,
        name: 'How Motive Technologies Builds Production-Grade Web & Mobile Applications',
        description: 'Our disciplined software engineering workflow from discovery and architectural wireframes to production deployment.',
        step: serviceData.workflows?.map((wf) => ({
          '@type': 'HowToStep',
          position: parseInt(wf.step, 10),
          name: wf.title,
          text: wf.detail,
        })) || [],
      },
      {
        '@type': 'FAQPage',
        '@id': `${COMPANY_INFO.url}/services/web-app-development#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Why build custom web and mobile applications with Motive Technologies?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Motive Technologies designs and engineers high-speed Next.js 15 web applications and Flutter cross-platform mobile apps that achieve perfect 100/100 Google Lighthouse scores. We write clean, type-safe codebases without bloated generic templates or third-party page builders, delivering sub-second loading speeds, military-grade security, and 100% intellectual property transfer to your organization.',
            },
          },
          {
            '@type': 'Question',
            name: 'Why do you choose Next.js 15 and React 19 for enterprise web platforms?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Next.js 15 with React Server Components (RSC) minimizes client JavaScript bundles, streams HTML directly from edge runtimes, provides perfect Core Web Vitals (sub-50ms INP, sub-1s LCP), and renders semantic HTML that search bots index effortlessly.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you provide complete source code and IP ownership?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Every line of source code, Figma design system, deployment script, and database schema is 100% owned by your organization with zero vendor lock-in and strict enterprise NDAs.',
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="bg-white">
      {/* Schema.org Graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemaGraph) }}
      />

      {/* Hero Header */}
      <section className="pt-16 pb-20 bg-motive-dark text-white border-b border-motive-darkborder relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-dark opacity-30 pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <div className="lg:col-span-6 space-y-6">
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

            <div className="lg:col-span-6">
              <WebPerformanceAuditDemo />
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
            From modern company websites to secure client portals and mobile apps, we design clean, intuitive platforms that make your business look world-class.
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
            directAnswer="Motive Technologies builds fast, modern websites and mobile apps using Next.js and Flutter. We never use clunky website builders or slow pre-made templates. Instead, we build custom, lightweight sites that load in under 1 second, look professional on every screen, and turn more visitors into paying customers. Best of all, you own 100% of your code."
            keyTakeaways={[
              'Loads in under 1 second so visitors never leave out of frustration',
              'Built with modern Next.js for top Google search speed',
              'Works smoothly on all phones, tablets, and computers',
              'You own 100% of the code and design with no ongoing platform lock-in',
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
              Every website and app we build is clean, easy to navigate, and works smoothly on every screen size.
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

      {/* Technical Architecture Matrix */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-motive-border">
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-motive-grey">
            FULL-STACK STACK SPECIFICATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-motive-black">
            Our Core Engineering Matrix
          </h2>
          <p className="text-motive-grey text-base">
            We operate across modern runtimes with strict emphasis on type-safety, maintainability, and horizontal scaling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technicalCapabilities.map((tech, idx) => (
            <div
              key={idx}
              className="bg-motive-offwhite border border-motive-border rounded-xl p-8 space-y-4"
            >
              <div className="flex items-center justify-between border-b border-motive-border pb-3">
                <h3 className="text-base font-bold text-motive-black">
                  {tech.category}
                </h3>
                <span className="font-mono text-[10px] text-motive-red font-semibold">
                  LAYER 0{idx + 1}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {tech.items.map((item, iIdx) => (
                  <span
                    key={iIdx}
                    className="px-2.5 py-1 bg-white border border-motive-border rounded text-xs font-mono text-zinc-700"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <p className="text-xs text-motive-grey leading-relaxed pt-2">
                {tech.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Project Enquiry CTA Section */}
      <section className="bg-motive-black text-white py-20 border-t border-motive-darkborder">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="font-mono text-xs text-motive-red font-bold uppercase tracking-widest">
            DIGITAL EXCELLENCE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Ready to build an exceptional digital product?
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Whether you need a high-converting corporate web platform, a client portal, or an offline-first mobile app, let&apos;s engineer something memorable.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?service=web-app-development"
              className="px-8 py-4 bg-motive-red text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-motive-red-hover transition-colors"
            >
              Discuss Your Web or Mobile Project
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
