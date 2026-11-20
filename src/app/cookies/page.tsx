import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Cookie, ArrowLeft, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Cookie Policy | Motive Technologies',
  description: 'Understand how Motive Technologies uses cookies to deliver a fast, secure, and private browsing experience.',
  alternates: {
    canonical: `${COMPANY_INFO.url}/cookies`,
  },
};

export default function CookiesPage() {
  return (
    <div className="bg-white py-16 sm:py-24 border-b border-motive-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="border-b border-motive-border pb-8 space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-motive-red" />
            <span className="font-mono text-xs uppercase tracking-widest text-motive-grey font-bold">
              TRANSPARENCY &amp; PRIVACY
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-motive-black tracking-tight">
            Cookie Policy
          </h1>
          <p className="text-xs font-mono text-motive-grey">
            Last Updated: November 2026 &bull; Motive Technologies ({COMPANY_INFO.domain})
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-10 text-sm text-motive-grey leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-motive-black">1. What Are Cookies?</h2>
            <p>
              Cookies are small, secure text files that websites place on your computer or mobile device when you visit. They help the website remember your actions and preferences over time, so you don&rsquo;t have to keep re-entering information whenever you return or browse between pages.
            </p>
            <p>
              At Motive Technologies, we believe in minimal, privacy-first technology. We only use cookies that are genuinely helpful to keep our website running smoothly, safely, and quickly.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-bold text-motive-black">2. The Cookies We Use</h2>
            <p>
              Here is a clear breakdown of the types of cookies we use on our website:
            </p>

            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              <div className="p-4 border border-motive-border rounded-lg bg-zinc-50 space-y-2">
                <div className="flex items-center gap-2 text-motive-black font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Essential Cookies</span>
                </div>
                <p className="text-xs text-zinc-600 leading-normal">
                  Required for our website to function properly. They help with basic security, page navigation, and ensuring contact forms submit safely.
                </p>
              </div>

              <div className="p-4 border border-motive-border rounded-lg bg-zinc-50 space-y-2">
                <div className="flex items-center gap-2 text-motive-black font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Performance &amp; Speed</span>
                </div>
                <p className="text-xs text-zinc-600 leading-normal">
                  Anonymous counters that tell us which pages are popular and how fast pages load, helping us continuously optimize site speed.
                </p>
              </div>

              <div className="p-4 border border-motive-border rounded-lg bg-zinc-50 space-y-2">
                <div className="flex items-center gap-2 text-motive-black font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Preference Cookies</span>
                </div>
                <p className="text-xs text-zinc-600 leading-normal">
                  Remember your preferred settings (such as dismissing banners or keeping selected filters) for a seamless browsing experience.
                </p>
              </div>

              <div className="p-4 border border-motive-border rounded-lg bg-zinc-50 space-y-2">
                <div className="flex items-center gap-2 text-motive-black font-semibold">
                  <ShieldCheck className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Zero Ad Tracking</span>
                </div>
                <p className="text-xs text-zinc-600 leading-normal">
                  We do not use advertising networks, cross-site trackers, or marketing cookies. We never sell your browsing habits to anyone.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-motive-black">3. What We Never Do</h2>
            <ul className="list-disc pl-5 space-y-2 text-zinc-700">
              <li><strong>No Third-Party Ad Networks:</strong> We do not host banner ads, retargeting pixels, or ad networks on our website.</li>
              <li><strong>No Data Monetization:</strong> We never sell, lease, or trade your cookie data or personal browsing info.</li>
              <li><strong>No Cross-Site Surveillance:</strong> We do not track what you do on other websites after leaving Motive.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-motive-black">4. How You Can Control or Turn Off Cookies</h2>
            <p>
              You are always in control of cookies. Most web browsers allow you to manage your cookie preferences through their settings menu. You can set your browser to refuse cookies, alert you when a cookie is being sent, or delete existing cookies at any time.
            </p>
            <p>
              To manage cookies in your browser:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-700">
              <li><strong>Google Chrome:</strong> Settings &rarr; Privacy and security &rarr; Third-party cookies</li>
              <li><strong>Apple Safari:</strong> Preferences &rarr; Privacy &rarr; Manage Website Data</li>
              <li><strong>Mozilla Firefox:</strong> Settings &rarr; Privacy &amp; Security &rarr; Enhanced Tracking Protection</li>
              <li><strong>Microsoft Edge:</strong> Settings &rarr; Cookies and site permissions</li>
            </ul>
            <p className="text-xs text-zinc-500 italic">
              Please note: If you completely disable essential cookies, some interactive parts of the website (such as booking consultations) may not work as intended.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-motive-black">5. Questions &amp; Support</h2>
            <p>
              If you have any questions about our cookie policy or data privacy, our team is happy to assist:
            </p>
            <p>
              Email:{' '}
              <a href={`mailto:${COMPANY_INFO.email}`} className="text-motive-red font-semibold hover:underline">
                {COMPANY_INFO.email}
              </a>
              <br />
              Direct Phone:{' '}
              <a href={`tel:${COMPANY_INFO.primaryPhone.replace(/\s+/g, '')}`} className="text-motive-black font-semibold hover:underline">
                {COMPANY_INFO.primaryPhone}
              </a>
            </p>
          </section>

        </div>

        {/* Navigation Footer */}
        <div className="pt-8 border-t border-motive-border flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-motive-black hover:text-motive-red transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Homepage</span>
          </Link>

          <div className="flex items-center gap-4 text-xs font-mono">
            <Link href="/privacy" className="text-motive-grey hover:text-motive-black transition-colors">
              Privacy Policy
            </Link>
            <span className="text-zinc-300">&bull;</span>
            <Link href="/security" className="text-motive-grey hover:text-motive-black transition-colors">
              Security
            </Link>
            <span className="text-zinc-300">&bull;</span>
            <Link href="/terms" className="text-motive-grey hover:text-motive-black transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
