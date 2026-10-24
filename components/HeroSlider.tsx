"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { slides } from "@/lib/site";

export function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, []);

  function step(direction: number) {
    setIndex((current) => (current + direction + slides.length) % slides.length);
  }

  return (
    <section className="hero" aria-roledescription="carousel" aria-label="خدمات الونش">
      {slides.map((slide, slideIndex) => {
        const active = slideIndex === index;
        const TitleTag = active ? "h1" : "p";
        return (
          <div className={active ? "slide active" : "slide"} key={slide.src} aria-hidden={!active}>
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={slideIndex === 0}
              sizes="100vw"
            />
            <TitleTag className="hero-title">{slide.title}</TitleTag>
          </div>
        );
      })}
      <button type="button" className="hero-arrow prev" aria-label="الشريحة السابقة" onClick={() => step(-1)}>
        ‹
      </button>
      <button type="button" className="hero-arrow next" aria-label="الشريحة التالية" onClick={() => step(1)}>
        ›
      </button>
      <div className="hero-dots">
        {slides.map((slide, slideIndex) => (
          <button
            key={slide.src}
            type="button"
            className={slideIndex === index ? "selected" : undefined}
            aria-label={`الشريحة ${slideIndex + 1}`}
            onClick={() => setIndex(slideIndex)}
          />
        ))}
      </div>
    </section>
  );
}
