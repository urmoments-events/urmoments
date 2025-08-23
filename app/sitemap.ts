import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/services/`, lastModified: new Date() },
  ];
}

export const dynamic = 'force-static';


