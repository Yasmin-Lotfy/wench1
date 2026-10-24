import type { Metadata } from "next";
import Image from "next/image";
import { ActionLinks, AnnounceBar } from "@/components/Ctas";
import { BrandCarousel } from "@/components/BrandCarousel";
import { ChatUserIcon, TruckIcon, WrenchIcon } from "@/components/icons";
import { HeroSlider } from "@/components/HeroSlider";
import { siteName } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

const features = [
  {
    title: "اوناش الانقاذ",
    text: "أوناش إنقاذ حديثة جاهزة للتحرك داخل اسيوط والمنيا وعلى طريق الكريمات، ونصل إلى موقعك بأسرع وقت.",
    icon: <ChatUserIcon />,
  },
  {
    title: "فريق عمل مجهز",
    text: "سائقون وناشون مدربون على سحب السيارة من مختلف الأوضاع، سواء حادث سير أو عطل مفاجئ على الطريق.",
    icon: <WrenchIcon />,
  },
  {
    title: "خدمة 24 ساعة",
    text: "فريق جاهز لتلقي اتصالك فوراً طوال أيام الأسبوع، في اسيوط والمنيا وعلى طريق الكريمات.",
    icon: <TruckIcon />,
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <AnnounceBar text={`${siteName} | أسرع خدمات إنقاذ السيارات`} />

      <section className="section">
        <div className="container">
          <h2 className="section-title">اهم ما يميزنا</h2>
          <div className="lead">
            <p>
              يتعرض الكثير من أصحاب السيارات إلى الأعطال المفاجئة أو الحوادث على الطرق السريعة، مما يسبب لهم التوقف في أماكن قد يصعب الحصول فيها على المساعدة بشكل سريع. لذلك نوفر في {siteName} خدمات إنقاذ ونقل السيارات على مدار 24 ساعة للوصول إلى موقعك بأسرع وقت ممكن.
            </p>
            <p>
              نعتمد على أوناش ومعدات رفع ونقل آمن لحماية سيارتك أثناء عملية الإنقاذ، مع فريق يستطيع التعامل مع أعطال الطريق والحوادث. سواء كنت في اسيوط أو المنيا أو على طريق الكريمات، اتصل بنا وسنصل إليك.
            </p>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature" key={feature.title}>
                <div className="hexagon">
                  <span className="hex-icon">{feature.icon}</span>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="split" id="services">
        <div className="split-copy">
          <h2 className="section-title">نقل سيارات الحوادث من وإلى مراكز الصيانة</h2>
          <p>
            هل تبحث عن خدمة إنقاذ سيارات سريعة وموثوقة في أي وقت؟ يوفر لك {siteName} حلولاً لنقل وسحب السيارات على مدار 24 ساعة، مع سرعة استجابة وفريق جاهز للوصول إليك داخل اسيوط والمنيا وعلى طريق الكريمات.
          </p>
          <p>
            نعتمد على أوناش ومعدات رفع ونقل تحافظ على السيارة أثناء السحب، مع أسطول يتعامل مع الأعطال والحوادث على الطرق السريعة والداخلية، ثم نقلها إلى مركز الصيانة الذي تحدده.
          </p>
          <p>
            نعمل بفريق مدرب هدفه الوصول في الوقت المناسب والالتزام بالموعد. لذلك يعتمد أصحاب السيارات على {siteName} عندما تتوقف السيارة في موقف طارئ.
          </p>
          <p>
            الأسعار واضحة قبل التحرك، من غير رسوم مفاجئة بعد ما الونش يوصل. الخدمة متاحة طوال اليوم وعلى مدار الأسبوع.
          </p>
          <ActionLinks />
        </div>
        <div className="split-media">
          <Image
            src="/images/service-flatbed.jpeg"
            alt="ونش سطحة لنقل سيارات الحوادث إلى مراكز الصيانة"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="split">
        <div className="split-media">
          <Image
            src="/images/service-highway.jpeg"
            alt="إنقاذ السيارات على الطرق السريعة والصحراوية"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
        <div className="split-copy">
          <h2 className="section-title">خدمة إنقاذ سيارات في الطرق الصحراوية والعامة</h2>
          <p>
            تنتشر خدمة {siteName} على الطرق السريعة والمحاور الرئيسية، ومنها طريق الكريمات والطرق الصحراوية والعامة، لخدمة أصحاب السيارات على مدار 24 ساعة طوال أيام الأسبوع.
          </p>
          <p>
            ننقل السيارة المعطلة أو المتضررة إلى المكان الذي يحدده العميل، سواء أقرب مركز صيانة أو عنوان داخل اسيوط والمنيا. السائقون معتادون على ظروف الطريق المختلفة وأنواع السيارات.
          </p>
          <p>
            نقلل وقت الانتظار على الطريق بقدر الإمكان، لأن التوقف على طريق سريع أو صحراوي يحتاج استجابة سريعة وهدوءاً في التعامل مع الموقف.
          </p>
          <p>
            لو سيارتك وقفت في اسيوط أو المنيا أو على طريق الكريمات، كلمنا أو راسلنا على واتساب ونرسل أقرب ونش إليك.
          </p>
          <ActionLinks />
        </div>
      </section>

      <BrandCarousel />
      <AnnounceBar text="محتاج ونش الآن في اسيوط أو المنيا أو على طريق الكريمات؟ اتصل أو راسلنا فوراً" />
    </>
  );
}
