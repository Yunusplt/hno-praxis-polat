import { Box, Container } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Allergologie from "@/assets/images/services/Allergologie.jpg";
import Allgemein from "@/assets/images/services/Allgemein.jpg";
import Bluttest from "@/assets/images/services/Bluttest.jpg";
import Hauttestung from "@/assets/images/services/Hauttestung.jpg";
import Hörgerät from "@/assets/images/services/Hörgerät.jpg";
import Hörstörungen from "@/assets/images/services/Hörstörungen.jpg";
import Hörtest from "@/assets/images/services/Hörtest.jpg";
import Kopfimpulstest from "@/assets/images/services/Kopfimpulstest.jpg";
import Lupenlaryngoskopie from "@/assets/images/services/Lupenlaryngoskopie.jpg";
import Neugeboren from "@/assets/images/services/Neugeboren.jpg";
import Otoakusticher from "@/assets/images/services/otoakusticher.jpg";
import Schwindeldiagnostik from "@/assets/images/services/Schwindeldiagnostik.jpg";
import Sprachstörungen from "@/assets/images/services/Sprachstörungen.jpg";
import Sprachtestung from "@/assets/images/services/Sprachtestung.jpg";
import Tonaudimetrie from "@/assets/images/services/Tonaudimetrie.jpg";
import Tympanometrie from "@/assets/images/services/Tympanometrie.jpg";
import Ultraschalluntersuchungen from "@/assets/images/services/Ultraschalluntersuchungen.jpg";
import { LocalBusiness, PostalAddress, WithContext } from "schema-dts";
import Head from "next/head";

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
      <Container>
        <Typography
          variant="h4"
          component="h1"
          textAlign={"center"}
          sx={{ my: 4 }}
        >
          Unsere Leistungen
        </Typography>
        <Box
          sx={{
            maxWidth: 800,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
            mx: "auto",
          }}
        >
          <Typography variant="body1" component="p" sx={{ mb: 2 }}>
            In unserer Praxis bieten wir Ihnen vollumfängliche diagnostische und
            therapeutische Behandlungsverfahren aus dem gesamten Spektrum des
            HNO-Fachgebietes, angefangen vom Kleinkind bis ins hohe Lebensalter.
          </Typography>
          <Typography variant="body1" component="p" sx={{ mb: 2 }}>
            Durch unsere regelmäßigen Fort- und Weiterbildungen sind wir in der
            Lage, Ihnen die neuesten und innovativsten Untersuchungs- und
            Behandlungsmethoden auf der Basis langjähriger fachärztlicher
            Erfahrung zu gewährleisten.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 2,
            padding: 2,
            bgcolor: "#f5f5f5",
            py: "4rem",
          }}
        >
          <Card sx={{ maxWidth: 300 }}>
            <Image
              src={Allgemein}
              alt="Allgemein"
              width={300}
              height={160}
              priority
            />
            <CardContent
              sx={{
                minHeight: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography variant="h6" component="div" textAlign={"center"}>
                Allgemeine HNO-ärtzliche Untersuchung
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 300 }}>
            <Image
              src={Otoakusticher}
              alt="Otoakusticher"
              width={300}
              height={160}
              priority
            />
            <CardContent
              sx={{
                minHeight: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography variant="h6" component="div" textAlign={"center"}>
                Otoakusticher Emissionstest (OAE)
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 300 }}>
            <Image
              src={Schwindeldiagnostik}
              alt="Schwindeldiagnostik"
              width={300}
              height={160}
              priority
            />
            <CardContent
              sx={{
                minHeight: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography variant="h6" component="div" textAlign={"center"}>
                Schwindeldiagnostik (Vestibularisdiagnostik)
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 300 }}>
            <Image
              src={Allergologie}
              alt="Allergologie"
              width={300}
              height={160}
              priority
            />
            <CardContent
              sx={{
                minHeight: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography variant="h6" component="div" textAlign={"center"}>
                Allergologie
              </Typography>
            </CardContent>
            {/* <CardActions>
              <Button variant="contained" fullWidth>
                Mehr erfahren
              </Button>
            </CardActions> */}
          </Card>
          <Card sx={{ maxWidth: 300 }}>
            <Image
              src={Bluttest}
              alt="Bluttest"
              width={300}
              height={160}
              priority
            />
            <CardContent
              sx={{
                minHeight: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography variant="h6" component="div" textAlign={"center"}>
                Bluttest (RAST)
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 300 }}>
            <Image
              src={Hauttestung}
              alt="Hauttestung"
              width={300}
              height={160}
              priority
            />
            <CardContent
              sx={{
                minHeight: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography variant="h6" component="div" textAlign={"center"}>
                Hauttestung (Pricktest)
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 300 }}>
            <Image
              src={Hörgerät}
              alt="Hörgerät"
              width={300}
              height={160}
              priority
            />
            <CardContent
              sx={{
                minHeight: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography variant="h6" component="div">
                Hörgeräteverordnung und -überprüfung
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 300 }}>
            <Image
              src={Hörstörungen}
              alt="Hörstörungen"
              width={300}
              height={160}
              priority
            />
            <CardContent
              sx={{
                minHeight: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography variant="h6" component="div" textAlign={"center"}>
                Hörstörungen
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 300 }}>
            <Image
              src={Hörtest}
              alt="Hörtest"
              width={300}
              height={160}
              priority
            />
            <CardContent
              sx={{
                minHeight: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography variant="h6" component="div" textAlign={"center"}>
                Hörtestung (Audiometrie)
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 300 }}>
            <Image
              src={Kopfimpulstest}
              alt="Kopfimpulstest"
              width={300}
              height={160}
              priority
            />
            <CardContent
              sx={{
                minHeight: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography variant="h6" component="div" textAlign={"center"}>
                Kopfimpulstest (HIT)
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 300 }}>
            <Image
              src={Lupenlaryngoskopie}
              alt="Lupenlaryngoskopie"
              width={300}
              height={160}
              priority
            />
            <CardContent
              sx={{
                minHeight: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography variant="h6" component="div" textAlign={"center"}>
                Lupenlaryngoskopie
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 300 }}>
            <Image
              src={Neugeboren}
              alt="Neugeboren"
              width={300}
              height={160}
              priority
            />
            <CardContent
              sx={{
                minHeight: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography variant="h6" component="div" textAlign={"center"}>
                Neugeborenen-Hörscreening
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 300 }}>
            <Image
              src={Sprachtestung}
              alt="Sprachtestung"
              width={300}
              height={160}
              priority
            />
            <CardContent
              sx={{
                minHeight: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography variant="h6" component="div" textAlign={"center"}>
                Sprachtestung
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 300 }}>
            <Image
              src={Tonaudimetrie}
              alt="Tonaudimetrie"
              width={300}
              height={160}
              priority
            />
            <CardContent
              sx={{
                minHeight: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography variant="h6" component="div" textAlign={"center"}>
                Tonaudiometrie
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 300 }}>
            <Image
              src={Tympanometrie}
              alt="Tympanometrie"
              width={300}
              height={160}
              priority
            />
            <CardContent
              sx={{
                minHeight: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography variant="h6" component="div" textAlign={"center"}>
                Tympanometrie
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 300 }}>
            <Image
              src={Ultraschalluntersuchungen}
              alt="Ultraschalluntersuchungen"
              width={300}
              height={160}
              priority
            />
            <CardContent
              sx={{
                minHeight: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography variant="h6" component="div" textAlign={"center"}>
                Ultraschalluntersuchungen
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 300 }}>
            <Image
              src={Sprachstörungen}
              alt="Sprachstörungen"
              width={300}
              height={160}
              priority
            />
            <CardContent
              sx={{
                minHeight: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography variant="h6" component="div" textAlign={"center"}>
                Abklärung von Sprachstörungen, Sprache und Stimme
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </main>
  );
};

export default Services;
