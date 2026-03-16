import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      companyName,
      contactName,
      email,
      phone,
      website,
      companyDescription,
      productDescription,
      targetAudience,
      logoUrl,
      brandGuidelinesUrl,
      taglines,
      avoidPhrases,
      promotionOffer,
      preferredLandingPage,
      highlightedFeatures,
      desiredAction,
      teamCoordination,
      disclaimers,
      additionalNotes,
    } = body;

    if (!companyName || !contactName || !email) {
      return NextResponse.json(
        { error: "Company name, contact name, and email are required" },
        { status: 400 }
      );
    }

    const row = (label: string, value: string | undefined) =>
      value ? `<p><strong>${label}:</strong><br/>${value}</p>` : "";

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "ryan@ryanestes.info",
      subject: "New Brand Onboarding Submission",
      html: `
        <h2>New Brand Onboarding Submission</h2>
        ${row("Company Name", companyName)}
        ${row("Contact Name", contactName)}
        ${row("Email", email)}
        ${row("Phone", phone)}
        ${row("Website", website)}
        ${row("Company Description", companyDescription)}
        ${row("Product/Service Description", productDescription)}
        ${row("Target Audience / ICP", targetAudience)}
        ${row("Logo & Brand Assets URL", logoUrl)}
        ${row("Additional Creative Assets URL", brandGuidelinesUrl)}
        ${row("Taglines & Brand Language", taglines)}
        ${row("Language to Avoid", avoidPhrases)}
        ${row("Promotion Offer", promotionOffer)}
        ${row("Preferred Landing Page", preferredLandingPage)}
        ${row("Features to Highlight", highlightedFeatures)}
        ${row("Desired Listener Action", desiredAction)}
        ${row("Team Coordination", teamCoordination)}
        ${row("Disclaimers & Compliance", disclaimers)}
        ${row("Additional Notes", additionalNotes)}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Brand onboarding form error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
