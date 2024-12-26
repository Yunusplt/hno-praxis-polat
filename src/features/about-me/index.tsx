"use client";
import { Container } from "@mui/material";
import React from "react";
import { styleContactContainer } from "../contact/style";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { LocalBusiness, WithContext, PostalAddress } from "schema-dts";
import Head from "next/head";

const globalStructuredData: WithContext<LocalBusiness> = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "HNO Praxis Polat",
  description:
    "HNO Praxis Dr. Bahtiyar Polat - Facharzt für Hals-Nasen-Ohren-Heilkunde (HNO) in Esslingen am Neckar mit 18 Jahren Erfahrung.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Martinstraße, 11",
    addressLocality: "Esslingen am Neckar",
    postalCode: "73728",
    addressCountry: "DE",
  } as PostalAddress,
  telephone: "07115 0091363",
  email: "info@hnopolat.de",
  url: "https://hnopraxis.de/ueber-mich",
};

const AboutMe = ({
  metadata,
}: {
  metadata: {
    title: string;
    description: string;
    openGraph: {
      title: string;
      description: string;
      url: string;
      siteName: string;
    };
    twitter: {
      card: string;
      title: string;
      description: string;
    };
  };
}) => {
  return (
    <main>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(globalStructuredData),
          }}
        />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
      </Head>
      <Container
        component={"main"}
        sx={{ ...styleContactContainer, py: "4rem" }}
      >
        <Card sx={{ display: "flex", maxWidth: 600 }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent>
              <Typography
                component="h1"
                variant="h4"
                textAlign={"center"}
                gutterBottom
              >
                Dr tip. Bahtiyar Polat
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{ color: "text.secondary", textAlign: "justify", mb: 2 }}
              >
                Herzlich Willkommen auf meiner Praxis-Webseite! Mein Name ist
                Dr. Bahtiyar Polat, und ich bin Facharzt für
                Hals-Nasen-Ohren-Heilkunde (HNO) mit 18 Jahren Berufserfahrung.
                Nach einer langjährigen Tätigkeit in renommierten Kliniken in
                der Türkei/Deutschland und bisher HNO-Zentrum in Winnenden habe
                ich mich nun dazu entschlossen, meine eigene HNO-Praxis in
                Esslingen am Neckar zu eröffnen, um meinen Patientinnen und
                Patienten eine noch individuellere und persönlichere Betreuung
                zu bieten.
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{ color: "text.secondary", textAlign: "justify" }}
              >
                In meiner neuen Praxis möchte ich einen Raum schaffen, in dem
                Sie sich gut aufgehoben und verstanden fühlen. Ich lege großen
                Wert auf eine vertrauensvolle Zusammenarbeit und nehme mir die
                Zeit, Ihre Beschwerden und Wünsche genau zu besprechen, um
                gemeinsam die beste Therapie für Sie zu finden.
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Container>
    </main>
  );
};

export default AboutMe;
