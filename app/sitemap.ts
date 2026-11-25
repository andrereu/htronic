import type { MetadataRoute } from "next";
import { allPages } from "./content";
import { COMING_SOON, SITE_URL } from "./site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Em modo "Em breve" a home esta com noindex e fica fora do sitemap.
    ...(COMING_SOON ? [] : [{ url: `${SITE_URL}/`, changeFrequency: "monthly" as const, priority: 1 }]),
    ...allPages.map((p) => ({
      url: `${SITE_URL}/${p.slug}/`,
      changeFrequency: "monthly" as const,
      priority: p.kind === "service" ? 0.8 : 0.6,
    })),
  ];
}
