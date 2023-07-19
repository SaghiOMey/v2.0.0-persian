import { render } from "@react-email/render";
import ApproveTemplate from "../../../emails/ApproveTemplate";
import { sendEmail } from "../../lib/email";

//http://localhost:3000/api/send-email

export default async function handler(req, res) {
  await sendEmail({
    to: "mohammadreza.khorrami21@gmail.com",
    subject: "Approve SaghiOMey",
    html: render(ApproveTemplate()),
  });

  return res.status(200).json({ message: "Email sent successfully" });
}