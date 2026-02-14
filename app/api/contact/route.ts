import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // 1️⃣ Email vers TOI
    await resend.emails.send({
      from: "NDM Agency <onboarding@resend.dev>",
      to: "tonemail@gmail.com", // 🔥 mets TON email ici
      subject: "Nouveau message depuis le site",
      html: `
        <h2>Nouveau contact</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // 2️⃣ Email de confirmation au client
    await resend.emails.send({
      from: "NDM Agency <onboarding@resend.dev>",
      to: email,
      subject: "Nous avons bien reçu votre message",
      html: `
        <h2>Merci ${name} 🙌</h2>
        <p>Nous avons bien reçu votre message.</p>
        <p>Notre équipe vous répondra très rapidement.</p>
        <br/>
        <p>NDM Agency</p>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    return NextResponse.json({ error: "Erreur envoi email" }, { status: 500 });
  }
}
