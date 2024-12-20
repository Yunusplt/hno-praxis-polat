import { Box, Typography } from "@mui/material";
import Image from "next/image";
import HomePageImage from "@/assets/images/WZ3.jpeg";

export default function Home() {
  return (
    <main>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
          width: "100%",
        }}
      >
        {/* Background Image */}
        <Image
          src={HomePageImage}
          alt="HomePage Image"
          fill
          priority
          sizes="100%"
          style={{
            objectFit: "cover",
            objectPosition: "bottom",
            filter: "brightness(95%)",
          }}
        />
        {/* Text */}
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
          <Typography
            sx={{
              position: "absolute",
              top: {
                xs: 60,
                md: 80,
              },
              left: "50%",
              transform: "translateX(-50%)",
            }}
            variant="h2"
            component="h1"
            gutterBottom
            color="warning"
          >
            Herzlich Willkommen!
          </Typography>
          <Box
            sx={{
              maxWidth: 700,
            }}
          >
            <Typography variant="h6" component="p" mt={7}>
              Es freut uns sehr, Sie auf unserer Homepage begrüßen zu dürfen.{" "}
              <br /> In unserer HNO-Praxis kümmern wir uns um Ihre Gesundheit
              mit größter Sorgfalt und Professionalität.
            </Typography>
            <Typography
              variant="h4"
              component="p"
              mt={4}
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: 5,
                color: "#1c81c1  ",
                p: 1,
                fontWeight: "bold",
                fontSize: {
                  xs: "1rem",
                  md: "2rem",
                },
              }}
            >
              Ab Januar 2025 sind wir für Sie da.
            </Typography>
          </Box>
        </Box>
      </Box>
    </main>
  );
}
