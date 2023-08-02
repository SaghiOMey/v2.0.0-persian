import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";
import { Button } from "@react-email/button";
import { Tailwind } from "@react-email/tailwind";
import { Img } from '@react-email/img';

export default function WelcomeEmail() {
  return (
    <Html>
      <Section style={main}>
      <Container style={container}>
      <Img src="https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/production/podcast_uploaded/22745765/22745765-1673944612760-1d57f610e6e73.jpg" alt="SaghiOMey" width="150" height="150" />
          <Text style={heading}>Hi Dear Ana!</Text>
          <Text style={paragraph}>
            Congrats to you, you are eligible for interview by SaghiOMey🎉
          </Text>
          <Text style={paragraph}>
             Please first sign in the site then fill form by click below button(After 5 days have passed, please ignore this email).
          </Text>
          <Tailwind
            config={{
              theme: {
                extend: {
                  colors: {
                    brand: "#009191",
                  },
                },
              },
            }}
          >
            <Button
              href="https://saghiomey.netlify.app/Guest/..."
              className="bg-brand px-3 py-2 font-medium leading-4 text-white"
            >
              Click me
            </Button>
          </Tailwind>
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