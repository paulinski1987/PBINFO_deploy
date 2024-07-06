import nodemailer from 'nodemailer';

export async function sxmTl(NAME, EMAIL, PHONE, DESC){
  const MAILBODY = `${new Date()}\nName: ${NAME}\nEmail: ${EMAIL}\nPhone: ${PHONE}\n\nDescription:${DESC}`;
  const transporter = nodemailer.createTransport({
    host: "live.smtp.mailtrap.io",
    port: 587,
    auth: {
      user: "api",
      pass: "397fe2d90c95dabbf58fd3819a0903cf"
    }
  });

  const info = await transporter.sendMail({
    from: "noreply@paulbanks.info",
    to: "mathewp9876@protonmail.com",
    subject: "Service Request",
    text: MAILBODY
  });
  console.log("Message sent: %s", info.messageId);

}