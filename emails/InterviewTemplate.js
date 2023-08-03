import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";
import { Link } from '@react-email/link';
import { Img } from '@react-email/img';

export default function RejectEmail() {
  return (
    <Html>
      <Section style={main}>
        <Container style={container}>
        <Img src="https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/production/podcast_uploaded/22745765/22745765-1673944612760-1d57f610e6e73.jpg" alt="SaghiOMey" width="150" height="150" />
          <Text style={heading}>Hi Dear Milad!</Text>
          <Text style={paragraph}>
              Congrats to you, you are approved for interview by SaghiOMey🎉
          </Text>
          <Text style={paragraph}>
              Please joining at skype, then for accurate time interview please send a message at skype by click below link🙏.
          </Text>
          <Link href="https://join.skype.com/invite/ChQsOGIvbEpf">Skype</Link>
        </Container>
      </Section>
    </Html>
  );
}

// Styles for the email template
const main = {
  backgroundColor: "#ffffff",
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};