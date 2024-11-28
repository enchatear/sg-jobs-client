import { MetadataRoute } from 'next';

export default async function robots(): Promise<MetadataRoute.Robots> {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/candidate',
        disallow: ['/admin'],
      },
    ],
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
  };
}
