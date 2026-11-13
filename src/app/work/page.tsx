import React from 'react';
import type { Metadata } from 'next';
import { WorkClient } from './WorkClient';
import { COMPANY_INFO } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Selected Work & Case Architectures | Best AI Agents & Engineering',
  description:
    'Explore verified case architectures and operational outcomes engineered by Motive Technologies: the best AI agents development, autonomous WhatsApp & CRM workflows, web applications, and SEO growth.',
  keywords: [
    'best ai agents development',
    'best ai agent development company',
    'top ai agent developers',
    'ai agent case studies',
    'autonomous whatsapp agent',
    'enterprise ai workflow automation',
    'custom web application engineering',
    'motive technologies work',
  ],
  alternates: {
    canonical: `${COMPANY_INFO.url}/work`,
  },
};

export default function WorkPage() {
  return <WorkClient />;
}
