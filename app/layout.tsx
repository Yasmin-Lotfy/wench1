import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import { Footer } from "@/components/Footer";
import { FloatingCta } from "@/components/FloatingCta";
import { Header } from "@/components/Header";
import { description, siteName } from "@/lib/site";
import { siteUrl } from "@/lib/seo";
import { buildLocalBusinessSchema } from "@/lib/structured-data";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description,
  applicationName: siteName,
  metadataBase: new URL(siteUrl),
  icons: { icon: "/images/logo.png", apple: "/images/logo.png" },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
  openGraph: {
    title: siteName,
    description,
    url: siteUrl,
    siteName,
    locale: "ar_EG",
    type: "website",
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#047c7b",
};

const jsonLd = buildLocalBusinessSchema();

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <a className="skip" href="#content">تخطي إلى المحتوى</a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
        <FloatingCta />
      </body>
    </html>
  );
}
