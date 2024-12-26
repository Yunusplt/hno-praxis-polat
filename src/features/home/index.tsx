"use client";
import React from "react";
import DoctorImage from "@/assets/images/doctor.png";
import { Typography, Box, Container } from "@mui/material";
import Image from "next/image";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const HomePage = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Grid container spacing={2} alignItems="center">
        {/* Sol Taraf: Karşılama Mesajı */}
        <Grid size={6}>
          <Item>
            <Box sx={{ textAlign: "left", p: 3 }}>
              <Typography variant="h3" component="h1" gutterBottom>
                Herzlich Willkommen!
              </Typography>
              <Typography variant="h6" component="p" paragraph>
                Es freut uns sehr, Sie auf unserer Homepage begrüßen zu dürfen.
                In unserer HNO-Praxis kümmern wir uns um Ihre Gesundheit mit
                größter Sorgfalt und Professionalität.
              </Typography>
              <Typography variant="h6" component="p" paragraph>
                Ob Hörtests, Allergiebehandlungen oder individuelle Beratungen –
                bei uns sind Sie in besten Händen. Vereinbaren Sie noch heute
                einen Termin und lassen Sie uns gemeinsam für Ihr Wohlbefinden
                sorgen.
              </Typography>
            </Box>
          </Item>
        </Grid>
        {/* Sağ Taraf: Doktor Resmi */}
        <Grid size={6}>
          <Item>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src={DoctorImage}
                alt="Doktor"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
              />
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
