import { NextResponse } from "next/server";
import { contactEmail } from "@/lib/site";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "بيانات النموذج غير صالحة." }, { status: 400 });
  }

  if (!isRecord(body)) {
    return NextResponse.json({ error: "بيانات النموذج غير صالحة." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (
    !name ||
    name.length > 120 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    email.length > 254 ||
    phone.length > 40 ||
    !message ||
    message.length > 5000
  ) {
    return NextResponse.json({ error: "يرجى إدخال بيانات صحيحة في جميع الحقول المطلوبة." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !from) {
    console.error("Contact email is not configured: RESEND_API_KEY and CONTACT_FROM_EMAIL are required.");
    return NextResponse.json({ error: "خدمة إرسال البريد غير مهيأة حاليًا." }, { status: 503 });
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [contactEmail],
        reply_to: email,
        subject: "رسالة جديدة من نموذج التواصل",
        text: [
          `الاسم: ${name}`,
          `البريد الإلكتروني: ${email}`,
          phone && `رقم الهاتف: ${phone}`,
          "",
          "الرسالة:",
          message,
        ]
          .filter(Boolean)
          .join("\n"),
      }),
    });

    if (!response.ok) {
      console.error(`Contact email provider returned status ${response.status}.`);
      return NextResponse.json({ error: "تعذر إرسال الرسالة حاليًا. حاول مرة أخرى لاحقًا." }, { status: 502 });
    }
  } catch (error) {
    console.error("Contact email delivery failed.", error);
    return NextResponse.json({ error: "تعذر إرسال الرسالة حاليًا. حاول مرة أخرى لاحقًا." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
