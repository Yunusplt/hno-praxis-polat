import { Box, Typography } from "@mui/material";
import Image from "next/image";
import HomePageImage from "@/assets/images/HomePageImage.jpg";

export default function Home() {
  return (
    <main>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        {/* Arka Plan Resmi */}
        <Image
          src={HomePageImage}
          alt="HomePage Image"
          fill
          priority
          sizes="100%"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            filter: "brightness(70%)", // Opaklık efekti
          }}
        />

        {/* Metin Alanı */}
        <Box
          sx={{
            position: "absolute",
            textAlign: "center",
            p: 3,
            color: "white", // Yazı rengi
            backgroundColor: "rgba(0, 0, 0, 0.3)", // Hafif siyah arka plan opaklık
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              maxWidth: 800,
            }}
          >
            <Typography variant="h3" component="h1" gutterBottom>
              Herzlich Willkommen!
            </Typography>
            <Typography variant="h6" component="p" paragraph>
              Es freut uns sehr, Sie auf unserer Homepage begrüßen zu dürfen. In
              unserer HNO-Praxis kümmern wir uns um Ihre Gesundheit mit größter
              Sorgfalt und Professionalität.
            </Typography>
            <Typography variant="h6" component="p" paragraph>
              Ob Hörtests, Allergiebehandlungen oder individuelle Beratungen –
              bei uns sind Sie in besten Händen. Vereinbaren Sie noch heute
              einen Termin und lassen Sie uns gemeinsam für Ihr Wohlbefinden
              sorgen.
            </Typography>
          </Box>
        </Box>
      </Box>
    </main>
  );
}
