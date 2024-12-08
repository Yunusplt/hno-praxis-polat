import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import Logo from "../assets/images/HNO_Polat_Color.png";
import Image from "next/image";

const HomePage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        backgroundImage: "url('/background.jpg')", // Arka plan resmi eklemek isterseniz
        backgroundColor: "#E8F5E9", // Hafif yeşil tonlarında bir arka plan
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: 2,
        gap: 8,
      }}
    >
      <Image src={Logo} alt="HNO Polat Logo" width={283} height={86} />

      <Container
        maxWidth="sm"
        sx={{
          backgroundColor: "#ffffff",
          borderRadius: 3,
          boxShadow: 3,
          padding: 4,
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#15427c", // HNO için yeşil bir ton
          }}
        >
          Herzlich Willkommen
        </Typography>
        <Typography
          variant="h6"
          align="center"
          gutterBottom
          sx={{
            color: "#1b7fc1", // Daha koyu bir yeşil ton
          }}
        >
          Ab Januar sind wir für Sie da!
        </Typography>
        <Typography
          variant="body1"
          align="center"
          gutterBottom
          sx={{
            color: "#1b7fc1", // Nötr bir gri ton
          }}
        >
          Wir freuen uns, Sie in unserer neuen HNO-Praxis begrüßen zu dürfen.
        </Typography>
        <Grid container justifyContent="center" sx={{ mt: 3 }}>
          <Grid item>
            <Paper
              elevation={1}
              sx={{
                padding: 2,
                backgroundColor: "#E8F5E9",
                borderRadius: 2,
              }}
            >
              <Typography
                variant="body2"
                align="center"
                sx={{ fontWeight: "bold", color: "#15427c" }}
              >
                Adresse:
              </Typography>
              <Typography
                variant="body1"
                align="center"
                sx={{
                  color: "#1b7fc1",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Martinstraße+11,+73728+Esslingen+am+Neckar"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Martinstraße 11, 73728 Esslingen am Neckar
                </a>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;
