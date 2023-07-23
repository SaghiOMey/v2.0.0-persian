/* eslint-disable react/no-unescaped-entities */
import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";
import { Link } from '@react-email/link';
import { Img } from '@react-email/img';

export default function NewsEmail() {
  return (
    <Html>
      <Section style={main}>
        <Container style={container}>
        <Link href="https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/production/podcast_uploaded/22745765/22745765-1673944612760-1d57f610e6e73.jpg" download>
        <Img src="https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/production/podcast_uploaded/22745765/22745765-1673944612760-1d57f610e6e73.jpg" alt="SaghiOMey" width="150" height="150" />
        </Link>
          <Text style={heading}>Hi Dear Milad!</Text>
          <Text style={paragraph}>
             You're episode will be publishing as soon as🎉
          </Text>
          <Text style={paragraph}>
             So, you can see it on below link.
          </Text>
          <Link href="/">News</Link>
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
