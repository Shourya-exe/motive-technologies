import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact/ContactForm';
import { Phone, Globe, Clock, ShieldCheck, HelpCircle, MessageSquare, Mail } from 'lucide-react';
import { COMPANY_INFO } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Contact Us & Project Enquiry | Motive Technologies',
  description:
    "Let's build something meaningful. Tell us what you are working on. Whether you need intelligent automation, a new digital product or stronger search visibility, let's discuss how we can help.",
  alternates: {
    canonical: `${COMPANY_INFO.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <div className="bg-white">
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
                Reach Our Engineering Team
              </h2>
              <p className="text-sm text-motive-grey leading-relaxed">
                We welcome inquiries from founders, CTOs, and operations directors looking to modernize processes or build custom software.
              </p>
            </div>

            {/* Direct Phone & WhatsApp Cards */}
            <div className="space-y-4">
              {/* Dedicated WhatsApp Card */}
              <div className="p-6 bg-emerald-50/60 border border-emerald-200 rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-800 font-bold block">
                    Official WhatsApp
                  </span>
                  <span className="text-[10px] font-mono text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded font-semibold">
                    Fast Response
                  </span>
                </div>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-bold font-mono text-emerald-950 hover:text-emerald-700 transition-colors flex items-center gap-2"
                >
                  <MessageSquare className="w-5 h-5 text-emerald-600" />
                  <span>{COMPANY_INFO.whatsappNumber}</span>
                </a>
                <p className="text-xs text-emerald-800">
                  Instant scoping &amp; project inquiries directly on WhatsApp.
                </p>
              </div>

              {/* Official Email Inbox Card */}
              <div className="p-6 bg-motive-offwhite border border-motive-border rounded-xl">
                <span className="text-[10px] font-mono uppercase tracking-widest text-motive-grey block mb-1">
                  Official Email Inbox
                </span>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-lg sm:text-xl font-bold font-mono text-motive-black hover:text-motive-red transition-colors flex items-center gap-2 break-all"
                >
                  <Mail className="w-5 h-5 text-motive-red shrink-0" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
                <p className="text-xs text-motive-grey mt-1">
                  Inquiries delivered directly to our solutions desk via Resend.
                </p>
              </div>

              <div className="p-6 bg-motive-offwhite border border-motive-border rounded-xl">
                <span className="text-[10px] font-mono uppercase tracking-widest text-motive-grey block mb-1">
                  Primary Voice Line
                </span>
                <a
                  href={`tel:${COMPANY_INFO.primaryPhone.replace(/\s+/g, '')}`}
                  className="text-xl font-bold font-mono text-motive-black hover:text-motive-red transition-colors flex items-center gap-2"
                >
                  <Phone className="w-5 h-5 text-motive-red" />
                  <span>{COMPANY_INFO.primaryPhone}</span>
                </a>
                <p className="text-xs text-motive-grey mt-1">
                  Direct solutions architect access for project scoping.
                </p>
              </div>

              <div className="p-6 bg-motive-offwhite border border-motive-border rounded-xl">
                <span className="text-[10px] font-mono uppercase tracking-widest text-motive-grey block mb-1">
                  Secondary Direct Line
                </span>
                <a
                  href={`tel:${COMPANY_INFO.secondaryPhone.replace(/\s+/g, '')}`}
                  className="text-xl font-bold font-mono text-motive-black hover:text-motive-red transition-colors flex items-center gap-2"
                >
                  <Phone className="w-5 h-5 text-motive-red" />
                  <span>{COMPANY_INFO.secondaryPhone}</span>
                </a>
                <p className="text-xs text-motive-grey mt-1">
                  Operational and technical inquiries.
                </p>
              </div>

              <div className="p-6 bg-motive-offwhite border border-motive-border rounded-xl">
                <span className="text-[10px] font-mono uppercase tracking-widest text-motive-grey block mb-1">
                  Official Web Portal
                </span>
                <a
                  href={COMPANY_INFO.url}
                  className="text-base font-bold font-mono text-motive-black hover:text-motive-red transition-colors flex items-center gap-2"
                >
                  <Globe className="w-4 h-4 text-motive-red" />
                  <span>{COMPANY_INFO.domain}</span>
                </a>
              </div>
            </div>

            {/* Response Assurance Card */}
            <div className="p-6 bg-zinc-950 text-white rounded-xl space-y-3 font-mono text-xs">
              <div className="flex items-center gap-2 text-motive-red font-bold">
                <Clock className="w-4 h-4" />
                <span>RESPONSE TIMELINE GUARANTEE</span>
              </div>
              <p className="text-zinc-300 leading-relaxed">
                All inquiries receive a comprehensive initial evaluation by a technical lead within 24 business hours. We do not pass you to aggressive non-technical sales brokers.
              </p>
              <div className="pt-2 border-t border-zinc-800 text-[10px] text-zinc-500 flex items-center justify-between">
                <span>STANDARD: NDA COMPLIANT</span>
                <span className="text-emerald-400">DIRECT ACCESS</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Lead Generation Form (7 cols on lg) */}
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="p-12 text-center text-xs font-mono">Loading enquiry console...</div>}>
              <ContactForm />
            </Suspense>
          </div>

        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-motive-offwhite/50 border-t border-motive-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-motive-grey">
              CLARIFICATIONS
            </span>
            <h2 className="text-3xl font-extrabold text-motive-black">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg border border-motive-border">
              <h3 className="text-base font-bold text-motive-black mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-motive-red shrink-0" />
                <span>How quickly can we start on a new project?</span>
              </h3>
              <p className="text-xs sm:text-sm text-motive-grey leading-relaxed pl-6">
                Upon reviewing your scope, we typically conduct a discovery call within 24-48 hours. After aligning on architecture and deliverables, initial project sprints commence within 5 business days.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-motive-border">
              <h3 className="text-base font-bold text-motive-black mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-motive-red shrink-0" />
                <span>Do you sign Non-Disclosure Agreements (NDAs)?</span>
              </h3>
              <p className="text-xs sm:text-sm text-motive-grey leading-relaxed pl-6">
                Yes. We hold client confidentiality and proprietary business logic to the highest standard. Mutual NDAs are executed prior to sharing sensitive databases or internal workflow specifics.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-motive-border">
              <h3 className="text-base font-bold text-motive-black mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-motive-red shrink-0" />
                <span>Can you build integrated solutions spanning AI, web apps, and SEO?</span>
              </h3>
              <p className="text-xs sm:text-sm text-motive-grey leading-relaxed pl-6">
                Absolutely. That is our core advantage. We engineer connected digital platforms where your high-speed web application interacts seamlessly with automated backend workflows and maintains technical search engine dominance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
