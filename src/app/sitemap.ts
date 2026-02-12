import type { MetadataRoute } from "next";
import { portfolio } from "@/content/portfolio";

export const dynamic = "force-static";

const BASE_URL = "https://bengkellasssmedan.web.id";

export default function sitemap(): MetadataRoute.Sitemap {
    const portfolioPages = portfolio.map((item) => ({
        url: `${BASE_URL}/portfolio/${item.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    return [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1.0,
        },
        ...portfolioPages,
    ];
}
