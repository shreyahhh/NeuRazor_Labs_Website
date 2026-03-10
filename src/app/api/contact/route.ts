import { NextResponse } from "next/server";

async function verifyTurnstile(token: string, remoteip?: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // skip in dev when not configured

  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      secret,
      response: token,
      ...(remoteip && { remoteip }),
    }),
  });
  const data = (await res.json()) as { success?: boolean };
  return data.success === true;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, message, type, turnstileToken } = body as {
      email?: string;
      message?: string;
      type?: string;
      turnstileToken?: string;
    };

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    if (process.env.TURNSTILE_SECRET_KEY) {
      if (!turnstileToken || typeof turnstileToken !== "string") {
        return NextResponse.json(
          { error: "Verification required. Please complete the security check." },
          { status: 400 }
        );
      }
      const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? request.headers.get("x-real-ip") ?? undefined;
      const ok = await verifyTurnstile(turnstileToken, ip);
      if (!ok) {
        return NextResponse.json(
          { error: "Verification failed. Please try again." },
          { status: 400 }
        );
      }
    }

    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY not set; skipping send");
      return NextResponse.json({ ok: true });
    }

    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: process.env.RESEND_FROM ?? "onboarding@resend.dev",
      to: process.env.CONTACT_EMAIL ?? "hello@neurazor.com",
      subject: `[${type ?? "Contact"}] ${email}`,
      text: message ?? "",
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Failed to send" },
      { status: 500 }
    );
  }
}
