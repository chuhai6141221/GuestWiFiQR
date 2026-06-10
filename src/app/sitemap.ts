import type { MetadataRoute } from "next";

import { seoPages, SITE_URL } from "@/lib/seoPages";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "/pricing", "/privacy", "/terms"];
  const seoRoutes = seoPages.map((page) => `/${page.slug}`);

  return [...staticRoutes, ...seoRoutes].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8
  }));
}
