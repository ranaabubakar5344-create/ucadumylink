// sitemap.xml = Google ko new pages dikhata hai
// robots.txt = Google ko crawl permission aur sitemap location deta hai
// Request Indexing = Google ko homepage dobara check karne ka signal deta hai

import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://uca.feuc.ae/sitemap.xml",
  };
}