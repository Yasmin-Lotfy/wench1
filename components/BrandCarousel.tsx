"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { brands } from "@/lib/site";

function perView() {
  if (window.innerWidth >= 1100) return 6;
  if (window.innerWidth >= 700) return 4;
  return 2;
}

export function BrandCarousel() {
  const [per, setPer] = useState(2);
  const [page, setPage] = useState(0);
  const pages = Math.max(1, Math.ceil(brands.length / per));
  const safePage = page % pages;
  const visible = brands.slice(safePage * per, safePage * per + per);

  useEffect(() => {
    const update = () => setPer(perView());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;
    const timer = window.setInterval(() => {
      setPage((current) => current + 1);
    }, 3200);
    return () => window.clearInterval(timer);
  }, [pages]);

  return (
    <section className="brands" id="clients" aria-label="ماركات السيارات">
      <div className="container">
        <ul className="brand-row" style={{ gridTemplateColumns: `repeat(${per}, minmax(0, 1fr))` }}>
          {visible.map((brand) => (
            <li key={brand.src}>
              <Image src={brand.src} alt={brand.alt} width={140} height={70} />
            </li>
          ))}
        </ul>
        <div className="dots">
          {Array.from({ length: pages }, (_, dot) => (
            <button
              key={dot}
              type="button"
              className={dot === safePage ? "selected" : undefined}
              aria-label={`مجموعة الشعارات ${dot + 1}`}
              onClick={() => setPage(dot)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
