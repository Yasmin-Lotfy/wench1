"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [isSending, setIsSending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);
    setIsSending(true);
    const data = new FormData(event.currentTarget);
    const form = event.currentTarget;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
        }),
      });
      const result: { error?: string } = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "تعذر إرسال الرسالة. حاول مرة أخرى.");
      }

      form.reset();
      setStatus({ type: "success", message: "تم إرسال رسالتك بنجاح، سنتواصل معك قريبًا." });
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "تعذر إرسال الرسالة. حاول مرة أخرى.",
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="contact-fields">
        <div className="contact-inputs">
          <input name="name" required placeholder="اسمك هنا *" aria-label="اسمك هنا" />
          <input name="email" type="email" required placeholder="البريد الالكترونى *" aria-label="البريد الالكترونى" />
          <input name="phone" type="tel" placeholder="رقم الموبايل" aria-label="رقم الموبايل" />
        </div>
        <textarea name="message" required placeholder="اترك رسالتك او طلبك هنا*" aria-label="اترك رسالتك او طلبك هنا" />
      </div>
      {status && (
        <p className={`contact-form-status ${status.type}`} role="status">
          {status.message}
        </p>
      )}
      <button className="contact-submit" type="submit" disabled={isSending}>
        {isSending ? "جارٍ الإرسال..." : "ارسل الأن"}
      </button>
    </form>
  );
}
