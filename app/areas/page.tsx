import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { siteName } from "@/lib/site";
import { sohagGovernorate, roads } from "@/data/service-areas";
import { ActionLinks } from "@/components/Ctas";

export const metadata: Metadata = buildMetadata({
  title: "مناطق الخدمة",
  description: `خريطة تغطية ${siteName} – ونش إنقاذ سيارات في أسيوط والمنيا وسوهاج وطريق الكريمات.`,
  canonicalPath: "/areas",
});

const governorates = [
  {
    name: "أسيوط",
    slug: "assiut",
    enabled: false,
    note: "قريباً",
  },
  {
    name: "المنيا",
    slug: "minya",
    enabled: false,
    note: "قريباً",
  },
  {
    name: sohagGovernorate.name,
    slug: sohagGovernorate.slug,
    enabled: sohagGovernorate.pageEnabled,
    note: null,
  },
];

export default function AreasPage() {
  return (
    <>
      <header className="page-banner">
        <div className="container page-banner-inner">
          <h1>مناطق تغطية خدمة الونش</h1>
          <nav className="crumbs" aria-label="مسار الصفحة">
            <span className="crumbs-label">YOU ARE HERE</span>
            <Link href="/">الرئيسية</Link>
            <span className="sep">/</span>
            <span className="here">المناطق</span>
          </nav>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <h2 className="section-title">المحافظات المغطاة</h2>
          <p className="lead">
            يغطي {siteName} محافظات الصعيد الأوسط ومحاور الطرق الرئيسية
            بينها. اختر محافظتك لعرض تفاصيل التغطية والمراكز المخدومة.
          </p>

          <ul className="areas-grid" aria-label="المحافظات">
            {governorates.map((gov) => (
              <li key={gov.slug}>
                {gov.enabled ? (
                  <Link
                    href={`/areas/${gov.slug}`}
                    className="area-card"
                    aria-label={`ونش إنقاذ في محافظة ${gov.name}`}
                  >
                    <span className="area-card-name">محافظة {gov.name}</span>
                    <span className="area-card-arrow" aria-hidden="true">←</span>
                  </Link>
                ) : (
                  <span className="area-card area-card--disabled">
                    محافظة {gov.name}
                    {gov.note && (
                      <small className="area-card-note">{gov.note}</small>
                    )}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="roads">
        <div className="container">
          <h2 className="section-title">الطرق والمحاور</h2>
          <p>
            نغطي أيضاً الطرق الصحراوية والمحاور السريعة التي تربط المحافظات.
          </p>
          <ul className="areas-grid" aria-label="الطرق">
            {roads.map((road) => (
              <li key={road.slug}>
                {road.pageEnabled ? (
                  <Link
                    href={`/areas/${road.slug}`}
                    className="area-card"
                    aria-label={`ونش إنقاذ على ${road.name}`}
                  >
                    <span className="area-card-name">{road.name}</span>
                    <span className="area-card-arrow" aria-hidden="true">←</span>
                  </Link>
                ) : (
                  <span className="area-card area-card--disabled">
                    {road.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">
            هل منطقتك غير مدرجة؟ تواصل معنا
          </h2>
          <p>
            إذا لم تجد محافظتك أو مركزك في القائمة، تواصل معنا مباشرة
            وسنوضح إمكانية الوصول إليك.
          </p>
          <ActionLinks />
        </div>
      </section>
    </>
  );
}
