import React from 'react';
import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { ScrollFrameSequence } from '@/components/home/ScrollFrameSequence';
import { KineticTicker } from '@/components/home/KineticTicker';
import { BrandIntroSection } from '@/components/home/BrandIntroSection';
import { CoreCapabilitiesSection } from '@/components/home/CoreCapabilitiesSection';
import { SystemImpactCalculator } from '@/components/home/SystemImpactCalculator';
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
      {/* Hero with Subtle Mouse-Reactive Background Canvas (No boxy widgets) */}
      <HeroSection />

      {/* Scroll-Driven Video Frame Transformation (Plays frames as you scroll) */}
      <ScrollFrameSequence />

      {/* Kinetic Infinite Marquee Strip */}
      <KineticTicker />

      {/* Normal Full Website Starts Here Once Frames Are Complete */}
      {/* Brand Introduction */}
      <BrandIntroSection />

      {/* Core Capabilities */}
      <CoreCapabilitiesSection />

      {/* Executive ROI & Efficiency Simulation Engine */}
      <section className="py-20 bg-white border-b border-motive-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SystemImpactCalculator />
        </div>
      </section>

      {/* Why Motive Technologies */}
      <WhyMotiveSection />

      {/* Our Approach (5-Phase Interactive Journey) */}
      <OurApproachSection />

      {/* Selected Work */}
      <SelectedWorkSection />

      {/* Technology & Innovation Ecosystem */}
      <TechEcosystemSection />

      {/* Final Conversion Section */}
      <FinalConversionSection />
    </>
  );
}
