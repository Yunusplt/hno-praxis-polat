import React from "react";
import Head from "next/head";
import { Container } from "@mui/material";
import { LocalBusiness, WithContext, PostalAddress } from "schema-dts";

export const metadata = {
  title: "Impressum - HNO Praxis Polat",
  description:
    "Impressum der HNO Praxis Polat, Dr. Tip. Bahtiyar Polat in Esslingen am Neckar. Kontaktinformationen und rechtliche Hinweise.",
  openGraph: {
    title: "Impressum - HNO Praxis Polat",
    description:
      "Impressum der HNO Praxis Polat, Dr. Tip. Bahtiyar Polat in Esslingen am Neckar. Kontaktinformationen und rechtliche Hinweise.",
    url: "https://hnopraxis.de/impressum",
    siteName: "HNO Praxis Polat",
  },
  twitter: {
    card: "summary",
    title: "Impressum - HNO Praxis Polat",
    description:
      "Impressum der HNO Praxis Polat, Dr. Tip. Bahtiyar Polat in Esslingen am Neckar. Kontaktinformationen und rechtliche Hinweise.",
  },
};

const globalStructuredData: WithContext<LocalBusiness> = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "HNO Praxis Polat",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Martinstraße, 11",
    addressLocality: "Esslingen am Neckar",
    postalCode: "73728",
    addressCountry: "DE",
  } as PostalAddress,
  telephone: "07115 0091363",
  email: "info@hnopolat.de",
  url: "https://hnopraxis.de/impressum",
};

const Impressum = () => {
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
        sx={{
          py: "4rem",
          "& h1": {
            mb: 3,
            textAlign: "center",
          },

          "& h2": {
            my: 2,
          },
          "& p": {
            mb: 1,
          },
        }}
      >
        <h1>Impressum</h1>
        <p>Dr. Tip. Bahtiyar Polat</p>
        <p>HNO Praxis Polat</p>
        <p>Martinstraße, 11</p>
        <p>73728 Esslingen am Neckar</p>
        <h2>Kontakt</h2>
        <p>Telefon: 07115 0091363</p>
        <p>E-Mail: info@hnopolat.de</p>
        <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
        <p>Berufsbezeichnung:</p>
        <p>HNO Praxis Polat</p>
        <h2>EU-Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit: <br />
          <a href="https://ec.europa.eu/consumers/odr/">
            https://ec.europa.eu/consumers/odr/.
          </a>
        </p>

        <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
        <h2>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
        <p>
          Quelle: <br />
          <a href="https://www.e-recht24.de">https://www.e-recht24.de</a>
        </p>
      </Container>
    </main>
  );
};

export default Impressum;
