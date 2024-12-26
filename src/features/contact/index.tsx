"use client";
import React from "react";
import Grid from "@mui/material/Grid2";
import MapSection from "./components/MapSection";
import LinkSection from "./components/LinksSection";
import OpeningHours from "./components/OpenningHours";
import { styleContactContainer, styleH1 } from "./style";
import { Container, Typography } from "@mui/material";
import Head from "next/head";

const Contact = ({
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
  const globalStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "HNO Praxis Polat",
    description:
      "Kontaktieren Sie die HNO Praxis Dr. Bahtiyar Polat für Hals-Nasen-Ohren-Heilkunde in Esslingen am Neckar.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Martinstraße, 11",
      addressLocality: "Esslingen am Neckar",
      postalCode: "73728",
      addressCountry: "DE",
    },
    telephone: "07115 0091363",
    email: "info@hnopolat.de",
    url: "https://hnopraxis.de/kontakt",
    openingHours: [
      "Mo 09:00-13:00 14:00-17:00",
      "Di 09:00-13:00 14:00-17:00",
      "Mi 09:00-13:30",
      "Do 09:00-13:00 14:00-17:00",
      "Fr 09:00-13:30",
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.74068,
      longitude: 9.31098,
    },
  };

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
      <Container sx={styleContactContainer}>
        <Grid container spacing={3}>
          <Grid size={12}>
            <Typography sx={styleH1} component="h1">
              Kontakt und Sprechzeiten
            </Typography>
          </Grid>
          <LinkSection />
          <OpeningHours />
          <MapSection />
        </Grid>
      </Container>
    </main>
  );
};

export default Contact;
