import { COMPANY_INFO } from '@/data/siteData';
import { BLOG_POSTS } from '@/data/blogData';

export async function GET() {
  const baseUrl = COMPANY_INFO.url;

  const rssItems = BLOG_POSTS.map((post) => {
    const postUrl = `${baseUrl}/blog/${post.slug}`;
    const pubDate = new Date(post.publishedAt).toUTCString();

    return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${pubDate}</pubDate>
      <category><![CDATA[${post.category}]]></category>
      <author>${COMPANY_INFO.email} (${post.author.name})</author>
    </item>`;
  }).join('');

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[${COMPANY_INFO.name} Technical Journal & Insights]]></title>
    <link>${baseUrl}/blog</link>
    <description><![CDATA[${COMPANY_INFO.subheadline}]]></description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${rssItems}
  </channel>
</rss>`;

  return new Response(rssFeed.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}
