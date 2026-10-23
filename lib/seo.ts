/**
 * SEO helper – generates per-page Metadata objects for Next.js App Router.
 * All SEO strings are sourced from this single file and from lib/site.ts,
 * so updates propagate automatically across the site.
 */
import type { Metadata } from "next";
import { siteName, description as siteDescription } from "@/lib/site";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://wench-elseed.com";

interface PageSeoOptions {
  /** Page-specific title (without site suffix – the template adds it). */
  title: string;
  /** Page-specific description (≤ 160 chars). */
  description: string;
  /** Canonical path, e.g. "/areas/sohag". Leading slash required. */
  canonicalPath: string;
  /** Optional OG image path relative to /public, e.g. "/images/og-sohag.jpg". */
  ogImage?: string;
}

/** Build a full Metadata object for a page. */
export function buildMetadata({
  title,
  description,
  canonicalPath,
  ogImage,
}: PageSeoOptions): Metadata {
  const canonical = `${siteUrl}${canonicalPath}`;
  const image = ogImage ?? "/images/og-default.jpg";

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url: canonical,
      siteName,
      locale: "ar_EG",
      type: "website",
      images: [{ url: `${siteUrl}${image}`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description,
      images: [`${siteUrl}${image}`],
    },
  };
}

/** Metadata for the home page (exported separately for layout use). */
export const homeMetadata: Metadata = buildMetadata({
  title: siteName,
  description: siteDescription,
  canonicalPath: "/",
});
