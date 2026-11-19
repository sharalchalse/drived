import type { MetadataRoute } from 'next'

// Served at https://www.drived.in/sitemap.xml - submit this URL in Google Search Console.
// Add an entry here for every new page you create.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.drived.in/',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
