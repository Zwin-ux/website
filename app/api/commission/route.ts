import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, projectType, budget, message } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const toAddress = process.env.CONTACT_TO_EMAIL || 'mzwin3545@gmail.com';

    const subject = `New commission inquiry from ${name}`;
    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      projectType ? `Project Type: ${projectType}` : undefined,
      budget ? `Budget: ${budget}` : undefined,
      '',
      'Message:',
      message,
    ]
      .filter(Boolean)
      .join('\n');

    await resend.emails.send({
      from: process.env.MAIL_FROM || 'Bonelli Labs <onboarding@resend.dev>',
      to: toAddress,
      replyTo: email,
      subject,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error('Commission email error:', err);
    return NextResponse.json(
      { ok: false, error: 'Failed to send. Please try again later.' },
      { status: 500 }
    );
  }
}
