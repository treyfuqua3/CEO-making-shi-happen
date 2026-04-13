import { Resend } from "resend"
import { NextResponse } from "next/server"

function getResendClient() {
  return new Resend(process.env.RESEND_API_KEY)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, company, email, phone, projectType, message } = body

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required." },
        { status: 400 }
      )
    }

    const resend = getResendClient()
    await resend.emails.send({
      from: "Fuqua Finishes Website <onboarding@resend.dev>",
      to: "trey.fuqua@trubath.com",
      subject: `New Quote Request from ${name}`,
      replyTo: email,
      html: `
        <h2>New Quote Request — Fuqua Finishes LLC</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr>
            <td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Name</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;">${name}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Company</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;">${company || "N/A"}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Email</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Phone</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;"><a href="tel:${phone}">${phone}</a></td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Project Type</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;">${projectType || "Not specified"}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Message</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;">${message || "No message provided"}</td>
          </tr>
        </table>
        <p style="margin-top:20px;color:#666;font-size:12px;">
          Sent from the Fuqua Finishes LLC website contact form.
        </p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    )
  }
}
