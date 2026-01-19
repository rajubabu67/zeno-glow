import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

// Recipient email
const RECIPIENT_EMAIL = "rajkiran.321756@gmail.com";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, projectType, budget, message }: ContactFormData = await req.json();

    console.log("Received contact form submission:", { name, email, projectType, budget });

    // Send email to the business inbox
    const emailResponse = await resend.emails.send({
      from: `${name} via The Zeno Creatives <onboarding@resend.dev>`,
      to: [RECIPIENT_EMAIL],
      reply_to: email,
      subject: `New Project Inquiry from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #0a0a0a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0a0a0a; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%); border-radius: 16px; overflow: hidden; border: 1px solid #2a2a2a;">
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); padding: 32px 40px;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700;">✦ New Project Inquiry</h1>
                      <p style="margin: 8px 0 0; color: rgba(255,255,255,0.9); font-size: 14px;">Someone wants to work with The Zeno Creatives!</p>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px;">
                      <!-- Contact Info -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 32px;">
                        <tr>
                          <td style="padding: 16px 20px; background-color: #1f1f1f; border-radius: 12px; border-left: 4px solid #f97316;">
                            <p style="margin: 0 0 8px; color: #888888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">From</p>
                            <p style="margin: 0; color: #ffffff; font-size: 18px; font-weight: 600;">${name}</p>
                            <p style="margin: 4px 0 0; color: #f97316; font-size: 14px;">${email}</p>
                          </td>
                        </tr>
                      </table>

                      <!-- Project Details -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 32px;">
                        <tr>
                          <td width="50%" style="padding-right: 8px;">
                            <div style="padding: 16px 20px; background-color: #1f1f1f; border-radius: 12px;">
                              <p style="margin: 0 0 4px; color: #888888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Project Type</p>
                              <p style="margin: 0; color: #ffffff; font-size: 16px; font-weight: 500;">${projectType}</p>
                            </div>
                          </td>
                          <td width="50%" style="padding-left: 8px;">
                            <div style="padding: 16px 20px; background-color: #1f1f1f; border-radius: 12px;">
                              <p style="margin: 0 0 4px; color: #888888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Budget</p>
                              <p style="margin: 0; color: #f97316; font-size: 16px; font-weight: 600;">${budget}</p>
                            </div>
                          </td>
                        </tr>
                      </table>

                      <!-- Message -->
                      <div style="padding: 24px; background-color: #1f1f1f; border-radius: 12px;">
                        <p style="margin: 0 0 12px; color: #888888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
                        <p style="margin: 0; color: #e0e0e0; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
                      </div>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="padding: 24px 40px; border-top: 1px solid #2a2a2a;">
                      <p style="margin: 0; color: #666666; font-size: 12px; text-align: center;">
                        This email was sent from the contact form on The Zeno Creatives website.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    console.log("Resend API response:", emailResponse);

    // Check if Resend returned an error
    if (emailResponse.error) {
      console.error("Resend error:", emailResponse.error);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: emailResponse.error.message || "Failed to send email" 
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Email sent successfully:", emailResponse.data);

    return new Response(JSON.stringify({ success: true, data: emailResponse.data }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
