import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Enable CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed. Please send a POST request.' });
  }

  try {
    const { firstName, lastName, email, phone, projectType, budget, message } = req.body || {};

    // Input validation
    if (!firstName || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields. First Name, Email, and Message are required.',
      });
    }

    const smtpUser = process.env.SMTP_USER || process.env.VITE_SMTP_USER;
    const smtpPass = process.env.SMTP_PASS || process.env.VITE_SMTP_PASS;
    const smtpHost = process.env.SMTP_HOST || process.env.VITE_SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = Number(process.env.SMTP_PORT || process.env.VITE_SMTP_PORT) || 465;
    const smtpSecure = process.env.SMTP_SECURE || process.env.VITE_SMTP_SECURE;
    const isSecure = smtpSecure !== undefined ? smtpSecure === 'true' : smtpPort === 465;

    const recipientEmail = process.env.RECEIVER_EMAIL || process.env.VITE_RECEIVER_EMAIL || smtpUser;

    // Check if SMTP credentials exist
    if (!smtpUser || !smtpPass) {
      const missingVars = [];
      if (!smtpUser) missingVars.push('SMTP_USER');
      if (!smtpPass) missingVars.push('SMTP_PASS');

      console.warn(`SMTP Credentials missing: ${missingVars.join(', ')}`);
      return res.status(500).json({
        success: false,
        message: `Missing SMTP environment variable(s): ${missingVars.join(', ')}. Please check your .env or Vercel environment settings.`,
      });
    }

    const fullName = `${firstName} ${lastName || ''}`.trim();

    // Configure Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: isSecure, // true for 465, false for 587
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const htmlTemplate = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f6f9; margin: 0; padding: 20px; color: #333; }
            .container { max-width: 600px; background: #ffffff; margin: 0 auto; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08); border: 1px solid #e2e8f0; }
            .header { background: #FF8D28; color: #ffffff; padding: 24px 32px; text-align: left; }
            .header h1 { margin: 0; font-size: 24px; font-weight: 700; }
            .header p { margin: 6px 0 0 0; opacity: 0.9; font-size: 14px; }
            .content { padding: 32px; }
            .field-group { margin-bottom: 20px; border-bottom: 1px solid #edf2f7; padding-bottom: 12px; }
            .field-group:last-child { border-bottom: none; }
            .field-label { font-size: 12px; text-transform: uppercase; color: #718096; font-weight: 600; letter-spacing: 0.5px; margin-bottom: 4px; }
            .field-value { font-size: 16px; color: #1a202c; font-weight: 500; }
            .message-box { background: #f8fafc; border-left: 4px solid #FF8D28; padding: 16px; border-radius: 4px; font-size: 15px; line-height: 1.6; color: #2d3748; white-space: pre-wrap; }
            .footer { background: #f7fafc; padding: 16px 32px; text-align: center; font-size: 12px; color: #a0aec0; border-top: 1px solid #edf2f7; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Inquiry Received</h1>
              <p>Mahanagar Properties Contact Form Submission</p>
            </div>
            <div class="content">
              <div class="field-group">
                <div class="field-label">Full Name</div>
                <div class="field-value">${fullName}</div>
              </div>
              <div class="field-group">
                <div class="field-label">Email Address</div>
                <div class="field-value"><a href="mailto:${email}" style="color: #FF8D28; text-decoration: none;">${email}</a></div>
              </div>
              <div class="field-group">
                <div class="field-label">Phone Number</div>
                <div class="field-value">${phone || 'N/A'}</div>
              </div>
              <div class="field-group">
                <div class="field-label">Project Type</div>
                <div class="field-value">${projectType || 'Not specified'}</div>
              </div>
              <div class="field-group">
                <div class="field-label">Budget Range</div>
                <div class="field-value">${budget || 'Not specified'}</div>
              </div>
              <div class="field-group">
                <div class="field-label">Message</div>
                <div class="message-box">${message}</div>
              </div>
            </div>
            <div class="footer">
              This message was sent automatically from Mahanagar Properties contact form.
            </div>
          </div>
        </body>
      </html>
    `;

    const mailOptions = {
      from: `"Mahanagar Properties Inquiries" <${smtpUser}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `New Inquiry from ${fullName} - ${projectType || 'Contact Form'}`,
      text: `New Inquiry from ${fullName}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nProject Type: ${projectType}\nBudget: ${budget}\n\nMessage:\n${message}`,
      html: htmlTemplate,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: 'Email sent successfully!',
    });
  } catch (error) {
    console.error('Error sending email via Nodemailer:', error);
    let errorMsg = error.message || 'Failed to send email.';

    if (error.code === 'EAUTH' || error.responseCode === 535) {
      errorMsg = 'SMTP Authentication failed. For Gmail, make sure to use an App Password (not your normal Google password).';
    }

    return res.status(500).json({
      success: false,
      message: errorMsg,
    });
  }
}
