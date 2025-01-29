import * as React from "react";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import DeskImage from "@/assets/images/Empfäng.jpg";
import WaitingRoamImage from "@/assets/images/Wartezimmer.jpg";
import TreatmentRoomImage from "@/assets/images/Allgemeine.jpg";
import HearingRoomImage from "@/assets/images/Hörtestzimmer.jpg";
import OpenningHoursTable from "@/features/contact/components/OpenningHoursTable";
import { Box, Container, Typography } from "@mui/material";

export default function TreatmentRoom() {
  return (
    <Container sx={{ my: 15 }}>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          size={12}
          textAlign={{
            xs: "center",
            md: "left",
          }}
        >
          <Typography variant="h4" component="h2">
            Unsere Sprechzeiten
          </Typography>
        </Grid>
        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            "& div": {
              backgroundColor: "#f8f8f8",
              width: "100%",
            },
            "& h2": {
              mb: 2,
            },
          }}
        >
          <OpenningHoursTable />
        </Grid>
        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
          sx={{
            width: "100%",
          }}
        >
          <Box
            sx={{
              "& h3": {
                backgroundColor: "#33333373",
                display: "inline-block",
                p: 1,
                px: 2,
                borderRadius: 3,
              },
              "& img": {
                borderRadius: 3,
                height: {
                  xs: "250px",
                  sm: "320px",
                  md: "280px",
                  lg: "320px",
                },
                width: {
                  xs: "100%",
                  md: "570",
                },
              },
            }}
          >
            <Carousel fade>
              <Carousel.Item interval={2000}>
                <Image src={TreatmentRoomImage} alt="Behandlungszimmer-Bild" />
                <Carousel.Caption>
                  <h3>Behandlungzimmer</h3>
                  {/* <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p> */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <Image src={WaitingRoamImage} alt="Wartezimmer-Bild" />
                <Carousel.Caption>
                  <h3>Wartezimmer</h3>
                  {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <Image src={DeskImage} alt="Empfäng-Bild" />
                <Carousel.Caption>
                  <h3>Empfangsbereich</h3>
                  {/* <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p> */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <Image src={HearingRoomImage} alt="Hörtestzimmer-Bild" />
                <Carousel.Caption>
                  <h3>Hörtestzimmer</h3>
                  {/* <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p> */}
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
