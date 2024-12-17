"use client";
import { Container } from "@mui/material";
import React from "react";
import { styleContactContainer } from "../contact/style";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import ProfileImage1 from "@/assets/images/TeamBild1.jpg";
import ProfileImage2 from "@/assets/images/TeamBild2.jpg";
import ProfileImage3 from "@/assets/images/TeamBild3.jpg";

const TeamPage = () => {
  return (
    <Container sx={{ ...styleContactContainer, py: "4rem" }}>
      <Card sx={{ display: "flex", minWidth: 600 }}>
        <Image
          src={ProfileImage1}
          alt="Dr med. Bahtiyar Polat"
          width={255}
          height={170}
          priority
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              Dr med. Bahtiyar Polat
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
      <Card sx={{ display: "flex", minWidth: 600 }}>
        <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              Frau XXXXXXX XXXXXXXX
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ color: "text.secondary" }}
            >
              Medizinische Fachangestellte
            </Typography>
          </CardContent>
        </Box>
        <Image
          src={ProfileImage2}
          alt="XXXXXXX XXXXXXXX"
          width={255}
          height={170}
          priority
        />
      </Card>
      <Card sx={{ display: "flex", minWidth: 600 }}>
        <Image
          src={ProfileImage3}
          alt="Frau Saide Polat"
          width={255}
          height={170}
          priority
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              Frau Saide Polat
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ color: "text.secondary" }}
            >
              Empfangsmitarbeiter
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Container>
  );
};

export default TeamPage;
