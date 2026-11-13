import React from 'react';
import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { KineticTicker } from '@/components/home/KineticTicker';
import { BrandIntroSection } from '@/components/home/BrandIntroSection';
import { ProblemsWeSolveSection } from '@/components/home/ProblemsWeSolveSection';
import { CoreCapabilitiesSection } from '@/components/home/CoreCapabilitiesSection';
import { WhyMotiveSection } from '@/components/home/WhyMotiveSection';
import { OurApproachSection } from '@/components/home/OurApproachSection';
import { SelectedWorkSection } from '@/components/home/SelectedWorkSection';
import { TechEcosystemSection } from '@/components/home/TechEcosystemSection';
import { ClientFAQSection } from '@/components/home/ClientFAQSection';
import { FinalConversionSection } from '@/components/home/FinalConversionSection';
import { COMPANY_INFO } from '@/data/siteData';

export const metadata: Metadata = {
  title: `${COMPANY_INFO.name} | Intelligent AI Automation, Digital Engineering & SEO`,
  description:
    'Building intelligent systems for a smarter business future. We combine AI agent development, workflow automation, custom web and mobile engineering, and technical SEO.',
  alternates: {
    canonical: COMPANY_INFO.url,
  },
};

export default function HomePage() {
  return (
    <>
      {/* 01: Hero with Subtle Mouse-Reactive Background Canvas */}
      <HeroSection />

      {/* 02: Kinetic Infinite Marquee Strip */}
      <KineticTicker />

      {/* 03: Brand Introduction (Executive 3-Column Value Architecture) */}
      <BrandIntroSection />

      {/* 04: Client Solutions (Common Business Challenges & Tangible Results) */}
      <ProblemsWeSolveSection />

      {/* 05: Core Capabilities (Three Interconnected Pillars & Deliverables) */}
      <CoreCapabilitiesSection />

      {/* 06: Why Motive Technologies (Authoritative Operating Principles Index) */}
      <WhyMotiveSection />

      {/* 07: Our Approach (5-Phase Delivery Timeline) */}
      <OurApproachSection />

      {/* 08: Selected Work (Verified Case Architectures & Client Outcomes) */}
      <SelectedWorkSection />

      {/* 09: Technology & Innovation Ecosystem (Clean Runtime Matrix) */}
      <TechEcosystemSection />

      {/* 10: Client Guide & FAQ (Clear Answers for Confident Decisions) */}
      <ClientFAQSection />

      {/* 11: Final Conversion Closing */}
      <FinalConversionSection />
    </>
  );
}
