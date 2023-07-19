import nodemailer from "nodemailer"



// Replace with your SMTP credentials
const smtpOptions = {
    host: process.env.SMTP_HOST || "sandbox.smtp.mailtrap.io",
    port: parseInt(process.env.SMTP_PORT || "2525"),
    secure: true,
    auth: {
      user: process.env.SMTP_USER || "0ba92a9b4fb137",
      pass: process.env.SMTP_PASSWORD || "********f085",
    },
}

export const sendEmail = async (data) => {
    const transporter = nodemailer.createTransport({
      ...smtpOptions,
    })
  
    return await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL,
      ...data,
    })
}