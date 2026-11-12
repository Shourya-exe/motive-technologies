import React from 'react';
import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { FullScreenScrollVideo } from '@/components/home/FullScreenScrollVideo';
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

      {/* 02: Full-Screen Scroll Video Frame Sequence (Edge-to-Edge 100vw x 100vh, No Cards) */}
      <FullScreenScrollVideo />

      {/* 03: Kinetic Infinite Marquee Strip */}
      <KineticTicker />

      {/* 04: Normal Website Begins Here Once Sequence Completes */}
      {/* Brand Introduction (Architectural 3-Column Grid) */}
      <BrandIntroSection />

      {/* Core Capabilities (Luxury Editorial Specification, No Toy Cards) */}
      <CoreCapabilitiesSection />

      {/* Why Motive Technologies (Authoritative Operating Principles Index) */}
      <WhyMotiveSection />

      {/* Our Approach (5-Phase Delivery Timeline) */}
      <OurApproachSection />

      {/* Selected Work (Verified Case Architectures) */}
      <SelectedWorkSection />

      {/* Technology & Innovation Ecosystem (Clean Runtime Matrix) */}
      <TechEcosystemSection />

      {/* Final Conversion Closing */}
      <FinalConversionSection />
    </>
  );
}
