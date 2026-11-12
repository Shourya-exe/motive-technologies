import React from 'react';
import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { ScrollFrameSequence } from '@/components/home/ScrollFrameSequence';
import { KineticTicker } from '@/components/home/KineticTicker';
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
      {/* 01: Hero with Subtle Mouse-Reactive Background Canvas (No boxy widgets) */}
      <HeroSection />

      {/* 02: Scroll-Driven Video Frame Transformation (Plays frames as you scroll) */}
      <ScrollFrameSequence />

      {/* 03: Kinetic Infinite Marquee Strip */}
      <KineticTicker />

      {/* 04: Brand Introduction (Architectural 3-Column Grid) */}
      <BrandIntroSection />

      {/* 05: Core Capabilities (Luxury Editorial Specification, No Toy Cards) */}
      <CoreCapabilitiesSection />

      {/* 06: Why Motive Technologies (Authoritative Operating Principles Index) */}
      <WhyMotiveSection />

      {/* 07: Our Approach (5-Phase Delivery Timeline) */}
      <OurApproachSection />

      {/* 08: Selected Work (Verified Case Architectures) */}
      <SelectedWorkSection />

      {/* 09: Technology & Innovation Ecosystem (Clean Runtime Matrix) */}
      <TechEcosystemSection />

      {/* 10: Final Conversion Closing */}
      <FinalConversionSection />
    </>
  );
}
