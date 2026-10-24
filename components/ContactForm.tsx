"use client";

import { FormEvent } from "react";
import { phoneTel } from "@/lib/site";

export function ContactForm() {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const message = String(data.get("message") || "").trim();
    const header = phone ? [`الاسم: ${name}`, `الموبايل: ${phone}`] : [`الاسم: ${name}`];
    const text = [...header, "", message].join("\n");
    // Same-tab navigation: a new-tab popup can be blocked on mobile, and wa.me hands off to the WhatsApp app anyway.
    window.location.href = `https://wa.me/${phoneTel.replace("+", "")}?text=${encodeURIComponent(text)}`;
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="contact-fields">
        <div className="contact-inputs">
          <input name="name" required maxLength={120} placeholder="اسمك هنا *" aria-label="اسمك هنا" />
          <input name="phone" type="tel" maxLength={40} placeholder="رقم الموبايل" aria-label="رقم الموبايل" />
        </div>
        <textarea name="message" required maxLength={2000} placeholder="اترك رسالتك او طلبك هنا*" aria-label="اترك رسالتك او طلبك هنا" />
      </div>
      <button className="contact-submit" type="submit">
        ارسل على واتساب
      </button>
    </form>
  );
}
