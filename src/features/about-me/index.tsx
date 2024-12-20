"use client";
import { Container } from "@mui/material";
import React from "react";
import { styleContactContainer } from "../contact/style";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import ProfileImage1 from "@/assets/images/Doctor2.jpg";

const AboutMe = () => {
  return (
    <Container sx={{ ...styleContactContainer, py: "4rem" }}>
      <Card sx={{ display: "flex", minWidth: 600 }}>
        <Image
          src={ProfileImage1}
          alt="Dr med. Bahtiyar Polat"
          width={300}
          height={450}
          priority
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent>
            <Typography component="div" variant="h5">
              Dr tip. Bahtiyar Polat
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ color: "text.secondary" }}
            >
              Facharzt für Hals-Nasen-Ohrenheilkunde
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Container>
  );
};

export default AboutMe;
