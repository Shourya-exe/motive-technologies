'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Loader2, Sparkles } from 'lucide-react';

const SERVICE_OPTIONS = [
  'AI agent',
  'Automation',
  'Website',
  'Mobile app',
  'CRM / ERP',
  'Marketing & SEO',
  'Not sure yet',
];

export const HeroConsultationForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+91 ');
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>(['Not sure yet']);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggleNeed = (need: string) => {
    setError(null);
    if (need === 'Not sure yet') {
      setSelectedNeeds(['Not sure yet']);
      return;
    }

    setSelectedNeeds((prev) => {
      const filtered = prev.filter((item) => item !== 'Not sure yet');
      if (filtered.includes(need)) {
        const next = filtered.filter((item) => item !== need);
        return next.length === 0 ? ['Not sure yet'] : next;
      } else {
        return [...filtered, need];
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }

    const cleanPhone = phone.trim();
    if (!cleanPhone || cleanPhone === '+91' || cleanPhone.length < 7) {
      setError('Please enter a valid phone or WhatsApp number.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Optional async submission to /api/contact
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: name.trim(),
          companyName: 'Direct Hero Lead',
          email: `${name.trim().toLowerCase().replace(/[^a-z0-9]/g, '') || 'client'}@inbound.motive`,
          phoneNumber: cleanPhone,
          serviceRequired: selectedNeeds.join(', '),
          projectDescription: `Hero Quick Consultation Request. Needs: ${selectedNeeds.join(', ')}`,
        }),
      }).catch(() => {
        // Handled silently so client experience is always positive
      });

      setIsSubmitted(true);
    } catch {
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto lg:max-w-none">
      {/* Subtle ambient red/grey glow matching website theme */}
      <div className="absolute -inset-1 bg-gradient-to-r from-red-500/10 via-zinc-200/30 to-zinc-300/20 rounded-3xl blur-xl pointer-events-none -z-10" />

      {/* Main Form Container Card */}
      <div className="bg-white rounded-2xl border border-motive-border shadow-xl p-6 sm:p-8 space-y-5">
        
        {isSubmitted ? (
          <div className="py-8 text-center space-y-4 animate-page-enter">
            <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-xl sm:text-2xl font-extrabold text-motive-black tracking-tight">
                Plan Request Received!
              </h3>
              <p className="text-sm text-motive-grey max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-motive-black">{name}</strong>. Our senior solutions architect will review your project requirements ({selectedNeeds.join(', ')}) and contact you on <strong className="text-motive-black">{phone}</strong> with a clear plan and quote.
              </p>
            </div>
            <div className="pt-3">
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setName('');
                  setPhone('+91 ');
                  setSelectedNeeds(['Not sure yet']);
                }}
                className="text-xs font-mono font-bold text-motive-red hover:underline"
              >
                ← Submit another inquiry
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Header: Title and Subtitle */}
            <div className="space-y-1.5 text-left">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-motive-black tracking-tight">
                Get a free consultation
              </h3>
              <p className="text-xs sm:text-sm text-motive-grey leading-relaxed">
                Tell us what you need. We reply with a clear plan and quote.
              </p>
            </div>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-motive-red font-medium">
                {error}
              </div>
            )}

            {/* Field 1: Name */}
            <div className="space-y-1.5 text-left">
              <label htmlFor="hero-name" className="block text-xs font-bold text-motive-black tracking-wide">
                Name
              </label>
              <input
                id="hero-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full px-4 py-3 bg-white rounded-xl border border-zinc-200 text-sm text-motive-black placeholder:text-zinc-400 focus:outline-none focus:border-motive-black focus:ring-1 focus:ring-motive-black transition-all"
                required
              />
            </div>

            {/* Field 2: Phone or WhatsApp */}
            <div className="space-y-1.5 text-left">
              <label htmlFor="hero-phone" className="block text-xs font-bold text-motive-black tracking-wide">
                Phone or WhatsApp
              </label>
              <input
                id="hero-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 Your number"
                className="w-full px-4 py-3 bg-white rounded-xl border border-zinc-200 text-sm text-motive-black placeholder:text-zinc-400 focus:outline-none focus:border-motive-black focus:ring-1 focus:ring-motive-black transition-all font-mono"
                required
              />
            </div>

            {/* Field 3: What do you need? (Selection Pills) */}
            <div className="space-y-2 text-left">
              <label className="block text-xs font-bold text-motive-black tracking-wide">
                What do you need?
              </label>
              <div className="flex flex-wrap gap-2 pt-0.5">
                {SERVICE_OPTIONS.map((option) => {
                  const isSelected = selectedNeeds.includes(option);
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => toggleNeed(option)}
                      className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-150 cursor-pointer ${
                        isSelected
                          ? 'bg-motive-black text-white border border-motive-black shadow-sm'
                          : 'bg-white text-zinc-700 border border-zinc-300 hover:border-zinc-400 hover:text-motive-black'
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-full bg-motive-black hover:bg-motive-red text-white text-sm font-bold flex items-center justify-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg group cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Preparing your plan...</span>
                  </>
                ) : (
                  <>
                    <span>Get my free plan</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </div>

            {/* Footer Assurance */}
            <div className="pt-1 text-center">
              <p className="text-[11px] text-zinc-400 font-sans flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
                <span>Your details are never shared or sold.</span>
              </p>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
