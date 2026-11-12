import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY_INFO } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Motive Technologies',
  description: 'Terms of service and engineering engagement conditions for Motive Technologies.',
};

export default function TermsPage() {
  return (
    <div className="bg-white py-16 sm:py-20 border-b border-motive-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="border-b border-motive-border pb-6 space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-motive-red font-bold">
            TERMS OF SERVICE
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-motive-black">
            Terms &amp; Conditions
          </h1>
          <p className="text-xs font-mono text-motive-grey">
            Effective Date: November 2026 &bull; Motive Technologies ({COMPANY_INFO.domain})
          </p>
        </div>

        <div className="space-y-8 text-sm text-motive-grey leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-motive-black">1. Acceptance of Terms</h2>
            <p>
              By accessing and utilizing the website of Motive Technologies ({COMPANY_INFO.domain}), you agree to comply with and be bound by the following terms and conditions of use.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-motive-black">2. Scope of Professional Services</h2>
            <p>
              Motive Technologies provides AI automation, web and application engineering, and technical SEO advisory services. Formal engineering engagements, milestones, deliverables, payment terms, and service-level agreements are defined exclusively in individually executed Master Services Agreements (MSAs) and Statements of Work (SOWs).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-motive-black">3. Intellectual Property Rights</h2>
            <p>
              All branding, text, architectural diagrams, layout compositions, and media published on this website are the proprietary property of Motive Technologies. Custom software, codebases, and assets developed for clients are transferred according to the explicit terms established in respective commercial contracts.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-motive-black">4. Disclaimer of Warranties</h2>
            <p>
              The materials on this website are provided on an &ldquo;as is&rdquo; basis for informational purposes. While we strive for absolute accuracy, Motive Technologies makes no representations or warranties regarding third-party search engine indexation algorithms, ranking positions, or external platform uptime.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-motive-black">5. Inquiries &amp; Governance</h2>
            <p>
              For legal inquiries regarding our terms or corporate governance, please contact us at {COMPANY_INFO.primaryPhone} or via {COMPANY_INFO.domain}.
            </p>
          </section>
        </div>

        <div className="pt-8 border-t border-motive-border">
          <Link
            href="/"
            className="text-xs font-mono font-bold uppercase tracking-wider text-motive-black hover:text-motive-red"
          >
            &larr; Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
