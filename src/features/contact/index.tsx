"use client";
import React from "react";
import Grid from "@mui/material/Grid2";
import MapSection from "./components/MapSection";
import LinkSection from "./components/LinksSection";
import OpeningHours from "./components/OpenningHours";
import { styleContactContainer, styleH1 } from "./style";
import { Container, Typography } from "@mui/material";

const Contact = () => {
  return (
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
  );
};

export default Contact;
