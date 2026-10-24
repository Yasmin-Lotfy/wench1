export const siteName = "ونش انقاذ السيارات اسيوط والمنيا وطريق الكريمات";

export const phoneDisplay = "01037035990";
export const phoneTel = "+201037035990";
export const telHref = `tel:${phoneTel}`;
export const waHref = `https://wa.me/201037035990?text=${encodeURIComponent(
  "مرحبا، محتاج ونش انقاذ. لو سمحت ابعتوا أقرب ونش."
)}`;

export const description =
  "ونش انقاذ السيارات اسيوط والمنيا وطريق الكريمات. خدمة سحب ونقل السيارات 24 ساعة، استجابة سريعة على الطرق السريعة والصحراوية والعامة.";

export const areas = ["اسيوط", "المنيا", "طريق الكريمات"] as const;

export const days = [
  "السبت",
  "الاحد",
  "الاثنين",
  "الثلاثاء",
  "الاربعاء",
  "الخميس",
  "الجمعة",
] as const;

export const highlights = [
  "اسرع ونش انقاذ",
  "ارخص ونش انقاذ",
  "اقرب ونش انقاذ",
  "ونش انقاذ بالقرب منى",
  "ونش انقاذ اسيوط",
  "ونش انقاذ المنيا",
  "ونش انقاذ طريق الكريمات",
] as const;

export const nav = [
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "من نحن" },
  { href: "/services", label: "خدماتنا" },
  { href: "/areas", label: "مناطق الخدمة" },
  { href: "/clients", label: "عملائنا" },
  { href: "/contact", label: "اتصل بنا" },
] as const;

export const brands = [
  { src: "/brands/land-rover.png", alt: "لاند روفر" },
  { src: "/brands/lamborghini.png", alt: "لامبورجيني" },
  { src: "/brands/jaguar.png", alt: "جاجوار" },
  { src: "/brands/infiniti.png", alt: "انفينيتي" },
  { src: "/brands/ford.png", alt: "فورد" },
  { src: "/brands/chevrolet.jpg", alt: "شيفروليه" },
  { src: "/brands/hyundai.jpg", alt: "هيونداي" },
  { src: "/brands/honda.jpg", alt: "هوندا" },
  { src: "/brands/nissan.jpg", alt: "نيسان" },
  { src: "/brands/mitsubishi.png", alt: "ميتسوبيشي" },
  { src: "/brands/mercedes.jpg", alt: "مرسيدس" },
  { src: "/brands/maserati.jpg", alt: "مازيراتي" },
  { src: "/brands/kia.png", alt: "كيا" },
  { src: "/brands/kia-red.jpg", alt: "كيا" },
  { src: "/brands/vw.jpg", alt: "فولكس فاجن" },
  { src: "/brands/cadillac.png", alt: "كاديلاك" },
  { src: "/brands/skoda.png", alt: "سكودا" },
  { src: "/brands/suzuki.jpg", alt: "سوزوكي" },
  { src: "/brands/subaru.jpg", alt: "سوبارو" },
  { src: "/brands/renault.png", alt: "رينو" },
  { src: "/brands/dodge.png", alt: "دودج" },
  { src: "/brands/daewoo.jpg", alt: "دايو" },
  { src: "/brands/genesis.png", alt: "جينيسيس" },
  { src: "/brands/gmc.png", alt: "جي إم سي" },
  { src: "/brands/peugeot.jpg", alt: "بيجو" },
  { src: "/brands/bmw.png", alt: "بي إم دبليو" },
  { src: "/brands/audi.png", alt: "أودي" },
  { src: "/brands/opel.jpg", alt: "أوبل" },
  { src: "/brands/toyota.jpg", alt: "تويوتا" },
  { src: "/brands/tesla.png", alt: "تسلا" },
  { src: "/brands/porsche.png", alt: "بورشه" },
  { src: "/brands/mini.png", alt: "ميني" },
  { src: "/brands/mg.png", alt: "إم جي" },
  { src: "/brands/mazda.png", alt: "مازدا" },
  { src: "/brands/lexus.png", alt: "لكزس" },
] as const;

export const slides = [
  {
    src: "/images/hero-1.jpeg",
    alt: "ونش إنقاذ سيارات على طريق سريع وقت الغروب",
    title: "ونش انقاذ السيارات اسيوط والمنيا وطريق الكريمات",
  },
  {
    src: "/images/hero-2.jpg",
    alt: "خدمة سحب ونقل السيارات",
    title: "اسرع ونش انقاذ على طريق الكريمات",
  },
  {
    src: "/images/hero-3.jpeg",
    alt: "ونش سطحة لنقل السيارات",
    title: "خدمة انقاذ 24 ساعة في اسيوط والمنيا",
  },
] as const;
