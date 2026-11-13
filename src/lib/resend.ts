import { Resend } from 'resend';

export interface EnquiryPayload {
  referenceId: string;
  receivedAt: string;
  client: {
    name: string;
    company: string;
    email: string;
    phone: string;
  };
  project: {
    service: string;
    budget: string;
    description: string;
  };
}

export interface SendEmailResult {
  success: boolean;
  id?: string;
  error?: string;
  skipped?: boolean;
}

// Target recipient address
export const DEFAULT_RECEIVER_EMAIL = 'motivetechnologies1@gmail.com';

// Sender identity - defaults to Resend testing domain until custom domain is verified
export const DEFAULT_FROM_EMAIL = 'Motive Technologies <onboarding@resend.dev>';

/**
 * Builds a styled, responsive HTML email template for new project inquiries.
 */
function buildEnquiryEmailHtml(enquiry: EnquiryPayload): string {
  const { referenceId, receivedAt, client, project } = enquiry;
  const formattedDate = new Date(receivedAt).toLocaleString('en-US', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'medium',
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Project Enquiry - Motive Technologies</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #111111; line-height: 1.5;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f4f4f5; padding: 32px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08); border: 1px solid #e4e4e7;">
          
          <!-- Header Banner -->
          <tr>
            <td style="background-color: #111111; padding: 28px 32px; border-bottom: 3px solid #ED1C2E;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td>
                    <div style="font-size: 11px; font-weight: 700; letter-spacing: 2px; color: #ED1C2E; text-transform: uppercase; font-family: monospace;">
                      Motive Technologies &bull; Inbound Lead
                    </div>
                    <h1 style="margin: 6px 0 0 0; color: #ffffff; font-size: 20px; font-weight: 700; letter-spacing: -0.02em;">
                      New Project Enquiry Received
                    </h1>
                  </td>
                  <td align="right" valign="top">
                    <span style="display: inline-block; background-color: #27272a; color: #a1a1aa; font-size: 11px; font-family: monospace; padding: 4px 8px; border-radius: 4px; border: 1px solid #3f3f46;">
                      ${referenceId}
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Summary Alert -->
          <tr>
            <td style="padding: 24px 32px 16px 32px;">
              <div style="background-color: #fef2f2; border-left: 4px solid #ED1C2E; padding: 12px 16px; border-radius: 4px; font-size: 13px; color: #991b1b;">
                <strong>Action Required:</strong> A potential client has submitted a technical scope via the website inquiry form.
              </div>
            </td>
          </tr>

          <!-- Client Information Card -->
          <tr>
            <td style="padding: 0 32px 20px 32px;">
              <h2 style="font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; color: #71717a; margin: 0 0 12px 0; font-family: monospace;">
                Client Credentials
              </h2>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #fafafa; border: 1px solid #e4e4e7; border-radius: 8px;">
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e4e4e7; width: 35%; font-size: 12px; color: #71717a; font-weight: 600;">
                    Full Name
                  </td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e4e4e7; font-size: 14px; color: #111111; font-weight: 600;">
                    ${client.name}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e4e4e7; font-size: 12px; color: #71717a; font-weight: 600;">
                    Company / Organization
                  </td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e4e4e7; font-size: 14px; color: #111111; font-weight: 600;">
                    ${client.company}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e4e4e7; font-size: 12px; color: #71717a; font-weight: 600;">
                    Email Address
                  </td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e4e4e7; font-size: 13px;">
                    <a href="mailto:${client.email}" style="color: #ED1C2E; text-decoration: none; font-weight: 600;">
                      ${client.email}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; font-size: 12px; color: #71717a; font-weight: 600;">
                    Telephone / WhatsApp
                  </td>
                  <td style="padding: 12px 16px; font-size: 13px;">
                    <a href="tel:${client.phone.replace(/\s+/g, '')}" style="color: #111111; text-decoration: none; font-family: monospace; font-weight: 600;">
                      ${client.phone}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Scope & Requirements Card -->
          <tr>
            <td style="padding: 0 32px 24px 32px;">
              <h2 style="font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; color: #71717a; margin: 0 0 12px 0; font-family: monospace;">
                Technical Scope &amp; Budget
              </h2>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #fafafa; border: 1px solid #e4e4e7; border-radius: 8px;">
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e4e4e7; width: 35%; font-size: 12px; color: #71717a; font-weight: 600;">
                    Requested Capability
                  </td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e4e4e7; font-size: 14px; color: #111111; font-weight: 700;">
                    <span style="background-color: #fee2e2; color: #991b1b; padding: 2px 8px; border-radius: 4px; font-size: 12px;">
                      ${project.service}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e4e4e7; font-size: 12px; color: #71717a; font-weight: 600;">
                    Budget Tier
                  </td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e4e4e7; font-size: 13px; color: #111111; font-weight: 600;">
                    ${project.budget}
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="padding: 16px;">
                    <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #71717a; font-weight: 600; margin-bottom: 6px;">
                      Description of Objectives:
                    </div>
                    <div style="background-color: #ffffff; border: 1px solid #e4e4e7; border-radius: 6px; padding: 14px; font-size: 13px; line-height: 1.6; color: #27272a; white-space: pre-wrap; font-family: inherit;">
${project.description}
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Quick Action CTA -->
          <tr>
            <td style="padding: 0 32px 32px 32px;" align="center">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td align="center" style="border-radius: 6px; background-color: #ED1C2E;">
                    <a href="mailto:${client.email}?subject=${encodeURIComponent(`Re: Project Enquiry [${referenceId}] - Motive Technologies`)}" target="_blank" style="display: inline-block; padding: 12px 28px; font-size: 13px; font-weight: 700; color: #ffffff; text-decoration: none; letter-spacing: 0.5px; text-transform: uppercase;">
                      Reply to ${client.name} &rarr;
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer Metadata -->
          <tr>
            <td style="background-color: #f4f4f5; padding: 20px 32px; border-top: 1px solid #e4e4e7; font-size: 11px; color: #71717a; text-align: center;">
              <div>
                Logged at: <strong>${formattedDate} (IST)</strong> &bull; Ref: <strong>${referenceId}</strong>
              </div>
              <div style="margin-top: 4px;">
                Motive Technologies Web Dispatcher &bull; <a href="https://www.motivetechnologies.in" style="color: #71717a; text-decoration: underline;">www.motivetechnologies.in</a>
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

/**
 * Builds a clean plain-text version for email clients that do not render HTML.
 */
function buildEnquiryEmailText(enquiry: EnquiryPayload): string {
  const { referenceId, receivedAt, client, project } = enquiry;

  return `
============================================================
MOTIVE TECHNOLOGIES - NEW PROJECT ENQUIRY
============================================================
Reference ID: ${referenceId}
Received At : ${receivedAt}

CLIENT DETAILS:
------------------------------------------------------------
Full Name   : ${client.name}
Company     : ${client.company}
Email       : ${client.email}
Phone       : ${client.phone}

PROJECT SCOPE:
------------------------------------------------------------
Service     : ${project.service}
Budget Tier : ${project.budget}

DESCRIPTION:
------------------------------------------------------------
${project.description}

============================================================
Direct Reply: mailto:${client.email}
Dispatch Source: Motive Technologies Inbound Form
============================================================
`.trim();
}

/**
 * Sends a contact enquiry notification email to the configured recipient (motivetechnologies1@gmail.com).
 */
export async function sendContactEnquiryEmail(enquiry: EnquiryPayload): Promise<SendEmailResult> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey || apiKey.trim() === '') {
    console.warn(
      '[RESEND] Warning: RESEND_API_KEY is not defined. Email dispatch skipped. ' +
      'To enable live email delivery to motivetechnologies1@gmail.com, set RESEND_API_KEY in your environment.'
    );
    return {
      success: false,
      skipped: true,
      error: 'RESEND_API_KEY environment variable is missing.',
    };
  }

  const resend = new Resend(apiKey);
  const recipient = process.env.CONTACT_RECEIVER_EMAIL || DEFAULT_RECEIVER_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL || DEFAULT_FROM_EMAIL;

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [recipient],
      replyTo: enquiry.client.email,
      subject: `[New Inquiry] ${enquiry.client.name} (${enquiry.client.company}) - ${enquiry.project.service} [${enquiry.referenceId}]`,
      html: buildEnquiryEmailHtml(enquiry),
      text: buildEnquiryEmailText(enquiry),
    });

    if (error) {
      console.error('[RESEND] API Error dispatching enquiry email:', error);
      return {
        success: false,
        error: error.message,
      };
    }

    console.log(`[RESEND] Inquiry notification successfully sent to ${recipient}. Email ID: ${data?.id}`);
    return {
      success: true,
      id: data?.id,
    };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error during email dispatch';
    console.error('[RESEND] Unexpected error while calling Resend:', err);
    return {
      success: false,
      error: message,
    };
  }
}

