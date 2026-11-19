import type { MetadataRoute } from 'next'

// Served at https://www.drived.in/robots.txt - lets all search engines crawl
// the site and tells them where the sitemap is.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://www.drived.in/sitemap.xml',
  }
}
