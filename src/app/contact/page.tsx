import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact/ContactForm';
import { Phone, Globe, Clock, ShieldCheck, HelpCircle, MessageSquare, Mail } from 'lucide-react';
import { COMPANY_INFO } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Contact Us & Project Enquiry',
  description:
    "Let's build something meaningful. Tell us what you are working on. Whether you need intelligent automation, a new digital product or stronger search visibility, let's discuss how we can help.",
  keywords: [
    'contact motive technologies',
    'hire ai developers',
    'ai consultation india',
    'web development inquiry',
    'enterprise automation consultation',
    'motive technologies phone email',
  ],
  alternates: {
    canonical: `${COMPANY_INFO.url}/contact`,
  },
  openGraph: {
    title: 'Contact Us & Project Enquiry — Motive Technologies',
    description: "Let's build something meaningful. Schedule an architectural consultation for AI automation, web engineering, or SEO.",
    url: `${COMPANY_INFO.url}/contact`,
    type: 'website',
  },
};

export default function ContactPage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${COMPANY_INFO.url}/contact#breadcrumb`,
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
            name: 'Contact & Inquiries',
            item: `${COMPANY_INFO.url}/contact`,
          },
        ],
      },
      {
        '@type': 'ContactPage',
        '@id': `${COMPANY_INFO.url}/contact#webpage`,
        name: 'Contact Motive Technologies',
        url: `${COMPANY_INFO.url}/contact`,
        description: 'Connect with Motive Technologies leadership for project scoping, architectural consultations, and partnership inquiries.',
        mainEntity: {
          '@type': 'Organization',
          '@id': `${COMPANY_INFO.url}/#organization`,
          name: COMPANY_INFO.name,
          telephone: COMPANY_INFO.primaryPhone,
          email: COMPANY_INFO.email,
          contactPoint: [
            {
              '@type': 'ContactPoint',
              telephone: COMPANY_INFO.primaryPhone,
              contactType: 'customer service',
              areaServed: ['IN', 'US', 'GB', 'AE', 'CA', 'AU', 'SG'],
              availableLanguage: ['English', 'Hindi', 'Bengali'],
            },
          ],
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

      {/* Page Header */}
      <section className="pt-16 pb-20 bg-motive-offwhite/50 border-b border-motive-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-motive-red" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-motive-grey">
                GET IN TOUCH
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-motive-black leading-tight">
              Let&apos;s Build Something{' '}
              <span className="text-motive-red">Meaningful.</span>
            </h1>
            <p className="text-base sm:text-lg text-motive-grey leading-relaxed">
              Tell us what you&apos;re working on. Whether you need intelligent automation, a new digital product or stronger search visibility, let&apos;s discuss how we can help.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Contact Form + Channels */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Phone & Operational Details (4 cols on lg) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-motive-grey block mb-2">
                DIRECT COMMUNICATION
              </span>
              <h2 className="text-2xl font-bold text-motive-black mb-3">
                Reach Our Engineering Team Directly
              </h2>
              <p className="text-sm text-motive-grey leading-relaxed">
                We believe in honest, straightforward conversations with no pushy sales reps. You speak directly with the people who will actually design and build your project.
              </p>
            </div>

            {/* Telephone Block */}
            <div className="bg-motive-offwhite border border-motive-border rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-motive-border">
                <Phone className="w-4 h-4 text-motive-red" />
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-motive-black">
                  Direct Phone Channels
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                {COMPANY_INFO.phones.map((phone, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="text-motive-grey">{phone.label}:</span>
                    <a
                      href={`tel:${phone.raw}`}
                      className="font-bold text-motive-black hover:text-motive-red transition-colors"
                    >
                      {phone.display}
                    </a>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-motive-border">
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded font-mono text-xs font-bold transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Start WhatsApp Conversation</span>
                </a>
              </div>
            </div>

            {/* Email Block */}
            <div className="bg-motive-offwhite border border-motive-border rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-2 pb-2 border-b border-motive-border">
                <Mail className="w-4 h-4 text-motive-red" />
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-motive-black">
                  Electronic Mail
                </span>
              </div>
              <p className="text-xs text-motive-grey">
                For detailed scopes, architecture briefs, or RFP submissions:
              </p>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="font-mono text-xs font-bold text-motive-red hover:underline block break-all"
              >
                {COMPANY_INFO.email}
              </a>
            </div>

            {/* Operating Availability */}
            <div className="border border-motive-border rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-motive-grey" />
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-motive-black">
                  Operational Hours
                </span>
              </div>
              <p className="text-xs text-motive-grey leading-relaxed">
                Monday &ndash; Saturday: 09:00 &ndash; 20:00 IST<br />
                Global Clients: Flexible asynchronous and scheduled coordination across UTC-5 (EST) to UTC+4 (GST).
              </p>
            </div>

            {/* Engagement Commitment */}
            <div className="flex items-start gap-3 p-4 bg-zinc-50 rounded-lg border border-motive-border text-xs text-motive-grey">
              <ShieldCheck className="w-4 h-4 text-motive-red shrink-0 mt-0.5" />
              <p>
                <strong className="text-motive-black font-semibold">Strict Privacy Guarantee: </strong>
                All project discussions, architectural concepts, and proprietary inquiries are held under strict non-disclosure. We never share your data.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Consultation Request Form (7 cols on lg) */}
          <div className="lg:col-span-7 bg-white border border-motive-border rounded-2xl p-6 sm:p-10 shadow-premium">
            <div className="pb-6 mb-8 border-b border-motive-border">
              <span className="text-[10px] font-mono uppercase tracking-widest text-motive-red font-bold block mb-1">
                PROJECT CONSULTATION FORM
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-motive-black">
                Tell Us About Your Requirements
              </h2>
              <p className="text-xs text-motive-grey mt-1">
                Fill in the details below. We review every submission within 24 hours and reply with actionable initial thoughts.
              </p>
            </div>

            <Suspense fallback={<div className="p-8 text-center text-xs font-mono text-motive-grey">Loading Consultation Engine...</div>}>
              <ContactForm />
            </Suspense>
          </div>

        </div>
      </section>
    </div>
  );
}
