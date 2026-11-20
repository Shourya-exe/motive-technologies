import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Eye, Keyboard, Sparkles, PhoneCall, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Accessibility Statement | Motive Technologies',
  description: 'Our commitment to digital accessibility, inclusive design, and WCAG 2.1 Level AA compliance.',
  alternates: {
    canonical: `${COMPANY_INFO.url}/accessibility`,
  },
};

export default function AccessibilityPage() {
  return (
    <div className="bg-white py-16 sm:py-24 border-b border-motive-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="border-b border-motive-border pb-8 space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="font-mono text-xs uppercase tracking-widest text-motive-grey font-bold">
              INCLUSIVE DESIGN &amp; USABILITY
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-motive-black tracking-tight">
            Accessibility Statement
          </h1>
          <p className="text-xs font-mono text-motive-grey">
            Targeting WCAG 2.1 Level AA &bull; Motive Technologies ({COMPANY_INFO.domain})
          </p>
        </div>

        {/* Intro */}
        <div className="space-y-4 text-base text-zinc-700 leading-relaxed">
          <p>
            Motive Technologies is committed to ensuring that our website and digital services are accessible to everyone, including people with visual, hearing, motor, or cognitive disabilities.
          </p>
          <p>
            We believe the web works best when it works for everyone. We continuously design, test, and improve our website using the <strong>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</strong> as our technical benchmark.
          </p>
        </div>

        {/* Key Features */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-motive-black">Accessibility Features Built Into This Site</h2>
          
          <div className="grid gap-4 sm:grid-cols-2 pt-2">
            
            <div className="p-4 border border-motive-border rounded-lg bg-zinc-50 space-y-2">
              <div className="flex items-center gap-2 text-motive-black font-semibold text-sm">
                <Keyboard className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Full Keyboard Navigation</span>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                All navigation menus, interactive buttons, consultation forms, and links can be easily reached and operated using standard keyboard keys (Tab, Shift+Tab, Enter, and Space).
              </p>
            </div>

            <div className="p-4 border border-motive-border rounded-lg bg-zinc-50 space-y-2">
              <div className="flex items-center gap-2 text-motive-black font-semibold text-sm">
                <Eye className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Clear Contrast &amp; Legibility</span>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                All body text, headings, and call-to-actions are tested against strict 4.5:1 color contrast ratios against their backgrounds for effortless readability in bright and low-light environments.
              </p>
            </div>

            <div className="p-4 border border-motive-border rounded-lg bg-zinc-50 space-y-2">
              <div className="flex items-center gap-2 text-motive-black font-semibold text-sm">
                <Sparkles className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>Screen-Reader Compatibility</span>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                We use clean semantic HTML5 markup (headings, lists, landmarks, and ARIA labels) so screen readers like NVDA, JAWS, VoiceOver, and TalkBack can narrate content accurately.
              </p>
            </div>

            <div className="p-4 border border-motive-border rounded-lg bg-zinc-50 space-y-2">
              <div className="flex items-center gap-2 text-motive-black font-semibold text-sm">
                <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                <span>Responsive Zoom &amp; Scaling</span>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Text and layouts scale smoothly up to 200% zoom on modern desktop and mobile browsers without content being cut off or requiring horizontal scrolling.
              </p>
            </div>

          </div>
        </div>

        {/* Practical Checklist */}
        <div className="space-y-4 text-sm text-motive-grey leading-relaxed border-t border-motive-border pt-10">
          <h2 className="text-lg font-bold text-motive-black">Practical Steps We Follow</h2>
          <ul className="list-disc pl-5 space-y-2 text-zinc-700">
            <li><strong>Skip to Main Content:</strong> A direct keyboard shortcut link appears at the very top of the page for users navigating with assistive tech to bypass the header immediately.</li>
            <li><strong>Descriptive Alt Text:</strong> Meaningful case study screenshots, project previews, and illustrations feature descriptive alt attributes explaining their context.</li>
            <li><strong>Clear Form Labels:</strong> Input fields on our project inquiry page feature clear, persistent labels and high-visibility error messages.</li>
            <li><strong>No Unwelcome Motion:</strong> We avoid intrusive popups, autoplaying videos with sound, or rapid animations that can cause vestibular discomfort.</li>
          </ul>
        </div>

        {/* Feedback Section */}
        <div className="space-y-4 text-sm text-motive-grey leading-relaxed border-t border-motive-border pt-10">
          <h2 className="text-lg font-bold text-motive-black">Feedback &amp; Accessibility Assistance</h2>
          <p>
            We welcome your feedback on the accessibility of our website. If you encounter any barriers, find any part of the site difficult to read or navigate, or need information delivered in an alternative format:
          </p>
          <div className="p-4 bg-zinc-50 border border-motive-border rounded-lg space-y-2">
            <p className="text-sm text-zinc-800">
              <strong>Email:</strong>{' '}
              <a href={`mailto:${COMPANY_INFO.email}`} className="text-motive-red font-semibold hover:underline">
                {COMPANY_INFO.email}
              </a>
            </p>
            <p className="text-sm text-zinc-800">
              <strong>Phone &amp; WhatsApp:</strong>{' '}
              <a href={`tel:${COMPANY_INFO.primaryPhone.replace(/\s+/g, '')}`} className="text-motive-black font-semibold hover:underline">
                {COMPANY_INFO.primaryPhone}
              </a>
            </p>
            <p className="text-xs text-zinc-500">
              Please include the URL of the page you were visiting and a brief note on the difficulty you encountered. Our engineering team will review and address your report promptly.
            </p>
          </div>
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
            <Link href="/sitemap" className="text-motive-grey hover:text-motive-black transition-colors">
              Sitemap
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
