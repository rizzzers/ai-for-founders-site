import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      message,
      interests,
      productLink,
      budgetRange,
      campaignGoals,
      timeline,
    } = body;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const interestsList = interests
      ? Object.entries(interests)
          .filter(([, v]) => v)
          .map(([k]) => k)
          .join(", ")
      : "";

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "ryan@ryanestes.info",
      subject: "New Partnership Inquiry",
      html: `
        <h2>New Partnership Inquiry</h2>
        ${name ? `<p><strong>Name / Company:</strong> ${name}</p>` : ""}
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        ${productLink ? `<p><strong>Product Link:</strong> ${productLink}</p>` : ""}
        ${budgetRange ? `<p><strong>Budget:</strong> ${budgetRange}</p>` : ""}
        ${campaignGoals ? `<p><strong>Campaign Goals:</strong> ${campaignGoals}</p>` : ""}
        ${timeline ? `<p><strong>Timeline:</strong> ${timeline}</p>` : ""}
        ${interestsList ? `<p><strong>Interests:</strong> ${interestsList}</p>` : ""}
        ${message ? `<p><strong>Message:</strong><br/>${message}</p>` : ""}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Partner form error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
