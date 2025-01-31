import { Box, Container, Grid } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import { LocalBusiness, PostalAddress, WithContext } from "schema-dts";
import Head from "next/head";
import ListComponent from "./components/ListComponent";
import Image from "next/image";
import LesitungenImage from "@/assets/images/services/LeistungenImage.png";
import { styleImageBox } from "./style";

const Services = ({
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
  const globalStructuredData: WithContext<LocalBusiness> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "HNO Praxis Polat",
    description:
      "Entdecken Sie die umfassenden Leistungen der HNO Praxis Dr. Bahtiyar Polat in Esslingen am Neckar. Wir bieten professionelle Diagnosen und Behandlungen.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Martinstraße, 11",
      addressLocality: "Esslingen am Neckar",
      postalCode: "73728",
      addressCountry: "DE",
    } as PostalAddress,
    telephone: "07115 0091363",
    email: "info@hnopolat.de",
    url: "https://hnopraxis.de/leistungen",
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
      <Container sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          textAlign={"center"}
          sx={{ my: 4 }}
        >
          Unsere Leistungen
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <ListComponent />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={styleImageBox}>
              <Image
                src={LesitungenImage}
                fill
                alt="Lesitungen-Bilder"
                priority
                sizes="100%"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

export default Services;
