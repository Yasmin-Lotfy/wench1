import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <header className="inner-hero">
        <h1>الصفحة غير موجودة</h1>
      </header>
      
      <article className="container inner-body">
        <p>الرابط ده مش متاح. تقدر ترجع للصفحة الرئيسية أو تتصل لطلب الونش.</p>
        <p>
          <Link href="/">العودة للرئيسية</Link>
        </p>
      </article>
    </>
  );
}
