import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { allPagedAreas } from "@/data/service-areas";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  /** Static pages – high priority */
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/areas`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/clients`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  /** Dynamic area pages – only include pageEnabled ones */
  const areaRoutes: MetadataRoute.Sitemap = allPagedAreas
    .filter((area) => area.pageEnabled)
    .map((area) => ({
      url: `${siteUrl}/areas/${area.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: area.type === "governorate" ? 0.85 : 0.75,
    }));

  return [...staticRoutes, ...areaRoutes];
}
