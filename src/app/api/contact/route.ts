import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type ContactRequestBody = {
  name?: string;
  email?: string;
  message?: string;
};

const resendApiKey = process.env.RESEND_API_KEY;
const contactToEmail = process.env.CONTACT_TO_EMAIL;
const fromEmail = process.env.FROM_EMAIL;

const resend = resendApiKey ? new Resend(resendApiKey) : null;

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  if (!resend || !contactToEmail || !fromEmail) {
    return NextResponse.json(
      { error: "Server email configuration is incomplete." },
      { status: 500 },
    );
  }

  let body: ContactRequestBody;

  try {
    body = (await request.json()) as ContactRequestBody;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim() || "";
  const email = body.email?.trim() || "";
  const message = body.message?.trim() || "";

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: fromEmail,
      to: contactToEmail,
      replyTo: email,
      subject: `Portfolio Contact: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ message: "Thanks for reaching out. I will get back to you soon." });
  } catch {
    return NextResponse.json(
      { error: "Unable to send your message right now. Please try again later." },
      { status: 502 },
    );
  }
}
