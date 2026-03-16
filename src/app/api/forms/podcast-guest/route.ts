import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const {
      name,
      email,
      company,
      title,
      website,
      linkedin,
      topic,
      bio,
    } = await request.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "ryan@ryanestes.info",
      subject: "New Podcast Guest Request",
      html: `
        <h2>New Podcast Guest Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
        ${title ? `<p><strong>Title:</strong> ${title}</p>` : ""}
        ${website ? `<p><strong>Website:</strong> ${website}</p>` : ""}
        ${linkedin ? `<p><strong>LinkedIn:</strong> ${linkedin}</p>` : ""}
        ${topic ? `<p><strong>Proposed Topic:</strong><br/>${topic}</p>` : ""}
        ${bio ? `<p><strong>Bio:</strong><br/>${bio}</p>` : ""}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Podcast guest form error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
