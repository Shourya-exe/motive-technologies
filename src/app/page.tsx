import React from 'react';
import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { BrandIntroSection } from '@/components/home/BrandIntroSection';
import { CoreCapabilitiesSection } from '@/components/home/CoreCapabilitiesSection';
import { WhyMotiveSection } from '@/components/home/WhyMotiveSection';
import { OurApproachSection } from '@/components/home/OurApproachSection';
import { SelectedWorkSection } from '@/components/home/SelectedWorkSection';
import { TechEcosystemSection } from '@/components/home/TechEcosystemSection';
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
      {/* Section 01 — Hero */}
      <HeroSection />

      {/* Section 02 — Brand Introduction */}
      <BrandIntroSection />

      {/* Section 03 — Our Core Capabilities */}
      <CoreCapabilitiesSection />

      {/* Section 04 — Why Motive Technologies */}
      <WhyMotiveSection />

      {/* Section 05 — Our Approach */}
      <OurApproachSection />

      {/* Section 06 — Selected Work */}
      <SelectedWorkSection />

      {/* Section 07 — Technology & Innovation */}
      <TechEcosystemSection />

      {/* Section 08 — Final Conversion Section */}
      <FinalConversionSection />
    </>
  );
}
