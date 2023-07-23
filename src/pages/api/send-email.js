import { render } from "@react-email/render";
import ApproveTemplate from "../../../emails/ApproveTemplate";
import RejectTemplate from "../../../emails/RejectTemplate";
import NewsTemplate from "../../../emails/NewsTemplate";
import PublishTemplate from "../../../emails/PublishTemplate";
import InterviewTemplate from "../../../emails/InterviewTemplate";
import { sendEmail } from "../../lib/email";

//http://localhost:3000/api/send-email

export default async function handler(req, res) {
  await sendEmail({
    to: "mohammadreza.khorrami21@gmail.com",
    // subject: "Approve SaghiOMey",
    // subject: "Reject SaghiOMey",
    // subject: "Interview SaghiOMey",
    // subject: "News SaghiOMey",
    // subject: "Publish SaghiOMey",
    
    // html: render(ApproveTemplate()),
    // html: render(RejectTemplate()),
    // html: render(InterviewTemplate()),
    // html: render(NewsTemplate()),
    // html: render(PublishTemplate()),
  });

  return res.status(200).json({ message: "Email sent successfully" });
}