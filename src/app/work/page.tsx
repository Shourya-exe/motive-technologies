import React from 'react';
import type { Metadata } from 'next';
import { WorkClient } from './WorkClient';
import { COMPANY_INFO, PROJECTS } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Selected Work & Case Architectures',
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
  openGraph: {
    title: 'Selected Work & Case Architectures — Motive Technologies',
    description: 'Verified operational outcomes: Autonomous AI agents, Next.js web applications, and high-performance digital platforms.',
    url: `${COMPANY_INFO.url}/work`,
    type: 'website',
  },
};

export default function WorkPage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${COMPANY_INFO.url}/work#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: COMPANY_INFO.url,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Selected Work & Case Architectures',
            item: `${COMPANY_INFO.url}/work`,
          },
        ],
      },
      {
        '@type': 'CollectionPage',
        '@id': `${COMPANY_INFO.url}/work#collection`,
        name: 'Motive Technologies Selected Case Architectures & Outcomes',
        url: `${COMPANY_INFO.url}/work`,
        description: 'Verified enterprise case studies spanning autonomous AI agents, WhatsApp business integrations, and modern full-stack web platforms.',
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: PROJECTS.map((project, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            name: project.title,
            description: project.summary,
          })),
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <WorkClient />
    </>
  );
}
