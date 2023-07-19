/* eslint-disable react/no-unescaped-entities */
import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";
import { Link } from '@react-email/link';
import React from "react";

export default function WelcomeEmail() {
  return (
    <Html>
      <Section style={main}>
        <Container style={container}>
          <Text style={heading}>Hi Dear Milad!</Text>
          <Text style={paragraph}>
            Sorry, you're subject isn't appropriate for program SaghiOMey,
          </Text>
          <Text style={paragraph}>
            Please review subjects, it can help you make decision better🙏.
          </Text>
          <Link href="https://saghiomey.netlify.app/">Samples</Link>
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
