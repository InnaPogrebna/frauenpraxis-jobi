import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail", 
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // const transporter = nodemailer.createTransport({
    //   host: process.env.EMAIL_HOST,
    //   port: Number(process.env.EMAIL_PORT),
    //   secure: true, // true для порта 465, false для других
    //   auth: {
    //     user: process.env.EMAIL_USER,
    //     pass: process.env.EMAIL_PASS,
    //   },
    // });

    const htmlContent = `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <style>
    /* Базовые стили */
    body { margin: 0; padding: 0; background-color: #FCFBFA; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table { border-spacing: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { border: 0; line-height: 100%; outline: none; text-decoration: none; }
    
    .container { font-family: 'Playfair Display', serif, Arial, sans-serif; color: #1e293b; max-width: 600px; margin: 20px auto; border: 1px solid #ffe4e6; border-radius: 40px; overflow: hidden; background-color: #fcfbfa; }
    .header-img { width: 100%; height: auto; min-height: 150px; object-fit: cover; display: block; }
    .content { padding: 40px; }
    .pink-text { color: #e62e7a; }
    .label { font-family: sans-serif; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.2em; color: #e62e7a; margin-bottom: 4px; display: block; }
    .value { font-style: italic; font-size: 18px; margin-bottom: 24px; border-bottom: 1px solid #ffe4e6; padding-bottom: 12px; word-break: break-word; }
    .message-box { background-color: white; padding: 25px; border-radius: 30px; border: 1px solid #ffe4e6; font-style: italic; line-height: 1.6; word-break: break-word; }
    .footer { padding: 20px; text-align: center; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; color: #cbd5e1; }

    @media screen and (max-width: 600px) {
      .container { margin: 0; border-radius: 0; border: none; width: 100% !important; }
      .content { padding: 25px !important; }
      .header-img { min-height: 120px; }
      h1 { font-size: 26px !important; margin-bottom: 30px !important; }
      .value { font-size: 16px !important; }
      .message-box { padding: 20px !important; border-radius: 20px !important; }
    }
  </style>
</head>
<body>
  <div class="container">
    <img 
      src="cid:headerimage"
      alt="Frauenpraxis Nana Jobi" 
      class="header-img"
    >
    <div class="content">
      <h1 style="font-style: italic; font-weight: 400; font-size: 32px; margin: 0 0 40px 0;">
        Neue <span class="pink-text">Anfrage</span> erhalten
      </h1>

      <span class="label">Vor- und Nachname</span>
      <div class="value">${name}</div>

      <span class="label">E-Mail Adresse</span>
      <div class="value">${email}</div>

      <span class="label">Telefon</span>
      <div class="value">${phone || 'Nicht angegeben'}</div>

      <span class="label">Betreff</span>
      <div class="value">${subject}</div>

      <span class="label">Nachricht</span>
      <div class="message-box">
        ${message.replace(/\n/g, '<br/>')}
      </div>
    </div>

    <div class="footer">
      © ${new Date().getFullYear()} Frauenpraxis Nana Jobi • Heilbronn
    </div>
  </div>
</body>
</html>
`;

    const mailOptions = {
        from: `"${name}" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `${subject}: ${name}`,
        html: htmlContent,
        attachments: [
            {
                filename: 'header.jpg',
                path: './public/images/frauenpraxis-nana-jobi-wir-ueber-uns.jpg',
                cid: 'headerimage',
            },
        ],
    };

    // Send
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}