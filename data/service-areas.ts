/**
 * Service areas data for SEO and coverage display.
 * Add new governorates, centers, and villages here as coverage expands.
 */

export type AreaType = "governorate" | "center" | "village" | "road";
export type CoverageStatus = "available" | "conditional" | "unavailable";

export interface ServiceArea {
  /** Arabic display name */
  name: string;
  /** URL-safe slug */
  slug: string;
  type: AreaType;
  /** Slug of the parent area (e.g. governorate slug for a center) */
  parentSlug?: string;
  coverageStatus: CoverageStatus;
  /** Whether to generate a standalone SEO page for this area */
  pageEnabled: boolean;
  /** Short description used in page metadata */
  description?: string;
}

// ---------------------------------------------------------------------------
// Roads / highways
// ---------------------------------------------------------------------------
export const roads: ServiceArea[] = [
  {
    name: "طريق الكريمات",
    slug: "korimat-road",
    type: "road",
    coverageStatus: "available",
    pageEnabled: true,
    description:
      "ونش إنقاذ على طريق الكريمات – خدمة سحب ونقل السيارات 24 ساعة على امتداد الطريق الصحراوي الغربي.",
  },
];

// ---------------------------------------------------------------------------
// Sohag governorate
// ---------------------------------------------------------------------------
export const sohagCenters: ServiceArea[] = [
  {
    name: "مركز سوهاج",
    slug: "sohag-center",
    type: "center",
    parentSlug: "sohag",
    coverageStatus: "available",
    pageEnabled: true,
    description:
      "ونش إنقاذ سيارات في مركز سوهاج – خدمة سحب ونقل السيارات داخل المركز وقراه الثماني والعشرين.",
  },
  {
    name: "مركز أخميم",
    slug: "akhmim",
    type: "center",
    parentSlug: "sohag",
    coverageStatus: "available",
    pageEnabled: true,
    description:
      "ونش إنقاذ سيارات في أخميم – خدمة سحب ونقل السيارات في مركز أخميم وقراه.",
  },
  {
    name: "مركز البلينا",
    slug: "balyana",
    type: "center",
    parentSlug: "sohag",
    coverageStatus: "available",
    pageEnabled: true,
    description:
      "ونش إنقاذ سيارات في البلينا – خدمة سحب ونقل السيارات في مركز البلينا التاسع والعشرين قرية.",
  },
  {
    name: "مركز المراغة",
    slug: "maragha",
    type: "center",
    parentSlug: "sohag",
    coverageStatus: "available",
    pageEnabled: true,
    description:
      "ونش إنقاذ سيارات في المراغة – خدمة سحب ونقل السيارات في مركز المراغة وقراه.",
  },
  {
    name: "مركز المنشأة",
    slug: "monsha-a",
    type: "center",
    parentSlug: "sohag",
    coverageStatus: "available",
    pageEnabled: true,
    description:
      "ونش إنقاذ سيارات في المنشأة – خدمة سحب ونقل السيارات في مركز المنشأة وقراه الخمس والعشرين.",
  },
  {
    name: "مركز دار السلام",
    slug: "dar-alsalam",
    type: "center",
    parentSlug: "sohag",
    coverageStatus: "available",
    pageEnabled: true,
    description:
      "ونش إنقاذ سيارات في دار السلام – خدمة سحب ونقل السيارات في مركز دار السلام وقراه التسع عشرة.",
  },
  {
    name: "مركز جرجا",
    slug: "gerga",
    type: "center",
    parentSlug: "sohag",
    coverageStatus: "available",
    pageEnabled: true,
    description:
      "ونش إنقاذ سيارات في جرجا – خدمة سحب ونقل السيارات في مركز جرجا وقراه.",
  },
  {
    name: "مركز جهينة",
    slug: "gohayna",
    type: "center",
    parentSlug: "sohag",
    coverageStatus: "available",
    pageEnabled: true,
    description:
      "ونش إنقاذ سيارات في جهينة – خدمة سحب ونقل السيارات في مركز جهينة وقراه الأربع عشرة.",
  },
  {
    name: "مركز ساقلتة",
    slug: "saqlata",
    type: "center",
    parentSlug: "sohag",
    coverageStatus: "available",
    pageEnabled: true,
    description:
      "ونش إنقاذ سيارات في ساقلتة – خدمة سحب ونقل السيارات في مركز ساقلتة وقراه.",
  },
  {
    name: "مركز طما",
    slug: "tema",
    type: "center",
    parentSlug: "sohag",
    coverageStatus: "available",
    pageEnabled: true,
    description:
      "ونش إنقاذ سيارات في طما – خدمة سحب ونقل السيارات في مركز طما، أكبر مراكز محافظة سوهاج.",
  },
  {
    name: "مركز طهطا",
    slug: "tahta",
    type: "center",
    parentSlug: "sohag",
    coverageStatus: "available",
    pageEnabled: true,
    description:
      "ونش إنقاذ سيارات في طهطا – خدمة سحب ونقل السيارات في مركز طهطا وقراه الثماني والعشرين.",
  },
  {
    name: "مركز العسيرات",
    slug: "asayrat",
    type: "center",
    parentSlug: "sohag",
    coverageStatus: "available",
    pageEnabled: true,
    description:
      "ونش إنقاذ سيارات في العسيرات – خدمة سحب ونقل السيارات في مركز العسيرات وقراه العشر.",
  },
];

/** Villages grouped by center slug */
export const sohagVillages: Record<string, ServiceArea[]> = {
  "sohag-center": [
    { name: "الهجارسة", slug: "alhagarsah", type: "village", parentSlug: "sohag-center", coverageStatus: "conditional", pageEnabled: false },
    { name: "بلصفورة", slug: "balsafourah", type: "village", parentSlug: "sohag-center", coverageStatus: "conditional", pageEnabled: false },
    { name: "أولاد شلول", slug: "awlad-shaloul", type: "village", parentSlug: "sohag-center", coverageStatus: "conditional", pageEnabled: false },
    { name: "أولاد مامن", slug: "awlad-mamen-1", type: "village", parentSlug: "sohag-center", coverageStatus: "conditional", pageEnabled: false },
    { name: "الحمادية", slug: "alhamdiya", type: "village", parentSlug: "sohag-center", coverageStatus: "conditional", pageEnabled: false },
    { name: "البخايتة", slug: "albkhayeta", type: "village", parentSlug: "sohag-center", coverageStatus: "conditional", pageEnabled: false },
    { name: "ادفا", slug: "edfa", type: "village", parentSlug: "sohag-center", coverageStatus: "conditional", pageEnabled: false },
    { name: "أولاد عزاز", slug: "awlad-azzaz", type: "village", parentSlug: "sohag-center", coverageStatus: "conditional", pageEnabled: false },
    { name: "أولاد نصير", slug: "awlad-naseer", type: "village", parentSlug: "sohag-center", coverageStatus: "conditional", pageEnabled: false },
    { name: "الكوامل بحري", slug: "alkwamel-bahri", type: "village", parentSlug: "sohag-center", coverageStatus: "conditional", pageEnabled: false },
    { name: "الكوامل قبلي", slug: "alkwamel-qibli", type: "village", parentSlug: "sohag-center", coverageStatus: "conditional", pageEnabled: false },
    { name: "الصلعا", slug: "alsala", type: "village", parentSlug: "sohag-center", coverageStatus: "conditional", pageEnabled: false },
    { name: "العرابة الشرقية", slug: "alaraba-alsharqiya", type: "village", parentSlug: "sohag-center", coverageStatus: "conditional", pageEnabled: false },
    { name: "المحامدة", slug: "almahamda", type: "village", parentSlug: "sohag-center", coverageStatus: "conditional", pageEnabled: false },
    { name: "روافع القصير", slug: "rawafe-alqaseer", type: "village", parentSlug: "sohag-center", coverageStatus: "conditional", pageEnabled: false },
    { name: "أولاد غريب", slug: "awlad-ghareeb", type: "village", parentSlug: "sohag-center", coverageStatus: "conditional", pageEnabled: false },
    { name: "القرامطة غرب", slug: "alqaramta-gharb", type: "village", parentSlug: "sohag-center", coverageStatus: "conditional", pageEnabled: false },
    { name: "المزالوة", slug: "almazalwah", type: "village", parentSlug: "sohag-center", coverageStatus: "conditional", pageEnabled: false },
    { name: "جزيرة شندويل", slug: "gezerat-shandweel", type: "village", parentSlug: "sohag-center", coverageStatus: "conditional", pageEnabled: false },
  ],
  akhmim: [
    { name: "السلاموني", slug: "alsalamony", type: "village", parentSlug: "akhmim", coverageStatus: "conditional", pageEnabled: false },
    { name: "الأحايوة شرق", slug: "alahaywa-sharq", type: "village", parentSlug: "akhmim", coverageStatus: "conditional", pageEnabled: false },
    { name: "الأحايوة غرب", slug: "alahaywa-gharb", type: "village", parentSlug: "akhmim", coverageStatus: "conditional", pageEnabled: false },
    { name: "الحواويش", slug: "alhawawish", type: "village", parentSlug: "akhmim", coverageStatus: "conditional", pageEnabled: false },
    { name: "الكولة", slug: "alkola", type: "village", parentSlug: "akhmim", coverageStatus: "conditional", pageEnabled: false },
    { name: "الديابات", slug: "aldyabat", type: "village", parentSlug: "akhmim", coverageStatus: "conditional", pageEnabled: false },
    { name: "الحديقة", slug: "alhadeeqa", type: "village", parentSlug: "akhmim", coverageStatus: "conditional", pageEnabled: false },
    { name: "العزبة والعرب", slug: "alezba-walarb", type: "village", parentSlug: "akhmim", coverageStatus: "conditional", pageEnabled: false },
    { name: "نيدة", slug: "neyda", type: "village", parentSlug: "akhmim", coverageStatus: "conditional", pageEnabled: false },
    { name: "الحواويش البحرية", slug: "alhawawish-bahria", type: "village", parentSlug: "akhmim", coverageStatus: "conditional", pageEnabled: false },
    { name: "الحواويش القبلية", slug: "alhawawish-qiblia", type: "village", parentSlug: "akhmim", coverageStatus: "conditional", pageEnabled: false },
  ],
  balyana: [
    { name: "عرابة أبيدوس", slug: "araba-abydos", type: "village", parentSlug: "balyana", coverageStatus: "conditional", pageEnabled: false },
    { name: "الحبيل والشلولية", slug: "alhbeel-walshlulia", type: "village", parentSlug: "balyana", coverageStatus: "conditional", pageEnabled: false },
    { name: "الحرجة بحري", slug: "alharga-bahri", type: "village", parentSlug: "balyana", coverageStatus: "conditional", pageEnabled: false },
    { name: "بني منصور", slug: "bani-mansour", type: "village", parentSlug: "balyana", coverageStatus: "conditional", pageEnabled: false },
    { name: "الحرجة بالقرعان", slug: "alharga-balqraan", type: "village", parentSlug: "balyana", coverageStatus: "conditional", pageEnabled: false },
    { name: "الغابات", slug: "alghabat", type: "village", parentSlug: "balyana", coverageStatus: "conditional", pageEnabled: false },
    { name: "البلينا", slug: "balyana-village", type: "village", parentSlug: "balyana", coverageStatus: "conditional", pageEnabled: false },
    { name: "برديس", slug: "bardees", type: "village", parentSlug: "balyana", coverageStatus: "conditional", pageEnabled: false },
    { name: "السمطا", slug: "alsamta", type: "village", parentSlug: "balyana", coverageStatus: "conditional", pageEnabled: false },
    { name: "الغنيمية", slug: "alghanimeya", type: "village", parentSlug: "balyana", coverageStatus: "conditional", pageEnabled: false },
    { name: "الحلافي", slug: "alhalafy", type: "village", parentSlug: "balyana", coverageStatus: "conditional", pageEnabled: false },
    { name: "الحرجة قبلي", slug: "alharga-qibli", type: "village", parentSlug: "balyana", coverageStatus: "conditional", pageEnabled: false },
    { name: "العوكلية", slug: "alawkalia", type: "village", parentSlug: "balyana", coverageStatus: "conditional", pageEnabled: false },
    { name: "الشيخ بركة", slug: "alsheikh-baraka", type: "village", parentSlug: "balyana", coverageStatus: "conditional", pageEnabled: false },
    { name: "الباسكية", slug: "albaskia", type: "village", parentSlug: "balyana", coverageStatus: "conditional", pageEnabled: false },
    { name: "الساحل بحري", slug: "alsahel-bahri", type: "village", parentSlug: "balyana", coverageStatus: "conditional", pageEnabled: false },
    { name: "الساحل قبلي", slug: "alsahel-qibli", type: "village", parentSlug: "balyana", coverageStatus: "conditional", pageEnabled: false },
    { name: "العساكرة", slug: "alassakra", type: "village", parentSlug: "balyana", coverageStatus: "conditional", pageEnabled: false },
    { name: "بني حميل", slug: "bani-homeel", type: "village", parentSlug: "balyana", coverageStatus: "conditional", pageEnabled: false },
  ],
  maragha: [
    { name: "الوقدة", slug: "alwaqda", type: "village", parentSlug: "maragha", coverageStatus: "conditional", pageEnabled: false },
    { name: "أولاد إسماعيل", slug: "awlad-ismail", type: "village", parentSlug: "maragha", coverageStatus: "conditional", pageEnabled: false },
    { name: "الجزازرة", slug: "aljazazra", type: "village", parentSlug: "maragha", coverageStatus: "conditional", pageEnabled: false },
    { name: "باصونة", slug: "bassouna", type: "village", parentSlug: "maragha", coverageStatus: "conditional", pageEnabled: false },
    { name: "السمارنة", slug: "alsamarna", type: "village", parentSlug: "maragha", coverageStatus: "conditional", pageEnabled: false },
    { name: "الغريزات", slug: "algharezat", type: "village", parentSlug: "maragha", coverageStatus: "conditional", pageEnabled: false },
    { name: "العمور", slug: "alamour", type: "village", parentSlug: "maragha", coverageStatus: "conditional", pageEnabled: false },
    { name: "بهتا", slug: "bahta", type: "village", parentSlug: "maragha", coverageStatus: "conditional", pageEnabled: false },
    { name: "البطاخ", slug: "albatakh", type: "village", parentSlug: "maragha", coverageStatus: "conditional", pageEnabled: false },
    { name: "اقصاص", slug: "aqsas", type: "village", parentSlug: "maragha", coverageStatus: "conditional", pageEnabled: false },
    { name: "الشورانية", slug: "alshouraniya", type: "village", parentSlug: "maragha", coverageStatus: "conditional", pageEnabled: false },
    { name: "بهاليل الجزيرة", slug: "bahaleelالجزيرة", type: "village", parentSlug: "maragha", coverageStatus: "conditional", pageEnabled: false },
    { name: "الحريرية", slug: "alharariya", type: "village", parentSlug: "maragha", coverageStatus: "conditional", pageEnabled: false },
  ],
  "monsha-a": [
    { name: "أولاد جبارة", slug: "awlad-jabbara", type: "village", parentSlug: "monsha-a", coverageStatus: "conditional", pageEnabled: false },
    { name: "الرويهب", slug: "alrwayeb", type: "village", parentSlug: "monsha-a", coverageStatus: "conditional", pageEnabled: false },
    { name: "الزارة", slug: "alzara", type: "village", parentSlug: "monsha-a", coverageStatus: "conditional", pageEnabled: false },
    { name: "الهماص", slug: "alhammas", type: "village", parentSlug: "monsha-a", coverageStatus: "conditional", pageEnabled: false },
    { name: "خارفة المنشاة", slug: "kharfa-monsha-a", type: "village", parentSlug: "monsha-a", coverageStatus: "conditional", pageEnabled: false },
    { name: "الزوك الشرقية", slug: "alzok-alsharqiya", type: "village", parentSlug: "monsha-a", coverageStatus: "conditional", pageEnabled: false },
    { name: "الزوك الغربية", slug: "alzok-algharbia", type: "village", parentSlug: "monsha-a", coverageStatus: "conditional", pageEnabled: false },
    { name: "الدناقلة", slug: "aldanaqla", type: "village", parentSlug: "monsha-a", coverageStatus: "conditional", pageEnabled: false },
    { name: "العمايدة", slug: "alamayda", type: "village", parentSlug: "monsha-a", coverageStatus: "conditional", pageEnabled: false },
    { name: "الدويرات", slug: "aldweyrat", type: "village", parentSlug: "monsha-a", coverageStatus: "conditional", pageEnabled: false },
    { name: "العنبرية", slug: "alanbariya", type: "village", parentSlug: "monsha-a", coverageStatus: "conditional", pageEnabled: false },
    { name: "الباجية", slug: "albagya", type: "village", parentSlug: "monsha-a", coverageStatus: "conditional", pageEnabled: false },
    { name: "الحريزات الشرقية", slug: "alhrizat-sharqiya", type: "village", parentSlug: "monsha-a", coverageStatus: "conditional", pageEnabled: false },
    { name: "الحريزات الغربية", slug: "alhrizat-gharbia", type: "village", parentSlug: "monsha-a", coverageStatus: "conditional", pageEnabled: false },
    { name: "روافع العيساوية", slug: "rawafe-alisawiya", type: "village", parentSlug: "monsha-a", coverageStatus: "conditional", pageEnabled: false },
    { name: "النويرات", slug: "alnoayrat", type: "village", parentSlug: "monsha-a", coverageStatus: "conditional", pageEnabled: false },
    { name: "أولاد سلامة", slug: "awlad-salama", type: "village", parentSlug: "monsha-a", coverageStatus: "conditional", pageEnabled: false },
  ],
  "dar-alsalam": [
    { name: "أولاد خلف", slug: "awlad-khalaf", type: "village", parentSlug: "dar-alsalam", coverageStatus: "conditional", pageEnabled: false },
    { name: "نقنق", slug: "naqnaq", type: "village", parentSlug: "dar-alsalam", coverageStatus: "conditional", pageEnabled: false },
    { name: "أولاد سالم بحري", slug: "awlad-salem-bahri", type: "village", parentSlug: "dar-alsalam", coverageStatus: "conditional", pageEnabled: false },
    { name: "أولاد طوق غرب", slug: "awlad-toq-gharb", type: "village", parentSlug: "dar-alsalam", coverageStatus: "conditional", pageEnabled: false },
    { name: "البلابيش بحري", slug: "alblabish-bahri", type: "village", parentSlug: "dar-alsalam", coverageStatus: "conditional", pageEnabled: false },
    { name: "البلابيش قبلي", slug: "alblabish-qibli", type: "village", parentSlug: "dar-alsalam", coverageStatus: "conditional", pageEnabled: false },
    { name: "النغاميش", slug: "alnaghameesh", type: "village", parentSlug: "dar-alsalam", coverageStatus: "conditional", pageEnabled: false },
    { name: "الخيام", slug: "alkhiyam", type: "village", parentSlug: "dar-alsalam", coverageStatus: "conditional", pageEnabled: false },
    { name: "النصيرات", slug: "alnosayrat", type: "village", parentSlug: "dar-alsalam", coverageStatus: "conditional", pageEnabled: false },
    { name: "البلابيش المستجدة", slug: "alblabish-almostajadda", type: "village", parentSlug: "dar-alsalam", coverageStatus: "conditional", pageEnabled: false },
    { name: "أولاد يحيى بحري", slug: "awlad-yahia-bahri", type: "village", parentSlug: "dar-alsalam", coverageStatus: "conditional", pageEnabled: false },
    { name: "أولاد يحيى قبلي", slug: "awlad-yahia-qibli", type: "village", parentSlug: "dar-alsalam", coverageStatus: "conditional", pageEnabled: false },
    { name: "أولاد الشيخ", slug: "awlad-alsheikh", type: "village", parentSlug: "dar-alsalam", coverageStatus: "conditional", pageEnabled: false },
    { name: "الزواتنة القبلية", slug: "alzawatna-qiblia", type: "village", parentSlug: "dar-alsalam", coverageStatus: "conditional", pageEnabled: false },
    { name: "مزاتة", slug: "mazata", type: "village", parentSlug: "dar-alsalam", coverageStatus: "conditional", pageEnabled: false },
    { name: "العقارية", slug: "alaqaria", type: "village", parentSlug: "dar-alsalam", coverageStatus: "conditional", pageEnabled: false },
  ],
  gerga: [
    { name: "البربا", slug: "albarba-gerga", type: "village", parentSlug: "gerga", coverageStatus: "conditional", pageEnabled: false },
    { name: "خارفة جرجا", slug: "kharfa-gerga", type: "village", parentSlug: "gerga", coverageStatus: "conditional", pageEnabled: false },
    { name: "المساعيد", slug: "almasaeed", type: "village", parentSlug: "gerga", coverageStatus: "conditional", pageEnabled: false },
    { name: "نجوع بندار", slug: "nojoue-bandar", type: "village", parentSlug: "gerga", coverageStatus: "conditional", pageEnabled: false },
    { name: "أولاد بهيج", slug: "awlad-bahig", type: "village", parentSlug: "gerga", coverageStatus: "conditional", pageEnabled: false },
    { name: "بندار التبينات", slug: "bandar-altabeenat", type: "village", parentSlug: "gerga", coverageStatus: "conditional", pageEnabled: false },
    { name: "بندار الرملية", slug: "bandar-alramlia", type: "village", parentSlug: "gerga", coverageStatus: "conditional", pageEnabled: false },
    { name: "القرعان", slug: "alqaraan", type: "village", parentSlug: "gerga", coverageStatus: "conditional", pageEnabled: false },
    { name: "الخلافية", slug: "alkhlafiya", type: "village", parentSlug: "gerga", coverageStatus: "conditional", pageEnabled: false },
    { name: "نجع الغباشي", slug: "nag-alghabashi", type: "village", parentSlug: "gerga", coverageStatus: "conditional", pageEnabled: false },
    { name: "بني عيش", slug: "bani-aish", type: "village", parentSlug: "gerga", coverageStatus: "conditional", pageEnabled: false },
    { name: "مزاتة والشيخ جابر", slug: "mazata-alsheikh-jaber", type: "village", parentSlug: "gerga", coverageStatus: "conditional", pageEnabled: false },
    { name: "المجابرة", slug: "almagebra", type: "village", parentSlug: "gerga", coverageStatus: "conditional", pageEnabled: false },
    { name: "الزواتنة البحرية", slug: "alzawatna-bahria", type: "village", parentSlug: "gerga", coverageStatus: "conditional", pageEnabled: false },
    { name: "كوم الصعايدة", slug: "kom-alsaayda", type: "village", parentSlug: "gerga", coverageStatus: "conditional", pageEnabled: false },
    { name: "بيت الخريبي", slug: "beit-alkhreebi", type: "village", parentSlug: "gerga", coverageStatus: "conditional", pageEnabled: false },
    { name: "الجواهين", slug: "aljwahin", type: "village", parentSlug: "gerga", coverageStatus: "conditional", pageEnabled: false },
    { name: "المحاسنة", slug: "almahsna", type: "village", parentSlug: "gerga", coverageStatus: "conditional", pageEnabled: false },
    { name: "البياضي والقرية", slug: "albiady-walqaria", type: "village", parentSlug: "gerga", coverageStatus: "conditional", pageEnabled: false },
    { name: "المشاودة الغربية", slug: "almshawda-algharbia", type: "village", parentSlug: "gerga", coverageStatus: "conditional", pageEnabled: false },
    { name: "العوامر قبلي", slug: "alawamer-qibli", type: "village", parentSlug: "gerga", coverageStatus: "conditional", pageEnabled: false },
    { name: "الرقاقنة", slug: "alraqaqna", type: "village", parentSlug: "gerga", coverageStatus: "conditional", pageEnabled: false },
  ],
  gohayna: [
    { name: "نزة الحاجر", slug: "naza-alhager", type: "village", parentSlug: "gohayna", coverageStatus: "conditional", pageEnabled: false },
    { name: "جهينة الغربية", slug: "gohayna-algharbia", type: "village", parentSlug: "gohayna", coverageStatus: "conditional", pageEnabled: false },
    { name: "جهينة الشرقية", slug: "gohayna-alsharqia", type: "village", parentSlug: "gohayna", coverageStatus: "conditional", pageEnabled: false },
    { name: "الطليحات", slug: "altlayhat", type: "village", parentSlug: "gohayna", coverageStatus: "conditional", pageEnabled: false },
    { name: "نزلة مصطفى", slug: "nazlet-mostafa", type: "village", parentSlug: "gohayna", coverageStatus: "conditional", pageEnabled: false },
    { name: "عن الحمادي", slug: "an-alhamadi", type: "village", parentSlug: "gohayna", coverageStatus: "conditional", pageEnabled: false },
    { name: "الحرافشة", slug: "alharafsha", type: "village", parentSlug: "gohayna", coverageStatus: "conditional", pageEnabled: false },
    { name: "عنيبس", slug: "anibis", type: "village", parentSlug: "gohayna", coverageStatus: "conditional", pageEnabled: false },
  ],
  saqlata: [
    { name: "الفراسية", slug: "alfraasia", type: "village", parentSlug: "saqlata", coverageStatus: "conditional", pageEnabled: false },
    { name: "القرامطة شرق", slug: "alqaramta-sharq", type: "village", parentSlug: "saqlata", coverageStatus: "conditional", pageEnabled: false },
    { name: "بني واصل", slug: "bani-wasel", type: "village", parentSlug: "saqlata", coverageStatus: "conditional", pageEnabled: false },
    { name: "نجوع الرياينة", slug: "nojoue-alrayayna", type: "village", parentSlug: "saqlata", coverageStatus: "conditional", pageEnabled: false },
    { name: "الكتكاتة", slug: "alkatkata", type: "village", parentSlug: "saqlata", coverageStatus: "conditional", pageEnabled: false },
    { name: "الرياينة بالحاجر", slug: "alrayayna-balhager", type: "village", parentSlug: "saqlata", coverageStatus: "conditional", pageEnabled: false },
    { name: "الحرادنة", slug: "alhradna", type: "village", parentSlug: "saqlata", coverageStatus: "conditional", pageEnabled: false },
    { name: "العوامية", slug: "alawamia", type: "village", parentSlug: "saqlata", coverageStatus: "conditional", pageEnabled: false },
    { name: "الجلاوية", slug: "aljilawia", type: "village", parentSlug: "saqlata", coverageStatus: "conditional", pageEnabled: false },
    { name: "الطوايل الشرقية", slug: "altawayel-alsharqia", type: "village", parentSlug: "saqlata", coverageStatus: "conditional", pageEnabled: false },
    { name: "الطوايل الغربية", slug: "altawayel-algharbia", type: "village", parentSlug: "saqlata", coverageStatus: "conditional", pageEnabled: false },
  ],
  tema: [
    { name: "تل الزوكي", slug: "tal-alzoki", type: "village", parentSlug: "tema", coverageStatus: "conditional", pageEnabled: false },
    { name: "نزلة الدويك", slug: "nazlet-aldwiek", type: "village", parentSlug: "tema", coverageStatus: "conditional", pageEnabled: false },
    { name: "كوم العرب", slug: "kom-alarab", type: "village", parentSlug: "tema", coverageStatus: "conditional", pageEnabled: false },
    { name: "مشطا", slug: "mashta", type: "village", parentSlug: "tema", coverageStatus: "conditional", pageEnabled: false },
    { name: "العزبة المستجدة", slug: "alezba-almostajadda", type: "village", parentSlug: "tema", coverageStatus: "conditional", pageEnabled: false },
    { name: "العتامنة", slug: "alatamna", type: "village", parentSlug: "tema", coverageStatus: "conditional", pageEnabled: false },
    { name: "الشيخ عمار", slug: "alsheikh-ammar", type: "village", parentSlug: "tema", coverageStatus: "conditional", pageEnabled: false },
    { name: "سليم", slug: "saleem", type: "village", parentSlug: "tema", coverageStatus: "conditional", pageEnabled: false },
    { name: "القرية بالدوير", slug: "alqaria-baldweer", type: "village", parentSlug: "tema", coverageStatus: "conditional", pageEnabled: false },
    { name: "الأغانة", slug: "alagana", type: "village", parentSlug: "tema", coverageStatus: "conditional", pageEnabled: false },
    { name: "القطنة", slug: "alqatna", type: "village", parentSlug: "tema", coverageStatus: "conditional", pageEnabled: false },
    { name: "كوم غريب", slug: "kom-ghareeb", type: "village", parentSlug: "tema", coverageStatus: "conditional", pageEnabled: false },
    { name: "الواقات", slug: "alwaqat", type: "village", parentSlug: "tema", coverageStatus: "conditional", pageEnabled: false },
    { name: "سلامون", slug: "salaamon", type: "village", parentSlug: "tema", coverageStatus: "conditional", pageEnabled: false },
    { name: "المدمر", slug: "almadmar", type: "village", parentSlug: "tema", coverageStatus: "conditional", pageEnabled: false },
    { name: "أم دومة", slug: "om-douma", type: "village", parentSlug: "tema", coverageStatus: "conditional", pageEnabled: false },
    { name: "الرياينة المعلق", slug: "alrayayna-almoallaq", type: "village", parentSlug: "tema", coverageStatus: "conditional", pageEnabled: false },
    { name: "كوم اشقاو", slug: "kom-ashqaw", type: "village", parentSlug: "tema", coverageStatus: "conditional", pageEnabled: false },
    { name: "الحما", slug: "alhamma", type: "village", parentSlug: "tema", coverageStatus: "conditional", pageEnabled: false },
    { name: "قاو غرب", slug: "qaw-gharb", type: "village", parentSlug: "tema", coverageStatus: "conditional", pageEnabled: false },
  ],
  tahta: [
    { name: "الجبيرات", slug: "aljubayrat", type: "village", parentSlug: "tahta", coverageStatus: "conditional", pageEnabled: false },
    { name: "الجريدات", slug: "aljuraydat", type: "village", parentSlug: "tahta", coverageStatus: "conditional", pageEnabled: false },
    { name: "الحريدية البحرية", slug: "alhareediya-bahria", type: "village", parentSlug: "tahta", coverageStatus: "conditional", pageEnabled: false },
    { name: "الحريدية القبلية", slug: "alhareediya-qiblia", type: "village", parentSlug: "tahta", coverageStatus: "conditional", pageEnabled: false },
    { name: "الشيخ رحومة", slug: "alsheikh-rahouma", type: "village", parentSlug: "tahta", coverageStatus: "conditional", pageEnabled: false },
    { name: "الصفيحة", slug: "alsafiha", type: "village", parentSlug: "tahta", coverageStatus: "conditional", pageEnabled: false },
    { name: "القبيصات", slug: "alqabaysat", type: "village", parentSlug: "tahta", coverageStatus: "conditional", pageEnabled: false },
    { name: "الكوم الأصفر", slug: "alkom-alasfar", type: "village", parentSlug: "tahta", coverageStatus: "conditional", pageEnabled: false },
    { name: "بنهو", slug: "banho", type: "village", parentSlug: "tahta", coverageStatus: "conditional", pageEnabled: false },
    { name: "بني حرب", slug: "bani-harb", type: "village", parentSlug: "tahta", coverageStatus: "conditional", pageEnabled: false },
    { name: "بني عمار", slug: "bani-ammar", type: "village", parentSlug: "tahta", coverageStatus: "conditional", pageEnabled: false },
    { name: "جزيرة الخزندارية", slug: "gezerat-alkhazandaria", type: "village", parentSlug: "tahta", coverageStatus: "conditional", pageEnabled: false },
    { name: "داود", slug: "dawoud", type: "village", parentSlug: "tahta", coverageStatus: "conditional", pageEnabled: false },
    { name: "ساحل طهطا", slug: "sahel-tahta", type: "village", parentSlug: "tahta", coverageStatus: "conditional", pageEnabled: false },
    { name: "كوم بدر", slug: "kom-badr", type: "village", parentSlug: "tahta", coverageStatus: "conditional", pageEnabled: false },
    { name: "نجع حمد", slug: "nag-hamad", type: "village", parentSlug: "tahta", coverageStatus: "conditional", pageEnabled: false },
    { name: "نجوع الصوامعة غرب", slug: "nojoue-alswameea-gharb", type: "village", parentSlug: "tahta", coverageStatus: "conditional", pageEnabled: false },
    { name: "الشيخ مسعود", slug: "alsheikh-masoud", type: "village", parentSlug: "tahta", coverageStatus: "conditional", pageEnabled: false },
    { name: "الصوالح", slug: "alswalek", type: "village", parentSlug: "tahta", coverageStatus: "conditional", pageEnabled: false },
    { name: "بنجا", slug: "banga", type: "village", parentSlug: "tahta", coverageStatus: "conditional", pageEnabled: false },
  ],
  asayrat: [
    { name: "أولاد حمزة (القاعدة)", slug: "awlad-hamza", type: "village", parentSlug: "asayrat", coverageStatus: "conditional", pageEnabled: false },
    { name: "البربا", slug: "albarba-asayrat", type: "village", parentSlug: "asayrat", coverageStatus: "conditional", pageEnabled: false },
    { name: "المساعيد", slug: "almasaeed-asayrat", type: "village", parentSlug: "asayrat", coverageStatus: "conditional", pageEnabled: false },
    { name: "الرشايدة", slug: "alrashayda", type: "village", parentSlug: "asayrat", coverageStatus: "conditional", pageEnabled: false },
    { name: "العنبرية", slug: "alanbariya-asayrat", type: "village", parentSlug: "asayrat", coverageStatus: "conditional", pageEnabled: false },
    { name: "الوقدة", slug: "alwaqda-asayrat", type: "village", parentSlug: "asayrat", coverageStatus: "conditional", pageEnabled: false },
  ],
};

export const sohagGovernorate: ServiceArea = {
  name: "سوهاج",
  slug: "sohag",
  type: "governorate",
  coverageStatus: "available",
  pageEnabled: true,
  description:
    "ونش إنقاذ سيارات في سوهاج – خدمة سحب ونقل السيارات 24 ساعة في جميع مراكز محافظة سوهاج وقراها.",
};

// ---------------------------------------------------------------------------
// All areas flat list (for sitemap and page generation)
// ---------------------------------------------------------------------------
export const allPagedAreas: ServiceArea[] = [
  sohagGovernorate,
  ...sohagCenters,
  ...roads,
];

/** Return all village names (Arabic) for a given center slug */
export function getVillagesForCenter(centerSlug: string): ServiceArea[] {
  return sohagVillages[centerSlug] ?? [];
}

/** Return center data by slug */
export function getCenterBySlug(slug: string): ServiceArea | undefined {
  return sohagCenters.find((c) => c.slug === slug);
}

/** Return governorate data by slug */
export function getAreaBySlug(slug: string): ServiceArea | undefined {
  return allPagedAreas.find((a) => a.slug === slug);
}
