/**
 * JSON-LD structured data builders.
 * Returns plain objects – call JSON.stringify() before embedding.
 *
 * Docs: https://developers.google.com/search/docs/appearance/structured-data
 */
import { siteName, description, phoneTel } from "@/lib/site";
import { siteUrl } from "@/lib/seo";

/** LocalBusiness schema for the root layout (site-wide). */
export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    "@id": `${siteUrl}/#business`,
    name: siteName,
    description,
    telephone: phoneTel,
    url: siteUrl,
    image: `${siteUrl}/images/logo.png`,
    priceRange: "$$",
    openingHours: "Mo-Su 00:00-23:59",
    areaServed: [
      { "@type": "State", name: "أسيوط", alternateName: "Assiut" },
      { "@type": "State", name: "المنيا", alternateName: "Minya" },
      { "@type": "State", name: "سوهاج", alternateName: "Sohag" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "خدمات ونش الإنقاذ",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "سحب السيارات" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "نقل السيارات" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "إنقاذ الطريق" } },
      ],
    },
  };
}

/** BreadcrumbList schema for inner pages. */
export function buildBreadcrumbSchema(
  crumbs: Array<{ name: string; path: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${siteUrl}${crumb.path}`,
    })),
  };
}

/** FAQPage schema for pages that include Q&A sections. */
export function buildFaqSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
