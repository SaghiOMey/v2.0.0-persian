import { render } from "@react-email/render";
import WelcomeTemplate from "../../../emails/WelcomeTemplate";
import { sendEmail } from "../../lib/email";

export default async function handler(req, res) {
  await sendEmail({
    to: "mohammadreza.khorrami21@gmail.com",
    subject: "Welcome to NextAPI",
    html: render(WelcomeTemplate()),
  });

  return res.status(200).json({ message: "Email sent successfully" });
}