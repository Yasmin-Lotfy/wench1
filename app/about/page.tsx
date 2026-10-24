import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { CheckIcon, RoadIcon } from "@/components/icons";
import { siteName } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "من نحن",
  description: `تعرف على ${siteName}. خدمة سحب ونقل السيارات على مدار 24 ساعة في اسيوط والمنيا وطريق الكريمات.`,
  canonicalPath: "/about",
});

const points = [
  "سيارات انقاذ حديثة",
  "ارخص ونش انقاذ سيارات",
  "الالتزام بالمواعيد",
  "ارخص ونش انقاذ",
  "خدمة 24 ساعة",
];

const columns = [
  [
    {
      title: "سائقين مدربين",
      text: `يمتلك ${siteName} فريقاً من السائقين والفنيين المحترفين المدربين على أعلى مستوى للتعامل مع جميع أنواع السيارات والأعطال والحوادث بكفاءة واحترافية. نحرص على تقديم خدمات إنقاذ ونقل السيارات بأمان تام وسرعة استجابة عالية لضمان وصول المساعدة في أسرع وقت ممكن.`,
    },
    {
      title: "خدمة 24 ساعة",
      text: "خدمات ونش الانقاذ في أي وقت على مدار اليوم، خدمة 24 ساعة، مع أسرع ونش انقاذ في اسيوط والمنيا وعلى طريق الكريمات، طوال أيام الأسبوع.",
    },
  ],
  [
    {
      title: "ارخص ونش انقاذ",
      text: "ارخص ونش انقاذ سيارات حديث ومؤمن بأجهزة تعقب GPS. فريق عمل قادر على انقاذ سيارتك بدون حدوث أي مشاكل لسيارتك بأقل سعر في اسيوط والمنيا وعلى طريق الكريمات.",
    },
    {
      title: "الالتزام بالمواعيد",
      text: "نحترم ونقدر وقتك الثمين وملتزمين بالتحرك إليك على وجه السرعة بمجرد اتصالك بنا وطلب أقرب ونش انقاذ سيارات. الأسطول يغطي اسيوط والمنيا وطريق الكريمات.",
    },
  ],
  [
    {
      title: "اسرع ونش انقاذ",
      text: "نمتلك طاقم كامل معتمد على السرعة والدقة في التنفيذ والأمانة والتفاني في العمل، لنقدم أسرع ونش انقاذ في اسيوط والمنيا وعلى طريق الكريمات.",
    },
    {
      title: "سيارات انقاذ حديثة",
      text: "أحدث سيارات انقاذ مؤمنة ومجهزة لسحب سيارتك من الأعطال والحوادث، والتعامل مع كافة أوضاع السيارة سواء عطل أو حادث سير.",
    },
  ],
];

export default function AboutPage() {
  return (
    <>
      <header className="page-banner">
        <div className="container page-banner-inner">
          <h1>من نحن</h1>
          <nav className="crumbs" aria-label="مسار الصفحة">
            <span className="crumbs-label">أنت هنا</span>
            <Link href="/">الرئيسية</Link>
            <span className="sep">/</span>
            <span className="here">من نحن</span>
          </nav>
        </div>
      </header>

      <section className="container about-intro">
        <div className="about-copy">
          <p>
            يقدم {siteName} خدمات إنقاذ ونقل السيارات على مدار 24 ساعة طوال أيام الأسبوع، من خلال أسطول حديث من أوناش الإنقاذ المجهزة للتعامل مع جميع الأعطال والحوادث وحالات الطوارئ على الطرق السريعة والداخلية.
          </p>
          <p>
            نتميز بسرعة الاستجابة والوصول إلى موقع العميل في أسرع وقت ممكن، مع فريق متخصص من السائقين والفنيين المدربين على أحدث أساليب وتقنيات سحب ونقل السيارات بأمان كامل. سواء تعرضت سيارتك لعطل مفاجئ، أو حادث، أو تلف في الإطارات، أو احتجت إلى سحب السيارة من مكان صعب، فإن فريقنا جاهز لتقديم المساعدة الفورية في أي وقت.
          </p>
          <p>
            يعتمد {siteName} على أحدث معدات الرفع والنقل الآمن لضمان حماية السيارة أثناء عملية الإنقاذ، مع الحرص على تنفيذ جميع عمليات السحب والنقل بأعلى درجات الدقة والاحترافية.
          </p>
          <p>
            هدفنا هو توفير خدمة موثوقة تمنح العملاء الراحة والاطمئنان في جميع الظروف، لذلك نحرص على تقديم حلول سريعة وأسعار مناسبة وخدمة عالية الجودة تجعلنا من الخيارات المفضلة في مجال إنقاذ ونقل السيارات.
          </p>
          <h2 className="about-sub">اهم ما يميزنا</h2>
          <ul className="about-checks">
            {points.map((point) => (
              <li key={point}>
                <CheckIcon />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="about-photo">
          <Image
            src="/images/about-tow.jpeg"
            alt="ونش إنقاذ ينقل سيارة على السطحة"
            width={900}
            height={700}
          />
        </div>
      </section>

      <section className="container about-more">
        <h2 className="section-title">مميزات {siteName}</h2>
        <div className="about-columns">
          {columns.map((column) => (
            <div key={column[0].title}>
              {column.map((item) => (
                <article className="about-feature" key={item.title}>
                  <h3>{item.title}</h3>
                  <RoadIcon />
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
