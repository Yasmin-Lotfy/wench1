import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ActionLinks } from "@/components/Ctas";
import { buildMetadata } from "@/lib/seo";
import { buildBreadcrumbSchema, buildFaqSchema } from "@/lib/structured-data";
import { siteName, telHref, waHref } from "@/lib/site";
import {
  allPagedAreas,
  getAreaBySlug,
  sohagCenters,
  getVillagesForCenter,
  sohagGovernorate,
} from "@/data/service-areas";

interface Props {
  params: Promise<{ slug: string }>;
}

/** Pre-render all pages that have pageEnabled = true */
export function generateStaticParams() {
  return allPagedAreas
    .filter((a) => a.pageEnabled)
    .map((a) => ({ slug: a.slug }));
}

/** Dynamic metadata per area */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) return {};

  const title =
    area.type === "governorate"
      ? `ونش إنقاذ سيارات في ${area.name}`
      : area.type === "center"
      ? `ونش إنقاذ سيارات في ${area.name} – ${siteName}`
      : `ونش إنقاذ على ${area.name}`;

  return buildMetadata({
    title,
    description: area.description ?? title,
    canonicalPath: `/areas/${slug}`,
  });
}

// ---------------------------------------------------------------------------
// Shared FAQ for towing pages
// ---------------------------------------------------------------------------
const faqs = [
  {
    question: "هل تعملون على مدار 24 ساعة؟",
    answer:
      "نعم، الخدمة متاحة 24 ساعة طوال أيام الأسبوع بدون توقف لأي طوارئ على الطريق.",
  },
  {
    question: "كيف أحدد موقعي لفريق الونش؟",
    answer:
      "يمكنك إرسال موقعك الحالي عبر واتساب أو تحديد أقرب نقطة مميزة ورقم الطريق، وسيصل الفريق إليك في أسرع وقت.",
  },
  {
    question: "هل تنقلون السيارة لأي مركز صيانة أختاره؟",
    answer:
      "نعم، ننقل السيارة إلى المكان الذي تحدده سواء كان مركز صيانة أو عنوان داخل نطاق الخدمة.",
  },
  {
    question: "كيف تُحدَّد تكلفة النقل؟",
    answer:
      "التكلفة تُحدَّد بناءً على المسافة وطبيعة السيارة والوقت. الأسعار واضحة قبل التحرك بدون رسوم خفية.",
  },
];

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------
export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area || !area.pageEnabled) notFound();

  // Resolve center list to display (for governorate pages)
  const isGovernorateSohag = slug === "sohag";
  const isCenter = area.type === "center";

  const villages = isCenter ? getVillagesForCenter(slug) : [];
  const parentName = isCenter ? sohagGovernorate.name : null;
  const parentSlug = isCenter ? sohagGovernorate.slug : null;

  // Breadcrumb
  const crumbs = [
    { name: "الرئيسية", path: "/" },
    { name: "المناطق", path: "/areas" },
    ...(isCenter ? [{ name: sohagGovernorate.name, path: `/areas/sohag` }] : []),
    { name: area.name, path: `/areas/${slug}` },
  ];

  const breadcrumbSchema = buildBreadcrumbSchema(crumbs);
  const faqSchema = buildFaqSchema(faqs);

  const h1 =
    area.type === "governorate"
      ? `ونش إنقاذ سيارات في محافظة ${area.name}`
      : area.type === "center"
      ? `ونش إنقاذ سيارات في ${area.name}`
      : `ونش إنقاذ على ${area.name}`;

  return (
    <>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Page banner */}
      <header className="page-banner">
        <div className="container page-banner-inner">
          <h1>{h1}</h1>
          <nav className="crumbs" aria-label="مسار الصفحة">
            <span className="crumbs-label">YOU ARE HERE</span>
            {crumbs.map((crumb, i) => (
              <span key={crumb.path} style={{ display: "contents" }}>
                {i > 0 && <span className="sep">/</span>}
                {i < crumbs.length - 1 ? (
                  <Link href={crumb.path}>{crumb.name}</Link>
                ) : (
                  <span className="here">{crumb.name}</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </header>

      {/* Intro section */}
      <section className="section">
        <div className="container">
          <div className="lead">
            <p>{area.description}</p>
            {area.coverageStatus === "conditional" && (
              <p className="coverage-note">
                ⚠️ التغطية في هذه المنطقة قد تخضع للمسافة والظروف. تواصل
                معنا للتأكد من إمكانية الوصول إليك.
              </p>
            )}
          </div>
          <ActionLinks />
        </div>
      </section>

      {/* Centers list for governorate pages */}
      {isGovernorateSohag && (
        <section className="section" id="centers">
          <div className="container">
            <h2 className="section-title">مراكز محافظة سوهاج</h2>
            <p>
              تغطي خدمتنا جميع مراكز محافظة سوهاج. اختر مركزك للاطلاع على
              تفاصيل التغطية وقائمة القرى المخدومة.
            </p>
            <ul className="areas-grid" aria-label="مراكز سوهاج">
              {sohagCenters.map((center) => (
                <li key={center.slug}>
                  {center.pageEnabled ? (
                    <Link
                      href={`/areas/${center.slug}`}
                      className="area-card"
                      aria-label={`ونش إنقاذ في ${center.name}`}
                    >
                      <span className="area-card-name">{center.name}</span>
                      <span className="area-card-arrow" aria-hidden="true">←</span>
                    </Link>
                  ) : (
                    <span className="area-card area-card--disabled">
                      {center.name}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Village list for center pages */}
      {isCenter && villages.length > 0 && (
        <section className="section" id="villages">
          <div className="container">
            <h2 className="section-title">
              القرى التابعة لـ {area.name}
            </h2>
            <p>
              يخدم ونش الإنقاذ القرى التالية التابعة لـ {area.name}.
              للتأكد من التغطية في قريتك تواصل معنا مباشرة.
            </p>
            <ul className="villages-list" aria-label={`قرى ${area.name}`}>
              {villages.map((v) => (
                <li key={v.slug}>{v.name}</li>
              ))}
            </ul>
            {parentName && parentSlug && (
              <p style={{ marginTop: "1.5rem" }}>
                <Link href={`/areas/${parentSlug}`}>
                  ← العودة إلى محافظة {parentName}
                </Link>
              </p>
            )}
          </div>
        </section>
      )}

      {/* CTA section */}
      <section className="section" id="contact-area">
        <div className="container">
          <h2 className="section-title">
            تحتاج ونش الآن في {area.name}؟
          </h2>
          <p>
            فريقنا جاهز على مدار 24 ساعة. اتصل بنا أو أرسل موقعك عبر
            واتساب وسنرسل أقرب ونش إليك.
          </p>
          <ActionLinks />
        </div>
      </section>

      {/* FAQ section */}
      <section className="section" id="faq">
        <div className="container">
          <h2 className="section-title">أسئلة شائعة عن خدمة الونش</h2>
          <dl className="faq-list">
            {faqs.map((faq) => (
              <div key={faq.question} className="faq-item">
                <dt className="faq-question">{faq.question}</dt>
                <dd className="faq-answer">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
