import { MetadataRoute } from 'next';
import { COMPANY_INFO } from '@/data/siteData';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = COMPANY_INFO.url;

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      // Explicit allowance for AI Search, Answer Engines & LLM scrapers (AEO & GEO optimization)
      {
        userAgent: [
          'Googlebot',
          'Bingbot',
          'Slurp',
          'DuckDuckBot',
          'Baiduspider',
          'YandexBot',
          'GPTBot',
          'OAI-SearchBot',
          'ChatGPT-User',
          'PerplexityBot',
          'ClaudeBot',
          'anthropic-ai',
          'Google-Extended',
          'Applebot-Extended',
          'cohere-ai',
          'Meta-ExternalAgent',
          'Amazonbot',
          'Bytespider',
          'CCBot',
          'Diffbot',
          'FacebookBot',
          'DuckAssistBot',
        ],
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
